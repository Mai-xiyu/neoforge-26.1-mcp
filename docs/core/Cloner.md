# Cloner

**Package:** `net.minecraft.core`
**Type:** class<T>

## Methods

### Cloner

```java
 Cloner(Codec<T> p_311867_)
```

**Parameters:**

- `p_311867_` (`Codec<T>`)

**Returns:** ``

### clone

```java
public T clone(T p_312894_, HolderLookup.Provider p_312425_, HolderLookup.Provider p_312105_)
```

**Parameters:**

- `p_312894_` (`T`)
- `p_312425_` (`HolderLookup.Provider`)
- `p_312105_` (`HolderLookup.Provider`)

**Returns:** `public T`

### addCodec

```java
<T> public <T> Cloner.Factory addCodec(ResourceKey<? extends Registry<? extends T>> p_311972_, Codec<T> p_312658_)
```

**Parameters:**

- `p_311972_` (`ResourceKey<? extends Registry<? extends T>>`)
- `p_312658_` (`Codec<T>`)

**Returns:** `public <T> Cloner.Factory`

### cloner

```java
public <T> Cloner<T> cloner(ResourceKey<? extends Registry<? extends T>> p_312530_)
```

**Parameters:**

- `p_312530_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Cloner<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Factory` | class |  |
