# StonecutterScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<StonecutterMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### StonecutterScreen

```java
public StonecutterScreen(StonecutterMenu p_99310_, Inventory p_99311_, Component p_99312_)
```

**Parameters:**

- `p_99310_` (`StonecutterMenu`)
- `p_99311_` (`Inventory`)
- `p_99312_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(GuiGraphics p_281735_, int p_282517_, int p_282840_, float p_282389_)
```

**Parameters:**

- `p_281735_` (`GuiGraphics`)
- `p_282517_` (`int`)
- `p_282840_` (`int`)
- `p_282389_` (`float`)

### renderBg

```java
protected void renderBg(GuiGraphics p_283115_, float p_282453_, int p_282940_, int p_282328_)
```

**Parameters:**

- `p_283115_` (`GuiGraphics`)
- `p_282453_` (`float`)
- `p_282940_` (`int`)
- `p_282328_` (`int`)

### renderTooltip

```java
protected void renderTooltip(GuiGraphics p_282396_, int p_283157_, int p_282258_)
```

**Parameters:**

- `p_282396_` (`GuiGraphics`)
- `p_283157_` (`int`)
- `p_282258_` (`int`)

### renderButtons

```java
private void renderButtons(GuiGraphics p_282733_, int p_282136_, int p_282147_, int p_281987_, int p_281276_, int p_282688_)
```

**Parameters:**

- `p_282733_` (`GuiGraphics`)
- `p_282136_` (`int`)
- `p_282147_` (`int`)
- `p_281987_` (`int`)
- `p_281276_` (`int`)
- `p_282688_` (`int`)

**Returns:** `private void`

### renderRecipes

```java
private void renderRecipes(GuiGraphics p_281999_, int p_282658_, int p_282563_, int p_283352_)
```

**Parameters:**

- `p_281999_` (`GuiGraphics`)
- `p_282658_` (`int`)
- `p_282563_` (`int`)
- `p_283352_` (`int`)

**Returns:** `private void`

### mouseClicked

```java
public boolean mouseClicked(double p_99318_, double p_99319_, int p_99320_)
```

**Parameters:**

- `p_99318_` (`double`)
- `p_99319_` (`double`)
- `p_99320_` (`int`)

**Returns:** `boolean`

### mouseDragged

```java
public boolean mouseDragged(double p_99322_, double p_99323_, int p_99324_, double p_99325_, double p_99326_)
```

**Parameters:**

- `p_99322_` (`double`)
- `p_99323_` (`double`)
- `p_99324_` (`int`)
- `p_99325_` (`double`)
- `p_99326_` (`double`)

**Returns:** `boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_99314_, double p_99315_, double p_99316_, double p_295672_)
```

**Parameters:**

- `p_99314_` (`double`)
- `p_99315_` (`double`)
- `p_99316_` (`double`)
- `p_295672_` (`double`)

**Returns:** `boolean`

### isScrollBarActive

```java
private boolean isScrollBarActive()
```

**Returns:** `private boolean`

### getOffscreenRows

```java
protected int getOffscreenRows()
```

**Returns:** `protected int`

### containerChanged

```java
private void containerChanged()
```

**Returns:** `private void`
