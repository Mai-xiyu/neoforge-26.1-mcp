# RecipeCache

**Package:** `net.minecraft.world.item.crafting`
**Type:** class

## Methods

### RecipeCache

```java
public RecipeCache(int p_307489_)
```

**Parameters:**

- `p_307489_` (`int`)

**Returns:** `public`

### get

```java
public Optional<RecipeHolder<CraftingRecipe>> get(Level p_307315_, CraftingInput p_345726_)
```

**Parameters:**

- `p_307315_` (`Level`)
- `p_345726_` (`CraftingInput`)

**Returns:** `public Optional<RecipeHolder<CraftingRecipe>>`

### validateRecipeManager

```java
private void validateRecipeManager(Level p_307638_)
```

**Parameters:**

- `p_307638_` (`Level`)

**Returns:** `private void`

### compute

```java
private Optional<RecipeHolder<CraftingRecipe>> compute(CraftingInput p_345136_, Level p_307202_)
```

**Parameters:**

- `p_345136_` (`CraftingInput`)
- `p_307202_` (`Level`)

**Returns:** `private Optional<RecipeHolder<CraftingRecipe>>`

### moveEntryToFront

```java
private void moveEntryToFront(int p_307277_)
```

**Parameters:**

- `p_307277_` (`int`)

**Returns:** `private void`

### insert

```java
private void insert(CraftingInput p_348525_, RecipeHolder<CraftingRecipe> p_336146_)
```

**Parameters:**

- `p_348525_` (`CraftingInput`)
- `p_336146_` (`RecipeHolder<CraftingRecipe>`)

**Returns:** `private void`

### Entry

```java
static record Entry(NonNullList<ItemStack> key, int width, int height, RecipeHolder<CraftingRecipe> value)
```

**Parameters:**

- `key` (`NonNullList<ItemStack>`)
- `width` (`int`)
- `height` (`int`)
- `value` (`RecipeHolder<CraftingRecipe>`)

**Returns:** `static record`

### matches

```java
public boolean matches(CraftingInput p_348535_)
```

**Parameters:**

- `p_348535_` (`CraftingInput`)

**Returns:** `public boolean`
