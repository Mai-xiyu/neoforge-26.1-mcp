# SimpleCookingSerializer

**Package:** `net.minecraft.world.item.crafting`
**Type:** class<T extends AbstractCookingRecipe> implements RecipeSerializer<T>

## Methods

### SimpleCookingSerializer

```java
public SimpleCookingSerializer(AbstractCookingRecipe.Factory<T> p_312065_, int p_44331_)
```

**Parameters:**

- `p_312065_` (`AbstractCookingRecipe.Factory<T>`)
- `p_44331_` (`int`)

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

### fromNetwork

```java
private T fromNetwork(RegistryFriendlyByteBuf p_320282_)
```

**Parameters:**

- `p_320282_` (`RegistryFriendlyByteBuf`)

**Returns:** `private T`

### toNetwork

```java
private void toNetwork(RegistryFriendlyByteBuf p_320422_, T p_320933_)
```

**Parameters:**

- `p_320422_` (`RegistryFriendlyByteBuf`)
- `p_320933_` (`T`)

**Returns:** `private void`

### create

```java
public AbstractCookingRecipe create(String p_312671_, CookingBookCategory p_312067_, Ingredient p_312327_, ItemStack p_311758_, float p_312386_, int p_311986_)
```

**Parameters:**

- `p_312671_` (`String`)
- `p_312067_` (`CookingBookCategory`)
- `p_312327_` (`Ingredient`)
- `p_311758_` (`ItemStack`)
- `p_312386_` (`float`)
- `p_311986_` (`int`)

**Returns:** `public AbstractCookingRecipe`
