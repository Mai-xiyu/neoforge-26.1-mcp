# RandomFeatureConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<RandomFeatureConfiguration>` |  |
| `features` | `List<WeightedPlacedFeature>` |  |
| `defaultFeature` | `Holder<PlacedFeature>` |  |

## Methods

### RandomFeatureConfiguration

```java
public RandomFeatureConfiguration(List<WeightedPlacedFeature> p_204811_, Holder<PlacedFeature> p_204812_)
```

**Parameters:**

- `p_204811_` (`List<WeightedPlacedFeature>`)
- `p_204812_` (`Holder<PlacedFeature>`)

**Returns:** `public`

### getFeatures

```java
public Stream<ConfiguredFeature<?, ?>> getFeatures()
```

**Returns:** `Stream<ConfiguredFeature<?, ?>>`
