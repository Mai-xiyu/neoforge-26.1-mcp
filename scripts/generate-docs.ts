/**
 * NeoForge 26.1 Documentation Generator
 * 
 * Parses Java source files from Gradle cache (MC + NeoForge merged sources)
 * and generates structured API documentation for the MCP server.
 * 
 * Sources: ~/.gradle/caches/neoformruntime/intermediate_results/sourcesWithNeoForge_*_output.zip
 * Output: docs/ directory with api_index.json, events_index.json, config.json, and markdown files
 */

import AdmZip from 'adm-zip';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(PROJECT_ROOT, 'docs');

// ─── Source locations ───

const GRADLE_CACHE = path.join(process.env.USERPROFILE || process.env.HOME || '', '.gradle', 'caches');
const NEOFORM_DIR = path.join(GRADLE_CACHE, 'neoformruntime', 'intermediate_results');
const NEOFORGE_SOURCES_DIR = path.join(GRADLE_CACHE, 'modules-2', 'files-2.1', 'net.neoforged', 'neoforge');

// ─── Types ───

interface ParsedClass {
  packageName: string;
  fullName: string;        // package.ClassName
  simpleName: string;
  kind: 'class' | 'interface' | 'enum' | 'record' | 'annotation';
  modifiers: string[];     // public, abstract, final, etc.
  javadoc: string;
  superClass: string | null;
  interfaces: string[];
  typeParams: string;      // e.g. "<T extends Block>"
  methods: ParsedMethod[];
  fields: ParsedField[];
  innerClasses: ParsedClass[];
  annotations: string[];
  filePath: string;        // original path in ZIP
  sourceSnippet: string;   // class declaration line
}

interface ParsedMethod {
  name: string;
  returnType: string;
  parameters: ParsedParam[];
  modifiers: string[];
  javadoc: string;
  annotations: string[];
  typeParams: string;
  isDeprecated: boolean;
  signature: string;       // full method signature
}

interface ParsedParam {
  name: string;
  type: string;
  annotations: string[];
}

interface ParsedField {
  name: string;
  type: string;
  modifiers: string[];
  javadoc: string;
  annotations: string[];
  initialValue: string | null;
}

// API index entry (compact, for search)
interface ApiIndexEntry {
  name: string;
  className: string;
  fullPath: string;        // full.package.ClassName
  desc: string;            // from javadoc first line
  category: string;        // mapped category folder
  returnType: string;
  params: { name: string; type: string }[];
  modifiers: string[];
  annotations: string[];
  deprecated: boolean;
  side: 'both' | 'client' | 'server';
}

