# Test-Driven Development Policy

Every task must define required tests before implementation begins.

## Required Rules

- Each acceptance criterion needs at least one meaningful test or approved exemption.
- Each bug fix requires a regression test.
- Critical paths require integration or E2E validation.
- Frontend user-facing work requires interaction or E2E validation where feasible.
- Mocks are allowed for isolation but cannot replace required live validation for critical behavior.
- Coverage thresholds are configurable and secondary to acceptance-criteria coverage.
