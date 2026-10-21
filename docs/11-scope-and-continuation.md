# Scope and pacing

## Course boundary

- 20 weeks, twenty learners on Mac or Windows, 60 core project tasks and 20 common problem-solving blocks.
- A 15-hour planned core week, including two hours of problem-solving. Up to five additional hours support repetition or completing feedback.
- One shared MerchantDesk application and the same individual core practice for everyone.
- JavaScript/TypeScript, Node/Fastify, PostgreSQL/SQL and a small React + Vite interface.
- Free local tooling; no required paid account, Docker, WSL, public hosting, real payments or Next.js.

The weekly commitment replaces the earlier five-hour plan. It assumes students can reserve 15-20 hours; it is not a measured beginner completion guarantee. Do not describe twenty weeks as an equivalent five-hour schedule.

## Weekly budget

| Work                                                        | Minutes |
| ----------------------------------------------------------- | ------: |
| Guided learning and scheduled setup                         |     180 |
| Three core project tasks                                    |     300 |
| Consolidation, repeat practice and additional failure cases |     120 |
| Assigned shared contribution or non-author witness          |      60 |
| Peer review, explanation and revision                       |     120 |
| Common problem-solving block                                |     120 |
| Core total                                                  |     900 |
| Further repetition or feedback, maximum                     |     300 |

Task times are estimates. Guided learning may be a mentor session or directed reading and experiments; this table does not promise three hours of one-to-one mentoring. Shared contributions reuse tested practice. Rotate owners/reviewers and reassign unavailable people rather than blocking others.

Tests, review and required failure proofs stay in scope. If the core repeatedly exceeds the available time, record concrete blockers and adjust pacing or bounded scope before advancing. Do not silently claim completion, add another framework or remove ownership checks.

## Parallel progression

The weekly map indicates emphasis, not language-then-database-then-testing mini-courses. Use the same merchant events from Week 1. Git, explanation and review recur; SQL and validation enter when the requirement needs them; backend work continues while the client is built.

Complete the [problem-solving block](14-problem-solving.md) inside the budget, not as two extra hours on top. Every learner completes the same assigned problems and core skills.

## Frontend depth

React + Vite supports typed components, props/state, labelled forms, relative HTTP requests, login/logout, filtering/paging/detail and loading/error/empty states. Basic markup and supplied CSS make the interface usable. There is no styling track, Next.js, extra frontend framework, router or global state requirement.

React renders the interface. HTTP transports requests; Fastify and PostgreSQL enforce validation, authentication and ownership.

## Extension and portfolio

Week 19 adds one reviewed [bounded extension](15-individual-extension.md) in the same application, not a separate student career track or a new product. It cannot substitute for core proof or require twenty extra shared features.

Week 20 requires a reproducible local start, tested behavior, a demo under three minutes, architecture/setup documentation, one hard-problem case study and an oral/no-AI checkpoint. A local demo satisfies the portfolio rule; public deployment is deferred.

## Continuation

MerchantDesk stays the merchant receiver and inspection application. Sprint 2 builds PayHook with Rust, Cargo, Tokio, Actix Web and SQLx. Sprint 3 adds production operation and a bounded AI integration; later sprints add sandbox Solana/EVM capabilities and job preparation. The [program handoff](../admin/payhook-handoff.md) records the boundary. No following-sprint tool is a hidden prerequisite here.
