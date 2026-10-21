# Week 3: Work with collections and reusable modules

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + E: Engineering and Delivery

## 1. What We Are Doing

This week you work with lists of records instead of single values. You write summaries over the synthetic event fixture, build a keyed lookup, and split your code into modules that other files can import. At the end you have three small TypeScript files, tests for each, and honest errors when input is broken.

This week has three project tasks and one problem-solving block:

- `T02.2`: Summarise events using loops and collection methods (100 minutes)
- `T02.3`: Create a safe keyed lookup and explain its limits (100 minutes)
- `E02.2`: Separate modules and preserve parsing failures (100 minutes)
- `P03.1`: weekly problem-solving block (120 minutes)

Outcome: Correct collection summaries, reusable imports and honest malformed-input failures.

## 2. Why We Are Doing It

**The project need:** The merchant needs useful summaries over several records without changing the original event data.

You count events by kind, find events by ID and report invalid input. Your summaries leave the original records unchanged. You will reuse these skills later.

## 3. What to Learn First (Prerequisites)

**Before you start:** Use the supplied events.json bodies and the Week 2 pure function. SQL begins in Week 4; do not install another runtime or testing framework.

**Review these ideas first:**

- Arrays: an ordered list of values, indexed from 0.
- Iteration: visiting each item once, with a loop or with a method.
- filter and map: pick some items, or change each item, into a new array.
- Accumulator: a value you carry and update while you loop.
- Empty input: a list with zero items is a real case, not an error.
- Map: a key to value store with fast lookup by key.
- Modules: one file exports, another file imports, names stay separate.

**By the end of this week you can:**

