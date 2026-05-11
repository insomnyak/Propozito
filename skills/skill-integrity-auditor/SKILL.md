---
name: skill-integrity-auditor
description: Verifies evidence provided by other agents, detects shortcuts, and enforces integrity rules.
version: 1.0.0
author: Manus AI
inputs:
  - name: task_completion_evidence
    type: file
    description: Markdown file containing the task completion evidence from another agent.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: integrity_report
    type: file
    description: Markdown file detailing the audit findings and recommendations.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/task-completion-evidence.md
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Integrity Auditor Skill Instructions

## Goal
To rigorously audit task completion evidence submitted by other agents, ensuring adherence to the "No Slop Code Policy" and "Anti-Hallucination Rules," and maintaining the overall integrity of the development process.

## Workflow
1.  **Receive Task Completion Evidence**: The Orchestrator Agent provides the `task-completion-evidence.md` file and the current `PROJECT_STATE.json`.
2.  **Verify Evidence**: Systematically check each point in the `task-completion-evidence.md`:
    *   **Traceability**: Confirm the task is linked to a valid feature goal and project purpose in `PROJECT_STATE.json`.
    *   **Code Changes**: Verify that the specified code files exist and have been modified as claimed.
    *   **Test Results**: Execute the provided test commands and verify that all tests pass and coverage requirements are met. If test commands are not provided, request them via the Human Escalation Agent.
    *   **Verification Command Output**: Execute the provided shell commands and validate their output against expected results.
    *   **Self-Reflection**: Evaluate the agent's self-reflection for any red flags (e.g., unaddressed uncertainties, potential shortcuts).
    *   **Integrity Checksum**: Compare the `PROJECT_STATE.json` hash before and after the task to detect unauthorized modifications.
3.  **Apply "No Slop Code Policy"**: Check for:
    *   TDD placeholders or fake tests.
    *   Mocked success without live validation.
    *   Unused code or unhandled errors.
    *   Bypassed security/authentication.
    *   Unmatched acceptance criteria.
    *   Unverified claims.
4.  **Apply "Anti-Hallucination Rules"**: Ensure all decisions are traceable to approved requirements, architecture, existing codebase, owner instructions, or documented constraints. Flag any invented elements.
5.  **Generate Integrity Report**: Create an `integrity-report.md` detailing findings:
    *   Pass/Fail status for each evidence point.
    *   Identification of any "slop code" or hallucinated elements.
    *   Recommendations for remediation if the audit fails.
6.  **Update Project State**: Record the audit outcome in `PROJECT_STATE.json`.
7.  **Notify Orchestrator**: Inform the Orchestrator Agent of the audit results. If the audit fails, the task is rejected, and the originating agent may be instructed to revise their work.

## Integrity Checks (Self-Assessment)
*   Was every piece of evidence thoroughly checked and verified?
*   Were all "No Slop Code" and "Anti-Hallucination" rules applied rigorously?
*   Is the `integrity-report.md` clear, objective, and actionable?
*   Is the `PROJECT_STATE.json` accurately updated with the audit results?
