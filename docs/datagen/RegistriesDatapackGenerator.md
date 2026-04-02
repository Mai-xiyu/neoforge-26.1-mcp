# RegistriesDatapackGenerator

**Package:** `net.minecraft.data.registries`
**Type:** class
**Implements:** `DataProvider`
**Annotations:** `@Deprecated`

## Description

@deprecated Forge: Use `net.neoforged.neoforge.common.data.DatapackBuiltinEntriesProvider` instead

## Methods

### RegistriesDatapackGenerator

```java
public public RegistriesDatapackGenerator(PackOutput p_256643_, CompletableFuture<HolderLookup.Provider> p_255780_)
```

**Parameters:**

- `p_256643_` (`PackOutput`)
- `p_255780_` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `public`

### RegistriesDatapackGenerator

```java
public RegistriesDatapackGenerator(PackOutput p_256643_, CompletableFuture<HolderLookup.Provider> p_255780_, .jetbrains.annotations.Nullable java.util.Set<String> modIds)
```

**Parameters:**

- `p_256643_` (`PackOutput`)
- `p_255780_` (`CompletableFuture<HolderLookup.Provider>`)
- `modIds` (`.jetbrains.annotations.Nullable java.util.Set<String>`)

**Returns:** `public`

### RegistriesDatapackGenerator

```java
public RegistriesDatapackGenerator(PackOutput p_256643_, CompletableFuture<HolderLookup.Provider> p_255780_, .jetbrains.annotations.Nullable java.util.Set<String> modIds, java.util.Map<ResourceKey<?>, java.util.List<net.neoforged.neoforge.common.conditions.ICondition>> conditions)
```

**Parameters:**

- `p_256643_` (`PackOutput`)
- `p_255780_` (`CompletableFuture<HolderLookup.Provider>`)
- `modIds` (`.jetbrains.annotations.Nullable java.util.Set<String>`)
- `conditions` (`java.util.Map<ResourceKey<?>, java.util.List<net.neoforged.neoforge.common.conditions.ICondition>>`)

**Returns:** `public`

### run

```java
public CompletableFuture<?> run(CachedOutput p_255785_)
```

**Parameters:**

- `p_255785_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### dumpRegistryCap

```java
<T> private <T> Optional<CompletableFuture<?>> dumpRegistryCap(CachedOutput p_256502_, HolderLookup.Provider p_256492_, DynamicOps<JsonElement> p_256000_, RegistryDataLoader.RegistryData<T> p_256449_)
```

**Parameters:**

- `p_256502_` (`CachedOutput`)
- `p_256492_` (`HolderLookup.Provider`)
- `p_256000_` (`DynamicOps<JsonElement>`)
- `p_256449_` (`RegistryDataLoader.RegistryData<T>`)

**Returns:** `private <T> Optional<CompletableFuture<?>>`

### dumpValue

```java
<E> private static <E> CompletableFuture<?> dumpValue(Path p_255678_, CachedOutput p_256438_, DynamicOps<JsonElement> p_256127_, Encoder<java.util.Optional<net.neoforged.neoforge.common.conditions.WithConditions<E>>> p_255938_, java.util.Optional<net.neoforged.neoforge.common.conditions.WithConditions<E>> p_256590_)
```

**Parameters:**

- `p_255678_` (`Path`)
- `p_256438_` (`CachedOutput`)
- `p_256127_` (`DynamicOps<JsonElement>`)
- `p_255938_` (`Encoder<java.util.Optional<net.neoforged.neoforge.common.conditions.WithConditions<E>>>`)
- `p_256590_` (`java.util.Optional<net.neoforged.neoforge.common.conditions.WithConditions<E>>`)

**Returns:** `private static <E> CompletableFuture<?>`

### getName

```java
public String getName()
```

**Returns:** `String`
