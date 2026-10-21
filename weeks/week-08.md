# Week 8: Make accepted events survive restart

MerchantDesk | Sprint 1 | D: SQL and Persistence + B: Backend Development + E: Engineering and Delivery

## 1. What We Are Doing

This week you store accepted events in PostgreSQL instead of in memory. You write your first migration, connect storage code that reuses database connections to your API, and prove with a test that an event survives a restart. At the end you have events that remain stored after the API restarts, and a real database test.

This week has three project tasks and one problem-solving block:

- `D03.1`: Write and apply the first migration (110 minutes)
- `B03.1`: Connect a pooled repository (120 minutes)
- `E06.1`: Prove persistence and isolate the test (70 minutes)
- `P08.1`: weekly problem-solving block (120 minutes)

Outcome: A fresh migration, parameterized storage and a restart proof. Milestone: Durable event flow.

## 2. Why We Are Doing It

**The project need:** Restarting the API currently loses all accepted events.

The client need is simple: restarting the API currently loses all accepted events. A merchant operator must see the same events after a deploy or a crash, so storage has to live outside Node. This is the week where your API stops being a demo and starts keeping records, and that is the core skill of a backend job.

## 3. What to Learn First (Prerequisites)

**Before you start:** Bring the agreed model and HTTP tests. Use a disposable test database for tests, not your practice database. Follow the migration-runner interface in shared/database/README.md.

**Review these ideas first:**

- DDL: SQL statements that create or change tables.
- Foreign key: a rule that a row must point to a real row in another table.
- Check constraint: a rule the database enforces on a column value.
- Parameterized query: SQL with `$1` placeholders and a separate values array.
- Pool: a small set of reusable database connections.
- Forward migration: a numbered file you add, never edit after it is applied.
- Integration test: a test that uses a real database, not a fake.

**By the end of this week you can:**

