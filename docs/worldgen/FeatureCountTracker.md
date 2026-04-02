# FeatureCountTracker

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class

## Methods

### load

```java
public FeatureCountTracker.LevelData load(ServerLevel p_190902_)
```

**Parameters:**

- `p_190902_` (`ServerLevel`)

**Returns:** `public FeatureCountTracker.LevelData`

### chunkDecorated

```java
public static void chunkDecorated(ServerLevel p_190882_)
```

**Parameters:**

- `p_190882_` (`ServerLevel`)

**Returns:** `public static void`

### featurePlaced

```java
public static void featurePlaced(ServerLevel p_190884_, ConfiguredFeature<?, ?> p_190885_, Optional<PlacedFeature> p_190886_)
```

**Parameters:**

- `p_190884_` (`ServerLevel`)
- `p_190885_` (`ConfiguredFeature<?, ?>`)
- `p_190886_` (`Optional<PlacedFeature>`)

**Returns:** `public static void`

### clearCounts

```java
public static void clearCounts()
```

**Returns:** `public static void`

### logCounts

```java
public static void logCounts()
```

**Returns:** `public static void`

### FeatureData

```java
static record FeatureData(ConfiguredFeature<?, ?> feature, Optional<PlacedFeature> topFeature)
```

**Parameters:**

- `feature` (`ConfiguredFeature<?, ?>`)
- `topFeature` (`Optional<PlacedFeature>`)

**Returns:** `static record`

### LevelData

```java
static record LevelData(Object2IntMap<FeatureCountTracker.FeatureData> featureData, MutableInt chunksWithFeatures)
```

**Parameters:**

- `featureData` (`Object2IntMap<FeatureCountTracker.FeatureData>`)
- `chunksWithFeatures` (`MutableInt`)

**Returns:** `static record`
