# InventoryScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `EffectRenderingInventoryScreen<InventoryMenu>`
**Implements:** `RecipeUpdateListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### InventoryScreen

```java
public InventoryScreen(Player p_98839_)
```

**Parameters:**

- `p_98839_` (`Player`)

**Returns:** `public`

### containerTick

```java
public void containerTick()
```

### init

```java
protected void init()
```

### renderLabels

```java
protected void renderLabels(GuiGraphics p_281654_, int p_283517_, int p_283464_)
```

**Parameters:**

- `p_281654_` (`GuiGraphics`)
- `p_283517_` (`int`)
- `p_283464_` (`int`)

### render

```java
public void render(GuiGraphics p_283246_, int p_98876_, int p_98877_, float p_98878_)
```

**Parameters:**

- `p_283246_` (`GuiGraphics`)
- `p_98876_` (`int`)
- `p_98877_` (`int`)
- `p_98878_` (`float`)

### renderBg

```java
protected void renderBg(GuiGraphics p_281500_, float p_281299_, int p_283481_, int p_281831_)
```

**Parameters:**

- `p_281500_` (`GuiGraphics`)
- `p_281299_` (`float`)
- `p_283481_` (`int`)
- `p_281831_` (`int`)

### renderEntityInInventoryFollowsMouse

```java
 renderEntityInInventoryFollowsMouse(i + 26, j + 8, i + 75, j + 78)
```

**Parameters:**

- `26` (`i +`)
- `8` (`j +`)
- `75` (`i +`)
- `78` (`j +`)

**Returns:** ``

### renderEntityInInventoryFollowsMouse

```java
public static void renderEntityInInventoryFollowsMouse(GuiGraphics p_282802_, int p_275688_, int p_275245_, int p_275535_, int p_294406_, int p_294663_, float p_275604_, float p_275546_, float p_295352_, LivingEntity p_275689_)
```

**Parameters:**

- `p_282802_` (`GuiGraphics`)
- `p_275688_` (`int`)
- `p_275245_` (`int`)
- `p_275535_` (`int`)
- `p_294406_` (`int`)
- `p_294663_` (`int`)
- `p_275604_` (`float`)
- `p_275546_` (`float`)
- `p_295352_` (`float`)
- `p_275689_` (`LivingEntity`)

**Returns:** `public static void`

### renderEntityInInventoryFollowsAngle

```java
Allow passing in direct angle components instead of mouse position renderEntityInInventoryFollowsAngle()
```

**Returns:** `Allow passing in direct angle components instead of mouse position`

### renderEntityInInventoryFollowsAngle

```java
public static void renderEntityInInventoryFollowsAngle(GuiGraphics p_282802_, int p_275688_, int p_275245_, int p_275535_, int p_294406_, int p_294663_, float p_275604_, float angleXComponent, float angleYComponent, LivingEntity p_275689_)
```

**Parameters:**

- `p_282802_` (`GuiGraphics`)
- `p_275688_` (`int`)
- `p_275245_` (`int`)
- `p_275535_` (`int`)
- `p_294406_` (`int`)
- `p_294663_` (`int`)
- `p_275604_` (`float`)
- `angleXComponent` (`float`)
- `angleYComponent` (`float`)
- `p_275689_` (`LivingEntity`)

**Returns:** `public static void`

### renderEntityInInventory

```java
 renderEntityInInventory()
```

**Returns:** ``

### renderEntityInInventory

```java
public static void renderEntityInInventory(GuiGraphics p_282665_, float p_296361_, float p_294489_, float p_319934_, Vector3f p_295026_, Quaternionf p_281880_, Quaternionf p_282882_, LivingEntity p_282466_)
```

**Parameters:**

- `p_282665_` (`GuiGraphics`)
- `p_296361_` (`float`)
- `p_294489_` (`float`)
- `p_319934_` (`float`)
- `p_295026_` (`Vector3f`)
- `p_281880_` (`Quaternionf`)
- `p_282882_` (`Quaternionf`)
- `p_282466_` (`LivingEntity`)

**Returns:** `public static void`

### keyPressed

```java
public boolean keyPressed(int p_320845_, int p_320304_, int p_320884_)
```

**Parameters:**

- `p_320845_` (`int`)
- `p_320304_` (`int`)
- `p_320884_` (`int`)

**Returns:** `boolean`

### charTyped

```java
public boolean charTyped(char p_319842_, int p_320393_)
```

**Parameters:**

- `p_319842_` (`char`)
- `p_320393_` (`int`)

**Returns:** `boolean`

### isHovering

```java
protected boolean isHovering(int p_98858_, int p_98859_, int p_98860_, int p_98861_, double p_98862_, double p_98863_)
```

**Parameters:**

- `p_98858_` (`int`)
- `p_98859_` (`int`)
- `p_98860_` (`int`)
- `p_98861_` (`int`)
- `p_98862_` (`double`)
- `p_98863_` (`double`)

**Returns:** `boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_98841_, double p_98842_, int p_98843_)
```

**Parameters:**

- `p_98841_` (`double`)
- `p_98842_` (`double`)
- `p_98843_` (`int`)

**Returns:** `boolean`

### mouseReleased

```java
public boolean mouseReleased(double p_98893_, double p_98894_, int p_98895_)
```

**Parameters:**

- `p_98893_` (`double`)
- `p_98894_` (`double`)
- `p_98895_` (`int`)

**Returns:** `boolean`

### hasClickedOutside

```java
protected boolean hasClickedOutside(double p_98845_, double p_98846_, int p_98847_, int p_98848_, int p_98849_)
```

**Parameters:**

- `p_98845_` (`double`)
- `p_98846_` (`double`)
- `p_98847_` (`int`)
- `p_98848_` (`int`)
- `p_98849_` (`int`)

**Returns:** `boolean`

### slotClicked

```java
protected void slotClicked(Slot p_98865_, int p_98866_, int p_98867_, ClickType p_98868_)
```

**Parameters:**

- `p_98865_` (`Slot`)
- `p_98866_` (`int`)
- `p_98867_` (`int`)
- `p_98868_` (`ClickType`)

### recipesUpdated

```java
public void recipesUpdated()
```

### getRecipeBookComponent

```java
public RecipeBookComponent getRecipeBookComponent()
```

**Returns:** `RecipeBookComponent`
