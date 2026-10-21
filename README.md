# Backend Engineering Sprint 1

**MerchantDesk: TypeScript and Web2 Application Foundations**

20 weeks | 20 students | 15-20 hours weekly | Mac and Windows | free local tooling

Build MerchantDesk, a merchant-side application for receiving and inspecting synthetic payment notifications. An operator signs in, submits sample events and views only their merchant's history. The backend validates input, persists records, handles duplicates and protects ownership. A small React + Vite interface makes the API usable.

Students build our APIs with TypeScript, Node.js, Fastify and PostgreSQL, then call them through scripts and the interface. No real payment-provider API, real payments or Next.js is required. MerchantDesk is an event-recording application, not a payment gateway or accounting system. It becomes the destination for Rust-based PayHook in the next sprint.

## Start here

1. Read [Start Here](docs/00-START-HERE.md) and the [project brief](docs/01-project-brief.md).
2. Complete the Week 1 steps (Step 1 to Step 3) of the [setup guide for Mac and Windows](docs/02-setup-guide-mac-windows.md).
3. Read the [student guide](docs/03-student-guide.md) and find your folder in [students/](students/README.md).
4. Open the current week's problem statement and complete the linked core tasks and problem-solving block.

## How learning works

A project requirement introduces a concept; every student practises it individually, tests it, explains a decision and reviews a peer. Available students take bounded contributions to one shared application. Implementation, test and review responsibilities rotate and unavailable owners can be reassigned. Everyone learns the same core skills. See [shared-project responsibilities](docs/06-team-roles.md).

| Track                        | Focus                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| T: TypeScript and JavaScript | Programming basics, values, functions, collections, types, modules and async behavior |
| B: Backend Development       | HTTP APIs, validation, authentication, ownership and safe responses                   |
| D: SQL and Persistence       | Relational modelling, migrations, transactions, durable storage and uniqueness        |
| C: Client Integration        | API consumers and a small functional React interface                                  |
| E: Engineering and Delivery  | Git, tests, review, debugging, API documentation and handover                         |

Tracks progress together as requirements arise, not as separate courses or specialisations. Testing, Git and review begin early. Frontend work supports the backend; there is no design course.

## Sprint map

| Weeks | Main emphasis                                                                 |
| ----- | ----------------------------------------------------------------------------- |
| 1-5   | Programming foundations, Git, event exercises and first SQL/model checks      |
| 6-10  | Fastify APIs, runtime validation, persistence, duplicates, paging and OpenAPI |
| 11-15 | Authentication, ownership, transactions, security proofs and backend repair   |
| 16-18 | React + Vite, real API integration, failure handling and completed CI proofs  |
| 19    | One bounded individual extension, case study and demo rehearsal               |
| 20    | Independent start, final demo, oral review and no-AI repair checkpoint        |

The [task index](docs/05-task-index.md) lists 60 core tasks and 20 common problem-solving blocks. All 45 previously published task IDs remain; week numbers and paths have changed. The [shared build plan](docs/08-shared-build-plan.md) connects each week to the product.

## Weekly commitment

Plan for a 15-hour core week, including two hours of problem-solving, guided learning, practice, review and shared work. Up to five further hours support repetition or feedback, not another technology track. These are planning estimates, not measured guarantees. See [scope and pacing](docs/11-scope-and-continuation.md).

## Repository layout

| Folder    | Purpose                                                                          |
| --------- | -------------------------------------------------------------------------------- |
| docs/     | Product contract, setup, API documentation, problem-solving and extension guides |
| weeks/    | The 20 canonical weekly task files                                               |
| students/ | Individual workspaces for RB1 through RB20                                       |
| shared/   | One reviewed API, interface, database and simulator                              |
| fixtures/ | Synthetic inputs and copyable teaching scaffolds                                 |
| scripts/  | Setup, test and consistency tooling                                              |
| admin/    | Mentor, maintenance and following-sprint notes                                   |

## Milestones

| Week                   | Outcome                                                       |
| ---------------------- | ------------------------------------------------------------- |
| [1](weeks/week-01.md)  | Agreed brief and system context                               |
| [7](weeks/week-07.md)  | First simulator-to-API event flow                             |
| [8](weeks/week-08.md)  | Accepted events survive restart                               |
| [12](weeks/week-12.md) | Authenticated, merchant-owned event access                    |
| [17](weeks/week-17.md) | Working browser-to-database inspection                        |
| [20](weeks/week-20.md) | Independently reproducible product and attributable portfolio |

## Run the starter

From the repository root, run each command separately:

```bash
npm ci
npm run check
npm run dev:api
```

In a second terminal in the same folder, run:

```bash
npm run dev:web
```

Open http://localhost:5173. These commands check the supplied starting code and run its shells, not a finished application. The API initially exposes liveness only. Students implement the merchant features through the tasks. PostgreSQL setup begins in Week 4; the continuing individual API starts in Week 6 and React work in Week 16.

## Completion

A non-author follows the runbook from a clean checkout and fresh course database, migrates/seeds, signs in, submits events, demonstrates invalid/duplicate/conflict cases, inspects only owned records and runs tests. Each student also supplies a bounded tested extension, a case study, a demo under three minutes, attributable commits and an oral/no-AI checkpoint.

A local demo is sufficient. Public hosting, real payments, Rust and blockchain are not Sprint 1 completion claims.

New here? Read [Start here](docs/00-START-HERE.md), then the [repository map](docs/17-repo-map.md).
