# FeaturePlaceContext

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class<FC extends FeatureConfiguration>

## Methods

### FeaturePlaceContext

```java
public FeaturePlaceContext(Optional<ConfiguredFeature<?, ?>> p_225035_, WorldGenLevel p_225036_, ChunkGenerator p_225037_, RandomSource p_225038_, BlockPos p_225039_, FC p_225040_)
```

**Parameters:**

- `p_225035_` (`Optional<ConfiguredFeature<?, ?>>`)
- `p_225036_` (`WorldGenLevel`)
- `p_225037_` (`ChunkGenerator`)
- `p_225038_` (`RandomSource`)
- `p_225039_` (`BlockPos`)
- `p_225040_` (`FC`)

**Returns:** `public`

### topFeature

```java
public Optional<ConfiguredFeature<?, ?>> topFeature()
```

**Returns:** `public Optional<ConfiguredFeature<?, ?>>`

### level

```java
public WorldGenLevel level()
```

**Returns:** `public WorldGenLevel`

### chunkGenerator

```java
public ChunkGenerator chunkGenerator()
```

**Returns:** `public ChunkGenerator`

### random

```java
public RandomSource random()
```

**Returns:** `public RandomSource`

### origin

```java
public BlockPos origin()
```

**Returns:** `public BlockPos`

### config

```java
public FC config()
```

**Returns:** `public FC`
