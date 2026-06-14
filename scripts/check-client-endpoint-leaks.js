#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { finish, listFiles, readAiStateJson, readText, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const boundary = readAiStateJson(root, "security-boundary.json", errors);
const leakPattern = /(http:\/\/localhost:\d+|https?:\/\/127\.0\.0\.1:\d+|BACKEND_URL|INTERNAL_API|SECRET|SERVICE_URL)/;

if (boundary) {
  if (boundary.has_frontend && boundary.has_backend && boundary.browser_backend_direct_access_allowed === false) {
    const paths = boundary.client_source_paths && boundary.client_source_paths.length > 0
      ? boundary.client_source_paths.map((relativePath) => path.resolve(root, relativePath)).filter((fullPath) => fs.existsSync(fullPath))
      : [path.resolve(root, "src")].filter((fullPath) => fs.existsSync(fullPath));
    for (const base of paths) {
      const files = fs.statSync(base).isDirectory() ? listFiles(base).filter((file) => fs.statSync(file).isFile()) : [base];
      for (const file of files) {
        if (!/\.(js|jsx|ts|tsx|html|css|json)$/.test(file)) continue;
        const rel = path.relative(root, file).replace(/\\/g, "/");
        if (leakPattern.test(readText(root, rel, errors))) errors.push(`client endpoint leak candidate in '${rel}'`);
      }
    }
  }
}

finish(errors, "check-client-endpoint-leaks: pass");
