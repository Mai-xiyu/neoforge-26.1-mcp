# DatapackBuiltinEntriesProvider

**Package:** `net.neoforged.neoforge.common.data`
**Type:** class
**Extends:** `RegistriesDatapackGenerator`

## Description

An extension of the `RegistriesDatapackGenerator` which properly handles
referencing existing dynamic registry objects within another dynamic registry
object.

## Methods

### DatapackBuiltinEntriesProvider

```java
public public DatapackBuiltinEntriesProvider(PackOutput output, CompletableFuture<RegistrySetBuilder.PatchedRegistries> registries, Set<String> modIds)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<RegistrySetBuilder.PatchedRegistries>`)
- `modIds` (`Set<String>`)

**Returns:** `public`

### DatapackBuiltinEntriesProvider

```java
public public DatapackBuiltinEntriesProvider(PackOutput output, CompletableFuture<RegistrySetBuilder.PatchedRegistries> registries, Consumer<BiConsumer<ResourceKey<?>, ICondition>> conditionsBuilder, Set<String> modIds)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<RegistrySetBuilder.PatchedRegistries>`)
- `conditionsBuilder` (`Consumer<BiConsumer<ResourceKey<?>, ICondition>>`)
- `modIds` (`Set<String>`)

**Returns:** `public`

### DatapackBuiltinEntriesProvider

```java
public public DatapackBuiltinEntriesProvider(PackOutput output, CompletableFuture<RegistrySetBuilder.PatchedRegistries> registries, Map<ResourceKey<?>, List<ICondition>> conditions, Set<String> modIds)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<RegistrySetBuilder.PatchedRegistries>`)
- `conditions` (`Map<ResourceKey<?>, List<ICondition>>`)
- `modIds` (`Set<String>`)

**Returns:** `public`

### DatapackBuiltinEntriesProvider

```java
public public DatapackBuiltinEntriesProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, RegistrySetBuilder datapackEntriesBuilder, Set<String> modIds)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<HolderLookup.Provider>`)
- `datapackEntriesBuilder` (`RegistrySetBuilder`)
- `modIds` (`Set<String>`)

**Returns:** `public`

### DatapackBuiltinEntriesProvider

```java
public public DatapackBuiltinEntriesProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, RegistrySetBuilder datapackEntriesBuilder, Map<ResourceKey<?>, List<ICondition>> conditions, Set<String> modIds)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<HolderLookup.Provider>`)
- `datapackEntriesBuilder` (`RegistrySetBuilder`)
- `conditions` (`Map<ResourceKey<?>, List<ICondition>>`)
- `modIds` (`Set<String>`)

**Returns:** `public`

### DatapackBuiltinEntriesProvider

```java
public public DatapackBuiltinEntriesProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, RegistrySetBuilder datapackEntriesBuilder, Consumer<BiConsumer<ResourceKey<?>, ICondition>> conditionsBuilder, Set<String> modIds)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<HolderLookup.Provider>`)
- `datapackEntriesBuilder` (`RegistrySetBuilder`)
- `conditionsBuilder` (`Consumer<BiConsumer<ResourceKey<?>, ICondition>>`)
- `modIds` (`Set<String>`)

**Returns:** `public`

### getRegistryProvider

```java
public CompletableFuture<HolderLookup.Provider> getRegistryProvider()
```

**Returns:** `CompletableFuture<HolderLookup.Provider>`

### buildConditionsMap

```java
private static Map<ResourceKey<?>, List<ICondition>> buildConditionsMap(Consumer<BiConsumer<ResourceKey<?>, ICondition>> conditionBuilder)
```

**Parameters:**

- `conditionBuilder` (`Consumer<BiConsumer<ResourceKey<?>, ICondition>>`)

**Returns:** `private static Map<ResourceKey<?>, List<ICondition>>`
