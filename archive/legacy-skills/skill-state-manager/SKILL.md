---
name: skill-state-manager
description: Manages the central PROJECT_STATE.json file, ensuring consistency and integrity.
version: 1.0.0
author: Manus AI
inputs:
  - name: project_state_update_request
    type: string
    description: A JSON string representing the requested update to PROJECT_STATE.json.
  - name: current_project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# State Manager Skill Instructions

## Goal
To provide a centralized and controlled mechanism for updating the `PROJECT_STATE.json` file, ensuring data consistency, integrity, and preventing conflicts across multiple agents.

## Workflow
1.  **Receive State Update Request**: An agent (typically the Orchestrator) sends a `project_state_update_request` (a JSON string) and the `current_project_state`.
2.  **Validate Request**: The State Manager validates the incoming JSON update request against a predefined schema for `PROJECT_STATE.json`.
3.  **Apply Update**: If the request is valid, the State Manager applies the changes to the `current_project_state`.
4.  **Generate Checksum**: Calculate a new checksum for the `updated_project_state`.
5.  **Save Updated State**: Overwrite the `PROJECT_STATE.json` with the `updated_project_state`.
6.  **Return Updated State**: Provide the `updated_project_state` and its new checksum to the requesting agent.

## Integrity Checks (Self-Assessment)
*   Was the incoming `project_state_update_request` valid against the schema?
*   Was the `PROJECT_STATE.json` updated without introducing any corruption or inconsistencies?
*   Was a new checksum correctly generated for the updated state?
