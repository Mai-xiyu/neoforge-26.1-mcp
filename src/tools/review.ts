/**
 * Code review MCP tool - checks for common NeoForge 26.1 mistakes.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

interface ReviewIssue {
  severity: 'error' | 'warning' | 'info';
  line: number;
  message: string;
  suggestion: string;
}

export function registerReviewTools(server: McpServer): void {
  server.tool(
    'review_mod_code',
    'Review Java code for common NeoForge 26.1 modding mistakes and best practices violations.',
    {
      code: z.string().describe('Java source code to review'),
      fileName: z.string().optional().describe('Optional file name for context'),
    },
    async ({ code, fileName }) => {
      const issues = reviewCode(code, fileName);

      if (issues.length === 0) {
        return { content: [{ type: 'text', text: '✅ No issues found. The code follows NeoForge 26.1 best practices.' }] };
      }

      const grouped = {
        error: issues.filter(i => i.severity === 'error'),
        warning: issues.filter(i => i.severity === 'warning'),
        info: issues.filter(i => i.severity === 'info'),
      };

      const lines: string[] = [`# Code Review Results\n`];
      lines.push(`Found **${issues.length}** issue(s): ${grouped.error.length} errors, ${grouped.warning.length} warnings, ${grouped.info.length} info\n`);

      if (grouped.error.length > 0) {
        lines.push(`## 🔴 Errors\n`);
        for (const i of grouped.error) {
          lines.push(`- **Line ${i.line}**: ${i.message}`);
          lines.push(`  - Fix: ${i.suggestion}\n`);
        }
      }
      if (grouped.warning.length > 0) {
        lines.push(`## 🟠 Warnings\n`);
        for (const i of grouped.warning) {
          lines.push(`- **Line ${i.line}**: ${i.message}`);
          lines.push(`  - Fix: ${i.suggestion}\n`);
        }
      }
      if (grouped.info.length > 0) {
        lines.push(`## 🟡 Suggestions\n`);
        for (const i of grouped.info) {
          lines.push(`- **Line ${i.line}**: ${i.message}`);
          lines.push(`  - Suggestion: ${i.suggestion}\n`);
        }
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    },
  );
}

function reviewCode(code: string, _fileName?: string): ReviewIssue[] {
  const issues: ReviewIssue[] = [];
  const lines = code.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // ─── Registration issues ───
    if (line.includes('new Item(') && !line.includes('DeferredItem') && !line.includes('DeferredHolder') && !line.includes('register')) {
      issues.push({
        severity: 'error', line: lineNum,
        message: 'Direct Item instantiation detected. Use DeferredRegister for item registration.',
        suggestion: 'Use ITEMS.register("name", () -> new Item(props)) or ITEMS.registerSimpleItem("name")',
      });
    }

    if (line.includes('new Block(') && !line.includes('DeferredBlock') && !line.includes('DeferredHolder') && !line.includes('register')) {
      issues.push({
        severity: 'error', line: lineNum,
        message: 'Direct Block instantiation detected. Use DeferredRegister for block registration.',
        suggestion: 'Use BLOCKS.registerBlock("name", Block::new, props) or BLOCKS.registerSimpleBlock("name", props)',
      });
    }

    if (line.includes('Registry.register(') || line.includes('Registry.ITEM') || line.includes('Registry.BLOCK')) {
      if (!line.includes('DeferredRegister') && !line.includes('BuiltInRegistries')) {
        issues.push({
          severity: 'error', line: lineNum,
          message: 'Direct vanilla Registry access. NeoForge uses DeferredRegister for registration.',
          suggestion: 'Use DeferredRegister.createBlocks/createItems/create() instead of direct Registry calls',
        });
      }
    }

    // ─── Event bus mistakes ───
    if (line.includes('MinecraftForge.EVENT_BUS')) {
      issues.push({
        severity: 'error', line: lineNum,
        message: 'MinecraftForge.EVENT_BUS is legacy Forge API. NeoForge uses NeoForge.EVENT_BUS.',
        suggestion: 'Replace with NeoForge.EVENT_BUS or use @EventBusSubscriber annotation',
      });
    }

    if (line.includes('@Mod.EventBusSubscriber')) {
      issues.push({
        severity: 'error', line: lineNum,
        message: '@Mod.EventBusSubscriber is legacy Forge. NeoForge uses @EventBusSubscriber from net.neoforged.fml.common.',
        suggestion: 'Use @EventBusSubscriber(modid = MODID) from net.neoforged.fml.common.EventBusSubscriber',
      });
    }

    if (line.includes('@SubscribeEvent') && !line.includes('static')) {
      const nextLine = lines[i + 1] || '';
      if (nextLine.includes('public') && !nextLine.includes('static')) {
        issues.push({
          severity: 'warning', line: lineNum + 1,
          message: 'Non-static @SubscribeEvent method. @EventBusSubscriber requires static methods.',
          suggestion: 'Make the method static, or register the instance manually with bus.register(instance)',
        });
      }
    }

    // ─── Client/Server separation ───
    if (line.includes('Minecraft.getInstance()') || line.includes('MinecraftClient')) {
      // Check if we're in a server context
      const hasServerImport = code.includes('ServerLevel') || code.includes('ServerPlayer') || code.includes('MinecraftServer');
      if (hasServerImport) {
        issues.push({
          severity: 'error', line: lineNum,
          message: 'Client-only Minecraft.getInstance() used in what appears to be server code.',
          suggestion: 'Never call Minecraft.getInstance() from server-side code. Use DistExecutor or @OnlyIn for client-only code.',
        });
      }
    }

    // ─── Deprecated / removed APIs ───
    if (line.includes('ForgeRegistries.')) {
      issues.push({
        severity: 'error', line: lineNum,
        message: 'ForgeRegistries is legacy Forge API, removed in NeoForge.',
        suggestion: 'Use BuiltInRegistries.ITEM / BuiltInRegistries.BLOCK etc., or DeferredRegister',
      });
    }

    if (line.includes('IForge')) {
      issues.push({
        severity: 'warning', line: lineNum,
        message: 'IForge* interfaces are legacy. NeoForge extensions use different naming.',
        suggestion: 'Check NeoForge API docs for the equivalent extension interface',
      });
    }

    if (line.includes('ObfuscationReflectionHelper') || line.includes('ReflectionHelper')) {
      issues.push({
        severity: 'warning', line: lineNum,
        message: 'Reflection helpers are fragile. MC 1.26.1+ has no obfuscation.',
        suggestion: 'Use Access Transformers (AT) or direct field access where possible',
      });
    }

    // ─── Common mistakes ───
    if (line.includes('level.isClientSide') && line.includes('!') && (
      line.includes('spawnParticle') || line.includes('addParticle')
    )) {
      issues.push({
        severity: 'error', line: lineNum,
        message: 'Spawning particles on server side (!level.isClientSide). Particles are client-only.',
        suggestion: 'Use level.isClientSide (without !) to check for client-side before spawning particles',
      });
    }

    if (line.includes('.get()') && (line.includes('DeferredBlock') || line.includes('DeferredItem') || line.includes('DeferredHolder'))) {
      // Check if it's in a static initializer
      const inStaticInit = isInStaticContext(lines, i);
      if (inStaticInit) {
        issues.push({
          severity: 'error', line: lineNum,
          message: 'Calling .get() on a DeferredHolder during static initialization. Registry objects are not available yet.',
          suggestion: 'Access .get() only at runtime (in event handlers, methods), never in static field initializers',
        });
      }
    }

    if (line.includes('new ResourceLocation(') && !line.includes(',')) {
      issues.push({
        severity: 'info', line: lineNum,
        message: 'Single-arg ResourceLocation constructor is fine but consider using factory methods.',
        suggestion: 'Use ResourceLocation.fromNamespaceAndPath(namespace, path) or ResourceLocation.parse(string) for clarity',
      });
    }

    // ─── Performance ───
    if (line.includes('@SubscribeEvent') || line.includes('addListener')) {
      const nextLines = lines.slice(i + 1, i + 10).join(' ');
      if (nextLines.includes('TickEvent') || nextLines.includes('ServerTickEvent') || nextLines.includes('ClientTickEvent')) {
        if (!nextLines.includes('% ') && !nextLines.includes('counter') && !nextLines.includes('tick')) {
          issues.push({
            severity: 'warning', line: lineNum,
            message: 'Tick event handler without apparent frame throttling.',
            suggestion: 'Add a tick counter and skip frames: if (tickCounter++ % 20 == 0) { ... }',
          });
        }
      }
    }

    // ─── Network ───
    if (line.includes('SimpleChannel') || line.includes('SIMPLE_CHANNEL')) {
      issues.push({
        severity: 'error', line: lineNum,
        message: 'SimpleChannel is legacy Forge networking. NeoForge uses CustomPacketPayload.',
        suggestion: 'Implement CustomPacketPayload with StreamCodec. Register via RegisterPayloadHandlersEvent.',
      });
    }

    // ─── Config ───
    if (line.includes('ForgeConfigSpec')) {
      issues.push({
        severity: 'warning', line: lineNum,
        message: 'ForgeConfigSpec still works but NeoForge has ModConfigSpec.',
        suggestion: 'Consider using NeoForge ModConfigSpec for new code',
      });
    }
  }

  return issues;
}

function isInStaticContext(lines: string[], currentIdx: number): boolean {
  // Walk backwards to find class-level context
  for (let i = currentIdx - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (line.startsWith('public static final') || line.startsWith('private static final') || line.startsWith('static {')) {
      return true;
    }
    if (line.includes('{') && (line.includes('void ') || line.includes('public ') || line.includes('private ') || line.includes('protected '))) {
      // Inside a method
      return false;
    }
  }
  return false;
}
