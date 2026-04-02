# RandomBooleanFeatureConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<RandomBooleanFeatureConfiguration>` |  |
| `featureTrue` | `Holder<PlacedFeature>` |  |
| `featureFalse` | `Holder<PlacedFeature>` |  |

## Methods

### RandomBooleanFeatureConfiguration

```java
public RandomBooleanFeatureConfiguration(Holder<PlacedFeature> p_204804_, Holder<PlacedFeature> p_204805_)
```

**Parameters:**

- `p_204804_` (`Holder<PlacedFeature>`)
- `p_204805_` (`Holder<PlacedFeature>`)

**Returns:** `public`

### getFeatures

```java
public Stream<ConfiguredFeature<?, ?>> getFeatures()
```

**Returns:** `Stream<ConfiguredFeature<?, ?>>`