// Event index entry
interface EventIndexEntry {
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

// ─── Package → Category mapping ───

const CATEGORY_MAP: [RegExp, string][] = [
  // NeoForge-specific
  [/^net\.neoforged\.neoforge\.registries/, 'registries'],
  [/^net\.neoforged\.neoforge\.event/, 'events'],
  [/^net\.neoforged\.neoforge\.network/, 'network'],
  [/^net\.neoforged\.neoforge\.attachment/, 'attachments'],
  [/^net\.neoforged\.neoforge\.capabilities/, 'capabilities'],
  [/^net\.neoforged\.neoforge\.data/, 'datagen'],
  [/^net\.neoforged\.neoforge\.client/, 'client'],
  [/^net\.neoforged\.neoforge\.common\.conditions/, 'conditions'],
  [/^net\.neoforged\.neoforge\.common/, 'common'],
  [/^net\.neoforged\.neoforge\.energy/, 'energy'],
  [/^net\.neoforged\.neoforge\.fluids/, 'fluids'],
  [/^net\.neoforged\.neoforge\.entity/, 'entities'],
  [/^net\.neoforged\.neoforge\.items/, 'items'],
  [/^net\.neoforged\.neoforge\.server/, 'server'],
  [/^net\.neoforged\.neoforge\.gametest/, 'gametest'],
  [/^net\.neoforged\.neoforge\.resource/, 'resources'],
  [/^net\.neoforged\.neoforge/, 'neoforge-core'],
  [/^net\.neoforged\.bus/, 'event-bus'],
  // Minecraft - specific subsystems
  [/^net\.minecraft\.world\.level\.block\.entity/, 'block-entities'],
  [/^net\.minecraft\.world\.level\.block/, 'blocks'],
  [/^net\.minecraft\.world\.item\.crafting/, 'recipes'],
  [/^net\.minecraft\.world\.item\.enchantment/, 'enchantments'],
  [/^net\.minecraft\.world\.item\.component/, 'data-components'],
  [/^net\.minecraft\.world\.item/, 'items'],
  [/^net\.minecraft\.world\.entity\.ai/, 'entity-ai'],
  [/^net\.minecraft\.world\.entity\.player/, 'player'],
  [/^net\.minecraft\.world\.entity/, 'entities'],
  [/^net\.minecraft\.world\.inventory/, 'menus'],
  [/^net\.minecraft\.world\.level\.storage\.loot/, 'loot'],
  [/^net\.minecraft\.world\.level\.levelgen/, 'worldgen'],
  [/^net\.minecraft\.world\.level\.chunk/, 'chunks'],
  [/^net\.minecraft\.world\.level/, 'world'],
  [/^net\.minecraft\.world\.effect/, 'effects'],
  [/^net\.minecraft\.world\.food/, 'food'],
  [/^net\.minecraft\.world\.scores/, 'scoreboards'],
  [/^net\.minecraft\.world/, 'world'],
  [/^net\.minecraft\.client\.renderer/, 'rendering'],
  [/^net\.minecraft\.client\.gui\.screens\.inventory/, 'gui-screens'],
  [/^net\.minecraft\.client\.gui/, 'gui'],
  [/^net\.minecraft\.client\.model/, 'models'],
  [/^net\.minecraft\.client\.resources/, 'client-resources'],
  [/^net\.minecraft\.client\.multiplayer/, 'client-network'],
  [/^net\.minecraft\.client/, 'client'],
  [/^net\.minecraft\.server\.level/, 'server-level'],
  [/^net\.minecraft\.server\.network/, 'server-network'],
  [/^net\.minecraft\.server\.packs/, 'datapacks'],
  [/^net\.minecraft\.server/, 'server'],
  [/^net\.minecraft\.data/, 'datagen'],
  [/^net\.minecraft\.commands/, 'commands'],
  [/^net\.minecraft\.network/, 'network'],
  [/^net\.minecraft\.nbt/, 'nbt'],
  [/^net\.minecraft\.tags/, 'tags'],
  [/^net\.minecraft\.core\.registries/, 'registries'],
  [/^net\.minecraft\.core\.component/, 'data-components'],
  [/^net\.minecraft\.core/, 'core'],
  [/^net\.minecraft\.resources/, 'resources'],
  [/^net\.minecraft\.gametest/, 'gametest'],
  [/^net\.minecraft\.advancements/, 'advancements'],
  [/^net\.minecraft\.recipebook/, 'recipes'],
  [/^net\.minecraft\.sounds/, 'sounds'],
  [/^net\.minecraft\.stats/, 'stats'],
  [/^net\.minecraft\.util/, 'util'],
  [/^net\.minecraft/, 'minecraft-core'],
  // Mojang libraries
  [/^com\.mojang\.serialization/, 'codec'],
  [/^com\.mojang\.brigadier/, 'commands'],
  [/^com\.mojang\.math/, 'math'],
  [/^com\.mojang/, 'mojang-lib'],
];

function getCategory(packageName: string): string {
  for (const [pattern, category] of CATEGORY_MAP) {
    if (pattern.test(packageName)) return category;
  }
  return 'misc';
}

// ─── Java Source Parser (regex-based, handles decompiled code well) ───

function extractJavadoc(source: string, pos: number): string {
  // Look backwards from pos for a /** ... */ block
  const before = source.substring(0, pos);
  const match = before.match(/\/\*\*([\s\S]*?)\*\/\s*(?:@\w+[^\n]*\n\s*)*$/);
  if (!match) return '';
  return match[1]
    .split('\n')
    .map(line => line.replace(/^\s*\*\s?/, '').trim())
    .filter(line => line.length > 0)
    .join('\n')
    .trim();
}

function extractFirstLine(javadoc: string): string {
  if (!javadoc) return '';
  // Get first sentence (up to first period followed by space/newline, or first newline)
  const match = javadoc.match(/^(.*?(?:\.\s|\.\n|$))/s);
  return match ? match[1].replace(/\{@\w+\s+([^}]+)\}/g, '$1').trim() : javadoc.substring(0, 120);
}

function parseAnnotations(source: string, pos: number): string[] {
  const before = source.substring(Math.max(0, pos - 500), pos);
  const lines = before.split('\n').reverse();
  const annotations: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('@')) {
      const annMatch = trimmed.match(/@(\w+(?:\([^)]*\))?)/);
      if (annMatch) annotations.push(annMatch[1]);
    } else if (trimmed === '' || trimmed.endsWith('*/')) {
      continue;
    } else {
      break;
    }
  }
  return annotations;
}

function determineSide(filePath: string, annotations: string[]): 'both' | 'client' | 'server' {
  // Check @OnlyIn annotation
  for (const ann of annotations) {
    if (ann.includes('OnlyIn') && ann.includes('CLIENT')) return 'client';
    if (ann.includes('OnlyIn') && ann.includes('SERVER')) return 'server';
  }
  // Check package path
  if (filePath.includes('/client/') || filePath.includes('.client.')) return 'client';
  if (filePath.includes('/server/') && !filePath.includes('/server/level/')) return 'server';
  return 'both';
}

function parseParameters(paramStr: string): ParsedParam[] {
  if (!paramStr.trim()) return [];
  const params: ParsedParam[] = [];
  let depth = 0;
  let current = '';
  
  for (const char of paramStr) {
    if (char === '<' || char === '(') depth++;
    else if (char === '>' || char === ')') depth--;
    else if (char === ',' && depth === 0) {
      const p = parseOneParam(current.trim());
      if (p) params.push(p);
      current = '';
      continue;
    }
    current += char;
  }
  if (current.trim()) {
    const p = parseOneParam(current.trim());
    if (p) params.push(p);
  }
  return params;
}

function parseOneParam(paramStr: string): ParsedParam | null {
  // Remove annotations from param
  const cleaned = paramStr.replace(/@\w+(?:\([^)]*\))?\s*/g, '').trim();
  if (!cleaned) return null;
  
  // Handle varargs
  const varargs = cleaned.includes('...');
  const normalized = cleaned.replace('...', '[]');
  
  // Split into type and name - find the last word as name
  const parts = normalized.split(/\s+/);
  if (parts.length < 2) return null;
  
  const name = parts[parts.length - 1];
  const type = parts.slice(0, -1).join(' ') + (varargs ? '...' : '');
  
  return {
    name,
    type: type.replace('final ', ''),
    annotations: (paramStr.match(/@(\w+)/g) || []).map(a => a.substring(1)),
  };
}

