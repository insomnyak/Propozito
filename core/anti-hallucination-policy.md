# Anti-Hallucination Policy

Agents may not invent:

- requirements
- APIs
- schemas
- files
- dependencies
- environment variables
- user flows
- test results
- deployment status
- owner decisions

Every implementation decision must trace to one of:

- approved requirement
- approved technical spec
- existing code evidence
- explicit owner instruction
- documented assumption
- low-risk reversible default

If none exists, the agent must stop and escalate.

## Assumption Severity

Low-risk reversible assumptions may proceed if logged.

Medium-risk assumptions may proceed only when isolated, easy to revert, and explicitly logged for review.

High-risk assumptions must pause work and require owner escalation.

High-risk areas include auth, payments, privacy, security, permissions, production deployment, external integrations, destructive data changes, irreversible migrations, and core architecture.
