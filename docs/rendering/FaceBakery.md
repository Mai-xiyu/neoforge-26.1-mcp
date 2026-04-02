# FaceBakery

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `VERTEX_INT_SIZE` | `int` |  |
| `VERTEX_COUNT` | `int` |  |
| `UV_INDEX` | `int` |  |

## Methods

### bakeQuad

```java
public BakedQuad bakeQuad(Vector3f p_253895_, Vector3f p_253976_, BlockElementFace p_111603_, TextureAtlasSprite p_111604_, Direction p_111605_, ModelState p_111606_, BlockElementRotation p_111607_, boolean p_111608_)
```

**Parameters:**

- `p_253895_` (`Vector3f`)
- `p_253976_` (`Vector3f`)
- `p_111603_` (`BlockElementFace`)
- `p_111604_` (`TextureAtlasSprite`)
- `p_111605_` (`Direction`)
- `p_111606_` (`ModelState`)
- `p_111607_` (`BlockElementRotation`)
- `p_111608_` (`boolean`)

**Returns:** `public BakedQuad`

### recomputeUVs

```java
public static BlockFaceUV recomputeUVs(BlockFaceUV p_111582_, Direction p_111583_, Transformation p_111584_)
```

**Parameters:**

- `p_111582_` (`BlockFaceUV`)
- `p_111583_` (`Direction`)
- `p_111584_` (`Transformation`)

**Returns:** `public static BlockFaceUV`

### BlockFaceUV

```java
return new BlockFaceUV(new float[]{f8)
```

**Parameters:**

- `float[]{f8` (`new`)

**Returns:** `return new`

### makeVertices

```java
private int[] makeVertices(BlockFaceUV p_111574_, TextureAtlasSprite p_111575_, Direction p_111576_, float[] p_111577_, Transformation p_111578_, BlockElementRotation p_111579_, boolean p_111580_)
```

**Parameters:**

- `p_111574_` (`BlockFaceUV`)
- `p_111575_` (`TextureAtlasSprite`)
- `p_111576_` (`Direction`)
- `p_111577_` (`float[]`)
- `p_111578_` (`Transformation`)
- `p_111579_` (`BlockElementRotation`)
- `p_111580_` (`boolean`)

**Returns:** `private int[]`

### setupShape

```java
private float[] setupShape(Vector3f p_254153_, Vector3f p_253934_)
```

**Parameters:**

- `p_254153_` (`Vector3f`)
- `p_253934_` (`Vector3f`)

**Returns:** `private float[]`

### bakeVertex

```java
private void bakeVertex(int[] p_111621_, int p_111622_, Direction p_111623_, BlockFaceUV p_111624_, float[] p_111625_, TextureAtlasSprite p_111626_, Transformation p_111627_, BlockElementRotation p_111628_, boolean p_111629_)
```

**Parameters:**

- `p_111621_` (`int[]`)
- `p_111622_` (`int`)
- `p_111623_` (`Direction`)
- `p_111624_` (`BlockFaceUV`)
- `p_111625_` (`float[]`)
- `p_111626_` (`TextureAtlasSprite`)
- `p_111627_` (`Transformation`)
- `p_111628_` (`BlockElementRotation`)
- `p_111629_` (`boolean`)

**Returns:** `private void`

### fillVertex

```java
private void fillVertex(int[] p_111615_, int p_111616_, Vector3f p_254291_, TextureAtlasSprite p_111618_, BlockFaceUV p_111619_)
```

**Parameters:**

- `p_111615_` (`int[]`)
- `p_111616_` (`int`)
- `p_254291_` (`Vector3f`)
- `p_111618_` (`TextureAtlasSprite`)
- `p_111619_` (`BlockFaceUV`)

**Returns:** `private void`

### applyElementRotation

```java
private void applyElementRotation(Vector3f p_254412_, BlockElementRotation p_254150_)
```

**Parameters:**

- `p_254412_` (`Vector3f`)
- `p_254150_` (`BlockElementRotation`)

**Returns:** `private void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("There are only 3 axes")
```

**Parameters:**

- `axes"` (`"There are only 3`)

**Returns:** `throw new`

### applyModelRotation

```java
public void applyModelRotation(Vector3f p_254561_, Transformation p_253793_)
```

**Parameters:**

- `p_254561_` (`Vector3f`)
- `p_253793_` (`Transformation`)

**Returns:** `public void`

### rotateVertexBy

```java
private void rotateVertexBy(Vector3f p_253804_, Vector3f p_253835_, Matrix4f p_253730_, Vector3f p_254056_)
```

**Parameters:**

- `p_253804_` (`Vector3f`)
- `p_253835_` (`Vector3f`)
- `p_253730_` (`Matrix4f`)
- `p_254056_` (`Vector3f`)

**Returns:** `private void`

### calculateFacing

```java
public static Direction calculateFacing(int[] p_111613_)
```

**Parameters:**

- `p_111613_` (`int[]`)

**Returns:** `public static Direction`

### recalculateWinding

```java
private void recalculateWinding(int[] p_111631_, Direction p_111632_)
```

**Parameters:**

- `p_111631_` (`int[]`)
- `p_111632_` (`Direction`)

**Returns:** `private void`
