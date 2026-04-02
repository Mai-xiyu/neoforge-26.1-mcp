# LevelChunkSection

**Package:** `net.minecraft.world.level.chunk`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SECTION_WIDTH` | `int` |  |
| `SECTION_HEIGHT` | `int` |  |
| `SECTION_SIZE` | `int` |  |
| `BIOME_CONTAINER_BITS` | `int` |  |
| `nonEmptyBlockCount` | `int` |  |
| `tickingBlockCount` | `int` |  |
| `tickingFluidCount` | `int` |  |

## Methods

### LevelChunkSection

```java
public LevelChunkSection(PalettedContainer<BlockState> p_282846_, PalettedContainerRO<Holder<Biome>> p_281695_)
```

**Parameters:**

- `p_282846_` (`PalettedContainer<BlockState>`)
- `p_281695_` (`PalettedContainerRO<Holder<Biome>>`)

**Returns:** `public`

### LevelChunkSection

```java
public LevelChunkSection(Registry<Biome> p_282873_)
```

**Parameters:**

- `p_282873_` (`Registry<Biome>`)

**Returns:** `public`

### getBlockState

```java
public BlockState getBlockState(int p_62983_, int p_62984_, int p_62985_)
```

**Parameters:**

- `p_62983_` (`int`)
- `p_62984_` (`int`)
- `p_62985_` (`int`)

**Returns:** `public BlockState`

### getFluidState

```java
public FluidState getFluidState(int p_63008_, int p_63009_, int p_63010_)
```

**Parameters:**

- `p_63008_` (`int`)
- `p_63009_` (`int`)
- `p_63010_` (`int`)

**Returns:** `public FluidState`

### acquire

```java
public void acquire()
```

**Returns:** `public void`

### release

```java
public void release()
```

**Returns:** `public void`

### setBlockState

```java
public BlockState setBlockState(int p_62987_, int p_62988_, int p_62989_, BlockState p_62990_)
```

**Parameters:**

- `p_62987_` (`int`)
- `p_62988_` (`int`)
- `p_62989_` (`int`)
- `p_62990_` (`BlockState`)

**Returns:** `public BlockState`

### setBlockState

```java
public BlockState setBlockState(int p_62992_, int p_62993_, int p_62994_, BlockState p_62995_, boolean p_62996_)
```

**Parameters:**

- `p_62992_` (`int`)
- `p_62993_` (`int`)
- `p_62994_` (`int`)
- `p_62995_` (`BlockState`)
- `p_62996_` (`boolean`)

**Returns:** `public BlockState`

### hasOnlyAir

```java
public boolean hasOnlyAir()
```

**Returns:** `public boolean`

### isRandomlyTicking

```java
public boolean isRandomlyTicking()
```

**Returns:** `public boolean`

### isRandomlyTickingBlocks

```java
public boolean isRandomlyTickingBlocks()
```

**Returns:** `public boolean`

### isRandomlyTickingFluids

```java
public boolean isRandomlyTickingFluids()
```

**Returns:** `public boolean`

### recalcBlockCounts

```java
public void recalcBlockCounts()
```

**Returns:** `public void`

### accept

```java
public void accept(BlockState p_204444_, int p_204445_)
```

**Parameters:**

- `p_204444_` (`BlockState`)
- `p_204445_` (`int`)

**Returns:** `public void`

### getStates

```java
public PalettedContainer<BlockState> getStates()
```

**Returns:** `public PalettedContainer<BlockState>`

### getBiomes

```java
public PalettedContainerRO<Holder<Biome>> getBiomes()
```

**Returns:** `public PalettedContainerRO<Holder<Biome>>`

### read

```java
public void read(FriendlyByteBuf p_63005_)
```

**Parameters:**

- `p_63005_` (`FriendlyByteBuf`)

**Returns:** `public void`

### readBiomes

```java
public void readBiomes(FriendlyByteBuf p_275669_)
```

**Parameters:**

- `p_275669_` (`FriendlyByteBuf`)

**Returns:** `public void`

### write

```java
public void write(FriendlyByteBuf p_63012_)
```

**Parameters:**

- `p_63012_` (`FriendlyByteBuf`)

**Returns:** `public void`

### getSerializedSize

```java
public int getSerializedSize()
```

**Returns:** `public int`

### maybeHas

```java
public boolean maybeHas(Predicate<BlockState> p_63003_)
```

**Parameters:**

- `p_63003_` (`Predicate<BlockState>`)

**Returns:** `public boolean`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204434_, int p_204435_, int p_204436_)
```

**Parameters:**

- `p_204434_` (`int`)
- `p_204435_` (`int`)
- `p_204436_` (`int`)

**Returns:** `public Holder<Biome>`

### fillBiomesFromNoise

```java
public void fillBiomesFromNoise(BiomeResolver p_282075_, Climate.Sampler p_283084_, int p_282310_, int p_281510_, int p_283057_)
```

**Parameters:**

- `p_282075_` (`BiomeResolver`)
- `p_283084_` (`Climate.Sampler`)
- `p_282310_` (`int`)
- `p_281510_` (`int`)
- `p_283057_` (`int`)

**Returns:** `public void`
