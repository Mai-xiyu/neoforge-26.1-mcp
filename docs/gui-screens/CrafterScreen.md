# CrafterScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<CrafterMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CrafterScreen

```java
public CrafterScreen(CrafterMenu p_307225_, Inventory p_307403_, Component p_307629_)
```

**Parameters:**

- `p_307225_` (`CrafterMenu`)
- `p_307403_` (`Inventory`)
- `p_307629_` (`Component`)

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

### slotClicked

```java
protected void slotClicked(Slot p_307465_, int p_307203_, int p_307325_, ClickType p_307680_)
```

**Parameters:**

- `p_307465_` (`Slot`)
- `p_307203_` (`int`)
- `p_307325_` (`int`)
- `p_307680_` (`ClickType`)

### enableSlot

```java
private void enableSlot(int p_309075_)
```

**Parameters:**

- `p_309075_` (`int`)

**Returns:** `private void`

### disableSlot

```java
private void disableSlot(int p_308981_)
```

**Parameters:**

- `p_308981_` (`int`)

**Returns:** `private void`

### updateSlotState

```java
private void updateSlotState(int p_308878_, boolean p_309127_)
```

**Parameters:**

- `p_308878_` (`int`)
- `p_309127_` (`boolean`)

**Returns:** `private void`

### renderSlot

```java
public void renderSlot(GuiGraphics p_307608_, Slot p_307570_)
```

**Parameters:**

- `p_307608_` (`GuiGraphics`)
- `p_307570_` (`Slot`)

### renderDisabledSlot

```java
private void renderDisabledSlot(GuiGraphics p_307416_, CrafterSlot p_307247_)
```

**Parameters:**

- `p_307416_` (`GuiGraphics`)
- `p_307247_` (`CrafterSlot`)

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_307196_, int p_307586_, int p_307288_, float p_307623_)
```

**Parameters:**

- `p_307196_` (`GuiGraphics`)
- `p_307586_` (`int`)
- `p_307288_` (`int`)
- `p_307623_` (`float`)

### renderRedstone

```java
private void renderRedstone(GuiGraphics p_307600_)
```

**Parameters:**

- `p_307600_` (`GuiGraphics`)

**Returns:** `private void`

### renderBg

```java
protected void renderBg(GuiGraphics p_307513_, float p_307580_, int p_307561_, int p_307248_)
```

**Parameters:**

- `p_307513_` (`GuiGraphics`)
- `p_307580_` (`float`)
- `p_307561_` (`int`)
- `p_307248_` (`int`)
