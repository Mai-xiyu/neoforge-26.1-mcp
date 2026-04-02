# ExtraCodecs

**Package:** `net.minecraft.util`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `JSON` | `Codec<JsonElement>` |  |
| `JAVA` | `Codec<Object>` |  |
| `VECTOR3F` | `Codec<Vector3f>` |  |
| `VECTOR4F` | `Codec<Vector4f>` |  |
| `QUATERNIONF_COMPONENTS` | `Codec<Quaternionf>` |  |
| `AXISANGLE4F` | `Codec<AxisAngle4f>` |  |
| `QUATERNIONF` | `Codec<Quaternionf>` |  |
| `MATRIX4F` | `Codec<Matrix4f>` |  |
| `ARGB_COLOR_CODEC` | `Codec<Integer>` |  |
| `UNSIGNED_BYTE` | `Codec<Integer>` |  |
| `NON_NEGATIVE_INT` | `Codec<Integer>` |  |
| `POSITIVE_INT` | `Codec<Integer>` |  |
| `POSITIVE_FLOAT` | `Codec<Float>` |  |
| `PATTERN` | `Codec<Pattern>` |  |
| `INSTANT_ISO8601` | `Codec<Instant>` |  |
| `BASE64_STRING` | `Codec<byte[]>` |  |
| `ESCAPED_STRING` | `Codec<String>` |  |

## Methods

### converter

```java
<T> public static <T> Codec<T> converter(DynamicOps<T> p_304929_)
```

**Parameters:**

- `p_304929_` (`DynamicOps<T>`)

**Returns:** `public static <T> Codec<T>`

### intervalCodec

```java
<P, I> public static <P, I> Codec<I> intervalCodec(Codec<P> p_184362_, String p_184363_, String p_184364_, BiFunction<P, P, DataResult<I>> p_184365_, Function<I, P> p_184366_, Function<I, P> p_184367_)
```

**Parameters:**

- `p_184362_` (`Codec<P>`)
- `p_184363_` (`String`)
- `p_184364_` (`String`)
- `p_184365_` (`BiFunction<P, P, DataResult<I>>`)
- `p_184366_` (`Function<I, P>`)
- `p_184367_` (`Function<I, P>`)

**Returns:** `public static <P, I> Codec<I>`

### orElsePartial

```java
<A> public static <A> ResultFunction<A> orElsePartial(A p_184382_)
```

**Parameters:**

- `p_184382_` (`A`)

**Returns:** `public static <A> ResultFunction<A>`

### apply

```java
public <T> DataResult<Pair<A, T>> apply(DynamicOps<T> p_184466_, T p_184467_, DataResult<Pair<A, T>> p_184468_)
```

**Parameters:**

- `p_184466_` (`DynamicOps<T>`)
- `p_184467_` (`T`)
- `p_184468_` (`DataResult<Pair<A, T>>`)

**Returns:** `DataResult<Pair<A, T>>`

### coApply

```java
public <T> DataResult<T> coApply(DynamicOps<T> p_184470_, A p_184471_, DataResult<T> p_184472_)
```

**Parameters:**

- `p_184470_` (`DynamicOps<T>`)
- `p_184471_` (`A`)
- `p_184472_` (`DataResult<T>`)

**Returns:** `DataResult<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### idResolverCodec

```java
<E> public static <E> Codec<E> idResolverCodec(ToIntFunction<E> p_184422_, IntFunction<E> p_184423_, int p_184424_)
```

**Parameters:**

- `p_184422_` (`ToIntFunction<E>`)
- `p_184423_` (`IntFunction<E>`)
- `p_184424_` (`int`)

**Returns:** `public static <E> Codec<E>`

### orCompressed

```java
<E> public static <E> Codec<E> orCompressed(Codec<E> p_184426_, Codec<E> p_184427_)
```

**Parameters:**

- `p_184426_` (`Codec<E>`)
- `p_184427_` (`Codec<E>`)

**Returns:** `public static <E> Codec<E>`

### encode

```java
public <T> DataResult<T> encode(E p_184483_, DynamicOps<T> p_184484_, T p_184485_)
```

**Parameters:**

- `p_184483_` (`E`)
- `p_184484_` (`DynamicOps<T>`)
- `p_184485_` (`T`)

**Returns:** `DataResult<T>`

### decode

```java
public <T> DataResult<Pair<E, T>> decode(DynamicOps<T> p_184480_, T p_184481_)
```

**Parameters:**

- `p_184480_` (`DynamicOps<T>`)
- `p_184481_` (`T`)

**Returns:** `DataResult<Pair<E, T>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### orCompressed

