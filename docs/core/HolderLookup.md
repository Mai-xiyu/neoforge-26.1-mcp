# HolderLookup

**Package:** `net.minecraft.core`
**Type:** interface<T> extends HolderGetter<T>

## Methods

### listElements

```java
Stream<Holder.Reference<T>> listElements()
```

**Returns:** `Stream<Holder.Reference<T>>`

### listElementIds

```java
default Stream<ResourceKey<T>> listElementIds()
```

**Returns:** `default Stream<ResourceKey<T>>`

### listTags

```java
Stream<HolderSet.Named<T>> listTags()
```

**Returns:** `Stream<HolderSet.Named<T>>`

### listTagIds

```java
default Stream<TagKey<T>> listTagIds()
```

**Returns:** `default Stream<TagKey<T>>`

### listRegistries

```java
Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
<T> <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256285_)
```

**Parameters:**

- `p_256285_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `<T> Optional<HolderLookup.RegistryLookup<T>>`

### lookupOrThrow

```java
<T> default <T> HolderLookup.RegistryLookup<T> lookupOrThrow(ResourceKey<? extends Registry<? extends T>> p_255957_)
```

**Parameters:**

- `p_255957_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `default <T> HolderLookup.RegistryLookup<T>`

### createSerializationContext

```java
<V> default <V> RegistryOps<V> createSerializationContext(DynamicOps<V> p_326817_)
```

**Parameters:**

- `p_326817_` (`DynamicOps<V>`)

**Returns:** `default <V> RegistryOps<V>`

### asGetterLookup

```java
default HolderGetter.Provider asGetterLookup()
```

**Returns:** `default HolderGetter.Provider`

### lookup

```java
public <T> Optional<HolderGetter<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256379_)
```

**Parameters:**

- `p_256379_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderGetter<T>>`

### create

```java
static HolderLookup.Provider create(Stream<HolderLookup.RegistryLookup<?>> p_256054_)
```

**Parameters:**

- `p_256054_` (`Stream<HolderLookup.RegistryLookup<?>>`)

**Returns:** `static HolderLookup.Provider`

### listRegistries

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
public <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_255663_)
```

**Parameters:**

- `p_255663_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`

### key

```java
ResourceKey<? extends Registry<? extends T>> key()
```

**Returns:** `ResourceKey<? extends Registry<? extends T>>`

### registryLifecycle

```java
Lifecycle registryLifecycle()
```

**Returns:** `Lifecycle`

### filterFeatures

```java
default HolderLookup.RegistryLookup<T> filterFeatures(FeatureFlagSet p_249397_)
```

**Parameters:**

- `p_249397_` (`FeatureFlagSet`)

**Returns:** `default HolderLookup.RegistryLookup<T>`

### filterElements

```java
default HolderLookup.RegistryLookup<T> filterElements(Predicate<T> p_324043_)
```

**Parameters:**

- `p_324043_` (`Predicate<T>`)

**Returns:** `default HolderLookup.RegistryLookup<T>`

### parent

```java
public HolderLookup.RegistryLookup<T> parent()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### get

```java
public Optional<Holder.Reference<T>> get(ResourceKey<T> p_323784_)
```

**Parameters:**

- `p_323784_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### listElements

```java
public Stream<Holder.Reference<T>> listElements()
```

**Returns:** `Stream<Holder.Reference<T>>`

### getData

```java
<A> .jetbrains.annotations.Nullable
        default <A> A getData(net.neoforged.neoforge.registries.datamaps.DataMapType<T, A> attachment, ResourceKey<T> key)
```

**Parameters:**

- `attachment` (`net.neoforged.neoforge.registries.datamaps.DataMapType<T, A>`)
- `key` (`ResourceKey<T>`)

**Returns:** `.jetbrains.annotations.Nullable
        default <A> A`

### parent

```java
HolderLookup.RegistryLookup<T> parent()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### key

```java
default ResourceKey<? extends Registry<? extends T>> key()
```

**Returns:** `ResourceKey<? extends Registry<? extends T>>`

### registryLifecycle

```java
default Lifecycle registryLifecycle()
```

**Returns:** `Lifecycle`

### get

```java
default Optional<Holder.Reference<T>> get(ResourceKey<T> p_255619_)
```

**Parameters:**

- `p_255619_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### listElements

```java
default Stream<Holder.Reference<T>> listElements()
```

**Returns:** `Stream<Holder.Reference<T>>`

### get

```java
default Optional<HolderSet.Named<T>> get(TagKey<T> p_256245_)
```

**Parameters:**

- `p_256245_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### listTags

```java
default Stream<HolderSet.Named<T>> listTags()
```

**Returns:** `Stream<HolderSet.Named<T>>`

### getData

```java
<A> .jetbrains.annotations.Nullable
            default <A> A getData(net.neoforged.neoforge.registries.datamaps.DataMapType<T, A> attachment, ResourceKey<T> key)
```

**Parameters:**

- `attachment` (`net.neoforged.neoforge.registries.datamaps.DataMapType<T, A>`)
- `key` (`ResourceKey<T>`)

**Returns:** `.jetbrains.annotations.Nullable
            default <A> A`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | interface |  |
| `RegistryLookup` | interface |  |
| `Delegate` | interface |  |
