# DataMapLoader

**Package:** `net.neoforged.neoforge.registries`
**Type:** class
**Implements:** `PreparableReloadListener`
**Annotations:** `@SuppressWarnings({ "rawtypes", "unchecked" })`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PATH` | `String` |  |

## Methods

### DataMapLoader

```java
public DataMapLoader(ICondition.IContext conditionContext, RegistryAccess registryAccess)
```

**Parameters:**

- `conditionContext` (`ICondition.IContext`)
- `registryAccess` (`RegistryAccess`)

**Returns:** `public`

### reload

```java
public CompletableFuture<Void> reload(PreparationBarrier preparationBarrier, ResourceManager resourceManager, ProfilerFiller preparationsProfiler, ProfilerFiller reloadProfiler, Executor backgroundExecutor, Executor gameExecutor)
```

**Parameters:**

- `preparationBarrier` (`PreparationBarrier`)
- `resourceManager` (`ResourceManager`)
- `preparationsProfiler` (`ProfilerFiller`)
- `reloadProfiler` (`ProfilerFiller`)
- `backgroundExecutor` (`Executor`)
- `gameExecutor` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### apply

```java
public void apply()
```

**Returns:** `public void`

### apply

```java
<T> private <T> void apply(BaseMappedRegistry<T> registry, LoadResult<T> result)
```

**Parameters:**

- `registry` (`BaseMappedRegistry<T>`)
- `result` (`LoadResult<T>`)

**Returns:** `private <T> void`

### buildDataMap

```java
<T, R> private <T, R> Map<ResourceKey<R>, T> buildDataMap(Registry<R> registry, DataMapType<R, T> attachment, List<DataMapFile<T, R>> entries)
```

**Parameters:**

- `registry` (`Registry<R>`)
- `attachment` (`DataMapType<R, T>`)
- `entries` (`List<DataMapFile<T, R>>`)

**Returns:** `private <T, R> Map<ResourceKey<R>, T>`

### resolve

```java
<R> private <R> void resolve(Registry<R> registry, Either<TagKey<R>, ResourceKey<R>> value, boolean required, Consumer<Holder<R>> consumer)
```

**Parameters:**

- `registry` (`Registry<R>`)
- `value` (`Either<TagKey<R>, ResourceKey<R>>`)
- `required` (`boolean`)
- `consumer` (`Consumer<Holder<R>>`)

**Returns:** `private <R> void`

### load

```java
private CompletableFuture<Map<ResourceKey<? extends Registry<?>>, LoadResult<?>>> load(ResourceManager manager, Executor executor, ProfilerFiller profiler)
```

**Parameters:**

- `manager` (`ResourceManager`)
- `executor` (`Executor`)
- `profiler` (`ProfilerFiller`)

**Returns:** `private CompletableFuture<Map<ResourceKey<? extends Registry<?>>, LoadResult<?>>>`

### load

```java
private static Map<ResourceKey<? extends Registry<?>>, LoadResult<?>> load(ResourceManager manager, ProfilerFiller profiler, RegistryAccess access, ICondition.IContext context)
```

**Parameters:**

- `manager` (`ResourceManager`)
- `profiler` (`ProfilerFiller`)
- `access` (`RegistryAccess`)
- `context` (`ICondition.IContext`)

**Returns:** `private static Map<ResourceKey<? extends Registry<?>>, LoadResult<?>>`

### getFolderLocation

```java
public static String getFolderLocation(ResourceLocation registryId)
```

**Parameters:**

- `registryId` (`ResourceLocation`)

**Returns:** `public static String`

### readData

```java
<A, T> private static <A, T> List<DataMapFile<A, T>> readData(RegistryOps<JsonElement> ops, DataMapType<T, A> attachmentType, ResourceKey<Registry<T>> registryKey, List<Resource> resources)
```

**Parameters:**

- `ops` (`RegistryOps<JsonElement>`)
- `attachmentType` (`DataMapType<T, A>`)
- `registryKey` (`ResourceKey<Registry<T>>`)
- `resources` (`List<Resource>`)

**Returns:** `private static <A, T> List<DataMapFile<A, T>>`
