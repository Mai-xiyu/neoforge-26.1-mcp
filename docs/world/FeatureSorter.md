# FeatureSorter

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Methods

### buildFeaturesPerStep

```java
<T> public static <T> List<FeatureSorter.StepFeatureData> buildFeaturesPerStep(List<T> p_220604_, Function<T, List<HolderSet<PlacedFeature>>> p_220605_, boolean p_220606_)
```

**Parameters:**

- `p_220604_` (`List<T>`)
- `p_220605_` (`Function<T, List<HolderSet<PlacedFeature>>>`)
- `p_220606_` (`boolean`)

**Returns:** `public static <T> List<FeatureSorter.StepFeatureData>`

### FeatureData

```java
record FeatureData(int featureIndex, int step, PlacedFeature feature)
```

**Parameters:**

- `featureIndex` (`int`)
- `step` (`int`)
- `feature` (`PlacedFeature`)

**Returns:** `record`

### IllegalStateException

```java
throw new IllegalStateException("You somehow broke the universe; DFS bork (iteration finished with non-empty in-progress vertex set")
```

**Parameters:**

- `set"` (`"You somehow broke the universe; DFS bork (iteration finished with non-empty in-progress vertex`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Feature order cycle found")
```

**Parameters:**

- `found"` (`"Feature order cycle`)

**Returns:** `throw new`

### buildFeaturesPerStep

```java
 buildFeaturesPerStep()
```

**Returns:** ``

### IllegalStateException

```java
throw new IllegalStateException("Feature order cycle found, involved sources: " + list3)
```

**Parameters:**

- `found` (`"Feature order cycle`)
- `list3` (`involved sources: " +`)

**Returns:** `throw new`

### StepFeatureData

```java
public static record StepFeatureData(List<PlacedFeature> features, ToIntFunction<PlacedFeature> indexMapping)
```

**Parameters:**

- `features` (`List<PlacedFeature>`)
- `indexMapping` (`ToIntFunction<PlacedFeature>`)

**Returns:** `public static record`

### StepFeatureData

```java
 StepFeatureData(List<PlacedFeature> p_220627_)
```

**Parameters:**

- `p_220627_` (`List<PlacedFeature>`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StepFeatureData` | record |  |
