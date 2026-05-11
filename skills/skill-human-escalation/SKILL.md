---
name: skill-human-escalation
description: Facilitates communication with the human owner for critical decisions or ambiguities.
version: 1.0.0
author: Manus AI
inputs:
  - name: escalation_reason
    type: string
    description: The reason for escalating to the human owner.
  - name: context_files
    type: directory
    description: Relevant files providing context for the escalation.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: owner_decision
    type: string
    description: The decision or guidance provided by the human owner.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Human Escalation Skill Instructions

## Goal
To provide a structured mechanism for AI agents to escalate critical issues, ambiguities, or decisions requiring human judgment to the project owner, ensuring appropriate human oversight.

## Workflow
1.  **Receive Escalation Request**: Any agent can trigger this skill by providing an `escalation_reason` and `context_files` (e.g., integrity reports, conflicting requirements) to the Orchestrator Agent.
2.  **Prepare Escalation Summary**: The Human Escalation Agent compiles a concise summary of the issue, including:
    *   The problem statement.
    *   Relevant background information from `context_files`.
    *   Potential options or solutions.
    *   The specific decision or guidance required from the human owner.
3.  **Initiate Human Interaction**: Use the `message` tool with type `ask` to present the escalation summary to the human owner. Include all `context_files` as attachments.
4.  **Record Escalation**: Document the escalation in `PROJECT_STATE.json`, including the reason, date, and any provided context.
5.  **Receive Owner Decision**: Await the human owner's response. Once received, record the `owner_decision` in `PROJECT_STATE.json`.
6.  **Notify Orchestrator**: Inform the Orchestrator Agent of the human owner's decision so that the development process can continue.

## Integrity Checks (Self-Assessment)
*   Is the escalation reason clear and justified?
*   Are all necessary context files included to enable an informed human decision?
*   Is the `PROJECT_STATE.json` accurately updated with the escalation details and the owner's decision?
