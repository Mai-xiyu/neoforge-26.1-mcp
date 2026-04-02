# MapExtendingRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Extends:** `ShapedRecipe`

## Methods

### MapExtendingRecipe

```java
public MapExtendingRecipe(CraftingBookCategory p_250154_)
```

**Parameters:**

- `p_250154_` (`CraftingBookCategory`)

**Returns:** `public`

### matches

```java
public boolean matches(CraftingInput p_345101_, Level p_43994_)
```

**Parameters:**

- `p_345101_` (`CraftingInput`)
- `p_43994_` (`Level`)

**Returns:** `boolean`

### assemble

```java
public ItemStack assemble(CraftingInput p_345831_, HolderLookup.Provider p_335387_)
```

**Parameters:**

- `p_345831_` (`CraftingInput`)
- `p_335387_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### findFilledMap

```java
private static ItemStack findFilledMap(CraftingInput p_344732_)
```

**Parameters:**

- `p_344732_` (`CraftingInput`)

**Returns:** `private static ItemStack`

### isSpecial

```java
public boolean isSpecial()
```

**Returns:** `boolean`

### getSerializer

```java
public RecipeSerializer<?> getSerializer()
```

**Returns:** `RecipeSerializer<?>`
