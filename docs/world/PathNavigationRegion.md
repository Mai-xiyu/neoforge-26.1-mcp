# PathNavigationRegion

**Package:** `net.minecraft.world.level`
**Type:** class
**Implements:** `BlockGetter`, `CollisionGetter`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `centerX` | `int` |  |
| `centerZ` | `int` |  |
| `chunks` | `ChunkAccess[][]` |  |
| `allEmpty` | `boolean` |  |
| `level` | `Level` |  |

## Methods

### PathNavigationRegion

```java
public PathNavigationRegion(Level p_47164_, BlockPos p_47165_, BlockPos p_47166_)
```

**Parameters:**

- `p_47164_` (`Level`)
- `p_47165_` (`BlockPos`)
- `p_47166_` (`BlockPos`)

**Returns:** `public`

### getChunk

```java
private ChunkAccess getChunk(BlockPos p_47186_)
```

**Parameters:**

- `p_47186_` (`BlockPos`)

**Returns:** `private ChunkAccess`

### getChunk

```java
private ChunkAccess getChunk(int p_47168_, int p_47169_)
```

**Parameters:**

- `p_47168_` (`int`)
- `p_47169_` (`int`)

**Returns:** `private ChunkAccess`

### getWorldBorder

```java
public WorldBorder getWorldBorder()
```

**Returns:** `WorldBorder`

### getChunkForCollisions

```java
public BlockGetter getChunkForCollisions(int p_47173_, int p_47174_)
```

**Parameters:**

- `p_47173_` (`int`)
- `p_47174_` (`int`)

**Returns:** `BlockGetter`

### getEntityCollisions

```java
public List<VoxelShape> getEntityCollisions(Entity p_186557_, AABB p_186558_)
```

**Parameters:**

- `p_186557_` (`Entity`)
- `p_186558_` (`AABB`)

**Returns:** `List<VoxelShape>`

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_47180_)
```

**Parameters:**

- `p_47180_` (`BlockPos`)

**Returns:** `BlockEntity`

### getBlockState

```java
public BlockState getBlockState(BlockPos p_47188_)
```

**Parameters:**

- `p_47188_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_47171_)
```

**Parameters:**

- `p_47171_` (`BlockPos`)

**Returns:** `FluidState`

### getMinBuildHeight

```java
public int getMinBuildHeight()
```

**Returns:** `int`

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### getProfiler

```java
public ProfilerFiller getProfiler()
```

**Returns:** `public ProfilerFiller`