- finish `D03.1`: dDL, constraints, timestamps and forward migrations
- finish `B03.1`: pg pooling, parameterized queries, dependency injection and shutdown
- finish `E06.1`: database integration tests and restart evidence

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                                                                        | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `D03.1` | DDL, constraints, timestamps and forward migrations. [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html), [PostgreSQL constraints](https://www.postgresql.org/docs/17/ddl-constraints.html)                                                                                          |                  110 |
| `B03.1` | pg pooling, parameterized queries, dependency injection and shutdown. [Parameterized node-postgres queries](https://node-postgres.com/features/queries), [node-postgres pooling](https://node-postgres.com/features/pooling), [node-postgres transactions](https://node-postgres.com/features/transactions) |                  120 |
| `E06.1` | Database integration tests and restart evidence. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/)                                                                                                                                                                                         |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- postgres create table foreign key check constraint
- node-postgres parameterized query placeholders
- pg pool connect release finally
- postgres migration version table
- fastify inject database test
- postgres test database cleanup

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Write and apply the first migration (`D03.1`)

##### 1. What We Are Doing

You create your first migration file with two tables, `merchants` and `payment_events`. Then you apply it with the supplied runner and check that bad writes fail. You work in VS Code and in the terminal.

##### 2. Why We Are Doing It

Without a schema the database cannot protect the client data. The foreign key and the amount check stop broken events from being stored at all. The runner records applied migration versions. After the cohort applies a migration, create a new migration for later changes.

##### 3. What to Learn First

- `CREATE TABLE` with column types and `NOT NULL`.
- `REFERENCES` for a foreign key between events and merchants.
- `CHECK` for the amount rule.
- `timestamp` columns for `created_at` and similar fields.
- Why the runner owns the transaction and the file must not.

##### 4. Where to Find Resources

- PostgreSQL constraints https://www.postgresql.org/docs/17/ddl-constraints.html
- [shared/database/README.md](../shared/database/README.md) for the migration-runner interface and how to run it.
- Search keywords: `postgres create table foreign key`, `postgres check constraint amount`, `postgres migration version table`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Create merchants and payment_events from the agreed field contract, including a foreign key, amount check and timestamp columns. Use the supplied runner via npm run migrate:practice -- students/RB1/week-08/database/migrations, replacing RB1. Read fixtures/migration-runner.ts and its support tests, then explain ordered version tracking, one-client transactions and repeat-run behavior. Write schema-relative SQL without transaction commands; do not invent runner plumbing in this task.

**Primary path:** `students/<student-id>/week-08/database/migrations/001-events.sql`.

**Proof for review:** An empty test database migrates; invalid amount/merchant writes fail; a second runner invocation preserves rows.

**Known trap:** Do not edit a migration after the shared cohort has applied it. Add a new migration.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the folder `students/<student-id>/week-08/database/migrations`. Replace `<student-id>` with your number, for example RB7.
3. Create the file `001-events.sql` in that folder.
4. Read `fixtures/migration-runner.ts` and its support tests. Write down how it records versions, how it uses one client, and what it does on a second run.
5. Write the two tables from the agreed field contract. Add the foreign key, the amount check and the timestamp columns.
6. Do not write `BEGIN` or `COMMIT` in your file. The runner opens and commits the transaction for you.
7. Check that your connection settings point at your disposable test database, the one whose name ends in `_test`. Do not point this step at your practice database.
8. Run this from the repository root (same on Mac and Windows): `npm run migrate:practice -- students/<student-id>/week-08/database/migrations`. For your own migrations use `npm run migrate:practice`, never `npm run db:migrate`.
9. Insert one synthetic merchant and one valid event with `psql`. Use only fake data.
10. Run the same command a second time. Check that the merchant and the event from step 9 are still there, and that no version is applied twice.
11. Try two bad writes: an amount outside the allowed range, and an event with a merchant id that does not exist. Both must fail.

**If you get stuck:**

- Read the full PostgreSQL error text. It names the constraint that failed.
- Run `npm run db:check` to confirm PostgreSQL is running and your connection settings are correct.
- If a table does not appear after the migration, check that your connection settings point at the database whose name ends in `_test`, and that you ran `npm run migrate:practice`.
- Remove passwords, keys, connection strings and other secrets before you post in Discord.
- Ask in Discord with the exact command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-08/database/migrations/001-events.sql` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `D03.1 write and apply the first migration`

#### Task 2 - Connect a pooled repository (`B03.1`)

##### 1. What We Are Doing

You replace the in-memory storage with a small repository that talks to PostgreSQL through a pool. Your app depends on the repository, not on the pool directly. You work in VS Code and test in the terminal and with your HTTP tool.

##### 2. Why We Are Doing It

Real events must be written with parameterized queries, so user input never becomes SQL. A bounded pool also keeps the client database safe when traffic grows.

##### 3. What to Learn First

- `new Pool({ max: ... })` and what the limit means.
- `$1, $2` placeholders with a values array.
- `pool.query` for one statement and `pool.connect()` plus `client.release()` for several.
- `try/finally` so a client is always returned.
- Passing the repository into the app factory instead of importing it inside.
- Dependency injection means passing the storage object into the function that builds your app.

##### 4. Where to Find Resources

- node-postgres queries https://node-postgres.com/features/queries
- node-postgres pooling https://node-postgres.com/features/pooling
- node-postgres transactions https://node-postgres.com/features/transactions
- [docs/12-application-wiring.md](../docs/12-application-wiring.md) for the app factory and the listener.
- Search keywords: `pg parameterized query $1`, `pg pool connect release finally`, `dependency injection app factory`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Replace the in-memory storage through a small injected repository. Use bounded Pool configuration, parameter placeholders and finally-based client release. Keep app construction separate from listening and close the pool on shutdown.

**Primary path:** `students/<student-id>/week-08/api/repository.ts`.

**Proof for review:** An event can be inserted and read through the HTTP API without SQL string interpolation or a leaked client.

**Known trap:** A transaction must stay on one checked-out client, not separate pool.query calls.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-08/api/repository.ts`.
3. Write a small interface for the storage you need: insert one event and read events back. A fake version can still satisfy it in fast tests.
4. Write the PostgreSQL version of that interface. Every query uses placeholders and a values array. Never put a value inside the SQL text.
5. Open `students/<student-id>/week-06/api/app.ts`. This file builds your app (the factory).
6. Open `students/<student-id>/week-06/api/server.ts`. This file starts your listener.
7. Create one `Pool` with a `max` limit and pass it to the PostgreSQL repository.
8. Pass the repository into the app factory from the listener. The factory takes the repository as a parameter and does not import the pool.
9. Wrap every checked-out client in `try/finally` and call `client.release()` in the `finally`. For several statements that must stay together, use one client from `pool.connect()`. Do not call `pool.query` for each statement of one transaction.
10. Add a close hook to your app that calls `pool.end()`. The app owns pool shutdown, so `await app.close()` is the one place that closes the pool.
11. Run `npm run typecheck` from the repository root.
12. Start your API with `npm run dev:student -- <student-id>`. Send one event with the HTTP tool you used in Week 7, then read the list back.
13. How to think about it: the repository is the only place that knows SQL. The rest of your app only sees the interface, and that is why app construction stays separate from listening.

**If you get stuck:**

- Read the PostgreSQL error text. It names the table, column or constraint, and this tells you where to look.
- If a request hangs, check that every `client.release()` is inside a `finally` block.
- Remove passwords, keys, connection strings and other secrets before you post in Discord.
- Ask in Discord with the command, the exact error text and the query you ran.

##### 6. What to Commit

- [ ] `students/<student-id>/week-08/api/repository.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B03.1 connect a pooled repository`

#### Task 3 - Prove persistence and isolate the test (`E06.1`)

##### 1. What We Are Doing

You write one test that stores an event in PostgreSQL, rebuilds the app and reads the event back. You also show that a failed database write is not reported as accepted. You work in VS Code and run the test in the terminal.

##### 2. Why We Are Doing It

The client must trust the API after a restart. A database-backed test is the only evidence that the data is really on disk and not in a variable.

##### 3. What to Learn First

- Building the app twice inside one test.
- Pointing the pool at a disposable test database.
- `await app.close()` before the restart. The app closes the pool for you.
- Cleaning up only the rows your test created.

##### 4. Where to Find Resources

- [shared/database/README.md](../shared/database/README.md) for the test database rules and the runner interface.
- node-postgres pooling https://node-postgres.com/features/pooling for closing a pool cleanly.
- [docs/02 setup guide](../docs/02-setup-guide-mac-windows.md), section 7, for the project commands.
- Your own HTTP tests from Week 7, as the pattern for building an app inside a test.
- Search keywords: `fastify inject persistence test`, `postgres integration test cleanup`, `npm run test:student:db`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Use a dedicated test database/schema. Accept one event, close/rebuild the app, and read it back. Record the commands. Demonstrate that a failing database write is not reported as accepted.

**Primary path:** `students/<student-id>/week-08/api/persistence.db.test.ts`.

**Proof for review:** A real database-backed event survives app restart; test cleanup affects only the disposable test namespace.

**Known trap:** A mocked repository test cannot establish PostgreSQL persistence.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-08/api/persistence.db.test.ts`.
3. Check that your test database name ends in `_test`. Never point this test at your practice database.
4. Read `shared/database/README.md` and set up your disposable test database.
5. Apply your migrations to that test database with the runner, before you run the test.
6. In the first test, build the app with a real `Pool` for the test database.
7. Insert one synthetic merchant in the test. The foreign key needs it.
8. Send one event for that merchant through the HTTP API.
9. Close the app with `await app.close()`. The app closes the pool.
10. Build a new app and a new `Pool` for the same test database.
11. Read the event list back and assert that your event is there with the same values.
12. Add a second test that makes the database write fail on purpose. Assert that the response is not a success.
13. Clean up only the rows your test created, inside the test namespace.
14. Run `npm run test:student:db -- <student-id>` from the repository root (same on Mac and Windows).
15. Write the exact commands you used in your Week 8 notes, so another person can repeat the proof.
16. How to think about it: persistence means the data lives in PostgreSQL, not in Node. The restart in the middle of the test is what makes the proof real.

**If you get stuck:**

- Read the test output line by line. It shows which step failed first.
- Check that you close the app with `await app.close()` before you rebuild it.
- Remove passwords, keys, connection strings and other secrets before you post in Discord.
- Ask in Discord with the command, the exact error text and the name of your test database.

##### 6. What to Commit

- [ ] `students/<student-id>/week-08/api/persistence.db.test.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E06.1 prove persistence and isolate the test`

### Two-hour problem-solving block (`P08.1`)

**Focus:** Nested data and lookup

Join small merchant/event arrays by ID in memory and preserve a merchant with no events; compare nested scans and a lookup.

**Evidence path:** `students/<student-id>/week-08/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open the problem-solving block text and read the focus and the proof list first.
2. Write two small in-memory arrays: one for merchants and one for events. Join them by ID.
3. Make sure a merchant with no events still appears in the result.
4. Solve it two ways: a nested scan and a lookup by ID. Write a short note on which one does less work.
5. Add tests for the empty case and one boundary case.
6. Break your code on purpose, keep the failing output, then fix it and write one plain sentence on what you changed.
7. Revisit one earlier exercise and redo it inside the same two hours.

**If you get stuck:**

Read the closest earlier exercise you already finished, and compare its loop with your loop. Remove passwords, keys and other secrets before you post. Ask in Discord with your code snippet and the exact failing test output.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/database/migrations/, shared/api/src/repository.ts and shared/api/test/persistence.db.test.ts`. Record scope, non-author review and actual proof in the [Week 8 contribution log](../shared/delivery/rotations/week-08.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-08` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 9](week-09.md).
