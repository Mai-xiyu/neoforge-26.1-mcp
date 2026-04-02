# NeoForge 26.1 注册模式指南

## 核心原则

**所有游戏对象必须通过 DeferredRegister 注册**。直接调用 Registry 是错误的。

## DeferredRegister 用法

### 方块

```java
public class ModBlocks {
    public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(MyMod.MODID);

    // 简单方块
    public static final DeferredBlock<Block> EXAMPLE_BLOCK =
        BLOCKS.registerSimpleBlock("example_block", BlockBehaviour.Properties.of());

    // 自定义方块类
    public static final DeferredBlock<MyBlock> CUSTOM_BLOCK =
        BLOCKS.registerBlock("custom_block", MyBlock::new,
            BlockBehaviour.Properties.of().destroyTime(3.0f).explosionResistance(6.0f));
}
```

### 物品

```java
public class ModItems {
    public static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MyMod.MODID);

    // 简单物品
    public static final DeferredItem<Item> EXAMPLE_ITEM =
        ITEMS.registerSimpleItem("example_item");

    // 方块对应物品
    public static final DeferredItem<BlockItem> EXAMPLE_BLOCK_ITEM =
        ITEMS.registerSimpleBlockItem(ModBlocks.EXAMPLE_BLOCK);

    // 自定义属性物品
    public static final DeferredItem<Item> CUSTOM_ITEM =
        ITEMS.register("custom_item", props -> new Item(props.stacksTo(16)));
}
```

### 实体

```java
public class ModEntities {
    public static final DeferredRegister<EntityType<?>> ENTITIES =
        DeferredRegister.create(Registries.ENTITY_TYPE, MyMod.MODID);

    public static final DeferredHolder<EntityType<?>, EntityType<MyEntity>> MY_ENTITY =
        ENTITIES.register("my_entity", () ->
            EntityType.Builder.of(MyEntity::new, MobCategory.CREATURE)
                .sized(0.6f, 1.8f)
                .build("my_entity"));
}
```

### 方块实体

```java
public class ModBlockEntities {
    public static final DeferredRegister<BlockEntityType<?>> BLOCK_ENTITIES =
        DeferredRegister.create(Registries.BLOCK_ENTITY_TYPE, MyMod.MODID);

    public static final DeferredHolder<BlockEntityType<?>, BlockEntityType<MyBlockEntity>> MY_BE =
        BLOCK_ENTITIES.register("my_block_entity", () ->
            BlockEntityType.Builder.of(MyBlockEntity::new, ModBlocks.MY_BLOCK.get())
                .build(null));
}
```

### 菜单类型

```java
public static final DeferredRegister<MenuType<?>> MENUS =
    DeferredRegister.create(Registries.MENU, MODID);

public static final DeferredHolder<MenuType<?>, MenuType<MyMenu>> MY_MENU =
    MENUS.register("my_menu", () ->
        IMenuTypeExtension.create(MyMenu::new));
```

### 创造模式标签

```java
public static final DeferredRegister<CreativeModeTab> CREATIVE_TABS =
    DeferredRegister.create(Registries.CREATIVE_MODE_TAB, MODID);

public static final DeferredHolder<CreativeModeTab, CreativeModeTab> MY_TAB =
    CREATIVE_TABS.register("my_tab", () -> CreativeModeTab.builder()
        .title(Component.translatable("itemGroup." + MODID))
        .icon(() -> new ItemStack(ModItems.EXAMPLE_ITEM.get()))
        .displayItems((params, output) -> {
            output.accept(ModItems.EXAMPLE_ITEM.get());
        })
        .build());
```

## 在 Mod 主类中注册

```java
@Mod(MODID)
public class MyMod {
    public MyMod(IEventBus modEventBus, ModContainer modContainer) {
        ModBlocks.BLOCKS.register(modEventBus);
        ModItems.ITEMS.register(modEventBus);
        ModEntities.ENTITIES.register(modEventBus);
        ModBlockEntities.BLOCK_ENTITIES.register(modEventBus);
    }
}
```

## ⚠️ 常见错误

1. **不要在静态初始化阶段调用 `.get()`**
   ```java
   // ❌ 错误 — 注册还未完成！
   public static final Item WRONG = MY_ITEM.get();
   
   // ✅ 正确 — .get() 只在运行时使用
   public void someMethod() {
       Item item = MY_ITEM.get();
   }
   ```

2. **不要忘记注册到 modEventBus**
   ```java
   // 必须在 mod 构造函数中调用
   BLOCKS.register(modEventBus);
   ```

3. **不要直接实例化游戏对象**
   ```java
   // ❌ 错误
   Block myBlock = new Block(props);
   
   // ✅ 正确
   DeferredBlock<Block> myBlock = BLOCKS.registerSimpleBlock("my_block", props);
   ```
