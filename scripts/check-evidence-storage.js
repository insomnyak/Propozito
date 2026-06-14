#!/usr/bin/env node
const { finish, readAiStateJson, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const manifest = readAiStateJson(root, "evidence-manifest.json", errors);
const heavyTypes = new Set(["screenshot", "video", "trace", "zip", "pdf", "large_log", "generated_report"]);

if (manifest) {
  requireFields(manifest, ["schema_version", "policy_id", "committed_metadata", "uncommitted_artifact_types", "artifacts"], "evidence-manifest", errors);
  requireArray(manifest, "artifacts", "evidence-manifest", errors);
  for (const artifact of manifest.artifacts || []) {
    const label = `evidence artifact '${artifact.artifact_id || "unknown"}'`;
    requireFields(artifact, ["artifact_id", "artifact_type", "path", "content_hash", "storage_location", "committed"], label, errors);
    if (heavyTypes.has(artifact.artifact_type) && artifact.committed) {
      errors.push(`${label}: heavy generated artifact type '${artifact.artifact_type}' should not be committed by default`);
    }
  }
}

finish(errors, "check-evidence-storage: pass");
