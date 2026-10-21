import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
  studentAppEnvironment,
  studentApiRelativePath,
  testDatabaseUrl,
} from '../student-context.mjs';
import { findSuiteTests, findTests } from '../test-files.mjs';

const cwd = fileURLToPath(new URL('../../', import.meta.url));

function run(script, args, env = process.env) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd,
    env,
    encoding: 'utf8',
  });
}

test('student commands reject invalid or escaping IDs before running code', () => {
  for (const id of ['RB0', 'RB01', 'RB21', 'RB99', '../RB1']) {
    for (const [script, args] of [
      ['scripts/run-student-api.mjs', [id]],
      ['scripts/run-tests.mjs', ['--student', id]],
    ]) {
      const result = run(script, args);
      assert.equal(result.status, 1);
      assert.match(result.stderr, /RB1 through RB20/);
    }
  }
});

test('RB11 through RB15 reach normal runner checks in isolated empty workspaces', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'merchantdesk-roster-'));
  const runFixture = (args, env = process.env) =>
    spawnSync(process.execPath, args, { cwd: root, env, encoding: 'utf8' });
  try {
    for (const student of ['RB11', 'RB12', 'RB13', 'RB14', 'RB15']) {
      await mkdir(path.join(root, 'students', student), { recursive: true });
      const api = runFixture([
        path.join(cwd, 'scripts/run-student-api.mjs'),
        student,
      ]);
      assert.equal(api.status, 1);
      assert.match(api.stderr, /Create your Week 6 API shell first/);
      const tests = runFixture([
        path.join(cwd, 'scripts/run-tests.mjs'),
        '--student',
        student,
      ]);
      assert.equal(tests.status, 1);
      assert.match(
        tests.stderr,
        new RegExp('No fast tests found for ' + student),
      );
      const migration = runFixture(
        [
          '--import',
          import.meta.resolve('tsx'),
          path.join(cwd, 'fixtures/migrate.ts'),
          'practice',
          'students/' + student + '/week-08/database/migrations',
        ],
        { ...process.env, TEST_DATABASE_URL: '' },
      );
      assert.equal(migration.status, 1);
      assert.match(migration.stderr, /Configure the dedicated database URL/);
    }
  } finally {
    // Only remove the fresh temporary workspaces owned by this test.
    assert.equal(path.dirname(path.resolve(root)), path.resolve(tmpdir()));
    assert.ok(path.basename(root).startsWith('merchantdesk-roster-'));
    await rm(root, { recursive: true, force: true });
  }
});

test('test launcher rejects missing IDs, unknown options and duplicate flags', () => {
  for (const args of [
    ['--student'],
    ['--unknown'],
    ['--db', '--db'],
    ['--student', 'RB1', '--student', 'RB2'],
    ['--student', 'RB1', 'extra'],
  ]) {
    const result = run('scripts/run-tests.mjs', args);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Usage:|RB1 through RB20/);
  }
});

test('student environment selects its lab schema without product fallback', () => {
  const input = {
    DATABASE_URL: 'postgresql://qa@localhost/merchantdesk',
    TEST_DATABASE_URL: 'postgresql://qa@localhost/merchantdesk_test',
  };
  const environment = studentAppEnvironment('RB3', input);
  assert.equal(environment.DATABASE_URL, input.TEST_DATABASE_URL);
  assert.equal(environment.DATABASE_SCHEMA, 'lab_rb3');
  assert.equal(input.DATABASE_URL, 'postgresql://qa@localhost/merchantdesk');
  assert.equal(
    studentAppEnvironment('RB1', { DATABASE_URL: input.DATABASE_URL })
      .DATABASE_URL,
    undefined,
  );
});

test('database validation rejects unsafe configuration without leaking credentials', () => {
  assert.equal(
    testDatabaseUrl('postgresql://qa@localhost/merchantdesk_test', true),
    'postgresql://qa@localhost/merchantdesk_test',
  );
  for (const connection of [
    undefined,
    'postgresql://qa:SHOULD_NOT_BE_LOGGED@localhost/merchantdesk',
    'https://qa:SHOULD_NOT_BE_LOGGED@localhost/merchantdesk_test',
    'postgresql://qa:REPLACE_LOCALLY@localhost/merchantdesk_test',
  ]) {
    assert.throws(
      () => testDatabaseUrl(connection, true),
      (error) =>
        /_test/.test(error.message) &&
        !/SHOULD_NOT_BE_LOGGED|REPLACE_LOCALLY/.test(error.message),
    );
  }
});

test('shared and student DB commands reject unsafe configuration before connecting', () => {
  const env = {
    ...process.env,
    TEST_DATABASE_URL:
      'postgresql://qa:SHOULD_NOT_BE_LOGGED@localhost/merchantdesk',
  };
  for (const args of [['--db'], ['--db', '--student', 'RB1']]) {
    const result = run('scripts/run-tests.mjs', args, env);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /_test/);
    assert.equal(
      (result.stdout + result.stderr).includes('SHOULD_NOT_BE_LOGGED'),
      false,
    );
  }
});

