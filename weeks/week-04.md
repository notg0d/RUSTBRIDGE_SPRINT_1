# Week 4: Represent events and ask the first SQL questions

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + D: SQL and Persistence + E: Engineering and Delivery

## 1. What We Are Doing

This week you give the sandbox events a clear shape. You write a TypeScript type for one event, you load the supplied practice data into your own PostgreSQL database, and you write the field rules for the event input. At the end you have typed event data, real SQL answers and one written contract that the team can agree on.

This week has three project tasks and one problem-solving block:

- `T02.1`: Work with a typed event list (100 minutes)
- `D01.1`: Load and query the practice database (130 minutes)
- `E02.1`: Agree the event field rules (70 minutes)
- `P04.1`: weekly problem-solving block (120 minutes)

Outcome: Typed event data, real SQL answers and an explicit input contract.

## 2. Why We Are Doing It

**The project need:** The merchant needs event counts, while fields such as amounts and event kinds need an agreed meaning.

The merchant client wants counts of payment events. To count something, the team first needs to agree what a field means: what an event kind is, what an amount is, which fields are required. Types, SQL queries and written field rules help you find mistakes. This week you practise all three.

## 3. What to Learn First (Prerequisites)

**Before you start:** Bring Week 1's inspector. Install PostgreSQL using setup guide Step 4 and Step 5 and load fixtures/practice.sql into your personal practice database. The fixture is supplied now, not promised by a later week.

**Review these ideas first:**

- Type alias: a name you give to the shape of an object.
- Array of typed objects: many values that share one shape.
- Missing value: `undefined` is not the same as `0`.
- Table, row, column: the three basic pieces of a SQL table.
- SELECT, WHERE, ORDER BY, GROUP BY: four ways to ask a database question.
- Integer minor units: money stored as whole paise, never as floating rupees.
- Runtime input: JSON from another process is untrusted until you check it.

**By the end of this week you can:**

