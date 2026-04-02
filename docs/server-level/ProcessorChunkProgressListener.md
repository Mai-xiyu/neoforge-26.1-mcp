# ProcessorChunkProgressListener

**Package:** `net.minecraft.server.level.progress`
**Type:** class
**Implements:** `ChunkProgressListener`

## Methods

### ProcessorChunkProgressListener

```java
private ProcessorChunkProgressListener(ChunkProgressListener p_9640_, Executor p_9641_)
```

**Parameters:**

- `p_9640_` (`ChunkProgressListener`)
- `p_9641_` (`Executor`)

**Returns:** `private`

### createStarted

```java
public static ProcessorChunkProgressListener createStarted(ChunkProgressListener p_143584_, Executor p_143585_)
```

**Parameters:**

- `p_143584_` (`ChunkProgressListener`)
- `p_143585_` (`Executor`)

**Returns:** `public static ProcessorChunkProgressListener`

### updateSpawnPos

```java
public void updateSpawnPos(ChunkPos p_9643_)
```

**Parameters:**

- `p_9643_` (`ChunkPos`)

### onStatusChange

```java
public void onStatusChange(ChunkPos p_9645_, ChunkStatus p_332066_)
```

**Parameters:**

- `p_9645_` (`ChunkPos`)
- `p_332066_` (`ChunkStatus`)

### start

```java
public void start()
```

### stop

```java
public void stop()
```
