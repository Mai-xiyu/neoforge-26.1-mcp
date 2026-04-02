# SimpleReloadInstance

**Package:** `net.minecraft.server.packs.resources`
**Type:** class<S>
**Implements:** `ReloadInstance`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `allPreparations` | `CompletableFuture<Unit>` |  |
| `allDone` | `CompletableFuture<List<S>>` |  |

## Methods

### of

```java
public static SimpleReloadInstance<Void> of(ResourceManager p_10816_, List<PreparableReloadListener> p_10817_, Executor p_10818_, Executor p_10819_, CompletableFuture<Unit> p_10820_)
```

**Parameters:**

- `p_10816_` (`ResourceManager`)
- `p_10817_` (`List<PreparableReloadListener>`)
- `p_10818_` (`Executor`)
- `p_10819_` (`Executor`)
- `p_10820_` (`CompletableFuture<Unit>`)

**Returns:** `public static SimpleReloadInstance<Void>`

### SimpleReloadInstance

```java
protected SimpleReloadInstance(Executor p_10808_, Executor p_10809_, ResourceManager p_10810_, List<PreparableReloadListener> p_10811_, SimpleReloadInstance.StateFactory<S> p_10812_, CompletableFuture<Unit> p_10813_)
```

**Parameters:**

- `p_10808_` (`Executor`)
- `p_10809_` (`Executor`)
- `p_10810_` (`ResourceManager`)
- `p_10811_` (`List<PreparableReloadListener>`)
- `p_10812_` (`SimpleReloadInstance.StateFactory<S>`)
- `p_10813_` (`CompletableFuture<Unit>`)

**Returns:** `protected`

### wait

```java
public <T> CompletableFuture<T> wait(T p_10858_)
```

**Parameters:**

- `p_10858_` (`T`)

**Returns:** `CompletableFuture<T>`

### done

```java
public CompletableFuture<?> done()
```

**Returns:** `CompletableFuture<?>`

### getActualProgress

```java
public float getActualProgress()
```

**Returns:** `float`

### create

```java
public static ReloadInstance create(ResourceManager p_203835_, List<PreparableReloadListener> p_203836_, Executor p_203837_, Executor p_203838_, CompletableFuture<Unit> p_203839_, boolean p_203840_)
```

**Parameters:**

- `p_203835_` (`ResourceManager`)
- `p_203836_` (`List<PreparableReloadListener>`)
- `p_203837_` (`Executor`)
- `p_203838_` (`Executor`)
- `p_203839_` (`CompletableFuture<Unit>`)
- `p_203840_` (`boolean`)

**Returns:** `public static ReloadInstance`

### create

```java
CompletableFuture<S> create(PreparableReloadListener.PreparationBarrier p_10864_, ResourceManager p_10865_, PreparableReloadListener p_10866_, Executor p_10867_, Executor p_10868_)
```

**Parameters:**

- `p_10864_` (`PreparableReloadListener.PreparationBarrier`)
- `p_10865_` (`ResourceManager`)
- `p_10866_` (`PreparableReloadListener`)
- `p_10867_` (`Executor`)
- `p_10868_` (`Executor`)

**Returns:** `CompletableFuture<S>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StateFactory` | interface |  |