- finish `T02.1`: primitive types, arrays, object types, branches and iteration
- finish `D01.1`: tables, rows, SELECT, WHERE, ORDER BY and GROUP BY
- finish `E02.1`: runtime input, integer minor units, timestamps and non-goals

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                   | Planned task minutes |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T02.1` | Primitive types, arrays, object types, branches and iteration. [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) |                  100 |
| `D01.1` | Tables, rows, SELECT, WHERE, ORDER BY and GROUP BY. [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html)                                                                                                         |                  130 |
| `E02.1` | Runtime input, integer minor units, timestamps and non-goals. [MerchantDesk API contract](../docs/04-api-and-security-contract.md)                                                                                                     |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- "typescript type alias object array"
- "typescript filter vs for loop"
- "postgres select where order by group by"
- "psql load sql file"
- "integer paise vs floating point money"

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Work with a typed event list (`T02.1`)

##### 1. What We Are Doing

You define a TypeScript type that matches the real event fields in the fixture. Then you take several events, pick out the captured payments and count them, first with a loop and then with `filter`. You work in VS Code and run the file and the type check from the terminal.

##### 2. Why We Are Doing It

MerchantDesk must answer "how many payments were captured". A typed list of events is the first step to a count the merchant can trust.

##### 3. What to Learn First

- `type` declares the shape of an object, field by field.
- An array can hold many objects of one type: `Event[]`.
- `for...of` visits every item and lets you keep a counter.
- `filter` returns a new, smaller array; you then read its length.
- A field can be missing (`undefined`). That is a different fact from a value of `0`.

##### 4. Where to Find Resources

- TypeScript "Everyday types" https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- "TypeScript Course for Beginners - Learn TypeScript from Scratch!" https://www.youtube.com/watch?v=BwuLxPH8IDs (3 h 17 min) from 0:40:56 to 1:53:55 (chapters Using Types to Type Aliases)
- Read `fixtures/events.json` in the repository. Use only the field names that appear there.
- Search keywords: "typescript type alias object array", "typescript filter array of objects", "typescript undefined vs zero"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Define an event type using the actual fixture fields. Iterate over several events, select captured payments and count them. Compare a loop with filter. Explain one case where a missing value differs from zero.

**Primary path:** `students/<student-id>/week-04/typescript/event-list.ts`.

**Proof for review:** The captured count matches the fixture. npm run typecheck rejects an intentionally wrong assignment; restore valid code and rerun successfully before committing.

**Known trap:** Type annotations do not validate JSON received from another process.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open your Week 1 inspector file and read it again. You keep the same habits this week.
3. Open `fixtures/events.json` and read two or three events. Note the field names you see.
4. Create the file `students/<student-id>/week-04/typescript/event-list.ts`. Replace `<student-id>` with your number, for example RB7.
5. Write a type for one event at the top of the file, using only the field names from the fixture.
6. Below the type, copy all events from `fixtures/events.json` into your typed array, and type the array with your type.
7. Write a loop that counts the captured payments. Print the count.
8. Write the same count with `filter`. Print both numbers and check that they match.
9. Run the file from the repository root: `npm run practice -- students/<student-id>/week-04/typescript/event-list.ts`. Replace `<student-id>` with your number before you run it.
10. Break it on purpose: assign a text value to a number field.
11. Run `npm run typecheck` and read the error.
12. Restore the correct code and run `npm run typecheck` again.
13. Commit only when the type check passes.

How to think about it: a missing amount means "we do not know the amount". Zero means "the amount is zero". Write one short paragraph in a comment that shows the difference with your own example.

**If you get stuck:**

- Read the type check error line by line. It names the file, the line and the type it expected.
- Search "typescript type alias object array" or "typescript filter array of objects".
- Ask in Discord with the command you ran and the exact error text. Do not paste secrets or your whole file.

##### 6. What to Commit

- [ ] `students/<student-id>/week-04/typescript/event-list.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T02.1 work with a typed event list`

#### Task 2 - Load and query the practice database (`D01.1`)

##### 1. What We Are Doing

You install PostgreSQL 17, create your own personal practice database and load the supplied `fixtures/practice.sql` into it. Then you write real SQL questions in `first-queries.sql` and record the commands and the answers in `NOTES.md`. You work in the terminal with `psql` and in VS Code for the notes.

##### 2. Why We Are Doing It

MerchantDesk stores events in PostgreSQL. Before the shared schema exists, you practise on safe synthetic data. This is how you learn to ask "what happened" questions of real rows.

##### 3. What to Learn First

- A table holds rows, and every row has the same columns.
- `SELECT` chooses columns. `WHERE` chooses rows. `ORDER BY` sorts. `GROUP BY` makes groups for counting.
- `COUNT(*)` and `SUM(...)` are aggregate functions: they turn many rows into one number.
- `psql` is the PostgreSQL command line tool. It is the same on Mac and Windows.
- This is your personal practice database, not the shared final schema.

##### 4. Where to Find Resources

- docs/02 setup guide, sections 4 and 5, in the `docs/` folder of the repository. These sections show how to install PostgreSQL and start `psql`.
- PostgreSQL tutorial "Creating a New Table" https://www.postgresql.org/docs/17/tutorial-table.html and "Populating a Table With Rows" https://www.postgresql.org/docs/17/tutorial-populate.html
- PostgreSQL tutorial "Querying a Table" https://www.postgresql.org/docs/17/tutorial-select.html and "Aggregate Functions" https://www.postgresql.org/docs/17/tutorial-agg.html
- Optional: freeCodeCamp "Learn PostgreSQL Tutorial - Full Course for Beginners" https://www.youtube.com/watch?v=qw--VYLpxG4 (4 h 19 min; use the video chapters list, watch only the parts about SELECT, WHERE, ORDER BY and GROUP BY)
- Search keywords: "postgres select where order by group by", "psql load sql file", "postgres count group by example"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Load the supplied SQL using the setup guide, then write queries for captured events, merchant totals and the latest events. Put answers and commands in NOTES.md. This is a personal practice database, not the shared final schema.

**Primary path:** `students/<student-id>/week-04/sql/first-queries.sql`.

**Proof for review:** Queries return real rows from the supplied fixture, including both merchants. State what one row means.

**Known trap:** Install time belongs inside this task's budget. Ask for setup help instead of borrowing a personal database.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open the docs/02 setup guide and go to section 4. Follow it to install PostgreSQL 17. Install time counts inside this task, so start early.
3. Follow section 5 of the guide to start `psql` and confirm the install works. `psql` is the same command on Mac and Windows.
4. Create your own practice database, using the names and steps from the guide. Do not borrow another student's database.
5. Follow setup guide section 5 to load `fixtures/practice.sql` into your practice database.
6. Run `SELECT * FROM` one of the tables to see the rows. Check that you see both merchants.
7. Create the file `students/<student-id>/week-04/sql/first-queries.sql`. Replace `<student-id>` with your number, for example RB7. Put one query per block, with a short comment above each one.
8. Write a query for captured events only, using `WHERE`.
9. Write a query for merchant totals, using `GROUP BY` and a count.
10. Write a query for the latest events, using `ORDER BY`.
11. Run each query in `psql` and copy the result into `students/<student-id>/week-04/sql/NOTES.md` together with the command you used.

How to think about it: write one sentence in `NOTES.md` that says what one row in your result means in plain English. If you cannot say it in one sentence, the query probably needs one more step.

**If you get stuck:**

- Run one query at a time in `psql` and read the error. PostgreSQL usually names the missing column or table.
- Search "postgres count group by example" or "psql load sql file".
- Read docs/09 troubleshooting in the `docs/` folder. Then ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-04/sql/first-queries.sql` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `D01.1 load and query the practice database`

