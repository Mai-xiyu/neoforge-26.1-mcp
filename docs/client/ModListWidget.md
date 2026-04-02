# ModListWidget

**Package:** `net.neoforged.neoforge.client.gui.widget`
**Type:** class
**Extends:** `ObjectSelectionList<ModListWidget.ModEntry>`
**Side:** 🖥️ Client

## Methods

### stripControlCodes

```java
private static String stripControlCodes(String value)
```

**Parameters:**

- `value` (`String`)

**Returns:** `private static String`

### ModListWidget

```java
public ModListWidget(ModListScreen parent, int listWidth, int top, int bottom)
```

**Parameters:**

- `parent` (`ModListScreen`)
- `listWidth` (`int`)
- `top` (`int`)
- `bottom` (`int`)

**Returns:** `public`

### getScrollbarPosition

```java
protected int getScrollbarPosition()
```

**Returns:** `int`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### refreshList

```java
public void refreshList()
```

**Returns:** `public void`

### ModEntry

```java
 ModEntry(ModContainer info, ModListScreen parent)
```

**Parameters:**

- `info` (`ModContainer`)
- `parent` (`ModListScreen`)

**Returns:** ``

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics guiGraphics, int entryIdx, int top, int left, int entryWidth, int entryHeight, int mouseX, int mouseY, boolean isMouseOver, float partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `entryIdx` (`int`)
- `top` (`int`)
- `left` (`int`)
- `entryWidth` (`int`)
- `entryHeight` (`int`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `isMouseOver` (`boolean`)
- `partialTick` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_mouseClicked_1_, double p_mouseClicked_3_, int p_mouseClicked_5_)
```

**Parameters:**

- `p_mouseClicked_1_` (`double`)
- `p_mouseClicked_3_` (`double`)
- `p_mouseClicked_5_` (`int`)

**Returns:** `boolean`

### setFocused

```java
public void setFocused(boolean focused)
```

**Parameters:**

- `focused` (`boolean`)

### isFocused

```java
public boolean isFocused()
```

**Returns:** `boolean`

### getInfo

```java
public IModInfo getInfo()
```

**Returns:** `public IModInfo`

### getContainer

```java
public ModContainer getContainer()
```

**Returns:** `public ModContainer`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ModEntry` | class |  |
