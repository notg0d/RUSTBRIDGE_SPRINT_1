# Student guide

All twenty students complete the same curriculum. Your weekly problem statement points to the canonical instructions in `weeks/`; write answers and code in your own folder.

Use your assigned roll number from RB1 through RB20 in folder paths and student commands. IDs have no leading zero; for example, use RB1, not RB01. Branch examples use the lowercase equivalent, such as rb1-week-01.

## Set up GitHub

Accept the collaborator invitation to [StartwithDot/RUSTBRIDGE_SPRINT_1](https://github.com/StartwithDot/RUSTBRIDGE_SPRINT_1). The repository owner/admin must arrange Write access before you can push a task branch. Clone the official repository:

```bash
git clone https://github.com/StartwithDot/RUSTBRIDGE_SPRINT_1.git
cd RUSTBRIDGE_SPRINT_1
git config user.name "Your Name"
git config user.email "YOUR_VERIFIED_OR_GITHUB_NOREPLY_EMAIL"
npm ci
```

`origin` is the official cohort repository. Push only your named task branches and open PRs into its main branch. Do not push directly to main or merge your own PR; a maintainer handles merging after review and checks. These are cohort rules; the owner/admin configures the GitHub access and branch protections.

If you already have a clone or unfinished work, inspect `git status` and `git remote -v` with a maintainer before changing remotes. Do not run git init again or discard existing work. If branch push is denied, ask the owner/admin to confirm your invitation and Write access; do not request anyone's password or token.

## Weekly workflow

Build each code piece first in your [own project repository](19-own-project-repo.md). Then copy it into your cohort folder and follow the steps below. The [VS Code workflow](18-vscode-workflow.md) shows both repositories side by side. The [repository map](17-repo-map.md) explains the folders.

Start with a clean main branch. Replace the student ID and week below with your assignment:

```bash
git switch main
git fetch origin
git merge --ff-only origin/main
git switch -c rb1-week-01
```

Task IDs are stable labels, not week numbers: `T02.1` is assigned in Week 4. Follow the week heading and linked task instructions rather than inferring the schedule from an ID.

Read the current week completely. Complete one task, run its proof and make a focused commit with the task ID first:

```bash
git add students/RB1/week-01/typescript/inspector.ts
git diff --cached
git commit -m "T01.1 inspect a sandbox event"
git push -u origin rb1-week-01
```

On GitHub, open a PR in the official repository with base `main` and compare `rb1-week-01`. One weekly individual PR may contain the three focused task commits. Include task IDs, test commands/results, a failure case and one explained decision. Review an assigned peer's work; your own PR needs a non-author reviewer. Apply feedback in the same PR. If your reviewer is unavailable, request another reviewer or a maintainer instead of waiting for a fixed partner.

The primary task path identifies the main artifact. Include necessary companion modules, tests, migrations and notes in the same focused commit. When a task refers to an earlier week, continue that existing application rather than restarting it.

If main is dirty or `--ff-only` fails, inspect the unfinished work or divergence before continuing. Do not force-push main or discard another person's changes. Keep credentials, dependencies, databases and build output out of commits.

## Run your work

Run commands from the repository root, using your actual RB number and file paths:

```bash
npm run practice -- students/RB1/week-01/typescript/inspector.ts
npm run test:practice -- students/RB1/week-05/typescript/validate-event.test.ts
npm run typecheck
```

`practice` and `test:practice` use tsx to execute TypeScript; they do not check types. Run `typecheck` separately. For the Week 4 intentional type error, capture the expected compiler failure, then restore valid code and rerun the check before committing.

From Week 6, follow the [application wiring guide](12-application-wiring.md). Copy the API starter once, keep `week-06/api/app.ts` as the factory and `server.ts` as the listener, and connect later modules to that app.

```bash
npm run dev:student -- RB1
npm run test:student -- RB1
npm run test:student:db -- RB1
```

Database tests require the dedicated `_test` database. Tests use separate disposable schemas; individual apps use their own lab schema. Root dependencies support all labs, so do not install another dependency set every week. `npm test` includes shared/tooling tests and all authored student fast tests present; `npm run check` verifies the full repository without requiring a database. `npm run test:db` includes shared and authored student database tests. Targeted commands above help isolate your own failure.

## Add the React client in Week 16

Copy only if the destination does not already exist:

Mac (Terminal):

```bash
cp -R fixtures/web-starter students/RB1/week-16/client
npm run dev --prefix students/RB1/week-16/client
```

Windows (PowerShell):

```powershell
Copy-Item -LiteralPath "fixtures/web-starter" -Destination "students/RB1/week-16/client" -Recurse
npm run dev --prefix students/RB1/week-16/client
```

Keep editing this client in later weeks. Stop the shared UI/API before running your own: they use the same ports, 5173 and 3000. The client uses relative `/api` requests through the supplied proxy.

## Contribute to the shared product

Follow the [shared-project responsibilities](06-team-roles.md). Everyone practises all core skills, but the main application is built from different assigned contributions. Each shared task has an available owner, a non-author reviewer, a bounded file scope and required proof. Rotate implementation, test and review responsibilities rather than assigning permanent specialists.

For an assigned shared task, create a separate branch from current main, such as `rb1-week-08-shared-migration`, and open a separate PR into main. Reuse reviewed practice, adapt imports into shared modules and include its focused tests. Preserve authorship and use a task-ID commit such as `D03.1 shared add event migration`. Shared code must not import a student's folder.

Record the actual owner, review and PR in the week's contribution log. If an owner is unavailable, a maintainer reassigns the unfinished task and preserves existing work. Continue your own practice; do not wait for that person's code or copy the shared solution as your answer. Keep the shared slot inside the weekly budget: promotion reuses proven work, not a second unrelated assignment. Record evidence using the [assessment guide](10-assessment.md).

## Problem-solving and final evidence

Every week, complete its common two-hour problem-solving block inside your own workspace. Follow [the practice guide](14-problem-solving.md), include boundary cases and explain one corrected attempt. This block is included in the 15-hour core budget.

After the core product works, follow [the Week 19 extension guide](15-individual-extension.md). Keep it in your continuing app unless a maintainer accepts a separate shared-task PR. Everyone still completes the same core and review obligations.

Week 20 combines independent start, a short demo, case study, attributable commits and an oral/no-AI repair. Keep technical observations public and grades private. AI may support ordinary learning; it is not allowed during the explicitly identified checkpoints.
