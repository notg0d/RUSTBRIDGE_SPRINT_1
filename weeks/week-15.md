# Week 15: Investigate a backend failure and rehearse its clean start

MerchantDesk | Sprint 1 | E: Engineering and Delivery + D: SQL and Persistence

## 1. What We Are Doing

This week you break one thing on purpose in your own local data, find the real cause with evidence, and fix it. You also read one query plan with EXPLAIN and write setup notes that another person can follow. At the end you have a short postmortem (a short report about what failed, why it failed and how you fixed it), a failing test that now passes, a query plan file and clean-start notes for the backend.

This week has three project tasks and one problem-solving block:

- `E11.1`: Break, investigate and fix one failure (120 minutes)
- `D07.1`: Explain one index from the query (90 minutes)
- `E11.2`: Rehearse a clean backend start (90 minutes)
- `P15.1`: weekly problem-solving block (120 minutes)

Outcome: An evidence-led backend repair, an explained query plan and a corrected API runbook.

## 2. Why We Are Doing It

**The project need:** The application must be maintainable when something fails and when a different person starts it.

MerchantDesk must stay maintainable when something fails and when a different person starts it. Real backend work is full of failures, so evidence, a regression test and written setup steps are daily job skills, not extra polish.

## 3. What to Learn First (Prerequisites)

**Before you start:** Use a reversible failure only in disposable/local test data. The maintainer chooses a fixture or condition, not a destructive change to a real database.

**Review these ideas first:**

- Reversible failure: a break you can undo, only in local disposable data.
- Evidence first: write what you saw before you change code.
- Regression test: a test that fails now and passes after the fix.
- EXPLAIN: a PostgreSQL command that shows how a query runs.
- Index: a database structure that can speed up some reads and slow down writes.
- Runbook: written steps another person follows without asking you.

**By the end of this week you can:**

