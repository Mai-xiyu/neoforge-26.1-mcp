# CraftingScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<CraftingMenu>`
**Implements:** `RecipeUpdateListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CraftingScreen

```java
public CraftingScreen(CraftingMenu p_98448_, Inventory p_98449_, Component p_98450_)
```

**Parameters:**

- `p_98448_` (`CraftingMenu`)
- `p_98449_` (`Inventory`)
- `p_98450_` (`Component`)

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

### containerTick

```java
public void containerTick()
```

### render

```java
public void render(GuiGraphics p_282508_, int p_98480_, int p_98481_, float p_98482_)
```

**Parameters:**

- `p_282508_` (`GuiGraphics`)
- `p_98480_` (`int`)
- `p_98481_` (`int`)
- `p_98482_` (`float`)

### renderBg

```java
protected void renderBg(GuiGraphics p_283540_, float p_282132_, int p_283078_, int p_283647_)
```

**Parameters:**

- `p_283540_` (`GuiGraphics`)
- `p_282132_` (`float`)
- `p_283078_` (`int`)
- `p_283647_` (`int`)

### keyPressed

```java
public boolean keyPressed(int p_320488_, int p_320952_, int p_320483_)
```

**Parameters:**

- `p_320488_` (`int`)
- `p_320952_` (`int`)
- `p_320483_` (`int`)

**Returns:** `boolean`

### charTyped

```java
public boolean charTyped(char p_320706_, int p_320696_)
```

**Parameters:**

- `p_320706_` (`char`)
- `p_320696_` (`int`)

**Returns:** `boolean`

### isHovering

```java
protected boolean isHovering(int p_98462_, int p_98463_, int p_98464_, int p_98465_, double p_98466_, double p_98467_)
```

**Parameters:**

- `p_98462_` (`int`)
- `p_98463_` (`int`)
- `p_98464_` (`int`)
- `p_98465_` (`int`)
- `p_98466_` (`double`)
- `p_98467_` (`double`)

**Returns:** `boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_98452_, double p_98453_, int p_98454_)
```

**Parameters:**

- `p_98452_` (`double`)
- `p_98453_` (`double`)
- `p_98454_` (`int`)

**Returns:** `boolean`

### hasClickedOutside

```java
protected boolean hasClickedOutside(double p_98456_, double p_98457_, int p_98458_, int p_98459_, int p_98460_)
```

**Parameters:**

- `p_98456_` (`double`)
- `p_98457_` (`double`)
- `p_98458_` (`int`)
- `p_98459_` (`int`)
- `p_98460_` (`int`)

**Returns:** `boolean`

### slotClicked

```java
protected void slotClicked(Slot p_98469_, int p_98470_, int p_98471_, ClickType p_98472_)
```

**Parameters:**

- `p_98469_` (`Slot`)
- `p_98470_` (`int`)
- `p_98471_` (`int`)
- `p_98472_` (`ClickType`)

### recipesUpdated

```java
public void recipesUpdated()
```

### getRecipeBookComponent

```java
public RecipeBookComponent getRecipeBookComponent()
```

**Returns:** `RecipeBookComponent`
