#!/usr/bin/env node
const { finish, readAiStateJson, requireArray, requireFields, requirePath, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const graph = readAiStateJson(root, "app-relationship-graph.json", errors);
const allowedImpacts = new Set(["direct", "indirect", "planned"]);

if (graph) {
  requireFields(graph, ["schema_version", "nodes", "edges"], "app-relationship-graph", errors);
  requireArray(graph, "nodes", "app-relationship-graph", errors, 1);
  requireArray(graph, "edges", "app-relationship-graph", errors);
  const nodeIds = new Set();
  for (const node of graph.nodes || []) {
    const label = `graph node '${node.node_id || "unknown"}'`;
    requireFields(node, ["node_id", "node_type", "label", "source_path"], label, errors);
    if (node.node_id) nodeIds.add(node.node_id);
    if (node.source_path && !node.source_path.startsWith("external:")) requirePath(root, node.source_path, `${label}.source_path`, errors);
  }
  for (const edge of graph.edges || []) {
    const label = `graph edge '${edge.edge_id || "unknown"}'`;
    requireFields(edge, ["edge_id", "from", "to", "relationship", "impact"], label, errors);
    if (!nodeIds.has(edge.from)) errors.push(`${label}: from node '${edge.from}' does not exist`);
    if (!nodeIds.has(edge.to)) errors.push(`${label}: to node '${edge.to}' does not exist`);
    if (!allowedImpacts.has(edge.impact)) errors.push(`${label}: unsupported impact '${edge.impact}'`);
  }
}

finish(errors, "validate-relationship-graph: pass");
