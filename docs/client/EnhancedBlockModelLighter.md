# EnhancedBlockModelLighter

**Package:** `net.neoforged.neoforge.client.model.ao`
**Type:** class
**Extends:** `BlockModelLighter`
**Side:** 🖥️ Client

## Description

Entrypoint and main class of our enhanced AO pipeline.


Vanilla's AO logic works well for faces that are axis-aligned.
That computation is replicated in `FullFaceCalculator`, with some bug fixes.
The job of the enhanced pipeline is to handle faces that are more complicated,
by combining multiple full faces as needed using interpolation.


Compared to vanilla, we also remove any assumption about vertex order in the quad.

## Methods

### newInstance

```java
public static BlockModelLighter newInstance()
```

**Returns:** `public static BlockModelLighter`

### EnhancedBlockModelLighter

```java
return new EnhancedBlockModelLighter()
```

**Returns:** `return new`

### BlockModelLighter

```java
return new BlockModelLighter()
```

**Returns:** `return new`

### AssertionError

```java
> throw new AssertionError()
```

**Returns:** `> throw new`

### prepareQuadFlat

```java
public void prepareQuadFlat(BlockAndTintGetter level, BlockState state, BlockPos pos, int lightCoords, BakedQuad quad, QuadInstance outputInstance)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `state` (`BlockState`)
- `pos` (`BlockPos`)
- `lightCoords` (`int`)
- `quad` (`BakedQuad`)
- `outputInstance` (`QuadInstance`)

### AssertionError

```java
> throw new AssertionError()
```

**Returns:** `> throw new`

### maxLightmap

```java
static int maxLightmap(int lightmap1, int lightmap2)
```

**Parameters:**

- `lightmap1` (`int`)
- `lightmap2` (`int`)

**Returns:** `static int`
