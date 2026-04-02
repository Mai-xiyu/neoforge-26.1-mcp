# MeshData

**Package:** `com.mojang.blaze3d.vertex`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MeshData

```java
public MeshData(ByteBufferBuilder.Result p_350637_, MeshData.DrawState p_350712_)
```

**Parameters:**

- `p_350637_` (`ByteBufferBuilder.Result`)
- `p_350712_` (`MeshData.DrawState`)

**Returns:** `public`

### unpackQuadCentroids

```java
private static Vector3f[] unpackQuadCentroids(ByteBuffer p_350488_, int p_350671_, VertexFormat p_350665_)
```

**Parameters:**

- `p_350488_` (`ByteBuffer`)
- `p_350671_` (`int`)
- `p_350665_` (`VertexFormat`)

**Returns:** `private static Vector3f[]`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Cannot identify quad centers with no position element")
```

**Parameters:**

- `element"` (`"Cannot identify quad centers with no position`)

**Returns:** `throw new`

### vertexBuffer

```java
public ByteBuffer vertexBuffer()
```

**Returns:** `public ByteBuffer`

### indexBuffer

```java
public ByteBuffer indexBuffer()
```

**Returns:** `ByteBuffer`

### drawState

```java
public MeshData.DrawState drawState()
```

**Returns:** `public MeshData.DrawState`

### sortQuads

```java
public MeshData.SortState sortQuads(ByteBufferBuilder p_350540_, VertexSorting p_350720_)
```

**Parameters:**

- `p_350540_` (`ByteBufferBuilder`)
- `p_350720_` (`VertexSorting`)

**Returns:** `MeshData.SortState`

### close

```java
public void close()
```

### DrawState

```java
public static record DrawState(VertexFormat format, int vertexCount, int indexCount, VertexFormat.Mode mode, VertexFormat.IndexType indexType)
```

**Parameters:**

- `format` (`VertexFormat`)
- `vertexCount` (`int`)
- `indexCount` (`int`)
- `mode` (`VertexFormat.Mode`)
- `indexType` (`VertexFormat.IndexType`)

**Returns:** `record`

### SortState

```java
public static record SortState(Vector3f[] centroids, VertexFormat.IndexType indexType)
```

**Parameters:**

- `centroids` (`Vector3f[]`)
- `indexType` (`VertexFormat.IndexType`)

**Returns:** `record`

### buildSortedIndexBuffer

```java
public ByteBufferBuilder.Result buildSortedIndexBuffer(ByteBufferBuilder p_351024_, VertexSorting p_350537_)
```

**Parameters:**

- `p_351024_` (`ByteBufferBuilder`)
- `p_350537_` (`VertexSorting`)

**Returns:** `ByteBufferBuilder.Result`

### indexWriter

```java
private IntConsumer indexWriter(long p_350877_, VertexFormat.IndexType p_350389_)
```

**Parameters:**

- `p_350877_` (`long`)
- `p_350389_` (`VertexFormat.IndexType`)

**Returns:** `private IntConsumer`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DrawState` | record |  |
| `SortState` | record |  |
