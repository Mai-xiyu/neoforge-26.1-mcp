# ChunkGenerationTask

**Package:** `net.minecraft.server.level`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `targetStatus` | `ChunkStatus` |  |

## Methods

### ChunkGenerationTask

```java
private ChunkGenerationTask(GeneratingChunkMap p_347493_, ChunkStatus p_347718_, ChunkPos p_347615_, StaticCache2D<GenerationChunkHolder> p_347529_)
```

**Parameters:**

- `p_347493_` (`GeneratingChunkMap`)
- `p_347718_` (`ChunkStatus`)
- `p_347615_` (`ChunkPos`)
- `p_347529_` (`StaticCache2D<GenerationChunkHolder>`)

**Returns:** `private`

### create

```java
public static ChunkGenerationTask create(GeneratingChunkMap p_347575_, ChunkStatus p_347556_, ChunkPos p_347630_)
```

**Parameters:**

- `p_347575_` (`GeneratingChunkMap`)
- `p_347556_` (`ChunkStatus`)
- `p_347630_` (`ChunkPos`)

**Returns:** `public static ChunkGenerationTask`

### ChunkGenerationTask

```java
return new ChunkGenerationTask()
```

**Returns:** `return new`

### runUntilWait

```java
public CompletableFuture<?> runUntilWait()
```

**Returns:** `CompletableFuture<?>`

### scheduleNextLayer

```java
private void scheduleNextLayer()
```

**Returns:** `private void`

### markForCancellation

```java
public void markForCancellation()
```

**Returns:** `public void`

### releaseClaim

```java
private void releaseClaim()
```

**Returns:** `private void`

### canLoadWithoutGeneration

```java
private boolean canLoadWithoutGeneration()
```

**Returns:** `private boolean`

### getCenter

```java
public GenerationChunkHolder getCenter()
```

**Returns:** `public GenerationChunkHolder`

### scheduleLayer

```java
private void scheduleLayer(ChunkStatus p_347611_, boolean p_347592_)
```

**Parameters:**

- `p_347611_` (`ChunkStatus`)
- `p_347592_` (`boolean`)

**Returns:** `private void`

### getRadiusForLayer

```java
private int getRadiusForLayer(ChunkStatus p_347511_, boolean p_347717_)
```

**Parameters:**

- `p_347511_` (`ChunkStatus`)
- `p_347717_` (`boolean`)

**Returns:** `private int`

### scheduleChunkInLayer

```java
private boolean scheduleChunkInLayer(ChunkStatus p_347483_, boolean p_347471_, GenerationChunkHolder p_347684_)
```

**Parameters:**

- `p_347483_` (`ChunkStatus`)
- `p_347471_` (`boolean`)
- `p_347684_` (`GenerationChunkHolder`)

**Returns:** `private boolean`

### IllegalStateException

```java
throw new IllegalStateException("Can't load chunk, but didn't expect to need to generate")
```

**Parameters:**

- `chunk` (`"Can't load`)
- `generate"` (`but didn't expect to need to`)

**Returns:** `throw new`