#### Task 3 - Agree the event field rules (`E02.1`)

##### 1. What We Are Doing

You write a short design document for the event input: required fields, bounds, allowed event kinds, and the rule for a duplicate event. You also explain why the merchant identity will come from authentication later. You work in VS Code on one Markdown file.

##### 2. Why We Are Doing It

A count is only correct if the team agrees on what was counted. This document is the agreement the API will enforce in Week 7.

##### 3. What to Learn First

- Runtime input means data that arrives while the program runs. You cannot trust it until you check it.
- A bound is a limit, for example a maximum amount or a minimum length.
- Integer minor units: write money as whole paise, for example 2599, not 25.99.
- A timestamp needs a format and a time zone rule.
- Non-goals: things this course does not do. Clearing the doubt early saves work.

##### 4. Where to Find Resources

- [docs/01 project brief](../docs/01-project-brief.md)
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md)
- Read `fixtures/cases.json` and `fixtures/events.json` in the repository. Every case in `cases.json` needs a decision from you.
- Search keywords: "integer minor units money", "api input validation required fields", "why merchant id from authentication not body"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Use docs/01-project-brief.md and fixtures/cases.json to specify required fields, bounds, allowed event kinds and the duplicate key. Explain why merchant identity will eventually come from authentication, not an arbitrary body field.

**Primary path:** `students/<student-id>/week-04/design/event-contract.md`.

**Proof for review:** Every fixture case has an expected accept/reject result and a reason. Money is expressed in integer paise, not floating point rupees.

**Known trap:** Sandbox event data is not authorization and this course does not process payments.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/01 project brief](../docs/01-project-brief.md), then [docs/04 API and security contract](../docs/04-api-and-security-contract.md). Note the parts about events and money.
3. Open `fixtures/cases.json` and `fixtures/events.json` and list every field name you see.
4. Create the file `students/<student-id>/week-04/design/event-contract.md`. Replace `<student-id>` with your number, for example RB7.
5. Write a table of required fields: name, type, required or optional, and a short reason.
6. Write the allowed event kinds. Take them only from the fixture and the contract.
7. Write the bounds for each numeric field. State clearly that money is an integer number of paise.
8. Write the timestamp format and time zone rule from the API contract.
9. Write which field makes an event a duplicate, and what the API should do when a duplicate arrives.
10. Go through `fixtures/cases.json` case by case. For each case write "accept" or "reject" and a one-line reason.
11. Add a short section on merchant identity: why it will come from authentication and not from a body field.
12. Add a short non-goals section that says this course does not process real payments.

How to think about it: imagine you are the maintainer reading this next month. Can you decide on a new case without asking the author? If not, add one more line.

**If you get stuck:**

- Open the API contract again and look for the field you are unsure about. Quote the line you found in your document.
- Search "integer minor units money" or "why merchant id from authentication not body".
- Ask in Discord with the case name and what you think the answer is. Say what you already checked.

##### 6. What to Commit

- [ ] `students/<student-id>/week-04/design/event-contract.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E02.1 agree the event field rules`

### Two-hour problem-solving block (`P04.1`)

**Focus:** Typed records and simple scans

Find the first matching event ID in a typed array and return an explicit not-found result; compare loop and find.

**Evidence path:** `students/<student-id>/week-04/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Read the Focus and Proof above. Write down the result you must produce.
2. Open VS Code in the repository root and go to your `students/<student-id>/week-04/` folder.
3. Write the function in small pieces. Run it after each piece with `npm run practice -- <path to your file>`.
4. Add the checks for the empty case and the boundary cases. Print the expected result and the actual result for each one. Run them again.
5. Write the plain-language explanation and the one corrected attempt.
6. Revisit one earlier exercise before the block ends, then stop. Two hours is the budget.

**If you get stuck:**

Run the smallest check first and print the value you got. Search "typescript union return type" or ask in Discord with your check and the exact output.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/event-contract.md and shared/database/practice-notes.md`. Record scope, non-author review and actual proof in the [Week 4 contribution log](../shared/delivery/rotations/week-04.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-04` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 5](week-05.md).
