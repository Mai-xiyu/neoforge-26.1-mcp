# RealmsPlayerScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsPlayerScreen

```java
public RealmsPlayerScreen(RealmsConfigureWorldScreen p_89089_, RealmsServer p_89090_)
```

**Parameters:**

- `p_89089_` (`RealmsConfigureWorldScreen`)
- `p_89090_` (`RealmsServer`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
public void init()
```

### repositionElements

```java
protected void repositionElements()
```

### repopulateInvitedList

```java
void repopulateInvitedList()
```

### onClose

```java
public void onClose()
```

### backButtonClicked

```java
private void backButtonClicked()
```

**Returns:** `private void`

### Entry

```java
public Entry(PlayerInfo p_89204_)
```

**Parameters:**

- `p_89204_` (`PlayerInfo`)

**Returns:** `public`

### op

```java
private void op(int p_331202_)
```

**Parameters:**

- `p_331202_` (`int`)

**Returns:** `private void`

### deop

```java
private void deop(int p_331659_)
```

**Parameters:**

- `p_331659_` (`int`)

**Returns:** `private void`

### uninvite

```java
private void uninvite(int p_330606_)
```

**Parameters:**

- `p_330606_` (`int`)

**Returns:** `private void`

### updateOps

```java
private void updateOps(Ops p_330984_)
```

**Parameters:**

- `p_330984_` (`Ops`)

**Returns:** `private void`

### updateOpButtons

```java
private void updateOpButtons()
```

**Returns:** `private void`

### activeOpButton

```java
private Button activeOpButton()
```

**Returns:** `private Button`

### children

```java
public List<? extends GuiEventListener> children()
```

**Returns:** `List<? extends GuiEventListener>`

### narratables

```java
public List<? extends NarratableEntry> narratables()
```

**Returns:** `List<? extends NarratableEntry>`

### render

```java
public void render(GuiGraphics p_282985_, int p_281343_, int p_283042_, int p_282863_, int p_281381_, int p_282692_, int p_283240_, int p_282706_, boolean p_283067_, float p_282230_)
```

**Parameters:**

- `p_282985_` (`GuiGraphics`)
- `p_281343_` (`int`)
- `p_283042_` (`int`)
- `p_282863_` (`int`)
- `p_281381_` (`int`)
- `p_282692_` (`int`)
- `p_283240_` (`int`)
- `p_282706_` (`int`)
- `p_283067_` (`boolean`)
- `p_282230_` (`float`)

### InvitedObjectSelectionList

```java
public InvitedObjectSelectionList()
```

**Returns:** `public`

### renderHeader

```java
protected void renderHeader(GuiGraphics p_331651_, int p_330785_, int p_331045_)
```

**Parameters:**

- `p_331651_` (`GuiGraphics`)
- `p_330785_` (`int`)
- `p_331045_` (`int`)

### getMaxPosition

```java
public int getMaxPosition()
```

**Returns:** `int`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`
