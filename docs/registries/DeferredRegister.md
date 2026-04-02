# DeferredRegister

**Package:** `net.neoforged.neoforge.registries`
**Type:** class<T>

## Description

A helper class to aid in registering objects to modded and BuiltInRegistries vanilla registries and
provide deferred suppliers to access those objects.


This class maintains a list of all suppliers for entries and registers them during the proper `RegisterEvent`
event, after being #register(IEventBus) registered to an event bus.


Suppliers should return new instances every time they are invoked.


To create an instance of this helper class, use any of the three factory methods: `#create(Registry, String)`,
`#create(ResourceKey, String)`, or `#create(ResourceLocation, String)`. There are also specialized
subclasses of this helper for `Block`s and `Item`s, created through `#createBlocks(String)` and
`#createItems(String)` respectively. (Be sure to store the concrete type of those subclasses, rather than
storing them generically as `DeferredRegister<Block>` or `DeferredRegister<Item>`.)


Here are some common examples for using this class:
`private static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MODID);
private static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(MODID);
private static final DeferredRegister<BlockEntityType<?>> BLOCK_ENTITIES = DeferredRegister.create(BuiltInRegistries.BLOCK_ENTITY_TYPE, MODID);
// If you don't care about the actual Block class, use the simple variants
public static final DeferredBlock<Block> ROCK_BLOCK = BLOCKS.registerSimpleBlock("rock", Block.Properties.create(Material.ROCK));
public static final DeferredItem<BlockItem> ROCK_ITEM = ITEMS.registerSimpleBlockItem(ROCK_BLOCK, new Item.Properties());
// Otherwise, use the regular (non-'simple') variants
public static final DeferredBlock<SpecialRockBlock> SPECIAL_ROCK_BLOCK = BLOCKS.registerBlock("special_rock",
SpecialRockBlock::new, Block.Properties.create(Material.ROCK));
// (#registerSimpleBlockItem does not have a non-'simple' variant -- register an item in the usual way)
public static final DeferredItem<SpecialRockItem> SPECIAL_ROCK_ITEM = ITEMS.register("special_rock",
() -> new SpecialRockItem(SPECIAL_ROCK_BLOCK.get(), new Item.Properties()))
// (Can be DeferredHolder<BlockEntityType<?>, BlockEntityType<RockBlockEntity>> if you prefer)
public static final Supplier<BlockEntityType<RockBlockEntity>> ROCK_BLOCK_ENTITY = BLOCK_ENTITIES.register("rock",
() -> BlockEntityType.Builder.of(RockBlockEntity::new, ROCK_BLOCK.get()).build(null));
public ExampleMod(IEventBus modBus) {
ITEMS.register(modBus);
BLOCKS.register(modBus);
BLOCK_ENTITIES.register(modBus);
`
```
@param <T> the base registry type
@see DeferredRegister.Blocks
@see DeferredRegister.Items

## Methods

### create

```java
public static <T> DeferredRegister<T> create(Registry<T> registry, String namespace)
```

**Parameters:**

- `registry` (`Registry<T>`)
- `namespace` (`String`)

**Returns:** `DeferredRegister<T>`

### create

```java
public static <T> DeferredRegister<T> create(ResourceKey<? extends Registry<T>> key, String namespace)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<T>>`)
- `namespace` (`String`)

**Returns:** `DeferredRegister<T>`

### create

```java
public static <B> DeferredRegister<B> create(ResourceLocation registryName, String modid)
```

**Parameters:**

- `registryName` (`ResourceLocation`)
- `modid` (`String`)

**Returns:** `DeferredRegister<B>`

### createItems

```java
public static DeferredRegister.Items createItems(String modid)
```

**Parameters:**

- `modid` (`String`)

**Returns:** `DeferredRegister.Items`

### Items

```java
return new Items()
```

**Returns:** `return new`

### createBlocks

```java
public static DeferredRegister.Blocks createBlocks(String modid)
```

**Parameters:**

- `modid` (`String`)

**Returns:** `DeferredRegister.Blocks`

### Blocks

```java
return new Blocks()
```

**Returns:** `return new`

### createDataComponents

```java
public static DataComponents createDataComponents(ResourceKey<Registry<DataComponentType<?>>> registryKey, String modid)
```

**Parameters:**

- `registryKey` (`ResourceKey<Registry<DataComponentType<?>>>`)
- `modid` (`String`)

**Returns:** `DataComponents`

### DataComponents

```java
return new DataComponents()
```

**Returns:** `return new`

### createDataComponents

```java
public static DataComponents createDataComponents(String modid)
```

**Parameters:**

- `modid` (`String`)

**Returns:** `DataComponents`

### DataComponents

```java
return new DataComponents()
```

**Returns:** `return new`

### DeferredRegister

```java
protected DeferredRegister(ResourceKey<? extends Registry<T>> registryKey, String namespace)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)
- `namespace` (`String`)

**Returns:** `protected`

### register

