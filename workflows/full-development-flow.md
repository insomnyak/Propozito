# Full Development Flow

This document outlines the end-to-end workflow for developing a new feature or application using the Propozito Orchestrator.

## Phase 1: Project Definition (Orchestrator, Product Manager, Human Owner)

1.  **Owner Request**: Human owner provides initial project idea/goals.
2.  **Orchestrator**: Initializes `PROJECT_STATE.json`.
3.  **Product Manager**: Creates `project-purpose-contract.md` and `feature-goal-contract.md` for initial features.
4.  **Integrity Auditor**: Reviews contracts for clarity, completeness, and alignment with owner intent.
5.  **Human Owner**: Approves `project-purpose-contract.md` and `feature-goal-contract.md`.

## Phase 2: Requirements & Architecture (Requirements Analyst, System Architect, Security Agent)

1.  **Requirements Analyst**: Transforms `feature-goal-contract.md` into `detailed-requirements-specification.md`.
2.  **Integrity Auditor**: Reviews requirements for ambiguity, completeness, and traceability.
3.  **System Architect**: Designs `architecture-specification.md` and `api-contracts.md` based on requirements.
4.  **Security Agent**: Performs initial threat modeling and security review of the architecture.
5.  **Integrity Auditor**: Reviews architecture and API contracts for soundness and security implications.

## Phase 3: Implementation (Frontend, Backend, Database, Test Engineers)

1.  **Frontend Engineer**: Develops UI components and tests based on design specs and `api-contracts.md`.
2.  **Backend Engineer**: Develops server-side logic and APIs based on `api-contracts.md` and requirements.
3.  **Database/Data Agent**: Designs database schema and migrations based on architecture specs.
4.  **Test Engineer**: Develops comprehensive unit, integration, and end-to-end test suites.
5.  **Integrity Auditor**: Reviews all code, tests, and database changes for "No Slop Code Policy" violations and evidence.

## Phase 4: Quality Assurance & Validation (QA Agent, Persona Generator, Persona QA)

1.  **QA Agent**: Executes automated tests, performs manual testing, and reports bugs.
2.  **Persona Generator**: Creates `user-persona-template.md` files based on `project-purpose-contract.md`.
3.  **Persona QA Agent**: Performs UAT by simulating user interactions with the application using generated personas.
4.  **Integrity Auditor**: Reviews QA and UAT reports, ensuring all acceptance criteria are met and bugs are properly documented.

## Phase 5: Deployment & Release (DevOps/Release Agent)

1.  **DevOps/Release Agent**: Defines CI/CD pipeline, deployment strategy, and `release-plan.md`.
2.  **Integrity Auditor**: Reviews CI/CD pipeline and release plan for robustness and security.
3.  **DevOps/Release Agent**: Executes deployment to staging/production environments.

## Phase 6: Post-Deployment & Feedback (Orchestrator, Human Escalation)

1.  **Orchestrator**: Monitors application health and gathers feedback.
2.  **Human Escalation**: Engages human owner for critical issues or major feedback.

This flow is iterative, with agents continuously collaborating and submitting work for integrity checks.