```java
<E> public static <E> MapCodec<E> orCompressed(MapCodec<E> p_304545_, MapCodec<E> p_304716_)
```

**Parameters:**

- `p_304545_` (`MapCodec<E>`)
- `p_304716_` (`MapCodec<E>`)

**Returns:** `public static <E> MapCodec<E>`

### encode

```java
public <T> RecordBuilder<T> encode(E p_304635_, DynamicOps<T> p_304428_, RecordBuilder<T> p_304777_)
```

**Parameters:**

- `p_304635_` (`E`)
- `p_304428_` (`DynamicOps<T>`)
- `p_304777_` (`RecordBuilder<T>`)

**Returns:** `RecordBuilder<T>`

### decode

```java
public <T> DataResult<E> decode(DynamicOps<T> p_304666_, MapLike<T> p_304870_)
```

**Parameters:**

- `p_304666_` (`DynamicOps<T>`)
- `p_304870_` (`MapLike<T>`)

**Returns:** `DataResult<E>`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> p_304533_)
```

**Parameters:**

- `p_304533_` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### overrideLifecycle

```java
<E> public static <E> Codec<E> overrideLifecycle(Codec<E> p_184369_, Function<E, Lifecycle> p_184370_, Function<E, Lifecycle> p_184371_)
```

**Parameters:**

- `p_184369_` (`Codec<E>`)
- `p_184370_` (`Function<E, Lifecycle>`)
- `p_184371_` (`Function<E, Lifecycle>`)

**Returns:** `public static <E> Codec<E>`

### apply

```java
public <T> DataResult<Pair<E, T>> apply(DynamicOps<T> p_304965_, T p_304933_, DataResult<Pair<E, T>> p_304851_)
```

**Parameters:**

- `p_304965_` (`DynamicOps<T>`)
- `p_304933_` (`T`)
- `p_304851_` (`DataResult<Pair<E, T>>`)

**Returns:** `DataResult<Pair<E, T>>`

### coApply

```java
public <T> DataResult<T> coApply(DynamicOps<T> p_304780_, E p_304414_, DataResult<T> p_304779_)
```

**Parameters:**

- `p_304780_` (`DynamicOps<T>`)
- `p_304414_` (`E`)
- `p_304779_` (`DataResult<T>`)

**Returns:** `DataResult<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### overrideLifecycle

```java
<E> public static <E> Codec<E> overrideLifecycle(Codec<E> p_326460_, Function<E, Lifecycle> p_326480_)
```

**Parameters:**

- `p_326460_` (`Codec<E>`)
- `p_326480_` (`Function<E, Lifecycle>`)

**Returns:** `public static <E> Codec<E>`

### overrideLifecycle

```java
return overrideLifecycle()
```

**Returns:** `return`

### strictUnboundedMap

```java
<K, V> public static <K, V> ExtraCodecs.StrictUnboundedMapCodec<K, V> strictUnboundedMap(Codec<K> p_301201_, Codec<V> p_300984_)
```

**Parameters:**

- `p_301201_` (`Codec<K>`)
- `p_300984_` (`Codec<V>`)

**Returns:** `public static <K, V> ExtraCodecs.StrictUnboundedMapCodec<K, V>`

### intRangeWithMessage

```java
private static Codec<Integer> intRangeWithMessage(int p_144634_, int p_144635_, Function<Integer, String> p_144636_)
```

**Parameters:**

- `p_144634_` (`int`)
- `p_144635_` (`int`)
- `p_144636_` (`Function<Integer, String>`)

**Returns:** `private static Codec<Integer>`

### intRange

```java
public static Codec<Integer> intRange(int p_270883_, int p_270323_)
```

**Parameters:**

- `p_270883_` (`int`)
- `p_270323_` (`int`)

**Returns:** `public static Codec<Integer>`

### intRangeWithMessage

```java
return intRangeWithMessage(p_269784_ -> "Value must be within range [" + p_270883_ + ";" + p_270323_ + "]: " + p_269784_)
```

**Parameters:**

- `p_269784_` (`p_269784_ -> "Value must be within range [" + p_270883_ + ";" + p_270323_ + "]: " +`)

**Returns:** `return`

### floatRangeMinExclusiveWithMessage

