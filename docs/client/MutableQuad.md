# MutableQuad

**Package:** `net.neoforged.neoforge.client.model.quad`
**Type:** class
**Side:** 🖥️ Client

## Description

A mutable representation of a `BakedQuad`.


This class can be used for constructing quads from scratch, or for loading and modifying existing quads.


It provides several utility methods that go beyond simply manipulating the attributes of the quad:

`#setCubeFaceFromSpriteCoords(Direction, float, float, float, float, float)` generates the positions of a face by using a 2D coordinate system as if you were looking at the sprite textured on that face.
`#setCubeFace(Direction, Vector3fc, Vector3fc)` generates the positions of a 3D cube face by giving the cubes extent.
`#bakeUvsFromPosition(UVTransform)` generates the texture coordinates of the quad similar to how Vanilla block models do, with optional transformations.
`#recalculateWinding()` can reorder the vertices of the quad to match the vertex order expected by Vanilla ambient occlusion for axis-aligned quads.
`#setSpriteAndMoveUv(Material.Baked, Transparency)` and `#setSpriteAndMoveUv(TextureAtlasSprite, ChunkSectionLayer, RenderType)` can change the sprite used by a quad while remapping the atlas uv automatically.


## Methods

### y

```java
public float y(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### z

```java
public float z(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### positionComponent

```java
public float positionComponent(int vertexIndex, int componentIndex)
```

**Parameters:**

- `vertexIndex` (`int`)
- `componentIndex` (`int`)

**Returns:** `float`

### copyPosition

```java
public Vector3f copyPosition(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `Vector3f`

### Vector3f

```java
return new Vector3f()
```

**Returns:** `return new`

### copyPosition

```java
public Vector3f copyPosition(int vertexIndex, Vector3f dest)
```

**Parameters:**

- `vertexIndex` (`int`)
- `dest` (`Vector3f`)

**Returns:** `Vector3f`

### setX

```java
public MutableQuad setX(int vertexIndex, float x)
```

**Parameters:**

- `vertexIndex` (`int`)
- `x` (`float`)

**Returns:** `MutableQuad`

### setY

```java
public MutableQuad setY(int vertexIndex, float y)
```

**Parameters:**

- `vertexIndex` (`int`)
- `y` (`float`)

**Returns:** `MutableQuad`

### setZ

```java
public MutableQuad setZ(int vertexIndex, float z)
```

**Parameters:**

- `vertexIndex` (`int`)
- `z` (`float`)

**Returns:** `MutableQuad`

### setPositionComponent

```java
public MutableQuad setPositionComponent(int vertexIndex, int componentIndex, float value)
```

**Parameters:**

- `vertexIndex` (`int`)
- `componentIndex` (`int`)
- `value` (`float`)

**Returns:** `MutableQuad`

### setPosition

```java
public MutableQuad setPosition(int vertexIndex, float x, float y, float z)
```

**Parameters:**

- `vertexIndex` (`int`)
- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `MutableQuad`

### setPosition

```java
public MutableQuad setPosition(int vertexIndex, Vector3fc position)
```

**Parameters:**

- `vertexIndex` (`int`)
- `position` (`Vector3fc`)

**Returns:** `MutableQuad`

### setCubeFaceFromSpriteCoords

```java
public MutableQuad setCubeFaceFromSpriteCoords(Direction side, float left, float bottom, float right, float top, float depth)
```

**Parameters:**

- `side` (`Direction`)
- `left` (`float`)
- `bottom` (`float`)
- `right` (`float`)
- `top` (`float`)
- `depth` (`float`)

**Returns:** `MutableQuad`

### setFullCubeFace

```java
public MutableQuad setFullCubeFace(Direction side)
```

**Parameters:**

- `side` (`Direction`)

**Returns:** `MutableQuad`

### setCubeFace

```java
return setCubeFace()
```

**Returns:** `return`

### setCubeFace

```java
public MutableQuad setCubeFace(Direction side, Vector3fc from, Vector3fc to)
```

**Parameters:**

- `side` (`Direction`)
- `from` (`Vector3fc`)
- `to` (`Vector3fc`)

**Returns:** `MutableQuad`

### setCubeFace

```java
public MutableQuad setCubeFace(Direction side, float fromX, float fromY, float fromZ, float toX, float toY, float toZ)
```

**Parameters:**

- `side` (`Direction`)
- `fromX` (`float`)
- `fromY` (`float`)
- `fromZ` (`float`)
- `toX` (`float`)
- `toY` (`float`)
- `toZ` (`float`)

**Returns:** `MutableQuad`

### u

```java
public float u(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### v

```java
public float v(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### uvComponent

```java
public float uvComponent(int vertexIndex, int componentIndex)
```

**Parameters:**

- `vertexIndex` (`int`)
- `componentIndex` (`int`)

**Returns:** `float`

### u

```java
> u()
```

**Returns:** `>`

### v

```java
> v()
```

**Returns:** `>`

### IllegalArgumentException

```java
> throw new IllegalArgumentException("Invalid UV index: " + componentIndex)
```

**Parameters:**

- `componentIndex` (`"Invalid UV index: " +`)

**Returns:** `> throw new`

### packedUv

```java
public long packedUv(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `long`

### copyUv

```java
public Vector2f copyUv(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `Vector2f`

### copyUv

```java
public Vector2f copyUv(int vertexIndex, Vector2f dest)
```

**Parameters:**

- `vertexIndex` (`int`)
- `dest` (`Vector2f`)

**Returns:** `Vector2f`

### setUv

```java
public MutableQuad setUv(int vertexIndex, float u, float v)
```

**Parameters:**

- `vertexIndex` (`int`)
- `u` (`float`)
- `v` (`float`)

**Returns:** `MutableQuad`

### setUv

```java
public MutableQuad setUv(int vertexIndex, Vector2fc uv)
```

**Parameters:**

- `vertexIndex` (`int`)
- `uv` (`Vector2fc`)

**Returns:** `MutableQuad`

### setUvComponent

```java
public MutableQuad setUvComponent(int vertexIndex, int componentIndex, float value)
```

**Parameters:**

- `vertexIndex` (`int`)
- `componentIndex` (`int`)
- `value` (`float`)

**Returns:** `MutableQuad`

### IllegalArgumentException

```java
> throw new IllegalArgumentException("Invalid UV index: " + componentIndex)
```

**Parameters:**

- `componentIndex` (`"Invalid UV index: " +`)

**Returns:** `> throw new`

### setPackedUv

```java
public MutableQuad setPackedUv(int vertexIndex, long packedUv)
```

**Parameters:**

- `vertexIndex` (`int`)
- `packedUv` (`long`)

**Returns:** `MutableQuad`

### setUvFromSprite

```java
public MutableQuad setUvFromSprite(int vertexIndex, float u, float v)
```

**Parameters:**

- `vertexIndex` (`int`)
- `u` (`float`)
- `v` (`float`)

**Returns:** `MutableQuad`

### setUvFromSprite

```java
public MutableQuad setUvFromSprite(int vertexIndex, Vector2fc uv)
```

**Parameters:**

- `vertexIndex` (`int`)
- `uv` (`Vector2fc`)

**Returns:** `MutableQuad`

### bakeUvsFromPosition

```java
public MutableQuad bakeUvsFromPosition()
```

**Returns:** `MutableQuad`

### bakeUvsFromPosition

```java
return bakeUvsFromPosition()
```

**Returns:** `return`

### bakeUvsFromPosition

```java
public MutableQuad bakeUvsFromPosition(UVTransform transform)
```

**Parameters:**

- `transform` (`UVTransform`)

**Returns:** `MutableQuad`

### transformUvsFromSpriteToAtlas

```java
 transformUvsFromSpriteToAtlas()
```

**Returns:** ``

### tintIndex

```java
public int tintIndex()
```

**Returns:** `int`

### setTintIndex

```java
public MutableQuad setTintIndex(int tintIndex)
```

**Parameters:**

- `tintIndex` (`int`)

**Returns:** `public MutableQuad`

### direction

```java
public Direction direction()
```

**Returns:** `Direction`

### setDirection

```java
public MutableQuad setDirection(Direction direction)
```

**Parameters:**

- `direction` (`Direction`)

**Returns:** `public MutableQuad`

### sprite

```java
public TextureAtlasSprite sprite()
```

**Returns:** `TextureAtlasSprite`

### requiredSprite

```java
public TextureAtlasSprite requiredSprite()
```

**Returns:** `TextureAtlasSprite`

### IllegalStateException

```java
throw new IllegalStateException("A sprite has to be set on this quad before UVs are manipulated")
```

**Parameters:**

- `manipulated"` (`"A sprite has to be set on this quad before UVs are`)

**Returns:** `throw new`

### chunkLayer

```java
public ChunkSectionLayer chunkLayer()
```

**Returns:** `ChunkSectionLayer`

### requiredChunkLayer

```java
public ChunkSectionLayer requiredChunkLayer()
```

**Returns:** `ChunkSectionLayer`

### IllegalStateException

```java
throw new IllegalStateException("A ChunkSectionLayer has to be set on this quad before baking")
```

**Parameters:**

- `baking"` (`"A ChunkSectionLayer has to be set on this quad before`)

**Returns:** `throw new`

### itemRenderType

```java
public RenderType itemRenderType()
```

**Returns:** `RenderType`

### requiredItemRenderType

```java
public RenderType requiredItemRenderType()
```

**Returns:** `RenderType`

### IllegalStateException

```java
throw new IllegalStateException("An item RenderType has to be set on this quad before baking")
```

**Parameters:**

- `baking"` (`"An item RenderType has to be set on this quad before`)

**Returns:** `throw new`

### setSprite

```java
public MutableQuad setSprite(Material.Baked material, Transparency transparency)
```

**Parameters:**

- `material` (`Material.Baked`)
- `transparency` (`Transparency`)

**Returns:** `MutableQuad`

### setSprite

```java
public MutableQuad setSprite(TextureAtlasSprite sprite, ChunkSectionLayer chunkLayer, RenderType itemRenderType)
```

**Parameters:**

- `sprite` (`TextureAtlasSprite`)
- `chunkLayer` (`ChunkSectionLayer`)
- `itemRenderType` (`RenderType`)

**Returns:** `MutableQuad`

### setSpriteAndMoveUv

```java
public MutableQuad setSpriteAndMoveUv(Material.Baked material, Transparency transparency)
```

**Parameters:**

- `material` (`Material.Baked`)
- `transparency` (`Transparency`)

**Returns:** `MutableQuad`

### transformUvsFromAtlasToSprite

```java
 transformUvsFromAtlasToSprite()
```

**Returns:** ``

### setSprite

```java
 setSprite()
```

**Returns:** ``

### transformUvsFromSpriteToAtlas

```java
 transformUvsFromSpriteToAtlas()
```

**Returns:** ``

### setSpriteAndMoveUv

```java
public MutableQuad setSpriteAndMoveUv(TextureAtlasSprite sprite, ChunkSectionLayer chunkLayer, RenderType itemRenderType)
```

**Parameters:**

- `sprite` (`TextureAtlasSprite`)
- `chunkLayer` (`ChunkSectionLayer`)
- `itemRenderType` (`RenderType`)

**Returns:** `MutableQuad`

### transformUvsFromAtlasToSprite

```java
 transformUvsFromAtlasToSprite()
```

**Returns:** ``

### setSprite

```java
 setSprite()
```

**Returns:** ``

### transformUvsFromSpriteToAtlas

```java
 transformUvsFromSpriteToAtlas()
```

**Returns:** ``

### shade

```java
public boolean shade()
```

**Returns:** `boolean`

### setShade

```java
public MutableQuad setShade(boolean shade)
```

**Parameters:**

- `shade` (`boolean`)

**Returns:** `public MutableQuad`

### lightEmission

```java
public int lightEmission()
```

**Returns:** `int`

### setLightEmission

```java
public MutableQuad setLightEmission(int lightEmission)
```

**Parameters:**

- `lightEmission` (`int`)

**Returns:** `public MutableQuad`

### normalX

```java
public float normalX(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### normalComponent

```java
return normalComponent()
```

**Returns:** `return`

### normalY

```java
public float normalY(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### normalComponent

```java
return normalComponent()
```

**Returns:** `return`

### normalZ

```java
public float normalZ(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `float`

### normalComponent

```java
return normalComponent()
```

**Returns:** `return`

### normalComponent

```java
public float normalComponent(int vertexIndex, int componentIndex)
```

**Parameters:**

- `vertexIndex` (`int`)
- `componentIndex` (`int`)

**Returns:** `float`

### packedNormal

```java
public int packedNormal(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `int`

### copyNormal

```java
public Vector3f copyNormal(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `Vector3f`

### copyNormal

```java
public Vector3f copyNormal(int vertexIndex, Vector3f dest)
```

**Parameters:**

- `vertexIndex` (`int`)
- `dest` (`Vector3f`)

**Returns:** `Vector3f`

### setNormal

```java
public MutableQuad setNormal(int vertexIndex, float x, float y, float z)
```

**Parameters:**

- `vertexIndex` (`int`)
- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `MutableQuad`

### setNormal

```java
public MutableQuad setNormal(int vertexIndex, Vector3fc normal)
```

**Parameters:**

- `vertexIndex` (`int`)
- `normal` (`Vector3fc`)

**Returns:** `MutableQuad`

### setNormalComponent

```java
public MutableQuad setNormalComponent(int vertexIndex, int componentIndex, float value)
```

**Parameters:**

- `vertexIndex` (`int`)
- `componentIndex` (`int`)
- `value` (`float`)

**Returns:** `MutableQuad`

### IllegalArgumentException

```java
> throw new IllegalArgumentException()
```

**Returns:** `> throw new`

### setPackedNormal

```java
public MutableQuad setPackedNormal(int vertexIndex, int packedNormal)
```

**Parameters:**

- `vertexIndex` (`int`)
- `packedNormal` (`int`)

**Returns:** `MutableQuad`

### setNormal

```java
public MutableQuad setNormal(BakedNormals bakedNormals)
```

**Parameters:**

- `bakedNormals` (`BakedNormals`)

**Returns:** `MutableQuad`

### recomputeNormals

```java
public MutableQuad recomputeNormals(boolean updateDirection)
```

**Parameters:**

- `updateDirection` (`boolean`)

**Returns:** `MutableQuad`

### color

```java
public int color(int vertexIndex)
```

**Parameters:**

- `vertexIndex` (`int`)

**Returns:** `int`

### setColor

```java
public MutableQuad setColor(int packedColor)
```

**Parameters:**

- `packedColor` (`int`)

**Returns:** `MutableQuad`

### setColor

```java
public MutableQuad setColor(int vertexIndex, int packedColor)
```

**Parameters:**

- `vertexIndex` (`int`)
- `packedColor` (`int`)

**Returns:** `MutableQuad`

### setColor

```java
public MutableQuad setColor(int vertexIndex, int r, int g, int b, int a)
```

**Parameters:**

- `vertexIndex` (`int`)
- `r` (`int`)
- `g` (`int`)
- `b` (`int`)
- `a` (`int`)

**Returns:** `MutableQuad`

### setColor

```java
public MutableQuad setColor(BakedColors bakedColors)
```

**Parameters:**

- `bakedColors` (`BakedColors`)

**Returns:** `MutableQuad`

### hasAmbientOcclusion

```java
public boolean hasAmbientOcclusion()
```

**Returns:** `boolean`

### setAmbientOcclusion

```java
public MutableQuad setAmbientOcclusion(boolean ambientOcclusion)
```

**Parameters:**

- `ambientOcclusion` (`boolean`)

**Returns:** `public MutableQuad`

### setFrom

```java
public MutableQuad setFrom(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

**Returns:** `public MutableQuad`

### setUv

```java
 setUv()
```

**Returns:** ``

### toBakedQuad

```java
public BakedQuad toBakedQuad()
```

**Returns:** `BakedQuad`

### BakedQuad

```java
return new BakedQuad()
```

**Returns:** `return new`

### Vector3f

```java
return new Vector3f()
```

**Returns:** `return new`

### transform

```java
public MutableQuad transform(Matrix4f rotation)
```

**Parameters:**

- `rotation` (`Matrix4f`)

**Returns:** `MutableQuad`

### recalculateWinding

```java
public MutableQuad recalculateWinding()
```

**Returns:** `MutableQuad`

### copy

```java
public MutableQuad copy()
```

**Returns:** `MutableQuad`

### copyInto

```java
public MutableQuad copyInto(MutableQuad dest)
```

**Parameters:**

- `dest` (`MutableQuad`)

**Returns:** `MutableQuad`

### reset

```java
public MutableQuad reset()
```

**Returns:** `public MutableQuad`
