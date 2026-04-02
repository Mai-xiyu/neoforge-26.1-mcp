# VertexSorting

**Package:** `com.mojang.blaze3d.vertex`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### byDistance

```java
static VertexSorting byDistance(float p_277642_, float p_277654_, float p_278092_)
```

**Parameters:**

- `p_277642_` (`float`)
- `p_277654_` (`float`)
- `p_278092_` (`float`)

**Returns:** `static VertexSorting`

### byDistance

```java
static VertexSorting byDistance(Vector3f p_277725_)
```

**Parameters:**

- `p_277725_` (`Vector3f`)

**Returns:** `static VertexSorting`

### byDistance

```java
return byDistance()
```

**Returns:** `return`

### byDistance

```java
static VertexSorting byDistance(VertexSorting.DistanceFunction p_277530_)
```

**Parameters:**

- `p_277530_` (`VertexSorting.DistanceFunction`)

**Returns:** `static VertexSorting`

### sort

```java
int[] sort(Vector3f[] p_277527_)
```

**Parameters:**

- `p_277527_` (`Vector3f[]`)

**Returns:** `int[]`

### apply

```java
float apply(Vector3f p_277761_)
```

**Parameters:**

- `p_277761_` (`Vector3f`)

**Returns:** `float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DistanceFunction` | interface |  |
