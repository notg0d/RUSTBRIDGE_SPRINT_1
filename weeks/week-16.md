# Week 16: Build a small merchant interface while tightening responses

MerchantDesk | Sprint 1 | C: Client Integration + B: Backend Development

## 1. What We Are Doing

This week you build a small merchant interface with React and you tighten the API responses it reads. You render a typed event list, add a small filter that a keyboard user can operate, and prove with tests that private fields never leave the API. At the end you have a local UI that shows synthetic events and a documented, safe response shape.

This week has three project tasks and one problem-solving block:

- `C03.1`: Render a typed event list (100 minutes)
- `C03.2`: Add a small controlled filter (90 minutes)
- `B07.1`: Shape and test safe API responses (110 minutes)
- `P16.1`: weekly problem-solving block (120 minutes)

Outcome: Typed UI components and bounded safe API responses.

## 2. Why We Are Doing It

**The project need:** A merchant needs to inspect event data without typing curl commands; backend responses must stay safe.

The MerchantDesk operator should not need curl commands to see event data. Backend work often pairs these two sides: a UI needs stable, predictable fields, and the server must keep password hashes, cookies and internal errors out of the response. The API must choose which fields the browser can receive.

## 3. What to Learn First (Prerequisites)

**Before you start:** Use fixtures/web-starter/ as the individual UI scaffold, following docs/03-student-guide.md. React tasks begin with static synthetic data, while backend response work continues.

**Review these ideas first:**

- JSX: markup inside JavaScript that React turns into the interface.
- Props: read-only values a parent component passes down to a child.
- Keys: a stable ID that tells React which list item is which.
- State: memory inside a component that changes when a user acts.
- Controlled input: the value comes from state, not from the DOM alone.
- Response DTO: a plain object you build for the client, not a database row.
- Runtime vs types: a TypeScript type does not remove fields at runtime.

**By the end of this week you can:**

