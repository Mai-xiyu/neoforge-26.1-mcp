# CaveWorldCarver

**Package:** `net.minecraft.world.level.levelgen.carver`
**Type:** class
**Extends:** `WorldCarver<CaveCarverConfiguration>`

## Methods

### CaveWorldCarver

```java
public CaveWorldCarver(Codec<CaveCarverConfiguration> p_159194_)
```

**Parameters:**

- `p_159194_` (`Codec<CaveCarverConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isStartChunk

```java
public boolean isStartChunk(CaveCarverConfiguration p_224894_, RandomSource p_224895_)
```

**Parameters:**

- `p_224894_` (`CaveCarverConfiguration`)
- `p_224895_` (`RandomSource`)

**Returns:** `public boolean`

### carve

```java
public boolean carve(CarvingContext p_224885_, CaveCarverConfiguration p_224886_, ChunkAccess p_224887_, Function<BlockPos, Holder<Biome>> p_224888_, RandomSource p_224889_, Aquifer p_224890_, ChunkPos p_224891_, CarvingMask p_224892_)
```

**Parameters:**

- `p_224885_` (`CarvingContext`)
- `p_224886_` (`CaveCarverConfiguration`)
- `p_224887_` (`ChunkAccess`)
- `p_224888_` (`Function<BlockPos, Holder<Biome>>`)
- `p_224889_` (`RandomSource`)
- `p_224890_` (`Aquifer`)
- `p_224891_` (`ChunkPos`)
- `p_224892_` (`CarvingMask`)

**Returns:** `public boolean`

### shouldSkip

```java
> shouldSkip()
```

**Returns:** `>`

### getCaveBound

```java
protected int getCaveBound()
```

**Returns:** `protected int`

### getThickness

```java
protected float getThickness(RandomSource p_224871_)
```

**Parameters:**

- `p_224871_` (`RandomSource`)

**Returns:** `protected float`

### getYScale

```java
protected double getYScale()
```

**Returns:** `protected double`

### createRoom

```java
protected void createRoom(CarvingContext p_190691_, CaveCarverConfiguration p_190692_, ChunkAccess p_190693_, Function<BlockPos, Holder<Biome>> p_190694_, Aquifer p_190695_, double p_190696_, double p_190697_, double p_190698_, float p_190699_, double p_190700_, CarvingMask p_190701_, WorldCarver.CarveSkipChecker p_190702_)
```

**Parameters:**

- `p_190691_` (`CarvingContext`)
- `p_190692_` (`CaveCarverConfiguration`)
- `p_190693_` (`ChunkAccess`)
- `p_190694_` (`Function<BlockPos, Holder<Biome>>`)
- `p_190695_` (`Aquifer`)
- `p_190696_` (`double`)
- `p_190697_` (`double`)
- `p_190698_` (`double`)
- `p_190699_` (`float`)
- `p_190700_` (`double`)
- `p_190701_` (`CarvingMask`)
- `p_190702_` (`WorldCarver.CarveSkipChecker`)

**Returns:** `protected void`

### createTunnel

```java
protected void createTunnel(CarvingContext p_190671_, CaveCarverConfiguration p_190672_, ChunkAccess p_190673_, Function<BlockPos, Holder<Biome>> p_190674_, long p_190675_, Aquifer p_190676_, double p_190677_, double p_190678_, double p_190679_, double p_190680_, double p_190681_, float p_190682_, float p_190683_, float p_190684_, int p_190685_, int p_190686_, double p_190687_, CarvingMask p_190688_, WorldCarver.CarveSkipChecker p_190689_)
```

**Parameters:**

- `p_190671_` (`CarvingContext`)
- `p_190672_` (`CaveCarverConfiguration`)
- `p_190673_` (`ChunkAccess`)
- `p_190674_` (`Function<BlockPos, Holder<Biome>>`)
- `p_190675_` (`long`)
- `p_190676_` (`Aquifer`)
- `p_190677_` (`double`)
- `p_190678_` (`double`)
- `p_190679_` (`double`)
- `p_190680_` (`double`)
- `p_190681_` (`double`)
- `p_190682_` (`float`)
- `p_190683_` (`float`)
- `p_190684_` (`float`)
- `p_190685_` (`int`)
- `p_190686_` (`int`)
- `p_190687_` (`double`)
- `p_190688_` (`CarvingMask`)
- `p_190689_` (`WorldCarver.CarveSkipChecker`)

**Returns:** `protected void`

### shouldSkip

```java
private static boolean shouldSkip(double p_159196_, double p_159197_, double p_159198_, double p_159199_)
```

**Parameters:**

- `p_159196_` (`double`)
- `p_159197_` (`double`)
- `p_159198_` (`double`)
- `p_159199_` (`double`)

**Returns:** `private static boolean`
