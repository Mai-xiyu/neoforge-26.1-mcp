# WorldPreset

**Package:** `net.minecraft.world.level.levelgen.presets`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `Codec<WorldPreset>` |  |
| `CODEC` | `Codec<Holder<WorldPreset>>` |  |

## Methods

### WorldPreset

```java
public WorldPreset(Map<ResourceKey<LevelStem>, LevelStem> p_226419_)
```

**Parameters:**

- `p_226419_` (`Map<ResourceKey<LevelStem>, LevelStem>`)

**Returns:** `public`

### dimensionsInOrder

```java
private ImmutableMap<ResourceKey<LevelStem>, LevelStem> dimensionsInOrder()
```

**Returns:** `private ImmutableMap<ResourceKey<LevelStem>, LevelStem>`

### createWorldDimensions

```java
public WorldDimensions createWorldDimensions()
```

**Returns:** `public WorldDimensions`

### overworld

```java
public Optional<LevelStem> overworld()
```

**Returns:** `public Optional<LevelStem>`

### requireOverworld

```java
private static DataResult<WorldPreset> requireOverworld(WorldPreset p_238379_)
```

**Parameters:**

- `p_238379_` (`WorldPreset`)

**Returns:** `private static DataResult<WorldPreset>`
