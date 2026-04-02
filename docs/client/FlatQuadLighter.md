# FlatQuadLighter

**Package:** `net.neoforged.neoforge.client.model.lighting`
**Type:** class
**Extends:** `QuadLighter`
**Side:** 🖥️ Client

## Description

Implementation of `QuadLighter` that lights `BakedQuad quads` with flat lighting.

## Methods

### FlatQuadLighter

```java
public FlatQuadLighter(BlockColors colors)
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
protected void computeLightingAt(BlockAndTintGetter level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
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
