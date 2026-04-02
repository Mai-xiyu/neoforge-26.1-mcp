# NeoForge 26.1 事件系统指南

## 两个事件总线

### MOD Bus (生命周期)
用于 mod 加载、注册和设置阶段。

```java
@EventBusSubscriber(modid = MODID, bus = EventBusSubscriber.Bus.MOD)
public class ModEvents {
    @SubscribeEvent
    public static void onCommonSetup(FMLCommonSetupEvent event) { }
    
    @SubscribeEvent
    public static void onClientSetup(FMLClientSetupEvent event) { }
    
    @SubscribeEvent
    public static void onRegisterPayloads(RegisterPayloadHandlersEvent event) { }
    
    @SubscribeEvent
    public static void onRegisterCapabilities(RegisterCapabilitiesEvent event) { }
    
    @SubscribeEvent
    public static void onEntityAttributes(EntityAttributeCreationEvent event) { }
}
```

### GAME Bus (游戏运行时)
用于游戏内事件，如玩家交互、方块操作等。**默认** bus。

```java
@EventBusSubscriber(modid = MODID)
public class GameEvents {
    @SubscribeEvent
    public static void onBlockBreak(BlockEvent.BreakEvent event) { }
    
    @SubscribeEvent
    public static void onPlayerLogin(PlayerEvent.PlayerLoggedInEvent event) { }
    
    @SubscribeEvent
    public static void onLivingHurt(LivingDamageEvent.Pre event) { }
    
    @SubscribeEvent
    public static void onRightClickBlock(PlayerInteractEvent.RightClickBlock event) { }
}
```

## 事件规则

### 1. @EventBusSubscriber 方法必须是 static
```java
// ✅ 正确
@SubscribeEvent
public static void onEvent(SomeEvent event) { }

// ❌ 错误 — 非 static 方法不会被调用
@SubscribeEvent
public void onEvent(SomeEvent event) { }
```

### 2. 可取消事件
```java
@SubscribeEvent
public static void onBlockBreak(BlockEvent.BreakEvent event) {
    if (shouldPrevent) {
        event.setCanceled(true); // 取消事件
    }
}
```

### 3. 事件优先级
```java
@SubscribeEvent(priority = EventPriority.HIGH)
public static void onEvent(SomeEvent event) { }
```

### 4. 客户端专属事件
```java
@EventBusSubscriber(modid = MODID, value = Dist.CLIENT)
public class ClientEvents {
    @SubscribeEvent
    public static void onRenderLevel(RenderLevelStageEvent event) { }
    
    @SubscribeEvent
    public static void onRegisterRenderers(EntityRenderersEvent.RegisterRenderers event) { }
}
```

### 5. `enqueueWork` 用于线程安全操作
```java
@SubscribeEvent
public static void onCommonSetup(FMLCommonSetupEvent event) {
    event.enqueueWork(() -> {
        // 在主线程上执行的代码
        // 修改非线程安全的注册表或静态状态时使用
    });
}
```

## 常用事件速查

| 事件 | Bus | 用途 |
|------|-----|------|
| `FMLCommonSetupEvent` | MOD | 通用初始化 |
| `FMLClientSetupEvent` | MOD | 客户端初始化 |
| `RegisterPayloadHandlersEvent` | MOD | 注册网络包 |
| `RegisterCapabilitiesEvent` | MOD | 注册能力 |
| `EntityAttributeCreationEvent` | MOD | 注册实体属性 |
| `BuildCreativeModeTabContentsEvent` | MOD | 添加物品到创造标签 |
| `GatherDataEvent` | MOD | 数据生成 |
| `BlockEvent.BreakEvent` | GAME | 方块被破坏 |
| `PlayerEvent.PlayerLoggedInEvent` | GAME | 玩家登录 |
| `PlayerInteractEvent.*` | GAME | 玩家交互 |
| `LivingDamageEvent.*` | GAME | 生物受伤 |
| `ServerTickEvent.*` | GAME | 服务端 Tick |
| `LevelEvent.Load` | GAME | 世界加载 |

## 查找正确事件

使用 MCP 工具：
1. `search_events("block break")` — 搜索方块破坏相关事件
2. `get_event_detail("BlockEvent.BreakEvent")` — 获取事件完整信息
3. `search_api("PlayerEvent")` — 搜索玩家相关 API
