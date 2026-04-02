# TransferableSelectionList

**Package:** `net.minecraft.client.gui.screens.packs`
**Type:** class
**Extends:** `ObjectSelectionList<TransferableSelectionList.PackEntry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `minecraft` | `Minecraft` |  |

## Methods

### TransferableSelectionList

```java
public TransferableSelectionList(Minecraft p_265029_, PackSelectionScreen p_265777_, int p_265774_, int p_265153_, Component p_265124_)
```

**Parameters:**

- `p_265029_` (`Minecraft`)
- `p_265777_` (`PackSelectionScreen`)
- `p_265774_` (`int`)
- `p_265153_` (`int`)
- `p_265124_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderHeader

```java
protected void renderHeader(GuiGraphics p_282135_, int p_282032_, int p_283198_)
```

**Parameters:**

- `p_282135_` (`GuiGraphics`)
- `p_282032_` (`int`)
- `p_283198_` (`int`)

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### getScrollbarPosition

```java
protected int getScrollbarPosition()
```

**Returns:** `int`

### renderSelection

```java
protected void renderSelection(GuiGraphics p_331958_, int p_331723_, int p_331974_, int p_330822_, int p_330632_, int p_331721_)
```

**Parameters:**

- `p_331958_` (`GuiGraphics`)
- `p_331723_` (`int`)
- `p_331974_` (`int`)
- `p_330822_` (`int`)
- `p_330632_` (`int`)
- `p_331721_` (`int`)

### keyPressed

```java
public boolean keyPressed(int p_265499_, int p_265510_, int p_265548_)
```

**Parameters:**

- `p_265499_` (`int`)
- `p_265510_` (`int`)
- `p_265548_` (`int`)

**Returns:** `boolean`

### PackEntry

```java
public PackEntry(Minecraft p_265717_, TransferableSelectionList p_265075_, PackSelectionModel.Entry p_265360_)
```

**Parameters:**

- `p_265717_` (`Minecraft`)
- `p_265075_` (`TransferableSelectionList`)
- `p_265360_` (`PackSelectionModel.Entry`)

**Returns:** `public`

### cacheName

```java
private static FormattedCharSequence cacheName(Minecraft p_100105_, Component p_100106_)
```

**Parameters:**

- `p_100105_` (`Minecraft`)
- `p_100106_` (`Component`)

**Returns:** `private static FormattedCharSequence`

### cacheDescription

```java
private static MultiLineLabel cacheDescription(Minecraft p_100110_, Component p_100111_)
```

**Parameters:**

- `p_100110_` (`Minecraft`)
- `p_100111_` (`Component`)

**Returns:** `private static MultiLineLabel`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics p_281314_, int p_283311_, int p_281984_, int p_282250_, int p_281869_, int p_283138_, int p_282529_, int p_282107_, boolean p_282429_, float p_282306_)
```

**Parameters:**

- `p_281314_` (`GuiGraphics`)
- `p_283311_` (`int`)
- `p_281984_` (`int`)
- `p_282250_` (`int`)
- `p_281869_` (`int`)
- `p_283138_` (`int`)
- `p_282529_` (`int`)
- `p_282107_` (`int`)
- `p_282429_` (`boolean`)
- `p_282306_` (`float`)

### getPackId

```java
public String getPackId()
```

**Returns:** `public String`

### showHoverOverlay

```java
private boolean showHoverOverlay()
```

**Returns:** `private boolean`

### keyboardSelection

```java
public void keyboardSelection()
```

**Returns:** `public void`

### keyboardMoveUp

```java
void keyboardMoveUp()
```

### keyboardMoveDown

```java
void keyboardMoveDown()
```

### handlePackSelection

```java
private boolean handlePackSelection()
```

**Returns:** `private boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_100090_, double p_100091_, int p_100092_)
```

**Parameters:**

- `p_100090_` (`double`)
- `p_100091_` (`double`)
- `p_100092_` (`int`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PackEntry` | class |  |
