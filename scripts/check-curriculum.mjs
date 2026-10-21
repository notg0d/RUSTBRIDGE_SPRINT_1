import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { verifyCurriculumReferences } from './curriculum-references.mjs';

assert.ok(existsSync('curriculum.json'), 'Run from the repository root.');
const data = JSON.parse(readFileSync('curriculum.json', 'utf8'));
verifyCurriculumReferences(data, (file) => readFileSync(file, 'utf8'));
assert.equal(data.weeks.length, 20);
assert.equal(data.durationWeeks, 20);
assert.deepEqual(data.weeklyHours, {
  core: 15,
  maximum: 20,
  problemSolving: 2,
});
assert.deepEqual(data.application, {
  apiRoot: 'week-06/api',
  migrationRoot: 'week-08/database/migrations',
  clientRoot: 'week-16/client',
});
const expectedStudents = Array.from(
  { length: 20 },
  (_, index) => 'RB' + (index + 1),
);
assert.deepEqual(data.students, expectedStudents);
assert.deepEqual(
  readdirSync('students', { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(),
  [...expectedStudents].sort(),
  'Student folders must match the current RB roster.',
);
const ids = new Set();
const problemIds = new Set();
for (const [index, week] of data.weeks.entries()) {
  const number = String(week.number).padStart(2, '0');
  assert.equal(week.number, index + 1);
  assert.equal(week.tasks.length, 3);
  assert.equal(
    Object.values(week.budget).reduce((a, b) => a + b, 0),
    data.weeklyHours.core * 60,
  );
  assert.equal(
    week.tasks.reduce((sum, task) => sum + task.minutes, 0),
    week.budget.tasks,
  );
  const canonical = 'weeks/week-' + number + '.md';
  const text = readFileSync(canonical, 'utf8');
  const contribution = readFileSync(
    'shared/delivery/rotations/week-' + number + '.md',
    'utf8',
  );
  assert.ok(contribution.includes('weekly contribution record'));
  assert.match(contribution, /\|\s*Owner\s*\|/);
  assert.match(contribution, /\|\s*Non-author reviewer\s*\|/);
  assert.ok(!/Build pair:|Review\/witness pair:/.test(contribution));
  assert.equal(
    week.budget.problemSolving,
    data.weeklyHours.problemSolving * 60,
  );
  assert.equal(week.budget.practice, 120);
  assert.equal(week.budget.shared, 60);
  assert.equal(week.budget.tasks, 300);
  const problem = week.problemSolving;
  assert.equal(problem.id, 'P' + number + '.1');
  assert.equal(problem.path, 'week-' + number + '/problem-solving/README.md');
  assert.ok(!problemIds.has(problem.id));
  problemIds.add(problem.id);
  for (const key of ['id', 'path', 'focus', 'instructions', 'proof'])
    assert.ok(
      text.includes(problem[key]),
      'Missing weekly problem-solving: ' + problem.id + ':' + key,
    );
  for (const track of week.tracks) assert.ok(data.tracks[track]);
  for (const task of week.tasks) {
    assert.ok(!ids.has(task.id), 'Duplicate task: ' + task.id);
    ids.add(task.id);
    assert.ok(text.includes(task.id), 'Missing weekly task: ' + task.id);
    assert.ok(contribution.includes(task.id), 'Missing log task: ' + task.id);
    for (const key of ['instructions', 'proof', 'trap', 'path']) {
      assert.ok(
        text.includes(task[key]),
        'Task map/week mismatch: ' + task.id + ':' + key,
      );
    }
    assert.ok(
      !path.isAbsolute(task.path) && !task.path.split(/[\\/]/).includes('..'),
    );
    for (const key of task.resources)
      assert.ok(data.sources[key], 'Missing resource ' + key);
  }
  for (const student of data.students) {
    const pointer = readFileSync(
      'students/' + student + '/week-' + number + '/problem_statement.md',
      'utf8',
    );
    assert.ok(pointer.includes('weeks/week-' + number + '.md'));
    for (const task of week.tasks) assert.ok(pointer.includes(task.id));
    assert.ok(
      pointer.includes(problem.id),
      'Missing student problem-solving pointer: ' + student + ':' + number,
    );
  }
}
assert.equal(ids.size, 60);
assert.equal(problemIds.size, 20);

const publishedTaskIds = [
  'E01.1',
  'T01.1',
  'E01.2',
  'T02.1',
  'D01.1',
  'E02.1',
  'T03.1',
  'D02.1',
  'E03.1',
  'B01.1',
  'T04.1',
  'E04.1',
  'B02.1',
  'C01.1',
  'E05.1',
  'D03.1',
  'B03.1',
  'E06.1',
  'D04.1',
  'T05.1',
  'B04.1',
  'B05.1',
  'B05.2',
  'E07.1',
  'D05.1',
  'B06.1',
  'C02.1',
  'C03.1',
  'C03.2',
  'B07.1',
  'C04.1',
  'C04.2',
  'E08.1',
  'D06.1',
  'B08.1',
  'E09.1',
  'B09.1',
  'C05.1',
  'E10.1',
  'E11.1',
  'D07.1',
  'E11.2',
  'E12.1',
  'C06.1',
  'E12.2',
];
for (const id of publishedTaskIds)
  assert.ok(ids.has(id), 'Published task ID was removed: ' + id);

const official = 'https://github.com/StartwithDot/RUSTBRIDGE_SPRINT_1';
const guide = readFileSync('docs/03-student-guide.md', 'utf8');
const publication = readFileSync('admin/publishing.md', 'utf8');
assert.ok(guide.includes(official + '.git'));
assert.ok(guide.includes('git clone ' + official + '.git'));
assert.ok(guide.includes('git fetch origin'));
assert.ok(guide.includes('git merge --ff-only origin/main'));
assert.ok(
  !/YOUR_USERNAME|git remote add upstream|git fetch upstream/.test(guide),
);
const roles = readFileSync('docs/06-team-roles.md', 'utf8');
assert.ok(roles.includes('non-author reviewer'));
assert.ok(roles.includes('reassigns the unfinished task'));
assert.ok(!/RB1, RB2|Each student builds three times/.test(roles));
assert.ok(publication.includes(official + '.git'));
assert.ok(
  !publication.includes(
    'https://github.com/jrk101/Backend-Engineering-Sprint-1',
  ),
);
const wiring = readFileSync('docs/12-application-wiring.md', 'utf8');
assert.ok(wiring.includes('week-06/api/app.ts'));
assert.ok(wiring.includes('week-06/api/server.ts'));
for (const week of data.weeks.filter((week) => week.number >= 6)) {
  const number = String(week.number).padStart(2, '0');
  assert.ok(
    readFileSync('weeks/week-' + number + '.md', 'utf8').includes(
      '12-application-wiring.md',
    ),
  );
}
const studentContext = readFileSync('scripts/student-context.mjs', 'utf8');
assert.ok(
  studentContext.includes('/' + data.application.apiRoot + '/server.ts'),
);
assert.ok(
  readFileSync('scripts/run-student-api.mjs', 'utf8').includes(
    'studentApiRelativePath(student)',
  ),
);
assert.ok(guide.includes(data.application.apiRoot + '/app.ts'));
assert.ok(guide.includes(data.application.clientRoot));
const dependencies = JSON.parse(readFileSync('package.json', 'utf8'));
const lockedRoot = JSON.parse(readFileSync('package-lock.json', 'utf8'))
  .packages[''];
for (const key of ['dependencies', 'devDependencies', 'engines'])
  assert.deepEqual(
    dependencies[key],
    lockedRoot[key],
    'Lockfile mismatch: ' + key,
  );
assert.ok(
  !dependencies.dependencies.next && !dependencies.devDependencies.next,
);
for (const file of [
  'fixtures/openapi-starter.json',
  'shared/api/openapi.json',
]) {
  const specification = JSON.parse(readFileSync(file, 'utf8'));
  assert.match(specification.openapi, /^3\.1\./);
  assert.ok(specification.paths['/health/live']);
}
for (const file of [
  'docs/13-api-documentation.md',
  'docs/14-problem-solving.md',
  'docs/15-individual-extension.md',
])
  assert.ok(existsSync(file));
const handoff = readFileSync('admin/payhook-handoff.md', 'utf8');
assert.ok(handoff.includes('/integrations/payhook/events'));
assert.ok(handoff.includes('Authorization: Bearer'));
assert.ok(handoff.includes('following sprint'));
const scripts = JSON.parse(readFileSync('package.json', 'utf8')).scripts;
for (const command of ['dev:student', 'test:student', 'test:student:db'])
  assert.ok(scripts[command]);
for (const command of Object.values(scripts)) {
  for (const match of command.matchAll(/scripts\/[\w/-]+\.mjs/g))
    assert.ok(existsSync(match[0]), 'Missing npm command helper: ' + match[0]);
}

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (
      ['node_modules', '.git', '.qa', 'dist', 'coverage'].includes(entry.name)
    )
      continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(file);
      continue;
    }
    if (!/\.(md|json|ts|tsx|mjs|sql|css|html|yml)$/.test(entry.name)) continue;
    const text = readFileSync(file, 'utf8');
    assert.ok(!text.includes('\u2014'), 'Em dash found in ' + file);
    if (!file.endsWith('.md')) continue;
    const prose = text.replace(/```[\s\S]*?```/g, '');
    for (const match of prose.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0].replace(/^<|>$/g, '');
      if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      const resolved = path.resolve(
        path.dirname(file),
        decodeURIComponent(target),
      );
      assert.ok(existsSync(resolved), 'Broken link in ' + file + ': ' + target);
    }
  }
}
visit('.');
console.log(
  'Verified 20 weeks, 60 core task IDs, 20 problem-solving blocks, 20 students, week/index alignment, setup timing, 15-hour core budgets, application paths, lockfile, local links and no em dashes.',
);
