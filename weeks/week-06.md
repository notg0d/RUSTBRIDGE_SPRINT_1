# Week 6: Cross the HTTP boundary without losing the model

MerchantDesk | Sprint 1 | B: Backend Development + T: TypeScript and JavaScript + E: Engineering and Delivery

## 1. What We Are Doing

This week you connect your TypeScript work to the network. You build a small HTTP API with Fastify, read a file with async code, and write a plan for the MerchantDesk API. At the end you have a running API, one test that needs no open port, and a written contract you can explain in review.

This week has three project tasks and one problem-solving block:

- `B01.1`: Build and inspect a tiny Fastify API (120 minutes)
- `T04.1`: Observe async work and failure (100 minutes)
- `E04.1`: Review the API and schema together (80 minutes)
- `P06.1`: weekly problem-solving block (120 minutes)

Outcome: A tiny HTTP application, observable async behavior and an API plan.

## 2. Why We Are Doing It

**The project need:** Another program must send or request events without sharing the API's memory.

Another program must send or request events without sharing the API's memory. That is the real job: define the boundary, decide what travels over it, and make failures safe and visible. This week you build that boundary for the first time, so go slowly.

## 3. What to Learn First (Prerequisites)

**Before you start:** Read the HTTP contract in docs/04-api-and-security-contract.md. PostgreSQL practice and TypeScript exercises continue; do not replace them with a standalone framework course.

**Review these ideas first:**

- HTTP request: method, path, headers, optional body.
- HTTP response: a status code plus headers and body.
- JSON: the text format both sides can read.
- App factory: build the app, start it separately.
- Promise: a value that arrives later.
- await and try/catch: wait for a result, handle a failure.
- Contract: what a caller sends and gets back.

**By the end of this week you can:**

- finish `B01.1`: hTTP methods, paths, headers, status, JSON and app factories
- finish `T04.1`: promises, await, try/catch, JSON parsing and cleanup
- finish `E04.1`: request/response contracts and design trade-offs

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                                                              | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B01.1` | HTTP methods, paths, headers, status, JSON and app factories. [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [Fastify getting started](https://fastify.dev/docs/v5.7.x/Guides/Getting-Started/), [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/) |                  120 |
| `T04.1` | Promises, await, try/catch, JSON parsing and cleanup. [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)                                                                                                                                              |                  100 |
| `E04.1` | Request/response contracts and design trade-offs. [MerchantDesk API contract](../docs/04-api-and-security-contract.md), [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)                                                                                               |                   80 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- fastify create app inject test
- http methods status codes json
- curl send request powershell
- node fs promises readFile
- json parse try catch typescript
- async await is not a thread

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Build and inspect a tiny Fastify API (`B01.1`)

##### 1. What We Are Doing

You turn the supplied starter into a small Fastify app that returns a few synthetic events held in memory. You call it from the terminal and prove it works with one automated test that needs no open network port. All work happens in VS Code and the terminal, inside your own week-06 folder.

##### 2. Why We Are Doing It

MerchantDesk must let another program ask for events. This first route is the smallest version of that conversation, and it stays as your API entry point in later weeks.

##### 3. What to Learn First

- The parts of an HTTP exchange: method, URL, headers, status, body.
- Fastify route handlers and how they return JSON.
- Why the factory (createApp) is separate from the listener (server.ts).
- app.inject: test the app without a real network port.
- Loopback binding: the server is only reachable from your own machine.

##### 4. Where to Find Resources

- MDN "HTTP overview" https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- MDN "HTTP request methods" https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods and MDN "HTTP response status codes" https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- Fastify getting started https://fastify.dev/docs/v5.7.x/Guides/Getting-Started/
- Fastify testing https://fastify.dev/docs/v5.7.x/Guides/Testing/
- Search keywords: "fastify inject test", "fastify route returns json", "curl send request"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Copy the immutable fixtures/api-starter once into your week-06/api folder as described in docs/12-application-wiring.md. Continue its exported createApp factory and separate server.ts listener. Add an in-memory GET /api/events returning a few synthetic records, send a request with curl.exe and add an app.inject test in app.test.ts. Run the app with npm run dev:student -- RB1, replacing RB1. Bind to loopback and retain this entry point in later weeks.

**Primary path:** `students/<student-id>/week-06/api/app.ts`.

**Proof for review:** An annotated exchange names method, URL, response status and JSON. The test runs without opening a network port.

**Known trap:** The in-memory lab is local and temporary. It has no authentication yet and must not be publicly exposed.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open the terminal and run this from the repository root: git switch main
3. Run this from the repository root: git fetch origin
4. Run this from the repository root: git merge --ff-only origin/main
5. Create your task branch. Run this from the repository root: git switch -c rb7-week-06. Replace rb7 with your lowercase id, for example RB7 becomes rb7.
6. Read [docs/12](../docs/12-application-wiring.md) and [docs/04](../docs/04-api-and-security-contract.md) before you write code.
7. Copy the fixtures/api-starter folder once into students/<student-id>/week-06/api/. Replace <student-id> with your number, for example RB7. Do not edit fixtures/ itself.
8. Open students/<student-id>/week-06/api/app.ts. Find the exported createApp factory and read what it already registers.
9. Add one route inside the factory: method GET, path /api/events, a JSON list of a few synthetic events, status 200. Keep the data in a variable in that same file.
10. Open server.ts. Check that it is the only file that starts a listener, and that it binds to loopback (127.0.0.1).
11. Run this from the repository root: npm run dev:student -- RBx (replace RBx with your id).
12. In a second terminal, send a request. Replace <port> with the port printed by the server.
    Mac: curl http://127.0.0.1:<port>/api/events
    Windows (PowerShell): curl.exe http://127.0.0.1:<port>/api/events
13. Open students/<student-id>/week-06/api/app.test.ts. Add one app.inject test for GET /api/events that checks status 200 and the JSON body. Run npm run test:student -- RBx.
14. Write your annotated exchange in a Markdown note inside students/<student-id>/week-06/: the method, the URL, the response status and the JSON. Add one line on why loopback keeps this safe.

**If you get stuck:**

- Read the exact error text. A 404 means the path does not match. A 500 means your handler threw.
- Check that you run the command from the repository root and that the port is free.
- Search "fastify inject test" or reread Fastify testing.
- Ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-06/api/app.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B01.1 build and inspect a tiny Fastify API`

