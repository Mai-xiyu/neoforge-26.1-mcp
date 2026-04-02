# DataComponentType

**Package:** `net.minecraft.core.component`
**Type:** interface<T>

## Methods

### builder

```java
<T> static <T> DataComponentType.Builder<T> builder()
```

**Returns:** `static <T> DataComponentType.Builder<T>`

### codec

```java
Codec<T> codec()
```

**Returns:** `Codec<T>`

### codecOrThrow

```java
default Codec<T> codecOrThrow()
```

**Returns:** `default Codec<T>`

### IllegalStateException

```java
throw new IllegalStateException(this + " is not a persistent component")
```

**Parameters:**

- `component"` (`this + " is not a persistent`)

**Returns:** `throw new`

### isTransient

```java
default boolean isTransient()
```

**Returns:** `default boolean`

### streamCodec

```java
StreamCodec<? super RegistryFriendlyByteBuf, T> streamCodec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, T>`

### persistent

```java
public DataComponentType.Builder<T> persistent(Codec<T> p_331936_)
```

**Parameters:**

- `p_331936_` (`Codec<T>`)

**Returns:** `public DataComponentType.Builder<T>`

### networkSynchronized

```java
public DataComponentType.Builder<T> networkSynchronized(StreamCodec<? super RegistryFriendlyByteBuf, T> p_331364_)
```

**Parameters:**

- `p_331364_` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)

**Returns:** `public DataComponentType.Builder<T>`

### cacheEncoding

```java
public DataComponentType.Builder<T> cacheEncoding()
```

**Returns:** `public DataComponentType.Builder<T>`

### build

```java
public DataComponentType<T> build()
```

**Returns:** `public DataComponentType<T>`

### SimpleType

```java
 SimpleType(Codec<T> p_331492_, StreamCodec<? super RegistryFriendlyByteBuf, T> p_330863_)
```

**Parameters:**

- `p_331492_` (`Codec<T>`)
- `p_330863_` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)

**Returns:** ``

### codec

```java
public Codec<T> codec()
```

**Returns:** `Codec<T>`

### streamCodec

```java
public StreamCodec<? super RegistryFriendlyByteBuf, T> streamCodec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, T>`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
