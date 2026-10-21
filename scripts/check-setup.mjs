import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const [major, minor] = process.versions.node.split('.').map(Number);
const failures = [];
if (major !== 22 || minor < 17)
  failures.push('Use a patched Node 22.x release, at least 22.17.');
if (!existsSync('curriculum.json'))
  failures.push('Run this command from the repository root.');
if (!existsSync('package-lock.json') || !existsSync('node_modules/typescript'))
  failures.push('Run npm ci from the root.');
const git = spawnSync('git', ['--version'], { encoding: 'utf8' });
if (git.status !== 0)
  failures.push(
    'Install Git (see docs/02-setup-guide-mac-windows.md) and restart your terminal.',
  );
if (failures.length) {
  for (const failure of failures) console.error(failure);
  process.exitCode = 1;
} else {
  console.log(
    'Node, Git, root dependencies and working directory are ready. PostgreSQL is introduced in Week 4.',
  );
}
