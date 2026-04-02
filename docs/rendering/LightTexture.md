# LightTexture

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FULL_BRIGHT` | `int` |  |
| `FULL_SKY` | `int` |  |
| `FULL_BLOCK` | `int` |  |

## Methods

### LightTexture

```java
public LightTexture(GameRenderer p_109878_, Minecraft p_109879_)
```

**Parameters:**

- `p_109878_` (`GameRenderer`)
- `p_109879_` (`Minecraft`)

**Returns:** `public`

### close

```java
public void close()
```

### tick

```java
public void tick()
```

**Returns:** `public void`

### turnOffLightLayer

```java
public void turnOffLightLayer()
```

**Returns:** `public void`

### turnOnLightLayer

```java
public void turnOnLightLayer()
```

**Returns:** `public void`

### getDarknessGamma

```java
private float getDarknessGamma(float p_234320_)
```

**Parameters:**

- `p_234320_` (`float`)

**Returns:** `private float`

### calculateDarknessScale

```java
private float calculateDarknessScale(LivingEntity p_234313_, float p_234314_, float p_234315_)
```

**Parameters:**

- `p_234313_` (`LivingEntity`)
- `p_234314_` (`float`)
- `p_234315_` (`float`)

**Returns:** `private float`

### updateLightTexture

```java
public void updateLightTexture(float p_109882_)
```

**Parameters:**

- `p_109882_` (`float`)

**Returns:** `public void`

### clampColor

```java
 clampColor()
```

**Returns:** ``

### clampColor

```java
 clampColor()
```

**Returns:** ``

### clampColor

```java
 clampColor()
```

**Returns:** ``

### clampColor

```java
private static void clampColor(Vector3f p_254122_)
```

**Parameters:**

- `p_254122_` (`Vector3f`)

**Returns:** `private static void`

### notGamma

```java
private float notGamma(float p_109893_)
```

**Parameters:**

- `p_109893_` (`float`)

**Returns:** `private float`

### getBrightness

```java
public static float getBrightness(DimensionType p_234317_, int p_234318_)
```

**Parameters:**

- `p_234317_` (`DimensionType`)
- `p_234318_` (`int`)

**Returns:** `public static float`

### pack

```java
public static int pack(int p_109886_, int p_109887_)
```

**Parameters:**

- `p_109886_` (`int`)
- `p_109887_` (`int`)

**Returns:** `public static int`

### block

```java
public static int block(int p_109884_)
```

**Parameters:**

- `p_109884_` (`int`)

**Returns:** `public static int`

### sky

```java
public static int sky(int p_109895_)
```

**Parameters:**

- `p_109895_` (`int`)

**Returns:** `public static int`
