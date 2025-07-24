/// <reference types="bun-types" />

import { build } from "bun";
import { chmod } from "node:fs/promises";
import { join } from "node:path";

async function buildMcpServer() {
  const entrypoint = "./src/mcp-server/mcp-server.ts";
  const destinationDir = "./bin";

  await build({
    entrypoints: [entrypoint],
    outdir: destinationDir,
    sourcemap: "linked",
    target: "node",
    format: "esm",
    minify: false,
    throw: true,
    banner: "#!/usr/bin/env node",
  });

  // Set executable permissions on the output file
  const outputFile = join(destinationDir, "mcp-server.js");
  await chmod(outputFile, 0o755);
}

await buildMcpServer().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
