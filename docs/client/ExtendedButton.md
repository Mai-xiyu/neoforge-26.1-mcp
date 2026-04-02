# ExtendedButton

**Package:** `net.neoforged.neoforge.client.gui.widget`
**Type:** class
**Extends:** `Button`
**Side:** 🖥️ Client

## Description

This class provides a button that fixes several bugs present in the vanilla GuiButton drawing code.
The gist of it is that it allows buttons of any size without gaps in the graphics and with the
borders drawn properly. It also prevents button text from extending out of the sides of the button by
trimming the end of the string and adding an ellipsis.
The code that handles drawing the button is in GuiUtils.
@author bspkrs

## Methods

### ExtendedButton

```java
public ExtendedButton(int xPos, int yPos, int width, int height, Component displayString, OnPress handler)
```

**Parameters:**

- `xPos` (`int`)
- `yPos` (`int`)
- `width` (`int`)
- `height` (`int`)
- `displayString` (`Component`)
- `handler` (`OnPress`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ExtendedButton

```java
public ExtendedButton(int xPos, int yPos, int width, int height, Component displayString, OnPress handler, CreateNarration createNarration)
```

**Parameters:**

- `xPos` (`int`)
- `yPos` (`int`)
- `width` (`int`)
- `height` (`int`)
- `displayString` (`Component`)
- `handler` (`OnPress`)
- `createNarration` (`CreateNarration`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ExtendedButton

```java
public ExtendedButton(Button.Builder builder)
```

**Parameters:**

- `builder` (`Button.Builder`)

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
