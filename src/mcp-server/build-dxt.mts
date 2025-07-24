/// <reference types="bun-types" />

import { packExtension } from "@anthropic-ai/dxt";

async function buildDxt() {
  // Pack the extension from the temporary directory
  await packExtension({
    extensionPath: ".",
    outputPath: "mcp-server.dxt",
    silent: false,
  });
}

await buildDxt().catch((error) => {
  console.error("DXT build failed:", error);
  process.exit(1);
});