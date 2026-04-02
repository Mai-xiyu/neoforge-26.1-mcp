# MultilineTextField

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_CHARACTER_LIMIT` | `int` |  |

## Methods

### MultilineTextField

```java
public MultilineTextField(Font p_239611_, int p_239612_)
```

**Parameters:**

- `p_239611_` (`Font`)
- `p_239612_` (`int`)

**Returns:** `public`

### characterLimit

```java
public int characterLimit()
```

**Returns:** `public int`

### setCharacterLimit

```java
public void setCharacterLimit(int p_240163_)
```

**Parameters:**

- `p_240163_` (`int`)

**Returns:** `public void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Character limit cannot be negative")
```

**Parameters:**

- `negative"` (`"Character limit cannot be`)

**Returns:** `throw new`

### hasCharacterLimit

```java
public boolean hasCharacterLimit()
```

**Returns:** `public boolean`

### setValueListener

```java
public void setValueListener(Consumer<String> p_239920_)
```

**Parameters:**

- `p_239920_` (`Consumer<String>`)

**Returns:** `public void`

### setCursorListener

```java
public void setCursorListener(Runnable p_239258_)
```

**Parameters:**

- `p_239258_` (`Runnable`)

**Returns:** `public void`

### setValue

```java
public void setValue(String p_239678_)
```

**Parameters:**

- `p_239678_` (`String`)

**Returns:** `public void`

### value

```java
public String value()
```

**Returns:** `public String`

### insertText

```java
public void insertText(String p_240016_)
```

**Parameters:**

- `p_240016_` (`String`)

**Returns:** `public void`

### deleteText

```java
public void deleteText(int p_239475_)
```

**Parameters:**

- `p_239475_` (`int`)

**Returns:** `public void`

### cursor

```java
public int cursor()
```

**Returns:** `public int`

### setSelecting

```java
public void setSelecting(boolean p_239951_)
```

**Parameters:**

- `p_239951_` (`boolean`)

**Returns:** `public void`

### getSelected

```java
public MultilineTextField.StringView getSelected()
```

**Returns:** `public MultilineTextField.StringView`

### getLineCount

```java
public int getLineCount()
```

**Returns:** `public int`

### getLineAtCursor

```java
public int getLineAtCursor()
```

**Returns:** `public int`

### getLineView

```java
public MultilineTextField.StringView getLineView(int p_239145_)
```

**Parameters:**

- `p_239145_` (`int`)

**Returns:** `public MultilineTextField.StringView`

### seekCursor

```java
public void seekCursor(Whence p_239798_, int p_239799_)
```

**Parameters:**

- `p_239798_` (`Whence`)
- `p_239799_` (`int`)

**Returns:** `public void`

### seekCursorLine

```java
public void seekCursorLine(int p_239394_)
```

**Parameters:**

- `p_239394_` (`int`)

**Returns:** `public void`

### seekCursorToPoint

```java
public void seekCursorToPoint(double p_239579_, double p_239580_)
```

**Parameters:**

- `p_239579_` (`double`)
- `p_239580_` (`double`)

**Returns:** `public void`

### keyPressed

```java
public boolean keyPressed(int p_239712_)
```

**Parameters:**

- `p_239712_` (`int`)

**Returns:** `public boolean`

### iterateLines

```java
public Iterable<MultilineTextField.StringView> iterateLines()
```

**Returns:** `public Iterable<MultilineTextField.StringView>`

### hasSelection

```java
public boolean hasSelection()
```

**Returns:** `public boolean`

### getSelectedText

```java
public String getSelectedText()
```

**Returns:** `String`

### getCursorLineView

```java
private MultilineTextField.StringView getCursorLineView()
```

**Returns:** `private MultilineTextField.StringView`

### getCursorLineView

```java
private MultilineTextField.StringView getCursorLineView(int p_239855_)
```

**Parameters:**

- `p_239855_` (`int`)

**Returns:** `private MultilineTextField.StringView`

### getPreviousWord

```java
public MultilineTextField.StringView getPreviousWord()
```

**Returns:** `MultilineTextField.StringView`

### getNextWord

```java
public MultilineTextField.StringView getNextWord()
```

**Returns:** `MultilineTextField.StringView`

### getWordEndPosition

```java
private int getWordEndPosition(int p_240093_)
```

**Parameters:**

- `p_240093_` (`int`)

**Returns:** `private int`

### onValueChange

```java
private void onValueChange()
```

**Returns:** `private void`

### reflowDisplayLines

```java
private void reflowDisplayLines()
```

**Returns:** `private void`

### truncateFullText

```java
private String truncateFullText(String p_239843_)
```

**Parameters:**

- `p_239843_` (`String`)

**Returns:** `private String`

### truncateInsertionText

```java
private String truncateInsertionText(String p_239418_)
```

**Parameters:**

- `p_239418_` (`String`)

**Returns:** `private String`

### StringView

```java
protected static record StringView(int beginIndex, int endIndex)
```

**Parameters:**

- `beginIndex` (`int`)
- `endIndex` (`int`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StringView` | record |  |
