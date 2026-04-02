# NeoForge 26.1 Mod 项目结构

## 标准目录布局

```
mymod/
├── build.gradle                          # 构建配置
├── gradle.properties                     # 版本属性
├── settings.gradle                       # Gradle 设置
├── src/
│   ├── main/
│   │   ├── java/com/example/mymod/
│   │   │   ├── MyMod.java               # Mod 主类 (@Mod)
│   │   │   ├── ModBlocks.java            # 方块注册 (DeferredRegister.Blocks)
│   │   │   ├── ModItems.java             # 物品注册 (DeferredRegister.Items)
│   │   │   ├── ModEntities.java          # 实体注册
│   │   │   ├── ModBlockEntities.java     # 方块实体注册
│   │   │   ├── ModMenuTypes.java         # 菜单/GUI 注册
│   │   │   ├── ModCreativeTabs.java      # 创造模式标签
│   │   │   ├── block/                    # 自定义方块类
│   │   │   ├── item/                     # 自定义物品类
│   │   │   ├── entity/                   # 自定义实体类
│   │   │   ├── blockentity/              # 方块实体类
│   │   │   ├── network/                  # 网络包 (CustomPacketPayload)
│   │   │   ├── data/                     # DataGen Provider 类
│   │   │   ├── client/                   # 客户端代码 (渲染器、屏幕等)
│   │   │   │   ├── renderer/
│   │   │   │   ├── screen/
│   │   │   │   └── ClientEvents.java
│   │   │   └── event/                    # 事件处理器
│   │   │       ├── ModEvents.java        # MOD bus 事件
│   │   │       └── GameEvents.java       # GAME bus 事件
│   │   ├── resources/
│   │   │   ├── META-INF/
│   │   │   │   └── accesstransformer.cfg # Access Transformers
│   │   │   └── assets/mymod/
│   │   │       ├── blockstates/          # 方块状态 JSON
│   │   │       ├── models/
│   │   │       │   ├── block/            # 方块模型
│   │   │       │   └── item/             # 物品模型
│   │   │       ├── textures/
│   │   │       │   ├── block/            # 方块纹理
│   │   │       │   └── item/             # 物品纹理
│   │   │       └── lang/
│   │   │           └── en_us.json        # 语言文件
│   │   └── templates/
│   │       └── META-INF/
│   │           └── neoforge.mods.toml    # Mod 描述文件 (支持变量替换)
│   └── generated/
│       └── resources/                    # DataGen 输出 (自动生成)
└── gradle/
    └── wrapper/
        └── gradle-wrapper.properties
```

## 文件说明

### neoforge.mods.toml
mod 的元数据文件，定义 mod ID、名称、版本和依赖关系。放在 `src/main/templates/` 下支持 Gradle 变量替换。

### @Mod 主类
<kbd>一个 mod 有且仅有一个</kbd> `@Mod` 注解的主类。在构造函数中初始化所有 DeferredRegister。

### 客户端/服务端分离
- `client/` 目录仅包含客户端代码
- 使用 `@EventBusSubscriber(value = Dist.CLIENT)` 确保仅在客户端加载
- 服务端类不应导入 `client/` 下的任何类

### DataGen 输出
`src/generated/resources/` 由 `gradlew runData` 生成，不要手动编辑。
