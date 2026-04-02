# ScreenUtils

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@Deprecated(forRemoval = true)`

## Description

This class provides several methods and constants used by the Config GUI classes.
@author bspkrs
@deprecated Use extension methods in `IGuiGraphicsExtension` instead

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_BACKGROUND_COLOR` | `int` |  |
| `DEFAULT_BORDER_COLOR_START` | `int` |  |
| `DEFAULT_BORDER_COLOR_END` | `int` |  |
| `UNDO_CHAR` | `String` |  |
| `RESET_CHAR` | `String` |  |
| `VALID` | `String` |  |
| `INVALID` | `String` |  |
| `TEXT_COLOR_CODES` | `int[]` |  |

## Methods

### getColorFromFormattingCharacter

```java
public static int getColorFromFormattingCharacter(char c, boolean isLighter)
```

**Parameters:**

- `c` (`char`)
- `isLighter` (`boolean`)

**Returns:** `public static int`

### blitWithBorder

```java
public static void blitWithBorder(GuiGraphics guiGraphics, int x, int y, int u, int v, int width, int height, int textureWidth, int textureHeight, int borderSize, float zLevel)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `u` (`int`)
- `v` (`int`)
- `width` (`int`)
- `height` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)
- `borderSize` (`int`)
- `zLevel` (`float`)

### blitWithBorder

```java
 blitWithBorder()
```

**Returns:** ``

### blitWithBorder

```java
public static void blitWithBorder(GuiGraphics guiGraphics, ResourceLocation res, int x, int y, int u, int v, int width, int height, int textureWidth, int textureHeight, int borderSize, float zLevel)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `res` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `u` (`int`)
- `v` (`int`)
- `width` (`int`)
- `height` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)
- `borderSize` (`int`)
- `zLevel` (`float`)

### blitWithBorder

```java
 blitWithBorder()
```

**Returns:** ``

### blitWithBorder

```java
public static void blitWithBorder(GuiGraphics guiGraphics, ResourceLocation res, int x, int y, int u, int v, int width, int height, int textureWidth, int textureHeight, int topBorder, int bottomBorder, int leftBorder, int rightBorder, float zLevel)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `res` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `u` (`int`)
- `v` (`int`)
- `width` (`int`)
- `height` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)
- `topBorder` (`int`)
- `bottomBorder` (`int`)
- `leftBorder` (`int`)
- `rightBorder` (`int`)
- `zLevel` (`float`)

### blitWithBorder

```java
 blitWithBorder()
```

**Returns:** ``

### blitWithBorder

```java
public static void blitWithBorder(GuiGraphics guiGraphics, int x, int y, int u, int v, int width, int height, int textureWidth, int textureHeight, int topBorder, int bottomBorder, int leftBorder, int rightBorder, float zLevel)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `u` (`int`)
- `v` (`int`)
- `width` (`int`)
- `height` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)
- `topBorder` (`int`)
- `bottomBorder` (`int`)
- `leftBorder` (`int`)
- `rightBorder` (`int`)
- `zLevel` (`float`)

### drawTexturedModalRect

```java
Top Left drawTexturedModalRect()
```

**Returns:** `Top Left`

### drawTexturedModalRect

```java
Top Right drawTexturedModalRect(x + leftBorder + canvasWidth, u + leftBorder + fillerWidth)
```

**Parameters:**

- `canvasWidth` (`x + leftBorder +`)
- `fillerWidth` (`u + leftBorder +`)

**Returns:** `Top Right`

### drawTexturedModalRect

```java
Bottom Left drawTexturedModalRect(y + topBorder + canvasHeight, v + topBorder + fillerHeight)
```

**Parameters:**

- `canvasHeight` (`y + topBorder +`)
- `fillerHeight` (`v + topBorder +`)

**Returns:** `Bottom Left`

### drawTexturedModalRect

```java
Bottom Right drawTexturedModalRect(x + leftBorder + canvasWidth, y + topBorder + canvasHeight, u + leftBorder + fillerWidth, v + topBorder + fillerHeight)
```

**Parameters:**

- `canvasWidth` (`x + leftBorder +`)
- `canvasHeight` (`y + topBorder +`)
- `fillerWidth` (`u + leftBorder +`)
- `fillerHeight` (`v + topBorder +`)

**Returns:** `Bottom Right`

### drawTexturedModalRect

```java
public static void drawTexturedModalRect(GuiGraphics guiGraphics, int x, int y, int u, int v, int width, int height, float zLevel)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `u` (`int`)
- `v` (`int`)
- `width` (`int`)
- `height` (`int`)
- `zLevel` (`float`)

### drawGradientRect

```java
public static void drawGradientRect(Matrix4f mat, int zLevel, int left, int top, int right, int bottom, int startColor, int endColor)
```

**Parameters:**

- `mat` (`Matrix4f`)
- `zLevel` (`int`)
- `left` (`int`)
- `top` (`int`)
- `right` (`int`)
- `bottom` (`int`)
- `startColor` (`int`)
- `endColor` (`int`)

### blitInscribed

```java
public static void blitInscribed(GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int boundsWidth, int boundsHeight, int rectWidth, int rectHeight)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `boundsWidth` (`int`)
- `boundsHeight` (`int`)
- `rectWidth` (`int`)
- `rectHeight` (`int`)

**Returns:** `public static void`

### blitInscribed

```java
 blitInscribed()
```

**Returns:** ``

### blitInscribed

```java
public static void blitInscribed(GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int boundsWidth, int boundsHeight, int rectWidth, int rectHeight, boolean centerX, boolean centerY)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `boundsWidth` (`int`)
- `boundsHeight` (`int`)
- `rectWidth` (`int`)
- `rectHeight` (`int`)
- `centerX` (`boolean`)
- `centerY` (`boolean`)

**Returns:** `public static void`
