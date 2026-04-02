# StreamCodec

**Package:** `net.minecraft.network.codec`
**Type:** interface<B, V> extends StreamDecoder<B, V>, StreamEncoder<B, V>

## Methods

### of

```java
<B, V> static <B, V> StreamCodec<B, V> of(StreamEncoder<B, V> p_320243_, StreamDecoder<B, V> p_320197_)
```

**Parameters:**

- `p_320243_` (`StreamEncoder<B, V>`)
- `p_320197_` (`StreamDecoder<B, V>`)

**Returns:** `static <B, V> StreamCodec<B, V>`

### decode

```java
public V decode(B p_319945_)
```

**Parameters:**

- `p_319945_` (`B`)

**Returns:** `V`

### encode

```java
public void encode(B p_320538_, V p_320754_)
```

**Parameters:**

- `p_320538_` (`B`)
- `p_320754_` (`V`)

### ofMember

```java
<B, V> static <B, V> StreamCodec<B, V> ofMember(StreamMemberEncoder<B, V> p_320316_, StreamDecoder<B, V> p_319991_)
```

**Parameters:**

- `p_320316_` (`StreamMemberEncoder<B, V>`)
- `p_319991_` (`StreamDecoder<B, V>`)

**Returns:** `static <B, V> StreamCodec<B, V>`

### decode

```java
public V decode(B p_320797_)
```

**Parameters:**

- `p_320797_` (`B`)

**Returns:** `V`

### encode

```java
public void encode(B p_319939_, V p_320568_)
```

**Parameters:**

- `p_319939_` (`B`)
- `p_320568_` (`V`)

### unit

```java
<B, V> static <B, V> StreamCodec<B, V> unit(V p_320438_)
```

**Parameters:**

- `p_320438_` (`V`)

**Returns:** `static <B, V> StreamCodec<B, V>`

### decode

```java
public V decode(B p_320572_)
```

**Parameters:**

- `p_320572_` (`B`)

**Returns:** `V`

### encode

```java
public void encode(B p_320044_, V p_320328_)
```

**Parameters:**

- `p_320044_` (`B`)
- `p_320328_` (`V`)

### IllegalStateException

```java
throw new IllegalStateException("Can't encode '" + p_320328_ + "', expected '" + p_320438_ + "'")
```

**Parameters:**

- `"'` (`"Can't encode '" + p_320328_ +`)
- `"'"` (`expected '" + p_320438_ +`)

**Returns:** `throw new`

### apply

```java
<O> default <O> StreamCodec<B, O> apply(StreamCodec.CodecOperation<B, V, O> p_320531_)
```

**Parameters:**

- `p_320531_` (`StreamCodec.CodecOperation<B, V, O>`)

**Returns:** `default <O> StreamCodec<B, O>`

### map

```java
<O> default <O> StreamCodec<B, O> map(Function<? super V, ? extends O> p_320812_, Function<? super O, ? extends V> p_320191_)
```

**Parameters:**

- `p_320812_` (`Function<? super V, ? extends O>`)
- `p_320191_` (`Function<? super O, ? extends V>`)

**Returns:** `default <O> StreamCodec<B, O>`

### decode

```java
public O decode(B p_320534_)
```

**Parameters:**

- `p_320534_` (`B`)

**Returns:** `O`

### encode

```java
public void encode(B p_319798_, O p_320273_)
```

**Parameters:**

- `p_319798_` (`B`)
- `p_320273_` (`O`)

### mapStream

```java
<O extends ByteBuf> default <O extends ByteBuf> StreamCodec<O, V> mapStream(Function<O, ? extends B> p_320784_)
```

**Parameters:**

- `p_320784_` (`Function<O, ? extends B>`)

**Returns:** `default <O extends ByteBuf> StreamCodec<O, V>`

### decode

```java
public V decode(O p_319818_)
```

**Parameters:**

- `p_319818_` (`O`)

**Returns:** `public V`

### encode

```java
public void encode(O p_319973_, V p_319843_)
```

**Parameters:**

- `p_319973_` (`O`)
- `p_319843_` (`V`)

**Returns:** `public void`

### dispatch

```java
<U> default <U> StreamCodec<B, U> dispatch(Function<? super U, ? extends V> p_320474_, Function<? super V, ? extends StreamCodec<? super B, ? extends U>> p_320190_)
```

**Parameters:**

- `p_320474_` (`Function<? super U, ? extends V>`)
- `p_320190_` (`Function<? super V, ? extends StreamCodec<? super B, ? extends U>>`)

**Returns:** `default <U> StreamCodec<B, U>`

### decode

```java
public U decode(B p_320094_)
```

**Parameters:**

- `p_320094_` (`B`)

**Returns:** `U`

### encode

```java
public void encode(B p_320767_, U p_320010_)
```

