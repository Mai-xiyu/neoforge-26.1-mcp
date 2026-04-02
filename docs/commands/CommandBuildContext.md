# CommandBuildContext

**Package:** `net.minecraft.commands`
**Type:** interface
**Extends:** `HolderLookup.Provider`

## Methods

### simple

```java
static CommandBuildContext simple(HolderLookup.Provider p_255702_, FeatureFlagSet p_255968_)
```

**Parameters:**

- `p_255702_` (`HolderLookup.Provider`)
- `p_255968_` (`FeatureFlagSet`)

**Returns:** `static CommandBuildContext`

### CommandBuildContext

```java
return new CommandBuildContext()
```

**Returns:** `return new`

### listRegistries

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
public <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_323477_)
```

**Parameters:**

- `p_323477_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`