```java
public <I extends T> DeferredHolder<T, I> register(String name, Supplier<? extends I> sup)
```

**Parameters:**

- `name` (`String`)
- `sup` (`Supplier<? extends I>`)

**Returns:** `DeferredHolder<T, I>`

### register

```java
public <I extends T> DeferredHolder<T, I> register(String name, Function<ResourceLocation, ? extends I> func)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<ResourceLocation, ? extends I>`)

**Returns:** `DeferredHolder<T, I>`

### IllegalStateException

```java
throw new IllegalStateException("Cannot register new entries to DeferredRegister after RegisterEvent has been fired.")
```

**Parameters:**

- `fired."` (`"Cannot register new entries to DeferredRegister after RegisterEvent has been`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Duplicate registration " + name)
```

**Parameters:**

- `name` (`"Duplicate registration " +`)

**Returns:** `throw new`

### createHolder

```java
protected <I extends T> DeferredHolder<T, I> createHolder(ResourceKey<? extends Registry<T>> registryKey, ResourceLocation key)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)
- `key` (`ResourceLocation`)

**Returns:** `DeferredHolder<T, I>`

### makeRegistry

```java
public Registry<T> makeRegistry(Consumer<RegistryBuilder<T>> consumer)
```

**Parameters:**

- `consumer` (`Consumer<RegistryBuilder<T>>`)

**Returns:** `Registry<T>`

### getRegistry

```java
public Supplier<Registry<T>> getRegistry()
```

**Returns:** `Supplier<Registry<T>>`

### createTagKey

```java
public TagKey<T> createTagKey(String path)
```

**Parameters:**

- `path` (`String`)

**Returns:** `TagKey<T>`

### createTagKey

```java
public TagKey<T> createTagKey(ResourceLocation location)
```

**Parameters:**

- `location` (`ResourceLocation`)

**Returns:** `TagKey<T>`

### addAlias

```java
public void addAlias(ResourceLocation from, ResourceLocation to)
```

**Parameters:**

- `from` (`ResourceLocation`)
- `to` (`ResourceLocation`)

### IllegalStateException

```java
throw new IllegalStateException("Cannot add aliases to DeferredRegister after RegisterEvent has been fired.")
```

**Parameters:**

- `fired."` (`"Cannot add aliases to DeferredRegister after RegisterEvent has been`)

**Returns:** `throw new`

### register

```java
public void register(IEventBus bus)
```

**Parameters:**

- `bus` (`IEventBus`)

### IllegalStateException

```java
throw new IllegalStateException("Cannot register DeferredRegister to more than one event bus.")
```

**Parameters:**

- `bus."` (`"Cannot register DeferredRegister to more than one event`)

**Returns:** `throw new`

### getEntries

```java
public Collection<DeferredHolder<T, ? extends T>> getEntries()
```

**Returns:** `Collection<DeferredHolder<T, ? extends T>>`

### getRegistryKey

```java
public ResourceKey<? extends Registry<T>> getRegistryKey()
```

**Returns:** `ResourceKey<? extends Registry<T>>`

### getRegistryName

```java
public ResourceLocation getRegistryName()
```

**Returns:** `ResourceLocation`

### getNamespace

```java
public String getNamespace()
```

**Returns:** `String`

### makeRegistry

```java
private Registry<T> makeRegistry(ResourceLocation registryName, Consumer<RegistryBuilder<T>> consumer)
```

**Parameters:**

- `registryName` (`ResourceLocation`)
- `consumer` (`Consumer<RegistryBuilder<T>>`)

**Returns:** `private Registry<T>`

### IllegalStateException

```java
throw new IllegalStateException("Cannot create a registry without specifying a registry name")
```

**Parameters:**

