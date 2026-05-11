# Release Readiness Gate

Gate ID: `release-readiness`

## Purpose

Prevent release claims without traceability, tests, rollback, and known-risk documentation.

## Checks

- required gates have passed
- CI status is recorded where applicable
- release checklist is complete
- rollback plan exists
- known issues are listed
- environment requirements are documented
- monitoring expectations are documented where applicable

## Fail Routing

Return to release owner. Escalate production deployment decisions.
