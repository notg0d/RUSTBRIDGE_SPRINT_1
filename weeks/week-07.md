# Week 7: Receive one event end to end

MerchantDesk | Sprint 1 | B: Backend Development + C: Client Integration + E: Engineering and Delivery

## 1. What We Are Doing

This week you connect the parts of your own API. You add a validated event route, send one event from a small Node script, and write the flow down so another person can repeat it. At the end you have a working local flow: script to API to list endpoint, with tests and a short delivery note.

This week has three project tasks and one problem-solving block:

- `B02.1`: Add the validated event route (130 minutes)
- `C01.1`: Write the first API consumer (90 minutes)
- `E05.1`: Witness the flow and update the diagram (80 minutes)
- `P07.1`: weekly problem-solving block (120 minutes)

Outcome: A simulator request reaches the API and is visible through a list endpoint. Milestone: First local event flow.

## 2. Why We Are Doing It

**The project need:** The merchant must accept a useful event and reject malformed input consistently.

The MerchantDesk merchant operator needs the API to accept a useful event and to reject malformed input in the same way every time. This input boundary is daily work for a backend engineer. Being able to validate, test and prove the flow is what makes a backend trustworthy.

## 3. What to Learn First (Prerequisites)

**Before you start:** Bring the app factory and field contract. Use Fastify's built-in JSON Schema; do not introduce a second validation framework.

**Review these ideas first:**

- JSON Schema: a written description of a request body
- Runtime validation: checking real data when a request arrives
- Coercion: quietly changing a type, for example "5" into 5
- HTTP status codes: 201 created, 400 bad request, 404 not found
- In-memory store: data that lives only while the process runs
- response.ok: true only when the status is 200 to 299
- Set: a collection of unique values that keeps insertion order

**By the end of this week you can:**

- finish `B02.1`: jSON Schema, request limits, safe errors and in-memory persistence
- finish `C01.1`: node fetch, request bodies, HTTP errors and client/server separation
- finish `E05.1`: reproduction, diagrams and restart limitations

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                  | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B02.1` | JSON Schema, request limits, safe errors and in-memory persistence. [Fastify validation](https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/), [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/) |                  130 |
| `C01.1` | Node fetch, request bodies, HTTP errors and client/server separation. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)                                                                           |                   90 |
| `E05.1` | Reproduction, diagrams and restart limitations. [Assessment and review](../docs/10-assessment.md)                                                                                                                                     |                   80 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- fastify json schema validation
- fastify reply code 404
- javascript fetch response.ok
- node test fastify inject
- javascript set first seen order

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Add the validated event route (`B02.1`)

##### 1. What We Are Doing

You add three routes to your own API: create one event, list events, and read one event by ID. Write the JSON Schema. Fastify uses it to check each request. You keep the records in memory for now. You work in VS Code and run commands in the terminal.

##### 2. Why We Are Doing It

The merchant operator must be able to add a useful event and then see it in a list. Bad input must fail with a clear status, so a broken record never reaches the list.

##### 3. What to Learn First

- Fastify route registration: a function that takes the instance and adds routes
- JSON Schema for the body: required fields, types, allowed event kinds, amount bounds
- Deliberate choices about coercion and about extra fields
- `reply.code(...)` to answer 201, 400 and 404
- `fastify.inject` inside `node:test` to test routes without a running server

##### 4. Where to Find Resources

- Fastify validation https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/
- Fastify testing https://fastify.dev/docs/v5.7.x/Guides/Testing/
- Project commands: `docs/02` section 7, in the repository `docs/` folder
- Search: fastify json schema required, fastify removeAdditional, fastify inject test, fastify bodyLimit

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Add POST /api/events and GET /api/events plus GET /api/events/:id to your lab. Return 404 for a missing record ID; merchant authorization arrives in Weeks 11-12. Validate the full body shape and enforce the agreed amount bounds and event kinds. Configure coercion/removal deliberately so bad types and unexpected owner fields are rejected rather than silently rewritten. Add good and bad injection tests. Export registerEventRoutes and register it in week-06/api/app.ts, replacing the earlier demonstration GET. Later repositories are injected into this same route module.

**Primary path:** `students/<student-id>/week-07/api/events.ts`.

**Proof for review:** A valid event gets 201 and can be listed and read by ID; a missing ID gets 404; invalid type, missing ID and oversized body get deliberate failures. Database persistence and auth are still later tasks.

**Known trap:** Keep the lab loopback-only. A typed request body alone is not runtime validation.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-07/api/events.ts` and write an exported function `registerEventRoutes` that receives the Fastify instance.
3. Write the event JSON Schema first: required fields, types, the allowed event kinds and the amount bounds.
4. Use the Fastify validation resource to reject wrong types and unexpected fields. Set the body schema to reject additional properties.
5. Add `POST /api/events` and keep each accepted record in a module-level array.
6. Add `GET /api/events` for the list and `GET /api/events/:id`, and answer 404 when the ID is not in the array.
7. Use the Fastify validation resource to set an explicit route body limit.
8. Open `students/<student-id>/week-06/api/app.ts` and replace the earlier demonstration GET with `registerEventRoutes`.
9. Add a test file next to `events.ts` and cover: a good event, a missing ID, a wrong type, an extra owner field and a body larger than your limit. Use `fastify.inject`.
10. Run `npm run test:student -- RBx`, then `npm run typecheck`. Replace RBx with your number, for example RB7.
11. How to think about it: a TypeScript type is not validation. Ask what a stranger on the network can send, then make the schema answer that.

