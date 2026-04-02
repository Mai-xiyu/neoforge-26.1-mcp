# IFriendlyByteBufExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Additional helper methods for `FriendlyByteBuf`.

## Methods

### self

```java
private FriendlyByteBuf self()
```

**Returns:** `private FriendlyByteBuf`

### writeObjectCollection

```java
default <T> void writeObjectCollection(Collection<T> set, BiConsumer<T, FriendlyByteBuf> writer)
```

**Parameters:**

- `set` (`Collection<T>`)
- `writer` (`BiConsumer<T, FriendlyByteBuf>`)

### readArray

```java
<T> T[] readArray(IntFunction<T[]> builder, StreamDecoder<? super FriendlyByteBuf, T> reader)
```

**Parameters:**

- `builder` (`IntFunction<T[]>`)
- `reader` (`StreamDecoder<? super FriendlyByteBuf, T>`)

**Returns:** `T[]`

### writeArray

```java
default <T> FriendlyByteBuf writeArray(T[] array, StreamEncoder<? super FriendlyByteBuf, T> writer)
```

**Parameters:**

- `array` (`T[]`)
- `writer` (`StreamEncoder<? super FriendlyByteBuf, T>`)

**Returns:** `FriendlyByteBuf`

### self

```java
return self()
```

**Returns:** `return`

### writeByte

```java
default FriendlyByteBuf writeByte(byte value)
```

**Parameters:**

- `value` (`byte`)

**Returns:** `FriendlyByteBuf`

### readMap

```java
default <K, V> Map<K, V> readMap(StreamDecoder<? super FriendlyByteBuf, K> keyReader, BiFunction<FriendlyByteBuf, K, V> valueReader)
```

**Parameters:**

- `keyReader` (`StreamDecoder<? super FriendlyByteBuf, K>`)
- `valueReader` (`BiFunction<FriendlyByteBuf, K, V>`)

**Returns:** `Map<K, V>`

### writeMap

```java
default <K, V> void writeMap(Map<K, V> map, StreamEncoder<? super FriendlyByteBuf, K> keyWriter, TriConsumer<FriendlyByteBuf, K, V> valueWriter)
```

**Parameters:**

- `map` (`Map<K, V>`)
- `keyWriter` (`StreamEncoder<? super FriendlyByteBuf, K>`)
- `valueWriter` (`TriConsumer<FriendlyByteBuf, K, V>`)
