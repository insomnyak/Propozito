# Test Evidence Gate

Gate ID: `test-evidence`

## Purpose

Verify that claimed test results are real, complete, and mapped to acceptance criteria.

## Required Inputs

- evidence report
- test command
- raw output path
- exit code
- tests added or modified
- acceptance criteria IDs

## Checks

- command is recorded
- raw output exists and is non-empty
- exit code is recorded
- failed commands are not hidden
- every acceptance criterion has test evidence or approved exemption
- bug fixes include regression evidence

## Fail Routing

Return to implementation or test owner. Escalate suspected fake testing.
