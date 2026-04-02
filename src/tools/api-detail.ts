/**
 * API detail tools - get_api_detail, get_document, get_document_section
 */
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DocsReader } from '../docs-reader.js';

export function registerApiDetailTools(server: McpServer, reader: DocsReader) {
  server.tool(
    'get_api_detail',
    'Get complete API documentation for a class. Returns full method signatures, parameters, JavaDoc, and usage info. Use after search_docs to get details.',
    {
      fullClassName: z.string().describe('Full class name (e.g. "net.neoforged.neoforge.registries.DeferredRegister") or simple name (e.g. "DeferredRegister")'),
    },
    async ({ fullClassName }) => {
      let doc = reader.getApiDetail(fullClassName);

      // If not found by full name, try simple name search
      if (!doc && !fullClassName.includes('.')) {
        const results = reader.searchDocs(fullClassName, undefined, 1);
        if (results.length > 0) {
          doc = reader.getApiDetail(results[0].fullPath);
        }
      }

      if (!doc) {
        return { content: [{ type: 'text', text: `Class "${fullClassName}" not found. Use search_docs to find the correct class name.` }] };
      }

      return { content: [{ type: 'text', text: doc }] };
    }
  );

  server.tool(
    'get_document',
    'Get a full documentation file by path. Use list_documents to find available paths.',
    {
      docPath: z.string().describe('Document path relative to docs dir (e.g. "blocks/Block.md", "events/index.md")'),
    },
    async ({ docPath }) => {
      const content = reader.getDocument(docPath);
      if (!content) {
        return { content: [{ type: 'text', text: `Document "${docPath}" not found. Use list_documents to see available files.` }] };
      }
      return { content: [{ type: 'text', text: content }] };
    }
  );

  server.tool(
    'get_document_section',
    'Get a specific section from a documentation file by heading title.',
    {
      docPath: z.string().describe('Document path (e.g. "blocks/Block.md")'),
      sectionTitle: z.string().describe('Section heading to extract (e.g. "Methods", "Description")'),
    },
    async ({ docPath, sectionTitle }) => {
      const section = reader.getDocumentSection(docPath, sectionTitle);
      if (!section) {
        return { content: [{ type: 'text', text: `Section "${sectionTitle}" not found in "${docPath}".` }] };
      }
      return { content: [{ type: 'text', text: section }] };
    }
  );
}
