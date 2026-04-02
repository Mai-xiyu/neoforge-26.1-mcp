# OverlayTexture

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_WHITE_U` | `int` |  |
| `RED_OVERLAY_V` | `int` |  |
| `WHITE_OVERLAY_V` | `int` |  |
| `NO_OVERLAY` | `int` |  |

## Methods

### OverlayTexture

```java
public OverlayTexture()
```

**Returns:** `public`

### close

```java
public void close()
```

### setupOverlayColor

```java
public void setupOverlayColor()
```

**Returns:** `public void`

### u

```java
public static int u(float p_118089_)
```

**Parameters:**

- `p_118089_` (`float`)

**Returns:** `public static int`

### v

```java
public static int v(boolean p_118097_)
```

**Parameters:**

- `p_118097_` (`boolean`)

**Returns:** `public static int`

### pack

```java
public static int pack(int p_118094_, int p_118095_)
```

**Parameters:**

- `p_118094_` (`int`)
- `p_118095_` (`int`)

**Returns:** `public static int`

### pack

```java
public static int pack(float p_118091_, boolean p_118092_)
```

**Parameters:**

- `p_118091_` (`float`)
- `p_118092_` (`boolean`)

**Returns:** `public static int`

### teardownOverlayColor

```java
public void teardownOverlayColor()
```

**Returns:** `public void`
