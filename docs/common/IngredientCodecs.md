# IngredientCodecs

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### codec

```java
public static Codec<Ingredient> codec(Codec<Ingredient> vanillaCodec)
```

**Parameters:**

- `vanillaCodec` (`Codec<Ingredient>`)

**Returns:** `public static Codec<Ingredient>`

### streamCodec

```java
public static StreamCodec<RegistryFriendlyByteBuf, Ingredient> streamCodec(StreamCodec<RegistryFriendlyByteBuf, Ingredient> vanillaCodec)
```

**Parameters:**

- `vanillaCodec` (`StreamCodec<RegistryFriendlyByteBuf, Ingredient>`)

**Returns:** `public static StreamCodec<RegistryFriendlyByteBuf, Ingredient>`

### decode

```java
public Ingredient decode(RegistryFriendlyByteBuf buf)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)

**Returns:** `Ingredient`

### encode

```java
public void encode(RegistryFriendlyByteBuf buf, Ingredient ingredient)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)
- `ingredient` (`Ingredient`)

### optionalStreamCodec

```java
public static StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>> optionalStreamCodec(StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>> vanillaCodec)
```

**Parameters:**

- `vanillaCodec` (`StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>`)

**Returns:** `public static StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>`

### decode

```java
public Optional<Ingredient> decode(RegistryFriendlyByteBuf buf)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)

**Returns:** `Optional<Ingredient>`

### encode

```java
public void encode(RegistryFriendlyByteBuf buf, Optional<Ingredient> ingredient)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)
- `ingredient` (`Optional<Ingredient>`)
