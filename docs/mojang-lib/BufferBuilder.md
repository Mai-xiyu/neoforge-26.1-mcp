# BufferBuilder

**Package:** `com.mojang.blaze3d.vertex`
**Type:** class
**Implements:** `VertexConsumer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BufferBuilder

```java
public BufferBuilder(ByteBufferBuilder p_350781_, VertexFormat.Mode p_350789_, VertexFormat p_350682_)
```

**Parameters:**

- `p_350781_` (`ByteBufferBuilder`)
- `p_350789_` (`VertexFormat.Mode`)
- `p_350682_` (`VertexFormat`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Cannot build mesh with no position element")
```

**Parameters:**

- `element"` (`"Cannot build mesh with no position`)

**Returns:** `throw new`

### build

```java
public MeshData build()
```

**Returns:** `MeshData`

### buildOrThrow

```java
public MeshData buildOrThrow()
```

**Returns:** `public MeshData`

### IllegalStateException

```java
throw new IllegalStateException("BufferBuilder was empty")
```

**Parameters:**

- `empty"` (`"BufferBuilder was`)

**Returns:** `throw new`

### ensureBuilding

```java
private void ensureBuilding()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Not building!")
```

**Parameters:**

- `building!"` (`"Not`)

**Returns:** `throw new`

### beginVertex

```java
private long beginVertex()
```

**Returns:** `private long`

### beginElement

```java
private long beginElement(VertexFormatElement p_350425_)
```

**Parameters:**

- `p_350425_` (`VertexFormatElement`)

**Returns:** `private long`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Not currently building vertex")
```

**Parameters:**

- `vertex"` (`"Not currently building`)

**Returns:** `throw new`

### endLastVertex

```java
private void endLastVertex()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Missing elements in vertex: " + s)
```

**Parameters:**

- `s` (`"Missing elements in vertex: " +`)

**Returns:** `throw new`

### putRgba

```java
private static void putRgba(long p_350739_, int p_350474_)
```

**Parameters:**

- `p_350739_` (`long`)
- `p_350474_` (`int`)

**Returns:** `private static void`

### putPackedUv

```java
private static void putPackedUv(long p_350878_, int p_350667_)
```

**Parameters:**

- `p_350878_` (`long`)
- `p_350667_` (`int`)

**Returns:** `private static void`

### addVertex

```java
public VertexConsumer addVertex(float p_350828_, float p_350614_, float p_350700_)
```

**Parameters:**

- `p_350828_` (`float`)
- `p_350614_` (`float`)
- `p_350700_` (`float`)

**Returns:** `VertexConsumer`

### setColor

```java
public VertexConsumer setColor(int p_350581_, int p_350952_, int p_350275_, int p_350985_)
```

**Parameters:**

- `p_350581_` (`int`)
- `p_350952_` (`int`)
- `p_350275_` (`int`)
- `p_350985_` (`int`)

**Returns:** `VertexConsumer`

### setColor

```java
public VertexConsumer setColor(int p_350530_)
```

**Parameters:**

- `p_350530_` (`int`)

**Returns:** `VertexConsumer`

### putRgba

```java
 putRgba()
```

**Returns:** ``

### setUv

```java
public VertexConsumer setUv(float p_350574_, float p_350773_)
```

**Parameters:**

- `p_350574_` (`float`)
- `p_350773_` (`float`)

**Returns:** `VertexConsumer`

### setUv1

```java
public VertexConsumer setUv1(int p_350396_, int p_350722_)
```

**Parameters:**

- `p_350396_` (`int`)
- `p_350722_` (`int`)

**Returns:** `VertexConsumer`

### setOverlay

```java
public VertexConsumer setOverlay(int p_350297_)
```

**Parameters:**

- `p_350297_` (`int`)

**Returns:** `VertexConsumer`

### putPackedUv

```java
 putPackedUv()
```

**Returns:** ``

### setUv2

```java
public VertexConsumer setUv2(int p_351058_, int p_350320_)
```

**Parameters:**

- `p_351058_` (`int`)
- `p_350320_` (`int`)

**Returns:** `VertexConsumer`

### setLight

```java
public VertexConsumer setLight(int p_350848_)
```

**Parameters:**

- `p_350848_` (`int`)

**Returns:** `VertexConsumer`

### putPackedUv

```java
 putPackedUv()
```

**Returns:** ``

### uvShort

```java
private VertexConsumer uvShort(short p_350449_, short p_350780_, VertexFormatElement p_350925_)
```

**Parameters:**

- `p_350449_` (`short`)
- `p_350780_` (`short`)
- `p_350925_` (`VertexFormatElement`)

**Returns:** `private VertexConsumer`

### setNormal

```java
public VertexConsumer setNormal(float p_351000_, float p_350982_, float p_350974_)
```

**Parameters:**

- `p_351000_` (`float`)
- `p_350982_` (`float`)
- `p_350974_` (`float`)

**Returns:** `VertexConsumer`

### normalIntValue

```java
private static byte normalIntValue(float p_350741_)
```

**Parameters:**

- `p_350741_` (`float`)

**Returns:** `private static byte`

### addVertex

```java
public void addVertex(float p_350423_, float p_350381_, float p_350383_, int p_350371_, float p_350977_, float p_350674_, int p_350816_, int p_350690_, float p_350640_, float p_350490_, float p_350810_)
```

**Parameters:**

- `p_350423_` (`float`)
- `p_350381_` (`float`)
- `p_350383_` (`float`)
- `p_350371_` (`int`)
- `p_350977_` (`float`)
- `p_350674_` (`float`)
- `p_350816_` (`int`)
- `p_350690_` (`int`)
- `p_350640_` (`float`)
- `p_350490_` (`float`)
- `p_350810_` (`float`)

### putRgba

```java
 putRgba(i + 12L)
```

**Parameters:**

- `12L` (`i +`)

**Returns:** ``

### putPackedUv

```java
 putPackedUv(i + 24L)
```

**Parameters:**

- `24L` (`i +`)

**Returns:** ``

### putPackedUv

```java
 putPackedUv(j + 0L)
```

**Parameters:**

- `0L` (`j +`)

**Returns:** ``