function parseJavaFile(source: string, filePath: string): ParsedClass | null {
  // Extract package
  const pkgMatch = source.match(/^\s*package\s+([\w.]+)\s*;/m);
  if (!pkgMatch) return null;
  const packageName = pkgMatch[1];

  // Find the main class/interface/enum/record declaration
  const classRegex = /^((?:public|protected|private|abstract|final|static|sealed|non-sealed)\s+)*(class|interface|enum|record|@interface)\s+(\w+)(?:<([^{]*)>)?\s*(?:extends\s+([\w.<>,\s?]+?))?\s*(?:implements\s+([\w.<>,\s?]+?))?\s*(?:permits\s+([\w.<>,\s?]+?))?\s*\{/m;
  const classMatch = source.match(classRegex);
  if (!classMatch) return null;

  const modifierStr = (classMatch[1] || '').trim();
  const modifiers = modifierStr ? modifierStr.split(/\s+/) : [];
  const kind = classMatch[2] as ParsedClass['kind'];
  const simpleName = classMatch[3];
  const typeParams = classMatch[4] ? `<${classMatch[4].trim()}>` : '';
  const superClass = classMatch[5]?.trim() || null;
  const interfaces = classMatch[6] ? classMatch[6].split(',').map(s => s.trim()) : [];
  const fullName = `${packageName}.${simpleName}`;
  
  const classPos = source.indexOf(classMatch[0]);
  const javadoc = extractJavadoc(source, classPos);
  const annotations = parseAnnotations(source, classPos);

  // Parse methods (public/protected only)
  const methods = parseMethodsFromClass(source, classPos, fullName);
  
  // Parse fields
  const fields = parseFieldsFromClass(source, classPos);

  // Parse inner classes (non-recursive, shallow)
  const innerClasses = parseInnerClasses(source, classPos, packageName, simpleName, filePath);

  return {
    packageName,
    fullName,
    simpleName,
    kind,
    modifiers,
    javadoc,
    superClass,
    interfaces,
    typeParams,
    methods,
    fields,
    innerClasses,
    annotations,
    filePath,
    sourceSnippet: classMatch[0].trim(),
  };
}

function parseMethodsFromClass(source: string, classPos: number, _className: string): ParsedMethod[] {
  const methods: ParsedMethod[] = [];
  
  // Find the class body
  let braceDepth = 0;
  let classBodyStart = source.indexOf('{', classPos);
  if (classBodyStart === -1) return methods;
  
  // Method regex - matches public/protected methods
  const methodRegex = /(?:\/\*\*[\s\S]*?\*\/\s*)?(?:@\w+(?:\([^)]*\))?\s*)*(?:(?:public|protected)\s+)?(?:(?:static|final|default|abstract|synchronized|native)\s+)*(?:<[^>]+>\s+)?([\w.<>,\s?[\]]+?)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+[\w.,\s]+)?\s*[{;]/g;
  
  const body = source.substring(classBodyStart);
  let match;
  
  while ((match = methodRegex.exec(body)) !== null) {
    const fullMatch = match[0];
    const returnType = match[1].trim();
    const name = match[2];
    const paramStr = match[3];
    
    // Skip constructors (return type = class name), or where returnType is a modifier
    if (returnType === 'class' || returnType === 'interface' || returnType === 'enum' || returnType === 'new') continue;
    // Skip if name is a keyword
    if (['if', 'for', 'while', 'switch', 'catch', 'return', 'throw', 'new', 'class'].includes(name)) continue;
    
    const absPos = classBodyStart + match.index;
    const javadoc = extractJavadoc(source, absPos);
    const annotations = parseAnnotations(source, absPos);
    const parameters = parseParameters(paramStr);
    
    // Extract modifiers from fullMatch
    const modMatch = fullMatch.match(/^(?:\/\*\*[\s\S]*?\*\/\s*)?(?:@\w+(?:\([^)]*\))?\s*)*((?:(?:public|protected|private|static|final|default|abstract|synchronized|native)\s+)*)/);
    const mods = modMatch ? modMatch[1].trim().split(/\s+/).filter(Boolean) : [];
    
    const typeParamMatch = fullMatch.match(/<([^>]+)>\s+[\w.<>,\s?[\]]+?\s+\w+\s*\(/);
    const tp = typeParamMatch ? `<${typeParamMatch[1]}>` : '';
    
    const isDeprecated = annotations.some(a => a.startsWith('Deprecated'));
    
    methods.push({
      name,
      returnType,
      parameters,
      modifiers: mods,
      javadoc,
      annotations,
      typeParams: tp,
      isDeprecated,
      signature: `${mods.join(' ')}${mods.length ? ' ' : ''}${tp ? tp + ' ' : ''}${returnType} ${name}(${parameters.map(p => `${p.type} ${p.name}`).join(', ')})`,
    });
  }
  
  return methods;
}

function parseFieldsFromClass(source: string, classPos: number): ParsedField[] {
  const fields: ParsedField[] = [];
  
  let classBodyStart = source.indexOf('{', classPos);
  if (classBodyStart === -1) return fields;
  
  // Only parse public/protected static final fields (constants, registries)
  const fieldRegex = /(?:\/\*\*[\s\S]*?\*\/\s*)?(?:@\w+(?:\([^)]*\))?\s*)*(?:public|protected)\s+(?:static\s+)?(?:final\s+)?([\w.<>,\s?[\]]+?)\s+(\w+)\s*(?:=\s*([^;]+))?\s*;/g;
  
  const body = source.substring(classBodyStart, classBodyStart + 5000); // Only scan first 5000 chars for fields
  let match;
  
  while ((match = fieldRegex.exec(body)) !== null) {
    const absPos = classBodyStart + match.index;
    const javadoc = extractJavadoc(source, absPos);
    const annotations = parseAnnotations(source, absPos);
    const modMatch = match[0].match(/((?:(?:public|protected|private|static|final|transient|volatile)\s+)*)/);
    const mods = modMatch ? modMatch[1].trim().split(/\s+/).filter(Boolean) : [];
    
    fields.push({
      name: match[2],
      type: match[1].trim(),
      modifiers: mods,
      javadoc,
      annotations,
      initialValue: match[3]?.trim() || null,
    });
  }
  
  return fields;
}

