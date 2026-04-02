# RecipeButton

**Package:** `net.minecraft.client.gui.screens.recipebook`
**Type:** class
**Extends:** `AbstractWidget`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TICKS_TO_SWAP` | `int` |  |

## Methods

### RecipeButton

```java
public RecipeButton()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
public void init(RecipeCollection p_100480_, RecipeBookPage p_100481_)
```

**Parameters:**

- `p_100480_` (`RecipeCollection`)
- `p_100481_` (`RecipeBookPage`)

**Returns:** `public void`

### getCollection

```java
public RecipeCollection getCollection()
```

**Returns:** `public RecipeCollection`

### renderWidget

```java
public void renderWidget(GuiGraphics p_281385_, int p_282779_, int p_282744_, float p_282439_)
```

**Parameters:**

- `p_281385_` (`GuiGraphics`)
- `p_282779_` (`int`)
- `p_282744_` (`int`)
- `p_282439_` (`float`)

### getOrderedRecipes

```java
private List<RecipeHolder<?>> getOrderedRecipes()
```

**Returns:** `private List<RecipeHolder<?>>`

### isOnlyOption

```java
public boolean isOnlyOption()
```

**Returns:** `public boolean`

### getRecipe

```java
public RecipeHolder<?> getRecipe()
```

**Returns:** `public RecipeHolder<?>`

### getTooltipText

```java
public List<Component> getTooltipText()
```

**Returns:** `public List<Component>`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_170060_)
```

**Parameters:**

- `p_170060_` (`NarrationElementOutput`)

### getWidth

```java
public int getWidth()
```

**Returns:** `int`

### isValidClickButton

```java
protected boolean isValidClickButton(int p_100473_)
```

**Parameters:**

- `p_100473_` (`int`)

**Returns:** `boolean`
