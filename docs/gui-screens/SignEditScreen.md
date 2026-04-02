# SignEditScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractSignEditScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAGIC_SCALE_NUMBER` | `float` |  |
| `MAGIC_TEXT_SCALE` | `float` |  |

## Methods

### SignEditScreen

```java
public SignEditScreen(SignBlockEntity p_277919_, boolean p_277579_, boolean p_277693_)
```

**Parameters:**

- `p_277919_` (`SignBlockEntity`)
- `p_277579_` (`boolean`)
- `p_277693_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### offsetSign

```java
protected void offsetSign(GuiGraphics p_282503_, BlockState p_282571_)
```

**Parameters:**

- `p_282503_` (`GuiGraphics`)
- `p_282571_` (`BlockState`)

### renderSignBackground

```java
protected void renderSignBackground(GuiGraphics p_281440_, BlockState p_282401_)
```

**Parameters:**

- `p_281440_` (`GuiGraphics`)
- `p_282401_` (`BlockState`)

### getSignTextScale

```java
protected Vector3f getSignTextScale()
```

**Returns:** `Vector3f`
