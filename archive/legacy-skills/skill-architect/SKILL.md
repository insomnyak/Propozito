---
name: skill-architect
description: Designs the overall system architecture, data flow, and API contracts.
version: 1.0.0
author: Manus AI
inputs:
  - name: detailed_requirements_specification
    type: file
    description: Markdown file detailing functional and non-functional requirements.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: architecture_specification
    type: file
    description: Markdown file detailing the system architecture.
  - name: api_contracts
    type: file
    description: Markdown or OpenAPI specification for API endpoints.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: <project-root>/docs/requirements/*.md
  - type: file_based
    format: markdown
    path: <project-root>/docs/architecture/*.md
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# System Architect Skill Instructions

## Goal
To design a robust, scalable, and secure system architecture that fulfills all functional and non-functional requirements, and to define clear API contracts for inter-component communication.

## Workflow
1.  **Receive Detailed Requirements**: The Orchestrator Agent provides the `detailed-requirements-specification.md` and the current `PROJECT_STATE.json`.
2.  **Analyze Requirements**: Thoroughly review all functional and non-functional requirements to understand the system's scope and constraints.
3.  **Design System Architecture**: Develop a high-level and detailed architecture design, considering:
    *   **Microservices/Modular Architecture**: Decompose the system into logical, independent services.
    *   **Data Flow**: Map out how data moves between components and external systems.
    *   **Technology Stack**: Propose appropriate technologies and frameworks.
    *   **Scalability and Performance**: Design for anticipated load and response times.
    *   **Security**: Incorporate security best practices and compliance requirements.
    *   **Error Handling and Resilience**: Plan for graceful degradation and recovery.
4.  **Define API Contracts**: For each service, define clear API endpoints, request/response formats, authentication mechanisms, and error codes. Use OpenAPI/Swagger specification if appropriate.
5.  **Create Architecture Specification**: Generate an `architecture-specification.md` file in the `docs/architecture/` directory, including:
    *   High-level architectural diagrams (e.g., D2 diagrams).
    *   Detailed component descriptions.
    *   Data models and schemas.
    *   Technology choices and justifications.
    *   Deployment considerations.
6.  **Create API Contracts Document**: Generate `api-contracts.md` (or `.yaml` for OpenAPI) in the `docs/architecture/` directory.
7.  **Update Project State**: Record the creation of these documents in `PROJECT_STATE.json`.
8.  **Submit for Review**: Notify the Orchestrator Agent that the architecture and API contracts are ready for review by the Integrity Auditor, Security Agent, and relevant engineering agents.

## Integrity Checks (Self-Assessment)
*   Does the architecture address all functional and non-functional requirements?
*   Is the design modular, scalable, and secure?
*   Are API contracts clear, consistent, and complete?
*   Are there any ambiguities or potential conflicts in the design?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new architecture documents?
