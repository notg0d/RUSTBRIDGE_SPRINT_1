# Week 2: Make values, decisions and functions explainable

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + E: Engineering and Delivery

## 1. What We Are Doing

This week you keep working in TypeScript files, with no database, no server and no React. You trace values by hand before you run them. Trace means write how values change, step by step. Then you make every decision in your code explicit. At the end you have small pure functions, tests that prove them, and a written debugging story from a real mistake you repaired. A pure function returns the same result for the same input and changes nothing outside itself.

This week has three project tasks and one problem-solving block:

- `T01.2`: Trace values and make explicit decisions (100 minutes)
- `T01.3`: Extract and test a pure summary function (100 minutes)
- `E01.3`: Investigate one small programming mistake (100 minutes)
- `P02.1`: weekly problem-solving block (120 minutes)

Outcome: Small pure functions, deliberate branches and a reproduced debugging correction.

## 2. Why We Are Doing It

**The project need:** A merchant event summary needs predictable decisions, not copied code that only works for one example.

The MerchantDesk summary must give the same answer for the same event, every time. If one branch treats zero paise as "missing", or accepts the text "500" as a number, a merchant operator reads a wrong total. Backend work is mostly this: small functions with clear decisions, plus tests that catch a change you did not mean.

## 3. What to Learn First (Prerequisites)

**Before you start:** Continue the Week 1 inspector. Use TypeScript files to practise JavaScript behavior; no PostgreSQL, server or React is needed.

**Review these ideas first:**

- const and let: which binding can take a new value
- Primitive values: string, number, boolean, undefined, null
- Strict equality ===, which compares value and type
- Truthiness: which values act as true inside if
- Integer paise: whole numbers kept apart from display text
- Pure function: same input, same output, no side effects. A side effect is printing, reading a file or changing the input.
- Assertion: a check that fails the test when the result is wrong

**By the end of this week you can:**

- finish `T01.2`: const/let, primitive values, strict equality, conditions and integer arithmetic
- finish `T01.3`: parameters, return values, scope, pure functions and assertions
- finish `E01.3`: reading stack traces, minimal reproductions, feedback and repair

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                                                | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T01.2` | const/let, primitive values, strict equality, conditions and integer arithmetic. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [TypeScript for new programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch)          |                  100 |
| `T01.3` | Parameters, return values, scope, pure functions and assertions. [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)                                                              |                  100 |
| `E01.3` | Reading stack traces, minimal reproductions, feedback and repair. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- "javascript strict vs loose equality"
- "typescript narrowing unknown"
- "javascript check if string is number"
- "node test runner assert example"
- "typescript function parameter type"

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Trace values and make explicit decisions (`T01.2`)

##### 1. What We Are Doing

You write one TypeScript file with six small cases built from one synthetic event. For each case you write your prediction first, then you run the file and compare. You work in VS Code and run the file from the terminal.

##### 2. Why We Are Doing It

A merchant summary must never invent an amount. This task trains the exact check that stops a missing value, or a text value, from becoming a number in a total.

##### 3. What to Learn First

- const keeps a binding, let allows a new value
- Strict equality === compares value and type
- if / else if / else forces one clear path
- Integer paise stay whole numbers, formatting comes later
- Read the type of a value before you do arithmetic on it

##### 4. Where to Find Resources

- javascript.info "Comparisons" https://javascript.info/comparison
- javascript.info "Conditional branching: if, '?'" https://javascript.info/ifelse
- MDN "Conditionals" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals
- MDN "Math" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math
- Search: "javascript strict vs loose equality", "javascript check if string is number"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Write small examples using one synthetic event. Distinguish a missing amount, zero, a numeric string and an integer. Use explicit branches to produce a summary or a stated input issue. Trace the values before running the program; keep integer paise separate from display formatting.

**Primary path:** `students/<student-id>/week-02/typescript/decisions.ts`.

**Proof for review:** Recorded predictions match the actual output for at least six cases, including missing, zero and wrong-type values. Explain one corrected prediction.

**Known trap:** Truthiness and loose equality can hide zero or turn bad input into apparently valid data.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the folder `students/<student-id>/week-02/typescript/`. Replace `<student-id>` with your number, for example RB7.
3. Create the file `decisions.ts` in that folder.
4. Write one synthetic event as a const at the top, with an amount field. Use fake data only.
5. Write six cases that each change only the amount field: missing amount, zero, the text "500", the integer 500, a negative amount, and a boolean as the amount.
6. Print each case with a label, so the output shows which case produced which line.
7. Before you run anything, write a comment with your prediction for each of the six cases.
8. Run this from the repository root: `npm run practice -- students/<student-id>/week-02/typescript/decisions.ts`
9. Compare the real output with your predictions and write "match" or "wrong" next to each one.
10. Add explicit branches, so each case ends in a summary or in a stated input issue.
11. Run `npm run typecheck` and fix any type error it reports.
12. How to think about it: before each branch, ask "what type arrives here, and what should happen if it is not a number?"

**If you get stuck:**

- Read the real output line by line next to your written prediction. One of them is wrong, and the difference shows you which.
- Search "javascript strict vs loose equality" or "javascript check if string is number".
- Ask in Discord with the command you ran and the exact output text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-02/typescript/decisions.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T01.2 trace values and make explicit decisions`

