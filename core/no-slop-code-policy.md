# No-Slop Code Policy

Completion requires evidence, not confidence.

Reject work if:

- tests were not run
- evidence is missing
- tests are fake or assertion-free
- tests only mock behavior that requires live validation
- errors are swallowed silently
- TODO placeholders remain without explicit approval
- dead code is introduced
- duplicate business logic is introduced
- auth or permissions are bypassed
- failing commands are ignored
- acceptance criteria are changed to match the implementation
- broad refactors are mixed into feature work
- user-facing flows lack loading, error, empty, and success states where applicable

Coverage percentage is secondary to acceptance-criteria coverage. Each acceptance criterion must have at least one meaningful test or an explicit owner-approved exemption.
