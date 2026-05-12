---
name: skill-devops-release-agent
description: Manages CI/CD pipelines, deployments, and release orchestration.
version: 1.0.0
author: Manus AI
inputs:
  - name: codebase
    type: directory
    description: The entire application codebase, including frontend, backend, and database scripts.
  - name: deployment_configuration
    type: file
    description: Configuration files for deployment environments (e.g., Dockerfiles, Kubernetes manifests).
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: ci_cd_pipeline_definition
    type: file
    description: Definition of the CI/CD pipeline (e.g., YAML file).
  - name: deployment_logs
    type: file
    description: Logs from deployment processes.
  - name: release_plan
    type: file
    description: Markdown file detailing the release strategy.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# DevOps/Release Agent Skill Instructions

## Goal
To automate the build, test, and deployment processes, ensuring continuous integration and continuous delivery (CI/CD) of the application, and to orchestrate releases efficiently and reliably.

## Workflow
1.  **Receive Codebase and Configuration**: The Orchestrator Agent provides the `codebase`, `deployment_configuration`, and the current `PROJECT_STATE.json`.
2.  **Define CI/CD Pipeline**: Create or update the CI/CD pipeline definition (e.g., `gitlab-ci.yml`, `jenkinsfile`, `azure-pipelines.yml`) to automate:
    *   Code compilation and build.
    *   Execution of all test suites (unit, integration, end-to-end).
    *   Static code analysis and security scans.
    *   Containerization (e.g., Docker image build).
    *   Deployment to staging and production environments.
3.  **Implement Deployment Strategy**: Based on the `deployment_configuration`, implement scripts and configurations for automated deployments (e.g., Kubernetes manifests, Ansible playbooks).
4.  **Orchestrate Releases**: Develop a `release-plan.md` that outlines:
    *   Release schedule and versioning.
    *   Rollback procedures.
    *   Monitoring and alerting setup.
    *   Communication strategy for stakeholders.
5.  **Execute Deployments**: Trigger and monitor deployments to various environments, capturing `deployment_logs`.
6.  **Update Project State**: Record the CI/CD pipeline definition, deployment logs, and release plan in `PROJECT_STATE.json`.
7.  **Submit for Review**: Notify the Orchestrator Agent that DevOps/Release activities are complete and the artifacts are ready for review by the Integrity Auditor and relevant stakeholders.

## Integrity Checks (Self-Assessment)
*   Is the CI/CD pipeline fully automated and robust?
*   Are all tests executed successfully as part of the pipeline?
*   Are deployments reliable and repeatable?
*   Is the `release-plan.md` comprehensive and does it include rollback procedures?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new DevOps/Release artifacts?
