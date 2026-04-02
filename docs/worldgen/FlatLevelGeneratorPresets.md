# FlatLevelGeneratorPresets

**Package:** `net.minecraft.world.level.levelgen.flat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLASSIC_FLAT` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `TUNNELERS_DREAM` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `WATER_WORLD` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `OVERWORLD` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `SNOWY_KINGDOM` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `BOTTOMLESS_PIT` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `DESERT` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `REDSTONE_READY` | `ResourceKey<FlatLevelGeneratorPreset>` |  |
| `THE_VOID` | `ResourceKey<FlatLevelGeneratorPreset>` |  |

## Methods

### bootstrap

```java
public static void bootstrap(BootstrapContext<FlatLevelGeneratorPreset> p_321798_)
```

**Parameters:**

- `p_321798_` (`BootstrapContext<FlatLevelGeneratorPreset>`)

**Returns:** `public static void`

### register

```java
private static ResourceKey<FlatLevelGeneratorPreset> register(String p_226277_)
```

**Parameters:**

- `p_226277_` (`String`)

**Returns:** `private static ResourceKey<FlatLevelGeneratorPreset>`

### Bootstrap

```java
 Bootstrap(BootstrapContext<FlatLevelGeneratorPreset> p_321787_)
```

**Parameters:**

- `p_321787_` (`BootstrapContext<FlatLevelGeneratorPreset>`)

**Returns:** ``

### register

```java
private void register(ResourceKey<FlatLevelGeneratorPreset> p_256174_, ItemLike p_255748_, ResourceKey<Biome> p_256483_, Set<ResourceKey<StructureSet>> p_255807_, boolean p_256642_, boolean p_256006_, FlatLayerInfo[]... p_255913_)
```

**Parameters:**

- `p_256174_` (`ResourceKey<FlatLevelGeneratorPreset>`)
- `p_255748_` (`ItemLike`)
- `p_256483_` (`ResourceKey<Biome>`)
- `p_255807_` (`Set<ResourceKey<StructureSet>>`)
- `p_256642_` (`boolean`)
- `p_256006_` (`boolean`)
- `p_255913_` (`FlatLayerInfo[]...`)

**Returns:** `private void`

### run

```java
public void run()
```

**Returns:** `public void`
