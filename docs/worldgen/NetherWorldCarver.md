# NetherWorldCarver

**Package:** `net.minecraft.world.level.levelgen.carver`
**Type:** class
**Extends:** `CaveWorldCarver`

## Methods

### NetherWorldCarver

```java
public NetherWorldCarver(Codec<CaveCarverConfiguration> p_64873_)
```

**Parameters:**

- `p_64873_` (`Codec<CaveCarverConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getCaveBound

```java
protected int getCaveBound()
```

**Returns:** `int`

### getThickness

```java
protected float getThickness(RandomSource p_224907_)
```

**Parameters:**

- `p_224907_` (`RandomSource`)

**Returns:** `float`

### getYScale

```java
protected double getYScale()
```

**Returns:** `double`

### carveBlock

```java
protected boolean carveBlock(CarvingContext p_190731_, CaveCarverConfiguration p_190732_, ChunkAccess p_190733_, Function<BlockPos, Holder<Biome>> p_190734_, CarvingMask p_190735_, BlockPos.MutableBlockPos p_190736_, BlockPos.MutableBlockPos p_190737_, Aquifer p_190738_, MutableBoolean p_190739_)
```

**Parameters:**

- `p_190731_` (`CarvingContext`)
- `p_190732_` (`CaveCarverConfiguration`)
- `p_190733_` (`ChunkAccess`)
- `p_190734_` (`Function<BlockPos, Holder<Biome>>`)
- `p_190735_` (`CarvingMask`)
- `p_190736_` (`BlockPos.MutableBlockPos`)
- `p_190737_` (`BlockPos.MutableBlockPos`)
- `p_190738_` (`Aquifer`)
- `p_190739_` (`MutableBoolean`)

**Returns:** `protected boolean`
