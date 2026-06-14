#!/usr/bin/env node
const { finish, readAiStateJson, requireArray, requireFields, requirePath, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const ledger = readAiStateJson(root, "placeholder-ledger.json", errors);
const liveStates = new Set(["placeholder", "planned", "in_progress", "partial"]);

if (ledger) {
  requireFields(ledger, ["schema_version", "placeholders"], "placeholder-ledger", errors);
  requireArray(ledger, "placeholders", "placeholder-ledger", errors);
  for (const item of ledger.placeholders || []) {
    const label = `placeholder '${item.placeholder_id || "unknown"}'`;
    requireFields(item, ["placeholder_id", "feature_id", "surface", "component_or_module", "what_it_fakes", "risk_if_misread_as_real", "owning_work_item", "replacement_acceptance_criteria", "verification_surface", "state"], label, errors);
    if (liveStates.has(item.state)) errors.push(`${label}: live placeholder state '${item.state}' blocks completion`);
    if (item.state === "deferred" && !item.deferred_approval) errors.push(`${label}: deferred placeholder requires deferred_approval`);
    if (item.evidence_path) requirePath(root, item.evidence_path, `${label}.evidence_path`, errors);
  }
}

finish(errors, "validate-placeholders: pass");
