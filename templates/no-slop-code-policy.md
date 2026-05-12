# No Slop Code Policy

This policy outlines strict guidelines to prevent the generation of low-quality, incomplete, or misleading code and artifacts within the Propozito Orchestrator. Adherence to this policy is enforced by the Integrity Auditor Agent.

## Prohibited Practices

Agents are strictly forbidden from:

1.  **TDD Placeholders**: Submitting tests that are merely placeholders or incomplete, without full implementation and passing results.
2.  **Fake Tests**: Creating tests that do not genuinely validate functionality or are designed to always pass regardless of code correctness.
3.  **Mocked Success**: Claiming functionality is working based solely on mocked responses or simulated environments when live validation is required or possible.
4.  **Silent Errors**: Implementing code that swallows errors without proper logging, handling, or reporting.
5.  **Unused Code**: Including code that is not relevant to the current feature or task, leading to bloat and maintenance overhead.
6.  **Bypassing Security/Auth**: Implementing solutions that circumvent or weaken established security measures or authentication protocols.
7.  **Unmatched Acceptance Criteria**: Submitting work that does not directly and fully meet all defined acceptance criteria in the `feature-goal-contract.md`.
8.  **Unverified Claims**: Making assertions about functionality or completeness without providing verifiable evidence (e.g., test results, command outputs, logs).

## Enforcement

The Integrity Auditor Agent will actively check for violations of this policy. Any task found to be in violation will be rejected, and the originating agent will be required to revise their work until full compliance is achieved.

## Rationale

This policy ensures that all code and artifacts produced by the Propozito Orchestrator are of high quality, reliable, and genuinely contribute to the project's goals, preventing technical debt and maintaining trust in the AI development process.
