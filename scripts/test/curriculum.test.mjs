import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import {
  parseStudentId,
  studentAppEnvironment,
  studentApiRelativePath,
} from '../student-context.mjs';
import { verifyCurriculumReferences } from '../curriculum-references.mjs';

const read = (file) =>
  JSON.parse(readFileSync(new URL('../../' + file, import.meta.url), 'utf8'));
const curriculum = read('curriculum.json');
const readText = (file) =>
  readFileSync(new URL('../../' + file, import.meta.url), 'utf8');

test('all twenty RB roll numbers have complete workspaces and isolated application paths', () => {
  const expected = Array.from({ length: 20 }, (_, index) => 'RB' + (index + 1));
  assert.deepEqual(curriculum.students, expected);
  assert.deepEqual(
    readdirSync(new URL('../../students/', import.meta.url), {
      withFileTypes: true,
    })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(),
    [...expected].sort(),
  );
  const schemas = new Set();
  for (const student of expected) {
    assert.equal(parseStudentId(student), student);
    assert.equal(
      studentApiRelativePath(student),
      'students/' + student + '/week-06/api/server.ts',
    );
    const schema = studentAppEnvironment(student, {}).DATABASE_SCHEMA;
    assert.equal(schema, 'lab_' + student.toLowerCase());
    schemas.add(schema);
    assert.ok(
      readText('students/' + student + '/README.md').startsWith(
        '# ' + student + ':',
      ),
    );
    for (const week of curriculum.weeks) {
      const number = String(week.number).padStart(2, '0');
      assert.ok(
        readText(
          'students/' + student + '/week-' + number + '/problem_statement.md',
        ).startsWith('# ' + student + ': Week ' + week.number + '\n'),
      );
    }
  }
  assert.equal(schemas.size, 20);
});

test('roll numbers reject zero padding, out-of-roster values and non-string input', () => {
  for (const value of [
    undefined,
    null,
    '',
    'RB0',
    'RB01',
    'RB21',
    'RB99',
    'rb1',
    '../RB1',
    'RB1/../RB2',
    12,
    { toString: () => 'RB1' },
  ])
    assert.throws(() => parseStudentId(value), /RB1 through RB20/);
});

test('week headings, task indexes, all student pointers and environment timing agree', () => {
  verifyCurriculumReferences(curriculum, readText);
});

test('curriculum verification rejects stale week labels and task paths', () => {
  for (const [file, before, after] of [
    ['.env.example', '# Week 11:', '# Week 8:'],
    ['weeks/week-04.md', '# Week 4:', '# Week 2:'],
    ['shared/delivery/rotations/week-04.md', '# Week 4:', '# Week 2:'],
    [
      'students/RB10/week-04/problem_statement.md',
      '# RB10: Week 4',
      '# RB10: Week 2',
    ],
    ['students/RB10/README.md', '- [Week 4]', '- [Week 2]'],
    [
      'docs/05-task-index.md',
      'week-04/sql/first-queries.sql',
      'week-02/sql/first-queries.sql',
    ],
    [
      'docs/08-shared-build-plan.md',
      'shared/delivery/event-contract.md',
      'shared/delivery/old-contract.md',
    ],
  ]) {
    assert.ok(readText(file).includes(before));
    assert.throws(
      () =>
        verifyCurriculumReferences(curriculum, (path) =>
          path === file
            ? readText(path).replace(before, after)
            : readText(path),
        ),
      /Wrong /,
      'A stale reference was accepted: ' + file,
    );
  }
});

test('an earlier task cannot require a future-week artifact', () => {
  const changed = structuredClone(curriculum);
  changed.weeks[14].tasks.find((task) => task.id === 'E11.2').instructions =
    'Draft week-20/delivery/runbook.md now.';
  assert.throws(
    () => verifyCurriculumReferences(changed, readText),
    /future-week artifact/,
  );
});

test('Node typechecking includes shared simulator and database code', () => {
  const config = read('tsconfig.node.json');
  assert.ok(config.include.includes('shared/simulator/**/*.ts'));
  assert.ok(config.include.includes('shared/database/**/*.ts'));
});

test('twenty-week budgets include problem-solving without adding it on top', () => {
  assert.equal(curriculum.weeks.length, 20);
  assert.equal(curriculum.weeks.flatMap((week) => week.tasks).length, 60);
  for (const week of curriculum.weeks) {
    assert.equal(
      Object.values(week.budget).reduce((sum, minutes) => sum + minutes, 0),
      15 * 60,
    );
    assert.equal(week.budget.problemSolving, 2 * 60);
    assert.equal(
      week.tasks.reduce((sum, task) => sum + task.minutes, 0),
      week.budget.tasks,
    );
    const number = String(week.number).padStart(2, '0');
    assert.equal(week.problemSolving.id, 'P' + number + '.1');
  }
});

test('application roots match the continuing student runner and do not require future task files', () => {
  assert.equal(
    studentApiRelativePath('RB1'),
    'students/RB1/' + curriculum.application.apiRoot + '/server.ts',
  );
  assert.equal(
    curriculum.application.migrationRoot,
    'week-08/database/migrations',
  );
  assert.equal(curriculum.application.clientRoot, 'week-16/client');
  for (const week of curriculum.weeks) {
    for (const task of week.tasks) {
      const artifactWeek = Number(task.path.match(/^week-(\d{2})\//)?.[1]);
      assert.ok(
        artifactWeek <= week.number,
        task.id + ' has a future primary artifact',
      );
    }
  }
});

test('the supplied OpenAPI shell describes liveness, not completed merchant features', () => {
  const fixture = read('fixtures/openapi-starter.json');
  const shared = read('shared/api/openapi.json');
  assert.equal(fixture.openapi, '3.1.0');
  assert.deepEqual(Object.keys(fixture.paths), ['/health/live']);
  assert.ok(fixture.paths['/health/live'].get.responses['200']);
  assert.ok(shared.paths['/health/live'].get.responses['200']);
  // Shared documentation grows with student implementations; do not freeze it to the fixture.
});
