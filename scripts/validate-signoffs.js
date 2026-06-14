#!/usr/bin/env node
const { finish, nonEmptyFile, readAiStateJson, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const surfaces = readAiStateJson(root, "verification-surfaces.json", errors);
const signoffs = readAiStateJson(root, "signoffs.json", errors);

if (surfaces) {
  requireFields(surfaces, ["schema_version", "surfaces"], "verification-surfaces", errors);
  requireArray(surfaces, "surfaces", "verification-surfaces", errors, 1);
}
const surfaceIds = new Set((surfaces && surfaces.surfaces || []).map((surface) => surface.test_id));
for (const surface of (surfaces && surfaces.surfaces) || []) {
  const label = `verification surface '${surface.test_id || "unknown"}'`;
  requireFields(surface, ["feature_id", "test_id", "plain_language_description", "why_it_matters", "method", "inputs", "command", "last_exit_code", "raw_output_path", "visual_proof_type", "limitations", "owner_status"], label, errors);
  if (surface.raw_output_path && !nonEmptyFile(root, surface.raw_output_path)) errors.push(`${label}: raw_output_path is missing or empty`);
  if (surface.last_exit_code !== 0) errors.push(`${label}: last_exit_code is not 0`);
}

if (signoffs) {
  requireFields(signoffs, ["schema_version", "signoffs"], "signoffs", errors);
  requireArray(signoffs, "signoffs", "signoffs", errors);
  for (const signoff of signoffs.signoffs || []) {
    const label = `signoff '${signoff.signoff_id || "unknown"}'`;
    requireFields(signoff, ["signoff_id", "feature_id", "work_item_id", "verification_surface_id", "owner_status", "signed_by", "signed_at"], label, errors);
    if (!surfaceIds.has(signoff.verification_surface_id)) errors.push(`${label}: verification_surface_id '${signoff.verification_surface_id}' does not exist`);
    if (signoff.owner_status === "rejected" && !signoff.owner_note) errors.push(`${label}: rejected signoff requires owner_note`);
  }
}

finish(errors, "validate-signoffs: pass");