**If you get stuck:**

- Read the full Fastify error. It often names the exact path that failed, for example `body/amount`.
- Search "fastify json schema additionalProperties" and re-read the Fastify validation page.
- Ask in Discord with the command you used and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-07/api/events.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B02.1 add the validated event route`

#### Task 2 - Write the first API consumer (`C01.1`)

##### 1. What We Are Doing

You write a small Node script that sends one event to your running API and reads the answer. Then you send a broken request on purpose. This is a plain script, not React. You work in VS Code with two terminals.

##### 2. Why We Are Doing It

The MerchantDesk interface will do exactly this later: send an event and show the result. A consumer that hides a 400 error would show a false success to the merchant.

##### 3. What to Learn First

- `fetch(url, options)` with method, headers and body
- `JSON.stringify` for the body, plus a `Content-Type: application/json` header
- `response.ok` and `response.status` as separate checks
- Reading the body with `response.json()` or `response.text()`
- A network failure rejects the promise, an HTTP error does not

##### 4. Where to Find Resources

- MDN "Using Fetch" https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Fastify validation https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/
- Project commands: `docs/02` section 7, in the repository `docs/` folder
- Search: fetch post json node, fetch response.ok, fetch error handling

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Send one fixture event to the local API with Node fetch, inspect response.ok and parse the response safely. Try one malformed request. This is an API consumer script, not React yet.

**Primary path:** `students/<student-id>/week-07/client/send-event.ts`.

**Proof for review:** The script records the accepted ID and reports a non-2xx as a failure instead of claiming success.

**Known trap:** Fetch can resolve successfully when HTTP returns 400; a network rejection is a different failure.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open a terminal and start your API with `npm run dev:student -- RBx`. Leave it running.
3. Create `students/<student-id>/week-07/client/send-event.ts`.
4. Read one event from `fixtures/events.json` with `node:fs/promises` and `JSON.parse`.
5. Build the request to `http://localhost:3000/api/events`, with method POST and a `Content-Type: application/json` header.
6. Set the fetch body to `JSON.stringify` of the fixture event.
7. Call `fetch(url, options)` and keep the returned response.
8. Check `response.ok`. Print the status and the body, and set `process.exitCode = 1` when the status is not ok.
9. Wrap the `fetch` call in `try` and `catch`. A rejected promise is a network failure: print the error and set `process.exitCode = 1`.
10. Check the response content type before you parse JSON. If the body is not JSON, print the text and report it as a failure. The MDN "Using Fetch" page in your resources shows this.
11. On success, print the accepted ID from the parsed body.
12. Send a second, broken request, for example one with a missing field, and confirm your script reports a failure.
13. Run `npm run practice -- students/<student-id>/week-07/client/send-event.ts`. Replace <student-id> with your number, for example RB7.
14. How to think about it: `fetch` only rejects on a network problem. A 400 is a real answer, and your script must report it as a failure.

