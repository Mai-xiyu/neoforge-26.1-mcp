# GhostRecipe

**Package:** `net.minecraft.client.gui.screens.recipebook`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### clear

```java
public void clear()
```

**Returns:** `public void`

### addIngredient

```java
public void addIngredient(Ingredient p_100144_, int p_100145_, int p_100146_)
```

**Parameters:**

- `p_100144_` (`Ingredient`)
- `p_100145_` (`int`)
- `p_100146_` (`int`)

**Returns:** `public void`

### get

```java
public GhostRecipe.GhostIngredient get(int p_100142_)
```

**Parameters:**

- `p_100142_` (`int`)

**Returns:** `public GhostRecipe.GhostIngredient`

### size

```java
public int size()
```

**Returns:** `public int`

### getRecipe

```java
public RecipeHolder<?> getRecipe()
```

**Returns:** `RecipeHolder<?>`

### setRecipe

```java
public void setRecipe(RecipeHolder<?> p_300899_)
```

**Parameters:**

- `p_300899_` (`RecipeHolder<?>`)

**Returns:** `public void`

### render

```java
public void render(GuiGraphics p_282081_, Minecraft p_281341_, int p_283169_, int p_282326_, boolean p_282174_, float p_282256_)
```

**Parameters:**

- `p_282081_` (`GuiGraphics`)
- `p_281341_` (`Minecraft`)
- `p_283169_` (`int`)
- `p_282326_` (`int`)
- `p_282174_` (`boolean`)
- `p_282256_` (`float`)

**Returns:** `public void`

### GhostIngredient

```java
public GhostIngredient(Ingredient p_100166_, int p_100167_, int p_100168_)
```

**Parameters:**

- `p_100166_` (`Ingredient`)
- `p_100167_` (`int`)
- `p_100168_` (`int`)

**Returns:** `public`

### getX

```java
public int getX()
```

**Returns:** `public int`

### getY

```java
public int getY()
```

**Returns:** `public int`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `GhostIngredient` | class |  |
