# Sandbox API consumer

This is a student-built Node/TypeScript consumer for MerchantDesk's Sprint 1 operator API, not a provider integration or signed webhook receiver. PayHook becomes the delivery source in a following sprint.

Week 2: a pure summary helper and explained foundation examples.
Week 3: collection-summary helpers and their tests in test/.
Week 7: submit one synthetic event and report status/response.
Week 10: check the consumer against the reviewed API specification.
Week 12: sign in using local synthetic credentials, retain the response cookie in memory, send it with protected requests and include the exact allowed Origin for state-changing calls.

Read inputs from fixtures/events.json. Treat non-2xx responses deliberately; never print passwords, cookies or auth headers. Use ignored environment variables for credentials. The app stays loopback-only.

Place the reviewed consumer in send-event.ts. Add its exact run command to README during promotion. Use the same API contract as the interface.

Run npm test for authored fast tests and npm run typecheck for shared simulator types. Root test discovery includes shared/simulator/test/ as well as API and student tests; database tests use the separate npm run test:db command.
