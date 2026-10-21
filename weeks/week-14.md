# Week 14: Review the protected contract and repair a boundary

MerchantDesk | Sprint 1 | B: Backend Development + E: Engineering and Delivery

## 1. What We Are Doing

This week you review the authenticated MerchantDesk API as a written contract. You update your Week 10 OpenAPI file so it describes login, cookies and ownership, then you write tests that prove bad requests change nothing in the database. At the end you have a current specification, a negative-request matrix and a short written record of a repair you did without AI.

This week has three project tasks and one problem-solving block:

- `B10.1`: Update OpenAPI for authentication and ownership (100 minutes)
- `B10.2`: Prove rejected requests do not change stored data (100 minutes)
- `E13.1`: Repair and explain a small defect without AI (100 minutes)
- `P14.1`: weekly problem-solving block (120 minutes)

Outcome: A current authenticated API specification, a negative-request matrix and an explained no-AI repair.

## 2. Why We Are Doing It

**The project need:** The authenticated API needs a contract that exposes its trust boundaries and tests that survive adversarial requests.

The MerchantDesk operator must sign in and see only their own payment events, so the API contract has to show where trust starts and ends. Real backend teams are asked two questions again and again: "what does the spec promise?" and "can you prove a rejected request wrote nothing?". This week you practise both answers.

## 3. What to Learn First (Prerequisites)

**Before you start:** Bring two seeded merchants, the ownership suite and Week 10 OpenAPI. Keep all tests local and disposable; no new authentication mechanism or security vendor is required.

**Review these ideas first:**

- Contract first: the OpenAPI file is the written promise of the API.
- Trust boundary: the line where untrusted input enters your code.
- Cookie security scheme: a written rule for how the session cookie is sent.
- Generic 401: one refusal answer that leaks nothing about the resource.
- Owned 404: the same "not found" answer for another owner's record.
- Negative test: a test that proves a bad request is refused.
- Durable state check: read the database to prove nothing changed.

**By the end of this week you can:**

