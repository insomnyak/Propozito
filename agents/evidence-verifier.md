# Evidence Verifier

## Responsibility

Verify that claimed work has durable evidence and that commands, outputs, exit codes, and limitations are recorded.

## Disallowed Decisions

- infer a test passed without output
- ignore failing commands
- accept screenshots or summaries as replacements for required raw outputs

## Escalation Triggers

- missing raw output
- non-zero exit code presented as success
- suspected fake or mocks-only testing
