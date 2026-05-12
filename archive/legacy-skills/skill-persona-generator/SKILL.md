---
name: skill-persona-generator
description: Creates detailed user personas for testing purposes based on project goals.
version: 1.0.0
author: Manus AI
inputs:
  - name: project_purpose_contract
    type: file
    description: Markdown file detailing the project's core purpose and goals.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: user_persona_profiles
    type: directory
    description: Directory containing markdown files for each generated user persona.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: <project-root>/docs/project_purpose_contract.md
  - type: file_based
    format: markdown
    path: <project-root>/docs/personas/*.md
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# Persona Generator Skill Instructions

## Goal
To generate a diverse set of realistic user personas that accurately represent the target audience and their potential interactions with the application, facilitating effective persona-driven QA.

## Workflow
1.  **Receive Project Purpose**: The Orchestrator Agent provides the `project-purpose-contract.md` and the current `PROJECT_STATE.json`.
2.  **Analyze Project Goals**: Extract key information about the application's purpose, target users, and problems it solves from the `project-purpose-contract.md`.
3.  **Generate Diverse Personas**: Based on the analysis, create 3-5 distinct user personas. For each persona, use the `user-persona-template.md` to define:
    *   **Name and Background**: Fictional identity, age, occupation, and relevant demographic details.
    *   **Goals**: What the persona aims to achieve with the application, directly linked to the project's goals.
    *   **Pain Points**: Challenges, frustrations, or unmet needs the persona might experience that the application aims to address.
    *   **Technical Proficiency**: Level of comfort and experience with technology, including specific tools or platforms.
    *   **Usage Scenarios**: Detailed descriptions of how the persona would interact with the application to achieve their goals.
    *   **Motivations**: Underlying reasons for using the application.
4.  **Save Persona Profiles**: Save each persona as a separate markdown file (e.g., `persona-admin.md`, `persona-non-technical-user.md`) in the `docs/personas/` directory.
5.  **Update Project State**: Record the creation of these persona profiles in `PROJECT_STATE.json`.
6.  **Submit for Review**: Notify the Orchestrator Agent that the persona profiles are ready for review by the Integrity Auditor and potentially the human owner.

## Integrity Checks (Self-Assessment)
*   Are the generated personas diverse enough to cover the primary user segments?
*   Do the personas' goals and pain points align with the project's purpose?
*   Are the usage scenarios realistic and detailed?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new persona documents?