- finish `B10.1`: cookie security schemes, Origin requirements and non-leaking authorization responses
- finish `B10.2`: trust-boundary tests, malformed JSON, rejected ownership and durable state
- finish `E13.1`: independent debugging, minimal changes and oral explain-back

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                                                               | Planned task minutes |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B10.1` | Cookie security schemes, Origin requirements and non-leaking authorization responses. [OpenAPI 3.1 specification](https://spec.openapis.org/oas/v3.1.1.html), [Document the continuing API](../docs/13-api-documentation.md), [MerchantDesk API contract](../docs/04-api-and-security-contract.md) |                  100 |
| `B10.2` | Trust-boundary tests, malformed JSON, rejected ownership and durable state. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html), [MerchantDesk API contract](../docs/04-api-and-security-contract.md)    |                  100 |
| `E13.1` | Independent debugging, minimal changes and oral explain-back. [Assessment and review](../docs/10-assessment.md), [AI use and explanation checkpoints](../docs/07-resources.md)                                                                                                                     |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- openapi 3.1 cookie security scheme
- fastify secure session cookie test
- node test runner before and after hooks
- postgres assert row count unchanged test
- binary search sorted array javascript

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Update OpenAPI for authentication and ownership (`B10.1`)

##### 1. What We Are Doing

You update the OpenAPI file you wrote in Week 10 so it describes the authenticated routes: login, logout, me, cookie authentication, the exact Origin header on writes, the generic 401 and the owned 404. You keep the Week 10 file as the single source, and you write your review notes at `students/<student-id>/week-14/design/openapi-review.md`. You work in VS Code and read the result with a peer.

##### 2. Why We Are Doing It

A merchant operator, a front-end developer and a reviewer all read the same spec before they trust the API. If the spec does not show the cookie rule and the ownership rule, every client guesses and every guess is a bug.

##### 3. What to Learn First

- OpenAPI `securitySchemes` with an `apiKey` in `cookie` for the session cookie.
- How to describe a required header, here the exact `Origin`, on write operations.
- Why one generic 401 body is safer than a detailed message.
- Why another owner's record returns 404 and not 403.
- How to keep a response schema small so private fields never appear.
- How to describe a 204 answer with no body.

##### 4. Where to Find Resources

- OpenAPI 3.1 specification https://spec.openapis.org/oas/v3.1.0
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md)
- [docs/13 Document the continuing API](../docs/13-api-documentation.md)
- Search keywords: openapi 3.1 cookie security scheme, openapi response components 401, openapi 204 no content

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Continue the Week 10 specification rather than copying another version into the app. Keep week-10/api/openapi.json canonical and record this review at the task path. Add login/logout/me, cookie authentication, exact Origin on writes, generic 401, owned 404 and safe public response schemas. Record readiness as planned until Week 18. Compare it with two real merchant flows.

**Primary path:** `students/<student-id>/week-14/design/openapi-review.md`.

**Proof for review:** A peer signs in and reads owned events using the updated spec, while anonymous/other-owner cases match the documented responses. Logout is a bodyless 204 after a JSON {} request.

**Known trap:** An Origin header is not service authentication, and an HttpOnly cookie is not a claim that authorization is automatic.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/04](../docs/04-api-and-security-contract.md) and list the protected routes and the answer each one must give.
3. Open your Week 10 file at `students/<student-id>/week-10/api/openapi.json`. Do not copy it into the app folder; this file stays the source.
4. Add the login, logout and me paths, and mark them as public or protected.
5. Add a `securitySchemes` entry that describes the cookie, and apply it to the protected paths.
6. On every write operation, describe the required `Origin` header and the exact value rule.
7. Add shared response parts for the generic 401, the owned 404 and the 204 with no body, then reuse them.
8. Read every public response schema and remove any field that must not leave the server.
9. Ask a peer to sign in and read owned events using only your spec.
10. Note every place where the spec was unclear.
11. Compare the spec with two merchant flows you have run using only synthetic data.
12. Write the review at `students/<student-id>/week-14/design/openapi-review.md`.
13. Record the readiness state in the review as planned until Week 18.
14. Run `npm run format` from the repository root.
15. Run `npm run check` from the repository root.

How to think about it: the spec is read by people who will not read your code, so write the rule, not the implementation.

**If you get stuck:**

- Run `npm run check` from the repository root. Read the first failing check and its output. Run database tests separately.
- Search for "openapi 3.1 security scheme cookie" or "openapi components responses reuse" and compare with the example in the specification.
- Open [docs/13](../docs/13-api-documentation.md) and check the structure it asks for.
- Ask in Discord with the command you ran and the exact error text. Remove passwords, keys, cookies and other secrets before posting.

##### 6. What to Commit

- [ ] `students/<student-id>/week-14/design/openapi-review.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B10.1 update OpenAPI for authentication and ownership`

#### Task 2 - Prove rejected requests do not change stored data (`B10.2`)

##### 1. What We Are Doing

You build one test file, `students/<student-id>/week-14/api/security.db.test.ts`, with a table of rejected requests: bad JSON, wrong body types, an unexpected `merchant_id`, missing or bad cookies, and a missing or foreign `Origin`. Each case must show the safe answer and also show that the stored data did not change. You work in VS Code and the terminal, against an isolated real database schema.

##### 2. Why We Are Doing It

A refusal status alone proves nothing about the payment records. The merchant needs a guarantee that a rejected request never touched the stored events.

##### 3. What to Learn First

- A table-driven test: one array of cases, one loop, one set of checks.
- How to read a row count and a row snapshot before and after a request.
- How to send a request with the Fastify `inject` helper, without starting a real port.
- An isolated test schema, closed apps and closed pools at the end.
- Body limit and query validation as trust boundaries.

##### 4. Where to Find Resources

- [docs/04 API and security contract](../docs/04-api-and-security-contract.md) for the expected status codes
- [docs/13 Document the continuing API](../docs/13-api-documentation.md)
- Search keywords: fastify inject test headers, node test runner describe it before after, postgres count rows assert unchanged

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Build a small negative-request table covering malformed JSON, wrong body types, unexpected merchant_id, missing/bad cookies and missing/foreign Origin. Include at least one body-limit case and one invalid query case. Assert the deliberate safe response and that no event was inserted or overwritten. Use an isolated real DB schema and close its apps/pools.

**Primary path:** `students/<student-id>/week-14/api/security.db.test.ts`.

**Proof for review:** At least six distinct rejection cases leave the original row count/content unchanged; a valid authenticated control request still succeeds. Existing core tests remain green.

**Known trap:** A rejection status alone does not establish that a write was never committed; inspect the isolated database too.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Check that your test database name ends in `_test`, then run `npm run db:check` from the repository root.
3. Open or create `students/<student-id>/week-14/api/security.db.test.ts` and start from your existing ownership test setup.
4. Write one array of rejection cases: malformed JSON, wrong body type, unexpected `merchant_id`, missing cookie, bad cookie, missing `Origin`, foreign `Origin`.
5. Add one body-limit case and one invalid query case to the same array.
6. Before the loop, read the row count and a copy of the rows from the isolated schema.
7. In the loop, send the request and assert the documented safe answer for that case.
8. After each case, assert the row count and the stored content are the same as before.
9. Add one valid authenticated control request at the end and assert that it succeeds and inserts its row.
10. Close the app and the pool in the teardown.
11. Run `npm run test:student:db -- RBx` (replace RBx) from the repository root.
12. Run `npm run test:student -- RBx` (replace RBx) from the repository root.

**If you get stuck:**

- Read the first failing assertion and the value it printed. A changed row count means a write slipped past a boundary.
- If the test hangs, a pool or an app is still open. Search for "node test runner open handle pool end".
- Ask in Discord with the command you ran and the exact error text. Remove passwords, keys, cookies and other secrets before posting.

##### 6. What to Commit

- [ ] `students/<student-id>/week-14/api/security.db.test.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B10.2 prove rejected requests do not change stored data`

#### Task 3 - Repair and explain a small defect without AI (`E13.1`)

##### 1. What We Are Doing

You take a short checkpoint with a witness, without AI tools and without copied solutions, and you repair one small reversible defect in your own validator, query boundary or HTTP mapping. You write a failing assertion first, then fix the cause, then explain the input, the trust boundary and the outcome. You record everything at `students/<student-id>/week-14/review/checkpoint.md`.

##### 2. Why We Are Doing It

On a real team, someone will ask you to fix a defect in code you wrote, with no assistant and no time to search for a copy. Being able to explain the cause is the skill the reviewer is checking.

##### 3. What to Learn First

- Write the failing assertion before the fix, so the proof exists.
- Take the smallest change that removes the cause, not the symptom.
- Explain the input, the trust boundary and the outcome in that order.
- Keep the core contract unchanged while you repair.
- Record gaps honestly and plan a focused retry.

##### 4. Where to Find Resources

- [docs/10 Assessment and review](../docs/10-assessment.md)
- [docs/07 AI use and explanation checkpoints](../docs/07-resources.md)
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md)
- Search keywords: write failing test first node test runner, minimal fix validator boundary, explain trust boundary http mapping

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] In a 30-minute supervised or witnessed checkpoint, inspect a small reversible defect in your own validator, query boundary or HTTP mapping without AI or copied solutions. Documentation is allowed. Write a failing assertion, repair the cause and explain input, trust boundary and outcome. If incomplete, record it honestly and schedule a focused retry; do not publish private grading.

**Primary path:** `students/<student-id>/week-14/review/checkpoint.md`.

**Proof for review:** A non-author records the observed failing/passing commands and your explanation. The final code satisfies the unchanged core contract.

**Known trap:** The checkpoint tests understanding, not memorised syntax, speed rankings or willingness to bypass a check.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Book 30 minutes with a witness, a peer or a maintainer, and agree that no AI tool and no copied solution is used. Documentation is allowed.
3. Choose one small defect you can reverse, in your validator, your query boundary or your HTTP mapping.
4. Write a failing assertion for it in your test file.
5. Run the test and note the exact command.
6. Note the exact output.
7. Repair the cause with the smallest change you can make.
8. Run the failing test again.
9. Run `npm run test:student -- RBx` (replace RBx) from the repository root.
10. Run `npm run test:student:db -- RBx` (replace RBx) from the repository root.
11. Explain to your witness what the input was.
12. Explain which trust boundary was crossed wrongly.
13. Explain what the outcome is now.
14. Let the witness write down the commands they saw.
15. Write the record at `students/<student-id>/week-14/review/checkpoint.md`, with the commands, the explanation and any honest gap plus a retry time.
16. Run `npm run format:check`.
17. Run `npm run typecheck`.
18. Commit this task with its task ID first in the message. Commit each of the other two tasks after its own checks pass, with its own task ID first.

How to think about it: the checkpoint checks your understanding, not your speed, so say what you know and say what you do not know.

**If you get stuck:**

- If the defect feels too big for 30 minutes, make it smaller and write that choice down.
- Read your own failing assertion out loud. It often names the boundary you missed.
- Ask in Discord with the command and the exact error text, but only after the checkpoint is closed. Remove passwords, keys, cookies and other secrets before posting.

##### 6. What to Commit

- [ ] `students/<student-id>/week-14/review/checkpoint.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E13.1 repair and explain a small defect without AI`

### Two-hour problem-solving block (`P14.1`)

**Focus:** Binary search and prerequisites

Find a target in a sorted integer list with binary search; test missing/boundary targets and explain the sorted-input requirement.

**Evidence path:** `students/<student-id>/week-14/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Block two hours and put the first 100 minutes on the binary search task only.
2. Write the function for a sorted integer list, plus tests for a found target, a missing target, an empty list, the first and the last item.
3. Run your tests with `npm run test:practice -- <test file>` from the repository root.
4. When a test fails, correct your attempt and keep the corrected version next to the first one.
5. Use the last 20 minutes to revisit one earlier exercise from a previous week and run it again.
6. Finish with a short plain-language note: why binary search needs a sorted list, and what happens if the list is not sorted.

**If you get stuck:**

Read the failing test name first, it usually shows which case is wrong. If you are still stuck, search for "binary search off by one mid" and ask in Discord with your test output. Remove passwords, keys, cookies and other secrets before posting.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/api/openapi.json, shared/api/test/security.db.test.ts and shared/delivery/security-review.md`. Record scope, non-author review and actual proof in the [Week 14 contribution log](../shared/delivery/rotations/week-14.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-14` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 15](week-15.md).
