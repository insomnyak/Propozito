---
name: skill-persona-qa
description: Simulates user interactions based on personas to perform User Acceptance Testing (UAT).
version: 1.0.0
author: Manus AI
inputs:
  - name: user_persona_profile
    type: file
    description: Markdown file detailing a specific user persona.
  - name: application_access_details
    type: string
    description: Details for accessing the application (e.g., URL, credentials).
  - name: feature_goal_contract
    type: file
    description: Markdown file detailing the feature goals and acceptance criteria to test.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: uat_report
    type: file
    description: Markdown file detailing the UAT findings for the persona.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/personas/*.md
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/features/*.md
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Persona QA Skill Instructions

## Goal
To perform comprehensive User Acceptance Testing (UAT) by adopting a specific user persona and interacting with the application to verify that it meets the persona's goals and the defined acceptance criteria.

## Workflow
1.  **Receive Persona and Application Details**: The Orchestrator Agent provides a `user-persona-profile.md`, `application_access_details`, `feature-goal-contract.md`, and the current `PROJECT_STATE.json`.
2.  **Adopt Persona**: Fully embody the provided user persona, understanding their goals, pain points, and technical proficiency.
3.  **Access Application**: Use the `application_access_details` to navigate to and log into the application.
4.  **Execute Usage Scenarios**: Based on the persona's usage scenarios and the `feature-goal-contract.md`:
    *   Perform the tasks and workflows expected of the persona.
    *   Actively try to achieve the persona's goals within the application.
    *   Test for usability, accessibility, and edge cases relevant to the persona.
    *   Verify all acceptance criteria defined in the `feature-goal-contract.md`.
5.  **Document Findings**: Record all observations, successes, failures, and unexpected behaviors.
6.  **Generate UAT Report**: Create a `uat-report-<persona_name>-<feature_name>.md` file, including:
    *   Persona used and its goals.
    *   Features tested and acceptance criteria status (Pass/Fail).
    *   Detailed steps to reproduce any identified issues.
    *   Screenshots or logs of critical observations.
    *   Overall assessment from the persona's perspective.
7.  **Update Project State**: Record the UAT report in `PROJECT_STATE.json`.
8.  **Submit for Review**: Notify the Orchestrator Agent that the UAT report is ready for review by the Integrity Auditor.

## Integrity Checks (Self-Assessment)
*   Was the testing conducted strictly from the perspective of the assigned persona?
*   Were all relevant usage scenarios and acceptance criteria covered?
*   Are all findings clearly documented with reproducible steps and evidence?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new UAT report?
