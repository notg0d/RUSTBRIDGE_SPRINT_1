# Week 5: Functions, relational boundaries and first tests

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + D: SQL and Persistence + E: Engineering and Delivery

## 1. What We Are Doing

This week you turn the Week 4 event contract into a reusable check. You write one function that accepts an unknown value and returns a clear result, you model merchants and events in SQL, and you write tests that catch a real bug. At the end you have a validator, a small related database model, a test file and short written notes.

This week has three project tasks and one problem-solving block:

- `T03.1`: Validate a small unknown input (110 minutes)
- `D02.1`: Model and test the relationship (100 minutes)
- `E03.1`: Prove and break the validator (90 minutes)
- `P05.1`: weekly problem-solving block (120 minutes)

Outcome: A reusable validation exercise, a relational model and tests that detect a bug.

## 2. Why We Are Doing It

**The project need:** The event contract must become reusable checks, and events must remain attached to a real merchant.

The merchant operator must trust what the system records. If a bad event can enter, every later query is wrong. So the event contract needs reusable checks, and each event must stay attached to a real merchant. Check incoming values before using them. Use a foreign key to keep each event linked to an existing merchant. Backend teams do this work every day.

## 3. What to Learn First (Prerequisites)

**Before you start:** Bring the Week 4 contract and a loaded practice database. Use the fixture cases instead of searching for external data.

**Review these ideas first:**

- `unknown` is a safe type: the compiler makes you check before you use a value.
- Narrowing is the check itself: `typeof`, `=== null`, and early returns teach the compiler what you have.
- A pure function returns a value and does not print or change outside state.
- A primary key identifies one row; a foreign key points to a row in another table.
- A join combines rows from two tables and can keep or drop rows with no match.
- `node:test` runs tests; an assertion states what must be true.

**By the end of this week you can:**

- finish `T03.1`: functions, unknown, narrowing, return values and modules
- finish `D02.1`: primary keys, foreign keys, joins, required fields and constraints
- finish `E03.1`: node:test, assertions, test cases and focused debugging

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                                                     | Planned task minutes |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T03.1` | Functions, unknown, narrowing, return values and modules. [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html), [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html), [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html) |                  110 |
| `D02.1` | Primary keys, foreign keys, joins, required fields and constraints. [PostgreSQL constraints](https://www.postgresql.org/docs/17/ddl-constraints.html), [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html)                                                        |                  100 |
| `E03.1` | node:test, assertions, test cases and focused debugging. [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)                                                                                                                                                       |                   90 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- typescript narrowing unknown
- typescript function return union type
- postgres foreign key violation error
- postgres inner join vs left join
- node:test assert strict example

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Validate a small unknown input (`T03.1`)

##### 1. What We Are Doing

You write one pure function in `students/<student-id>/week-05/typescript/validate-event.ts`. The function takes a value typed `unknown` and returns either a small valid event or a list of clear issues. You run it in the terminal with the practice runner, using fixture records and your own bad cases.

##### 2. Why We Are Doing It

This function becomes the reusable check for the whole event contract. When it returns clear issues instead of crashing, a future route can answer with a useful error message.

##### 3. What to Learn First

- A function signature: parameter types and a return type.
- `unknown` forces a check before any property access.
- Narrowing with `typeof value !== "object"` and `value === null`.
- The `in` operator, to check that a property exists before you read it.
- Returning a small result object instead of printing.
- `export` and `import` between two files.

##### 4. Where to Find Resources

- TypeScript "Functions" https://www.typescriptlang.org/docs/handbook/2/functions.html
- TypeScript "Narrowing" https://www.typescriptlang.org/docs/handbook/2/narrowing.html
- TypeScript "Modules" https://www.typescriptlang.org/docs/handbook/2/modules.html
- Watch "TypeScript Course for Beginners - Learn TypeScript from Scratch!" https://www.youtube.com/watch?v=BwuLxPH8IDs from 1:36:30 to 1:43:01 (Union Types) and from 2:11:18 to 2:15:02 (The Unknown Type)
- Search: `typescript narrowing unknown`, `typescript return union object error`

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Write a pure function that accepts unknown and returns either a small valid event or explicit issues. Handle null, wrong kinds and non-integer/out-of-range amounts. Keep validation separate from printing. Focus on the agreed subset; full route JSON Schema comes in Week 7.

**Primary path:** `students/<student-id>/week-05/typescript/validate-event.ts`.

**Proof for review:** Valid fixture records pass and bad amount, missing ID, null and unknown kind produce errors without a crash.

**Known trap:** An as Event assertion changes the compiler's view, not the received data.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-05/typescript/validate-event.ts`. Replace `<student-id>` with your number, for example RB7.
3. Write your Week 4 event subset at the top as comments: field names, types, and allowed amount range.
4. Write one exported function. It takes one parameter typed `unknown` and returns a result value. The function does not print anything.
5. Write a list of the input cases the function must handle, and the result each case must give. Use these cases: a good record from the fixtures, a `null` value, a value that is not an object, a record with a missing id, a record with an unknown kind, and an amount that is not an integer or is out of range.
6. For every bad case in your list, the function must return a clear issue with a short message. It must not throw for normal bad input. It must not crash.
7. For the good record, the function must return the small valid event.
8. Add a short block at the bottom of the file that calls the function with a few records. Print the result there, outside the function.
9. Run this from the repository root: `npm run practice -- students/<student-id>/week-05/typescript/validate-event.ts`. Use records from `fixtures/events.json` and add your own bad cases.
10. Compare each printed result with the case list from step 5. Every case must give the result you wrote down.
11. Run `npm run typecheck`. Fix any type error before you continue.
12. How to think about it: at every line, ask "what do I know about this value now?" If you do not know, add a check. This is new for most people. Go slowly.
13. Optional hint: the Narrowing page has sections on `typeof` guards and on the `in` operator. They help you check a value before you read a property.

