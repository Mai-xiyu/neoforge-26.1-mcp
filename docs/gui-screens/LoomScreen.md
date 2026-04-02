# LoomScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<LoomMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LoomScreen

```java
public LoomScreen(LoomMenu p_99075_, Inventory p_99076_, Component p_99077_)
```

**Parameters:**

- `p_99075_` (`LoomMenu`)
- `p_99076_` (`Inventory`)
- `p_99077_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### render

```java
public void render(GuiGraphics p_283513_, int p_282700_, int p_282637_, float p_281433_)
```

**Parameters:**

- `p_283513_` (`GuiGraphics`)
- `p_282700_` (`int`)
- `p_282637_` (`int`)
- `p_281433_` (`float`)

### totalRowCount

```java
private int totalRowCount()
```

**Returns:** `private int`

### renderBg

```java
protected void renderBg(GuiGraphics p_282870_, float p_281777_, int p_283331_, int p_283087_)
```

**Parameters:**

- `p_282870_` (`GuiGraphics`)
- `p_281777_` (`float`)
- `p_283331_` (`int`)
- `p_283087_` (`int`)

### renderPattern

```java
private void renderPattern(GuiGraphics p_282452_, Holder<BannerPattern> p_281940_, int p_281872_, int p_282995_)
```

**Parameters:**

- `p_282452_` (`GuiGraphics`)
- `p_281940_` (`Holder<BannerPattern>`)
- `p_281872_` (`int`)
- `p_282995_` (`int`)

**Returns:** `private void`

### mouseClicked

```java
public boolean mouseClicked(double p_99083_, double p_99084_, int p_99085_)
```

**Parameters:**

- `p_99083_` (`double`)
- `p_99084_` (`double`)
- `p_99085_` (`int`)

**Returns:** `boolean`

### mouseDragged

```java
public boolean mouseDragged(double p_99087_, double p_99088_, int p_99089_, double p_99090_, double p_99091_)
```

**Parameters:**

- `p_99087_` (`double`)
- `p_99088_` (`double`)
- `p_99089_` (`int`)
- `p_99090_` (`double`)
- `p_99091_` (`double`)

**Returns:** `boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_99079_, double p_99080_, double p_99081_, double p_295430_)
```

**Parameters:**

- `p_99079_` (`double`)
- `p_99080_` (`double`)
- `p_99081_` (`double`)
- `p_295430_` (`double`)

**Returns:** `boolean`

### hasClickedOutside

```java
protected boolean hasClickedOutside(double p_99093_, double p_99094_, int p_99095_, int p_99096_, int p_99097_)
```

**Parameters:**

- `p_99093_` (`double`)
- `p_99094_` (`double`)
- `p_99095_` (`int`)
- `p_99096_` (`int`)
- `p_99097_` (`int`)

**Returns:** `boolean`

### containerChanged

```java
private void containerChanged()
```

**Returns:** `private void`
