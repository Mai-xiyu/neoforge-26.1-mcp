# FluidIngredientCodecs

**Package:** `net.neoforged.neoforge.fluids.crafting`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### codec

```java
static Codec<FluidIngredient> codec()
```

**Returns:** `static Codec<FluidIngredient>`

### streamCodec

```java
static StreamCodec<RegistryFriendlyByteBuf, FluidIngredient> streamCodec()
```

**Returns:** `static StreamCodec<RegistryFriendlyByteBuf, FluidIngredient>`

### simpleType

```java
public static FluidIngredientType<SimpleFluidIngredient> simpleType()
```

**Returns:** `public static FluidIngredientType<SimpleFluidIngredient>`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> dynamicOps)
```

**Parameters:**

- `dynamicOps` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### decode

```java
public <T> DataResult<SimpleFluidIngredient> decode(DynamicOps<T> ops, MapLike<T> mapLike)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)
- `mapLike` (`MapLike<T>`)

**Returns:** `DataResult<SimpleFluidIngredient>`

### encode

```java
public <T> RecordBuilder<T> encode(SimpleFluidIngredient ingredient, DynamicOps<T> ops, RecordBuilder<T> builder)
```

**Parameters:**

- `ingredient` (`SimpleFluidIngredient`)
- `ops` (`DynamicOps<T>`)
- `builder` (`RecordBuilder<T>`)

**Returns:** `RecordBuilder<T>`
