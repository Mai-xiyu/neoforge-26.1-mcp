# SurfaceSystem

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class

## Methods

### SurfaceSystem

```java
public SurfaceSystem(RandomState p_224637_, BlockState p_224638_, int p_224639_, PositionalRandomFactory p_224640_)
```

**Parameters:**

- `p_224637_` (`RandomState`)
- `p_224638_` (`BlockState`)
- `p_224639_` (`int`)
- `p_224640_` (`PositionalRandomFactory`)

**Returns:** `public`

### buildSurface

```java
public void buildSurface(RandomState p_224649_, BiomeManager p_224650_, Registry<Biome> p_224651_, boolean p_224652_, WorldGenerationContext p_224653_, ChunkAccess p_224654_, NoiseChunk p_224655_, SurfaceRules.RuleSource p_224656_)
```

**Parameters:**

- `p_224649_` (`RandomState`)
- `p_224650_` (`BiomeManager`)
- `p_224651_` (`Registry<Biome>`)
- `p_224652_` (`boolean`)
- `p_224653_` (`WorldGenerationContext`)
- `p_224654_` (`ChunkAccess`)
- `p_224655_` (`NoiseChunk`)
- `p_224656_` (`SurfaceRules.RuleSource`)

**Returns:** `public void`

### getBlock

```java
public BlockState getBlock(int p_190006_)
```

**Parameters:**

- `p_190006_` (`int`)

**Returns:** `BlockState`

### setBlock

```java
public void setBlock(int p_190008_, BlockState p_190009_)
```

**Parameters:**

- `p_190008_` (`int`)
- `p_190009_` (`BlockState`)

### toString

```java
public String toString()
```

**Returns:** `String`

### getSurfaceDepth

```java
protected int getSurfaceDepth(int p_189928_, int p_189929_)
```

**Parameters:**

- `p_189928_` (`int`)
- `p_189929_` (`int`)

**Returns:** `protected int`

### getSurfaceSecondary

```java
protected double getSurfaceSecondary(int p_202190_, int p_202191_)
```

**Parameters:**

- `p_202190_` (`int`)
- `p_202191_` (`int`)

**Returns:** `protected double`

### isStone

```java
private boolean isStone(BlockState p_189953_)
```

**Parameters:**

- `p_189953_` (`BlockState`)

**Returns:** `private boolean`

### topMaterial

```java
public Optional<BlockState> topMaterial(SurfaceRules.RuleSource p_189972_, CarvingContext p_189973_, Function<BlockPos, Holder<Biome>> p_189974_, ChunkAccess p_189975_, NoiseChunk p_189976_, BlockPos p_189977_, boolean p_189978_)
```

**Parameters:**

- `p_189972_` (`SurfaceRules.RuleSource`)
- `p_189973_` (`CarvingContext`)
- `p_189974_` (`Function<BlockPos, Holder<Biome>>`)
- `p_189975_` (`ChunkAccess`)
- `p_189976_` (`NoiseChunk`)
- `p_189977_` (`BlockPos`)
- `p_189978_` (`boolean`)

**Returns:** `Optional<BlockState>`

### erodedBadlandsExtension

```java
private void erodedBadlandsExtension(BlockColumn p_189955_, int p_189956_, int p_189957_, int p_189958_, LevelHeightAccessor p_189959_)
```

**Parameters:**

- `p_189955_` (`BlockColumn`)
- `p_189956_` (`int`)
- `p_189957_` (`int`)
- `p_189958_` (`int`)
- `p_189959_` (`LevelHeightAccessor`)

**Returns:** `private void`

### frozenOceanExtension

```java
private void frozenOceanExtension(int p_189935_, Biome p_189936_, BlockColumn p_189937_, BlockPos.MutableBlockPos p_189938_, int p_189939_, int p_189940_, int p_189941_)
```

**Parameters:**

- `p_189935_` (`int`)
- `p_189936_` (`Biome`)
- `p_189937_` (`BlockColumn`)
- `p_189938_` (`BlockPos.MutableBlockPos`)
- `p_189939_` (`int`)
- `p_189940_` (`int`)
- `p_189941_` (`int`)

**Returns:** `private void`

### generateBands

```java
private static BlockState[] generateBands(RandomSource p_224642_)
```

**Parameters:**

- `p_224642_` (`RandomSource`)

**Returns:** `private static BlockState[]`

### makeBands

```java
 makeBands()
```

**Returns:** ``

### makeBands

```java
 makeBands()
```

**Returns:** ``

### makeBands

```java
 makeBands()
```

**Returns:** ``

### makeBands

```java
private static void makeBands(RandomSource p_224644_, BlockState[] p_224645_, int p_224646_, BlockState p_224647_)
```

**Parameters:**

- `p_224644_` (`RandomSource`)
- `p_224645_` (`BlockState[]`)
- `p_224646_` (`int`)
- `p_224647_` (`BlockState`)

**Returns:** `private static void`

### getBand

```java
protected BlockState getBand(int p_189931_, int p_189932_, int p_189933_)
```

**Parameters:**

- `p_189931_` (`int`)
- `p_189932_` (`int`)
- `p_189933_` (`int`)

**Returns:** `protected BlockState`
