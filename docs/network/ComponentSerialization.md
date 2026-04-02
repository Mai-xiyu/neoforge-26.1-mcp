# ComponentSerialization

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Component>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Component>` |  |
| `OPTIONAL_STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Optional<Component>>` |  |
| `TRUSTED_STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Component>` |  |
| `TRUSTED_OPTIONAL_STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Optional<Component>>` |  |
| `TRUSTED_CONTEXT_FREE_STREAM_CODEC` | `StreamCodec<ByteBuf, Component>` |  |
| `FLAT_CODEC` | `Codec<Component>` |  |

## Methods

### flatCodec

```java
public static Codec<Component> flatCodec(int p_331605_)
```

**Parameters:**

- `p_331605_` (`int`)

**Returns:** `public static Codec<Component>`

### decode

```java
public <T> DataResult<Pair<Component, T>> decode(DynamicOps<T> p_330684_, T p_331653_)
```

**Parameters:**

- `p_330684_` (`DynamicOps<T>`)
- `p_331653_` (`T`)

**Returns:** `DataResult<Pair<Component, T>>`

### encode

```java
<T> public <T> DataResult<T> encode(Component p_330452_, DynamicOps<T> p_330865_, T p_331460_)
```

**Parameters:**

- `p_330452_` (`Component`)
- `p_330865_` (`DynamicOps<T>`)
- `p_331460_` (`T`)

**Returns:** `public <T> DataResult<T>`

### asJsonOps

```java
<T> private static <T> DynamicOps<JsonElement> asJsonOps(DynamicOps<T> p_330749_)
```

**Parameters:**

- `p_330749_` (`DynamicOps<T>`)

**Returns:** `private static <T> DynamicOps<JsonElement>`

### createFromList

```java
private static MutableComponent createFromList(List<Component> p_304405_)
```

**Parameters:**

- `p_304405_` (`List<Component>`)

**Returns:** `private static MutableComponent`

### createLegacyComponentMatcher

```java
<T extends StringRepresentable, E> public static <T extends StringRepresentable, E> MapCodec<E> createLegacyComponentMatcher(T[] p_304815_, Function<T, MapCodec<? extends E>> p_304852_, Function<E, T> p_304510_, String p_307551_)
```

**Parameters:**

- `p_304815_` (`T[]`)
- `p_304852_` (`Function<T, MapCodec<? extends E>>`)
- `p_304510_` (`Function<E, T>`)
- `p_307551_` (`String`)

**Returns:** `public static <T extends StringRepresentable, E> MapCodec<E>`

### createCodec

```java
private static Codec<Component> createCodec(Codec<Component> p_304554_)
```

**Parameters:**

- `p_304554_` (`Codec<Component>`)

**Returns:** `private static Codec<Component>`

### FuzzyCodec

```java
public FuzzyCodec(List<MapCodec<? extends T>> p_304495_, Function<T, MapEncoder<? extends T>> p_304594_)
```

**Parameters:**

- `p_304495_` (`List<MapCodec<? extends T>>`)
- `p_304594_` (`Function<T, MapEncoder<? extends T>>`)

**Returns:** `public`

### decode

```java
public <S> DataResult<T> decode(DynamicOps<S> p_304922_, MapLike<S> p_304447_)
```

**Parameters:**

- `p_304922_` (`DynamicOps<S>`)
- `p_304447_` (`MapLike<S>`)

**Returns:** `DataResult<T>`

### encode

```java
public <S> RecordBuilder<S> encode(T p_304409_, DynamicOps<S> p_304945_, RecordBuilder<S> p_304823_)
```

**Parameters:**

- `p_304409_` (`T`)
- `p_304945_` (`DynamicOps<S>`)
- `p_304823_` (`RecordBuilder<S>`)

**Returns:** `RecordBuilder<S>`

### keys

```java
public <S> Stream<S> keys(DynamicOps<S> p_304770_)
```

**Parameters:**

- `p_304770_` (`DynamicOps<S>`)

**Returns:** `Stream<S>`

### toString

```java
public String toString()
```

**Returns:** `String`

### StrictEither

```java
public StrictEither(String p_307439_, MapCodec<T> p_307644_, MapCodec<T> p_307415_)
```

**Parameters:**

- `p_307439_` (`String`)
- `p_307644_` (`MapCodec<T>`)
- `p_307415_` (`MapCodec<T>`)

**Returns:** `public`

### decode

```java
public <O> DataResult<T> decode(DynamicOps<O> p_307279_, MapLike<O> p_307655_)
```

**Parameters:**

- `p_307279_` (`DynamicOps<O>`)
- `p_307655_` (`MapLike<O>`)

**Returns:** `DataResult<T>`

### encode

```java
public <O> RecordBuilder<O> encode(T p_307352_, DynamicOps<O> p_307510_, RecordBuilder<O> p_307297_)
```

**Parameters:**

- `p_307352_` (`T`)
- `p_307510_` (`DynamicOps<O>`)
- `p_307297_` (`RecordBuilder<O>`)

**Returns:** `RecordBuilder<O>`

### keys

```java
public <T1> Stream<T1> keys(DynamicOps<T1> p_307616_)
```

**Parameters:**

- `p_307616_` (`DynamicOps<T1>`)

**Returns:** `Stream<T1>`