#### Task 2 - Observe async work and failure (`T04.1`)

##### 1. What We Are Doing

You write a small TypeScript file that reads a JSON fixture from disk with async code. On the way you compare a Promise with the awaited value, and you break it on purpose: one missing file and one malformed JSON.

##### 2. Why We Are Doing It

MerchantDesk will read and return data that arrives later, so failures must be safe. A caller must never see an empty event list when the real problem was a parse error.

##### 3. What to Learn First

- A Promise is a placeholder for a value that arrives later.
- await pauses your function, not the whole program.
- try/catch around an awaited call.
- JSON.parse can throw, so it needs its own handling.
- async does not create a new thread per request.

##### 4. Where to Find Resources

- MDN "Using promises" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- javascript.info "Promise" https://javascript.info/promise-basics
- javascript.info "Async/await" https://javascript.info/async-await
- Search keywords: "node fs promises readFile", "json parse try catch", "typescript narrowing unknown"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Read the supplied fixture with node:fs/promises. Compare an awaited result with the Promise itself. Handle a missing file and malformed JSON deliberately; pass parsed data through the earlier checks. Explain why async is not a new thread for each request.

**Primary path:** `students/<student-id>/week-06/typescript/async-reader.ts`.

**Proof for review:** Successful and failing runs terminate with useful, safe messages. A parsing failure is not mistaken for an empty event list.

**Known trap:** Catch only what you can explain; do not catch every error and return success.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read MDN "Using promises" up to the part about await.
3. Create students/<student-id>/week-06/typescript/async-reader.ts. Replace <student-id> with your number, for example RB7.
4. Read a fixture file, for example fixtures/events.json, with node:fs/promises. Print the Promise itself first, then print the awaited result, and note the difference in a comment.
5. Run it from the repository root: npm run practice -- students/RB7/week-06/typescript/async-reader.ts (use your own id).
6. Wrap the read in try/catch. Run it again with a path that does not exist and read the message you print.
7. Parse the text with JSON.parse inside its own try/catch. Feed it one malformed JSON file or string. The message must talk about parsing, not about an empty list.
8. Pass the parsed data through the checks you wrote in earlier weeks, so bad records are rejected, not silently dropped.
9. Add one comment that explains why async is not a new thread for each request.
10. How to think about it: ask what the caller learns from each message. If a failure looks like an empty result, the message is wrong.

**If you get stuck:**

