# TagManager

**Package:** `net.minecraft.tags`
**Type:** class
**Implements:** `PreparableReloadListener`

## Methods

### TagManager

```java
public TagManager(RegistryAccess p_144572_)
```

**Parameters:**

- `p_144572_` (`RegistryAccess`)

**Returns:** `public`

### getResult

```java
public List<TagManager.LoadResult<?>> getResult()
```

**Returns:** `public List<TagManager.LoadResult<?>>`

### reload

```java
public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_13482_, ResourceManager p_13483_, ProfilerFiller p_13484_, ProfilerFiller p_13485_, Executor p_13486_, Executor p_13487_)
```

**Parameters:**

- `p_13482_` (`PreparableReloadListener.PreparationBarrier`)
- `p_13483_` (`ResourceManager`)
- `p_13484_` (`ProfilerFiller`)
- `p_13485_` (`ProfilerFiller`)
- `p_13486_` (`Executor`)
- `p_13487_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### createLoader

```java
<T> private <T> CompletableFuture<TagManager.LoadResult<T>> createLoader(ResourceManager p_203908_, Executor p_203909_, RegistryAccess.RegistryEntry<T> p_203910_)
```

**Parameters:**

- `p_203908_` (`ResourceManager`)
- `p_203909_` (`Executor`)
- `p_203910_` (`RegistryAccess.RegistryEntry<T>`)

**Returns:** `private <T> CompletableFuture<TagManager.LoadResult<T>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LoadResult` | record |  |
