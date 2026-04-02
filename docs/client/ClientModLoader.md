# ClientModLoader

**Package:** `net.neoforged.neoforge.client.loading`
**Type:** class
**Extends:** `CommonModLoader`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### begin

```java
public static void begin(Minecraft minecraft, PackRepository defaultResourcePacks, ReloadableResourceManager mcResourceManager)
```

**Parameters:**

- `minecraft` (`Minecraft`)
- `defaultResourcePacks` (`PackRepository`)
- `mcResourceManager` (`ReloadableResourceManager`)

**Returns:** `public static void`

### begin

```java
 begin()
```

**Returns:** ``

### onResourceReload

```java
private static CompletableFuture<Void> onResourceReload(PreparableReloadListener.PreparationBarrier stage, ResourceManager resourceManager, ProfilerFiller prepareProfiler, ProfilerFiller executeProfiler, Executor asyncExecutor, Executor syncExecutor)
```

**Parameters:**

- `stage` (`PreparableReloadListener.PreparationBarrier`)
- `resourceManager` (`ResourceManager`)
- `prepareProfiler` (`ProfilerFiller`)
- `executeProfiler` (`ProfilerFiller`)
- `asyncExecutor` (`Executor`)
- `syncExecutor` (`Executor`)

**Returns:** `private static CompletableFuture<Void>`

### catchLoadingException

```java
private static void catchLoadingException(Runnable r)
```

**Parameters:**

- `r` (`Runnable`)

**Returns:** `private static void`

### startModLoading

```java
private static void startModLoading(Executor syncExecutor, Executor parallelExecutor)
```

**Parameters:**

- `syncExecutor` (`Executor`)
- `parallelExecutor` (`Executor`)

**Returns:** `private static void`

### finishModLoading

```java
private static void finishModLoading(Executor syncExecutor, Executor parallelExecutor)
```

**Parameters:**

- `syncExecutor` (`Executor`)
- `parallelExecutor` (`Executor`)

**Returns:** `private static void`

### checkForUpdates

```java
public static VersionChecker.Status checkForUpdates()
```

**Returns:** `public static VersionChecker.Status`

### completeModLoading

```java
public static Runnable completeModLoading(Runnable initialScreensTask)
```

**Parameters:**

- `initialScreensTask` (`Runnable`)

**Returns:** `public static Runnable`

### isLoading

```java
public static boolean isLoading()
```

**Returns:** `public static boolean`