function parseInnerClasses(source: string, classPos: number, packageName: string, outerName: string, filePath: string): ParsedClass[] {
  const results: ParsedClass[] = [];
  
  // Find inner class declarations
  const innerRegex = /(?:\/\*\*[\s\S]*?\*\/\s*)?(?:@\w+(?:\([^)]*\))?\s*)*(?:public|protected)\s+(?:static\s+)?(?:abstract\s+)?(?:final\s+)?(?:class|interface|enum|record)\s+(\w+)/g;
  
  let classBodyStart = source.indexOf('{', classPos) + 1;
  const body = source.substring(classBodyStart);
  
  let match;
  let depth = 1;
  let pos = 0;
  
  // Track brace depth to only find top-level inner classes
  while (pos < body.length && depth > 0) {
    if (body[pos] === '{') depth++;
    else if (body[pos] === '}') depth--;
    pos++;
  }
  
  const classBody = body.substring(0, pos);
  
  while ((match = innerRegex.exec(classBody)) !== null) {
    const innerName = match[1];
    if (innerName === outerName) continue; // skip self
    
    const absPos = classBodyStart + match.index;
    const javadoc = extractJavadoc(source, absPos);
    const annotations = parseAnnotations(source, absPos);
    
    results.push({
      packageName,
      fullName: `${packageName}.${outerName}.${innerName}`,
      simpleName: innerName,
      kind: match[0].includes('interface') ? 'interface' : match[0].includes('enum') ? 'enum' : match[0].includes('record') ? 'record' : 'class',
      modifiers: [],
      javadoc,
      superClass: null,
      interfaces: [],
      typeParams: '',
      methods: [],
      fields: [],
      innerClasses: [],
      annotations,
      filePath,
      sourceSnippet: match[0].trim(),
    });
  }
  
  return results;
}

// ─── Event detection ───

function isEventClass(parsed: ParsedClass): boolean {
  if (!parsed.superClass) return false;
  const eventSuperclasses = ['Event', 'ICancellableEvent', 'PlayerEvent', 'LivingEvent', 'EntityEvent', 'BlockEvent', 'ItemEvent', 'ServerChatEvent', 'TickEvent'];
  return eventSuperclasses.some(s => parsed.superClass!.includes(s)) ||
    parsed.fullName.endsWith('Event') ||
    parsed.interfaces.some(i => i.includes('ICancellableEvent'));
}

function determineEventBus(parsed: ParsedClass): 'MOD' | 'GAME' | 'UNKNOWN' {
  const combined = parsed.javadoc + ' ' + parsed.annotations.join(' ');
  if (combined.includes('MOD') || combined.includes('modEventBus') || 
      parsed.fullName.includes('.fml.') || parsed.fullName.includes('RegisterEvent') ||
      parsed.fullName.includes('FMLCommonSetupEvent') || parsed.fullName.includes('FMLClientSetupEvent')) {
    return 'MOD';
  }
  if (combined.includes('NeoForge.EVENT_BUS') || combined.includes('GAME') || combined.includes('MinecraftForge.EVENT_BUS')) {
    return 'GAME';
  }
  // Most NeoForge events are on GAME bus by default
  if (parsed.packageName.startsWith('net.neoforged.neoforge.event')) {
    return 'GAME';
  }
  return 'UNKNOWN';
}

// ─── Source extraction ───

function findSourceArchive(): string {
  // 1. Try sourcesWithNeoForge (MC + NF merged)
  if (fs.existsSync(NEOFORM_DIR)) {
    const files = fs.readdirSync(NEOFORM_DIR);
    const merged = files.find(f => f.startsWith('sourcesWithNeoForge_') && f.endsWith('_output.zip'));
    if (merged) {
      console.log(`Found merged MC+NF source: ${merged}`);
      return path.join(NEOFORM_DIR, merged);
    }
  }

  // 2. Try transformSources (larger, with Parchment mappings)
  if (fs.existsSync(NEOFORM_DIR)) {
    const files = fs.readdirSync(NEOFORM_DIR);
    const transformed = files
      .filter(f => f.startsWith('transformSources_') && f.endsWith('_output.zip'))
      .sort((a, b) => {
        const statA = fs.statSync(path.join(NEOFORM_DIR, a));
        const statB = fs.statSync(path.join(NEOFORM_DIR, b));
        return statB.size - statA.size; // Largest first
      })[0];
    if (transformed) {
      console.log(`Found transformed source: ${transformed}`);
      return path.join(NEOFORM_DIR, transformed);
    }
  }

  throw new Error('No source archive found in Gradle cache. Run `./gradlew genSources` in your mod project first.');
}

