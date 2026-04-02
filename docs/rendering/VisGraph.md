# VisGraph

**Package:** `net.minecraft.client.renderer.chunk`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### setOpaque

```java
public void setOpaque(BlockPos p_112972_)
```

**Parameters:**

- `p_112972_` (`BlockPos`)

**Returns:** `public void`

### getIndex

```java
private static int getIndex(BlockPos p_112976_)
```

**Parameters:**

- `p_112976_` (`BlockPos`)

**Returns:** `private static int`

### getIndex

```java
private static int getIndex(int p_112962_, int p_112963_, int p_112964_)
```

**Parameters:**

- `p_112962_` (`int`)
- `p_112963_` (`int`)
- `p_112964_` (`int`)

**Returns:** `private static int`

### resolve

```java
public VisibilitySet resolve()
```

**Returns:** `public VisibilitySet`

### floodFill

```java
private Set<Direction> floodFill(int p_112960_)
```

**Parameters:**

- `p_112960_` (`int`)

**Returns:** `private Set<Direction>`

### addEdges

```java
private void addEdges(int p_112969_, Set<Direction> p_112970_)
```

**Parameters:**

- `p_112969_` (`int`)
- `p_112970_` (`Set<Direction>`)

**Returns:** `private void`

### getNeighborIndexAtFace

```java
private int getNeighborIndexAtFace(int p_112966_, Direction p_112967_)
```

**Parameters:**

- `p_112966_` (`int`)
- `p_112967_` (`Direction`)

**Returns:** `private int`
