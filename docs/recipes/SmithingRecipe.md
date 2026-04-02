# SmithingRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** interface
**Extends:** `Recipe<SmithingRecipeInput>`

## Methods

### getType

```java
default RecipeType<?> getType()
```

**Returns:** `RecipeType<?>`

### canCraftInDimensions

```java
default boolean canCraftInDimensions(int p_266835_, int p_266829_)
```

**Parameters:**

- `p_266835_` (`int`)
- `p_266829_` (`int`)

**Returns:** `boolean`

### getToastSymbol

```java
default ItemStack getToastSymbol()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### isTemplateIngredient

```java
boolean isTemplateIngredient(ItemStack p_266982_)
```

**Parameters:**

- `p_266982_` (`ItemStack`)

**Returns:** `boolean`

### isBaseIngredient

```java
boolean isBaseIngredient(ItemStack p_266962_)
```

**Parameters:**

- `p_266962_` (`ItemStack`)

**Returns:** `boolean`

### isAdditionIngredient

```java
boolean isAdditionIngredient(ItemStack p_267132_)
```

**Parameters:**

- `p_267132_` (`ItemStack`)

**Returns:** `boolean`
