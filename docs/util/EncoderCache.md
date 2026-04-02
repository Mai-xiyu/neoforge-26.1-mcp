# EncoderCache

**Package:** `net.minecraft.util`
**Type:** class

## Methods

### EncoderCache

```java
public EncoderCache(int p_341936_)
```

**Parameters:**

- `p_341936_` (`int`)

**Returns:** `public`

### load

```java
public DataResult<?> load(EncoderCache.Key<?, ?> p_341934_)
```

**Parameters:**

- `p_341934_` (`EncoderCache.Key<?, ?>`)

**Returns:** `public DataResult<?>`

### wrap

```java
<A> public <A> Codec<A> wrap(Codec<A> p_341888_)
```

**Parameters:**

- `p_341888_` (`Codec<A>`)

**Returns:** `public <A> Codec<A>`

### decode

```java
public <T> DataResult<Pair<A, T>> decode(DynamicOps<T> p_341931_, T p_341946_)
```

**Parameters:**

- `p_341931_` (`DynamicOps<T>`)
- `p_341946_` (`T`)

**Returns:** `DataResult<Pair<A, T>>`

### encode

```java
public <T> DataResult<T> encode(A p_341885_, DynamicOps<T> p_341925_, T p_341904_)
```

**Parameters:**

- `p_341885_` (`A`)
- `p_341925_` (`DynamicOps<T>`)
- `p_341904_` (`T`)

**Returns:** `DataResult<T>`

### resolve

```java
public DataResult<T> resolve()
```

**Returns:** `public DataResult<T>`

### equals

```java
public boolean equals(Object p_341937_)
```

**Parameters:**

- `p_341937_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
