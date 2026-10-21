# One bounded individual extension

Week 19 adds attributable evidence to the same MerchantDesk application. Everyone must first complete the same core API, database, ownership, client and test requirements. An extension is not a different career track or a substitute for a missing core proof.

## Agree scope first

Record the user need, exact code/test paths, one bounded behavior, important failures, estimate and reviewer in week-19/extension/plan.md. Prefer one useful read-only addition that fits inside the week's core task/consolidation time. Stop scope growth rather than adding another framework.

Choose one:

| Option                           | Bound and required proof                                                                                                                                                                                                                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Merchant-owned CSV export        | A separate GET /api/events/export endpoint returns at most 200 owned rows. Validate its bounded inputs, quote CSV cells and neutralise spreadsheet-formula interpretation. Test anonymous/other-owner rejection, empty output and the row cap; no financial totals or real customer data.    |
| Exact provider-ID search         | A separate GET /api/events/search endpoint validates one provider_event_id and returns only the current merchant's match. Use the existing public mapping and explicit empty result. Test shared IDs across two merchants, bad input and anonymous access.                                   |
| Redacted incident diagnostic CLI | A local TypeScript consumer groups supplied synthetic structured logs by request ID and shows a useful fault timeline. Validate malformed input, never expose auth/cookie/password fields and do not read another person's logs. Prove the improvement over the existing manual fault trace. |

The reviewer can approve an equivalent equally small addition with written bounds. Different choices or defensible implementations help portfolio attribution; the goal is not novelty at the expense of correctness.

## Preserve the core

Keep the required event body, routes, existing list query rules, generic error envelope, authentication and ownership checks unchanged. New search/export inputs belong on their separate paths, not silently in the core list endpoint.

Integrate companion modules into the original Week 6 factory and repository; continue the Week 16 client only if a small control is useful. No extra UI is required for a CLI/API feature. Update the Week 10 canonical OpenAPI for any endpoint and add forward migrations only if justified.

Do not add real payment processing, registration/password reset, Rust, queues, retries, blockchain, LLM calls, public hosting, Next.js or a paid dependency.

## Proof and publication

Run the existing fast/DB/type checks and the new tests. A non-author demonstrates one success and one failure and verifies that core ownership/duplicate tests still pass. Include actual commands, results and authored commits in the case study.

The extension stays in your individual continuing app by default. A useful shared addition needs a separately assigned reviewed PR; the common product does not require twenty extra features. Explain what you implemented, inherited and reviewed rather than claiming the entire team's work.