- finish `T02.2`: arrays, iteration, filter/map, accumulator state and empty inputs
- finish `T02.3`: objects, Map, duplicate keys, strings and simple time/space reasoning
- finish `E02.2`: imports/exports, JSON parsing, runtime input and useful errors

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                           | Planned task minutes |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T02.2` | Arrays, iteration, filter/map, accumulator state and empty inputs. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)               |                  100 |
| `T02.3` | Objects, Map, duplicate keys, strings and simple time/space reasoning. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) |                  100 |
| `E02.2` | Imports/exports, JSON parsing, runtime input and useful errors. [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)                              |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- typescript array filter map
- javascript reduce accumulator
- javascript Map duplicate keys
- JSON.parse try catch error
- es modules .js specifier node

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Summarise events using loops and collection methods (`T02.2`)

##### 1. What We Are Doing

You write two versions of the same summary over the synthetic event fixture: one with a plain loop, one with filter and map. Then you compare the results. You work in VS Code on one file and run it in the terminal.

##### 2. Why We Are Doing It

A merchant operator wants counts per event kind, and a list of captured events only. This must never change the stored records. Summaries are read-only.

##### 3. What to Learn First

- How to loop over an array with for or for...of.
- How filter selects items and map transforms items into a new array.
- How to keep an accumulator while you loop, for example a count per kind.
- Why empty and single-item lists break naive code.
- Why counting records is not a money balance.

##### 4. Where to Find Resources

- javascript.info "Arrays" https://javascript.info/array
- javascript.info "Array methods" https://javascript.info/array-methods
- MDN "Loops" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops
- "TypeScript Course for Beginners - Learn TypeScript from Scratch!" https://www.youtube.com/watch?v=BwuLxPH8IDs from 1:15:31 to 1:27:21 (chapters Array Types and Tuples)
- Search keywords: "javascript filter vs for loop", "array reducer accumulator", "empty array edge case"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Load or import the synthetic event fixture, then implement captured-event selection and event-kind counts. Compare a loop with filter/map on the same data. Test empty and single-item lists as well as the complete fixture. Keep the original list unchanged; do not assume all events represent captured money.

**Primary path:** `students/<student-id>/week-03/typescript/collections.ts`.

**Proof for review:** Both implementations agree with fixture expectations, including empty input. Tests catch a wrong count and unintended input mutation.

**Known trap:** Counting records is not a financial balance; failed payments and refunds must not be silently added to a captured total.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open `fixtures/events.json` and read a few records. Find the field that names the event kind, and the field that tells you money was captured.
3. Create the file `students/<student-id>/week-03/typescript/collections.ts`. Replace `<student-id>` with your number, for example RB7.
4. Write one function that counts events per kind with a plain loop. It takes the list and returns an object with the counts.
5. Write a second function that returns only the captured events, using filter. Skip failed payments and refunds.
6. Write a third function that produces the same kind counts with filter and map, and compare it with the loop version.
7. Do not change the input list. If you need a sorted copy, copy it first with spread or slice.
8. Run the file from the repository root: `npm run practice -- students/<student-id>/week-03/typescript/collections.ts`
9. Add a test file in the same folder.
10. Cover an empty list, a one-item list and the full fixture.
11. Run it with `npm run test:practice -- <path to your test file>`
12. How to think about it: ask "what does my function return when the list is empty?" before you ask "does it work on real data?"

**If you get stuck:**

- Read the error text first. A message about `undefined` often means you read a field that some events do not have.
- Search "javascript filter map immutable" or "array reducer accumulator" and test a small array in the TypeScript Playground.
- Ask in Discord with the command you ran and the exact error text. Someone will look with you.

##### 6. What to Commit

- [ ] `students/<student-id>/week-03/typescript/collections.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T02.2 summarise events using loops and collection methods`

#### Task 2 - Create a safe keyed lookup and explain its limits (`T02.3`)

##### 1. What We Are Doing

You build an in-memory lookup by `provider_event_id` for this one fixture, using a Map. When two records share an id, you report it instead of overwriting. You work in VS Code and test in the terminal.

##### 2. Why We Are Doing It

Operators look up one event by its provider id all the time. A silent overwrite would hide a real conflict in the data, so the report matters as much as the lookup.

##### 3. What to Learn First

- How Map stores key and value pairs, and how `get`, `set` and `has` work.
- How to detect a duplicate key before you overwrite it.
- How to return "not found" clearly, for example `undefined`.
- Plain words for time and space: a keyed lookup skips a full scan, and it uses extra memory.

##### 4. Where to Find Resources

- javascript.info "Map and Set" https://javascript.info/map-set
- javascript.info "Object.keys, values, entries" https://javascript.info/keys-values-entries
- MDN "Arrays" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays
- Search keywords: "javascript Map get set has", "duplicate keys map detect", "find vs map lookup"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Build an in-memory lookup by provider_event_id for this one-source fixture. Use a Map and report duplicate fixture identities rather than silently overwriting them. Test missing and duplicate IDs. Compare a linear scan with a keyed lookup in plain language; the database-backed merchant identity comes later.

**Primary path:** `students/<student-id>/week-03/typescript/event-lookup.ts`.

**Proof for review:** A known ID is found, a missing ID is deliberate, and a duplicate fixture is reported without losing the original. Explain the extra memory used by the lookup.

**Known trap:** This practice lookup is not concurrent deduplication, authorization or a substitute for PostgreSQL uniqueness.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open `fixtures/events.json` and find the field `provider_event_id`. Check if any id appears twice.
3. Create `students/<student-id>/week-03/typescript/event-lookup.ts`. Replace `<student-id>` with your number, for example RB7.
4. Write a function that loops over the list and fills a Map keyed by `provider_event_id`.
5. Check with `has` before `set`.
6. If the key exists, push a duplicate report into a list. Do not replace the first record.
7. Return both the Map and the list of duplicates, so the caller sees the conflict.
8. Add a `findById` function. It returns `undefined` when the id is missing.
9. Handle the `undefined` case in your caller.
10. Write a second version with a linear scan using `find`.
11. Add a short comment: building the Map visits every record and uses extra memory. Compare repeated searches with `find` against repeated lookups in the completed Map.
12. Run it: `npm run practice -- students/<student-id>/week-03/typescript/event-lookup.ts`
13. Add a test file in the same folder with three cases: a known id, a missing id, a duplicate id.
14. Run it with `npm run test:practice -- <path to your test file>`.
15. How to think about it: say out loud what happens on the second record with the same id.

**If you get stuck:**

- Read the error message. If you get `undefined` back, check that the key you set is the same string you search for.
- Search "javascript Map has set" and try a five-line example in the TypeScript Playground.
- Ask in Discord with your command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-03/typescript/event-lookup.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T02.3 create a safe keyed lookup and explain its limits`

#### Task 3 - Separate modules and preserve parsing failures (`E02.2`)

##### 1. What We Are Doing

You move your helpers into modules that export them, and you write one small reader that imports them and loads the fixture. Broken JSON and a non-array body must fail with a clear error, not return an empty list. You work in VS Code and run tests in the terminal.

##### 2. Why We Are Doing It

The API will read input from outside one day. A reader that turns bad input into "no events" will hide failures from the merchant. Clear errors keep trust in the data.

##### 3. What to Learn First

