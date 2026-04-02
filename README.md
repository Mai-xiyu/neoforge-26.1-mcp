# NeoForge 26.1 MCP Server

<p align="center">
  <strong>为 AI 助手提供完整的 NeoForge 26.1 / Minecraft 1.26.1 API 文档与代码生成能力的 MCP (Model Context Protocol) 服务器</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Minecraft-1.26.1-green" alt="MC 1.26.1">
  <img src="https://img.shields.io/badge/NeoForge-26.1.0.17--beta-orange" alt="NeoForge 26.1">
  <img src="https://img.shields.io/badge/Java-25-blue" alt="Java 25">
  <img src="https://img.shields.io/badge/MCP-SDK_1.12-purple" alt="MCP SDK">
  <img src="https://img.shields.io/badge/Tools-20-red" alt="20 Tools">
</p>

---

## ✨ 特性

| 指标 | 数量 |
|------|------|
| API 条目 | **59,846** |
| 游戏/生命周期事件 | **208** |
| 文档页面 (Markdown) | **6,141** |
| 文档分类 | **53** |
| MCP 工具 | **20** |
| 知识库条目 | **10** |

所有文档直接从 Minecraft + NeoForge **未混淆源码**解析生成 — Mojang 从 1.26.1 开始不再混淆。

## 🛠 工具一览

### 📖 文档搜索 (5)

| 工具 | 说明 |
|------|------|
| `search_docs` | 全文搜索 — 类名、方法名、关键词，支持 CamelCase 拆分与模糊匹配 |
| `search_api` | 结构化搜索 — 按类名、方法名、返回类型、分类筛选 |
| `get_api_detail` | 获取完整类文档 — 方法签名、JavaDoc、注解、参数 |
| `get_document` | 读取 Markdown 文档页面 |
| `get_document_section` | 按标题提取文档特定章节 |

### 🔔 事件系统 (2)

| 工具 | 说明 |
|------|------|
| `search_events` | 搜索事件 — 按名称/关键词，可按 MOD/GAME 总线过滤 |
| `get_event_detail` | 获取事件详情 — 字段、总线、可取消性，附带用法示例代码 |

### 🗂 导航浏览 (3)

| 工具 | 说明 |
|------|------|
| `browse_api_category` | 浏览 53 个 API 分类及其内容 |
| `list_documents` | 列出某分类下的所有文档 |
| `get_registry_info` | 查询注册表信息（Block、Item、EntityType 等） |

### ⚡ 代码生成 (7)

| 工具 | 说明 |
|------|------|
| `generate_mod_project` | 生成完整 Mod 项目骨架（build.gradle、主类、mods.toml） |
| `generate_block` | 生成方块代码（可选 BlockEntity / BlockState） |
| `generate_item` | 生成物品代码（可选食物属性） |
| `generate_entity` | 生成实体代码（Living / Projectile / Misc） |
| `generate_event_handler` | 生成事件处理器类 |
| `generate_network_packet` | 生成 CustomPacketPayload 网络包 |
| `generate_data_provider` | 生成 DataGen Provider（配方、战利品、标签、模型、语言） |

### 🔍 代码质量 (3)

| 工具 | 说明 |
|------|------|
| `review_mod_code` | 审查代码 — 检测 15+ 种常见错误（注册、事件、网络、性能等） |
| `get_neoforge_knowledge` | 查询知识库 — DeferredRegister、事件系统、能力、DataGen 等模式 |
| `list_knowledge_topics` | 列出所有知识库主题 |

## 🚀 快速开始

### 前置条件

- **Node.js 18+**
- **NeoForge 26.1 开发环境**（需 Gradle 缓存中的源码用于文档生成）

> 仓库已包含预生成的 `docs/` 目录。如果你的 Gradle 缓存中没有 NeoForge 26.1 源码，可以直接跳到构建步骤。

### 安装与构建

```bash
git clone https://github.com/Mai-xiyu/neoforge-26.1-mcp.git
cd neoforge-26.1-mcp
npm install
npm run build
```

如需重新生成文档（需要本地 NeoForge 26.1 Gradle 缓存）：

```bash
npm run generate-docs
```

### 配置 VS Code

在你的 Mod 项目中创建 `.vscode/mcp.json`：

