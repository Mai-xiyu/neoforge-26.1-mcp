# Registries

**Package:** `net.minecraft.core.registries`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ROOT_REGISTRY_NAME` | `ResourceLocation` |  |
| `ACTIVITY` | `ResourceKey<Registry<Activity>>` |  |
| `ATTRIBUTE` | `ResourceKey<Registry<Attribute>>` |  |
| `BANNER_PATTERN` | `ResourceKey<Registry<BannerPattern>>` |  |
| `BIOME_SOURCE` | `ResourceKey<Registry<MapCodec<? extends BiomeSource>>>` |  |
| `BLOCK` | `ResourceKey<Registry<Block>>` |  |
| `BLOCK_TYPE` | `ResourceKey<Registry<MapCodec<? extends Block>>>` |  |
| `BLOCK_ENTITY_TYPE` | `ResourceKey<Registry<BlockEntityType<?>>>` |  |
| `BLOCK_PREDICATE_TYPE` | `ResourceKey<Registry<BlockPredicateType<?>>>` |  |
| `BLOCK_STATE_PROVIDER_TYPE` | `ResourceKey<Registry<BlockStateProviderType<?>>>` |  |
| `CARVER` | `ResourceKey<Registry<WorldCarver<?>>>` |  |
| `CAT_VARIANT` | `ResourceKey<Registry<CatVariant>>` |  |
| `WOLF_VARIANT` | `ResourceKey<Registry<WolfVariant>>` |  |
| `CHUNK_GENERATOR` | `ResourceKey<Registry<MapCodec<? extends ChunkGenerator>>>` |  |
| `CHUNK_STATUS` | `ResourceKey<Registry<ChunkStatus>>` |  |
| `COMMAND_ARGUMENT_TYPE` | `ResourceKey<Registry<ArgumentTypeInfo<?, ?>>>` |  |
| `CREATIVE_MODE_TAB` | `ResourceKey<Registry<CreativeModeTab>>` |  |
| `CUSTOM_STAT` | `ResourceKey<Registry<ResourceLocation>>` |  |
| `DAMAGE_TYPE` | `ResourceKey<Registry<DamageType>>` |  |
| `DENSITY_FUNCTION_TYPE` | `ResourceKey<Registry<MapCodec<? extends DensityFunction>>>` |  |
| `ENCHANTMENT_ENTITY_EFFECT_TYPE` | `ResourceKey<Registry<MapCodec<? extends EnchantmentEntityEffect>>>` |  |
| `ENCHANTMENT_LEVEL_BASED_VALUE_TYPE` | `ResourceKey<Registry<MapCodec<? extends LevelBasedValue>>>` |  |
| `ENCHANTMENT_LOCATION_BASED_EFFECT_TYPE` | `ResourceKey<Registry<MapCodec<? extends EnchantmentLocationBasedEffect>>>` |  |
| `ENCHANTMENT_PROVIDER_TYPE` | `ResourceKey<Registry<MapCodec<? extends EnchantmentProvider>>>` |  |
| `ENCHANTMENT_VALUE_EFFECT_TYPE` | `ResourceKey<Registry<MapCodec<? extends EnchantmentValueEffect>>>` |  |
| `ENTITY_TYPE` | `ResourceKey<Registry<EntityType<?>>>` |  |
| `FEATURE` | `ResourceKey<Registry<Feature<?>>>` |  |
| `FEATURE_SIZE_TYPE` | `ResourceKey<Registry<FeatureSizeType<?>>>` |  |
| `FLOAT_PROVIDER_TYPE` | `ResourceKey<Registry<FloatProviderType<?>>>` |  |
| `FLUID` | `ResourceKey<Registry<Fluid>>` |  |
| `FOLIAGE_PLACER_TYPE` | `ResourceKey<Registry<FoliagePlacerType<?>>>` |  |
| `FROG_VARIANT` | `ResourceKey<Registry<FrogVariant>>` |  |
| `GAME_EVENT` | `ResourceKey<Registry<GameEvent>>` |  |
| `HEIGHT_PROVIDER_TYPE` | `ResourceKey<Registry<HeightProviderType<?>>>` |  |
| `INSTRUMENT` | `ResourceKey<Registry<Instrument>>` |  |
| `INT_PROVIDER_TYPE` | `ResourceKey<Registry<IntProviderType<?>>>` |  |
| `ITEM` | `ResourceKey<Registry<Item>>` |  |
| `JUKEBOX_SONG` | `ResourceKey<Registry<JukeboxSong>>` |  |

## Methods

### levelStemToLevel

```java
public static ResourceKey<Level> levelStemToLevel(ResourceKey<LevelStem> p_259475_)
```

**Parameters:**

- `p_259475_` (`ResourceKey<LevelStem>`)

**Returns:** `public static ResourceKey<Level>`

### levelToLevelStem

```java
public static ResourceKey<LevelStem> levelToLevelStem(ResourceKey<Level> p_260225_)
```

**Parameters:**

- `p_260225_` (`ResourceKey<Level>`)

**Returns:** `public static ResourceKey<LevelStem>`

### createRegistryKey

```java
<T> private static <T> ResourceKey<Registry<T>> createRegistryKey(String p_259572_)
```

**Parameters:**

- `p_259572_` (`String`)

**Returns:** `private static <T> ResourceKey<Registry<T>>`

### elementsDirPath

```java
public static String elementsDirPath(ResourceKey<? extends Registry<?>> p_350960_)
```

**Parameters:**

- `p_350960_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `public static String`

### tagsDirPath

```java
public static String tagsDirPath(ResourceKey<? extends Registry<?>> p_350980_)
```

**Parameters:**

- `p_350980_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `public static String`
