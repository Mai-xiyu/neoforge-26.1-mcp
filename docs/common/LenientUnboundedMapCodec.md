# LenientUnboundedMapCodec

**Package:** `net.neoforged.neoforge.common`
**Type:** class<K, V> implements BaseMapCodec<K, V>, Codec<Map<K, V>>

## Description

Key and value decoded independently, unknown set of keys

## Methods

### LenientUnboundedMapCodec

```java
public LenientUnboundedMapCodec(Codec<K> keyCodec, Codec<V> elementCodec)
```

**Parameters:**

- `keyCodec` (`Codec<K>`)
- `elementCodec` (`Codec<V>`)

**Returns:** `public`

### keyCodec

```java
public Codec<K> keyCodec()
```

**Returns:** `Codec<K>`

### elementCodec

```java
public Codec<V> elementCodec()
```

**Returns:** `Codec<V>`

### decode

```java
<T> in BaseMapCodec
    public <T> DataResult<Map<K, V>> decode(DynamicOps<T> ops, MapLike<T> input)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)
- `input` (`MapLike<T>`)

**Returns:** `in BaseMapCodec
    public <T> DataResult<Map<K, V>>`

### decode

```java
public <T> DataResult<Pair<Map<K, V>, T>> decode(DynamicOps<T> ops, T input)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)
- `input` (`T`)

**Returns:** `DataResult<Pair<Map<K, V>, T>>`

### encode

```java
public <T> DataResult<T> encode(Map<K, V> input, DynamicOps<T> ops, T prefix)
```

**Parameters:**

- `input` (`Map<K, V>`)
- `ops` (`DynamicOps<T>`)
- `prefix` (`T`)

**Returns:** `DataResult<T>`

### equals

```java
public boolean equals(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
