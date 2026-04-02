# RenderChunkRegion

**Package:** `net.minecraft.client.renderer.chunk`
**Type:** class
**Implements:** `BlockAndTintGetter`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RADIUS` | `int` |  |
| `SIZE` | `int` |  |
| `chunks` | `RenderChunk[]` |  |
| `level` | `Level` |  |

## Methods

### RenderChunkRegion

```java
 RenderChunkRegion(Level p_200456_, int p_200457_, int p_200458_, RenderChunk[] p_350680_)
```

**Parameters:**

- `p_200456_` (`Level`)
- `p_200457_` (`int`)
- `p_200458_` (`int`)
- `p_350680_` (`RenderChunk[]`)

**Returns:** ``

### this

```java
 this()
```

**Returns:** ``

### RenderChunkRegion

```java
 RenderChunkRegion(Level p_200456_, int p_200457_, int p_200458_, RenderChunk[] p_350680_, it.unimi.dsi.fastutil.longs.Long2ObjectFunction<net.neoforged.neoforge.client.model.data.ModelData> modelDataSnapshot)
```

**Parameters:**

- `p_200456_` (`Level`)
- `p_200457_` (`int`)
- `p_200458_` (`int`)
- `p_350680_` (`RenderChunk[]`)
- `modelDataSnapshot` (`it.unimi.dsi.fastutil.longs.Long2ObjectFunction<net.neoforged.neoforge.client.model.data.ModelData>`)

**Returns:** ``

### getBlockState

```java
public BlockState getBlockState(BlockPos p_112947_)
```

**Parameters:**

- `p_112947_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_112943_)
```

**Parameters:**

- `p_112943_` (`BlockPos`)

**Returns:** `FluidState`

### getShade

```java
public float getShade(Direction p_112940_, boolean p_112941_)
```

**Parameters:**

- `p_112940_` (`Direction`)
- `p_112941_` (`boolean`)

**Returns:** `float`

### getLightEngine

```java
public LevelLightEngine getLightEngine()
```

**Returns:** `LevelLightEngine`

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_112945_)
```

**Parameters:**

- `p_112945_` (`BlockPos`)

**Returns:** `BlockEntity`

### getChunk

```java
private RenderChunk getChunk(int p_350795_, int p_350558_)
```

**Parameters:**

- `p_350795_` (`int`)
- `p_350558_` (`int`)

**Returns:** `private RenderChunk`

### getBlockTint

```java
public int getBlockTint(BlockPos p_112937_, ColorResolver p_112938_)
```

**Parameters:**

- `p_112937_` (`BlockPos`)
- `p_112938_` (`ColorResolver`)

**Returns:** `int`

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

### getShade

```java
public float getShade(float normalX, float normalY, float normalZ, boolean shade)
```

**Parameters:**

- `normalX` (`float`)
- `normalY` (`float`)
- `normalZ` (`float`)
- `shade` (`boolean`)

**Returns:** `float`

### getModelData

```java
public net.neoforged.neoforge.client.model.data.ModelData getModelData(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

**Returns:** `net.neoforged.neoforge.client.model.data.ModelData`

### getAuxLightManager

```java
public net.neoforged.neoforge.common.world.AuxiliaryLightManager getAuxLightManager(net.minecraft.world.level.ChunkPos pos)
```

**Parameters:**

- `pos` (`net.minecraft.world.level.ChunkPos`)

**Returns:** `net.neoforged.neoforge.common.world.AuxiliaryLightManager`

### index

```java
public static int index(int p_350911_, int p_350842_, int p_350891_, int p_350833_)
```

**Parameters:**

- `p_350911_` (`int`)
- `p_350842_` (`int`)
- `p_350891_` (`int`)
- `p_350833_` (`int`)

**Returns:** `public static int`
