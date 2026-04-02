/**
 * Browse tools - browse_api_category, list_documents, get_registry_info
 */
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DocsReader } from '../docs-reader.js';

export function registerBrowseTools(server: McpServer, reader: DocsReader) {
  server.tool(
    'browse_api_category',
    'Browse API categories or list classes within a category. Call without arguments to see all categories.',
    {
      category: z.string().optional().describe('Category name (e.g. "blocks", "items", "events"). Omit to list all categories.'),
    },
    async ({ category }) => {
      if (!category) {
        const categories = reader.getCategories();
        const stats = reader.getStats();
        const lines = [
          `# NeoForge 26.1 API Documentation\n`,
          `**${stats.classes} classes** | **${stats.methods} methods** | **${stats.events} events** | **${stats.categories} categories**\n`,
          '## Available Categories\n',
        ];
        for (const cat of categories.sort()) {
          const info = reader.browseCategory(cat);
          if (info) {
            lines.push(`- **${cat}** — ${info.classes.length} classes, ${info.methods} methods${info.events ? `, ${info.events} events` : ''}`);
          }
        }
        return { content: [{ type: 'text', text: lines.join('\n') }] };
      }

      const info = reader.browseCategory(category);
      if (!info) {
        return { content: [{ type: 'text', text: `Category "${category}" not found. Use browse_api_category without arguments to list all.` }] };
      }

      const lines = [
        `# ${category}\n`,
        `**${info.classes.length} classes** | **${info.methods} methods** | **${info.events} events**\n`,
        '## Classes\n',
      ];

      for (const cls of info.classes.sort().slice(0, 100)) {
        lines.push(`- \`${cls}\` — [view](${category}/${cls}.md)`);
      }
      if (info.classes.length > 100) {
        lines.push(`\n... and ${info.classes.length - 100} more classes`);
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  server.tool(
    'list_documents',
    'List available documentation files, optionally filtered by category.',
    {
      category: z.string().optional().describe('Category to list files for. Omit to list all categories.'),
    },
    async ({ category }) => {
      const docs = reader.listDocuments(category);
      if (docs.length === 0) {
        return { content: [{ type: 'text', text: category ? `No documents in category "${category}".` : 'No documentation available.' }] };
      }

      const lines = [category ? `Documents in ${category} (${docs.length}):` : `Available categories (${docs.length}):`];
      for (const d of docs.slice(0, 100)) {
        lines.push(`- ${d}`);
      }
      if (docs.length > 100) lines.push(`... and ${docs.length - 100} more`);

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  server.tool(
    'get_registry_info',
    'Get information about a Minecraft/NeoForge registry type (blocks, items, entities, etc.).',
    {
      registryType: z.string().describe('Registry type (e.g. "Block", "Item", "EntityType", "BlockEntityType", "MenuType")'),
    },
    async ({ registryType }) => {
      const entries = reader.getRegistryInfo(registryType);
      if (entries.length === 0) {
        return { content: [{ type: 'text', text: `No registry info found for "${registryType}".` }] };
      }

      const lines = [`Registry info for "${registryType}" (${entries.length} matches):\n`];
      for (const e of entries) {
        lines.push(`- \`${e.fullPath}#${e.name}\` — ${e.desc || '(no description)'}`);
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );
}
