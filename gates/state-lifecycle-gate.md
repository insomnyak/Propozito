# State Lifecycle Gate

Gate ID: `state-lifecycle`

## Purpose

Ensure work that creates or mutates state has ownership, lifecycle, rollback, migration, restart, and verification answers.

## Checks

- state is described
- location and owner are recorded
- restart behavior is known
- migration and rollback plans exist
- tests and user verification are defined

## Failure Routing

Return to implementation or architecture owner.
