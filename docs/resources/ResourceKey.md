# ResourceKey

**Package:** `net.minecraft.resources`
**Type:** class<T> implements Comparable<ResourceKey<?>>

## Methods

### codec

```java
<T> public static <T> Codec<ResourceKey<T>> codec(ResourceKey<? extends Registry<T>> p_195967_)
```

**Parameters:**

- `p_195967_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public static <T> Codec<ResourceKey<T>>`

### streamCodec

```java
<T> public static <T> StreamCodec<ByteBuf, ResourceKey<T>> streamCodec(ResourceKey<? extends Registry<T>> p_320330_)
```

**Parameters:**

- `p_320330_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public static <T> StreamCodec<ByteBuf, ResourceKey<T>>`

### create

```java
<T> public static <T> ResourceKey<T> create(ResourceKey<? extends Registry<T>> p_135786_, ResourceLocation p_135787_)
```

**Parameters:**

- `p_135786_` (`ResourceKey<? extends Registry<T>>`)
- `p_135787_` (`ResourceLocation`)

**Returns:** `public static <T> ResourceKey<T>`

### create

```java
return create()
```

**Returns:** `return`

### createRegistryKey

```java
<T> public static <T> ResourceKey<Registry<T>> createRegistryKey(ResourceLocation p_135789_)
```

**Parameters:**

- `p_135789_` (`ResourceLocation`)

**Returns:** `public static <T> ResourceKey<Registry<T>>`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
<T> private static <T> ResourceKey<T> create(ResourceLocation p_135791_, ResourceLocation p_135792_)
```

**Parameters:**

- `p_135791_` (`ResourceLocation`)
- `p_135792_` (`ResourceLocation`)

**Returns:** `private static <T> ResourceKey<T>`

### ResourceKey

```java
private ResourceKey(ResourceLocation p_135780_, ResourceLocation p_135781_)
```

**Parameters:**

- `p_135780_` (`ResourceLocation`)
- `p_135781_` (`ResourceLocation`)

**Returns:** `private`

### toString

```java
public String toString()
```

**Returns:** `String`

### isFor

```java
public boolean isFor(ResourceKey<? extends Registry<?>> p_135784_)
```

**Parameters:**

- `p_135784_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `public boolean`

### cast

```java
<E> public <E> Optional<ResourceKey<E>> cast(ResourceKey<? extends Registry<E>> p_195976_)
```

**Parameters:**

- `p_195976_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `public <E> Optional<ResourceKey<E>>`

### location

```java
public ResourceLocation location()
```

**Returns:** `public ResourceLocation`

### registry

```java
public ResourceLocation registry()
```

**Returns:** `public ResourceLocation`

### registryKey

```java
public ResourceKey<Registry<T>> registryKey()
```

**Returns:** `public ResourceKey<Registry<T>>`

### createRegistryKey

```java
return createRegistryKey()
```

**Returns:** `return`

### compareTo

```java
public int compareTo(ResourceKey<?> o)
```

**Parameters:**

- `o` (`ResourceKey<?>`)

**Returns:** `int`

### InternKey

```java
static record InternKey(ResourceLocation registry, ResourceLocation location)
```

**Parameters:**

- `registry` (`ResourceLocation`)
- `location` (`ResourceLocation`)

**Returns:** `static record`
