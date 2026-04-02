# SmithingTransformRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Implements:** `SmithingRecipe`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, SmithingTransformRecipe>` |  |

## Methods

### SmithingTransformRecipe

```java
public SmithingTransformRecipe(Ingredient p_266750_, Ingredient p_266787_, Ingredient p_267292_, ItemStack p_267031_)
```

**Parameters:**

- `p_266750_` (`Ingredient`)
- `p_266787_` (`Ingredient`)
- `p_267292_` (`Ingredient`)
- `p_267031_` (`ItemStack`)

**Returns:** `public`

### matches

```java
public boolean matches(SmithingRecipeInput p_346359_, Level p_266781_)
```

**Parameters:**

- `p_346359_` (`SmithingRecipeInput`)
- `p_266781_` (`Level`)

**Returns:** `public boolean`

### assemble

```java
public ItemStack assemble(SmithingRecipeInput p_345093_, HolderLookup.Provider p_345488_)
```

**Parameters:**

- `p_345093_` (`SmithingRecipeInput`)
- `p_345488_` (`HolderLookup.Provider`)

**Returns:** `public ItemStack`

### getResultItem

```java
public ItemStack getResultItem(HolderLookup.Provider p_335712_)
```

**Parameters:**

- `p_335712_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### isTemplateIngredient

```java
public boolean isTemplateIngredient(ItemStack p_267113_)
```

**Parameters:**

- `p_267113_` (`ItemStack`)

**Returns:** `boolean`

### isBaseIngredient

```java
public boolean isBaseIngredient(ItemStack p_267276_)
```

**Parameters:**

- `p_267276_` (`ItemStack`)

**Returns:** `boolean`

### isAdditionIngredient

```java
public boolean isAdditionIngredient(ItemStack p_267260_)
```

**Parameters:**

- `p_267260_` (`ItemStack`)

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
public MapCodec<SmithingTransformRecipe> codec()
```

**Returns:** `MapCodec<SmithingTransformRecipe>`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, SmithingTransformRecipe> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, SmithingTransformRecipe>`

### fromNetwork

```java
private static SmithingTransformRecipe fromNetwork(RegistryFriendlyByteBuf p_320375_)
```

**Parameters:**

- `p_320375_` (`RegistryFriendlyByteBuf`)

**Returns:** `private static SmithingTransformRecipe`

### SmithingTransformRecipe

```java
return new SmithingTransformRecipe()
```

**Returns:** `return new`

### toNetwork

```java
private static void toNetwork(RegistryFriendlyByteBuf p_320743_, SmithingTransformRecipe p_319840_)
```

**Parameters:**

- `p_320743_` (`RegistryFriendlyByteBuf`)
- `p_319840_` (`SmithingTransformRecipe`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
