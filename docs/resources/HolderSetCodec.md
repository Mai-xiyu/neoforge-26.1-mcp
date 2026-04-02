# HolderSetCodec

**Package:** `net.minecraft.resources`
**Type:** class<E> implements Codec<HolderSet<E>>

## Methods

### homogenousList

```java
<E> private static <E> Codec<List<Holder<E>>> homogenousList(Codec<Holder<E>> p_206668_, boolean p_206669_)
```

**Parameters:**

- `p_206668_` (`Codec<Holder<E>>`)
- `p_206669_` (`boolean`)

**Returns:** `private static <E> Codec<List<Holder<E>>>`

### create

```java
<E> public static <E> Codec<HolderSet<E>> create(ResourceKey<? extends Registry<E>> p_206686_, Codec<Holder<E>> p_206687_, boolean p_206688_)
```

**Parameters:**

- `p_206686_` (`ResourceKey<? extends Registry<E>>`)
- `p_206687_` (`Codec<Holder<E>>`)
- `p_206688_` (`boolean`)

**Returns:** `public static <E> Codec<HolderSet<E>>`

### HolderSetCodec

```java
private HolderSetCodec(ResourceKey<? extends Registry<E>> p_206660_, Codec<Holder<E>> p_206661_, boolean p_206662_)
```

**Parameters:**

- `p_206660_` (`ResourceKey<? extends Registry<E>>`)
- `p_206661_` (`Codec<Holder<E>>`)
- `p_206662_` (`boolean`)

**Returns:** `private`

### decode

```java
public <T> DataResult<Pair<HolderSet<E>, T>> decode(DynamicOps<T> p_206696_, T p_206697_)
```

**Parameters:**

- `p_206696_` (`DynamicOps<T>`)
- `p_206697_` (`T`)

**Returns:** `DataResult<Pair<HolderSet<E>, T>>`

### lookupTag

```java
<E> private static <E> DataResult<HolderSet<E>> lookupTag(HolderGetter<E> p_332757_, TagKey<E> p_332743_)
```

**Parameters:**

- `p_332757_` (`HolderGetter<E>`)
- `p_332743_` (`TagKey<E>`)

**Returns:** `private static <E> DataResult<HolderSet<E>>`

### encode

```java
<T> public <T> DataResult<T> encode(HolderSet<E> p_206674_, DynamicOps<T> p_206675_, T p_206676_)
```

**Parameters:**

- `p_206674_` (`HolderSet<E>`)
- `p_206675_` (`DynamicOps<T>`)
- `p_206676_` (`T`)

**Returns:** `public <T> DataResult<T>`

### decodeWithoutRegistry

```java
<T> private <T> DataResult<Pair<HolderSet<E>, T>> decodeWithoutRegistry(DynamicOps<T> p_206671_, T p_206672_)
```

**Parameters:**

- `p_206671_` (`DynamicOps<T>`)
- `p_206672_` (`T`)

**Returns:** `private <T> DataResult<Pair<HolderSet<E>, T>>`

### encodeWithoutRegistry

```java
<T> private <T> DataResult<T> encodeWithoutRegistry(HolderSet<E> p_206690_, DynamicOps<T> p_206691_, T p_206692_)
```

**Parameters:**

- `p_206690_` (`HolderSet<E>`)
- `p_206691_` (`DynamicOps<T>`)
- `p_206692_` (`T`)

**Returns:** `private <T> DataResult<T>`