function findNeoForgeSourcesJar(): string | null {
  if (!fs.existsSync(NEOFORGE_SOURCES_DIR)) return null;
  
  const versions = fs.readdirSync(NEOFORGE_SOURCES_DIR)
    .filter(v => v.startsWith('26.'))
    .sort()
    .reverse();
  
  for (const version of versions) {
    const vDir = path.join(NEOFORGE_SOURCES_DIR, version);
    const hashDirs = fs.readdirSync(vDir);
    for (const h of hashDirs) {
      const jarPath = path.join(vDir, h, `neoforge-${version}-sources.jar`);
      if (fs.existsSync(jarPath)) {
        console.log(`Found NeoForge sources JAR: ${version}`);
        return jarPath;
      }
    }
  }
  return null;
}

// ─── Markdown generation ───

function generateClassMarkdown(parsed: ParsedClass): string {
  const lines: string[] = [];
  
  lines.push(`# ${parsed.simpleName}`);
  lines.push('');
  lines.push(`**Package:** \`${parsed.packageName}\``);
  lines.push(`**Type:** ${parsed.kind}${parsed.typeParams}`);
  if (parsed.superClass) lines.push(`**Extends:** \`${parsed.superClass}\``);
  if (parsed.interfaces.length) lines.push(`**Implements:** ${parsed.interfaces.map(i => `\`${i}\``).join(', ')}`);
  
  const side = determineSide(parsed.filePath, parsed.annotations);
  if (side !== 'both') lines.push(`**Side:** ${side === 'client' ? '🖥️ Client' : '🖧 Server'}`);
  
  if (parsed.annotations.length) {
    lines.push(`**Annotations:** ${parsed.annotations.map(a => `\`@${a}\``).join(', ')}`);
  }
  lines.push('');

  if (parsed.javadoc) {
    lines.push('## Description');
    lines.push('');
    // Clean up javadoc references
    const cleanDoc = parsed.javadoc
      .replace(/\{@link\s+([^}]+)\}/g, '`$1`')
      .replace(/\{@linkplain\s+([^}]+)\}/g, '$1')
      .replace(/\{@code\s+([^}]+)\}/g, '`$1`')
      .replace(/<pre>\{@code/g, '```java')
      .replace(/\}<\/pre>/g, '```')
      .replace(/<p>/g, '\n\n')
      .replace(/<\/?[a-z]+[^>]*>/g, ''); // Strip remaining HTML
    lines.push(cleanDoc);
    lines.push('');
  }

  // Fields
  const publicFields = parsed.fields.filter(f => f.modifiers.includes('public') || f.modifiers.includes('protected'));
  if (publicFields.length > 0) {
    lines.push('## Fields');
    lines.push('');
    lines.push('| Name | Type | Description |');
    lines.push('|------|------|-------------|');
    for (const f of publicFields) {
      const desc = extractFirstLine(f.javadoc).replace(/\|/g, '\\|');
      lines.push(`| \`${f.name}\` | \`${f.type}\` | ${desc} |`);
    }
    lines.push('');
  }

  // Methods
  const publicMethods = parsed.methods.filter(m => 
    !m.modifiers.includes('private') && !m.name.startsWith('lambda$') && !m.name.startsWith('access$')
  );
  
  if (publicMethods.length > 0) {
    lines.push('## Methods');
    lines.push('');
    
    for (const m of publicMethods) {
      const deprecatedBadge = m.isDeprecated ? ' ⚠️ *Deprecated*' : '';
      lines.push(`### ${m.name}${deprecatedBadge}`);
      lines.push('');
      lines.push('```java');
      lines.push(m.signature);
      lines.push('```');
      lines.push('');
      
      if (m.parameters.length > 0) {
        lines.push('**Parameters:**');
        lines.push('');
        for (const p of m.parameters) {
          lines.push(`- \`${p.name}\` (\`${p.type}\`)`);
        }
        lines.push('');
      }
      
      if (m.returnType !== 'void') {
        lines.push(`**Returns:** \`${m.returnType}\``);
        lines.push('');
      }
      
      if (m.javadoc) {
        const cleanDoc = m.javadoc
          .replace(/\{@link\s+([^}]+)\}/g, '`$1`')
          .replace(/\{@linkplain\s+([^}]+)\}/g, '$1')
          .replace(/\{@code\s+([^}]+)\}/g, '`$1`')
          .replace(/@param\s+(\w+)\s+/g, '**$1**: ')
          .replace(/@return\s+/g, '**Returns:** ')
          .replace(/@throws\s+(\w+)\s+/g, '**Throws** `$1`: ')
          .replace(/@see\s+/g, '**See:** ')
          .replace(/@since\s+/g, '**Since:** ')
          .replace(/<p>/g, '\n\n')
          .replace(/<\/?[a-z]+[^>]*>/g, '');
        lines.push(cleanDoc);
        lines.push('');
      }
    }
  }

  // Inner classes
  if (parsed.innerClasses.length > 0) {
    lines.push('## Inner Classes');
    lines.push('');
    lines.push('| Name | Type | Description |');
    lines.push('|------|------|-------------|');
    for (const ic of parsed.innerClasses) {
      const desc = extractFirstLine(ic.javadoc).replace(/\|/g, '\\|');
      lines.push(`| \`${ic.simpleName}\` | ${ic.kind} | ${desc} |`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function generateEventMarkdown(parsed: ParsedClass, event: EventIndexEntry): string {
  const lines: string[] = [];
  
  lines.push(`# ${parsed.simpleName}`);
  lines.push('');
  lines.push(`**Package:** \`${parsed.packageName}\``);
  lines.push(`**Bus:** ${event.bus === 'MOD' ? '🔧 MOD Event Bus' : event.bus === 'GAME' ? '🎮 GAME Event Bus (NeoForge.EVENT_BUS)' : '❓ Unknown'}`);
  lines.push(`**Cancelable:** ${event.cancelable ? '✅ Yes' : '❌ No'}`);
  if (parsed.superClass) lines.push(`**Extends:** \`${parsed.superClass}\``);
  if (parsed.annotations.length) lines.push(`**Annotations:** ${parsed.annotations.map(a => `\`@${a}\``).join(', ')}`);
  lines.push('');

  if (parsed.javadoc) {
    lines.push('## Description');
    lines.push('');
    const cleanDoc = parsed.javadoc
      .replace(/\{@link\s+([^}]+)\}/g, '`$1`')
      .replace(/\{@linkplain\s+([^}]+)\}/g, '$1')
      .replace(/\{@code\s+([^}]+)\}/g, '`$1`')
      .replace(/<p>/g, '\n\n')
      .replace(/<\/?[a-z]+[^>]*>/g, '');
    lines.push(cleanDoc);
    lines.push('');
  }

  if (event.fields.length > 0) {
    lines.push('## Event Fields');
    lines.push('');
    lines.push('| Field | Type | Description |');
    lines.push('|-------|------|-------------|');
    for (const f of event.fields) {
      lines.push(`| \`${f.name}\` | \`${f.type}\` | ${f.desc.replace(/\|/g, '\\|')} |`);
    }
    lines.push('');
  }

  // Getter/setter methods
  const getters = parsed.methods.filter(m => m.name.startsWith('get') || m.name.startsWith('is') || m.name.startsWith('set') || m.name.startsWith('can'));
  if (getters.length > 0) {
    lines.push('## Accessors');
    lines.push('');
    for (const g of getters) {
      lines.push(`- \`${g.signature}\` ${g.javadoc ? '— ' + extractFirstLine(g.javadoc) : ''}`);
    }
    lines.push('');
  }

  // Usage example
  lines.push('## Usage Example');
  lines.push('');
  lines.push('```java');
  if (event.bus === 'MOD') {
    lines.push(`@EventBusSubscriber(modid = "yourmod", bus = EventBusSubscriber.Bus.MOD)`);
  } else {
    lines.push(`@EventBusSubscriber(modid = "yourmod")`);
  }
  lines.push(`public class ${parsed.simpleName.replace('Event', '')}Handler {`);
  lines.push(`    @SubscribeEvent`);
  lines.push(`    public static void on${parsed.simpleName.replace('Event', '')}(${parsed.simpleName} event) {`);
  lines.push(`        // Handle event`);
  lines.push(`    }`);
  lines.push(`}`);
  lines.push('```');
  lines.push('');

  // Inner event classes
  if (parsed.innerClasses.length > 0) {
    lines.push('## Sub-Events');
    lines.push('');
    for (const ic of parsed.innerClasses) {
      lines.push(`### ${ic.simpleName}`);
      lines.push('');
      if (ic.javadoc) {
        const cleanDoc = ic.javadoc
          .replace(/\{@link\s+([^}]+)\}/g, '`$1`')
          .replace(/\{@code\s+([^}]+)\}/g, '`$1`')
          .replace(/<\/?[a-z]+[^>]*>/g, '');
        lines.push(cleanDoc);
        lines.push('');
      }
    }
  }

  return lines.join('\n');
}

