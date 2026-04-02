# LoadingOverlay

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Overlay`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FADE_OUT_TIME` | `long` |  |
| `FADE_IN_TIME` | `long` |  |

## Methods

### LoadingOverlay

```java
public LoadingOverlay(Minecraft p_96172_, ReloadInstance p_96173_, Consumer<Optional<Throwable>> p_96174_, boolean p_96175_)
```

**Parameters:**

- `p_96172_` (`Minecraft`)
- `p_96173_` (`ReloadInstance`)
- `p_96174_` (`Consumer<Optional<Throwable>>`)
- `p_96175_` (`boolean`)

**Returns:** `public`

### registerTextures

```java
public static void registerTextures(Minecraft p_96190_)
```

**Parameters:**

- `p_96190_` (`Minecraft`)

**Returns:** `public static void`

### replaceAlpha

```java
private static int replaceAlpha(int p_169325_, int p_169326_)
```

**Parameters:**

- `p_169325_` (`int`)
- `p_169326_` (`int`)

**Returns:** `private static int`

### render

```java
public void render(GuiGraphics p_281839_, int p_282704_, int p_283650_, float p_283394_)
```

**Parameters:**

- `p_281839_` (`GuiGraphics`)
- `p_282704_` (`int`)
- `p_283650_` (`int`)
- `p_283394_` (`float`)

### drawProgressBar

```java
private void drawProgressBar(GuiGraphics p_283125_, int p_96184_, int p_96185_, int p_96186_, int p_96187_, float p_96188_)
```

**Parameters:**

- `p_283125_` (`GuiGraphics`)
- `p_96184_` (`int`)
- `p_96185_` (`int`)
- `p_96186_` (`int`)
- `p_96187_` (`int`)
- `p_96188_` (`float`)

**Returns:** `private void`

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### LogoTexture

```java
public LogoTexture()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTextureImage

```java
protected SimpleTexture.TextureImage getTextureImage(ResourceManager p_96194_)
```

**Parameters:**

- `p_96194_` (`ResourceManager`)

**Returns:** `SimpleTexture.TextureImage`