- Put a console.log just before the failing line and print what value you actually have.
- Read the error name: ENOENT means missing file, SyntaxError means bad JSON.
- Ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-06/typescript/async-reader.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T04.1 observe async work and failure`

#### Task 3 - Review the API and schema together (`E04.1`)

##### 1. What We Are Doing

You write a short API plan for MerchantDesk in Markdown. It names the routes you will build, the field rules, the error shape, the future owner filter, and the limits of the in-memory version. You work in VS Code and compare the plan with your Week 5 relational model.

##### 2. Why We Are Doing It

A written contract lets another team build against MerchantDesk without guessing. It also shows a reviewer that you know what is still missing before public deployment.

##### 3. What to Learn First

- Request and response shapes for a create route, a list route and a detail route.
- Field rules: which fields are required and which type each one has.
- One error shape, used by every route.
- The future owner filter: a merchant sees only its own events.
- Trade-offs: what belongs in HTTP, in validation, in persistence. Persistence means saving data so it remains after the program stops.

##### 4. Where to Find Resources

- Local: [docs/04](../docs/04-api-and-security-contract.md)
- MDN "HTTP overview" https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- MDN "HTTP request methods" https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods and MDN "HTTP response status codes" https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- Search keywords: "rest api contract example", "http 400 vs 422", "api error response shape"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Specify the initial POST/list/detail routes, field rules, error shape and the future owner filter. Draw the request path and name the limits of the in-memory version. Compare the plan with Week 5's relational model.

**Primary path:** `students/<student-id>/week-06/design/api-contract.md`.

**Proof for review:** A peer can name what belongs in HTTP, validation and persistence, and what is missing before public deployment.

**Known trap:** Do not invent queue, Rust service or microservice boundaries in Sprint 1.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/04](../docs/04-api-and-security-contract.md) fully. Note the rules it already fixes.
3. Create students/<student-id>/week-06/design/api-contract.md. Replace <student-id> with your number, for example RB7.
4. Write the three routes: create (POST), list, detail. For each one give the method, the path, the request body and the response body.
5. List the field rules in a small table: name, type, required or optional, and the rule it must pass.
6. Write one error shape. Say which status code goes with which failure.
7. Describe the future owner filter in one paragraph: where the owner comes from and which routes use it.
8. Draw the request path as a plain list: client, route, validation, data, response.
9. Name the limits of the in-memory version (no restart safety, no authentication, local only) and what is missing before public deployment.
10. Compare the plan with your Week 5 relational model.
11. Note where table fields and JSON fields differ. Explain why.
12. For each decision, name its place: HTTP, validation or persistence.

**If you get stuck:**

- If a route feels unclear, reread the matching section in docs/04 and rewrite it in your own words.
- Ask a peer to name what belongs in HTTP, validation and persistence. If they cannot, rewrite that line as one simple sentence.
- Ask in Discord with the section you wrote and the question you have.

##### 6. What to Commit

- [ ] `students/<student-id>/week-06/design/api-contract.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E04.1 review the API and schema together`

### Two-hour problem-solving block (`P06.1`)

**Focus:** Strings and maps

Build a character-frequency Map and find the first non-repeated character; explain memory use.

**Evidence path:** `students/<student-id>/week-06/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open VS Code in the repository root and block two hours.
2. In a new file under students/<student-id>/week-06/, write a function that returns the first character that appears only once in a string. First write down your own approach in one or two sentences. Then code it.
3. Add tests for an empty string, for one character, and for a string where every character repeats. Run npm run test:practice -- <your test file>.
4. If your first approach is slow or hard to explain, try a Map that counts each character as an optional hint. Test the new version.
5. Break your first attempt on purpose, write down what went wrong, fix it, and keep a short note about the corrected attempt.
6. Write three plain sentences: what your chosen data structure holds, how memory grows with the input, and when that structure is a bad choice.
7. In the last 20 minutes, redo one exercise from an earlier week without looking at your old answer.
8. Create students/<student-id>/week-06/problem-solving/README.md and record your work there: the solution and test file locations, the corrected attempt, the plain-language explanation and the earlier exercise you redid.

**If you get stuck:**

If your answer is wrong on the empty string, write the boundary case on paper before you change the code. Ask in Discord with your input, your expected answer and the actual answer.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/app.ts and shared/delivery/api-contract.md`. Record scope, non-author review and actual proof in the [Week 6 contribution log](../shared/delivery/rotations/week-06.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-06` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 7](week-07.md).