function generateCategoryIndex(category: string, classes: ParsedClass[]): string {
  const lines: string[] = [];
  const title = category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  lines.push(`# ${title}`);
  lines.push('');
  lines.push(`This category contains ${classes.length} class(es).`);
  lines.push('');
  
  // Group by subcategory (deeper package segments)
  const groups = new Map<string, ParsedClass[]>();
  for (const cls of classes) {
    const subPkg = cls.packageName.split('.').slice(-2).join('.');
    if (!groups.has(subPkg)) groups.set(subPkg, []);
    groups.get(subPkg)!.push(cls);
  }
  
  for (const [subPkg, subClasses] of groups) {
    lines.push(`## ${subPkg}`);
    lines.push('');
    lines.push('| Class | Type | Description |');
    lines.push('|-------|------|-------------|');
    
    for (const cls of subClasses.sort((a, b) => a.simpleName.localeCompare(b.simpleName))) {
      const desc = extractFirstLine(cls.javadoc).replace(/\|/g, '\\|').substring(0, 100);
      const side = determineSide(cls.filePath, cls.annotations);
      const sideBadge = side === 'client' ? ' 🖥️' : side === 'server' ? ' 🖧' : '';
      lines.push(`| [\`${cls.simpleName}\`](${cls.simpleName}.md)${sideBadge} | ${cls.kind} | ${desc} |`);
    }
    lines.push('');
  }
  
  return lines.join('\n');
}

