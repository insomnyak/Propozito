# Test Plan Readiness Gate

Gate ID: `test-plan-readiness`

## Purpose

Ensure tests are planned before implementation.

## Checks

- each acceptance criterion maps to a planned test
- bug fixes include planned regression tests
- critical paths include integration or E2E validation
- frontend flows include interaction or E2E validation where feasible
- mocks do not replace required live validation

## Fail Routing

Return to task planning before implementation begins.