**Parameters:**

- `p_320767_` (`B`)
- `p_320010_` (`U`)

### composite

```java
<B, C, T1> static <B, C, T1> StreamCodec<B, C> composite(StreamCodec<? super B, T1> p_320179_, Function<C, T1> p_320085_, Function<T1, C> p_320672_)
```

**Parameters:**

- `p_320179_` (`StreamCodec<? super B, T1>`)
- `p_320085_` (`Function<C, T1>`)
- `p_320672_` (`Function<T1, C>`)

**Returns:** `static <B, C, T1> StreamCodec<B, C>`

### decode

```java
public C decode(B p_320924_)
```

**Parameters:**

- `p_320924_` (`B`)

**Returns:** `C`

### encode

```java
public void encode(B p_320798_, C p_320749_)
```

**Parameters:**

- `p_320798_` (`B`)
- `p_320749_` (`C`)

### composite

```java
<B, C, T1, T2> static <B, C, T1, T2> StreamCodec<B, C> composite(StreamCodec<? super B, T1> p_320642_, Function<C, T1> p_320284_, StreamCodec<? super B, T2> p_320068_, Function<C, T2> p_319959_, BiFunction<T1, T2, C> p_320761_)
```

**Parameters:**

- `p_320642_` (`StreamCodec<? super B, T1>`)
- `p_320284_` (`Function<C, T1>`)
- `p_320068_` (`StreamCodec<? super B, T2>`)
- `p_319959_` (`Function<C, T2>`)
- `p_320761_` (`BiFunction<T1, T2, C>`)

**Returns:** `static <B, C, T1, T2> StreamCodec<B, C>`

### decode

```java
public C decode(B p_320168_)
```

**Parameters:**

- `p_320168_` (`B`)

**Returns:** `C`

### encode

```java
public void encode(B p_320592_, C p_320163_)
```

**Parameters:**

- `p_320592_` (`B`)
- `p_320163_` (`C`)

### composite

```java
<B, C, T1, T2, T3> static <B, C, T1, T2, T3> StreamCodec<B, C> composite(StreamCodec<? super B, T1> p_320928_, Function<C, T1> p_320123_, StreamCodec<? super B, T2> p_319815_, Function<C, T2> p_319965_, StreamCodec<? super B, T3> p_319834_, Function<C, T3> p_320645_, Function3<T1, T2, T3, C> p_320386_)
```

**Parameters:**

- `p_320928_` (`StreamCodec<? super B, T1>`)
- `p_320123_` (`Function<C, T1>`)
- `p_319815_` (`StreamCodec<? super B, T2>`)
- `p_319965_` (`Function<C, T2>`)
- `p_319834_` (`StreamCodec<? super B, T3>`)
- `p_320645_` (`Function<C, T3>`)
- `p_320386_` (`Function3<T1, T2, T3, C>`)

**Returns:** `static <B, C, T1, T2, T3> StreamCodec<B, C>`

### decode

```java
public C decode(B p_320842_)
```

**Parameters:**

- `p_320842_` (`B`)

**Returns:** `C`

### encode

```java
public void encode(B p_320737_, C p_320439_)
```

**Parameters:**

- `p_320737_` (`B`)
- `p_320439_` (`C`)

### composite

```java
<B, C, T1, T2, T3, T4> static <B, C, T1, T2, T3, T4> StreamCodec<B, C> composite(StreamCodec<? super B, T1> p_323726_, Function<C, T1> p_324414_, StreamCodec<? super B, T2> p_323659_, Function<C, T2> p_323932_, StreamCodec<? super B, T3> p_323964_, Function<C, T3> p_324282_, StreamCodec<? super B, T4> p_323671_, Function<C, T4> p_324254_, Function4<T1, T2, T3, T4, C> p_324090_)
```

**Parameters:**

- `p_323726_` (`StreamCodec<? super B, T1>`)
- `p_324414_` (`Function<C, T1>`)
- `p_323659_` (`StreamCodec<? super B, T2>`)
- `p_323932_` (`Function<C, T2>`)
- `p_323964_` (`StreamCodec<? super B, T3>`)
- `p_324282_` (`Function<C, T3>`)
- `p_323671_` (`StreamCodec<? super B, T4>`)
- `p_324254_` (`Function<C, T4>`)
- `p_324090_` (`Function4<T1, T2, T3, T4, C>`)

**Returns:** `static <B, C, T1, T2, T3, T4> StreamCodec<B, C>`

### decode

```java
public C decode(B p_323859_)
```

**Parameters:**

- `p_323859_` (`B`)

**Returns:** `C`

### encode

```java
public void encode(B p_323667_, C p_323469_)
```

**Parameters:**

- `p_323667_` (`B`)
- `p_323469_` (`C`)

### composite

