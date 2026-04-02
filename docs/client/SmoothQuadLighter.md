# SmoothQuadLighter

**Package:** `net.neoforged.neoforge.client.model.lighting`
**Type:** class
**Extends:** `QuadLighter`
**Side:** 🖥️ Client

## Description

Implementation of `QuadLighter` that lights `BakedQuad baked quads` using ambient occlusion and
light interpolation.

## Methods

### SmoothQuadLighter

```java
public SmoothQuadLighter(BlockColors colors)
```

**Parameters:**

- `colors` (`BlockColors`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### computeLightingAt

```java
protected void computeLightingAt(BlockAndTintGetter level, BlockPos origin, BlockState state)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `origin` (`BlockPos`)
- `state` (`BlockState`)

### calculateBrightness

```java
protected float calculateBrightness(float[] position)
```

**Parameters:**

- `position` (`float[]`)

**Returns:** `float`

### calculateLightmap

```java
protected int calculateLightmap(float[] position, byte[] normal)
```

**Parameters:**

- `position` (`float[]`)
- `normal` (`byte[]`)

**Returns:** `int`

### combine

```java
private float combine(int c, int s1, int s2, int s3, boolean t0, boolean t1, boolean t2, boolean t3)
```

**Parameters:**

- `c` (`int`)
- `s1` (`int`)
- `s2` (`int`)
- `s3` (`int`)
- `t0` (`boolean`)
- `t1` (`boolean`)
- `t2` (`boolean`)
- `t3` (`boolean`)

**Returns:** `private float`

### calcLightmap

```java
protected float calcLightmap(float[][][][] light, float x, float y, float z)
```

**Parameters:**

- `light` (`float[][][][]`)
- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `protected float`
