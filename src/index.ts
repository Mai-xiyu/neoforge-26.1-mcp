#!/usr/bin/env node
/**
 * NeoForge 26.1 MCP Server — Entry point.
 * Starts the server using stdio transport.
 */
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main(): Promise<void> {
  // Docs directory is at ../../docs relative to the compiled output (dist/src/)
  const docsDir = process.env.NEOFORGE_DOCS_DIR || path.resolve(__dirname, '..', '..', 'docs');

  console.error(`[neoforge-mcp] Starting NeoForge 26.1 MCP Server...`);
  console.error(`[neoforge-mcp] Docs directory: ${docsDir}`);

  const server = await createServer(docsDir);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error(`[neoforge-mcp] Server running on stdio`);
}

main().catch((err) => {
  console.error('[neoforge-mcp] Fatal error:', err);
  process.exit(1);
});
