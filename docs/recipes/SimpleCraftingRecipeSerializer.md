# SimpleCraftingRecipeSerializer

**Package:** `net.minecraft.world.item.crafting`
**Type:** class<T extends CraftingRecipe> implements RecipeSerializer<T>

## Methods

### SimpleCraftingRecipeSerializer

```java
public SimpleCraftingRecipeSerializer(SimpleCraftingRecipeSerializer.Factory<T> p_250090_)
```

**Parameters:**

- `p_250090_` (`SimpleCraftingRecipeSerializer.Factory<T>`)

**Returns:** `public`

### codec

```java
public MapCodec<T> codec()
```

**Returns:** `MapCodec<T>`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, T> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, T>`

### create

```java
T create(CraftingBookCategory p_249920_)
```

**Parameters:**

- `p_249920_` (`CraftingBookCategory`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Factory` | interface |  |
