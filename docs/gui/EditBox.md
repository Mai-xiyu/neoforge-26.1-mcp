# EditBox

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `AbstractWidget`
**Implements:** `Renderable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BACKWARDS` | `int` |  |
| `FORWARDS` | `int` |  |
| `DEFAULT_TEXT_COLOR` | `int` |  |

## Methods

### EditBox

```java
Allow modders to disable the default shadow for the text.

    public EditBox(Font p_294485_, int p_294264_, int p_295938_, Component p_294624_)
```

**Parameters:**

- `p_294485_` (`Font`)
- `p_294264_` (`int`)
- `p_295938_` (`int`)
- `p_294624_` (`Component`)

**Returns:** `Allow modders to disable the default shadow for the text.

    public`

### this

```java
 this()
```

**Returns:** ``

### EditBox

```java
public EditBox(Font p_94114_, int p_94115_, int p_94116_, int p_94117_, int p_94118_, Component p_94119_)
```

**Parameters:**

- `p_94114_` (`Font`)
- `p_94115_` (`int`)
- `p_94116_` (`int`)
- `p_94117_` (`int`)
- `p_94118_` (`int`)
- `p_94119_` (`Component`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EditBox

```java
public EditBox(Font p_94106_, int p_94107_, int p_94108_, int p_94109_, int p_94110_, EditBox p_94111_, Component p_94112_)
```

**Parameters:**

- `p_94106_` (`Font`)
- `p_94107_` (`int`)
- `p_94108_` (`int`)
- `p_94109_` (`int`)
- `p_94110_` (`int`)
- `p_94111_` (`EditBox`)
- `p_94112_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setResponder

```java
public void setResponder(Consumer<String> p_94152_)
```

**Parameters:**

- `p_94152_` (`Consumer<String>`)

**Returns:** `public void`

### setFormatter

```java
public void setFormatter(BiFunction<String, Integer, FormattedCharSequence> p_94150_)
```

**Parameters:**

- `p_94150_` (`BiFunction<String, Integer, FormattedCharSequence>`)

**Returns:** `public void`

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### setValue

```java
public void setValue(String p_94145_)
```

**Parameters:**

- `p_94145_` (`String`)

**Returns:** `public void`

### getValue

```java
public String getValue()
```

**Returns:** `public String`

### getHighlighted

```java
public String getHighlighted()
```

**Returns:** `public String`

### setFilter

```java
public void setFilter(Predicate<String> p_94154_)
```

**Parameters:**

- `p_94154_` (`Predicate<String>`)

**Returns:** `public void`

### insertText

```java
public void insertText(String p_94165_)
```

**Parameters:**

- `p_94165_` (`String`)

**Returns:** `public void`

### onValueChange

```java
private void onValueChange(String p_94175_)
```

**Parameters:**

- `p_94175_` (`String`)

**Returns:** `private void`

### deleteText

```java
private void deleteText(int p_94218_)
```

**Parameters:**

- `p_94218_` (`int`)

**Returns:** `private void`

### deleteWords

```java
public void deleteWords(int p_94177_)
```

**Parameters:**

- `p_94177_` (`int`)

**Returns:** `public void`

### deleteChars

```java
public void deleteChars(int p_94181_)
```

**Parameters:**

- `p_94181_` (`int`)

**Returns:** `public void`

### deleteCharsToPos

```java
public void deleteCharsToPos(int p_314620_)
```

**Parameters:**

- `p_314620_` (`int`)

**Returns:** `public void`

### getWordPosition

```java
public int getWordPosition(int p_94185_)
```

**Parameters:**

- `p_94185_` (`int`)

**Returns:** `public int`

### getWordPosition

```java
private int getWordPosition(int p_94129_, int p_94130_)
```

**Parameters:**

- `p_94129_` (`int`)
- `p_94130_` (`int`)

**Returns:** `private int`

### getWordPosition

```java
private int getWordPosition(int p_94141_, int p_94142_, boolean p_94143_)
```

**Parameters:**

- `p_94141_` (`int`)
- `p_94142_` (`int`)
- `p_94143_` (`boolean`)

**Returns:** `private int`

### moveCursor

```java
public void moveCursor(int p_94189_, boolean p_295737_)
```

**Parameters:**

- `p_94189_` (`int`)
- `p_295737_` (`boolean`)

**Returns:** `public void`

### getCursorPos

```java
private int getCursorPos(int p_94221_)
```

**Parameters:**

- `p_94221_` (`int`)

**Returns:** `private int`

### moveCursorTo

```java
public void moveCursorTo(int p_94193_, boolean p_294422_)
```

**Parameters:**

- `p_94193_` (`int`)
- `p_294422_` (`boolean`)

**Returns:** `public void`

### setCursorPosition

```java
public void setCursorPosition(int p_94197_)
```

**Parameters:**

- `p_94197_` (`int`)

**Returns:** `public void`

### moveCursorToStart

```java
public void moveCursorToStart(boolean p_295890_)
```

**Parameters:**

- `p_295890_` (`boolean`)

**Returns:** `public void`

### moveCursorToEnd

```java
public void moveCursorToEnd(boolean p_296224_)
```

**Parameters:**

- `p_296224_` (`boolean`)

**Returns:** `public void`

### keyPressed

```java
public boolean keyPressed(int p_94132_, int p_94133_, int p_94134_)
```

**Parameters:**

- `p_94132_` (`int`)
- `p_94133_` (`int`)
- `p_94134_` (`int`)

**Returns:** `boolean`

### canConsumeInput

```java
public boolean canConsumeInput()
```

**Returns:** `public boolean`

### charTyped

```java
public boolean charTyped(char p_94122_, int p_94123_)
```

**Parameters:**

- `p_94122_` (`char`)
- `p_94123_` (`int`)

**Returns:** `boolean`

### onClick

```java
public void onClick(double p_279417_, double p_279437_)
```

**Parameters:**

- `p_279417_` (`double`)
- `p_279437_` (`double`)

### playDownSound

```java
public void playDownSound(SoundManager p_279245_)
```

**Parameters:**

- `p_279245_` (`SoundManager`)

### renderWidget

```java
public void renderWidget(GuiGraphics p_283252_, int p_281594_, int p_282100_, float p_283101_)
```

**Parameters:**

- `p_283252_` (`GuiGraphics`)
- `p_281594_` (`int`)
- `p_282100_` (`int`)
- `p_283101_` (`float`)

### renderHighlight

```java
private void renderHighlight(GuiGraphics p_281400_, int p_265338_, int p_265693_, int p_265618_, int p_265584_)
```

**Parameters:**

- `p_281400_` (`GuiGraphics`)
- `p_265338_` (`int`)
- `p_265693_` (`int`)
- `p_265618_` (`int`)
- `p_265584_` (`int`)

**Returns:** `private void`

### setMaxLength

```java
public void setMaxLength(int p_94200_)
```

**Parameters:**

- `p_94200_` (`int`)

**Returns:** `public void`

### getMaxLength

```java
private int getMaxLength()
```

**Returns:** `private int`

### getCursorPosition

```java
public int getCursorPosition()
```

**Returns:** `public int`

### isBordered

```java
public boolean isBordered()
```

**Returns:** `public boolean`

### setBordered

```java
public void setBordered(boolean p_94183_)
```

**Parameters:**

- `p_94183_` (`boolean`)

**Returns:** `public void`

### setTextColor

```java
public void setTextColor(int p_94203_)
```

**Parameters:**

- `p_94203_` (`int`)

**Returns:** `public void`

### setTextColorUneditable

```java
public void setTextColorUneditable(int p_94206_)
```

**Parameters:**

- `p_94206_` (`int`)

**Returns:** `public void`

### setFocused

```java
public void setFocused(boolean p_265520_)
```

**Parameters:**

- `p_265520_` (`boolean`)

### isEditable

```java
private boolean isEditable()
```

**Returns:** `private boolean`

### setEditable

```java
public void setEditable(boolean p_94187_)
```

**Parameters:**

- `p_94187_` (`boolean`)

**Returns:** `public void`

### getInnerWidth

```java
public int getInnerWidth()
```

**Returns:** `public int`

### setHighlightPos

```java
public void setHighlightPos(int p_94209_)
```

**Parameters:**

- `p_94209_` (`int`)

**Returns:** `public void`

### scrollTo

```java
private void scrollTo(int p_296429_)
```

**Parameters:**

- `p_296429_` (`int`)

**Returns:** `private void`

### setCanLoseFocus

```java
public void setCanLoseFocus(boolean p_94191_)
```

**Parameters:**

- `p_94191_` (`boolean`)

**Returns:** `public void`

### isVisible

```java
public boolean isVisible()
```

**Returns:** `public boolean`

### setVisible

```java
public void setVisible(boolean p_94195_)
```

**Parameters:**

- `p_94195_` (`boolean`)

**Returns:** `public void`

### setSuggestion

```java
public void setSuggestion(String p_94168_)
```

**Parameters:**

- `p_94168_` (`String`)

**Returns:** `public void`

### getScreenX

```java
public int getScreenX(int p_94212_)
```

**Parameters:**

- `p_94212_` (`int`)

**Returns:** `public int`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_259237_)
```

**Parameters:**

- `p_259237_` (`NarrationElementOutput`)

### setHint

```java
public void setHint(Component p_259584_)
```

**Parameters:**

- `p_259584_` (`Component`)

**Returns:** `public void`

### setTextShadow

```java
public void setTextShadow(boolean textShadow)
```

**Parameters:**

- `textShadow` (`boolean`)

**Returns:** `public void`

### getTextShadow

```java
public boolean getTextShadow()
```

**Returns:** `public boolean`
