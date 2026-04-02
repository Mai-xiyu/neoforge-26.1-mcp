/**
 * Event tools - search_events, get_event_detail
 */
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DocsReader } from '../docs-reader.js';

export function registerEventTools(server: McpServer, reader: DocsReader) {
  server.tool(
    'search_events',
    'Search NeoForge/Minecraft events by name or keyword. Returns event name, bus type, cancelability, and fields.',
    {
      query: z.string().describe('Event name or keyword (e.g. "player", "block break", "tick")'),
      bus: z.enum(['MOD', 'GAME']).optional().describe('Filter by event bus type'),
      limit: z.number().optional().default(20),
    },
    async ({ query, bus, limit }) => {
      const events = reader.searchEvents(query, bus, limit);
      if (events.length === 0) {
        return { content: [{ type: 'text', text: `No events found for "${query}". Try broader terms.` }] };
      }

      const lines: string[] = [`Found ${events.length} events:\n`];
      for (const ev of events) {
        const cancelBadge = ev.cancelable ? '🚫 Cancelable' : '';
        const busBadge = ev.bus === 'MOD' ? '🔧 MOD' : ev.bus === 'GAME' ? '🎮 GAME' : '❓';
        lines.push(`### 🔔 ${ev.name} [${busBadge}] ${cancelBadge}`);
        lines.push(`\`${ev.fullPath}\``);
        if (ev.desc) lines.push(ev.desc.substring(0, 150));
        if (ev.fields.length > 0) {
          lines.push('Fields: ' + ev.fields.map(f => `\`${f.name}: ${f.type}\``).join(', '));
        }
        lines.push('');
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  server.tool(
    'get_event_detail',
    'Get complete details for a specific event, including all fields, cancelability, bus, and usage example.',
    {
      eventName: z.string().describe('Event class name (e.g. "PlayerEvent", "BlockEvent.BreakEvent")'),
    },
    async ({ eventName }) => {
      const event = reader.getEventDetail(eventName);
      if (!event) {
        // Try searching
        const events = reader.searchEvents(eventName, undefined, 1);
        if (events.length > 0) {
          return formatEventDetail(events[0]);
        }
        return { content: [{ type: 'text', text: `Event "${eventName}" not found. Use search_events to find events.` }] };
      }

      return formatEventDetail(event);
    }
  );
}

function formatEventDetail(ev: { name: string; fullPath: string; desc: string; cancelable: boolean; bus: string; fields: { name: string; type: string; desc: string }[]; superClass: string }) {
  const lines: string[] = [];
  lines.push(`# ${ev.name}\n`);
  lines.push(`**Full Path:** \`${ev.fullPath}\``);
  lines.push(`**Extends:** \`${ev.superClass}\``);
  lines.push(`**Event Bus:** ${ev.bus === 'MOD' ? '🔧 MOD Bus (subscribe during mod init)' : '🎮 GAME Bus (NeoForge.EVENT_BUS)'}`);
  lines.push(`**Cancelable:** ${ev.cancelable ? '✅ Yes — call event.setCanceled(true)' : '❌ No'}`);
  lines.push('');

  if (ev.desc) {
    lines.push('## Description\n');
    lines.push(ev.desc);
    lines.push('');
  }

  if (ev.fields.length > 0) {
    lines.push('## Fields\n');
    lines.push('| Field | Type | Description |');
    lines.push('|-------|------|-------------|');
    for (const f of ev.fields) {
      lines.push(`| \`${f.name}\` | \`${f.type}\` | ${f.desc} |`);
    }
    lines.push('');
  }

  lines.push('## Usage Example\n');
  lines.push('```java');
  if (ev.bus === 'MOD') {
    lines.push(`@EventBusSubscriber(modid = "yourmod", bus = EventBusSubscriber.Bus.MOD)`);
  } else {
    lines.push(`@EventBusSubscriber(modid = "yourmod")`);
  }
  lines.push(`public class ${ev.name.replace(/Event$/, '')}Handler {`);
  lines.push(`    @SubscribeEvent`);
  lines.push(`    public static void on${ev.name.replace(/Event$/, '')}(${ev.name} event) {`);
  if (ev.fields.length > 0) {
    const firstField = ev.fields[0];
    lines.push(`        var ${firstField.name} = event.get${firstField.name.charAt(0).toUpperCase() + firstField.name.slice(1)}();`);
  }
  lines.push(`        // Your logic here`);
  if (ev.cancelable) {
    lines.push(`        // event.setCanceled(true); // Cancel if needed`);
  }
  lines.push(`    }`);
  lines.push(`}`);
  lines.push('```');

  return { content: [{ type: 'text' as const, text: lines.join('\n') }] };
}
