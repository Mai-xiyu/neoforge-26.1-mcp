# RenderBuffers

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RenderBuffers

```java
public RenderBuffers(int p_307464_)
```

**Parameters:**

- `p_307464_` (`int`)

**Returns:** `public`

### put

```java
private static void put(Object2ObjectLinkedOpenHashMap<RenderType, ByteBufferBuilder> p_110102_, RenderType p_110103_)
```

**Parameters:**

- `p_110102_` (`Object2ObjectLinkedOpenHashMap<RenderType, ByteBufferBuilder>`)
- `p_110103_` (`RenderType`)

**Returns:** `private static void`

### fixedBufferPack

```java
public SectionBufferBuilderPack fixedBufferPack()
```

**Returns:** `public SectionBufferBuilderPack`

### sectionBufferPool

```java
public SectionBufferBuilderPool sectionBufferPool()
```

**Returns:** `public SectionBufferBuilderPool`

### bufferSource

```java
public MultiBufferSource.BufferSource bufferSource()
```

**Returns:** `public MultiBufferSource.BufferSource`

### crumblingBufferSource

```java
public MultiBufferSource.BufferSource crumblingBufferSource()
```

**Returns:** `public MultiBufferSource.BufferSource`

### outlineBufferSource

```java
public OutlineBufferSource outlineBufferSource()
```

**Returns:** `public OutlineBufferSource`