**If you get stuck:**

- Print `response.status` and `await response.text()` before you parse anything.
- Search "fetch response.ok meaning" or "fetch post json body".
- Ask in Discord with the full script output and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-07/client/send-event.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C01.1 write the first API consumer`

#### Task 3 - Witness the flow and update the diagram (`E05.1`)

##### 1. What We Are Doing

You write a short delivery note in `students/<student-id>/week-07/delivery/first-flow.md`. A peer follows it and repeats the whole flow. The note also records one invalid request and what is lost after a restart.

##### 2. Why We Are Doing It

A merchant cannot report a problem that nobody can repeat. A written, repeatable flow is how a backend team shows that a feature really works.

##### 3. What to Learn First

- Reproduction: exact commands, in order, with the ports
- Separating an accepted request from a rejected one
- In-memory data versus durable storage
- A simple diagram that shows the processes and the local ports

##### 4. Where to Find Resources

- [docs/10](../docs/10-assessment.md)
- Project commands: `docs/02` section 7, in the repository `docs/` folder
- Fastify validation https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/
- Search: how to write reproduction steps, in-memory vs database, markdown diagram

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Have a peer run the simulator -> API -> list flow. Record actual commands, one invalid request and what disappears after restart. Update the architecture with actual local ports.

**Primary path:** `students/<student-id>/week-07/delivery/first-flow.md`.

**Proof for review:** A non-author reproduces the flow and can explain the persistence gap.

**Known trap:** Do not claim durable acceptance or a production webhook service from this demonstration.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-07/delivery/first-flow.md`.
3. List the exact commands a reader needs, in order, starting with your branch and your API start command. Add the local port.
4. Add the command that runs your script, and the URL it calls.
5. Record how to request `GET /api/events` and confirm that the accepted ID appears.
6. Ask a peer in Discord to follow the note without asking you questions. Write down every place where they get stuck.
7. Send one invalid request and paste the request and the response into the file.
8. Stop your API.
9. Start your API again.
10. Request the list before you send another event, and write down what is still there and what is gone.
11. Update your diagram with the real local ports and the names of your files.
12. Write three short sentences explaining why accepted events disappear when the API restarts.
13. How to think about it: write for a reader who is not in the room. Every command must be copyable.

**If you get stuck:**

- If your peer cannot repeat a step, add the missing command or path to the note instead of explaining it in chat.
- Ask in Discord with the step number where your peer got stuck and the message they saw.

##### 6. What to Commit

- [ ] `students/<student-id>/week-07/delivery/first-flow.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E05.1 witness the flow and update the diagram`

### Two-hour problem-solving block (`P07.1`)

**Focus:** Sets and duplicate identity

Find repeated IDs in a fixture list with a Set while retaining first-seen order; explain why this is not database deduplication.

**Evidence path:** `students/<student-id>/week-07/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Read the problem-solving block text and write the focus of this block in your own words on one line.
2. Open a practice file and a test file for it.
3. Write an empty-list test first.
4. Add a test for a list with no repeats.
5. Add a test for a list with one repeated ID.
6. Write the function step by step. Check what "first seen order" means against your own test data before you run it.
7. Run `npm run test:practice -- <test file>` and `npm run practice -- <file.ts>`, with your own paths.
8. Keep one corrected attempt. Save the first version, read the output and write one line about what you changed and why.
9. Explain in plain words why this is not database deduplication, then revisit one earlier exercise in the same two-hour block.

**If you get stuck:**

Print the list before and after your function so you can see the order with your own eyes. If a boundary case fails, add it to your tests instead of changing the code by guesswork.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/routes/events.ts, shared/simulator/send-event.ts and shared/delivery/first-flow.md`. Record scope, non-author review and actual proof in the [Week 7 contribution log](../shared/delivery/rotations/week-07.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-07` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 8](week-08.md).
