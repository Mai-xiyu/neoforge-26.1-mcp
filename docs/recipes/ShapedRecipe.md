# ShapedRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Implements:** `CraftingRecipe`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `pattern` | `ShapedRecipePattern` |  |
| `CODEC` | `MapCodec<ShapedRecipe>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ShapedRecipe>` |  |

## Methods

### ShapedRecipe

```java
public ShapedRecipe(String p_272759_, CraftingBookCategory p_273506_, ShapedRecipePattern p_312827_, ItemStack p_272852_, boolean p_312010_)
```

**Parameters:**

- `p_272759_` (`String`)
- `p_273506_` (`CraftingBookCategory`)
- `p_312827_` (`ShapedRecipePattern`)
- `p_272852_` (`ItemStack`)
- `p_312010_` (`boolean`)

**Returns:** `public`

### ShapedRecipe

```java
public ShapedRecipe(String p_250221_, CraftingBookCategory p_250716_, ShapedRecipePattern p_312814_, ItemStack p_248581_)
```

**Parameters:**

- `p_250221_` (`String`)
- `p_250716_` (`CraftingBookCategory`)
- `p_312814_` (`ShapedRecipePattern`)
- `p_248581_` (`ItemStack`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

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
public ItemStack getResultItem(HolderLookup.Provider p_335668_)
```

**Parameters:**

- `p_335668_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### getIngredients

```java
public NonNullList<Ingredient> getIngredients()
```

**Returns:** `NonNullList<Ingredient>`

### showNotification

```java
public boolean showNotification()
```

**Returns:** `boolean`

### canCraftInDimensions

```java
public boolean canCraftInDimensions(int p_44161_, int p_44162_)
```

**Parameters:**

- `p_44161_` (`int`)
- `p_44162_` (`int`)

**Returns:** `boolean`

### matches

```java
public boolean matches(CraftingInput p_345040_, Level p_44167_)
```

**Parameters:**

- `p_345040_` (`CraftingInput`)
- `p_44167_` (`Level`)

**Returns:** `public boolean`

### assemble

```java
public ItemStack assemble(CraftingInput p_345201_, HolderLookup.Provider p_335688_)
```

**Parameters:**

- `p_345201_` (`CraftingInput`)
- `p_335688_` (`HolderLookup.Provider`)

**Returns:** `public ItemStack`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

### isIncomplete

```java
public boolean isIncomplete()
```

**Returns:** `boolean`

### codec

```java
public MapCodec<ShapedRecipe> codec()
```

**Returns:** `MapCodec<ShapedRecipe>`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, ShapedRecipe> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, ShapedRecipe>`

### fromNetwork

```java
private static ShapedRecipe fromNetwork(RegistryFriendlyByteBuf p_319998_)
```

**Parameters:**

- `p_319998_` (`RegistryFriendlyByteBuf`)

**Returns:** `private static ShapedRecipe`

### ShapedRecipe

```java
return new ShapedRecipe()
```

**Returns:** `return new`

### toNetwork

```java
private static void toNetwork(RegistryFriendlyByteBuf p_320738_, ShapedRecipe p_320586_)
```

**Parameters:**

- `p_320738_` (`RegistryFriendlyByteBuf`)
- `p_320586_` (`ShapedRecipe`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