```java
<B, C, T1, T2, T3, T4, T5> static <B, C, T1, T2, T3, T4, T5> StreamCodec<B, C> composite(StreamCodec<? super B, T1> p_324413_, Function<C, T1> p_323568_, StreamCodec<? super B, T2> p_323835_, Function<C, T2> p_323513_, StreamCodec<? super B, T3> p_324112_, Function<C, T3> p_323815_, StreamCodec<? super B, T4> p_323483_, Function<C, T4> p_323725_, StreamCodec<? super B, T5> p_324486_, Function<C, T5> p_323518_, Function5<T1, T2, T3, T4, T5, C> p_324480_)
```

**Parameters:**

- `p_324413_` (`StreamCodec<? super B, T1>`)
- `p_323568_` (`Function<C, T1>`)
- `p_323835_` (`StreamCodec<? super B, T2>`)
- `p_323513_` (`Function<C, T2>`)
- `p_324112_` (`StreamCodec<? super B, T3>`)
- `p_323815_` (`Function<C, T3>`)
- `p_323483_` (`StreamCodec<? super B, T4>`)
- `p_323725_` (`Function<C, T4>`)
- `p_324486_` (`StreamCodec<? super B, T5>`)
- `p_323518_` (`Function<C, T5>`)
- `p_324480_` (`Function5<T1, T2, T3, T4, T5, C>`)

**Returns:** `static <B, C, T1, T2, T3, T4, T5> StreamCodec<B, C>`

### decode

```java
public C decode(B p_324610_)
```

**Parameters:**

- `p_324610_` (`B`)

**Returns:** `C`

### encode

```java
public void encode(B p_323786_, C p_323619_)
```

**Parameters:**

- `p_323786_` (`B`)
- `p_323619_` (`C`)

### composite

```java
<B, C, T1, T2, T3, T4, T5, T6> static <B, C, T1, T2, T3, T4, T5, T6> StreamCodec<B, C> composite(StreamCodec<? super B, T1> p_331822_, Function<C, T1> p_330864_, StreamCodec<? super B, T2> p_331390_, Function<C, T2> p_331203_, StreamCodec<? super B, T3> p_331499_, Function<C, T3> p_330294_, StreamCodec<? super B, T4> p_331169_, Function<C, T4> p_331830_, StreamCodec<? super B, T5> p_331057_, Function<C, T5> p_331593_, StreamCodec<? super B, T6> p_331117_, Function<C, T6> p_331904_, Function6<T1, T2, T3, T4, T5, T6, C> p_331335_)
```

**Parameters:**

- `p_331822_` (`StreamCodec<? super B, T1>`)
- `p_330864_` (`Function<C, T1>`)
- `p_331390_` (`StreamCodec<? super B, T2>`)
- `p_331203_` (`Function<C, T2>`)
- `p_331499_` (`StreamCodec<? super B, T3>`)
- `p_330294_` (`Function<C, T3>`)
- `p_331169_` (`StreamCodec<? super B, T4>`)
- `p_331830_` (`Function<C, T4>`)
- `p_331057_` (`StreamCodec<? super B, T5>`)
- `p_331593_` (`Function<C, T5>`)
- `p_331117_` (`StreamCodec<? super B, T6>`)
- `p_331904_` (`Function<C, T6>`)
- `p_331335_` (`Function6<T1, T2, T3, T4, T5, T6, C>`)

**Returns:** `static <B, C, T1, T2, T3, T4, T5, T6> StreamCodec<B, C>`

### decode

```java
public C decode(B p_330310_)
```

**Parameters:**

- `p_330310_` (`B`)

**Returns:** `C`

### encode

```java
public void encode(B p_332052_, C p_331912_)
```

**Parameters:**

- `p_332052_` (`B`)
- `p_331912_` (`C`)

### recursive

```java
<B, T> static <B, T> StreamCodec<B, T> recursive(UnaryOperator<StreamCodec<B, T>> p_330470_)
```

**Parameters:**

- `p_330470_` (`UnaryOperator<StreamCodec<B, T>>`)

**Returns:** `static <B, T> StreamCodec<B, T>`

### decode

```java
public T decode(B p_330903_)
```

**Parameters:**

- `p_330903_` (`B`)

**Returns:** `T`

### encode

```java
public void encode(B p_331641_, T p_330634_)
```

**Parameters:**

- `p_331641_` (`B`)
- `p_330634_` (`T`)

### cast

```java
<S extends B> default <S extends B> StreamCodec<S, V> cast()
```

**Returns:** `default <S extends B> StreamCodec<S, V>`

### apply

```java
StreamCodec<B, T> apply(StreamCodec<B, S> p_320347_)
```

**Parameters:**

- `p_320347_` (`StreamCodec<B, S>`)

**Returns:** `StreamCodec<B, T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CodecOperation` | interface |  |