- finish `E11.1`: evidence-led debugging and regression tests
- finish `D07.1`: eXPLAIN, filter/order alignment and measurement limits
- finish `E11.2`: setup instructions, fresh state and reproducibility

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                          | Planned task minutes |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `E11.1` | Evidence-led debugging and regression tests. [Fastify logging](https://fastify.dev/docs/v5.7.x/Reference/Logging/), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html) |                  120 |
| `D07.1` | EXPLAIN, filter/order alignment and measurement limits. [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/17/using-explain.html)                                                           |                   90 |
| `E11.2` | Setup instructions, fresh state and reproducibility. [Setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md)                                                                 |                   90 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- "postgresql explain analyze seq scan vs index scan"
- "fastify logging request error example"
- "node test runner assert example"
- "what is a regression test"
- "node-postgres connection error message"

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Break, investigate and fix one failure (`E11.1`)

##### 1. What We Are Doing

You pick one real failure in your own local setup, for example a wrong database URL in your local `.env`, and you investigate it like a report. You record the evidence and your wrong guesses, write a test that fails, then fix the cause and write a short blameless postmortem. You work in VS Code and the terminal, and the file is `students/<student-id>/week-15/incident/postmortem.md`.

##### 2. Why We Are Doing It

When MerchantDesk breaks in front of a merchant, the team needs the cause, not only the error text. A postmortem plus a regression test stops the same bug from coming back.

##### 3. What to Learn First

- How to read a Fastify log line and find the real error text.
- How to write a failing test with `node:test` before you fix anything.
- How to reproduce the chosen failure inside the test itself, not only in your local config.
- Blameless postmortem parts: timeline, evidence, wrong guesses, cause, fix, prevention.
- How to choose a failure you can fully undo.

##### 4. Where to Find Resources

- [Fastify logging](https://fastify.dev/docs/v5.7.x/Reference/Logging/) - how request and error logs look.
- [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html) - writing a test that fails first.
- [docs/09 troubleshooting](../docs/09-troubleshooting.md) - common local errors and fixes.
- Search: fastify logging error, node test runner regression test.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Investigate one local failure such as a wrong DB URL, missing owner filter, unhandled SQL conflict. Record evidence and wrong guesses before changing code. Add a failing regression test, fix the cause and write a brief blameless postmortem.

**Primary path:** `students/<student-id>/week-15/incident/postmortem.md`.

**Proof for review:** Your evidence identifies the cause and a regression test catches the original bug.

**Known trap:** Never inject failures into another person's database or loosen validation until a test goes green.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the folder `students/<student-id>/week-15/incident/` and a new file `postmortem.md` inside it.
3. Pick one reversible failure in your own local data. Use only files you own, for example your local `.env` or your own schema.
4. Run the app and copy the exact error text and the log line into the "Evidence" section. Replace `<student-id>` with your number, for example RB7.
5. Remove passwords, connection URLs, keys and session cookies before saving the evidence.
6. Write a "Wrong guesses" section. Add at least one guess and one sentence on why you dropped it.
7. Write a test that reproduces the bug inside the test itself. For a wrong database URL, test how the app handles a failed connection. Then replace `RBx` in commands with your student ID, for example `RB7`.
8. Run the test: `npm run test:student -- RBx`. It must fail.
9. Fix the cause in your code, then run `npm run test:student -- RBx` again. The test must now pass.
10. Run `npm run typecheck` and `npm run format`. Fix what they report.
11. Finish the postmortem: cause, fix, test name, and how the team prevents it next time.
12. Run `git add` for the postmortem, the regression test and every implementation file you changed, for example a file in `week-06/api`.
13. Run `git diff --cached` and check the file list before you commit.
14. Run `git commit -m "E11.1 break, investigate and fix one failure"`.
    How to think about it: the postmortem is for a reader who was not there. Write the facts they need to repeat your steps.

**If you get stuck:**

- Read the error text from the first line. The last line of a stack trace often hides the real cause.
- Search "node-postgres connection error" or read [docs/09 troubleshooting](../docs/09-troubleshooting.md) for setup errors.
- Ask in Discord with the command you ran and the exact error text. Never paste secrets or your `.env` contents.

##### 6. What to Commit

- [ ] `students/<student-id>/week-15/incident/postmortem.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E11.1 break, investigate and fix one failure`

#### Task 2 - Explain one index from the query (`D07.1`)

##### 1. What We Are Doing

You look at how PostgreSQL runs your merchant list query with EXPLAIN on synthetic rows. You propose one index that matches the filter and the order, compare the plans before and after, and add the index by migration only if it is justified. You work in the terminal with `psql` and save your work in `students/<student-id>/week-15/database/query-plan.sql`.

##### 2. Why We Are Doing It

The merchant list is the query the operator runs most. A plan you can read and explain is how you keep that list fast as synthetic rows grow.

##### 3. What to Learn First

- The difference between `EXPLAIN` and `EXPLAIN ANALYZE`.
- What `Seq Scan` and `Index Scan` mean in a plan.
- How filter columns and `ORDER BY` columns decide the index column order.
- Why a tiny table can use a sequential scan and still be correct.
- Why you must not claim a speedup without numbers.

##### 4. Where to Find Resources

- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/17/using-explain.html) - how to read a plan and what the nodes mean.
- [docs/09 troubleshooting](../docs/09-troubleshooting.md) - when a local database command fails.
- Search: postgres explain analyze, postgres index not used order by.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Inspect the merchant list query with EXPLAIN on synthetic rows. Propose a supporting merchant/time/ID index and compare plans before/after on a suitable fixture size. Add it through a new migration if justified. Say why a tiny table may use a sequential scan correctly.

**Primary path:** `students/<student-id>/week-15/database/query-plan.sql`.

**Proof for review:** The index proposal matches actual filters/order and the explanation does not claim a measured speedup without evidence.

**Known trap:** An index is not automatically better for every table or write-heavy operation.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open a terminal and connect with `psql` to your own local database.
3. Run `EXPLAIN` on your merchant list query and copy the full output into `students/<student-id>/week-15/database/query-plan.sql` as a comment.
4. Add two SQL comment lines at the top of that file, each starting with `--`: one for the filter columns and one for the `ORDER BY` columns of the query.
5. Check the row count with `SELECT count(*)` on the same table. Small counts change the plan.
6. Run `EXPLAIN ANALYZE` before the index on a fixture size that is more than a few rows. Copy the plan and the timing honestly.
7. Add the proposed index by hand in your own disposable local database, then run `EXPLAIN ANALYZE` again and paste the new plan.
8. Compare the two plans and decide if the evidence justifies the index. Write 2 to 3 sentences: why the index matches the filter and order, and why a tiny table may still choose a sequential scan.
9. If the evidence justifies the index, add it as a new migration file in `students/<student-id>/week-08/database/migrations`, following the style of your earlier migration files.
10. Set `TEST_DATABASE_URL` to a disposable database whose name ends in `_test`, then run the migration with `npm run migrate:practice -- students/<student-id>/week-08/database/migrations`. Run it from the repository root. Then run `EXPLAIN ANALYZE` again and paste the new plan.
11. If the evidence does not justify the index, write in the file why you rejected it.
12. Run `npm run format`, then `git add students/<student-id>/week-15`.
13. If you added a migration, run `git add` for the exact file path under `students/<student-id>/week-08/database/migrations`.
14. Run `git diff --cached` and check the file list before you commit.
15. Run `git commit -m "D07.1 explain one index from the query"`.

**If you get stuck:**

- Compare your query text with the query your API sends. One extra column or a different `ORDER BY` changes the plan.
- Search "postgres explain index not used" or "postgres seq scan small table".
- Ask in Discord with the full plan text and the query. Remove any secrets first.

##### 6. What to Commit

- [ ] `students/<student-id>/week-15/database/query-plan.sql` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `D07.1 explain one index from the query`

#### Task 3 - Rehearse a clean backend start (`E11.2`)

##### 1. What We Are Doing

You write clean-start notes that another person can follow to start your backend from nothing: fresh database, install, migrate, seed, start the API, sign in through the simulator, submit and list an event. A peer follows the notes without spoken help, and you fix every step that confused them. The file is `students/<student-id>/week-15/delivery/clean-start-notes.md`.

##### 2. Why We Are Doing It

A merchant operator and a future teammate must be able to run MerchantDesk without you in the room. Written setup steps are the difference between a demo and a product.

##### 3. What to Learn First

- `npm ci` installs exact dependencies; it is not the same as adding packages.
- Why the rehearsal uses a fresh database with a clear, disposable name.
- Why `.env` values stay local and are never committed.
- How to mark work that is not built yet, so nobody claims it works.

##### 4. Where to Find Resources

- [docs/12 application wiring](../docs/12-application-wiring.md) - how factory, server, migrations and database connect.
- [docs/02 setup guide](../docs/02-setup-guide-mac-windows.md) - setup steps and the project commands in section 7.
- [docs/09 troubleshooting](../docs/09-troubleshooting.md) - when a setup command fails.
- Search: npm ci vs npm install, postgres create database command line.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Draft the backend runbook in week-15/delivery/clean-start-notes.md from NOTES.md and the wiring guide. Have a peer use a fresh named disposable database and npm ci to migrate, seed, start the API, sign in through the simulator and submit/list an event without verbal shortcuts. Record and fix confusing steps. Mark UI steps as pending until Weeks 16-17. Reuse these notes during the Week 19 rehearsal and consolidate them into the final runbook in Week 20; no future-week file is required now.

**Primary path:** `students/<student-id>/week-15/delivery/clean-start-notes.md`.

**Proof for review:** A non-author reaches the protected API and persisted event using written commands; missing steps are corrected and no browser completion is claimed yet.

**Known trap:** Do not delete or reset a personal or shared database to make the rehearsal look clean.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-15/delivery/clean-start-notes.md`.
3. Read your `NOTES.md` and [docs/12](../docs/12-application-wiring.md), then list every step you do to start your backend.
4. Write the branch step: clone the repository or switch to your branch. Replace `<student-id>` with your number, for example RB7.
5. Write the install step: `npm ci`.
6. Write the setup check step: `npm run setup:check`.
7. Write the local environment step: which `.env` values the reader must set, following docs/02 section 7. Keep the real values local and never write them in the notes.
8. Write the fresh database step: create a new local database with a clear, disposable name. Its name must end in `_test`.
9. Write the migration step: set `TEST_DATABASE_URL` to that fresh disposable database, then run `npm run migrate:practice -- students/<student-id>/week-08/database/migrations`. Run it from the repository root.
10. Write the seed step, using the exact command from your `NOTES.md`.
11. Write the start step: `npm run dev:student -- RBx`. Replace `RBx` in commands with your student ID, for example `RB7`. Say "run this from the repository root".
12. Write the sign-in step through the simulator, using the details in your `NOTES.md`.
13. Write the step to submit one synthetic event, then the step to list it.
14. Write the database test step: `npm run test:student:db -- RBx`. Before running it, say that the test database name must end in `_test` and how to configure it, as in the setup guide.
15. Ask a peer to follow the notes on a fresh database with a clear name that nobody else uses. Do not speak or type in their terminal.
16. Write down each place they paused, guessed or asked a question. Fix those lines the same day.
17. Add a "Pending" line for the browser and UI steps. Say clearly they are not built until Weeks 16 and 17.
18. Add a short "Checks" line: which command proves the API is up and which proves the event was saved.
19. Run `npm run format`, then `git add students/<student-id>/week-15`, then `git commit -m "E11.2 rehearse a clean backend start"`.
    How to think about it: write for the reader, not for yourself. If a step depends on something you know but did not write, add it.

**If you get stuck:**

- If a step fails for your peer but works for you, look for a missing environment value or a database name that only exists on your machine.
- Read [docs/09 troubleshooting](../docs/09-troubleshooting.md) and search your exact error, for example "postgres role does not exist".
- Ask in Discord with the step number, the command and the exact error text. Never paste your `.env`.

##### 6. What to Commit

- [ ] `students/<student-id>/week-15/delivery/clean-start-notes.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E11.2 rehearse a clean backend start`

### Two-hour problem-solving block (`P15.1`)

**Focus:** Two-pointer reasoning

Merge two sorted synthetic ID lists into one ordered list; explain pointer movement and input assumptions.

**Evidence path:** `students/<student-id>/week-15/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open the problem-solving block and read the exercise: merge two sorted synthetic ID lists into one ordered list.
2. Write your assumptions first: both inputs are sorted, how duplicates are handled, and what an empty input means.
3. Create a TypeScript file inside `students/<student-id>/week-15/` with a clear name and write the two-pointer version. Run it with `npm run practice -- <your-file.ts>`.
4. Add tests with `node:test` for these cases: both empty, one empty, all values of one list smaller, and duplicate IDs. Run them with `npm run test:practice -- <your-test-file.ts>`.
5. Keep one failing case, then write a corrected attempt and one plain sentence on what pointer movement was wrong.
6. In the last part of the block, redo one earlier exercise from a previous week and note one thing you now do faster.

**If you get stuck:**

Read the failing test name out loud and move the two pointers on paper for that input. If the idea is still unclear, ask in Discord with your input lists, the expected output and the actual output.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/incident.md, shared/database/migrations/ and shared/delivery/runbook.md`. Record scope, non-author review and actual proof in the [Week 15 contribution log](../shared/delivery/rotations/week-15.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-15` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 16](week-16.md).
