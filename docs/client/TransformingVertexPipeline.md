# TransformingVertexPipeline

**Package:** `net.neoforged.neoforge.client.model.pipeline`
**Type:** class
**Extends:** `VertexConsumerWrapper`
**Side:** 🖥️ Client

## Description

Vertex pipeline element that applies a transformation to incoming geometry.

## Methods

### TransformingVertexPipeline

```java
public TransformingVertexPipeline(VertexConsumer parent, Transformation transformation)
```

**Parameters:**

- `parent` (`VertexConsumer`)
- `transformation` (`Transformation`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

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
