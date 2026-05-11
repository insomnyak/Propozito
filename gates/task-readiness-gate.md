# Task Readiness Gate

Gate ID: `task-readiness`

## Purpose

Block vague or unsafe work before implementation begins.

## Required Inputs

- task record
- linked story or feature goal
- acceptance criteria
- file ownership boundaries
- test plan
- evidence plan
- dependency list
- risk level

## Checks

- requirement IDs are present
- acceptance criteria IDs are present
- allowed and disallowed files are defined
- dependencies are explicit
- required tests are defined before coding
- required gates are listed
- evidence paths are planned
- rollback notes exist for medium or high risk work
- no unresolved high-risk questions remain

## Pass Criteria

All required fields exist and the burst is small enough to be one reviewable patch.

## Fail Routing

Return to `epic-story-decomposer` or `task-readiness-auditor`.
