# QuadBakingVertexConsumer

**Package:** `net.neoforged.neoforge.client.model.pipeline`
**Type:** class
**Implements:** `VertexConsumer`
**Side:** 🖥️ Client

## Description

Vertex consumer that outputs BakedQuad baked quads.



This consumer accepts data in `com.mojang.blaze3d.vertex.DefaultVertexFormat#BLOCK` and is not picky about
ordering or missing elements, but will not automatically populate missing data (color will be black, for example).



Built quads must be retrieved after building four vertices

## Methods

### addVertex

```java
public VertexConsumer addVertex(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `VertexConsumer`

### IllegalStateException

```java
throw new IllegalStateException("Expected quad export after fourth vertex")
```

**Parameters:**

- `vertex"` (`"Expected quad export after fourth`)

**Returns:** `throw new`

### setNormal

```java
public VertexConsumer setNormal(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `VertexConsumer`

### setColor

```java
public VertexConsumer setColor(int r, int g, int b, int a)
```

**Parameters:**

- `r` (`int`)
- `g` (`int`)
- `b` (`int`)
- `a` (`int`)

**Returns:** `VertexConsumer`

### setUv

```java
public VertexConsumer setUv(float u, float v)
```

**Parameters:**

- `u` (`float`)
- `v` (`float`)

**Returns:** `VertexConsumer`

### setUv1

```java
public VertexConsumer setUv1(int u, int v)
```

**Parameters:**

- `u` (`int`)
- `v` (`int`)

**Returns:** `VertexConsumer`

### setUv2

```java
public VertexConsumer setUv2(int u, int v)
```

**Parameters:**

- `u` (`int`)
- `v` (`int`)

**Returns:** `VertexConsumer`

### misc

```java
public VertexConsumer misc(VertexFormatElement element, int[]... rawData)
```

**Parameters:**

- `element` (`VertexFormatElement`)
- `rawData` (`int[]...`)

**Returns:** `VertexConsumer`

### setTintIndex

```java
public void setTintIndex(int tintIndex)
```

**Parameters:**

- `tintIndex` (`int`)

**Returns:** `public void`

### setDirection

```java
public void setDirection(Direction direction)
```

**Parameters:**

- `direction` (`Direction`)

**Returns:** `public void`

### setSprite

```java
public void setSprite(TextureAtlasSprite sprite)
```

**Parameters:**

- `sprite` (`TextureAtlasSprite`)

**Returns:** `public void`

### setShade

```java
public void setShade(boolean shade)
```

**Parameters:**

- `shade` (`boolean`)

**Returns:** `public void`

### setHasAmbientOcclusion

```java
public void setHasAmbientOcclusion(boolean hasAmbientOcclusion)
```

**Parameters:**

- `hasAmbientOcclusion` (`boolean`)

**Returns:** `public void`

### bakeQuad

```java
public BakedQuad bakeQuad()
```

**Returns:** `public BakedQuad`

### IllegalStateException

```java
throw new IllegalStateException("Not enough vertices available. Vertices in buffer: " + vertexIndex)
```

**Parameters:**

- `vertexIndex` (`"Not enough vertices available. Vertices in buffer: " +`)

**Returns:** `throw new`
