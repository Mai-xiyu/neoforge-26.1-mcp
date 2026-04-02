/**
 * Search tools - search_docs, search_api
 */
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DocsReader } from '../docs-reader.js';

export function registerSearchTools(server: McpServer, reader: DocsReader) {
  server.tool(
    'search_docs',
    'Search NeoForge 26.1 / Minecraft 1.26.1 API documentation. Supports class names, method names, and description keywords. Use this to find relevant APIs before writing code.',
    {
      query: z.string().describe('Search query - class name, method name, or keyword'),
      category: z.string().optional().describe('Filter by category (e.g. "blocks", "items", "events", "registries", "network")'),
      limit: z.number().optional().default(20).describe('Max results (default 20)'),
    },
    async ({ query, category, limit }) => {
      const results = reader.searchDocs(query, category, limit);
      if (results.length === 0) {
        return { content: [{ type: 'text', text: `No results found for "${query}". Try broader terms or different spelling.` }] };
      }

      const lines: string[] = [`Found ${results.length} results for "${query}":\n`];
      for (const r of results) {
        const badge = r.type === 'event' ? '🔔' : r.type === 'class' ? '📦' : '⚙️';
        const sideBadge = r.side === 'client' ? ' 🖥️' : r.side === 'server' ? ' 🖧' : '';
        lines.push(`${badge} **${r.name}**${sideBadge} — \`${r.fullPath}\` [${r.category}]`);
        if (r.desc) lines.push(`  ${r.desc.substring(0, 120)}`);
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  server.tool(
    'search_api',
    'Structured API search with filters. Find methods by class, return type, or annotations.',
    {
      className: z.string().optional().describe('Filter by class name (e.g. "DeferredRegister", "Block")'),
      methodName: z.string().optional().describe('Filter by method name'),
      returnType: z.string().optional().describe('Filter by return type'),
      category: z.string().optional().describe('Filter by category'),
      limit: z.number().optional().default(20),
    },
    async ({ className, methodName, returnType, category, limit }) => {
      const query = [className, methodName, returnType].filter(Boolean).join(' ');
      if (!query) {
        return { content: [{ type: 'text', text: 'Provide at least one of: className, methodName, returnType' }] };
      }

      let results = reader.searchDocs(query, category, limit! * 2);

      // Apply additional filters
      if (className) {
        const lc = className.toLowerCase();
        results = results.filter(r => r.fullPath.toLowerCase().includes(lc));
      }
      if (returnType) {
        // Need to re-filter from raw API index
        // For now, include the filter in the text response
      }

      results = results.slice(0, limit);

      if (results.length === 0) {
        return { content: [{ type: 'text', text: `No API matches. Try search_docs with broader terms.` }] };
      }

      const lines: string[] = [`API search results (${results.length}):\n`];
      for (const r of results) {
        lines.push(`- \`${r.fullPath}#${r.name}\` — ${r.desc || '(no description)'}`);
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );
}
