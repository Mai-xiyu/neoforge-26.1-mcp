# GuiGraphicsExtractorExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `GuiGraphicsExtractor`.

## Methods

### self

```java
private GuiGraphicsExtractor self()
```

**Returns:** `private GuiGraphicsExtractor`

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
default void drawScrollingString(ActiveTextCollector textCollector, Font font, Component text, int minX, int maxX, int y)
```

**Parameters:**

- `textCollector` (`ActiveTextCollector`)
- `font` (`Font`)
- `text` (`Component`)
- `minX` (`int`)
- `maxX` (`int`)
- `y` (`int`)

### blitInscribed

```java
default void blitInscribed(Identifier texture, int x, int y, int boundsWidth, int boundsHeight, int rectWidth, int rectHeight)
```

**Parameters:**

- `texture` (`Identifier`)
- `x` (`int`)
- `y` (`int`)
- `boundsWidth` (`int`)
- `boundsHeight` (`int`)
- `rectWidth` (`int`)
- `rectHeight` (`int`)

**Returns:** `default void`

### blitInscribed

```java
default void blitInscribed(Identifier texture, int x, int y, int boundsWidth, int boundsHeight, int rectWidth, int rectHeight, boolean centerX, boolean centerY)
```

**Parameters:**

- `texture` (`Identifier`)
- `x` (`int`)
- `y` (`int`)
- `boundsWidth` (`int`)
- `boundsHeight` (`int`)
- `rectWidth` (`int`)
- `rectHeight` (`int`)
- `centerX` (`boolean`)
- `centerY` (`boolean`)

**Returns:** `default void`