```java
private static Codec<Float> floatRangeMinExclusiveWithMessage(float p_184351_, float p_184352_, Function<Float, String> p_184353_)
```

**Parameters:**

- `p_184351_` (`float`)
- `p_184352_` (`float`)
- `p_184353_` (`Function<Float, String>`)

**Returns:** `private static Codec<Float>`

### nonEmptyList

```java
<T> public static <T> Codec<List<T>> nonEmptyList(Codec<List<T>> p_144638_)
```

**Parameters:**

- `p_144638_` (`Codec<List<T>>`)

**Returns:** `public static <T> Codec<List<T>>`

### nonEmptyHolderSet

```java
<T> public static <T> Codec<HolderSet<T>> nonEmptyHolderSet(Codec<HolderSet<T>> p_203983_)
```

**Parameters:**

- `p_203983_` (`Codec<HolderSet<T>>`)

**Returns:** `public static <T> Codec<HolderSet<T>>`

### retrieveContext

```java
<E> public static <E> MapCodec<E> retrieveContext(Function<DynamicOps<?>, DataResult<E>> p_203977_)
```

**Parameters:**

- `p_203977_` (`Function<DynamicOps<?>, DataResult<E>>`)

**Returns:** `public static <E> MapCodec<E>`

### encode

```java
public <T> RecordBuilder<T> encode(E p_203993_, DynamicOps<T> p_203994_, RecordBuilder<T> p_203995_)
```

**Parameters:**

- `p_203993_` (`E`)
- `p_203994_` (`DynamicOps<T>`)
- `p_203995_` (`RecordBuilder<T>`)

**Returns:** `RecordBuilder<T>`

### decode

```java
public <T> DataResult<E> decode(DynamicOps<T> p_203990_, MapLike<T> p_203991_)
```

**Parameters:**

- `p_203990_` (`DynamicOps<T>`)
- `p_203991_` (`MapLike<T>`)

**Returns:** `DataResult<E>`

### toString

```java
public String toString()
```

**Returns:** `String`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> p_203997_)
```

**Parameters:**

- `p_203997_` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### ContextRetrievalCodec

```java
return new ContextRetrievalCodec()
```

**Returns:** `return new`

### ensureHomogenous

```java
public static <E, L extends Collection<E>, T> Function<L, DataResult<L>> ensureHomogenous(Function<E, T> p_203985_)
```

**Parameters:**

- `p_203985_` (`Function<E, T>`)

**Returns:** `public static <E, L extends Collection<E>, T> Function<L, DataResult<L>>`

### catchDecoderException

```java
<A> public static <A> Codec<A> catchDecoderException(Codec<A> p_216186_)
```

**Parameters:**

- `p_216186_` (`Codec<A>`)

**Returns:** `public static <A> Codec<A>`

### decode

```java
public <T> DataResult<Pair<A, T>> decode(DynamicOps<T> p_304559_, T p_304739_)
```

**Parameters:**

- `p_304559_` (`DynamicOps<T>`)
- `p_304739_` (`T`)

**Returns:** `DataResult<Pair<A, T>>`

### temporalCodec

```java
public static Codec<TemporalAccessor> temporalCodec(DateTimeFormatter p_216171_)
```

**Parameters:**

- `p_216171_` (`DateTimeFormatter`)

**Returns:** `public static Codec<TemporalAccessor>`

### asOptionalLong

```java
public static MapCodec<OptionalLong> asOptionalLong(MapCodec<Optional<Long>> p_216167_)
```

**Parameters:**

- `p_216167_` (`MapCodec<Optional<Long>>`)

**Returns:** `public static MapCodec<OptionalLong>`

### sizeLimitedMap

```java
<K, V> public static <K, V> Codec<Map<K, V>> sizeLimitedMap(Codec<Map<K, V>> p_330976_, int p_331151_)
```

**Parameters:**

- `p_330976_` (`Codec<Map<K, V>>`)
- `p_331151_` (`int`)

**Returns:** `public static <K, V> Codec<Map<K, V>>`

### object2BooleanMap

```java
<T> public static <T> Codec<Object2BooleanMap<T>> object2BooleanMap(Codec<T> p_298255_)
```

**Parameters:**

- `p_298255_` (`Codec<T>`)

**Returns:** `public static <T> Codec<Object2BooleanMap<T>>`

### dispatchOptionalValue

```java
public static <K, V> MapCodec<V> dispatchOptionalValue(String p_312812_, String p_312135_, Codec<K> p_312848_, Function<? super V, ? extends K> p_312622_, Function<? super K, ? extends Codec<? extends V>> p_312836_)
```

**Parameters:**

- `p_312812_` (`String`)
- `p_312135_` (`String`)
- `p_312848_` (`Codec<K>`)
- `p_312622_` (`Function<? super V, ? extends K>`)
- `p_312836_` (`Function<? super K, ? extends Codec<? extends V>>`)

**Returns:** `MapCodec<V>`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> p_312501_)
```