- finish `C03.1`: jSX, typed props, lists, keys and minimal semantic markup
- finish `C03.2`: useState, event handlers, forms and labels
- finish `B07.1`: response DTOs, JSON Schema and privacy boundaries

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                 | Planned task minutes |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `C03.1` | JSX, typed props, lists, keys and minimal semantic markup. [React quick start](https://react.dev/learn)                                                                                                              |                  100 |
| `C03.2` | useState, event handlers, forms and labels. [React state](https://react.dev/learn/state-a-components-memory)                                                                                                         |                   90 |
| `B07.1` | Response DTOs, JSON Schema and privacy boundaries. [Fastify validation](https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/), [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/) |                  110 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- react jsx rendering lists key
- react typed props typescript
- react controlled select useState
- fastify response json schema serialize
- typescript strip private fields runtime

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Render a typed event list (`C03.1`)

##### 1. What We Are Doing

You create your own copy of the supplied web scaffold. Then you add an EventList component that renders a heading plus a table or an accessible list of events. The parent App.tsx holds two synthetic event records and passes them to EventList as props. You work in VS Code on students/<student-id>/week-16/client/src/EventList.tsx and check the result in your browser. Each event shows its kind, currency, a display amount derived from the integer amount, and a timestamp.

##### 2. Why We Are Doing It

The operator gets a readable view of recorded events instead of raw JSON. Typed props keep the UI and the API response shape honest with each other.

##### 3. What to Learn First

- JSX syntax: one parent element, braces for values.
- Typed props: an interface or type for the data a component receives.
- Rendering lists with map and a stable key from the event id.
- Minimal semantic markup: a heading and a table or list.
- Passing data down: the parent holds the records, the child receives them as props.
- Empty state: render a short message when there are no events.

##### 4. Where to Find Resources

- React quick start https://react.dev/learn
- React "Your First Component" https://react.dev/learn/your-first-component
- React "Writing Markup with JSX" https://react.dev/learn/writing-markup-with-jsx
- React "Passing Props to a Component" https://react.dev/learn/passing-props-to-a-component
- React "Rendering Lists" https://react.dev/learn/rendering-lists
- Search: react typed props interface, react list key warning, react empty state

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Copy the supplied web scaffold into your own week-16/client once. Add an EventList component with typed props and stable event IDs as keys. Show event kind, currency, integer-derived display amount and timestamp. Use a heading and a table or accessible list.

**Primary path:** `students/<student-id>/week-16/client/src/EventList.tsx`.

**Proof for review:** The local UI renders two events and a meaningful empty state; a peer can explain where props come from.

**Known trap:** React renders the interface. HTTP fetch, not React itself, transports API requests.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. In the VS Code file explorer, copy the folder fixtures/web-starter/ once.
3. Paste it at students/<student-id>/week-16/client. Replace <student-id> with your number, for example RB7.
4. Read docs/03-student-guide.md for how the supplied scaffold is meant to be used.
5. Open docs/02 section 7 and find the command that starts your own client.
6. Run that command from the repository root.
7. Open the URL that the terminal shows, and confirm the scaffold starts. For Vite this is usually http://localhost:5173.
8. Open students/<student-id>/week-16/client/src/App.tsx.
9. Define two synthetic event records in App.tsx. Use fake data only.
10. Create students/<student-id>/week-16/client/src/EventList.tsx.
11. Write a type for one event record. Include only the fields the list must show: id, kind, currency, the integer amount and the timestamp.
12. Write a props type for the component. The props hold an array of that event record type.
13. Add a heading and a table or an accessible list.
14. Use the event id as the key for each row.
15. Derive the display amount from the integer amount inside the component. Keep the raw integer as the source.
16. Add an empty state: a short sentence that renders when the event array is empty.
17. In App.tsx, import EventList and pass the two records to it as props.
18. Run npm run format from the repository root.
19. Run npm run typecheck from the repository root.
20. Look at the UI in your browser and confirm two events render.
    How to think about it: the component receives data and describes markup. It never fetches anything yet.

**If you get stuck:**

- If the list stays empty, check that App.tsx passes the records to EventList as props with the names your props type uses.
- If React shows a key warning, check that each key is a stable id, not the array index.
- If a prop is undefined, compare the props type with what the parent actually passes.
- If the browser shows an old screen, check that the client start command from docs/02 section 7 is still running.
- Ask in Discord with the exact error text and the component code you are unsure about.

##### 6. What to Commit

- [ ] `students/<student-id>/week-16/client/src/EventList.tsx` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C03.1 render a typed event list`

#### Task 2 - Add a small controlled filter (`C03.2`)

##### 1. What We Are Doing

You add a labelled kind selector plus submit and reset actions on top of the static data in students/<student-id>/week-16/client/src/App.tsx. The event data stays in the parent and the selector updates what the list shows. You check it in the browser, including with the keyboard only.

##### 2. Why We Are Doing It

A merchant operator filters by event kind far more often than reading everything. A small, labelled control keeps the interface usable without adding a design system.

##### 3. What to Learn First

- useState: one value the component remembers between renders.
- Event handlers: functions you attach to onChange, onSubmit and onClick.
- Controlled form elements: the select value comes from state.
- Labels: a label tied to the control so screen readers and keyboard users work.
- Prop versus state: the parent owns the data, the child receives it.

##### 4. Where to Find Resources

- React "Responding to Events" https://react.dev/learn/responding-to-events
- React "State: A Component's Memory" https://react.dev/learn/state-a-components-memory
- React "Passing Props to a Component" https://react.dev/learn/passing-props-to-a-component
- Search: react controlled select, react usestate filter list, react label htmlfor select

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Add a labelled kind selector and a submit/reset interaction on the static data. Keep data in the parent and explain a prop/state distinction. Use the supplied modest CSS; do not add a design system, router or global state package.

**Primary path:** `students/<student-id>/week-16/client/src/App.tsx`.

**Proof for review:** Filter/reset work and keyboard users can operate the control. No button uses a fake network success message.

**Known trap:** Do not turn this into a frontend styling project.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Start your own client again with the command from docs/02 section 7, if it is not running.
3. Open students/<student-id>/week-16/client/src/App.tsx.
4. Keep the synthetic event array in App.tsx. Do not move it into the child.
5. Add a state value for the selected kind, using useState.
6. Add a second state value for the kind that is applied to the list.
7. Render a label and a select with a few kind options plus an all option, inside a form. Tie the label to the select.
8. Make the select controlled: the value comes from the selected kind state, and onChange updates that state.
9. Add a submit button to the form.
10. In the submit handler, copy the selected kind into the applied kind state, and stop the default page reload.
11. Filter the array in App.tsx with the applied kind, before passing it to EventList. Do not change EventList props.
12. Add a reset button that puts the selection back to all.
13. Make reset also put the applied kind back to all, so the full list shows again.
14. Keep the behaviour keyboard only: tab to the select, change it with the arrow keys, tab to submit and press it, then tab to reset and press it.
15. Do not show any success message that pretends a network call happened. Nothing is sent yet.
16. Run npm run format from the repository root.
17. Run npm run typecheck from the repository root.
18. Test filter, submit and reset in the browser.
    How to think about it: state lives in the component that owns the data, props carry the result down.

**If you get stuck:**

- If the list does not change, check that you filter the array you pass down, not the array inside the child.
- If the list does not change after submit, check that the applied kind state is the one used in the filter.
- If the select cannot be changed, check that value comes from state and onChange updates that state.
- If the page reloads on submit, check the submit handler.
- Ask in Discord and paste the handler and the state lines, plus what you expected.

##### 6. What to Commit

- [ ] `students/<student-id>/week-16/client/src/App.tsx` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C03.2 add a small controlled filter`

#### Task 3 - Shape and test safe API responses (`B07.1`)

##### 1. What We Are Doing

You shape the API response for the event list so it returns only public fields plus the paging envelope, and you write tests in students/<student-id>/week-16/api/response-contract.test.ts. The tests prove that operator password hashes, cookie values and internal SQL errors are absent. You compare the JSON shape with the props your UI expects and add an explicit mapping between them.

##### 2. Why We Are Doing It

Every byte the API returns is visible to the caller. An explicit public shape stops private data from leaking when someone adds a column later.

##### 3. What to Learn First

- Response DTO: a small object you build for the client, separate from the database row.
- Explicit mapping: a function that copies only the allowed fields into a new object.
- Fastify response JSON Schema: declared shape that documents and filters the reply.
- Negative test: a test that asserts a field is not there.
- Paging envelope: the wrapper with the items and the paging values.

##### 4. Where to Find Resources

- Fastify validation https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/
- [docs/04](../docs/04-api-and-security-contract.md)
- React "Passing Props to a Component" https://react.dev/learn/passing-props-to-a-component
- Search: fastify response schema serialize, node test assert not in object, dto mapping typescript

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Return only public event fields and the paging envelope. Add response schemas and tests proving operator password hashes, cookie values and internal SQL errors are absent. Compare the response shape with the UI props; use an explicit mapping instead of pretending DB rows are already browser models.

**Primary path:** `students/<student-id>/week-16/api/response-contract.test.ts`.

**Proof for review:** The JSON shape is documented and negative tests prove private fields are excluded.

**Known trap:** A response TypeScript type does not strip private properties at runtime.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read docs/04-api-and-security-contract.md and write down the public event fields and the paging envelope.
3. Open students/<student-id>/week-16/api/response-contract.test.ts and create the file if it does not exist.
4. Build the test data first: one event row that also carries a password hash, a cookie value and a simulated SQL error.
5. Invent every test value. Use synthetic data only. Never use real credentials, real session cookies or production error text.
6. Write an explicit mapping function that returns a new object with only the public fields. Do not return the row.
7. Wrap the mapped items and the paging values in the envelope.
8. Add tests that assert each public field is present in the mapped result.
9. Add tests that assert each private field is absent from the mapped result.
10. Add one negative test that checks the serialized JSON string does not contain the private values.
11. Add an empty list case and confirm the envelope is still well formed.
12. Run npm run test:practice -- students/<student-id>/week-16/api/response-contract.test.ts from the repository root.
13. Open students/<student-id>/week-06/api/app.ts.
14. Add a response JSON Schema for the event list route. List only the public fields plus the paging envelope in that schema.
15. Use the mapping function inside that route, so the handler returns the mapped object and not the database row.
16. Add a test in the same test file that builds the app and sends a request to the event list route.
17. In that test, assert the public fields in the reply body, and assert the private values are not in the reply body.
18. Run npm run test:practice -- students/<student-id>/week-16/api/response-contract.test.ts again.
19. Compare the mapped public shape with the EventList props type. Keep the API field names from docs/04.
20. Add an explicit mapping from the public event fields to the UI props in the client. Do not rename the API fields. Keep the paging envelope separate from the item shape.
21. Run npm run typecheck from the repository root.
    How to think about it: a TypeScript type disappears at runtime, so only the mapping and the schema remove fields.

**If you get stuck:**

- If a private field still appears, check whether you return the row instead of the mapped object somewhere.
- If the schema rejects your reply, compare every required field name with what the handler sends.
- If the route test leaks a field, check that the schema and the mapper both list only the public fields and the envelope.
- Ask in Discord with the failing test name, the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-16/api/response-contract.test.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B07.1 shape and test safe API responses`

### Two-hour problem-solving block (`P16.1`)

**Focus:** Transformations and pure functions

Project event records to public fields without mutating inputs; test that a private field is absent.

**Evidence path:** `students/<student-id>/week-16/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Read the problem-solving block text first, then open your week-16 folder in VS Code.
2. Write a pure function that takes one event record and returns a new object with only the public fields. Do not change the input object.
3. Write tests for the empty and boundary cases first: no fields, zero amount, missing optional value.
4. Keep one attempt that failed. Add a short note on what was wrong and what you changed.
5. Add a plain-language explanation in your own words: what a pure function is and why not mutating the input matters.
6. Revisit one earlier exercise from this week or a past week in the same two-hour block, then commit both parts.

**If you get stuck:**

If the input object changes after your function runs, check for in-place assignment or shared nested objects, and compare your function with the mapping you wrote in the API task. Ask in Discord with your function and the test output.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/web/src/App.tsx, shared/web/src/EventList.tsx and shared/api/src/routes/events.ts`. Record scope, non-author review and actual proof in the [Week 16 contribution log](../shared/delivery/rotations/week-16.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-16` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 17](week-17.md).
