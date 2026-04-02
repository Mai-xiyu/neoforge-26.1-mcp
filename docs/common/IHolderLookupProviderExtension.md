# IHolderLookupProviderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private HolderLookup.Provider self()
```

**Returns:** `private HolderLookup.Provider`

### holderOrThrow

```java
default <T> Holder<T> holderOrThrow(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `Holder<T>`

### holder

```java
default <T> Optional<Holder.Reference<T>> holder(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`
