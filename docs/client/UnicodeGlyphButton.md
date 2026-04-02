# UnicodeGlyphButton

**Package:** `net.neoforged.neoforge.client.gui.widget`
**Type:** class
**Extends:** `ExtendedButton`
**Side:** 🖥️ Client

## Description

This class provides a button that shows a string glyph at the beginning. The glyph can be scaled using the glyphScale parameter.
@author bspkrs

## Fields

| Name | Type | Description |
|------|------|-------------|
| `glyph` | `String` |  |
| `glyphScale` | `float` |  |

## Methods

### UnicodeGlyphButton

```java
public UnicodeGlyphButton(int xPos, int yPos, int width, int height, Component displayString, String glyph, float glyphScale, OnPress handler)
```

**Parameters:**

- `xPos` (`int`)
- `yPos` (`int`)
- `width` (`int`)
- `height` (`int`)
- `displayString` (`Component`)
- `glyph` (`String`)
- `glyphScale` (`float`)
- `handler` (`OnPress`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderWidget

```java
public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `partialTick` (`float`)
