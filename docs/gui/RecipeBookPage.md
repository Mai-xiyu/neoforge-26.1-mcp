# RecipeBookPage

**Package:** `net.minecraft.client.gui.screens.recipebook`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ITEMS_PER_PAGE` | `int` |  |

## Methods

### RecipeBookPage

```java
public RecipeBookPage()
```

**Returns:** `public`

### init

```java
public void init(Minecraft p_100429_, int p_100430_, int p_100431_)
```

**Parameters:**

- `p_100429_` (`Minecraft`)
- `p_100430_` (`int`)
- `p_100431_` (`int`)

**Returns:** `public void`

### addListener

```java
public void addListener(RecipeBookComponent p_100433_)
```

**Parameters:**

- `p_100433_` (`RecipeBookComponent`)

**Returns:** `public void`

### updateCollections

```java
public void updateCollections(List<RecipeCollection> p_100437_, boolean p_100438_)
```

**Parameters:**

- `p_100437_` (`List<RecipeCollection>`)
- `p_100438_` (`boolean`)

**Returns:** `public void`

### updateButtonsForPage

```java
private void updateButtonsForPage()
```

**Returns:** `private void`

### updateArrowButtons

```java
private void updateArrowButtons()
```

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_281416_, int p_281888_, int p_281904_, int p_282278_, int p_282424_, float p_281712_)
```

**Parameters:**

- `p_281416_` (`GuiGraphics`)
- `p_281888_` (`int`)
- `p_281904_` (`int`)
- `p_282278_` (`int`)
- `p_282424_` (`int`)
- `p_281712_` (`float`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(GuiGraphics p_283690_, int p_282626_, int p_282490_)
```

**Parameters:**

- `p_283690_` (`GuiGraphics`)
- `p_282626_` (`int`)
- `p_282490_` (`int`)

**Returns:** `public void`

### getLastClickedRecipe

```java
public RecipeHolder<?> getLastClickedRecipe()
```

**Returns:** `RecipeHolder<?>`

### getLastClickedRecipeCollection

```java
public RecipeCollection getLastClickedRecipeCollection()
```

**Returns:** `RecipeCollection`

### setInvisible

```java
public void setInvisible()
```

**Returns:** `public void`

### mouseClicked

```java
public boolean mouseClicked(double p_100410_, double p_100411_, int p_100412_, int p_100413_, int p_100414_, int p_100415_, int p_100416_)
```

**Parameters:**

- `p_100410_` (`double`)
- `p_100411_` (`double`)
- `p_100412_` (`int`)
- `p_100413_` (`int`)
- `p_100414_` (`int`)
- `p_100415_` (`int`)
- `p_100416_` (`int`)

**Returns:** `public boolean`

### recipesShown

```java
public void recipesShown(List<RecipeHolder<?>> p_100435_)
```

**Parameters:**

- `p_100435_` (`List<RecipeHolder<?>>`)

**Returns:** `public void`

### getMinecraft

```java
public Minecraft getMinecraft()
```

**Returns:** `public Minecraft`

### getRecipeBook

```java
public RecipeBook getRecipeBook()
```

**Returns:** `public RecipeBook`

### listButtons

```java
protected void listButtons(Consumer<AbstractWidget> p_170054_)
```

**Parameters:**

- `p_170054_` (`Consumer<AbstractWidget>`)

**Returns:** `protected void`
