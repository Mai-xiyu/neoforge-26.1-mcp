/**
 * Code generation MCP tools for NeoForge 26.1 modding.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
  generateModProjectTemplate,
  generateBlockTemplate,
  generateItemTemplate,
  generateEntityTemplate,
  generateEventHandlerTemplate,
  generateNetworkPacketTemplate,
  generateDataProviderTemplate,
  type ModProjectConfig,
  type BlockConfig,
  type ItemConfig,
  type EntityConfig,
  type EventHandlerConfig,
  type NetworkPacketConfig,
  type DataProviderConfig,
} from '../templates.js';

export function registerCodegenTools(server: McpServer): void {
  // ─── generate_mod_project ───
  server.tool(
    'generate_mod_project',
    'Generate NeoForge 26.1 mod project scaffolding with build.gradle, main class, mods.toml, etc.',
    {
      modId: z.string().regex(/^[a-z][a-z0-9_]*$/).describe('Mod ID (lowercase, underscores allowed)'),
      modName: z.string().describe('Display name of the mod'),
      packageName: z.string().describe('Java package name (e.g., com.example.mymod)'),
      mcVersion: z.string().default('1.26.1').describe('Minecraft version'),
      neoForgeVersion: z.string().default('26.1.0.17-beta').describe('NeoForge version'),
    },
    async ({ modId, modName, packageName, mcVersion, neoForgeVersion }) => {
      const config: ModProjectConfig = { modId, modName, packageName, mcVersion, neoForgeVersion };
      const files = generateModProjectTemplate(config);

      const lines: string[] = ['# Generated mod project files\n'];
      for (const [path, content] of Object.entries(files)) {
        lines.push(`## \`${path}\`\n\`\`\`\n${content}\`\`\`\n`);
      }

      lines.push(`\n## Next steps:\n`);
      lines.push(`1. Create the files above in your project directory`);
      lines.push(`2. Run \`gradlew build\` to verify compilation`);
      lines.push(`3. Register blocks/items using DeferredRegister patterns`);
      lines.push(`4. Run \`gradlew runData\` to generate data (recipes, loot tables, etc.)`);

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    },
  );

  // ─── generate_block ───
  server.tool(
    'generate_block',
    'Generate Java code for a NeoForge block (optionally with block entity or block states).',
    {
      blockName: z.string().describe('Block name in snake_case (e.g., my_machine)'),
      hasBlockEntity: z.boolean().default(false).describe('Whether the block has a BlockEntity (tile entity)'),
      hasBlockStates: z.boolean().default(false).describe('Whether the block has custom block states'),
      material: z.string().default('stone').describe('Block material (stone, wood, metal, etc.)'),
      hardness: z.number().default(3.0).describe('Block hardness (2.0 = wood, 3.0 = stone, 5.0 = iron)'),
      resistance: z.number().default(3.0).describe('Explosion resistance'),
    },
    async (args) => {
      const config: BlockConfig = args;
      const code = generateBlockTemplate(config);
      return {
        content: [{ type: 'text', text: `# ${pascalCase(args.blockName)}Block.java\n\n\`\`\`java\n${code}\n\`\`\`` }],
      };
    },
  );

  // ─── generate_item ───
  server.tool(
    'generate_item',
    'Generate Java code for a NeoForge item (optionally food).',
    {
      itemName: z.string().describe('Item name in snake_case'),
      isFood: z.boolean().default(false).describe('Whether this is a food item'),
      maxStackSize: z.number().default(64).describe('Maximum stack size'),
      nutrition: z.number().default(4).describe('Food nutrition value (only for food items)'),
      saturation: z.number().default(0.3).describe('Food saturation modifier (only for food items)'),
    },
    async (args) => {
      const config: ItemConfig = args;
      const code = generateItemTemplate(config);
      return {
        content: [{ type: 'text', text: `# ${pascalCase(args.itemName)}Item.java\n\n\`\`\`java\n${code}\n\`\`\`` }],
      };
    },
  );

  // ─── generate_entity ───
  server.tool(
    'generate_entity',
    'Generate Java code for a NeoForge entity (living/mob, projectile, or misc).',
    {
      entityName: z.string().describe('Entity name in snake_case'),
      entityType: z.enum(['living', 'projectile', 'misc']).default('living').describe('Entity type'),
      health: z.number().default(20).describe('Max health (for living entities)'),
      width: z.number().default(0.6).describe('Entity hitbox width'),
      height: z.number().default(1.8).describe('Entity hitbox height'),
    },
    async (args) => {
      const config: EntityConfig = args;
      const code = generateEntityTemplate(config);
      return {
        content: [{ type: 'text', text: `# ${pascalCase(args.entityName)}Entity.java\n\n\`\`\`java\n${code}\n\`\`\`` }],
      };
    },
  );

  // ─── generate_event_handler ───
  server.tool(
    'generate_event_handler',
    'Generate Java code for a NeoForge event handler class (MOD or GAME bus).',
    {
      eventClass: z.string().describe('Full event class name to handle'),
      bus: z.enum(['MOD', 'GAME']).default('GAME').describe('Event bus: MOD (lifecycle events) or GAME (gameplay events)'),
      modId: z.string().describe('Your mod ID'),
    },
    async (args) => {
      const config: EventHandlerConfig = args;
      const code = generateEventHandlerTemplate(config);
      return {
        content: [{ type: 'text', text: `# EventHandler.java\n\n\`\`\`java\n${code}\n\`\`\`` }],
      };
    },
  );

  // ─── generate_network_packet ───
  server.tool(
    'generate_network_packet',
    'Generate Java code for a CustomPacketPayload (network packet) in NeoForge 26.1.',
    {
      packetName: z.string().describe('Packet name in snake_case'),
      fields: z.array(z.object({
        name: z.string().describe('Field name'),
        type: z.string().describe('Java type (int, String, boolean, float, double, BlockPos, ResourceLocation, ItemStack)'),
      })).describe('Packet fields'),
      direction: z.enum(['toServer', 'toClient', 'bidirectional']).default('toServer').describe('Packet direction'),
    },
    async (args) => {
      const config: NetworkPacketConfig = args;
      const code = generateNetworkPacketTemplate(config);
      return {
        content: [{ type: 'text', text: `# ${pascalCase(args.packetName)}Payload.java\n\n\`\`\`java\n${code}\n\`\`\`` }],
      };
    },
  );

  // ─── generate_data_provider ───
  server.tool(
    'generate_data_provider',
    'Generate Java code for a Data Generator provider (recipe, loot, tag, model, language, blockstate).',
    {
      providerType: z.enum(['recipe', 'loot', 'tag', 'model', 'language', 'blockstate']).describe('Type of data provider'),
      modId: z.string().describe('Your mod ID'),
    },
    async (args) => {
      const config: DataProviderConfig = args;
      const code = generateDataProviderTemplate(config);
      return {
        content: [{ type: 'text', text: `# ${pascalCase(args.providerType)}Provider.java\n\n\`\`\`java\n${code}\n\`\`\`` }],
      };
    },
  );
}

function pascalCase(str: string): string {
  return str.split(/[_\-\s]+/).map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join('');
}