#### Task 2 - Extract and test a pure summary function (`T01.3`)

##### 1. What We Are Doing

You move the decision logic out of the inspector into one function that takes a typed event and returns a summary. The function never prints and never reads a file. You add a test file with assertions and keep calling the function from the inspector. You work in VS Code and run files and tests from the terminal.

##### 2. Why We Are Doing It

This summary function is the part of MerchantDesk that later layers call: the simulator, the API and the tests. Small, pure and tested means one change cannot quietly break a merchant total.

##### 3. What to Learn First

- Parameters are the inputs, return gives the result back
- Local variables live only inside the function
- A pure function has no printing, no file reads and no changes to its input
- An assertion is a check that fails the test when the result is wrong
- Typed parameters, so TypeScript warns a caller who sends the wrong shape
- export and import: export lets another file use the function by name, import brings it in

##### 4. Where to Find Resources

- javascript.info "Functions" https://javascript.info/function-basics
- javascript.info "Arrow functions, the basics" https://javascript.info/arrow-functions-basics
- MDN "Functions" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions
- Node 22 test runner https://nodejs.org/docs/latest-v22.x/api/test.html
- Mosh "JavaScript Course for Beginners" https://youtu.be/W6NZfCO5SIk (48 min) from 39:41 to the end, chapters Functions and Types of Functions
- Search: "node test runner assert example", "typescript function return type object"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Extract a function from the inspector that takes an explicitly typed event and returns a summary without reading files or printing. Write summary.test.ts with assertions for at least three event kinds and an amount. Explain parameters, local variables and return values. Continue calling it from the inspector.

**Primary path:** `students/<student-id>/week-02/typescript/summary.ts`.

**Proof for review:** The same input produces the same summary, tests fail when a result is deliberately wrong, and running the function does not mutate the input.

**Known trap:** A console message or copied expected value without an assertion is not a test.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-02/typescript/summary.ts`.
3. Write an exported function that takes one parameter with an explicit type and returns a summary.
4. Keep the body pure: no console.log, no file reads, and no change to the event you receive.
5. Create `summary.test.ts` next to it and import the test runner and an assertion helper. The Node 22 test runner page shows the correct imports.
6. Write at least four assertions: one for each of three event kinds, and one for an amount.
7. Run from the repository root: `npm run test:practice -- students/<student-id>/week-02/typescript/summary.test.ts`
8. Change one expected value in the test.
9. Run the same command again and look at the red result.
10. Put the correct value back and run again to see it pass.
11. Save a copy of the input field values in a separate const before you call the function.
12. After the call, assert that each field still has the same value.
13. Call the function from your Week 1 inspector at `students/<student-id>/week-01/typescript/inspector.ts`.
14. Run it with `npm run practice -- students/<student-id>/week-01/typescript/inspector.ts`
15. Run `npm run typecheck`.
16. How to think about it: describe the function in one sentence, "it takes X and gives back Y", then check that your code matches that sentence.

**If you get stuck:**

- Read the first failing assertion at the top of the test output. The message usually shows expected and actual.
- Search "node test runner assert example" and compare your imports with the Node 22 page.
- Ask in Discord with the test command and the full error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-02/typescript/summary.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T01.3 extract and test a pure summary function`

#### Task 3 - Investigate one small programming mistake (`E01.3`)

##### 1. What We Are Doing

You break your own exercise on purpose, in a small and reversible way, and you write down what you see. Then you repair it and ask a peer to explain the cause in their own words. Everything goes into one Markdown file, and your final commit holds only working code plus the regression test. You work in VS Code, the terminal and Discord.