```json
{
  "servers": {
    "neoforge-26.1": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/neoforge-26.1-mcp/dist/src/index.js"]
    }
  }
}
```

配置完成后 GitHub Copilot / Claude 等 AI 助手即可使用全部 20 个工具。

### 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `NEOFORGE_DOCS_DIR` | 文档目录绝对路径 | 项目根目录下的 `docs/` |

## 📁 项目结构

```
neoforge-26.1-mcp/
├── src/                        # TypeScript 源码
│   ├── index.ts                # 入口点 (stdio transport)
│   ├── server.ts               # MCP 服务器核心 + 内嵌指令
│   ├── docs-reader.ts          # 文档搜索引擎 (7 种搜索策略)
│   ├── templates.ts            # Java 代码生成模板
│   └── tools/
│       ├── search.ts           # search_docs, search_api
│       ├── api-detail.ts       # get_api_detail, get_document, get_document_section
│       ├── events.ts           # search_events, get_event_detail
│       ├── browse.ts           # browse_api_category, list_documents, get_registry_info
│       ├── codegen.ts          # 7 个代码生成工具
│       ├── review.ts           # review_mod_code
│       └── knowledge-base.ts   # get_neoforge_knowledge, list_knowledge_topics
├── scripts/
│   └── generate-docs.ts        # 文档生成管线 (解析 6000+ Java 源文件)
├── docs/                       # 生成的 API 文档
│   ├── api_index.json          # 主 API 索引 (59846 条目)
│   ├── events_index.json       # 事件索引 (208 事件)
│   ├── config.json             # 导航树
│   └── <53 个分类目录>/        # 6141 个 Markdown 文件
├── skills/                     # AI 技能指南 (中文)
│   ├── getting-started.md      # 入门指南
│   ├── mod-structure.md        # 项目结构
│   ├── registration-patterns.md # 注册模式
│   ├── event-system.md         # 事件系统
│   └── best-practices.md       # 最佳实践
├── dist/                       # 编译输出 (git ignored)
├── package.json
├── tsconfig.json
└── .gitignore
```

## 🔧 文档生成管线

`scripts/generate-docs.ts` 实现了完整的源码→文档管线：

1. **源码获取** — 从 Gradle 缓存定位 NeoForge+MC 合并源码 ZIP（8.93 MB, 6304 个 Java 文件）
2. **Java 解析** — 基于正则的解析器，提取类、方法、字段、JavaDoc、注解、泛型
3. **分类映射** — 53 个 Java 包→文档分类的映射规则
4. **索引生成** — `api_index.json`（59846 条目）、`events_index.json`（208 事件）
5. **Markdown 生成** — 每个公开类一个 `.md` 文件，共 6141 个

## 🧠 搜索引擎

`DocsReader` 提供 7 层搜索策略，按优先级递减：

1. **精确名称匹配** (score: 100)
2. **类名匹配** (score: 95)
3. **事件搜索** (score: 80-100)
4. **前缀匹配** (score: 70)
5. **子串匹配** (score: 40-50)
6. **CamelCase 分词匹配** (score: 30+)
7. **描述模糊匹配** (score: 20)

## 📚 知识库主题

内置 10 个 NeoForge 26.1 最佳实践知识条目：

- DeferredRegister 模式
- 事件系统架构（MOD / GAME 双总线）
- 客户端/服务端分离
- DataGen 数据生成
- CustomPacketPayload 网络通信
- 能力系统 (Capabilities)
- 创造模式标签页
- Block Entity（方块实体）
- Access Transformers
- Mod 配置系统

## 🎯 目标环境

| 组件 | 版本 |
|------|------|
| Minecraft | 1.26.1.1 |
| NeoForge | 26.1.0.17-beta |
| Java | 21 |
| Mappings | Parchment 2025.12.21-nightly |
| Gradle Plugin | net.neoforged.moddev 2.0.x |

## 📦 技术栈

- **TypeScript** — ES2022, ESM, strict mode
- **@modelcontextprotocol/sdk** v1.12.1 — MCP 协议实现
- **zod** v3.25.1 — 工具参数验证
- **adm-zip** v0.5.16 — JAR/ZIP 源码读取

## License

MIT
