# CanyonWorldCarver

**Package:** `net.minecraft.world.level.levelgen.carver`
**Type:** class
**Extends:** `WorldCarver<CanyonCarverConfiguration>`

## Methods

### CanyonWorldCarver

```java
public CanyonWorldCarver(Codec<CanyonCarverConfiguration> p_64711_)
```

**Parameters:**

- `p_64711_` (`Codec<CanyonCarverConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isStartChunk

```java
public boolean isStartChunk(CanyonCarverConfiguration p_224797_, RandomSource p_224798_)
```

**Parameters:**

- `p_224797_` (`CanyonCarverConfiguration`)
- `p_224798_` (`RandomSource`)

**Returns:** `public boolean`

### carve

```java
public boolean carve(CarvingContext p_224813_, CanyonCarverConfiguration p_224814_, ChunkAccess p_224815_, Function<BlockPos, Holder<Biome>> p_224816_, RandomSource p_224817_, Aquifer p_224818_, ChunkPos p_224819_, CarvingMask p_224820_)
```

**Parameters:**

- `p_224813_` (`CarvingContext`)
- `p_224814_` (`CanyonCarverConfiguration`)
- `p_224815_` (`ChunkAccess`)
- `p_224816_` (`Function<BlockPos, Holder<Biome>>`)
- `p_224817_` (`RandomSource`)
- `p_224818_` (`Aquifer`)
- `p_224819_` (`ChunkPos`)
- `p_224820_` (`CarvingMask`)

**Returns:** `public boolean`

### doCarve

```java
private void doCarve(CarvingContext p_190594_, CanyonCarverConfiguration p_190595_, ChunkAccess p_190596_, Function<BlockPos, Holder<Biome>> p_190597_, long p_190598_, Aquifer p_190599_, double p_190600_, double p_190601_, double p_190602_, float p_190603_, float p_190604_, float p_190605_, int p_190606_, int p_190607_, double p_190608_, CarvingMask p_190609_)
```

**Parameters:**

- `p_190594_` (`CarvingContext`)
- `p_190595_` (`CanyonCarverConfiguration`)
- `p_190596_` (`ChunkAccess`)
- `p_190597_` (`Function<BlockPos, Holder<Biome>>`)
- `p_190598_` (`long`)
- `p_190599_` (`Aquifer`)
- `p_190600_` (`double`)
- `p_190601_` (`double`)
- `p_190602_` (`double`)
- `p_190603_` (`float`)
- `p_190604_` (`float`)
- `p_190605_` (`float`)
- `p_190606_` (`int`)
- `p_190607_` (`int`)
- `p_190608_` (`double`)
- `p_190609_` (`CarvingMask`)

**Returns:** `private void`

### initWidthFactors

```java
private float[] initWidthFactors(CarvingContext p_224809_, CanyonCarverConfiguration p_224810_, RandomSource p_224811_)
```

**Parameters:**

- `p_224809_` (`CarvingContext`)
- `p_224810_` (`CanyonCarverConfiguration`)
- `p_224811_` (`RandomSource`)

**Returns:** `private float[]`

### updateVerticalRadius

```java
private double updateVerticalRadius(CanyonCarverConfiguration p_224800_, RandomSource p_224801_, double p_224802_, float p_224803_, float p_224804_)
```

**Parameters:**

- `p_224800_` (`CanyonCarverConfiguration`)
- `p_224801_` (`RandomSource`)
- `p_224802_` (`double`)
- `p_224803_` (`float`)
- `p_224804_` (`float`)

**Returns:** `private double`

### shouldSkip

```java
private boolean shouldSkip(CarvingContext p_159074_, float[] p_159075_, double p_159076_, double p_159077_, double p_159078_, int p_159079_)
```

**Parameters:**

- `p_159074_` (`CarvingContext`)
- `p_159075_` (`float[]`)
- `p_159076_` (`double`)
- `p_159077_` (`double`)
- `p_159078_` (`double`)
- `p_159079_` (`int`)

**Returns:** `private boolean`
