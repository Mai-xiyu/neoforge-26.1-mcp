# HolderGetter

**Package:** `net.minecraft.core`
**Type:** interface<T>

## Methods

### get

```java
Optional<Holder.Reference<T>> get(ResourceKey<T> p_255645_)
```

**Parameters:**

- `p_255645_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### getOrThrow

```java
default Holder.Reference<T> getOrThrow(ResourceKey<T> p_255990_)
```

**Parameters:**

- `p_255990_` (`ResourceKey<T>`)

**Returns:** `default Holder.Reference<T>`

### get

```java
Optional<HolderSet.Named<T>> get(TagKey<T> p_256283_)
```

**Parameters:**

- `p_256283_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### getOrThrow

```java
default HolderSet.Named<T> getOrThrow(TagKey<T> p_256125_)
```

**Parameters:**

- `p_256125_` (`TagKey<T>`)

**Returns:** `default HolderSet.Named<T>`

### lookup

```java
<T> <T> Optional<HolderGetter<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256648_)
```

**Parameters:**

- `p_256648_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `<T> Optional<HolderGetter<T>>`

### lookupOrThrow

```java
<T> default <T> HolderGetter<T> lookupOrThrow(ResourceKey<? extends Registry<? extends T>> p_255881_)
```

**Parameters:**

- `p_255881_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `default <T> HolderGetter<T>`

### get

```java
<T> default <T> Optional<Holder.Reference<T>> get(ResourceKey<? extends Registry<? extends T>> p_336145_, ResourceKey<T> p_335555_)
```

**Parameters:**

- `p_336145_` (`ResourceKey<? extends Registry<? extends T>>`)
- `p_335555_` (`ResourceKey<T>`)

**Returns:** `default <T> Optional<Holder.Reference<T>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | interface |  |
