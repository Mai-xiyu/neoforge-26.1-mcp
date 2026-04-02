# IGuiGraphicsExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `GuiGraphics`.

## Methods

### self

```java
private GuiGraphics self()
```

**Returns:** `private GuiGraphics`

### getColorFromFormattingCharacter

```java
default int getColorFromFormattingCharacter(char c, boolean isLighter)
```

**Parameters:**

- `c` (`char`)
- `isLighter` (`boolean`)

**Returns:** `default int`

### drawScrollingString

```java
default int drawScrollingString(Font font, Component text, int minX, int maxX, int y, int color)
```

**Parameters:**

- `font` (`Font`)
- `text` (`Component`)
- `minX` (`int`)
- `maxX` (`int`)
- `y` (`int`)
- `color` (`int`)

**Returns:** `int`

### blitWithBorder

```java
default void blitWithBorder(ResourceLocation texture, int x, int y, int u, int v, int width, int height, int textureWidth, int textureHeight, int borderSize)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `u` (`int`)
- `v` (`int`)
- `width` (`int`)
- `height` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)
- `borderSize` (`int`)

### blitWithBorder

```java
default void blitWithBorder(ResourceLocation texture, int x, int y, int u, int v, int width, int height, int textureWidth, int textureHeight, int topBorder, int bottomBorder, int leftBorder, int rightBorder)
```

**Parameters:**

- `texture` (`ResourceLocation`)
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

### blitInscribed

```java
default void blitInscribed(ResourceLocation texture, int x, int y, int boundsWidth, int boundsHeight, int rectWidth, int rectHeight)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `boundsWidth` (`int`)
- `boundsHeight` (`int`)
- `rectWidth` (`int`)
- `rectHeight` (`int`)

**Returns:** `default void`

### blitInscribed

```java
default void blitInscribed(ResourceLocation texture, int x, int y, int boundsWidth, int boundsHeight, int rectWidth, int rectHeight, boolean centerX, boolean centerY)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `boundsWidth` (`int`)
- `boundsHeight` (`int`)
- `rectWidth` (`int`)
- `rectHeight` (`int`)
- `centerX` (`boolean`)
- `centerY` (`boolean`)

**Returns:** `default void`

### blitNineSlicedSized

```java
default void blitNineSlicedSized(ResourceLocation texture, int x, int y, int width, int height, int sliceSize, int uWidth, int vHeight, int uOffset, int vOffset, int textureWidth, int textureHeight)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `width` (`int`)
- `height` (`int`)
- `sliceSize` (`int`)
- `uWidth` (`int`)
- `vHeight` (`int`)
- `uOffset` (`int`)
- `vOffset` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)

### blitNineSlicedSized

```java
 blitNineSlicedSized()
```

**Returns:** ``

### blitNineSlicedSized

```java
default void blitNineSlicedSized(ResourceLocation texture, int x, int y, int width, int height, int sliceWidth, int sliceHeight, int uWidth, int vHeight, int uOffset, int vOffset, int textureWidth, int textureHeight)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `width` (`int`)
- `height` (`int`)
- `sliceWidth` (`int`)
- `sliceHeight` (`int`)
- `uWidth` (`int`)
- `vHeight` (`int`)
- `uOffset` (`int`)
- `vOffset` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)

### blitNineSlicedSized

```java
 blitNineSlicedSized()
```

**Returns:** ``

### blitNineSlicedSized

```java
default void blitNineSlicedSized(ResourceLocation texture, int x, int y, int width, int height, int cornerWidth, int cornerHeight, int edgeWidth, int edgeHeight, int uWidth, int vHeight, int uOffset, int vOffset, int textureWidth, int textureHeight)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `x` (`int`)
- `y` (`int`)
- `width` (`int`)
- `height` (`int`)
- `cornerWidth` (`int`)
- `cornerHeight` (`int`)
- `edgeWidth` (`int`)
- `edgeHeight` (`int`)
- `uWidth` (`int`)
- `vHeight` (`int`)
- `uOffset` (`int`)
- `vOffset` (`int`)
- `textureWidth` (`int`)
- `textureHeight` (`int`)
