/**
 * Documentation reader and search engine for NeoForge 26.1 API docs.
 * Loads api_index.json + events_index.json and provides fuzzy/exact search.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

// ─── Types (shared with generate-docs) ───

export interface ApiIndexEntry {
  name: string;
  className: string;
  fullPath: string;
  desc: string;
  category: string;
  returnType: string;
  params: { name: string; type: string }[];
  modifiers: string[];
  annotations: string[];
  deprecated: boolean;
  side: 'both' | 'client' | 'server';
}

export interface EventIndexEntry {
  name: string;
  fullPath: string;
  desc: string;
  category: string;
  cancelable: boolean;
  bus: 'MOD' | 'GAME' | 'UNKNOWN';
  fields: { name: string; type: string; desc: string }[];
  superClass: string;
  deprecated: boolean;
}

export interface ConfigNode {
  title: string;
  children: (string | ConfigNode)[];
}

export interface SearchResult {
  name: string;
  fullPath: string;
  desc: string;
  category: string;
  score: number;
  type: 'class' | 'method' | 'event';
  side?: string;
}

// ─── Docs Reader ───

export class DocsReader {
  private docsDir: string;
  private apiIndex: Record<string, ApiIndexEntry[]> = {};
  private eventsIndex: EventIndexEntry[] = [];
  private config: ConfigNode | null = null;
  private allApiEntries: ApiIndexEntry[] = [];
  private loaded = false;

  // Prebuilt search indexes
  private nameIndex = new Map<string, ApiIndexEntry[]>();  // lowercased name → entries
  private classIndex = new Map<string, ApiIndexEntry[]>(); // lowercased className → entries
  private camelTokens = new Map<string, Set<string>>();    // token → fullPaths

  constructor(docsDir: string) {
    this.docsDir = docsDir;
  }

  load(): void {
    if (this.loaded) return;

    const apiPath = path.join(this.docsDir, 'api_index.json');
    const eventsPath = path.join(this.docsDir, 'events_index.json');
    const configPath = path.join(this.docsDir, 'config.json');

    if (!fs.existsSync(apiPath)) {
      throw new Error(`API index not found at ${apiPath}. Run 'npm run generate-docs' first.`);
    }

    this.apiIndex = JSON.parse(fs.readFileSync(apiPath, 'utf-8'));
    
    if (fs.existsSync(eventsPath)) {
      this.eventsIndex = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'));
    }
    if (fs.existsSync(configPath)) {
      this.config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }

    // Flatten all entries
    for (const entries of Object.values(this.apiIndex)) {
      this.allApiEntries.push(...entries);
    }

    // Build search indexes
    for (const entry of this.allApiEntries) {
      const lowerName = entry.name.toLowerCase();
      if (!this.nameIndex.has(lowerName)) this.nameIndex.set(lowerName, []);
      this.nameIndex.get(lowerName)!.push(entry);

      const lowerClass = entry.className.toLowerCase();
      if (!this.classIndex.has(lowerClass)) this.classIndex.set(lowerClass, []);
      this.classIndex.get(lowerClass)!.push(entry);

      // CamelCase tokenization
      const tokens = splitCamelCase(entry.name);
      for (const token of tokens) {
        const lt = token.toLowerCase();
        if (lt.length < 2) continue;
        if (!this.camelTokens.has(lt)) this.camelTokens.set(lt, new Set());
        this.camelTokens.get(lt)!.add(entry.fullPath + '#' + entry.name);
      }
    }

    this.loaded = true;
    console.error(`DocsReader loaded: ${this.allApiEntries.length} API entries, ${this.eventsIndex.length} events`);
  }

  // ─── Search APIs ───

  searchDocs(query: string, category?: string, limit = 20): SearchResult[] {
    this.load();
    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase().trim();
    const queryTokens = splitCamelCase(query).map(t => t.toLowerCase());

    // 1. Exact name match (highest priority)
    const exact = this.nameIndex.get(lowerQuery);
    if (exact) {
      for (const e of exact) {
        if (category && e.category !== category) continue;
        results.push({
          name: e.name,
          fullPath: e.fullPath,
          desc: e.desc,
          category: e.category,
          score: 100,
          type: e.returnType === '' ? 'class' : 'method',
          side: e.side,
        });
      }
    }

    // 2. Exact class match
    const classMatch = this.classIndex.get(lowerQuery);
    if (classMatch) {
      for (const e of classMatch) {
        if (category && e.category !== category) continue;
        if (e.name === e.className) { // The class entry itself
          results.push({
            name: e.name,
            fullPath: e.fullPath,
            desc: e.desc,
            category: e.category,
            score: 95,
            type: 'class',
            side: e.side,
          });
        }
      }
    }

    // 3. Event search
    for (const ev of this.eventsIndex) {
      if (category && ev.category !== category) continue;
      const lowerName = ev.name.toLowerCase();
      if (lowerName === lowerQuery) {
        results.push({ name: ev.name, fullPath: ev.fullPath, desc: ev.desc, category: ev.category, score: 100, type: 'event' });
      } else if (lowerName.includes(lowerQuery)) {
        results.push({ name: ev.name, fullPath: ev.fullPath, desc: ev.desc, category: ev.category, score: 80, type: 'event' });
      }
    }

    // 4. Prefix match
    for (const [name, entries] of this.nameIndex) {
      if (name.startsWith(lowerQuery) && name !== lowerQuery) {
        for (const e of entries.slice(0, 3)) {
          if (category && e.category !== category) continue;
          results.push({
            name: e.name,
            fullPath: e.fullPath,
            desc: e.desc,
            category: e.category,
            score: 70,
            type: e.returnType === '' ? 'class' : 'method',
            side: e.side,
          });
        }
      }
    }

    // 5. Substring match
    if (results.length < limit) {
      for (const e of this.allApiEntries) {
        if (category && e.category !== category) continue;
        const lowerName = e.name.toLowerCase();
        const lowerFull = e.fullPath.toLowerCase();
        
        if (lowerName.includes(lowerQuery) && lowerName !== lowerQuery && !lowerName.startsWith(lowerQuery)) {
          results.push({
            name: e.name,
            fullPath: e.fullPath,
            desc: e.desc,
            category: e.category,
            score: 50,
            type: e.returnType === '' ? 'class' : 'method',
            side: e.side,
          });
        } else if (lowerFull.includes(lowerQuery)) {
          results.push({
            name: e.name,
            fullPath: e.fullPath,
            desc: e.desc,
            category: e.category,
            score: 40,
            type: e.returnType === '' ? 'class' : 'method',
            side: e.side,
          });
        }
        
        if (results.length >= limit * 3) break;
      }
    }

    // 6. CamelCase token match
    if (results.length < limit && queryTokens.length > 1) {
      const tokenMatches = new Map<string, number>();
      for (const token of queryTokens) {
        const matches = this.camelTokens.get(token);
        if (matches) {
          for (const key of matches) {
            tokenMatches.set(key, (tokenMatches.get(key) || 0) + 1);
          }
        }
      }
      // Sort by match count
      const sorted = [...tokenMatches.entries()].sort((a, b) => b[1] - a[1]);
      for (const [key, count] of sorted.slice(0, limit)) {
        const [fullPath, name] = key.split('#');
        const entry = this.allApiEntries.find(e => e.fullPath === fullPath && e.name === name);
        if (entry && (category ? entry.category === category : true)) {
          results.push({
            name: entry.name,
            fullPath: entry.fullPath,
            desc: entry.desc,
            category: entry.category,
            score: 30 + count * 10,
            type: entry.returnType === '' ? 'class' : 'method',
            side: entry.side,
          });
        }
      }
    }

    // 7. Description fuzzy match (last resort)
    if (results.length < 5) {
      for (const e of this.allApiEntries) {
        if (category && e.category !== category) continue;
        if (e.desc.toLowerCase().includes(lowerQuery)) {
          results.push({
            name: e.name,
            fullPath: e.fullPath,
            desc: e.desc,
            category: e.category,
            score: 20,
            type: e.returnType === '' ? 'class' : 'method',
            side: e.side,
          });
        }
        if (results.length >= limit * 3) break;
      }
    }

    // Deduplicate and sort
    const seen = new Set<string>();
    return results
      .filter(r => {
        const key = r.fullPath + '#' + r.name;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  // ─── API Detail ───

  getApiDetail(fullClassName: string): string | null {
    this.load();
    // Try loading the markdown file
    for (const category of this.getCategories()) {
      const simpleName = fullClassName.split('.').pop()!;
      const mdPath = path.join(this.docsDir, category, simpleName + '.md');
      if (fs.existsSync(mdPath)) {
        const content = fs.readFileSync(mdPath, 'utf-8');
        // Truncate if too large
        if (content.length > 12000) {
          return content.substring(0, 12000) + '\n\n... (truncated, use get_document_section for specific sections)';
        }
        return content;
      }
    }
    
    // Fallback: build from index
    const entries = this.allApiEntries.filter(e => e.fullPath === fullClassName);
    if (entries.length === 0) return null;
    
    const lines: string[] = [];
    const classEntry = entries.find(e => e.name === e.className);
    if (classEntry) {
      lines.push(`# ${classEntry.name}`);
      lines.push(`**Package:** \`${classEntry.fullPath}\``);
      lines.push(`**Category:** ${classEntry.category}`);
      if (classEntry.desc) lines.push(`\n${classEntry.desc}`);
      lines.push('');
    }
    
    const methods = entries.filter(e => e.name !== e.className);
    if (methods.length > 0) {
      lines.push('## Methods\n');
      for (const m of methods) {
        lines.push(`### ${m.name}`);
        lines.push(`\`${m.returnType} ${m.name}(${m.params.map(p => `${p.type} ${p.name}`).join(', ')})\``);
        if (m.desc) lines.push(m.desc);
        lines.push('');
      }
    }
    
    return lines.join('\n');
  }

  // ─── Event Detail ───

  getEventDetail(eventName: string): EventIndexEntry | null {
    this.load();
    return this.eventsIndex.find(e => 
      e.name === eventName || 
      e.fullPath === eventName ||
      e.name.toLowerCase() === eventName.toLowerCase()
    ) || null;
  }

  searchEvents(query: string, bus?: string, limit = 20): EventIndexEntry[] {
    this.load();
    const lowerQuery = query.toLowerCase();
    return this.eventsIndex
      .filter(e => {
        if (bus && e.bus !== bus) return false;
        return e.name.toLowerCase().includes(lowerQuery) ||
               e.desc.toLowerCase().includes(lowerQuery) ||
               e.fullPath.toLowerCase().includes(lowerQuery);
      })
      .slice(0, limit);
  }

  // ─── Document access ───

  getDocument(docPath: string): string | null {
    this.load();
    const fullPath = path.join(this.docsDir, docPath);
    if (!fs.existsSync(fullPath)) return null;
    // Security: ensure path is within docs dir
    if (!path.resolve(fullPath).startsWith(path.resolve(this.docsDir))) return null;
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (content.length > 12000) {
      return content.substring(0, 12000) + '\n\n... (truncated)';
    }
    return content;
  }

  getDocumentSection(docPath: string, sectionTitle: string): string | null {
    this.load();
    const fullPath = path.join(this.docsDir, docPath);
    if (!fs.existsSync(fullPath)) return null;
    if (!path.resolve(fullPath).startsWith(path.resolve(this.docsDir))) return null;
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.split('\n');
    const lowerTitle = sectionTitle.toLowerCase();
    
    let inSection = false;
    let sectionLevel = 0;
    const result: string[] = [];
    
    for (const line of lines) {
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const title = headingMatch[2].toLowerCase().trim();
        
        if (title.includes(lowerTitle)) {
          inSection = true;
          sectionLevel = level;
          result.push(line);
          continue;
        }
        
        if (inSection && level <= sectionLevel) {
          break; // Reached next section at same or higher level
        }
      }
      
      if (inSection) {
        result.push(line);
      }
    }
    
    return result.length > 0 ? result.join('\n') : null;
  }

  // ─── Navigation ───

  listDocuments(category?: string): string[] {
    this.load();
    if (category) {
      const catDir = path.join(this.docsDir, category);
      if (!fs.existsSync(catDir)) return [];
      return fs.readdirSync(catDir).filter(f => f.endsWith('.md')).map(f => `${category}/${f}`);
    }
    // List all categories
    return this.getCategories();
  }

  getCategories(): string[] {
    this.load();
    return Object.keys(this.apiIndex);
  }

  browseCategory(category: string): { classes: string[]; methods: number; events: number } | null {
    this.load();
    const entries = this.apiIndex[category];
    if (!entries) return null;
    
    const classes = [...new Set(entries.map(e => e.className))];
    const methods = entries.filter(e => e.name !== e.className).length;
    const events = this.eventsIndex.filter(e => e.category === category).length;
    
    return { classes, methods, events };
  }

  getConfig(): ConfigNode | null {
    this.load();
    return this.config;
  }

  // ─── Registry info ───

  getRegistryInfo(registryType: string): ApiIndexEntry[] {
    this.load();
    const lowerType = registryType.toLowerCase();
    return this.allApiEntries.filter(e =>
      (e.category === 'registries' || e.fullPath.includes('registr')) &&
      (e.name.toLowerCase().includes(lowerType) || e.fullPath.toLowerCase().includes(lowerType))
    ).slice(0, 30);
  }

  getStats(): { classes: number; methods: number; events: number; categories: number } {
    this.load();
    const classCount = new Set(this.allApiEntries.map(e => e.fullPath)).size;
    return {
      classes: classCount,
      methods: this.allApiEntries.filter(e => e.name !== e.className).length,
      events: this.eventsIndex.length,
      categories: Object.keys(this.apiIndex).length,
    };
  }
}

// ─── Utilities ───

function splitCamelCase(str: string): string[] {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .split(/[_\s]+/)
    .filter(t => t.length > 0);
}