// ─── Main pipeline ───

async function main() {
  console.log('=== NeoForge 26.1 Documentation Generator ===\n');
  
  // Find source archives
  const mergedSourcePath = findSourceArchive();
  const neoforgeSourcePath = findNeoForgeSourcesJar();
  
  // Clean output
  if (fs.existsSync(DOCS_DIR)) {
    fs.rmSync(DOCS_DIR, { recursive: true });
  }
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  
  // Parse all Java files
  console.log('\nParsing Java source files...');
  const allClasses: ParsedClass[] = [];
  let fileCount = 0;
  let errorCount = 0;
  
  const processZip = (zipPath: string, label: string) => {
    console.log(`  Reading ${label}: ${path.basename(zipPath)}`);
    const zip = new AdmZip(zipPath);
    const entries = zip.getEntries();
    
    for (const entry of entries) {
      if (entry.isDirectory || !entry.entryName.endsWith('.java')) continue;
      // Skip internal/mixin/package-info files
      if (entry.entryName.includes('/internal/') && !entry.entryName.includes('neoforge/internal')) continue;
      if (entry.entryName.endsWith('package-info.java')) continue;
      
      try {
        const source = entry.getData().toString('utf8');
        const parsed = parseJavaFile(source, entry.entryName);
        if (parsed && (parsed.modifiers.includes('public') || parsed.modifiers.includes('protected'))) {
          allClasses.push(parsed);
          
          // Also add inner classes as separate entries
          for (const inner of parsed.innerClasses) {
            allClasses.push(inner);
          }
        }
        fileCount++;
      } catch {
        errorCount++;
      }
    }
  };
  
  processZip(mergedSourcePath, 'MC+NeoForge merged sources');
  
  // If we have separate NeoForge sources, also parse those (may contain additional API classes)
  if (neoforgeSourcePath) {
    const existingNames = new Set(allClasses.map(c => c.fullName));
    const before = allClasses.length;
    
    const zip = new AdmZip(neoforgeSourcePath);
    for (const entry of zip.getEntries()) {
      if (entry.isDirectory || !entry.entryName.endsWith('.java') || entry.entryName.endsWith('package-info.java')) continue;
      try {
        const source = entry.getData().toString('utf8');
        const parsed = parseJavaFile(source, entry.entryName);
        if (parsed && !existingNames.has(parsed.fullName) && (parsed.modifiers.includes('public') || parsed.modifiers.includes('protected'))) {
          allClasses.push(parsed);
          existingNames.add(parsed.fullName);
        }
      } catch {
        // skip
      }
    }
    console.log(`  Additional NeoForge-only classes: ${allClasses.length - before}`);
  }
  
  console.log(`\nParsed ${fileCount} files → ${allClasses.length} public classes (${errorCount} errors)`);
  
  // ─── Classify ───
  console.log('\nClassifying into categories...');
  const categories = new Map<string, ParsedClass[]>();
  
  for (const cls of allClasses) {
    const cat = getCategory(cls.packageName);
    if (!categories.has(cat)) categories.set(cat, []);
    categories.get(cat)!.push(cls);
  }
  
  console.log(`Categories: ${categories.size}`);
  for (const [cat, classes] of [...categories.entries()].sort((a, b) => b[1].length - a[1].length).slice(0, 20)) {
    console.log(`  ${cat}: ${classes.length} classes`);
  }
  
  // ─── Build API index ───
  console.log('\nBuilding API index...');
  const apiIndex: Record<string, ApiIndexEntry[]> = {};
  
  for (const cls of allClasses) {
    const cat = getCategory(cls.packageName);
    if (!apiIndex[cat]) apiIndex[cat] = [];
    
    // Index each public method
    for (const m of cls.methods) {
      if (m.modifiers.includes('private') || m.name.startsWith('lambda$') || m.name.startsWith('access$')) continue;
      
      apiIndex[cat].push({
        name: m.name,
        className: cls.simpleName,
        fullPath: cls.fullName,
        desc: extractFirstLine(m.javadoc),
        category: cat,
        returnType: m.returnType,
        params: m.parameters.map(p => ({ name: p.name, type: p.type })),
        modifiers: m.modifiers,
        annotations: m.annotations,
        deprecated: m.isDeprecated,
        side: determineSide(cls.filePath, cls.annotations),
      });
    }
    
    // Also index the class itself
    apiIndex[cat].push({
      name: cls.simpleName,
      className: cls.simpleName,
      fullPath: cls.fullName,
      desc: extractFirstLine(cls.javadoc),
      category: cat,
      returnType: '',
      params: [],
      modifiers: cls.modifiers,
      annotations: cls.annotations,
      deprecated: false,
      side: determineSide(cls.filePath, cls.annotations),
    });
  }
  
  let totalApiEntries = 0;
  for (const entries of Object.values(apiIndex)) totalApiEntries += entries.length;
  console.log(`API index: ${totalApiEntries} entries across ${Object.keys(apiIndex).length} categories`);
  
  fs.writeFileSync(path.join(DOCS_DIR, 'api_index.json'), JSON.stringify(apiIndex, null, 2));
  
  // ─── Build events index ───
  console.log('\nBuilding events index...');
  const eventsIndex: EventIndexEntry[] = [];
  
  for (const cls of allClasses) {
    if (!isEventClass(cls)) continue;
    
    const cancelable = cls.interfaces.some(i => i.includes('ICancellableEvent')) ||
      cls.annotations.some(a => a.includes('Cancelable'));
    
    const fields = cls.fields.map(f => ({
      name: f.name,
      type: f.type,
      desc: extractFirstLine(f.javadoc),
    }));
    
    // Add getter-derived fields
    for (const m of cls.methods) {
      if ((m.name.startsWith('get') || m.name.startsWith('is')) && m.parameters.length === 0 && m.returnType !== 'void') {
        const fieldName = m.name.replace(/^(get|is)/, '');
        if (fieldName && !fields.some(f => f.name.toLowerCase() === fieldName.toLowerCase())) {
          fields.push({
            name: fieldName.charAt(0).toLowerCase() + fieldName.slice(1),
            type: m.returnType,
            desc: extractFirstLine(m.javadoc),
          });
        }
      }
    }
    
    eventsIndex.push({
      name: cls.simpleName,
      fullPath: cls.fullName,
      desc: extractFirstLine(cls.javadoc),
      category: getCategory(cls.packageName),
      cancelable,
      bus: determineEventBus(cls),
      fields,
      superClass: cls.superClass || 'Event',
      deprecated: cls.annotations.some(a => a.startsWith('Deprecated')),
    });
  }
  
  console.log(`Events index: ${eventsIndex.length} events`);
  fs.writeFileSync(path.join(DOCS_DIR, 'events_index.json'), JSON.stringify(eventsIndex, null, 2));
  
  // ─── Generate Markdown docs ───
  console.log('\nGenerating Markdown documentation...');
  let mdFileCount = 0;
  
  for (const [cat, classes] of categories) {
    const catDir = path.join(DOCS_DIR, cat);
    fs.mkdirSync(catDir, { recursive: true });
    
    // Category index
    fs.writeFileSync(path.join(catDir, 'index.md'), generateCategoryIndex(cat, classes));
    mdFileCount++;
    
    // Individual class docs
    for (const cls of classes) {
      let md: string;
      if (isEventClass(cls)) {
        const eventEntry = eventsIndex.find(e => e.fullPath === cls.fullName);
        if (eventEntry) {
          md = generateEventMarkdown(cls, eventEntry);
        } else {
          md = generateClassMarkdown(cls);
        }
      } else {
        md = generateClassMarkdown(cls);
      }
      
      // Sanitize filename
      const fileName = cls.simpleName.replace(/[<>:"/\\|?*]/g, '_') + '.md';
      fs.writeFileSync(path.join(catDir, fileName), md);
      mdFileCount++;
    }
  }
  
  console.log(`Generated ${mdFileCount} Markdown files`);
  
  // ─── Build config.json (navigation tree) ───
  console.log('\nBuilding navigation config...');
  
  interface ConfigNode {
    title: string;
    children: (string | ConfigNode)[];
  }
  
  const config: ConfigNode = {
    title: 'NeoForge 26.1 API',
    children: [],
  };
  
  // Group categories
  const categoryGroups: Record<string, string[]> = {
    'NeoForge Core': ['registries', 'events', 'event-bus', 'neoforge-core', 'common', 'capabilities', 'attachments', 'conditions'],
    'Content': ['blocks', 'block-entities', 'items', 'data-components', 'entities', 'entity-ai', 'player', 'effects', 'food', 'enchantments'],
    'World': ['world', 'worldgen', 'chunks', 'loot', 'recipes'],
    'Network & Server': ['network', 'server', 'server-level', 'server-network', 'commands'],
    'Client': ['client', 'gui', 'gui-screens', 'rendering', 'models', 'client-resources', 'client-network'],
    'Data': ['datagen', 'datapacks', 'tags', 'nbt', 'codec', 'resources'],
    'Systems': ['energy', 'fluids', 'sounds', 'stats', 'scoreboards', 'advancements', 'gametest'],
    'Utility': ['core', 'util', 'math', 'minecraft-core', 'mojang-lib', 'misc'],
  };
  
  for (const [groupTitle, cats] of Object.entries(categoryGroups)) {
    const groupNode: ConfigNode = { title: groupTitle, children: [] };
    for (const cat of cats) {
      if (categories.has(cat)) {
        const catClasses = categories.get(cat)!;
        const catNode: ConfigNode = {
          title: cat,
          children: [
            `docs/${cat}/index.md`,
            ...catClasses.slice(0, 50).map(c => `docs/${cat}/${c.simpleName}.md`),
          ],
        };
        groupNode.children.push(catNode);
      }
    }
    if (groupNode.children.length > 0) {
      config.children.push(groupNode);
    }
  }
  
  fs.writeFileSync(path.join(DOCS_DIR, 'config.json'), JSON.stringify(config, null, 2));
  
  // ─── Summary ───
  console.log('\n=== Generation Complete ===');
  console.log(`Total classes parsed:  ${allClasses.length}`);
  console.log(`API index entries:     ${totalApiEntries}`);
  console.log(`Events indexed:        ${eventsIndex.length}`);
  console.log(`Markdown files:        ${mdFileCount}`);
  console.log(`Categories:            ${categories.size}`);
  console.log(`Output directory:      ${DOCS_DIR}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