**If you get stuck:**

- Read the exact error text first. A message like "Property does not exist on type 'unknown'" means you skipped a narrowing check.
- Search `typescript narrowing unknown` and re-read the Narrowing page section on `typeof` guards.
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-05/typescript/validate-event.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T03.1 validate a small unknown input`

#### Task 2 - Model and test the relationship (`D02.1`)

##### 1. What We Are Doing

You create a small schema in your practice database with two related tables. You break the relationship on purpose twice and read the database errors. You finish with a join that shows merchant names next to events, and a short written explanation in your week-05 notes.

##### 2. Why We Are Doing It

Events only make sense with a merchant behind them. A foreign key stops an event from pointing at a merchant that does not exist, which protects every later report.

##### 3. What to Learn First

- `CREATE SCHEMA` to keep your work apart from other students.
- Prefixing every table name with your own schema name.
- Primary key and foreign key constraints in `CREATE TABLE`.
- The error you get from a broken foreign key and from a duplicate primary key.
- Inner join and left join, and which one keeps unmatched rows.
- One row means one thing: write it down before you write SQL.

##### 4. Where to Find Resources

- PostgreSQL tutorial "Foreign Keys" https://www.postgresql.org/docs/17/tutorial-fk.html
- PostgreSQL tutorial "Joins Between Tables" https://www.postgresql.org/docs/17/tutorial-join.html
- PostgreSQL constraints https://www.postgresql.org/docs/17/ddl-constraints.html
- Search: `postgres foreign key violation`, `postgres left join unmatched rows`

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Draw merchants and events with one-row meanings. In a new schema inside your practice database, create a small pair of related tables and try a broken foreign key and a duplicate primary key. Join events to merchant names and explain unmatched rows.

**Primary path:** `students/<student-id>/week-05/sql/relationships.sql`.

**Proof for review:** The database rejects the deliberate relational mistakes; your join result is explained in NOTES.md.

**Known trap:** Do not edit or destroy another student's data. The final shared migration is written in Week 8.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-05/sql/relationships.sql`.
3. Draw merchants and events in your week-05 notes. State what one row means in each table.
4. Start the file with `CREATE SCHEMA` using your student id in the schema name. This keeps your tables separate from other students.
5. Prefix every table name with your schema name: in `CREATE TABLE`, in inserts and in joins. A table name with no schema goes to the default schema.
6. Create two tables, merchants and events. Give merchants a primary key. Give events a foreign key that points to it. Add one comment line above each table that says what one row means.
7. Open psql on your practice database from the repository root, using the same connection you used in Week 4.
8. Run the SQL using the method you used in Week 4.
9. Insert one merchant and two events for that merchant. Use your schema name in every table name.
10. Try to insert an event with a merchant id that does not exist. Read the error and keep the text. Then try to insert a duplicate primary key. Read that error too.
11. Add a second merchant with no events. Write an inner join from merchants to events and run it.
12. Write a left join from merchants to events and run it. Compare the two results and look for the merchant with no events.
13. In `NOTES.md` in your week-05 folder, explain why the database rejected the first insert.
14. In the same file, explain why the database rejected the second insert.
15. In the same file, explain why the merchant with no events appears in one join and not in the other.
    How to think about it: a foreign key links one row to another row. Ask what the database should do when that link cannot be made.

