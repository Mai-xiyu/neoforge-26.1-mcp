# BookCloningRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Extends:** `CustomRecipe`

## Methods

### BookCloningRecipe

```java
public BookCloningRecipe(CraftingBookCategory p_251090_)
```

**Parameters:**

- `p_251090_` (`CraftingBookCategory`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### matches

```java
public boolean matches(CraftingInput p_345586_, Level p_43815_)
```

**Parameters:**

- `p_345586_` (`CraftingInput`)
- `p_43815_` (`Level`)

**Returns:** `public boolean`

### assemble

```java
public ItemStack assemble(CraftingInput p_345803_, HolderLookup.Provider p_335702_)
```

**Parameters:**

- `p_345803_` (`CraftingInput`)
- `p_335702_` (`HolderLookup.Provider`)

**Returns:** `public ItemStack`

### getRemainingItems

```java
public NonNullList<ItemStack> getRemainingItems(CraftingInput p_344763_)
```

**Parameters:**

- `p_344763_` (`CraftingInput`)

**Returns:** `public NonNullList<ItemStack>`

### getSerializer

```java
public RecipeSerializer<?> getSerializer()
```

**Returns:** `RecipeSerializer<?>`

### canCraftInDimensions

```java
public boolean canCraftInDimensions(int p_43804_, int p_43805_)
```

**Parameters:**

- `p_43804_` (`int`)
- `p_43805_` (`int`)

**Returns:** `boolean`
