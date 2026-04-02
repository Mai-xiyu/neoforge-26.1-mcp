# NeoForgeExtraCodecs

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Description

`Codec`-related helper functions that are not in `ExtraCodecs`, but useful to NeoForge and other mods.
@see ExtraCodecs

## Methods

### aliasedFieldOf

```java
<T> public static <T> MapCodec<T> aliasedFieldOf(Codec<T> codec, String[]... names)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `names` (`String[]...`)

**Returns:** `public static <T> MapCodec<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Must have at least one name!")
```

**Parameters:**

- `name!"` (`"Must have at least one`)

**Returns:** `throw new`

### optionalFieldAlwaysWrite

```java
< names.length; i++)
            mapCodec = mapWithAlternative(mapCodec, codec.fieldOf(names[i]));
        return mapCodec;
    }

    /**
     * Similar to {@link Codec#optionalFieldOf(String, Object)}, except that the default value is always written.
     */
    public static <T> MapCodec<T> optionalFieldAlwaysWrite(Codec<T> codec, String name, T defaultValue)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `name` (`String`)
- `defaultValue` (`T`)

**Returns:** `MapCodec<T>`

### mapWithAlternative

```java
<T> public static <T> MapCodec<T> mapWithAlternative(MapCodec<T> mapCodec, MapCodec<? extends T> alternative)
```

**Parameters:**

- `mapCodec` (`MapCodec<T>`)
- `alternative` (`MapCodec<? extends T>`)

**Returns:** `public static <T> MapCodec<T>`

### singularOrPluralCodec

```java
<T> public static <T> MapCodec<Set<T>> singularOrPluralCodec(Codec<T> codec, String singularName)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `singularName` (`String`)

**Returns:** `public static <T> MapCodec<Set<T>>`

### singularOrPluralCodec

```java
<T> public static <T> MapCodec<Set<T>> singularOrPluralCodec(Codec<T> codec, String singularName, String pluralName)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `singularName` (`String`)
- `pluralName` (`String`)

**Returns:** `public static <T> MapCodec<Set<T>>`

### singularOrPluralCodecNotEmpty

```java
<T> public static <T> MapCodec<Set<T>> singularOrPluralCodecNotEmpty(Codec<T> codec, String singularName)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `singularName` (`String`)

**Returns:** `public static <T> MapCodec<Set<T>>`

### singularOrPluralCodecNotEmpty

```java
<T> public static <T> MapCodec<Set<T>> singularOrPluralCodecNotEmpty(Codec<T> codec, String singularName, String pluralName)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `singularName` (`String`)
- `pluralName` (`String`)

**Returns:** `public static <T> MapCodec<Set<T>>`

### setOf

```java
<T> public static <T> Codec<Set<T>> setOf(Codec<T> codec)
```

**Parameters:**

- `codec` (`Codec<T>`)

**Returns:** `public static <T> Codec<Set<T>>`

### decodeOnly

```java
public static <A> Codec<A> decodeOnly(Decoder<A> decoder)
```

**Parameters:**

- `decoder` (`Decoder<A>`)

**Returns:** `Codec<A>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Cannot encode with decode-only codec! Decoder:" + decoder)
```

**Parameters:**

- `decoder` (`"Cannot encode with decode-only codec! Decoder:" +`)

**Returns:** `throw new`

### listWithOptionalElements

```java
public static <A> Codec<List<A>> listWithOptionalElements(Codec<Optional<A>> elementCodec)
```

**Parameters:**

- `elementCodec` (`Codec<Optional<A>>`)

**Returns:** `Codec<List<A>>`

### listWithoutEmpty

```java
public static <A> Codec<List<A>> listWithoutEmpty(Codec<List<Optional<A>>> codec)
```

**Parameters:**

- `codec` (`Codec<List<Optional<A>>>`)

**Returns:** `Codec<List<A>>`

### withAlternative

