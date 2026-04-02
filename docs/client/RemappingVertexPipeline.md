# RemappingVertexPipeline

**Package:** `net.neoforged.neoforge.client.model.pipeline`
**Type:** class
**Implements:** `VertexConsumer`
**Side:** 🖥️ Client

## Description

Vertex pipeline element that remaps incoming data to another format.

## Methods

### RemappingVertexPipeline

```java
public RemappingVertexPipeline(VertexConsumer parent, VertexFormat targetFormat)
```

**Parameters:**

- `parent` (`VertexConsumer`)
- `targetFormat` (`VertexFormat`)

**Returns:** `public`

### addVertex

```java
public VertexConsumer addVertex(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `VertexConsumer`

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
public VertexConsumer misc(VertexFormatElement element, int[]... values)
```

**Parameters:**

- `element` (`VertexFormatElement`)
- `values` (`int[]...`)

**Returns:** `VertexConsumer`

### endVertex

```java
public void endVertex()
```

**Returns:** `public void`