**If you get stuck:**

- If psql reports a permission error, you are probably in another student's schema. Check that every table name starts with your own schema name.
- If the file does not run, check the semicolon at the end of each statement, then run it again the same way.
- Search `postgres foreign key violation` or ask in Discord with the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-05/sql/relationships.sql` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `D02.1 model and test the relationship`

#### Task 3 - Prove and break the validator (`E03.1`)

##### 1. What We Are Doing

You add a test file next to your validator. You write at least four tests, one of them with bad input. Then you delete one check in the validator, watch a test fail, and put the check back.

##### 2. Why We Are Doing It

Tests are the proof that the checks really run. A recorded failing test shows the team that the test can catch a real bug, not just pass by luck.

##### 3. What to Learn First

- `test` and `assert` from `node:test` and `node:assert/strict`.
- Importing your own module with a relative path.
- One test, one behaviour, with a name that says what is checked.
- Reading a failing test output: expected value, actual value, line number.

##### 4. Where to Find Resources

- Node 22 test runner https://nodejs.org/docs/latest-v22.x/api/test.html
- TypeScript "Functions" https://www.typescriptlang.org/docs/handbook/2/functions.html
- Search: `node:test assert strict example`, `nodejs test runner run single file`

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Add at least four tests, including one bad input. Run npm run test:practice -- followed by this test path. Deliberately remove a check, observe a failing test and restore it. Link one peer review.

**Primary path:** `students/<student-id>/week-05/typescript/validate-event.test.ts`.

**Proof for review:** A recorded test fails for the introduced bug and passes after restoration.

**Known trap:** A green run without an assertion does not prove validation.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-05/typescript/validate-event.test.ts` next to your validator file.
3. Import `test` from `node:test` and `assert` from `node:assert/strict`. Import your validation function from `./validate-event.ts`.
4. Write at least four tests: one good record, one bad amount, one missing id, one `null` value. Add one unknown kind if you have room.
5. Every test must assert on the returned value. A test with no assertion proves nothing.
6. Run from the repository root: `npm run test:practice -- students/<student-id>/week-05/typescript/validate-event.test.ts`
7. Open your validator and delete one check on purpose. Run the tests again. Copy the failing output into your notes. This is your proof.
8. Put the check back. Run the tests again and confirm that they pass.
9. Share the test file with one peer in Discord and link their review in your pull request description.
10. How to think about it: a test is a claim about behaviour. Put the claim in the test name before you write the assertion.

**If you get stuck:**

- If the runner finds no tests, check that the file name ends in `.test.ts` and that the path is exact.
- If an import fails, check the relative path and keep the `.ts` extension.
- Search `node:test assert strict example`, or ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-05/typescript/validate-event.test.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E03.1 prove and break the validator`

### Two-hour problem-solving block (`P05.1`)

**Focus:** Boundary cases and tests

Validate a provider ID against its length/character rules and explain tests at each boundary.

**Evidence path:** `students/<student-id>/week-05/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Read the problem-solving block for this week and write the goal in one sentence.
2. Open the problem-solving guide, `docs/14-problem-solving.md`, and find the exact provider ID length and character rules. Do not guess limits. If you cannot find them, ask in Discord.
3. Open VS Code in the repository root and create your working file in your week-05 folder.
4. Write the provider ID rules as a short list: length, allowed characters, empty case.
5. Write the check and one test per boundary: empty, shortest valid, longest valid, one character too many, one bad character.
6. Run every test with `npm run test:practice -- <your test file>` and record one attempt that fails. Fix it and run again.
7. Write a plain-language explanation of each boundary, then revisit one earlier exercise from this week inside the same two hours.

**If you get stuck:**

Run the tests before you change anything, and read the first failing line. If you are stuck for more than ten minutes, ask in Discord with your command, the exact error text and what you expected.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/data-model.md and shared/api/test/contract.test.ts`. Record scope, non-author review and actual proof in the [Week 5 contribution log](../shared/delivery/rotations/week-05.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-05` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 6](week-06.md).