test('migration commands reject malformed URLs without printing credentials', () => {
  for (const mode of ['practice', 'product']) {
    for (const connection of [
      'postgresql://qa:SHOULD_NOT_BE_LOGGED@[badhost]/merchantdesk_test',
      'postgresql://qa:SHOULD_NOT_BE_LOGGED@localhost/%FF_test',
      'https://qa:SHOULD_NOT_BE_LOGGED@localhost/merchantdesk_test',
    ]) {
      const result = run(
        '--import',
        [
          'tsx',
          'fixtures/migrate.ts',
          mode,
          'students/RB1/week-08/database/migrations',
        ],
        {
          ...process.env,
          TEST_DATABASE_URL: connection,
          DATABASE_URL: connection,
        },
      );
      assert.equal(result.status, 1);
      assert.match(result.stderr, /valid PostgreSQL database URL/);
      assert.equal(
        (result.stdout + result.stderr).includes('SHOULD_NOT_BE_LOGGED'),
        false,
      );
    }
  }
});

test('practice migrations reject stale and escaping paths before connecting', () => {
  for (const directory of [
    'students/RB1/week-06/database/migrations',
    'students/RB99/week-08/database/migrations',
    '../students/RB1/week-08/database/migrations',
    'shared/database/migrations',
  ]) {
    const result = run(
      '--import',
      ['tsx', 'fixtures/migrate.ts', 'practice', directory],
      {
        ...process.env,
        TEST_DATABASE_URL:
          'postgresql://qa:SHOULD_NOT_BE_LOGGED@localhost/merchantdesk_test',
      },
    );
    assert.equal(result.status, 1);
    assert.match(result.stderr, /week-08\/database\/migrations/);
    assert.equal(
      (result.stdout + result.stderr).includes('SHOULD_NOT_BE_LOGGED'),
      false,
    );
  }
});

test('test discovery separates database tests and includes tooling tests', async () => {
  const product = fileURLToPath(
    new URL('../../shared/api/test/', import.meta.url),
  );
  const fast = await findTests(product, false);
  const database = await findTests(product, true);
  assert.ok(fast.length > 0);
  assert.ok(database.length > 0);
  assert.ok(fast.every((file) => !file.endsWith('.db.test.ts')));
  assert.ok(database.every((file) => file.endsWith('.db.test.ts')));
  const tooling = await findTests(
    fileURLToPath(new URL('./', import.meta.url)),
    false,
  );
  assert.ok(tooling.some((file) => file.endsWith('student-runners.test.mjs')));
});

test('default suites include authored student tests and propagate their failures', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'merchantdesk-suite-'));
  try {
    const shared = path.join(root, 'shared/api/test');
    const simulator = path.join(root, 'shared/simulator/test');
    const databaseTests = path.join(root, 'shared/database/test');
    const tooling = path.join(root, 'scripts/test');
    const student = path.join(root, 'students/RB1/week-05');
    for (const directory of [
      shared,
      simulator,
      databaseTests,
      tooling,
      student,
    ])
      await mkdir(directory, { recursive: true });
    await writeFile(path.join(shared, 'passing.test.mjs'), '');
    const simulatorTest = path.join(simulator, 'summary.test.mjs');
    await writeFile(simulatorTest, '');
    const sharedDb = path.join(databaseTests, 'migration.db.test.mjs');
    await writeFile(sharedDb, '');
    const broken = path.join(student, 'broken.test.mjs');
    await writeFile(broken, "throw new Error('intentional student failure');");
    const db = path.join(student, 'persistence.db.test.mjs');
    await writeFile(db, '');

    const fast = await findSuiteTests(root, undefined, false);
    assert.ok(fast.includes(broken));
    assert.ok(fast.includes(simulatorTest));
    assert.ok(!fast.includes(sharedDb));
    assert.ok(!fast.includes(db));
    const environment = { ...process.env };
    delete environment.NODE_TEST_CONTEXT;
    const result = spawnSync(process.execPath, ['--test', ...fast], {
      encoding: 'utf8',
      env: environment,
    });
    assert.notEqual(result.status, 0);
    assert.match(result.stdout + result.stderr, /intentional student failure/);
    assert.deepEqual(
      await findSuiteTests(root, undefined, true),
      [sharedDb, db].sort(),
    );
    assert.deepEqual(await findSuiteTests(root, 'RB1', false), [broken]);
  } finally {
    // Remove only this test's newly created temporary fixture tree.
    await rm(root, { recursive: true, force: true });
  }
});

test('student API paths use the Week 6 continuing factory and reject escaping IDs', () => {
  assert.equal(
    studentApiRelativePath('RB1'),
    'students/RB1/week-06/api/server.ts',
  );
  assert.equal(
    studentApiRelativePath('RB10'),
    'students/RB10/week-06/api/server.ts',
  );
  assert.throws(() => studentApiRelativePath('../RB1'), /RB1 through RB20/);
});
