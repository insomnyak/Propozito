# Spec Trace Gate

Gate ID: `spec-trace`

## Purpose

Verify every code change traces to approved requirements and acceptance criteria.

## Required Inputs

- task ID
- requirement IDs
- acceptance criteria IDs
- changed files
- traceability matrix
- evidence report

## Checks

- every requirement ID exists
- every acceptance criterion ID exists
- every changed file is linked to the task
- no orphan code is introduced
- no acceptance criterion was weakened after implementation

## Fail Routing

Return to the originating task owner. Escalate if traceability requires changing approved scope.
