# LootTableProvider

**Package:** `net.minecraft.data.loot`
**Type:** class
**Implements:** `DataProvider`

## Methods

### LootTableProvider

```java
public LootTableProvider(PackOutput p_254123_, Set<ResourceKey<LootTable>> p_254481_, List<LootTableProvider.SubProviderEntry> p_253798_, CompletableFuture<HolderLookup.Provider> p_323798_)
```

**Parameters:**

- `p_254123_` (`PackOutput`)
- `p_254481_` (`Set<ResourceKey<LootTable>>`)
- `p_253798_` (`List<LootTableProvider.SubProviderEntry>`)
- `p_323798_` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `public`

### run

```java
public CompletableFuture<?> run(CachedOutput p_254060_)
```

**Parameters:**

- `p_254060_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### run

```java
private CompletableFuture<?> run(CachedOutput p_324447_, HolderLookup.Provider p_323978_)
```

**Parameters:**

- `p_324447_` (`CachedOutput`)
- `p_323978_` (`HolderLookup.Provider`)

**Returns:** `private CompletableFuture<?>`

### validate

```java
 validate()
```

**Returns:** ``

### IllegalStateException

```java
throw new IllegalStateException("Failed to validate loot tables, see logs")
```

**Parameters:**

- `tables` (`"Failed to validate loot`)
- `logs"` (`see`)

**Returns:** `throw new`

### getTables

```java
public List<LootTableProvider.SubProviderEntry> getTables()
```

**Returns:** `public List<LootTableProvider.SubProviderEntry>`

### validate

```java
protected void validate(WritableRegistry<LootTable> writableregistry, ValidationContext validationcontext, ProblemReporter.Collector problemreporter$collector)
```

**Parameters:**

- `writableregistry` (`WritableRegistry<LootTable>`)
- `validationcontext` (`ValidationContext`)
- `problemreporter$collector` (`ProblemReporter.Collector`)

**Returns:** `protected void`

### sequenceIdForLootTable

```java
private static ResourceLocation sequenceIdForLootTable(ResourceKey<LootTable> p_336172_)
```

**Parameters:**

- `p_336172_` (`ResourceKey<LootTable>`)

**Returns:** `private static ResourceLocation`

### getName

```java
public final String getName()
```

**Returns:** `String`

### SubProviderEntry

```java
public static record SubProviderEntry(Function<HolderLookup.Provider, LootTableSubProvider> provider, LootContextParamSet paramSet)
```

**Parameters:**

- `provider` (`Function<HolderLookup.Provider, LootTableSubProvider>`)
- `paramSet` (`LootContextParamSet`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SubProviderEntry` | record |  |
