# RecipeBuilder

**Package:** `net.minecraft.data.recipes`
**Type:** interface

## Methods

### unlockedBy

```java
RecipeBuilder unlockedBy(String p_176496_, Criterion<?> p_301065_)
```

**Parameters:**

- `p_176496_` (`String`)
- `p_301065_` (`Criterion<?>`)

**Returns:** `RecipeBuilder`

### group

```java
RecipeBuilder group(String p_176495_)
```

**Parameters:**

- `p_176495_` (`String`)

**Returns:** `RecipeBuilder`

### getResult

```java
Item getResult()
```

**Returns:** `Item`

### save

```java
void save(RecipeOutput p_301032_, ResourceLocation p_176504_)
```

**Parameters:**

- `p_301032_` (`RecipeOutput`)
- `p_176504_` (`ResourceLocation`)

### save

```java
default void save(RecipeOutput p_301244_)
```

**Parameters:**

- `p_301244_` (`RecipeOutput`)

**Returns:** `default void`

### save

```java
default void save(RecipeOutput p_301186_, String p_176502_)
```

**Parameters:**

- `p_301186_` (`RecipeOutput`)
- `p_176502_` (`String`)

**Returns:** `default void`

### IllegalStateException

```java
throw new IllegalStateException("Recipe " + p_176502_ + " should remove its 'save' argument as it is equal to default one")
```

**Parameters:**

- `one"` (`"Recipe " + p_176502_ + " should remove its 'save' argument as it is equal to default`)

**Returns:** `throw new`

### getDefaultRecipeId

```java
static ResourceLocation getDefaultRecipeId(ItemLike p_176494_)
```

**Parameters:**

- `p_176494_` (`ItemLike`)

**Returns:** `static ResourceLocation`

### determineBookCategory

```java
static CraftingBookCategory determineBookCategory(RecipeCategory p_311837_)
```

**Parameters:**

- `p_311837_` (`RecipeCategory`)

**Returns:** `static CraftingBookCategory`
