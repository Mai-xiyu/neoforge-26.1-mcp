# MultiLineEditBox

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `AbstractScrollWidget`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MultiLineEditBox

```java
public MultiLineEditBox(Font p_239008_, int p_239009_, int p_239010_, int p_239011_, int p_239012_, Component p_239013_, Component p_239014_)
```

**Parameters:**

- `p_239008_` (`Font`)
- `p_239009_` (`int`)
- `p_239010_` (`int`)
- `p_239011_` (`int`)
- `p_239012_` (`int`)
- `p_239013_` (`Component`)
- `p_239014_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setCharacterLimit

```java
public void setCharacterLimit(int p_239314_)
```

**Parameters:**

- `p_239314_` (`int`)

**Returns:** `public void`

### setValueListener

```java
public void setValueListener(Consumer<String> p_239274_)
```

**Parameters:**

- `p_239274_` (`Consumer<String>`)

**Returns:** `public void`

### setValue

```java
public void setValue(String p_240160_)
```

**Parameters:**

- `p_240160_` (`String`)

**Returns:** `public void`

### getValue

```java
public String getValue()
```

**Returns:** `public String`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_259393_)
```

**Parameters:**

- `p_259393_` (`NarrationElementOutput`)

### mouseClicked

```java
public boolean mouseClicked(double p_239101_, double p_239102_, int p_239103_)
```

**Parameters:**

- `p_239101_` (`double`)
- `p_239102_` (`double`)
- `p_239103_` (`int`)

**Returns:** `boolean`

### mouseDragged

```java
public boolean mouseDragged(double p_238978_, double p_238979_, int p_238980_, double p_238981_, double p_238982_)
```

**Parameters:**

- `p_238978_` (`double`)
- `p_238979_` (`double`)
- `p_238980_` (`int`)
- `p_238981_` (`double`)
- `p_238982_` (`double`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_239433_, int p_239434_, int p_239435_)
```

**Parameters:**

- `p_239433_` (`int`)
- `p_239434_` (`int`)
- `p_239435_` (`int`)

**Returns:** `boolean`

### charTyped

```java
public boolean charTyped(char p_239387_, int p_239388_)
```

**Parameters:**

- `p_239387_` (`char`)
- `p_239388_` (`int`)

**Returns:** `boolean`

### renderContents

```java
protected void renderContents(GuiGraphics p_283676_, int p_281538_, int p_283033_, float p_281767_)
```

**Parameters:**

- `p_283676_` (`GuiGraphics`)
- `p_281538_` (`int`)
- `p_283033_` (`int`)
- `p_281767_` (`float`)

### renderDecorations

```java
protected void renderDecorations(GuiGraphics p_282551_)
```

**Parameters:**

- `p_282551_` (`GuiGraphics`)

### getInnerHeight

```java
public int getInnerHeight()
```

**Returns:** `int`

### scrollbarVisible

```java
protected boolean scrollbarVisible()
```

**Returns:** `boolean`

### scrollRate

```java
protected double scrollRate()
```

**Returns:** `double`

### renderHighlight

```java
private void renderHighlight(GuiGraphics p_282092_, int p_282814_, int p_282908_, int p_281451_, int p_281765_)
```

**Parameters:**

- `p_282092_` (`GuiGraphics`)
- `p_282814_` (`int`)
- `p_282908_` (`int`)
- `p_281451_` (`int`)
- `p_281765_` (`int`)

**Returns:** `private void`

### scrollToCursor

```java
private void scrollToCursor()
```

**Returns:** `private void`

### getDisplayableLineCount

```java
private double getDisplayableLineCount()
```

**Returns:** `private double`

### seekCursorScreen

```java
private void seekCursorScreen(double p_239276_, double p_239277_)
```

**Parameters:**

- `p_239276_` (`double`)
- `p_239277_` (`double`)

**Returns:** `private void`

### setFocused

```java
public void setFocused(boolean p_295271_)
```

**Parameters:**

- `p_295271_` (`boolean`)
