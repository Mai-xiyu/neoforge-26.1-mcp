# WorldPresets

**Package:** `net.minecraft.world.level.levelgen.presets`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NORMAL` | `ResourceKey<WorldPreset>` |  |
| `FLAT` | `ResourceKey<WorldPreset>` |  |
| `LARGE_BIOMES` | `ResourceKey<WorldPreset>` |  |
| `AMPLIFIED` | `ResourceKey<WorldPreset>` |  |
| `SINGLE_BIOME_SURFACE` | `ResourceKey<WorldPreset>` |  |
| `DEBUG` | `ResourceKey<WorldPreset>` |  |

## Methods

### bootstrap

```java
public static void bootstrap(BootstrapContext<WorldPreset> p_321750_)
```

**Parameters:**

- `p_321750_` (`BootstrapContext<WorldPreset>`)

**Returns:** `public static void`

### register

```java
private static ResourceKey<WorldPreset> register(String p_226460_)
```

**Parameters:**

- `p_226460_` (`String`)

**Returns:** `private static ResourceKey<WorldPreset>`

### fromSettings

```java
public static Optional<ResourceKey<WorldPreset>> fromSettings(WorldDimensions p_326314_)
```

**Parameters:**

- `p_326314_` (`WorldDimensions`)

**Returns:** `public static Optional<ResourceKey<WorldPreset>>`

### createNormalWorldDimensions

```java
public static WorldDimensions createNormalWorldDimensions(RegistryAccess p_251732_)
```

**Parameters:**

- `p_251732_` (`RegistryAccess`)

**Returns:** `public static WorldDimensions`

### getNormalOverworld

```java
public static LevelStem getNormalOverworld(RegistryAccess p_226464_)
```

**Parameters:**

- `p_226464_` (`RegistryAccess`)

**Returns:** `public static LevelStem`

### Bootstrap

```java
 Bootstrap(BootstrapContext<WorldPreset> p_321480_)
```

**Parameters:**

- `p_321480_` (`BootstrapContext<WorldPreset>`)

**Returns:** ``

### makeOverworld

```java
private LevelStem makeOverworld(ChunkGenerator p_226488_)
```

**Parameters:**

- `p_226488_` (`ChunkGenerator`)

**Returns:** `private LevelStem`

### LevelStem

```java
return new LevelStem()
```

**Returns:** `return new`

### makeNoiseBasedOverworld

```java
private LevelStem makeNoiseBasedOverworld(BiomeSource p_226485_, Holder<NoiseGeneratorSettings> p_226486_)
```

**Parameters:**

- `p_226485_` (`BiomeSource`)
- `p_226486_` (`Holder<NoiseGeneratorSettings>`)

**Returns:** `private LevelStem`

### createPresetWithCustomOverworld

```java
private WorldPreset createPresetWithCustomOverworld(LevelStem p_226490_)
```

**Parameters:**

- `p_226490_` (`LevelStem`)

**Returns:** `private WorldPreset`

### registerCustomOverworldPreset

```java
private void registerCustomOverworldPreset(ResourceKey<WorldPreset> p_256570_, LevelStem p_256269_)
```

**Parameters:**

- `p_256570_` (`ResourceKey<WorldPreset>`)
- `p_256269_` (`LevelStem`)

**Returns:** `private void`

### registerOverworlds

```java
private void registerOverworlds(BiomeSource p_273133_)
```

**Parameters:**

- `p_273133_` (`BiomeSource`)

**Returns:** `private void`

### bootstrap

```java
public void bootstrap()
```

**Returns:** `public void`
