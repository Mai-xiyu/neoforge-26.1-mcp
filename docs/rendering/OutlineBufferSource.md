# OutlineBufferSource

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `MultiBufferSource`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### OutlineBufferSource

```java
public OutlineBufferSource(MultiBufferSource.BufferSource p_109927_)
```

**Parameters:**

- `p_109927_` (`MultiBufferSource.BufferSource`)

**Returns:** `public`

### getBuffer

```java
public VertexConsumer getBuffer(RenderType p_109935_)
```

**Parameters:**

- `p_109935_` (`RenderType`)

**Returns:** `VertexConsumer`

### setColor

```java
public void setColor(int p_109930_, int p_109931_, int p_109932_, int p_109933_)
```

**Parameters:**

- `p_109930_` (`int`)
- `p_109931_` (`int`)
- `p_109932_` (`int`)
- `p_109933_` (`int`)

**Returns:** `public void`

### endOutlineBatch

```java
public void endOutlineBatch()
```

**Returns:** `public void`

### EntityOutlineGenerator

```java
public EntityOutlineGenerator(VertexConsumer p_109943_, int p_109944_, int p_109945_, int p_109946_, int p_109947_)
```

**Parameters:**

- `p_109943_` (`VertexConsumer`)
- `p_109944_` (`int`)
- `p_109945_` (`int`)
- `p_109946_` (`int`)
- `p_109947_` (`int`)

**Returns:** `public`

### addVertex

```java
public VertexConsumer addVertex(float p_350357_, float p_350369_, float p_350557_)
```

**Parameters:**

- `p_350357_` (`float`)
- `p_350369_` (`float`)
- `p_350557_` (`float`)

**Returns:** `VertexConsumer`

### setColor

```java
public VertexConsumer setColor(int p_350802_, int p_351011_, int p_350273_, int p_351040_)
```

**Parameters:**

- `p_350802_` (`int`)
- `p_351011_` (`int`)
- `p_350273_` (`int`)
- `p_351040_` (`int`)

**Returns:** `VertexConsumer`

### setUv

```java
public VertexConsumer setUv(float p_350507_, float p_350470_)
```

**Parameters:**

- `p_350507_` (`float`)
- `p_350470_` (`float`)

**Returns:** `VertexConsumer`

### setUv1

```java
public VertexConsumer setUv1(int p_350412_, int p_350568_)
```

**Parameters:**

- `p_350412_` (`int`)
- `p_350568_` (`int`)

**Returns:** `VertexConsumer`

### setUv2

```java
public VertexConsumer setUv2(int p_350636_, int p_351006_)
```

**Parameters:**

- `p_350636_` (`int`)
- `p_351006_` (`int`)

**Returns:** `VertexConsumer`

### setNormal

```java
public VertexConsumer setNormal(float p_350484_, float p_350765_, float p_350737_)
```

**Parameters:**

- `p_350484_` (`float`)
- `p_350765_` (`float`)
- `p_350737_` (`float`)

**Returns:** `VertexConsumer`
