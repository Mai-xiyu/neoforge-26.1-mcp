# OverlayRecipeComponent

**Package:** `net.minecraft.client.gui.screens.recipebook`
**Type:** class
**Implements:** `Renderable`, `GuiEventListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BUTTON_SIZE` | `int` |  |

## Methods

### init

```java
public void init(Minecraft p_100195_, RecipeCollection p_100196_, int p_100197_, int p_100198_, int p_100199_, int p_100200_, float p_100201_)
```

**Parameters:**

- `p_100195_` (`Minecraft`)
- `p_100196_` (`RecipeCollection`)
- `p_100197_` (`int`)
- `p_100198_` (`int`)
- `p_100199_` (`int`)
- `p_100200_` (`int`)
- `p_100201_` (`float`)

**Returns:** `public void`

### getRecipeCollection

```java
public RecipeCollection getRecipeCollection()
```

**Returns:** `public RecipeCollection`

### getLastRecipeClicked

```java
public RecipeHolder<?> getLastRecipeClicked()
```

**Returns:** `RecipeHolder<?>`

### mouseClicked

```java
public boolean mouseClicked(double p_100186_, double p_100187_, int p_100188_)
```

**Parameters:**

- `p_100186_` (`double`)
- `p_100187_` (`double`)
- `p_100188_` (`int`)

**Returns:** `boolean`

### isMouseOver

```java
public boolean isMouseOver(double p_100208_, double p_100209_)
```

**Parameters:**

- `p_100208_` (`double`)
- `p_100209_` (`double`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_281618_, int p_282646_, int p_283687_, float p_283147_)
```

**Parameters:**

- `p_281618_` (`GuiGraphics`)
- `p_282646_` (`int`)
- `p_283687_` (`int`)
- `p_283147_` (`float`)

### setVisible

```java
public void setVisible(boolean p_100205_)
```

**Parameters:**

- `p_100205_` (`boolean`)

**Returns:** `public void`

### isVisible

```java
public boolean isVisible()
```

**Returns:** `public boolean`

### setFocused

```java
public void setFocused(boolean p_265597_)
```

**Parameters:**

- `p_265597_` (`boolean`)

### isFocused

```java
public boolean isFocused()
```

**Returns:** `boolean`

### OverlayRecipeButton

```java
public OverlayRecipeButton(int p_100232_, int p_100233_, RecipeHolder<?> p_301240_, boolean p_100235_)
```

**Parameters:**

- `p_100232_` (`int`)
- `p_100233_` (`int`)
- `p_301240_` (`RecipeHolder<?>`)
- `p_100235_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateIngredientsPositions

```java
protected void calculateIngredientsPositions(RecipeHolder<?> p_301128_)
```

**Parameters:**

- `p_301128_` (`RecipeHolder<?>`)

**Returns:** `protected void`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_259646_)
```

**Parameters:**

- `p_259646_` (`NarrationElementOutput`)

### addItemToSlot

```java
public void addItemToSlot(Ingredient p_344853_, int p_100241_, int p_100242_, int p_100243_, int p_100244_)
```

**Parameters:**

- `p_344853_` (`Ingredient`)
- `p_100241_` (`int`)
- `p_100242_` (`int`)
- `p_100243_` (`int`)
- `p_100244_` (`int`)

**Returns:** `public void`

### renderWidget

```java
public void renderWidget(GuiGraphics p_283557_, int p_283483_, int p_282919_, float p_282165_)
```

**Parameters:**

- `p_283557_` (`GuiGraphics`)
- `p_283483_` (`int`)
- `p_282919_` (`int`)
- `p_282165_` (`float`)

### Pos

```java
public Pos(int p_100256_, int p_100257_, ItemStack[] p_100258_)
```

**Parameters:**

- `p_100256_` (`int`)
- `p_100257_` (`int`)
- `p_100258_` (`ItemStack[]`)

**Returns:** `public`

### OverlaySmeltingRecipeButton

```java
public OverlaySmeltingRecipeButton(int p_100262_, int p_100263_, RecipeHolder<?> p_301104_, boolean p_100265_)
```

**Parameters:**

- `p_100262_` (`int`)
- `p_100263_` (`int`)
- `p_301104_` (`RecipeHolder<?>`)
- `p_100265_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateIngredientsPositions

```java
protected void calculateIngredientsPositions(RecipeHolder<?> p_301196_)
```

**Parameters:**

- `p_301196_` (`RecipeHolder<?>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Pos` | class |  |
