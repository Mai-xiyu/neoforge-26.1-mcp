# RecipeCraftingHolder

**Package:** `net.minecraft.world.inventory`
**Type:** interface

## Methods

### setRecipeUsed

```java
void setRecipeUsed(RecipeHolder<?> p_300902_)
```

**Parameters:**

- `p_300902_` (`RecipeHolder<?>`)

### getRecipeUsed

```java
RecipeHolder<?> getRecipeUsed()
```

**Returns:** `RecipeHolder<?>`

### awardUsedRecipes

```java
default void awardUsedRecipes(Player p_300892_, List<ItemStack> p_301308_)
```

**Parameters:**

- `p_300892_` (`Player`)
- `p_301308_` (`List<ItemStack>`)

**Returns:** `default void`

### setRecipeUsed

```java
default boolean setRecipeUsed(Level p_300930_, ServerPlayer p_301242_, RecipeHolder<?> p_301296_)
```

**Parameters:**

- `p_300930_` (`Level`)
- `p_301242_` (`ServerPlayer`)
- `p_301296_` (`RecipeHolder<?>`)

**Returns:** `default boolean`
