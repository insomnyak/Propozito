# Frontend Backend Boundary Gate

Gate ID: `frontend-backend-boundary`

## Purpose

Prevent client-visible leaks of backend hosts, ports, secrets, endpoint maps, and internal service URLs when the configured boundary forbids direct access.

## Checks

- setup/security boundary is configured
- client source does not expose forbidden backend endpoints
- browser-facing routes use the allowed controller/BFF surface when required
- secrets and internal config remain server-side

## Failure Routing

Return to architecture/security review.
