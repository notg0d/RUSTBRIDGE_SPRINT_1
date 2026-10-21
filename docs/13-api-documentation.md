# Document the continuing API

OpenAPI describes an HTTP interface; it does not implement routes or prove behavior. The [canonical contract](04-api-and-security-contract.md) remains the required Sprint 1 target. See the [OpenAPI 3.1 specification](https://spec.openapis.org/oas/v3.1.1.html) for paths, request bodies, parameters, responses and reusable schemas.

## Start once in Week 10

From the repository root, replace RB1. Preserve an existing specification rather than overwriting it:

Mac (Terminal):

```bash
mkdir -p students/RB1/week-10/api
cp fixtures/openapi-starter.json students/RB1/week-10/api/openapi.json
```

Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Path "students/RB1/week-10/api" -Force
Copy-Item -LiteralPath "fixtures/openapi-starter.json" -Destination "students/RB1/week-10/api/openapi.json"
```

The shell describes only the supplied liveness route. Do not describe it as a finished API. Add the event operations actually implemented in your Week 6 continuing application, using synthetic examples and the exact public wire format.

Keep this file canonical through Weeks 14, 19 and 20. A review note belongs at its week's evidence path; do not maintain conflicting specification copies.

## Describe the boundary

For each implemented route, include method/path, purpose, required input, optional bounded query parameters, public response shape, important failure statuses and limits. Reuse small components/schemas rather than duplicating definitions. Keep internal DB columns, hashes, keys and real credentials out of examples.

Week 10 covers event POST/list/detail, pagination and created/repeat/conflict/invalid/not-found/oversized outcomes. The lab is still loopback-only; label the target authentication behavior as planned, not implemented.

Week 14 adds login/logout/me, the actual cookie name/security scheme, exact allowed Origin on state-changing calls, generic 401, owned/missing 404 and bodyless 204 logout after JSON {}. The 16 KiB cap and password byte bound need textual explanation where an ordinary string schema alone is insufficient. Readiness remains planned until Week 18.

In Week 20 compare every implemented operation with the actual tests and runbook, including any separately scoped extension. No PayHook receiver route belongs in this Sprint 1 specification.

## Prove it against our server

Mac (Terminal):

```bash
node -e "JSON.parse(require('fs').readFileSync('students/RB1/week-10/api/openapi.json','utf8'))"
npm run test:student -- RB1
npm run test:student:db -- RB1
```

Windows (PowerShell):

```powershell
Get-Content -LiteralPath "students/RB1/week-10/api/openapi.json" -Raw | ConvertFrom-Json | Out-Null
npm run test:student -- RB1
npm run test:student:db -- RB1
```

The first checks JSON syntax only, not complete OpenAPI semantic validity or server conformance. A peer must construct requests from the specification and compare real status/body/header behavior. Keep redacted exchanges and negative tests as evidence; never copy cookies/passwords into the specification.

Promote the reviewed description to shared/api/openapi.json only for an assigned shared task. The shared shell is not a claim that event/authentication routes already exist.
