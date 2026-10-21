# Week 10: Document and consume the continuing HTTP API

MerchantDesk | Sprint 1 | B: Backend Development + C: Client Integration + E: Engineering and Delivery

## 1. What We Are Doing

This week you write down the API you already built. You produce an OpenAPI file that another engineer can read, a small client that calls the API from that file, and a record of real request and response exchanges. At the end you have a reviewed API description, a working consumer, and an explicit boundary between what is public and what is internal.

This week has three project tasks and one problem-solving block:

- `B02.2`: Describe the implemented API in OpenAPI (100 minutes)
- `C01.2`: Write a consumer from a peer's specification (100 minutes)
- `E04.2`: Review HTTP exchanges against the contract (100 minutes)
- `P10.1`: weekly problem-solving block (120 minutes)

Outcome: A reviewed API description, a reproducible consumer and an explicit request/response boundary.

## 2. Why We Are Doing It

**The project need:** Another engineer must be able to call the working API without guessing request bodies, paging or errors.

The client team needs documented requests, responses and errors. Another engineer must be able to call the working API without guessing request bodies, paging or errors. In a real backend job, an undocumented endpoint is an endpoint nobody can safely use. Checking the written contract against the API helps you find changes that break the client.

## 3. What to Learn First (Prerequisites)

**Before you start:** The Week 6 factory now uses the Week 8 database repository and Week 9 identity/paging behavior. Follow docs/13-api-documentation.md and copy its specification starter once.

**Review these ideas first:**

- HTTP contract: a written promise of requests, responses and errors.
- OpenAPI document: a JSON file that lists paths, schemas and status codes.
- Schema: the field names, types and rules a body must follow.
- Example: a synthetic sample request or response, never real data.
- Status code: a number that says what happened to the request.
- Paging: returning a bounded slice of a list, not the whole list.
- Wire format: the bytes that travel on the network, here JSON text.

**By the end of this week you can:**

