#!/usr/bin/env node
const { finish, readAiStateJson, requireFields, requirePath, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const setup = readAiStateJson(root, "setup-contract.json", errors);

if (setup) {
  requireFields(setup, ["schema_version", "project_type", "surfaces", "verification_mode", "terminology_profile_path", "user_interaction_profile", "autonomy_profile", "context_rotation_policy", "evidence_storage_policy", "commit_push_policy", "project_management_integration", "semantic_graph_preference", "owner_signoff_policy", "security_boundary_profile"], "setup-contract", errors);
  if (setup.surfaces) {
    requireFields(setup.surfaces, ["has_frontend", "needs_frontend", "has_backend", "has_cli", "has_api", "has_external_integrations"], "setup-contract.surfaces", errors);
  }
  if (setup.terminology_profile_path) requirePath(root, setup.terminology_profile_path, "setup-contract.terminology_profile_path", errors);
  if (setup.verification_mode && !["frontend_verification", "cli_verification", "api_verification", "backend_verification", "hybrid_verification", "headless_ci_verification", "manual_human_review"].includes(setup.verification_mode)) {
    errors.push(`setup-contract: unsupported verification_mode '${setup.verification_mode}'`);
  }
}

finish(errors, "validate-setup: pass");
