---
name: skill-orchestrator
description: Manages the overall project workflow, assigns tasks, and monitors progress.
version: 1.0.0
author: Manus AI
inputs:
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Orchestrator Skill Instructions

## Goal
To coordinate the multi-agent development process, ensuring tasks are assigned, monitored, and completed in alignment with the project goals and integrity standards.

## Workflow
1.  **Initialize Project**: Upon receiving a new project request, create the initial `PROJECT_STATE.json` and `project_purpose_contract.md`.
2.  **Task Assignment**: Based on the `PROJECT_STATE.json` and available skills, identify the next logical task and assign it to the appropriate agent.
3.  **Monitor Progress**: Continuously monitor the `PROJECT_STATE.json` for task completion, evidence submission, and integrity reports.
4.  **Integrity Check**: Before advancing a task, invoke the `skill-integrity-auditor` to verify submitted evidence.
5.  **Human Escalation**: If the Integrity Auditor flags an issue, or if a critical decision is required, invoke the `skill-human-escalation`.
6.  **Update Project State**: After successful task completion and integrity checks, update the `PROJECT_STATE.json` to reflect the new state.
7.  **Loop**: Repeat steps 2-6 until the project goal is achieved.

## Integrity Checks (Self-Assessment)
*   Are tasks being assigned to the correct agents based on their skills?
*   Is the `PROJECT_STATE.json` consistently updated and accurate?
*   Are all integrity checks being performed before task advancement?
*   Are human escalations triggered appropriately for critical issues?
