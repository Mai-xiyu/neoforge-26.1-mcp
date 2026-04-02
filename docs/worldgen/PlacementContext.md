# PlacementContext

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `WorldGenerationContext`

## Methods

### PlacementContext

```java
public PlacementContext(WorldGenLevel p_191818_, ChunkGenerator p_191819_, Optional<PlacedFeature> p_191820_)
```

**Parameters:**

- `p_191818_` (`WorldGenLevel`)
- `p_191819_` (`ChunkGenerator`)
- `p_191820_` (`Optional<PlacedFeature>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getHeight

```java
public int getHeight(Heightmap.Types p_191825_, int p_191826_, int p_191827_)
```

**Parameters:**

- `p_191825_` (`Heightmap.Types`)
- `p_191826_` (`int`)
- `p_191827_` (`int`)

**Returns:** `public int`

### getCarvingMask

```java
public CarvingMask getCarvingMask(ChunkPos p_191822_, GenerationStep.Carving p_191823_)
```

**Parameters:**

- `p_191822_` (`ChunkPos`)
- `p_191823_` (`GenerationStep.Carving`)

**Returns:** `public CarvingMask`

### getBlockState

```java
public BlockState getBlockState(BlockPos p_191829_)
```

**Parameters:**

- `p_191829_` (`BlockPos`)

**Returns:** `public BlockState`

### getMinBuildHeight

```java
public int getMinBuildHeight()
```

**Returns:** `public int`

### getLevel

```java
public WorldGenLevel getLevel()
```

**Returns:** `public WorldGenLevel`

### topFeature

```java
public Optional<PlacedFeature> topFeature()
```

**Returns:** `public Optional<PlacedFeature>`

### generator

```java
public ChunkGenerator generator()
```

**Returns:** `public ChunkGenerator`
