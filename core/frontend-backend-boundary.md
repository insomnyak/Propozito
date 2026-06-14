# Frontend Backend Boundary

For web apps with frontend and backend, the default security boundary is:

```text
Browser -> Controller/BFF -> Backend
```

Schema: `schemas/security-boundary.schema.json`

Gate: `gates/frontend-backend-boundary-gate.md`

Validator: `scripts/check-client-endpoint-leaks.js`

The browser should not see backend host, port, secrets, internal endpoint maps, or internal service URLs unless the setup contract explicitly permits direct access.
