# RegistryAccess

**Package:** `net.minecraft.core`
**Type:** interface
**Extends:** `HolderLookup.Provider`

## Methods

### registry

```java
<E> <E> Optional<Registry<E>> registry(ResourceKey<? extends Registry<? extends E>> p_123085_)
```

**Parameters:**

- `p_123085_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `<E> Optional<Registry<E>>`

### lookup

```java
default <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256275_)
```

**Parameters:**

- `p_256275_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`

### registryOrThrow

```java
<E> default <E> Registry<E> registryOrThrow(ResourceKey<? extends Registry<? extends E>> p_175516_)
```

**Parameters:**

- `p_175516_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `default <E> Registry<E>`

### registries

```java
Stream<RegistryAccess.RegistryEntry<?>> registries()
```

**Returns:** `Stream<RegistryAccess.RegistryEntry<?>>`

### listRegistries

```java
default Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### fromRegistryOfRegistries

```java
static RegistryAccess.Frozen fromRegistryOfRegistries(Registry<? extends Registry<?>> p_206166_)
```

**Parameters:**

- `p_206166_` (`Registry<? extends Registry<?>>`)

**Returns:** `static RegistryAccess.Frozen`

### registry

```java
public <T> Optional<Registry<T>> registry(ResourceKey<? extends Registry<? extends T>> p_206220_)
```

**Parameters:**

- `p_206220_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<Registry<T>>`

### registries

```java
public Stream<RegistryAccess.RegistryEntry<?>> registries()
```

**Returns:** `Stream<RegistryAccess.RegistryEntry<?>>`

### freeze

```java
public RegistryAccess.Frozen freeze()
```

**Returns:** `RegistryAccess.Frozen`

### freeze

```java
default RegistryAccess.Frozen freeze()
```

**Returns:** `default RegistryAccess.Frozen`

### FrozenAccess

```java
protected FrozenAccess(Stream<RegistryAccess.RegistryEntry<?>> p_252031_)
```

**Parameters:**

- `p_252031_` (`Stream<RegistryAccess.RegistryEntry<?>>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### allRegistriesLifecycle

```java
default Lifecycle allRegistriesLifecycle()
```

**Returns:** `default Lifecycle`

### ImmutableRegistryAccess

```java
public ImmutableRegistryAccess(List<? extends Registry<?>> p_248540_)
```

**Parameters:**

- `p_248540_` (`List<? extends Registry<?>>`)

**Returns:** `public`

### ImmutableRegistryAccess

```java
public ImmutableRegistryAccess(Map<? extends ResourceKey<? extends Registry<?>>, ? extends Registry<?>> p_206225_)
```

**Parameters:**

- `p_206225_` (`Map<? extends ResourceKey<? extends Registry<?>>, ? extends Registry<?>>`)

**Returns:** `public`

### ImmutableRegistryAccess

```java
public ImmutableRegistryAccess(Stream<RegistryAccess.RegistryEntry<?>> p_206227_)
```

**Parameters:**

- `p_206227_` (`Stream<RegistryAccess.RegistryEntry<?>>`)

**Returns:** `public`

### registry

```java
public <E> Optional<Registry<E>> registry(ResourceKey<? extends Registry<? extends E>> p_206229_)
```

**Parameters:**

- `p_206229_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `Optional<Registry<E>>`

### registries

```java
public Stream<RegistryAccess.RegistryEntry<?>> registries()
```

**Returns:** `Stream<RegistryAccess.RegistryEntry<?>>`

### fromMapEntry

```java
private static <T, R extends Registry<? extends T>> RegistryAccess.RegistryEntry<T> fromMapEntry(Entry<? extends ResourceKey<? extends Registry<?>>, R> p_206242_)
```

**Parameters:**

- `p_206242_` (`Entry<? extends ResourceKey<? extends Registry<?>>, R>`)

**Returns:** `private static <T, R extends Registry<? extends T>> RegistryAccess.RegistryEntry<T>`

### fromUntyped

```java
<T> private static <T> RegistryAccess.RegistryEntry<T> fromUntyped(ResourceKey<? extends Registry<?>> p_206244_, Registry<?> p_206245_)
```

**Parameters:**

- `p_206244_` (`ResourceKey<? extends Registry<?>>`)
- `p_206245_` (`Registry<?>`)

**Returns:** `private static <T> RegistryAccess.RegistryEntry<T>`

### freeze

```java
private RegistryAccess.RegistryEntry<T> freeze()
```

**Returns:** `private RegistryAccess.RegistryEntry<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Frozen` | interface |  |
| `ImmutableRegistryAccess` | class |  |
| `RegistryEntry` | record |  |
