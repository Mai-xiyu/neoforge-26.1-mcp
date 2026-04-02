# SmithingScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `ItemCombinerScreen<SmithingMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SmithingScreen

```java
public SmithingScreen(SmithingMenu p_99290_, Inventory p_99291_, Component p_99292_)
```

**Parameters:**

- `p_99290_` (`SmithingMenu`)
- `p_99291_` (`Inventory`)
- `p_99292_` (`Component`)

**Returns:** `public`

### subInit

```java
protected void subInit()
```

### containerTick

```java
public void containerTick()
```

### getTemplateItem

```java
private Optional<SmithingTemplateItem> getTemplateItem()
```

**Returns:** `private Optional<SmithingTemplateItem>`

### render

```java
public void render(GuiGraphics p_281961_, int p_282410_, int p_283013_, float p_282408_)
```

**Parameters:**

- `p_281961_` (`GuiGraphics`)
- `p_282410_` (`int`)
- `p_283013_` (`int`)
- `p_282408_` (`float`)

### renderBg

```java
protected void renderBg(GuiGraphics p_283264_, float p_267158_, int p_267266_, int p_266722_)
```

**Parameters:**

- `p_283264_` (`GuiGraphics`)
- `p_267158_` (`float`)
- `p_267266_` (`int`)
- `p_266722_` (`int`)

### slotChanged

```java
public void slotChanged(AbstractContainerMenu p_267217_, int p_266842_, ItemStack p_267208_)
```

**Parameters:**

- `p_267217_` (`AbstractContainerMenu`)
- `p_266842_` (`int`)
- `p_267208_` (`ItemStack`)

### updateArmorStandPreview

```java
private void updateArmorStandPreview(ItemStack p_268225_)
```

**Parameters:**

- `p_268225_` (`ItemStack`)

**Returns:** `private void`

### renderErrorIcon

```java
protected void renderErrorIcon(GuiGraphics p_281835_, int p_283389_, int p_282634_)
```

**Parameters:**

- `p_281835_` (`GuiGraphics`)
- `p_283389_` (`int`)
- `p_282634_` (`int`)

### renderOnboardingTooltips

```java
private void renderOnboardingTooltips(GuiGraphics p_281668_, int p_267192_, int p_266859_)
```

**Parameters:**

- `p_281668_` (`GuiGraphics`)
- `p_267192_` (`int`)
- `p_266859_` (`int`)

**Returns:** `private void`

### hasRecipeError

```java
private boolean hasRecipeError()
```

**Returns:** `private boolean`
