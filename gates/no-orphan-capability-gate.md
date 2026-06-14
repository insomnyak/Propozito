# No Orphan Capability Gate

Gate ID: `no-orphan-capability`

## Purpose

Require backend, API, CLI, scheduled, or internal work to have a verification surface or documented exemption.

## Allowed Surface Types

- `frontend_surface`
- `api_consumer`
- `cli_surface`
- `scheduled_job_observability`
- `internal_library_with_tests`
- `external_consumer_contract`
- `explicit_exemption`

## Failure Routing

Return to planning. A capability without a surface cannot be marked complete.
