# MipmapGenerator

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MipmapGenerator

```java
private MipmapGenerator()
```

**Returns:** `private`

### generateMipLevels

```java
public static NativeImage[] generateMipLevels(NativeImage[] p_251300_, int p_252326_)
```

**Parameters:**

- `p_251300_` (`NativeImage[]`)
- `p_252326_` (`int`)

**Returns:** `public static NativeImage[]`

### hasTransparentPixel

```java
private static boolean hasTransparentPixel(NativeImage p_252279_)
```

**Parameters:**

- `p_252279_` (`NativeImage`)

**Returns:** `private static boolean`

### alphaBlend

```java
private static int alphaBlend(int p_118049_, int p_118050_, int p_118051_, int p_118052_, boolean p_118053_)
```

**Parameters:**

- `p_118049_` (`int`)
- `p_118050_` (`int`)
- `p_118051_` (`int`)
- `p_118052_` (`int`)
- `p_118053_` (`boolean`)

**Returns:** `private static int`

### gammaBlend

```java
private static int gammaBlend(int p_118043_, int p_118044_, int p_118045_, int p_118046_, int p_118047_)
```

**Parameters:**

- `p_118043_` (`int`)
- `p_118044_` (`int`)
- `p_118045_` (`int`)
- `p_118046_` (`int`)
- `p_118047_` (`int`)

**Returns:** `private static int`

### getPow22

```java
private static float getPow22(int p_118041_)
```

**Parameters:**

- `p_118041_` (`int`)

**Returns:** `private static float`