```java
public static <T> Codec<T> withAlternative(Codec<T> codec, Codec<T> alternative)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `alternative` (`Codec<T>`)

**Returns:** `Codec<T>`

### withAlternative

```java
public static <T> MapCodec<T> withAlternative(MapCodec<T> codec, MapCodec<T> alternative)
```

**Parameters:**

- `codec` (`MapCodec<T>`)
- `alternative` (`MapCodec<T>`)

**Returns:** `MapCodec<T>`

### decode

```java
public <T1> DataResult<Pair<T, T1>> decode(DynamicOps<T1> ops, T1 input)
```

**Parameters:**

- `ops` (`DynamicOps<T1>`)
- `input` (`T1`)

**Returns:** `DataResult<Pair<T, T1>>`

### encode

```java
public <T1> DataResult<T1> encode(T input, DynamicOps<T1> ops, T1 prefix)
```

**Parameters:**

- `input` (`T`)
- `ops` (`DynamicOps<T1>`)
- `prefix` (`T1`)

**Returns:** `DataResult<T1>`

### toString

```java
public String toString()
```

**Returns:** `String`

### AlternativeMapCodec

```java
private AlternativeMapCodec(MapCodec<T> codec, MapCodec<T> alternative)
```

**Parameters:**

- `codec` (`MapCodec<T>`)
- `alternative` (`MapCodec<T>`)

**Returns:** `private`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> ops)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### decode

```java
public <T1> DataResult<T> decode(DynamicOps<T1> ops, MapLike<T1> input)
```

**Parameters:**

- `ops` (`DynamicOps<T1>`)
- `input` (`MapLike<T1>`)

**Returns:** `DataResult<T>`

### encode

```java
public <T1> RecordBuilder<T1> encode(T input, DynamicOps<T1> ops, RecordBuilder<T1> prefix)
```

**Parameters:**

- `input` (`T`)
- `ops` (`DynamicOps<T1>`)
- `prefix` (`RecordBuilder<T1>`)

**Returns:** `RecordBuilder<T1>`

### toString

```java
public String toString()
```

**Returns:** `String`

### dispatchMapOrElse

```java
public static <A, E, B> MapCodec<Either<E, B>> dispatchMapOrElse(Codec<A> typeCodec, Function<? super E, ? extends A> type, Function<? super A, ? extends MapCodec<? extends E>> codec, MapCodec<B> fallbackCodec)
```

**Parameters:**

- `typeCodec` (`Codec<A>`)
- `type` (`Function<? super E, ? extends A>`)
- `codec` (`Function<? super A, ? extends MapCodec<? extends E>>`)
- `fallbackCodec` (`MapCodec<B>`)

**Returns:** `MapCodec<Either<E, B>>`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> ops)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### decode

```java
public <T> DataResult<Either<E, B>> decode(DynamicOps<T> ops, MapLike<T> input)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)
- `input` (`MapLike<T>`)

**Returns:** `DataResult<Either<E, B>>`

### encode

```java
public <T> RecordBuilder<T> encode(Either<E, B> input, DynamicOps<T> ops, RecordBuilder<T> prefix)
```

**Parameters:**

- `input` (`Either<E, B>`)
- `ops` (`DynamicOps<T>`)
- `prefix` (`RecordBuilder<T>`)

**Returns:** `RecordBuilder<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### xor

```java
public static <F, S> MapCodec<Either<F, S>> xor(MapCodec<F> first, MapCodec<S> second)
```

**Parameters:**

- `first` (`MapCodec<F>`)
- `second` (`MapCodec<S>`)

**Returns:** `MapCodec<Either<F, S>>`

### XorMapCodec

```java
private XorMapCodec(MapCodec<F> first, MapCodec<S> second)
```

**Parameters:**

- `first` (`MapCodec<F>`)
- `second` (`MapCodec<S>`)

**Returns:** `private`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> ops)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### decode

```java
public <T> DataResult<Either<F, S>> decode(DynamicOps<T> ops, MapLike<T> input)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)
- `input` (`MapLike<T>`)

**Returns:** `DataResult<Either<F, S>>`

### encode

```java
public <T> RecordBuilder<T> encode(Either<F, S> input, DynamicOps<T> ops, RecordBuilder<T> prefix)
```

**Parameters:**

- `input` (`Either<F, S>`)
- `ops` (`DynamicOps<T>`)
- `prefix` (`RecordBuilder<T>`)

**Returns:** `RecordBuilder<T>`

### toString

```java
public String toString()
```

**Returns:** `String`