- finish `B02.2`: hTTP contracts, OpenAPI paths, schemas, examples and response status codes
- finish `C01.2`: hTTP request construction, status handling and client/server independence
- finish `E04.2`: headers, wire formats, safe public errors and documented limitations

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                                                                                                                    | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B02.2` | HTTP contracts, OpenAPI paths, schemas, examples and response status codes. [OpenAPI 3.1 specification](https://spec.openapis.org/oas/v3.1.1.html), [Document the continuing API](../docs/13-api-documentation.md), [MerchantDesk API contract](../docs/04-api-and-security-contract.md)                                                                |                  100 |
| `C01.2` | HTTP request construction, status handling and client/server independence. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [Document the continuing API](../docs/13-api-documentation.md)                                           |                  100 |
| `E04.2` | Headers, wire formats, safe public errors and documented limitations. [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [MerchantDesk API contract](../docs/04-api-and-security-contract.md), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- openapi 3.1 paths components schemas example
- typescript fetch response.ok status handling
- http 409 conflict meaning
- typescript parse string number result type
- gitignore env file base url

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Describe the implemented API in OpenAPI (`B02.2`)

##### 1. What We Are Doing

You write a machine-readable description of the event API that is already running. You work in VS Code on `students/<student-id>/week-10/api/openapi.json`, starting from the specification starter in docs/13. At the end, a reader can build a valid request from your file without asking you anything.

##### 2. Why We Are Doing It

When the endpoint is described, the client team and the simulator team stop guessing. A written contract also lets you see gaps between what you built and what you promised.

##### 3. What to Learn First

- The `paths` object: one entry per operation, such as submit, list and detail.
- `components/schemas`: reusable field lists that responses and bodies point to.
- Response objects: each status code you really return, with a body example.
- Query parameters: names, types and bounds for paging.
- Public field names are the contract, internal database columns are not.

##### 4. Where to Find Resources

- OpenAPI 3.1 specification https://spec.openapis.org/oas/v3.1.0 (use the table of contents to find paths and schemas)
- [docs/13](../docs/13-api-documentation.md) for the specification starter and how to fill it
- [docs/04](../docs/04-api-and-security-contract.md) for the canonical field names and status codes
- Search keywords: openapi paths schema example, openapi query parameter bounds, openapi components schemas ref

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Extend the supplied liveness specification with POST/list/detail event operations that your app currently implements. Describe public fields, strict input, query bounds, 200/201/400/409/413 outcomes and paging. Use synthetic examples. Mark login/ownership as planned until Weeks 11-12; never describe the unauthenticated lab as production-safe. Match the canonical contract, not internal DB rows.

**Primary path:** `students/<student-id>/week-10/api/openapi.json`.

**Proof for review:** A peer can construct a valid request and a changed-identity conflict from the specification, and compares documented responses with the real app. The JSON parses successfully.

**Known trap:** A syntactically valid OpenAPI file alone does not prove the server follows it.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/13](../docs/13-api-documentation.md) fully before you write anything.
3. Create `students/<student-id>/week-10/api/openapi.json` by copying the specification starter once, as docs/13 describes. Do not edit the shared copy.
4. Start your app from the repository root with `npm run dev:student -- RBx`. Replace RBx with your id, for example RB7.
5. List the operations your app really implements today: submit an event, list events with paging, read one event detail.
6. Add each of these as a path with its method, its request body or query parameters, and its example.
7. Describe the shared fields once under `components/schemas`, then point each operation at them. Use synthetic values only.
8. Add the response status codes your app returns for success, invalid input, conflict, repeated event and oversized body. Add an example for each.
9. Mark login and ownership as planned, not as working, and state that the unauthenticated lab is not production-safe.
10. Run `npm run format` from the repository root. Prettier stops with an error if the JSON does not parse. Then compare every field name with [docs/04](../docs/04-api-and-security-contract.md).
    How to think about it: a schema is a promise to another person. Write only what your server really does, then check the file against the running app.

**If you get stuck:**

- Read the full error text from `npm run format`. It usually shows the line with the missing comma or bracket.
- Open [docs/04](../docs/04-api-and-security-contract.md) and compare field by field. Name differences are the most common mismatch.
- Send one real request with your client and put the real response body next to your example.
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-10/api/openapi.json` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B02.2 describe the implemented API in OpenAPI`

#### Task 2 - Write a consumer from a peer's specification (`C01.2`)

##### 1. What We Are Doing

You write a small Node and TypeScript client that calls an event API using only its written specification. You work in VS Code on `students/<student-id>/week-10/client/contract-client.ts`. The client sends a submit, a list and a detail request, and it handles bad answers and a dead server clearly.

##### 2. Why We Are Doing It

Reading someone else's contract and calling it is the daily work of an integration engineer. Explicit error handling stops a failed request from looking like a success in the merchant dashboard.

##### 3. What to Learn First

- `fetch(url, options)`: how to build a POST with a JSON body and headers.
- `response.ok` is true only for 2xx. It is not the same as "the data is valid".
- Reading `response.status` and `response.json()` separately.
- `try/catch` around the `fetch` call only, for a network failure. A network failure is not an HTTP status.
- `process.env.BASE_URL`: the base URL comes from the environment, and the `.env` file stays out of git.

##### 4. Where to Find Resources

- MDN "Using Fetch" https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN "HTTP overview" https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- [docs/13](../docs/13-api-documentation.md) for how the contract is written and read
- Search keywords: fetch post json headers, fetch network error versus http error, process.env typescript node

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Read a peer's OpenAPI and make a small Node/TypeScript client for submit, list and detail. Use the local API, check response.ok and expected shape, and handle a 409, malformed input and an unreachable listener explicitly. Accept the local base URL through ignored environment configuration. Do not import server repository modules.

**Primary path:** `students/<student-id>/week-10/client/contract-client.ts`.

**Proof for review:** The peer reproduces the client against the continuing app; a non-2xx and a network failure are distinguished and neither is reported as acceptance.

**Known trap:** This is our API consumer, not a Stripe/Razorpay integration or another backend server.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Ask a peer for their `openapi.json`. Read it and write down the three request shapes on paper first.
3. Create `students/<student-id>/week-10/client/contract-client.ts`.
4. Put your local base URL in a `.env` file at the repository root, on one line: `BASE_URL=http://localhost:3000`. Check that `.gitignore` lists `.env` before you save any value.
5. Read the base URL from `process.env.BASE_URL` in your client. If the value is empty, stop with a clear message. Do not hard-code the value in the file.
6. `npm run practice` does not read `.env` on its own. Copy the same value into your terminal before you run the client, from the repository root.
   Mac: `export BASE_URL=http://localhost:3000`
   Windows (PowerShell): `$env:BASE_URL="http://localhost:3000"`
7. Write one small function for submit, one for list with paging parameters, and one for detail.
8. In every function, check `response.ok` first. When it is false, throw an error that carries `response.status`, so the caller reports the HTTP status explicitly.
9. Wrap only the `fetch` call in `try/catch`. Treat a rejected `fetch` as a network failure. Keep the status check and the body parsing outside that `try/catch`.
10. Read the body with `response.json()`. Then check every field you use against the peer's `openapi.json`, both its name and its type, before you report success.
11. Keep the client free of server imports. It may import only Node and standard types.
12. Start your API in one terminal from the repository root with `npm run dev:student -- RBx`.
13. Run the client in a second terminal with `npm run practice -- students/<student-id>/week-10/client/contract-client.ts`.
14. Stop the API with Ctrl+C. Then run the client again with the same command and check that it reports a network failure, not an accepted event.
15. Run `npm run typecheck` from the repository root.
16. Run `npm run format` from the repository root.
    How to think about it: the client must never report an acceptance it did not receive. Every path ends in a clear statement of what happened.

**If you get stuck:**

