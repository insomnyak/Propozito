# Signoff Integrity Gate

Gate ID: `signoff-integrity`

## Purpose

Prevent unauthorized or stale acceptance claims.

## Checks

- accepted signoffs map to completed or reviewable work
- rejected signoffs map to open rework
- deferred signoffs include owner note
- signoff records map to verification surfaces
- no accepted signoff coexists with open blocking rework

## Failure Routing

Return to verification owner or human escalation.
