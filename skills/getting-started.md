# NeoForge 26.1 入门指南

## 环境准备

### 必需工具
- **Java 21** (JDK 21+)
- **Gradle** (项目自带 Gradle Wrapper)
- **IDE**: IntelliJ IDEA (推荐) 或 Eclipse

### 创建新项目
1. 使用 `generate_mod_project` 工具生成项目骨架
2. 或从 [NeoForge MDK](https://github.com/neoforged/MDK) 下载模板

### 项目关键配置
- `gradle.properties` — Mod ID、版本、NeoForge 版本
- `src/main/templates/META-INF/neoforge.mods.toml` — Mod 元数据
- `build.gradle` — 构建配置和依赖

## 第一个 Mod

```java
@Mod("mymod")
public class MyMod {
    public static final String MODID = "mymod";
    
    public MyMod(IEventBus modEventBus, ModContainer modContainer) {
        // 在这里注册你的内容
    }
}
```

## 运行与调试

```bash
# 运行客户端
gradlew runClient

# 运行服务端
gradlew runServer

# 运行数据生成
gradlew runData

# 构建 JAR
gradlew build
```

## 核心概念

### 1. 注册系统 (DeferredRegister)
所有游戏对象（方块、物品、实体等）必须通过 DeferredRegister 注册。

### 2. 事件系统
NeoForge 有两个事件总线：
- **MOD Bus**: 生命周期事件（加载、设置）
- **GAME Bus**: 游戏逻辑事件（玩家交互、世界事件）

### 3. 客户端/服务端分离
代码严格区分客户端和服务端。服务端代码不能引用客户端类。

### 4. 数据生成 (DataGen)
JSON 文件（配方、模型、语言文件等）应通过 DataGen 自动生成。

## 常用工具一览

| 工具 | 用途 |
|------|------|
| `search_api` | 搜索 API |
| `get_api_detail` | 查看类/方法详情 |
| `search_events` | 搜索事件 |
| `generate_block` | 生成方块代码 |
| `generate_item` | 生成物品代码 |
| `get_neoforge_knowledge` | 查询最佳实践 |
| `review_mod_code` | 检查代码问题 |