##### 2. Why We Are Doing It

Real backend work means reading an error you did not expect and finding the smallest cause. A written record of the cause helps the next person on MerchantDesk, and it proves you understood the repair.

##### 3. What to Learn First

- Stack trace: read the first line that points at your own file
- Minimal reproduction: the smallest code that still fails
- Expected versus actual: two lines that make the bug concrete
- Regression test: a test that stays and fails if the bug comes back
- A repair, not a removal: keep the assertion, fix the cause

##### 4. Where to Find Resources

- javascript.info "Error handling, try...catch" https://javascript.info/try-catch
- javascript.info "Comparisons" https://javascript.info/comparison
- Node 22 test runner https://nodejs.org/docs/latest-v22.x/api/test.html
- Search: "read javascript stack trace", "node assertion error expected actual"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Introduce a reversible mistake in your own exercise, such as a wrong branch or an undefined property. Record expected versus actual behavior, the relevant error or assertion and a small reproduction. Repair it and have a peer explain the cause. Keep the valid implementation and its regression test in the final commit.

**Primary path:** `students/<student-id>/week-02/review/debugging.md`.

**Proof for review:** The notes contain an actual failing observation, a reasoned repair and the passing command. No intentional broken code remains in the PR.

**Known trap:** Do not fix a failing test by deleting its assertion or hiding an error with a success return.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-02/review/debugging.md` with three short sections in your own words: what I expected, what happened, why.
3. In your own Week 2 exercise file, add one small reversible mistake, for example a wrong branch condition or a property that does not exist.
4. Run your exercise or test command.
5. Copy the exact error text or failing assertion into the notes.
6. Write what you expected next to what actually happened.
7. Cut the failing code down to the smallest version that still fails.
8. Paste that small version into the notes.
9. Repair the cause and run the same command again.
10. Paste the passing command line into the notes.
11. Keep a test that would fail if the same mistake came back.
12. Ask a peer in Discord to read your notes and explain the cause in one sentence.
13. Add their sentence to the file.
14. Stage the task files with `git add <files>`.
15. Run `git diff --cached` from the repository root.
16. Check that no intentional broken code remains.
17. How to think about it: a good debugging note lets a stranger reproduce your problem in under a minute.

**If you get stuck:**

- If nothing fails, your mistake is too small or that line never runs. Move the mistake to a line you know runs.
- Search "read javascript stack trace" and find the first line that shows your own file name.
- Ask in Discord with the command, the exact error text and the smallest code that fails.

##### 6. What to Commit

- [ ] `students/<student-id>/week-02/review/debugging.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E01.3 investigate one small programming mistake`

### Two-hour problem-solving block (`P02.1`)

**Focus:** Branching and small functions

Write a function that counts a character in a string using a loop; handle empty input and explain every variable.

**Evidence path:** `students/<student-id>/week-02/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Start the block and write the goal in one line at the top of your practice file in `students/<student-id>/week-02/typescript/`.
2. Read MDN "Loops" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops and javascript.info "Loops: while and for" https://javascript.info/while-for. Short reading only, the loop is the tool you need next.
3. Write the loop on paper for three loop turns before you code. For each turn, write the value of every variable at the start of the turn and at the end of the turn.
4. Write a function that counts one character in a string, using a loop, and name every variable for what it holds.
5. Add one comment per variable: what it holds before the loop and what it holds after.
6. Add three cases: a normal string, an empty string, and a character that does not appear.
7. Run your practice file from the repository root: `npm run practice -- <path to your practice file>`
8. Write tests for the three cases next to your practice file.
9. Run them from the repository root: `npm run test:practice -- <path to your test file>`
10. Keep your one wrong attempt as a comment in the file, not as working code.
11. Write in one line why that attempt failed.
12. Correct the code and run the tests again.
13. Write a short plain-language explanation of how the loop moves through the string.
14. Use the rest of the block on one earlier exercise.

**If you get stuck:**

- If the loop never ends, print your variables inside the loop and check that one of them always moves forward.
- Compare your paper trace for the three turns with what the loop really does. The first turn that differs shows you the mistake.
- Re-read MDN "Loops" or javascript.info "Loops: while and for" and find the part that matches your case.
- Ask in Discord with your function, the failing case and the exact output.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/simulator/summary.ts and shared/delivery/foundations.md`. Record scope, non-author review and actual proof in the [Week 2 contribution log](../shared/delivery/rotations/week-02.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-02` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 3](week-03.md).