**Parameters:**

- `p_312501_` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### decode

```java
public <T> DataResult<V> decode(DynamicOps<T> p_312013_, MapLike<T> p_312527_)
```

**Parameters:**

- `p_312013_` (`DynamicOps<T>`)
- `p_312527_` (`MapLike<T>`)

**Returns:** `DataResult<V>`

### encode

```java
public <T> RecordBuilder<T> encode(V p_312741_, DynamicOps<T> p_312649_, RecordBuilder<T> p_312297_)
```

**Parameters:**

- `p_312741_` (`V`)
- `p_312649_` (`DynamicOps<T>`)
- `p_312297_` (`RecordBuilder<T>`)

**Returns:** `RecordBuilder<T>`

### encode

```java
<T, V2 extends V> private <T, V2 extends V> DataResult<T> encode(Codec<V2> p_312014_, V p_312190_, DynamicOps<T> p_312075_)
```

**Parameters:**

- `p_312014_` (`Codec<V2>`)
- `p_312190_` (`V`)
- `p_312075_` (`DynamicOps<T>`)

**Returns:** `private <T, V2 extends V> DataResult<T>`

### optionalEmptyMap

```java
<A> public static <A> Codec<Optional<A>> optionalEmptyMap(Codec<A> p_330630_)
```

**Parameters:**

- `p_330630_` (`Codec<A>`)

**Returns:** `public static <A> Codec<Optional<A>>`

### decode

```java
public <T> DataResult<Pair<Optional<A>, T>> decode(DynamicOps<T> p_330879_, T p_330924_)
```

**Parameters:**

- `p_330879_` (`DynamicOps<T>`)
- `p_330924_` (`T`)

**Returns:** `DataResult<Pair<Optional<A>, T>>`

### isEmptyMap

```java
<T> private static <T> boolean isEmptyMap(DynamicOps<T> p_338754_, T p_338581_)
```

**Parameters:**

- `p_338754_` (`DynamicOps<T>`)
- `p_338581_` (`T`)

**Returns:** `private static <T> boolean`

### encode

```java
<T> public <T> DataResult<T> encode(Optional<A> p_338508_, DynamicOps<T> p_331521_, T p_331876_)
```

**Parameters:**

- `p_338508_` (`Optional<A>`)
- `p_331521_` (`DynamicOps<T>`)
- `p_331876_` (`T`)

**Returns:** `public <T> DataResult<T>`

### decode

```java
public <T> DataResult<Map<K, V>> decode(DynamicOps<T> p_301018_, MapLike<T> p_301263_)
```

**Parameters:**

- `p_301018_` (`DynamicOps<T>`)
- `p_301263_` (`MapLike<T>`)

**Returns:** `DataResult<Map<K, V>>`

### decode

```java
public <T> DataResult<Pair<Map<K, V>, T>> decode(DynamicOps<T> p_301258_, T p_301052_)
```

**Parameters:**

- `p_301258_` (`DynamicOps<T>`)
- `p_301052_` (`T`)

**Returns:** `DataResult<Pair<Map<K, V>, T>>`

### encode

```java
<T> public <T> DataResult<T> encode(Map<K, V> p_301101_, DynamicOps<T> p_301252_, T p_301326_)
```

**Parameters:**

- `p_301101_` (`Map<K, V>`)
- `p_301252_` (`DynamicOps<T>`)
- `p_301326_` (`T`)

**Returns:** `public <T> DataResult<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### TagOrElementLocation

```java
public static record TagOrElementLocation(ResourceLocation id, boolean tag)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `tag` (`boolean`)

**Returns:** `public static record`

### toString

```java
public String toString()
```

**Returns:** `String`

### decoratedId

```java
private String decoratedId()
```

**Returns:** `private String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StrictUnboundedMapCodec` | record |  |
| `TagOrElementLocation` | record |  |
