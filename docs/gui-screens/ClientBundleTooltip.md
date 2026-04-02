# ClientBundleTooltip

**Package:** `net.minecraft.client.gui.screens.inventory.tooltip`
**Type:** class
**Implements:** `ClientTooltipComponent`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `sprite` | `ResourceLocation` |  |
| `w` | `int` |  |
| `h` | `int` |  |

## Methods

### ClientBundleTooltip

```java
public ClientBundleTooltip(BundleContents p_331917_)
```

**Parameters:**

- `p_331917_` (`BundleContents`)

**Returns:** `public`

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### getWidth

```java
public int getWidth(Font p_169901_)
```

**Parameters:**

- `p_169901_` (`Font`)

**Returns:** `int`

### backgroundWidth

```java
private int backgroundWidth()
```

**Returns:** `private int`

### backgroundHeight

```java
private int backgroundHeight()
```

**Returns:** `private int`

### renderImage

```java
public void renderImage(Font p_194042_, int p_194043_, int p_194044_, GuiGraphics p_282522_)
```

**Parameters:**

- `p_194042_` (`Font`)
- `p_194043_` (`int`)
- `p_194044_` (`int`)
- `p_282522_` (`GuiGraphics`)

### renderSlot

```java
private void renderSlot(int p_283180_, int p_282972_, int p_282547_, boolean p_283053_, GuiGraphics p_283625_, Font p_281863_)
```

**Parameters:**

- `p_283180_` (`int`)
- `p_282972_` (`int`)
- `p_282547_` (`int`)
- `p_283053_` (`boolean`)
- `p_283625_` (`GuiGraphics`)
- `p_281863_` (`Font`)

**Returns:** `private void`

### blit

```java
private void blit(GuiGraphics p_281273_, int p_282428_, int p_281897_, ClientBundleTooltip.Texture p_281917_)
```

**Parameters:**

- `p_281273_` (`GuiGraphics`)
- `p_282428_` (`int`)
- `p_281897_` (`int`)
- `p_281917_` (`ClientBundleTooltip.Texture`)

**Returns:** `private void`

### gridSizeX

```java
private int gridSizeX()
```

**Returns:** `private int`

### gridSizeY

```java
private int gridSizeY()
```

**Returns:** `private int`

### Texture

```java
private Texture(ResourceLocation p_295000_, int p_169928_, int p_169929_)
```

**Parameters:**

- `p_295000_` (`ResourceLocation`)
- `p_169928_` (`int`)
- `p_169929_` (`int`)

**Returns:** `private`
