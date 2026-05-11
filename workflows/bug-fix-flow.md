# Bug Fix Flow

This document outlines the workflow for identifying, fixing, and verifying bugs within the Hardened Multi-Agent Development Framework (HMADF).

## Phase 1: Bug Identification & Reporting (QA Agent, Persona QA)

1.  **QA Agent / Persona QA**: Identifies a bug during testing (manual, automated, or persona-driven UAT).
2.  **QA Agent**: Creates a detailed `bug-report-<bug_id>.md`, including steps to reproduce, expected vs. actual results, and severity.
3.  **Orchestrator**: Updates `PROJECT_STATE.json` with the new bug report and assigns it for triage.

## Phase 2: Triage & Assignment (Orchestrator, Product Manager)

1.  **Product Manager**: Reviews the `bug-report-<bug_id>.md`, assesses its impact, and prioritizes it.
2.  **Orchestrator**: Assigns the bug to the relevant engineering agent (Frontend, Backend, Database) based on the bug's nature.

## Phase 3: Bug Fix Implementation (Assigned Engineer Agent)

1.  **Assigned Engineer Agent**: Receives the `bug-report-<bug_id>.md`.
2.  **Assigned Engineer Agent**: Develops a fix for the bug, ensuring minimal impact on other functionalities.
3.  **Assigned Engineer Agent**: Writes or updates relevant unit/integration tests to cover the bug fix and prevent regressions.
4.  **Assigned Engineer Agent**: Submits the code changes and test results as `task-completion-evidence.md`.
5.  **Integrity Auditor**: Reviews the `task-completion-evidence.md` to ensure the fix is complete, adheres to the "No Slop Code Policy," and includes sufficient test coverage.

## Phase 4: Verification (QA Agent, Persona QA)

1.  **QA Agent**: Verifies the bug fix by re-running automated tests and performing targeted manual testing based on the original `bug-report-<bug_id>.md`.
2.  **Persona QA Agent (if applicable)**: If the bug was found during persona-driven UAT, the Persona QA Agent re-tests the affected functionality from the persona's perspective.
3.  **QA Agent**: Updates the `bug-report-<bug_id>.md` with verification status (e.g., "Verified Fixed").
4.  **Integrity Auditor**: Reviews the QA verification report.

## Phase 5: Closure (Orchestrator)

1.  **Orchestrator**: Updates `PROJECT_STATE.json` to mark the bug as closed.
2.  **Orchestrator**: Notifies relevant stakeholders of the bug fix and closure.

This flow emphasizes rigorous testing and integrity checks at each step to ensure bugs are not only fixed but also verified thoroughly.
