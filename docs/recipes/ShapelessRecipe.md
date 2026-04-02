# ShapelessRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Implements:** `CraftingRecipe`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ShapelessRecipe>` |  |

## Methods

### ShapelessRecipe

```java
public ShapelessRecipe(String p_249640_, CraftingBookCategory p_249390_, ItemStack p_252071_, NonNullList<Ingredient> p_250689_)
```

**Parameters:**

- `p_249640_` (`String`)
- `p_249390_` (`CraftingBookCategory`)
- `p_252071_` (`ItemStack`)
- `p_250689_` (`NonNullList<Ingredient>`)

**Returns:** `public`

### getSerializer

```java
public RecipeSerializer<?> getSerializer()
```

**Returns:** `RecipeSerializer<?>`

### getGroup

```java
public String getGroup()
```

**Returns:** `String`

### category

```java
public CraftingBookCategory category()
```

**Returns:** `CraftingBookCategory`

### getResultItem

```java
public ItemStack getResultItem(HolderLookup.Provider p_335606_)
```

**Parameters:**

- `p_335606_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### getIngredients

```java
public NonNullList<Ingredient> getIngredients()
```

**Returns:** `NonNullList<Ingredient>`

### matches

```java
public boolean matches(CraftingInput p_346123_, Level p_44263_)
```

**Parameters:**

- `p_346123_` (`CraftingInput`)
- `p_44263_` (`Level`)

**Returns:** `public boolean`

### assemble

```java
public ItemStack assemble(CraftingInput p_345555_, HolderLookup.Provider p_335725_)
```

**Parameters:**

- `p_345555_` (`CraftingInput`)
- `p_335725_` (`HolderLookup.Provider`)

**Returns:** `public ItemStack`

### canCraftInDimensions

```java
public boolean canCraftInDimensions(int p_44252_, int p_44253_)
```

**Parameters:**

- `p_44252_` (`int`)
- `p_44253_` (`int`)

**Returns:** `boolean`

### codec

```java
public MapCodec<ShapelessRecipe> codec()
```

**Returns:** `MapCodec<ShapelessRecipe>`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, ShapelessRecipe> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, ShapelessRecipe>`

### fromNetwork

```java
private static ShapelessRecipe fromNetwork(RegistryFriendlyByteBuf p_319905_)
```

**Parameters:**

- `p_319905_` (`RegistryFriendlyByteBuf`)

**Returns:** `private static ShapelessRecipe`

### ShapelessRecipe

```java
return new ShapelessRecipe()
```

**Returns:** `return new`

### toNetwork

```java
private static void toNetwork(RegistryFriendlyByteBuf p_320371_, ShapelessRecipe p_320323_)
```

**Parameters:**

- `p_320371_` (`RegistryFriendlyByteBuf`)
- `p_320323_` (`ShapelessRecipe`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
