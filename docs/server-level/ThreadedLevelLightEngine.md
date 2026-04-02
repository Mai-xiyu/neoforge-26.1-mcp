# ThreadedLevelLightEngine

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `LevelLightEngine`
**Implements:** `AutoCloseable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_BATCH_SIZE` | `int` |  |

## Methods

### ThreadedLevelLightEngine

```java
public ThreadedLevelLightEngine(LightChunkGetter p_9305_, ChunkMap p_9306_, boolean p_9307_, ProcessorMailbox<Runnable> p_9308_, ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<Runnable>> p_9309_)
```

**Parameters:**

- `p_9305_` (`LightChunkGetter`)
- `p_9306_` (`ChunkMap`)
- `p_9307_` (`boolean`)
- `p_9308_` (`ProcessorMailbox<Runnable>`)
- `p_9309_` (`ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<Runnable>>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### close

```java
public void close()
```

### runLightUpdates

```java
public int runLightUpdates()
```

**Returns:** `int`

### checkBlock

```java
public void checkBlock(BlockPos p_9357_)
```

**Parameters:**

- `p_9357_` (`BlockPos`)

### updateChunkStatus

```java
protected void updateChunkStatus(ChunkPos p_9331_)
```

**Parameters:**

- `p_9331_` (`ChunkPos`)

**Returns:** `protected void`

### updateSectionStatus

```java
public void updateSectionStatus(SectionPos p_9364_, boolean p_9365_)
```

**Parameters:**

- `p_9364_` (`SectionPos`)
- `p_9365_` (`boolean`)

### propagateLightSources

```java
public void propagateLightSources(ChunkPos p_285029_)
```

**Parameters:**

- `p_285029_` (`ChunkPos`)

### setLightEnabled

```java
public void setLightEnabled(ChunkPos p_9336_, boolean p_9337_)
```

**Parameters:**

- `p_9336_` (`ChunkPos`)
- `p_9337_` (`boolean`)

### queueSectionData

```java
public void queueSectionData(LightLayer p_285046_, SectionPos p_285496_, DataLayer p_285495_)
```

**Parameters:**

- `p_285046_` (`LightLayer`)
- `p_285496_` (`SectionPos`)
- `p_285495_` (`DataLayer`)

### addTask

```java
private void addTask(int p_9313_, int p_9314_, ThreadedLevelLightEngine.TaskType p_9315_, Runnable p_9316_)
```

**Parameters:**

- `p_9313_` (`int`)
- `p_9314_` (`int`)
- `p_9315_` (`ThreadedLevelLightEngine.TaskType`)
- `p_9316_` (`Runnable`)

**Returns:** `private void`

### addTask

```java
private void addTask(int p_9318_, int p_9319_, IntSupplier p_9320_, ThreadedLevelLightEngine.TaskType p_9321_, Runnable p_9322_)
```

**Parameters:**

- `p_9318_` (`int`)
- `p_9319_` (`int`)
- `p_9320_` (`IntSupplier`)
- `p_9321_` (`ThreadedLevelLightEngine.TaskType`)
- `p_9322_` (`Runnable`)

**Returns:** `private void`

### retainData

```java
public void retainData(ChunkPos p_9370_, boolean p_9371_)
```

**Parameters:**

- `p_9370_` (`ChunkPos`)
- `p_9371_` (`boolean`)

### initializeLight

```java
public CompletableFuture<ChunkAccess> initializeLight(ChunkAccess p_285128_, boolean p_285441_)
```

**Parameters:**

- `p_285128_` (`ChunkAccess`)
- `p_285441_` (`boolean`)

**Returns:** `public CompletableFuture<ChunkAccess>`

### lightChunk

```java
public CompletableFuture<ChunkAccess> lightChunk(ChunkAccess p_9354_, boolean p_9355_)
```

**Parameters:**

- `p_9354_` (`ChunkAccess`)
- `p_9355_` (`boolean`)

**Returns:** `public CompletableFuture<ChunkAccess>`

### tryScheduleUpdate

```java
public void tryScheduleUpdate()
```

**Returns:** `public void`

### runUpdate

```java
private void runUpdate()
```

**Returns:** `private void`

### waitForPendingTasks

```java
public CompletableFuture<?> waitForPendingTasks(int p_301257_, int p_300921_)
```

**Parameters:**

- `p_301257_` (`int`)
- `p_300921_` (`int`)

**Returns:** `public CompletableFuture<?>`
