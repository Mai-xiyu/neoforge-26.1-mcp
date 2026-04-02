# PlacementUtils

**Package:** `net.minecraft.data.worldgen.placement`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HEIGHTMAP` | `PlacementModifier` |  |
| `HEIGHTMAP_TOP_SOLID` | `PlacementModifier` |  |
| `HEIGHTMAP_WORLD_SURFACE` | `PlacementModifier` |  |
| `HEIGHTMAP_OCEAN_FLOOR` | `PlacementModifier` |  |
| `FULL_RANGE` | `PlacementModifier` |  |
| `RANGE_10_10` | `PlacementModifier` |  |
| `RANGE_8_8` | `PlacementModifier` |  |
| `RANGE_4_4` | `PlacementModifier` |  |
| `RANGE_BOTTOM_TO_MAX_TERRAIN_HEIGHT` | `PlacementModifier` |  |

## Methods

### bootstrap

```java
public static void bootstrap(BootstrapContext<PlacedFeature> p_321855_)
```

**Parameters:**

- `p_321855_` (`BootstrapContext<PlacedFeature>`)

**Returns:** `public static void`

### createKey

```java
public static ResourceKey<PlacedFeature> createKey(String p_256293_)
```

**Parameters:**

- `p_256293_` (`String`)

**Returns:** `public static ResourceKey<PlacedFeature>`

### register

```java
public static void register(BootstrapContext<PlacedFeature> p_321821_, ResourceKey<PlacedFeature> p_256614_, Holder<ConfiguredFeature<?, ?>> p_255855_, List<PlacementModifier> p_321672_)
```

**Parameters:**

- `p_321821_` (`BootstrapContext<PlacedFeature>`)
- `p_256614_` (`ResourceKey<PlacedFeature>`)
- `p_255855_` (`Holder<ConfiguredFeature<?, ?>>`)
- `p_321672_` (`List<PlacementModifier>`)

**Returns:** `public static void`

### register

```java
public static void register(BootstrapContext<PlacedFeature> p_321697_, ResourceKey<PlacedFeature> p_255820_, Holder<ConfiguredFeature<?, ?>> p_255813_, PlacementModifier[]... p_321659_)
```

**Parameters:**

- `p_321697_` (`BootstrapContext<PlacedFeature>`)
- `p_255820_` (`ResourceKey<PlacedFeature>`)
- `p_255813_` (`Holder<ConfiguredFeature<?, ?>>`)
- `p_321659_` (`PlacementModifier[]...`)

**Returns:** `public static void`

### countExtra

```java
public static PlacementModifier countExtra(int p_195365_, float p_195366_, int p_195367_)
```

**Parameters:**

- `p_195365_` (`int`)
- `p_195366_` (`float`)
- `p_195367_` (`int`)

**Returns:** `public static PlacementModifier`

### IllegalStateException

```java
throw new IllegalStateException("Chance data cannot be represented as list weight")
```

**Parameters:**

- `weight"` (`"Chance data cannot be represented as list`)

**Returns:** `throw new`

### isEmpty

```java
public static PlacementFilter isEmpty()
```

**Returns:** `public static PlacementFilter`

### filteredByBlockSurvival

```java
public static BlockPredicateFilter filteredByBlockSurvival(Block p_206494_)
```

**Parameters:**

- `p_206494_` (`Block`)

**Returns:** `public static BlockPredicateFilter`

### inlinePlaced

```java
public static Holder<PlacedFeature> inlinePlaced(Holder<ConfiguredFeature<?, ?>> p_206507_, PlacementModifier[]... p_206508_)
```

**Parameters:**

- `p_206507_` (`Holder<ConfiguredFeature<?, ?>>`)
- `p_206508_` (`PlacementModifier[]...`)

**Returns:** `public static Holder<PlacedFeature>`

### inlinePlaced

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature> inlinePlaced(F p_206503_, FC p_206504_, PlacementModifier[]... p_206505_)
```

**Parameters:**

- `p_206503_` (`F`)
- `p_206504_` (`FC`)
- `p_206505_` (`PlacementModifier[]...`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature>`

### onlyWhenEmpty

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature> onlyWhenEmpty(F p_206496_, FC p_206497_)
```

**Parameters:**

- `p_206496_` (`F`)
- `p_206497_` (`FC`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature>`

### filtered

```java
return filtered()
```

**Returns:** `return`

### filtered

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature> filtered(F p_206499_, FC p_206500_, BlockPredicate p_206501_)
```

**Parameters:**

- `p_206499_` (`F`)
- `p_206500_` (`FC`)
- `p_206501_` (`BlockPredicate`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature>`
