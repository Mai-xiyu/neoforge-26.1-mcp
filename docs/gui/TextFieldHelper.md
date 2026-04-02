# TextFieldHelper

**Package:** `net.minecraft.client.gui.font`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TextFieldHelper

```java
public TextFieldHelper(Supplier<String> p_95137_, Consumer<String> p_95138_, Supplier<String> p_95139_, Consumer<String> p_95140_, Predicate<String> p_95141_)
```

**Parameters:**

- `p_95137_` (`Supplier<String>`)
- `p_95138_` (`Consumer<String>`)
- `p_95139_` (`Supplier<String>`)
- `p_95140_` (`Consumer<String>`)
- `p_95141_` (`Predicate<String>`)

**Returns:** `public`

### createClipboardGetter

```java
public static Supplier<String> createClipboardGetter(Minecraft p_95154_)
```

**Parameters:**

- `p_95154_` (`Minecraft`)

**Returns:** `public static Supplier<String>`

### getClipboardContents

```java
> getClipboardContents()
```

**Returns:** `>`

### getClipboardContents

```java
public static String getClipboardContents(Minecraft p_95170_)
```

**Parameters:**

- `p_95170_` (`Minecraft`)

**Returns:** `public static String`

### createClipboardSetter

```java
public static Consumer<String> createClipboardSetter(Minecraft p_95183_)
```

**Parameters:**

- `p_95183_` (`Minecraft`)

**Returns:** `public static Consumer<String>`

### setClipboardContents

```java
> setClipboardContents()
```

**Returns:** `>`

### setClipboardContents

```java
public static void setClipboardContents(Minecraft p_95156_, String p_95157_)
```

**Parameters:**

- `p_95156_` (`Minecraft`)
- `p_95157_` (`String`)

**Returns:** `public static void`

### charTyped

```java
public boolean charTyped(char p_95144_)
```

**Parameters:**

- `p_95144_` (`char`)

**Returns:** `public boolean`

### keyPressed

```java
public boolean keyPressed(int p_95146_)
```

**Parameters:**

- `p_95146_` (`int`)

**Returns:** `public boolean`

### clampToMsgLength

```java
private int clampToMsgLength(int p_95196_)
```

**Parameters:**

- `p_95196_` (`int`)

**Returns:** `private int`

### insertText

```java
private void insertText(String p_95161_, String p_95162_)
```

**Parameters:**

- `p_95161_` (`String`)
- `p_95162_` (`String`)

**Returns:** `private void`

### insertText

```java
public void insertText(String p_95159_)
```

**Parameters:**

- `p_95159_` (`String`)

**Returns:** `public void`

### resetSelectionIfNeeded

```java
private void resetSelectionIfNeeded(boolean p_95164_)
```

**Parameters:**

- `p_95164_` (`boolean`)

**Returns:** `private void`

### moveBy

```java
public void moveBy(int p_232576_, boolean p_232577_, TextFieldHelper.CursorStep p_232578_)
```

**Parameters:**

- `p_232576_` (`int`)
- `p_232577_` (`boolean`)
- `p_232578_` (`TextFieldHelper.CursorStep`)

**Returns:** `public void`

### moveByChars

```java
public void moveByChars(int p_169094_)
```

**Parameters:**

- `p_169094_` (`int`)

**Returns:** `public void`

### moveByChars

```java
public void moveByChars(int p_95151_, boolean p_95152_)
```

**Parameters:**

- `p_95151_` (`int`)
- `p_95152_` (`boolean`)

**Returns:** `public void`

### moveByWords

```java
public void moveByWords(int p_169096_)
```

**Parameters:**

- `p_169096_` (`int`)

**Returns:** `public void`

### moveByWords

```java
public void moveByWords(int p_95167_, boolean p_95168_)
```

**Parameters:**

- `p_95167_` (`int`)
- `p_95168_` (`boolean`)

**Returns:** `public void`

### removeFromCursor

```java
public void removeFromCursor(int p_232573_, TextFieldHelper.CursorStep p_232574_)
```

**Parameters:**

- `p_232573_` (`int`)
- `p_232574_` (`TextFieldHelper.CursorStep`)

**Returns:** `public void`

### removeWordsFromCursor

```java
public void removeWordsFromCursor(int p_232580_)
```

**Parameters:**

- `p_232580_` (`int`)

**Returns:** `public void`

### removeCharsFromCursor

```java
public void removeCharsFromCursor(int p_95190_)
```

**Parameters:**

- `p_95190_` (`int`)

**Returns:** `public void`

### cut

```java
public void cut()
```

**Returns:** `public void`

### paste

```java
public void paste()
```

**Returns:** `public void`

### copy

```java
public void copy()
```

**Returns:** `public void`

### selectAll

```java
public void selectAll()
```

**Returns:** `public void`

### getSelected

```java
private String getSelected(String p_95175_)
```

**Parameters:**

- `p_95175_` (`String`)

**Returns:** `private String`

### deleteSelection

```java
private String deleteSelection(String p_95185_)
```

**Parameters:**

- `p_95185_` (`String`)

**Returns:** `private String`

### setCursorToStart

```java
public void setCursorToStart()
```

**Returns:** `public void`

### setCursorToStart

```java
public void setCursorToStart(boolean p_95177_)
```

**Parameters:**

- `p_95177_` (`boolean`)

**Returns:** `public void`

### setCursorToEnd

```java
public void setCursorToEnd()
```

**Returns:** `public void`

### setCursorToEnd

```java
public void setCursorToEnd(boolean p_95187_)
```

**Parameters:**

- `p_95187_` (`boolean`)

**Returns:** `public void`

### getCursorPos

```java
public int getCursorPos()
```

**Returns:** `public int`

### setCursorPos

```java
public void setCursorPos(int p_169099_)
```

**Parameters:**

- `p_169099_` (`int`)

**Returns:** `public void`

### setCursorPos

```java
public void setCursorPos(int p_95180_, boolean p_95181_)
```

**Parameters:**

- `p_95180_` (`int`)
- `p_95181_` (`boolean`)

**Returns:** `public void`

### getSelectionPos

```java
public int getSelectionPos()
```

**Returns:** `public int`

### setSelectionPos

```java
public void setSelectionPos(int p_169101_)
```

**Parameters:**

- `p_169101_` (`int`)

**Returns:** `public void`

### setSelectionRange

```java
public void setSelectionRange(int p_95148_, int p_95149_)
```

**Parameters:**

- `p_95148_` (`int`)
- `p_95149_` (`int`)

**Returns:** `public void`

### isSelecting

```java
public boolean isSelecting()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CursorStep` | enum |  |
