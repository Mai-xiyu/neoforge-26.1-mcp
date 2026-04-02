# SmithingTrimRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Implements:** `SmithingRecipe`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, SmithingTrimRecipe>` |  |

## Methods

### SmithingTrimRecipe

```java
public SmithingTrimRecipe(Ingredient p_267298_, Ingredient p_266862_, Ingredient p_267050_)
```

**Parameters:**

- `p_267298_` (`Ingredient`)
- `p_266862_` (`Ingredient`)
- `p_267050_` (`Ingredient`)

**Returns:** `public`

### matches

```java
public boolean matches(SmithingRecipeInput p_346082_, Level p_345460_)
```

**Parameters:**

- `p_346082_` (`SmithingRecipeInput`)
- `p_345460_` (`Level`)

**Returns:** `public boolean`

### assemble

```java
public ItemStack assemble(SmithingRecipeInput p_345750_, HolderLookup.Provider p_335536_)
```

**Parameters:**

- `p_345750_` (`SmithingRecipeInput`)
- `p_335536_` (`HolderLookup.Provider`)

**Returns:** `public ItemStack`

### getResultItem

```java
public ItemStack getResultItem(HolderLookup.Provider p_335445_)
```

**Parameters:**

- `p_335445_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### isTemplateIngredient

```java
public boolean isTemplateIngredient(ItemStack p_266762_)
```

**Parameters:**

- `p_266762_` (`ItemStack`)

**Returns:** `boolean`

### isBaseIngredient

```java
public boolean isBaseIngredient(ItemStack p_266795_)
```

**Parameters:**

- `p_266795_` (`ItemStack`)

**Returns:** `boolean`

### isAdditionIngredient

```java
public boolean isAdditionIngredient(ItemStack p_266922_)
```

**Parameters:**

- `p_266922_` (`ItemStack`)

**Returns:** `boolean`

### getSerializer

```java
public RecipeSerializer<?> getSerializer()
```

**Returns:** `RecipeSerializer<?>`

### isIncomplete

```java
public boolean isIncomplete()
```

**Returns:** `boolean`

### codec

```java
public MapCodec<SmithingTrimRecipe> codec()
```

**Returns:** `MapCodec<SmithingTrimRecipe>`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, SmithingTrimRecipe> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, SmithingTrimRecipe>`

### fromNetwork

```java
private static SmithingTrimRecipe fromNetwork(RegistryFriendlyByteBuf p_320719_)
```

**Parameters:**

- `p_320719_` (`RegistryFriendlyByteBuf`)

**Returns:** `private static SmithingTrimRecipe`

### SmithingTrimRecipe

```java
return new SmithingTrimRecipe()
```

**Returns:** `return new`

### toNetwork

```java
private static void toNetwork(RegistryFriendlyByteBuf p_319922_, SmithingTrimRecipe p_320655_)
```

**Parameters:**

- `p_319922_` (`RegistryFriendlyByteBuf`)
- `p_320655_` (`SmithingTrimRecipe`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
