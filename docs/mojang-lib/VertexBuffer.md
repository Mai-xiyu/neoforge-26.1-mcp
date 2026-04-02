# VertexBuffer

**Package:** `com.mojang.blaze3d.vertex`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### VertexBuffer

```java
public VertexBuffer(VertexBuffer.Usage p_286252_)
```

**Parameters:**

- `p_286252_` (`VertexBuffer.Usage`)

**Returns:** `public`

### upload

```java
public void upload(MeshData p_350419_)
```

**Parameters:**

- `p_350419_` (`MeshData`)

**Returns:** `public void`

### uploadIndexBuffer

```java
public void uploadIndexBuffer(ByteBufferBuilder.Result p_350937_)
```

**Parameters:**

- `p_350937_` (`ByteBufferBuilder.Result`)

**Returns:** `public void`

### uploadVertexBuffer

```java
private VertexFormat uploadVertexBuffer(MeshData.DrawState p_350866_, ByteBuffer p_231220_)
```

**Parameters:**

- `p_350866_` (`MeshData.DrawState`)
- `p_231220_` (`ByteBuffer`)

**Returns:** `private VertexFormat`

### bind

```java
public void bind()
```

**Returns:** `public void`

### unbind

```java
public static void unbind()
```

**Returns:** `public static void`

### draw

```java
public void draw()
```

**Returns:** `public void`

### getIndexType

```java
private VertexFormat.IndexType getIndexType()
```

**Returns:** `private VertexFormat.IndexType`

### drawWithShader

```java
public void drawWithShader(Matrix4f p_254480_, Matrix4f p_254555_, ShaderInstance p_253993_)
```

**Parameters:**

- `p_254480_` (`Matrix4f`)
- `p_254555_` (`Matrix4f`)
- `p_253993_` (`ShaderInstance`)

**Returns:** `public void`

### _drawWithShader

```java
private void _drawWithShader(Matrix4f p_253705_, Matrix4f p_253737_, ShaderInstance p_166879_)
```

**Parameters:**

- `p_253705_` (`Matrix4f`)
- `p_253737_` (`Matrix4f`)
- `p_166879_` (`ShaderInstance`)

**Returns:** `private void`

### close

```java
public void close()
```

### getFormat

```java
public VertexFormat getFormat()
```

**Returns:** `public VertexFormat`

### isInvalid

```java
public boolean isInvalid()
```

**Returns:** `public boolean`

### DYNAMIC

```java
, DYNAMIC()
```

**Returns:** `,`

### Usage

```java
private Usage(int p_286680_)
```

**Parameters:**

- `p_286680_` (`int`)

**Returns:** `private`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Usage` | enum |  |
