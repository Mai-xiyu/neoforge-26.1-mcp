# NeoForge 26.1 最佳实践

## 1. 注册

### ✅ 使用 DeferredRegister
```java
public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(MODID);
```

### ❌ 不要直接调用 Registry
```java
// 错误！
Registry.register(BuiltInRegistries.BLOCK, ResourceLocation.parse("mymod:block"), new Block(props));
```

## 2. 客户端/服务端分离

### ✅ 正确检查逻辑端
```java
if (!level.isClientSide()) {
    // 服务端逻辑：修改世界、生成实体
}
if (level.isClientSide()) {
    // 客户端逻辑：粒子效果、UI
}
```

### ❌ 不要在服务端引用客户端类
```java
// 在服务端代码中这样做会导致专用服务器崩溃：
Minecraft.getInstance().player; // 致命错误！
```

## 3. 网络

### ✅ 使用 CustomPacketPayload
NeoForge 26.1 使用 `CustomPacketPayload` + `StreamCodec`。

### ❌ 不要使用 SimpleChannel
`SimpleChannel` 是旧 Forge 的遗留 API，已被移除。

## 4. 数据序列化

### ✅ 使用 Codec
```java
public static final Codec<MyData> CODEC = RecordCodecBuilder.create(instance ->
    instance.group(
        Codec.INT.fieldOf("value").forGetter(MyData::value)
    ).apply(instance, MyData::new));
```

### ❌ 避免手动 NBT 读写（新代码中）
```java
// 尽可能用 Codec 替代手动 NBT 操作
```

## 5. 性能

### ✅ Tick 事件降频
```java
private int tickCounter = 0;

@SubscribeEvent
public static void onTick(ServerTickEvent.Post event) {
    if (tickCounter++ % 20 == 0) { // 每秒执行一次
        // 耗时操作
    }
}
```

### ❌ 不要每 tick 执行重逻辑
```java
// 每 tick 搜索所有实体 — 性能灾难！
@SubscribeEvent
public static void onTick(ServerTickEvent.Post event) {
    level.getEntitiesOfClass(/* ... */); // 不要每帧执行
}
```

## 6. 资源管理

### ✅ 使用 ResourceLocation.fromNamespaceAndPath
```java
ResourceLocation rl = ResourceLocation.fromNamespaceAndPath(MODID, "my_thing");
```

### ✅ 使用 ResourceKey 引用注册表对象
```java
ResourceKey<Block> key = ResourceKey.create(Registries.BLOCK,
    ResourceLocation.fromNamespaceAndPath(MODID, "my_block"));
```

## 7. 能力 (Capabilities)

### ✅ 新能力系统
```java
@SubscribeEvent
public static void registerCaps(RegisterCapabilitiesEvent event) {
    event.registerBlockEntity(
        Capabilities.ItemHandler.BLOCK,
        MY_BE_TYPE.get(),
        (be, dir) -> be.getItemHandler(dir)
    );
}
```

### ❌ 不要使用 LazyOptional
`LazyOptional` 是旧 Forge 能力系统的产物，NeoForge 直接返回 nullable。

## 8. 配置

### ✅ 使用 ModConfigSpec
```java
ModConfigSpec.IntValue MAX_SIZE = BUILDER
    .comment("最大尺寸")
    .defineInRange("maxSize", 10, 1, 100);
```

### ✅ 区分配置类型
- `Type.COMMON` — 客户端和服务端共享
- `Type.CLIENT` — 仅客户端（渲染设置等）
- `Type.SERVER` — 仅服务端（游戏规则等）

## 9. 代码审查清单

使用 `review_mod_code` 工具可以自动检查以下问题：

- [ ] DeferredRegister 是否正确使用
- [ ] 事件方法是否为 static
- [ ] 是否存在客户端/服务端混用
- [ ] 是否使用了已废弃的 Forge API
- [ ] Tick 事件是否有降频
- [ ] 网络包是否使用新的 Payload 系统

## 10. MC 1.26.1 特殊说明

- **无混淆**: Mojang 从 1.26.1 开始不再混淆源码
- **直接使用真实名称**: 不需要 SRG 映射或 AT 中的混淆名
- **Parchment 映射**: 仍然建议使用 Parchment 获取参数名
