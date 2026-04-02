/**
 * NeoForge 26.1 MCP Server — core server setup with all tools registered.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { DocsReader } from './docs-reader.js';
import { registerSearchTools } from './tools/search.js';
import { registerApiDetailTools } from './tools/api-detail.js';
import { registerEventTools } from './tools/events.js';
import { registerBrowseTools } from './tools/browse.js';
import { registerCodegenTools } from './tools/codegen.js';
import { registerReviewTools } from './tools/review.js';
import { registerKnowledgeBaseTools } from './tools/knowledge-base.js';

const SERVER_INSTRUCTIONS = `You are a NeoForge 26.1 (Minecraft 1.26.1) modding assistant with access to the complete Minecraft + NeoForge API documentation and code generation tools.

## Environment
- Minecraft: 1.26.1.1 (Mojang no longer obfuscates source starting from 1.26.1)
- NeoForge: 26.1.0.17-beta
- Java: 21
- Mappings: Parchment 2025.12.21-nightly
- Build system: Gradle with net.neoforged.moddev plugin 2.0.x

## Available Tools

### Documentation Search
- **search_docs**: Full-text search across all MC + NeoForge documentation
- **search_api**: Search API entries by name, class, or description
- **get_api_detail**: Get full details of a specific class/method/field
- **get_document**: Read a complete documentation page
- **get_document_section**: Read a specific section of a doc page

### Event System
- **search_events**: Find events by name or description
- **get_event_detail**: Get full event details with parameters and usage examples

### Navigation
- **browse_api_category**: Browse API categories and their contents
- **list_documents**: List all documents in a category
- **get_registry_info**: Get information about MC/NeoForge registries

### Code Generation
- **generate_mod_project**: Scaffold a complete NeoForge mod project
- **generate_block**: Generate block code (with optional BlockEntity or BlockStates)
- **generate_item**: Generate item code (with optional food properties)
- **generate_entity**: Generate entity code (living, projectile, or misc)
- **generate_event_handler**: Generate event handler class
- **generate_network_packet**: Generate CustomPacketPayload for networking
- **generate_data_provider**: Generate DataGen provider (recipe, loot, tag, model, language)

### Code Review
- **review_mod_code**: Review Java code for common NeoForge mistakes

### Knowledge Base
- **get_neoforge_knowledge**: Get best practices and patterns for a topic
- **list_knowledge_topics**: List all available knowledge base topics

## Mandatory Rules for NeoForge 26.1 Modding

1. **DeferredRegister**: ALWAYS use DeferredRegister for registration. NEVER use direct Registry calls.
2. **Event Bus**: 
   - MOD bus: Lifecycle events (FMLCommonSetupEvent, RegisterEvent, etc.)
   - GAME bus (default): Gameplay events (BlockEvent, PlayerEvent, etc.)
   - @EventBusSubscriber methods MUST be static
3. **Client/Server Separation**: 
   - NEVER reference client classes from server code
   - Use level.isClientSide to check logical side
   - Use @EventBusSubscriber(value = Dist.CLIENT) for client-only events
4. **Networking**: Use CustomPacketPayload (NOT SimpleChannel/SimpleNetwork)
5. **Capabilities**: Use the new NeoForge capability system (RegisterCapabilitiesEvent)
6. **Data Generation**: Prefer DataGen over hand-writing JSON files
7. **Codecs**: Use Mojang Codecs for serialization (NOT manual NBT read/write when possible)
8. **No Obfuscation**: MC 1.26.1 sources are NOT obfuscated — use real class/method/field names

## Workflow Guidelines
1. When asked about an API, FIRST use search_api or search_docs to find the correct class/method
2. Then use get_api_detail to get exact signatures and parameters
3. Before writing event handlers, use search_events/get_event_detail to verify event names and parameters
4. Use the knowledge base for patterns and best practices
5. Use code generation tools for scaffolding, then customize
6. Use review_mod_code to check code before presenting it to the user
`;

export async function createServer(docsDir: string): Promise<McpServer> {
  const server = new McpServer({
    name: 'neoforge-26.1',
    version: '1.0.0',
  });

  // Load documentation
  const reader = new DocsReader(docsDir);
  await reader.load();

  const stats = reader.getStats();
  console.error(`[neoforge-mcp] Loaded: ${stats.classes} classes, ${stats.methods} methods, ${stats.events} events, ${stats.categories} categories`);

  // Register all tool groups
  registerSearchTools(server, reader);
  registerApiDetailTools(server, reader);
  registerEventTools(server, reader);
  registerBrowseTools(server, reader);
  registerCodegenTools(server);
  registerReviewTools(server);
  registerKnowledgeBaseTools(server);

  // Register server instructions as a resource
  server.resource(
    'neoforge-instructions',
    'neoforge://instructions',
    { description: 'NeoForge 26.1 MCP server instructions and modding rules', mimeType: 'text/markdown' },
    async () => ({
      contents: [{ uri: 'neoforge://instructions', text: SERVER_INSTRUCTIONS, mimeType: 'text/markdown' }],
    }),
  );

  // API index resource
  server.resource(
    'api-index',
    'api-index://full',
    { description: 'Complete API index for browsing all available APIs', mimeType: 'application/json' },
    async () => {
      const categories = reader.getCategories();
      const index: Record<string, { classes: number; methods: number; events: number }> = {};
      for (const cat of categories) {
        const info = reader.browseCategory(cat);
        if (info) index[cat] = { classes: info.classes.length, methods: info.methods, events: info.events };
      }
      return {
        contents: [{
          uri: 'api-index://full',
          text: JSON.stringify(index, null, 2),
          mimeType: 'application/json',
        }],
      };
    },
  );

  return server;
}
