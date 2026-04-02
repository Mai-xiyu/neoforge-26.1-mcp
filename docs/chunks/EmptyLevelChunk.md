# EmptyLevelChunk

**Package:** `net.minecraft.world.level.chunk`
**Type:** class
**Extends:** `LevelChunk`

## Methods

### EmptyLevelChunk

```java
public EmptyLevelChunk(Level p_204422_, ChunkPos p_204423_, Holder<Biome> p_204424_)
```

**Parameters:**

- `p_204422_` (`Level`)
- `p_204423_` (`ChunkPos`)
- `p_204424_` (`Holder<Biome>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBlockState

```java
public BlockState getBlockState(BlockPos p_62625_)
```

**Parameters:**

- `p_62625_` (`BlockPos`)

**Returns:** `BlockState`

### setBlockState

```java
public BlockState setBlockState(BlockPos p_62605_, BlockState p_62606_, boolean p_62607_)
```

**Parameters:**

- `p_62605_` (`BlockPos`)
- `p_62606_` (`BlockState`)
- `p_62607_` (`boolean`)

**Returns:** `BlockState`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_62621_)
```

**Parameters:**

- `p_62621_` (`BlockPos`)

**Returns:** `FluidState`

### getLightEmission

```java
public int getLightEmission(BlockPos p_62628_)
```

**Parameters:**

- `p_62628_` (`BlockPos`)

**Returns:** `int`

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_62609_, LevelChunk.EntityCreationType p_62610_)
```

**Parameters:**

- `p_62609_` (`BlockPos`)
- `p_62610_` (`LevelChunk.EntityCreationType`)

**Returns:** `BlockEntity`

### addAndRegisterBlockEntity

```java
public void addAndRegisterBlockEntity(BlockEntity p_156346_)
```

**Parameters:**

- `p_156346_` (`BlockEntity`)

### setBlockEntity

```java
public void setBlockEntity(BlockEntity p_156344_)
```

**Parameters:**

- `p_156344_` (`BlockEntity`)

### removeBlockEntity

```java
public void removeBlockEntity(BlockPos p_62623_)
```

**Parameters:**

- `p_62623_` (`BlockPos`)

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### isYSpaceEmpty

```java
public boolean isYSpaceEmpty(int p_62587_, int p_62588_)
```

**Parameters:**

- `p_62587_` (`int`)
- `p_62588_` (`int`)

**Returns:** `boolean`

### isSectionEmpty

```java
public boolean isSectionEmpty(int p_350288_)
```

**Parameters:**

- `p_350288_` (`int`)

**Returns:** `boolean`

### getFullStatus

```java
public FullChunkStatus getFullStatus()
```

**Returns:** `FullChunkStatus`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204426_, int p_204427_, int p_204428_)
```

**Parameters:**

- `p_204426_` (`int`)
- `p_204427_` (`int`)
- `p_204428_` (`int`)

**Returns:** `Holder<Biome>`