- `export` in one file and `import` in another file.
- Why Node-oriented imports use the `.js` specifier, even for TypeScript files.
- `JSON.parse` throws on bad text, so wrap it in try/catch.
- `Array.isArray` to check the runtime shape before you loop.
- Why a TypeScript annotation on parsed JSON does not prove the shape.

##### 4. Where to Find Resources

- javascript.info "Modules, introduction" https://javascript.info/modules-intro
- javascript.info "Export and Import" https://javascript.info/import-export
- javascript.info "JSON methods, toJSON" https://javascript.info/json
- Mosh "Node.js Tutorial for Beginners: Learn Node in 1 Hour" https://www.youtube.com/watch?v=TlB_eWDSMt4 (78 min) from 15:22 to 32:59 (chapters Node Module System to Loading a Module). This part shows CommonJS modules, an older style. Your files use ES modules with `export` and `import`.
- Search keywords: "node esm .js specifier typescript", "JSON.parse try catch", "Array.isArray runtime check"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Move the summary/lookup helpers into exported modules and import them from one small fixture reader. Use .js specifiers in Node-oriented imports. Test malformed JSON and a non-array body in read-events.test.ts; do not treat either as an empty successful list. Record run, test and typecheck commands.

**Primary path:** `students/<student-id>/week-03/typescript/read-events.ts`.

**Proof for review:** A clean run reuses the modules, while malformed and wrong-shaped input fail deliberately. The tests import functions without automatically running a file-reading CLI.

**Known trap:** A TypeScript annotation on parsed JSON does not prove the runtime shape is correct.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open your `collections.ts` and your `event-lookup.ts` from this week. Choose which functions other files need.
3. Add `export` to each function you want to share in those two files.
4. Create `students/<student-id>/week-03/typescript/read-events.ts`. Replace `<student-id>` with your number, for example RB7.
5. Import your helpers with a `.js` specifier, for example `import { ... } from "./collections.js";`
6. Read `fixtures/events.json` with `node:fs`.
7. Parse the text inside `try/catch`. On a parse error, throw a new `Error` with a clear message.
8. Check the parsed value with `Array.isArray`.
9. If it is not an array, throw a clear `Error`. Do not return `[]`.
10. Run the reader from the repository root: `npm run practice -- students/<student-id>/week-03/typescript/read-events.ts`
11. Create `students/<student-id>/week-03/typescript/read-events.test.ts`. Import the functions directly.
12. Make sure importing the file does not run the file reading step. Keep the command line part separate.
13. Write three tests: a valid array, malformed JSON text, and a non-array body.
14. Run `npm run test:practice -- students/<student-id>/week-03/typescript/read-events.test.ts`
15. Run `npm run typecheck`.
16. Record your run, test and typecheck commands in a short note in your folder.
17. How to think about it: ask "what is the worst thing this reader can return when input is bad?" The answer should be an error, not a quiet empty list.

**If you get stuck:**

- Read the error message. `SyntaxError: Unexpected token` is `JSON.parse` telling you the text is broken. Do not catch it and return an empty list.
- Search "JSON.parse try catch" or "node esm .js specifier typescript". Check [docs/09-troubleshooting](../docs/09-troubleshooting.md).
- Ask in Discord with the exact command and the full error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-03/typescript/read-events.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E02.2 separate modules and preserve parsing failures`

### Two-hour problem-solving block (`P03.1`)

**Focus:** Arrays and immutable summaries

Count event kinds without changing the input array; test empty input and all three supported kinds.

**Evidence path:** `students/<student-id>/week-03/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Read the problem-solving block text once, then write down in one line what you must count.
2. Open your Week 3 folder and make a new file for the block, or reuse a file you already have. Keep a copy of the input array.
3. Write the count of event kinds with a loop. Do not touch the input array.
4. Add tests for an empty list, one item, and all three supported kinds.
5. Run them with `npm run test:practice -- <path to your test file>`.
6. Make one wrong version on purpose and run it.
7. Write one line about why it failed. Then fix it.
8. Revisit one earlier exercise from this week or Week 2 and re-run it.
9. Write your plain-language explanation before the two hours end.

**If you get stuck:**

Read your own test output line by line before you change code. If you are still stuck, ask in Discord with your file path, the command you ran and the exact error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/simulator/event-summary.ts and shared/simulator/test/`. Record scope, non-author review and actual proof in the [Week 3 contribution log](../shared/delivery/rotations/week-03.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-03` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 4](week-04.md).
