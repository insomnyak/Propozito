# E2E Validation Gate

Gate ID: `e2e-validation`

## Purpose

Verify user-facing flows through the UI where feasible.

## Required Inputs

- E2E test plan
- command output
- mapped persona goals
- mapped acceptance criteria
- screenshots, traces, or logs where supported

## Checks

- primary persona goals are covered
- visible loading, error, empty, and success states are checked where applicable
- silent frontend failures are treated as failures
- failures include reproduction steps

## Fail Routing

Return to implementation or QA owner.
