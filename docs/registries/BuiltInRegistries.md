# BuiltInRegistries

**Package:** `net.minecraft.core.registries`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `GAME_EVENT` | `DefaultedRegistry<GameEvent>` |  |
| `SOUND_EVENT` | `Registry<SoundEvent>` |  |
| `FLUID` | `DefaultedRegistry<Fluid>` |  |
| `MOB_EFFECT` | `Registry<MobEffect>` |  |
| `BLOCK` | `DefaultedRegistry<Block>` |  |
| `ENTITY_TYPE` | `DefaultedRegistry<EntityType<?>>` |  |
| `ITEM` | `DefaultedRegistry<Item>` |  |
| `POTION` | `Registry<Potion>` |  |
| `PARTICLE_TYPE` | `Registry<ParticleType<?>>` |  |
| `BLOCK_ENTITY_TYPE` | `Registry<BlockEntityType<?>>` |  |
| `CUSTOM_STAT` | `Registry<ResourceLocation>` |  |
| `CHUNK_STATUS` | `DefaultedRegistry<ChunkStatus>` |  |
| `RULE_TEST` | `Registry<RuleTestType<?>>` |  |
| `RULE_BLOCK_ENTITY_MODIFIER` | `Registry<RuleBlockEntityModifierType<?>>` |  |
| `POS_RULE_TEST` | `Registry<PosRuleTestType<?>>` |  |
| `MENU` | `Registry<MenuType<?>>` |  |
| `RECIPE_TYPE` | `Registry<RecipeType<?>>` |  |
| `RECIPE_SERIALIZER` | `Registry<RecipeSerializer<?>>` |  |
| `ATTRIBUTE` | `Registry<Attribute>` |  |
| `POSITION_SOURCE_TYPE` | `Registry<PositionSourceType<?>>` |  |
| `COMMAND_ARGUMENT_TYPE` | `Registry<ArgumentTypeInfo<?, ?>>` |  |
| `STAT_TYPE` | `Registry<StatType<?>>` |  |
| `VILLAGER_TYPE` | `DefaultedRegistry<VillagerType>` |  |
| `VILLAGER_PROFESSION` | `DefaultedRegistry<VillagerProfession>` |  |
| `POINT_OF_INTEREST_TYPE` | `Registry<PoiType>` |  |
| `MEMORY_MODULE_TYPE` | `DefaultedRegistry<MemoryModuleType<?>>` |  |
| `SENSOR_TYPE` | `DefaultedRegistry<SensorType<?>>` |  |
| `SCHEDULE` | `Registry<Schedule>` |  |
| `ACTIVITY` | `Registry<Activity>` |  |
| `LOOT_POOL_ENTRY_TYPE` | `Registry<LootPoolEntryType>` |  |

## Methods

### registerSimple

```java
<T> private static <T> Registry<T> registerSimple(ResourceKey<? extends Registry<T>> p_260095_, BuiltInRegistries.RegistryBootstrap<T> p_259057_)
```

**Parameters:**

- `p_260095_` (`ResourceKey<? extends Registry<T>>`)
- `p_259057_` (`BuiltInRegistries.RegistryBootstrap<T>`)

**Returns:** `private static <T> Registry<T>`

### registerSimpleWithIntrusiveHolders

```java
<T> private static <T> Registry<T> registerSimpleWithIntrusiveHolders(ResourceKey<? extends Registry<T>> p_298703_, BuiltInRegistries.RegistryBootstrap<T> p_298612_)
```

**Parameters:**

- `p_298703_` (`ResourceKey<? extends Registry<T>>`)
- `p_298612_` (`BuiltInRegistries.RegistryBootstrap<T>`)

**Returns:** `private static <T> Registry<T>`

### registerDefaulted

```java
<T> private static <T> DefaultedRegistry<T> registerDefaulted(ResourceKey<? extends Registry<T>> p_259887_, String p_259325_, BuiltInRegistries.RegistryBootstrap<T> p_259759_)
```

**Parameters:**

- `p_259887_` (`ResourceKey<? extends Registry<T>>`)
- `p_259325_` (`String`)
- `p_259759_` (`BuiltInRegistries.RegistryBootstrap<T>`)

**Returns:** `private static <T> DefaultedRegistry<T>`

### registerDefaultedWithIntrusiveHolders

```java
<T> private static <T> DefaultedRegistry<T> registerDefaultedWithIntrusiveHolders(ResourceKey<? extends Registry<T>> p_259296_, String p_259101_, BuiltInRegistries.RegistryBootstrap<T> p_259485_)
```

**Parameters:**

- `p_259296_` (`ResourceKey<? extends Registry<T>>`)
- `p_259101_` (`String`)
- `p_259485_` (`BuiltInRegistries.RegistryBootstrap<T>`)

**Returns:** `private static <T> DefaultedRegistry<T>`

### internalRegister

```java
private static <T, R extends WritableRegistry<T>> R internalRegister(ResourceKey<? extends Registry<T>> p_259230_, R p_260327_, BuiltInRegistries.RegistryBootstrap<T> p_259210_)
```

**Parameters:**

- `p_259230_` (`ResourceKey<? extends Registry<T>>`)
- `p_260327_` (`R`)
- `p_259210_` (`BuiltInRegistries.RegistryBootstrap<T>`)

**Returns:** `private static <T, R extends WritableRegistry<T>> R`

### bootStrap

```java
public static void bootStrap()
```

**Returns:** `public static void`

### createContents

```java
 createContents()
```

**Returns:** ``

### freeze

```java
 freeze()
```

**Returns:** ``

### validate

```java
 validate()
```

**Returns:** ``

### createContents

```java
private static void createContents()
```

**Returns:** `private static void`

### freeze

```java
private static void freeze()
```

**Returns:** `private static void`

### validate

```java
private static <T extends Registry<?>> void validate(Registry<T> p_260209_)
```

**Parameters:**

- `p_260209_` (`Registry<T>`)

**Returns:** `private static <T extends Registry<?>> void`

### getVanillaRegistrationOrder

```java
public static java.util.Set<ResourceLocation> getVanillaRegistrationOrder()
```

**Returns:** `public static java.util.Set<ResourceLocation>`

### run

```java
Object run(Registry<T> p_260128_)
```

**Parameters:**

- `p_260128_` (`Registry<T>`)

**Returns:** `Object`