- Read the error text and the status number. A 409 is an answer from the server, a failed fetch is not.
- Check `Content-Type: application/json` on your POST and that the body is a string from `JSON.stringify`.
- If `fetch` rejects, check that the API is running and that `BASE_URL` is set in this terminal.
- Open the peer's `openapi.json` next to your parsed object and name the first field that differs.
- Search for "fetch network error versus http error" and compare with the MDN "Using Fetch" page.
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-10/client/contract-client.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C01.2 write a consumer from a peer's specification`

#### Task 3 - Review HTTP exchanges against the contract (`E04.2`)

##### 1. What We Are Doing

You record real HTTP exchanges between your client and your API, then compare them with the written contract. You work in VS Code on `students/<student-id>/week-10/delivery/api-exchanges.md`. At the end the file shows requests that really ran, redacted, with their real status and body.

##### 2. Why We Are Doing It

A contract nobody checked against the running app drifts within a week. Written evidence lets a reviewer trust the API and lets the merchant client team plan safely.

##### 3. What to Learn First

- Headers such as `Content-Type` describe the wire format of a body.
- The URL query string carries paging bounds, and it is part of the request.
- Redaction: remove cookies, tokens and any secret before you paste a request.
- Internal SQL and stack traces are not public error text.
- A mismatch needs a failing test before the fix, so the fix stays fixed.

##### 4. Where to Find Resources

- MDN "HTTP overview" https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- [docs/04](../docs/04-api-and-security-contract.md) for the canonical status codes and error bodies
- [docs/13](../docs/13-api-documentation.md) for the documented paging and body rules
- Search keywords: http content-type application json, http query string parameters, redact request before sharing

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Record redacted exchanges for created, repeated, conflicting, invalid and paged requests. Compare the JSON with the written contract and report one mismatch or explicitly state the checked cases. Explain Content-Type, the URL query string and why internal SQL must not appear in a response. Apply peer corrections to the same API/specification.

**Primary path:** `students/<student-id>/week-10/delivery/api-exchanges.md`.

**Proof for review:** The recorded requests run against your app and match its status/body; secrets and internal error details are absent. Any mismatch has a failing test and a reviewed fix.

**Known trap:** Do not invent evidence for authentication or readiness routes not implemented yet.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Start your app with `npm run dev:student -- RBx`.
3. Send five requests with the client you wrote in C01.2: created, repeated, conflicting identity, invalid input, and one paged list.
4. Create `students/<student-id>/week-10/delivery/api-exchanges.md` and add one section per exchange.
5. In each section, write the method, the path with its query string, the `Content-Type`, the status, and the real response body.
6. In each section, copy the synthetic request body exactly as you sent it, so a reviewer can send the same request again.
7. Remove every cookie, token and secret before you save the file. Keep only synthetic event data.
8. Compare each recorded body and status with your `openapi.json` and with [docs/04](../docs/04-api-and-security-contract.md).
9. Report one mismatch you found, or state clearly that the checked cases match and list them.
10. Add a short paragraph on `Content-Type`, on the query string, and on why internal SQL must not appear in a response.
11. If you found a mismatch, add a regression test for it in your app test file.
12. Run `npm run test:student -- RBx` and confirm the new test fails.
13. Fix the API or the specification, then run `npm run test:student -- RBx` again and confirm the test passes.
14. Apply peer corrections to the same files.
15. Run `npm run check` from the repository root.
    How to think about it: evidence means a request that really ran. Do not write anything for login or readiness routes that are not implemented yet.

**If you get stuck:**

- Re-run the exact request and copy the status and body again. Memory is not evidence.
- Read your `openapi.json` example next to the real body and name the first field that differs.
- If a regression test passes before your fix, the test does not reproduce the mismatch yet. Tighten the assertion.
- Search for "http content-type application json" and for "redact request before sharing".
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-10/delivery/api-exchanges.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E04.2 review HTTP exchanges against the contract`

### Two-hour problem-solving block (`P10.1`)

**Focus:** Parsing and explicit errors

Parse a bounded decimal paging string without accepting fractions/signs/empty input; return a typed result.

**Evidence path:** `students/<student-id>/week-10/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open VS Code in the repository root and create one TypeScript file for this block under your week-10 folder.
2. Write the parser for a bounded decimal paging string. Decide and write down what is allowed: digits only, no sign, no fraction, not empty, and an upper bound.
3. Create a test file and cover the empty string, a boundary value, a value above the bound, a fraction and a sign.
4. Run `npm run test:practice -- <test file>` and read every failure before you change code.
5. Make one corrected attempt and re-run the tests. Keep the failing case in the test file.
6. Write two or three plain sentences that explain what your parser accepts and what it returns when the input is bad. Then revisit one earlier exercise inside the same two-hour block.
   How to think about it: the interesting part is not parsing a good value, it is naming the result when the value is bad.

**If you get stuck:**

Read the first failing test name and the expected value, then run only that test again. Search for "typescript parse digits only result type", and ask in Discord with the command you ran and the exact error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/api/openapi.json, shared/simulator/send-event.ts and shared/delivery/api-exchanges.md`. Record scope, non-author review and actual proof in the [Week 10 contribution log](../shared/delivery/rotations/week-10.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-10` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 11](week-11.md).
