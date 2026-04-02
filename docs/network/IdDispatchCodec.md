# IdDispatchCodec

**Package:** `net.minecraft.network.codec`
**Type:** class<B extends ByteBuf, V, T> implements StreamCodec<B, V>

## Methods

### IdDispatchCodec

```java
 IdDispatchCodec(Function<V, ? extends T> p_320468_, List<IdDispatchCodec.Entry<B, V, T>> p_320536_, Object2IntMap<T> p_320597_)
```

**Parameters:**

- `p_320468_` (`Function<V, ? extends T>`)
- `p_320536_` (`List<IdDispatchCodec.Entry<B, V, T>>`)
- `p_320597_` (`Object2IntMap<T>`)

**Returns:** ``

### decode

```java
public V decode(B p_320374_)
```

**Parameters:**

- `p_320374_` (`B`)

**Returns:** `public V`

### DecoderException

```java
throw new DecoderException("Failed to decode packet '" + entry.type + "'")
```

**Parameters:**

- `"'"` (`"Failed to decode packet '" + entry.type +`)

**Returns:** `throw new`

### DecoderException

```java
throw new DecoderException("Received unknown packet id " + i)
```

**Parameters:**

- `i` (`"Received unknown packet id " +`)

**Returns:** `throw new`

### encode

```java
public void encode(B p_319955_, V p_320138_)
```

**Parameters:**

- `p_319955_` (`B`)
- `p_320138_` (`V`)

**Returns:** `public void`

### EncoderException

```java
throw new EncoderException("Sending unknown packet '" + t + "'")
```

**Parameters:**

- `"'"` (`"Sending unknown packet '" + t +`)

**Returns:** `throw new`

### EncoderException

```java
throw new EncoderException("Failed to encode packet '" + t + "'")
```

**Parameters:**

- `"'"` (`"Failed to encode packet '" + t +`)

**Returns:** `throw new`

### builder

```java
<B extends ByteBuf, V, T> public static <B extends ByteBuf, V, T> IdDispatchCodec.Builder<B, V, T> builder(Function<V, ? extends T> p_319781_)
```

**Parameters:**

- `p_319781_` (`Function<V, ? extends T>`)

**Returns:** `public static <B extends ByteBuf, V, T> IdDispatchCodec.Builder<B, V, T>`

### Builder

```java
 Builder(Function<V, ? extends T> p_320009_)
```

**Parameters:**

- `p_320009_` (`Function<V, ? extends T>`)

**Returns:** ``

### add

```java
public IdDispatchCodec.Builder<B, V, T> add(T p_320423_, StreamCodec<? super B, ? extends V> p_320781_)
```

**Parameters:**

- `p_320423_` (`T`)
- `p_320781_` (`StreamCodec<? super B, ? extends V>`)

**Returns:** `public IdDispatchCodec.Builder<B, V, T>`

### build

```java
public IdDispatchCodec<B, V, T> build()
```

**Returns:** `public IdDispatchCodec<B, V, T>`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate registration for type " + entry.type)
```

**Parameters:**

- `entry.type` (`"Duplicate registration for type " +`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
