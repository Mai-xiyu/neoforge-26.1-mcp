# PreparableReloadListener

**Package:** `net.minecraft.server.packs.resources`
**Type:** interface
**Side:** 🖧 Server

## Methods

### reload

```java
CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_10638_, ResourceManager p_10639_, ProfilerFiller p_10640_, ProfilerFiller p_10641_, Executor p_10642_, Executor p_10643_)
```

**Parameters:**

- `p_10638_` (`PreparableReloadListener.PreparationBarrier`)
- `p_10639_` (`ResourceManager`)
- `p_10640_` (`ProfilerFiller`)
- `p_10641_` (`ProfilerFiller`)
- `p_10642_` (`Executor`)
- `p_10643_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### getName

```java
default String getName()
```

**Returns:** `default String`

### wait

```java
<T> <T> CompletableFuture<T> wait(T p_10644_)
```

**Parameters:**

- `p_10644_` (`T`)

**Returns:** `<T> CompletableFuture<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PreparationBarrier` | interface |  |
