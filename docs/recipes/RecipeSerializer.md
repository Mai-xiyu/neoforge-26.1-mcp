# RecipeSerializer

**Package:** `net.minecraft.world.item.crafting`
**Type:** interface<T extends Recipe<?>>

## Methods

### codec

```java
MapCodec<T> codec()
```

**Returns:** `MapCodec<T>`

### streamCodec

```java
StreamCodec<RegistryFriendlyByteBuf, T> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, T>`

### register

```java
static <S extends RecipeSerializer<T>, T extends Recipe<?>> S register(String p_44099_, S p_44100_)
```

**Parameters:**

- `p_44099_` (`String`)
- `p_44100_` (`S`)

**Returns:** `static <S extends RecipeSerializer<T>, T extends Recipe<?>> S`
