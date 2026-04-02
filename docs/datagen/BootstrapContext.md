# BootstrapContext

**Package:** `net.minecraft.data.worldgen`
**Type:** interface<T>

## Methods

### register

```java
Holder.Reference<T> register(ResourceKey<T> p_321720_, T p_321670_, Lifecycle p_321792_)
```

**Parameters:**

- `p_321720_` (`ResourceKey<T>`)
- `p_321670_` (`T`)
- `p_321792_` (`Lifecycle`)

**Returns:** `Holder.Reference<T>`

### register

```java
default Holder.Reference<T> register(ResourceKey<T> p_321660_, T p_321479_)
```

**Parameters:**

- `p_321660_` (`ResourceKey<T>`)
- `p_321479_` (`T`)

**Returns:** `default Holder.Reference<T>`

### lookup

```java
<S> <S> HolderGetter<S> lookup(ResourceKey<? extends Registry<? extends S>> p_321547_)
```

**Parameters:**

- `p_321547_` (`ResourceKey<? extends Registry<? extends S>>`)

**Returns:** `<S> HolderGetter<S>`

### registryLookup

```java
<S> default <S> java.util.Optional<net.minecraft.core.HolderLookup.RegistryLookup<S>> registryLookup(ResourceKey<? extends Registry<? extends S>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<? extends S>>`)

**Returns:** `default <S> java.util.Optional<net.minecraft.core.HolderLookup.RegistryLookup<S>>`