- `name"` (`"Cannot create a registry without specifying a registry`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Cannot create a registry that already exists - " + this.registryKey)
```

**Parameters:**

- `this.registryKey` (`"Cannot create a registry that already exists - " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Cannot create a registry after NewRegistryEvent was fired")
```

**Parameters:**

- `fired"` (`"Cannot create a registry after NewRegistryEvent was`)

**Returns:** `throw new`

### addEntries

```java
private void addEntries(RegisterEvent event)
```

**Parameters:**

- `event` (`RegisterEvent`)

**Returns:** `private void`

### addRegistry

```java
private void addRegistry(NewRegistryEvent event)
```

**Parameters:**

- `event` (`NewRegistryEvent`)

**Returns:** `private void`

### register

```java
public static <B extends Block> DeferredBlock<B> register(String name, Function<ResourceLocation, ? extends B> func)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<ResourceLocation, ? extends B>`)

**Returns:** `DeferredBlock<B>`

### register

```java
public <B extends Block> DeferredBlock<B> register(String name, Supplier<? extends B> sup)
```

**Parameters:**

- `name` (`String`)
- `sup` (`Supplier<? extends B>`)

**Returns:** `DeferredBlock<B>`

### registerBlock

```java
public <B extends Block> DeferredBlock<B> registerBlock(String name, Function<BlockBehaviour.Properties, ? extends B> func, BlockBehaviour.Properties props)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<BlockBehaviour.Properties, ? extends B>`)
- `props` (`BlockBehaviour.Properties`)

**Returns:** `DeferredBlock<B>`

### registerBlock

```java
public <B extends Block> DeferredBlock<B> registerBlock(String name, Function<BlockBehaviour.Properties, ? extends B> func)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<BlockBehaviour.Properties, ? extends B>`)

**Returns:** `DeferredBlock<B>`

### registerSimpleBlock

```java
public DeferredBlock<Block> registerSimpleBlock(String name, BlockBehaviour.Properties props)
```

**Parameters:**

- `name` (`String`)
- `props` (`BlockBehaviour.Properties`)

**Returns:** `DeferredBlock<Block>`

### registerSimpleBlock

```java
public DeferredBlock<Block> registerSimpleBlock(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `DeferredBlock<Block>`

### createHolder

```java
protected <I extends Block> DeferredBlock<I> createHolder(ResourceKey<? extends Registry<Block>> registryKey, ResourceLocation key)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<Block>>`)
- `key` (`ResourceLocation`)

**Returns:** `DeferredBlock<I>`

### register

```java
public static <I extends Item> DeferredItem<I> register(String name, Function<ResourceLocation, ? extends I> func)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<ResourceLocation, ? extends I>`)

**Returns:** `DeferredItem<I>`

### register

```java
public <I extends Item> DeferredItem<I> register(String name, Supplier<? extends I> sup)
```

**Parameters:**

- `name` (`String`)
- `sup` (`Supplier<? extends I>`)

**Returns:** `DeferredItem<I>`

### registerSimpleBlockItem

```java
public DeferredItem<BlockItem> registerSimpleBlockItem(String name, Supplier<? extends Block> block, Item.Properties properties)
```

**Parameters:**

- `name` (`String`)
- `block` (`Supplier<? extends Block>`)
- `properties` (`Item.Properties`)

**Returns:** `DeferredItem<BlockItem>`

### registerSimpleBlockItem

```java
public DeferredItem<BlockItem> registerSimpleBlockItem(String name, Supplier<? extends Block> block)
```

**Parameters:**

- `name` (`String`)
- `block` (`Supplier<? extends Block>`)

**Returns:** `DeferredItem<BlockItem>`

### registerSimpleBlockItem

```java
public DeferredItem<BlockItem> registerSimpleBlockItem(Holder<Block> block, Item.Properties properties)
```

**Parameters:**

- `block` (`Holder<Block>`)
- `properties` (`Item.Properties`)

**Returns:** `DeferredItem<BlockItem>`

### registerSimpleBlockItem

```java
public DeferredItem<BlockItem> registerSimpleBlockItem(Holder<Block> block)
```

**Parameters:**

- `block` (`Holder<Block>`)

**Returns:** `DeferredItem<BlockItem>`

### registerItem

```java
public <I extends Item> DeferredItem<I> registerItem(String name, Function<Item.Properties, ? extends I> func, Item.Properties props)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<Item.Properties, ? extends I>`)
- `props` (`Item.Properties`)

**Returns:** `DeferredItem<I>`

### registerItem

```java
public <I extends Item> DeferredItem<I> registerItem(String name, Function<Item.Properties, ? extends I> func)
```

**Parameters:**

- `name` (`String`)
- `func` (`Function<Item.Properties, ? extends I>`)

**Returns:** `DeferredItem<I>`

### registerSimpleItem

```java
public DeferredItem<Item> registerSimpleItem(String name, Item.Properties props)
```

**Parameters:**

- `name` (`String`)
- `props` (`Item.Properties`)

**Returns:** `DeferredItem<Item>`

### registerSimpleItem

```java
public DeferredItem<Item> registerSimpleItem(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `DeferredItem<Item>`

### createHolder

```java
protected <I extends Item> DeferredItem<I> createHolder(ResourceKey<? extends Registry<Item>> registryKey, ResourceLocation key)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<Item>>`)
- `key` (`ResourceLocation`)

**Returns:** `DeferredItem<I>`

### DataComponents

```java
public static protected DataComponents(String namespace)
```

**Parameters:**

- `namespace` (`String`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### registerComponentType

```java
public <D> DeferredHolder<DataComponentType<?>, DataComponentType<D>> registerComponentType(String name, UnaryOperator<DataComponentType.Builder<D>> builder)
```

**Parameters:**

- `name` (`String`)
- `builder` (`UnaryOperator<DataComponentType.Builder<D>>`)

**Returns:** `DeferredHolder<DataComponentType<?>, DataComponentType<D>>`

### RegistryHolder

```java
private RegistryHolder(ResourceKey<? extends Registry<V>> registryKey)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<V>>`)

**Returns:** `private`

### get

```java
Registry<V> get()
```

**Returns:** `Registry<V>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Blocks` | class |  |
| `Items` | class |  |
| `DataComponents` | class |  |
