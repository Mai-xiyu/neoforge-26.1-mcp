# HolderSetType

**Package:** `net.neoforged.neoforge.registries.holdersets`
**Type:** interface

## Methods

### makeCodec

```java
<T> <T> MapCodec<? extends ICustomHolderSet<T>> makeCodec(ResourceKey<? extends Registry<T>> registryKey, Codec<Holder<T>> holderCodec, boolean forceList)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)
- `holderCodec` (`Codec<Holder<T>>`)
- `forceList` (`boolean`)

**Returns:** `<T> MapCodec<? extends ICustomHolderSet<T>>`

### makeStreamCodec

```java
<T> <T> StreamCodec<RegistryFriendlyByteBuf, ? extends ICustomHolderSet<T>> makeStreamCodec(ResourceKey<? extends Registry<T>> registryKey)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `<T> StreamCodec<RegistryFriendlyByteBuf, ? extends ICustomHolderSet<T>>`
