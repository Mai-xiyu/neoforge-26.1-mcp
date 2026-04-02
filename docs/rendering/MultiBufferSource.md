# MultiBufferSource

**Package:** `net.minecraft.client.renderer`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `sharedBuffer` | `ByteBufferBuilder` |  |
| `fixedBuffers` | `SequencedMap<RenderType, ByteBufferBuilder>` |  |
| `startedBuilders` | `Map<RenderType, BufferBuilder>` |  |

## Methods

### immediate

```java
static MultiBufferSource.BufferSource immediate(ByteBufferBuilder p_350664_)
```

**Parameters:**

- `p_350664_` (`ByteBufferBuilder`)

**Returns:** `static MultiBufferSource.BufferSource`

### immediateWithBuffers

```java
static MultiBufferSource.BufferSource immediateWithBuffers(SequencedMap<RenderType, ByteBufferBuilder> p_352388_, ByteBufferBuilder p_350332_)
```

**Parameters:**

- `p_352388_` (`SequencedMap<RenderType, ByteBufferBuilder>`)
- `p_350332_` (`ByteBufferBuilder`)

**Returns:** `static MultiBufferSource.BufferSource`

### getBuffer

```java
VertexConsumer getBuffer(RenderType p_109903_)
```

**Parameters:**

- `p_109903_` (`RenderType`)

**Returns:** `VertexConsumer`

### BufferSource

```java
protected BufferSource(ByteBufferBuilder p_350964_, SequencedMap<RenderType, ByteBufferBuilder> p_352181_)
```

**Parameters:**

- `p_350964_` (`ByteBufferBuilder`)
- `p_352181_` (`SequencedMap<RenderType, ByteBufferBuilder>`)

**Returns:** `protected`

### getBuffer

```java
public VertexConsumer getBuffer(RenderType p_109919_)
```

**Parameters:**

- `p_109919_` (`RenderType`)

**Returns:** `VertexConsumer`

### endLastBatch

```java
public void endLastBatch()
```

**Returns:** `public void`

### endBatch

```java
public void endBatch()
```

**Returns:** `public void`

### endBatch

```java
public void endBatch(RenderType p_109913_)
```

**Parameters:**

- `p_109913_` (`RenderType`)

**Returns:** `public void`

### endBatch

```java
private void endBatch(RenderType p_350903_, BufferBuilder p_350797_)
```

**Parameters:**

- `p_350903_` (`RenderType`)
- `p_350797_` (`BufferBuilder`)

**Returns:** `private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BufferSource` | class |  |
