# BlendingData

**Package:** `net.minecraft.world.level.levelgen.blending`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CELL_WIDTH` | `int` |  |
| `CELL_HEIGHT` | `int` |  |
| `CELL_RATIO` | `int` |  |
| `NO_VALUE` | `double` |  |
| `CODEC` | `Codec<BlendingData>` |  |

## Methods

### validateArraySize

```java
private static DataResult<BlendingData> validateArraySize(BlendingData p_190321_)
```

**Parameters:**

- `p_190321_` (`BlendingData`)

**Returns:** `private static DataResult<BlendingData>`

### BlendingData

```java
private BlendingData(int p_224740_, int p_224741_, Optional<double[]> p_224742_)
```

**Parameters:**

- `p_224740_` (`int`)
- `p_224741_` (`int`)
- `p_224742_` (`Optional<double[]>`)

**Returns:** `private`

### getOrUpdateBlendingData

```java
public static BlendingData getOrUpdateBlendingData(WorldGenRegion p_190305_, int p_190306_, int p_190307_)
```

**Parameters:**

- `p_190305_` (`WorldGenRegion`)
- `p_190306_` (`int`)
- `p_190307_` (`int`)

**Returns:** `BlendingData`

### sideByGenerationAge

```java
public static Set<Direction8> sideByGenerationAge(WorldGenLevel p_197066_, int p_197067_, int p_197068_, boolean p_197069_)
```

**Parameters:**

- `p_197066_` (`WorldGenLevel`)
- `p_197067_` (`int`)
- `p_197068_` (`int`)
- `p_197069_` (`boolean`)

**Returns:** `public static Set<Direction8>`

### calculateData

```java
private void calculateData(ChunkAccess p_190318_, Set<Direction8> p_190319_)
```

**Parameters:**

- `p_190318_` (`ChunkAccess`)
- `p_190319_` (`Set<Direction8>`)

**Returns:** `private void`

### addValuesForColumn

```java
private void addValuesForColumn(int p_190300_, ChunkAccess p_190301_, int p_190302_, int p_190303_)
```

**Parameters:**

- `p_190300_` (`int`)
- `p_190301_` (`ChunkAccess`)
- `p_190302_` (`int`)
- `p_190303_` (`int`)

**Returns:** `private void`

### getHeightAtXZ

```java
private int getHeightAtXZ(ChunkAccess p_190311_, int p_190312_, int p_190313_)
```

**Parameters:**

- `p_190311_` (`ChunkAccess`)
- `p_190312_` (`int`)
- `p_190313_` (`int`)

**Returns:** `private int`

### read1

```java
private static double read1(ChunkAccess p_198298_, BlockPos.MutableBlockPos p_198299_)
```

**Parameters:**

- `p_198298_` (`ChunkAccess`)
- `p_198299_` (`BlockPos.MutableBlockPos`)

**Returns:** `private static double`

### read7

```java
private static double read7(ChunkAccess p_198301_, BlockPos.MutableBlockPos p_198302_)
```

**Parameters:**

- `p_198301_` (`ChunkAccess`)
- `p_198302_` (`BlockPos.MutableBlockPos`)

**Returns:** `private static double`

### getDensityColumn

```java
private double[] getDensityColumn(ChunkAccess p_198293_, int p_198294_, int p_198295_, int p_198296_)
```

**Parameters:**

- `p_198293_` (`ChunkAccess`)
- `p_198294_` (`int`)
- `p_198295_` (`int`)
- `p_198296_` (`int`)

**Returns:** `private double[]`

### getBiomeColumn

```java
private List<Holder<Biome>> getBiomeColumn(ChunkAccess p_224758_, int p_224759_, int p_224760_)
```

**Parameters:**

- `p_224758_` (`ChunkAccess`)
- `p_224759_` (`int`)
- `p_224760_` (`int`)

**Returns:** `private List<Holder<Biome>>`

### isGround

```java
private static boolean isGround(ChunkAccess p_190315_, BlockPos p_190316_)
```

**Parameters:**

- `p_190315_` (`ChunkAccess`)
- `p_190316_` (`BlockPos`)

**Returns:** `private static boolean`

### getHeight

```java
protected double getHeight(int p_190286_, int p_190287_, int p_190288_)
```

**Parameters:**

- `p_190286_` (`int`)
- `p_190287_` (`int`)
- `p_190288_` (`int`)

**Returns:** `protected double`

### getDensity

```java
private double getDensity(double[] p_190325_, int p_190326_)
```

**Parameters:**

- `p_190325_` (`double[]`)
- `p_190326_` (`int`)

**Returns:** `private double`

### getDensity

```java
protected double getDensity(int p_190334_, int p_190335_, int p_190336_)
```

**Parameters:**

- `p_190334_` (`int`)
- `p_190335_` (`int`)
- `p_190336_` (`int`)

**Returns:** `protected double`

### iterateBiomes

```java
protected void iterateBiomes(int p_224749_, int p_224750_, int p_224751_, BlendingData.BiomeConsumer p_224752_)
```

**Parameters:**

- `p_224749_` (`int`)
- `p_224750_` (`int`)
- `p_224751_` (`int`)
- `p_224752_` (`BlendingData.BiomeConsumer`)

**Returns:** `protected void`

### iterateHeights

```java
protected void iterateHeights(int p_190296_, int p_190297_, BlendingData.HeightConsumer p_190298_)
```

**Parameters:**

- `p_190296_` (`int`)
- `p_190297_` (`int`)
- `p_190298_` (`BlendingData.HeightConsumer`)

**Returns:** `protected void`

### iterateDensities

```java
protected void iterateDensities(int p_190290_, int p_190291_, int p_190292_, int p_190293_, BlendingData.DensityConsumer p_190294_)
```

**Parameters:**

- `p_190290_` (`int`)
- `p_190291_` (`int`)
- `p_190292_` (`int`)
- `p_190293_` (`int`)
- `p_190294_` (`BlendingData.DensityConsumer`)

**Returns:** `protected void`

### cellCountPerColumn

```java
private int cellCountPerColumn()
```

**Returns:** `private int`

### quartCountPerColumn

```java
private int quartCountPerColumn()
```

**Returns:** `private int`

### getColumnMinY

```java
private int getColumnMinY()
```

**Returns:** `private int`

### getMinY

```java
private int getMinY()
```

**Returns:** `private int`

### getCellYIndex

```java
private int getCellYIndex(int p_224747_)
```

**Parameters:**

- `p_224747_` (`int`)

**Returns:** `private int`

### getInsideIndex

```java
private static int getInsideIndex(int p_190331_, int p_190332_)
```

**Parameters:**

- `p_190331_` (`int`)
- `p_190332_` (`int`)

**Returns:** `private static int`

### getOutsideIndex

```java
private static int getOutsideIndex(int p_190351_, int p_190352_)
```

**Parameters:**

- `p_190351_` (`int`)
- `p_190352_` (`int`)

**Returns:** `private static int`

### getX

```java
private static int getX(int p_190349_)
```

**Parameters:**

- `p_190349_` (`int`)

**Returns:** `private static int`

### zeroIfNegative

```java
return zeroIfNegative(CELL_HORIZONTAL_MAX_INDEX_INSIDE - p_190349_)
```

**Parameters:**

- `p_190349_` (`CELL_HORIZONTAL_MAX_INDEX_INSIDE -`)

**Returns:** `return`

### getZ

```java
private static int getZ(int p_190355_)
```

**Parameters:**

- `p_190355_` (`int`)

**Returns:** `private static int`

### zeroIfNegative

```java
return zeroIfNegative(p_190355_ - CELL_HORIZONTAL_MAX_INDEX_INSIDE)
```

**Parameters:**

- `CELL_HORIZONTAL_MAX_INDEX_INSIDE` (`p_190355_ -`)

**Returns:** `return`

### zeroIfNegative

```java
private static int zeroIfNegative(int p_190357_)
```

**Parameters:**

- `p_190357_` (`int`)

**Returns:** `private static int`

### getAreaWithOldGeneration

```java
public LevelHeightAccessor getAreaWithOldGeneration()
```

**Returns:** `public LevelHeightAccessor`

### consume

```java
void consume(int p_204674_, int p_204675_, Holder<Biome> p_204676_)
```

**Parameters:**

- `p_204674_` (`int`)
- `p_204675_` (`int`)
- `p_204676_` (`Holder<Biome>`)

### consume

```java
void consume(int p_190362_, int p_190363_, int p_190364_, double p_190365_)
```

**Parameters:**

- `p_190362_` (`int`)
- `p_190363_` (`int`)
- `p_190364_` (`int`)
- `p_190365_` (`double`)

### consume

```java
void consume(int p_190367_, int p_190368_, double p_190369_)
```

**Parameters:**

- `p_190367_` (`int`)
- `p_190368_` (`int`)
- `p_190369_` (`double`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BiomeConsumer` | interface |  |
| `DensityConsumer` | interface |  |
| `HeightConsumer` | interface |  |
