# GeneratingChunkMap

**Package:** `net.minecraft.server.level`
**Type:** interface

## Methods

### acquireGeneration

```java
GenerationChunkHolder acquireGeneration(long p_347510_)
```

**Parameters:**

- `p_347510_` (`long`)

**Returns:** `GenerationChunkHolder`

### releaseGeneration

```java
void releaseGeneration(GenerationChunkHolder p_347643_)
```

**Parameters:**

- `p_347643_` (`GenerationChunkHolder`)

### applyStep

```java
CompletableFuture<ChunkAccess> applyStep(GenerationChunkHolder p_347633_, ChunkStep p_347487_, StaticCache2D<GenerationChunkHolder> p_347587_)
```

**Parameters:**

- `p_347633_` (`GenerationChunkHolder`)
- `p_347487_` (`ChunkStep`)
- `p_347587_` (`StaticCache2D<GenerationChunkHolder>`)

**Returns:** `CompletableFuture<ChunkAccess>`

### scheduleGenerationTask

```java
ChunkGenerationTask scheduleGenerationTask(ChunkStatus p_347524_, ChunkPos p_347713_)
```

**Parameters:**

- `p_347524_` (`ChunkStatus`)
- `p_347713_` (`ChunkPos`)

**Returns:** `ChunkGenerationTask`

### runGenerationTasks

```java
void runGenerationTasks()
```
