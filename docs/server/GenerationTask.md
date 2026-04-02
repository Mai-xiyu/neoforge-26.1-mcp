# GenerationTask

**Package:** `net.neoforged.neoforge.server.command.generation`
**Type:** class
**Side:** 🖧 Server

## Description

Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
Original code: https://github.com/jaskarth/fabric-chunkpregenerator

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NEOFORGE_GENERATE_FORCED` | `TicketType<ChunkPos>` |  |

## Methods

### GenerationTask

```java
public GenerationTask(ServerLevel serverLevel, int x, int z, int radius)
```

**Parameters:**

- `serverLevel` (`ServerLevel`)
- `x` (`int`)
- `z` (`int`)
- `radius` (`int`)

**Returns:** `public`

### getOkCount

```java
public int getOkCount()
```

**Returns:** `public int`

### getErrorCount

```java
public int getErrorCount()
```

**Returns:** `public int`

### getSkippedCount

```java
public int getSkippedCount()
```

**Returns:** `public int`

### getTotalCount

```java
public int getTotalCount()
```

**Returns:** `public int`

### run

```java
public void run(Listener listener)
```

**Parameters:**

- `listener` (`Listener`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("already running!")
```

**Parameters:**

- `running!"` (`"already`)

**Returns:** `throw new`

### stop

```java
public void stop()
```

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### tryEnqueueTasks

```java
private void tryEnqueueTasks()
```

**Returns:** `private void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### enqueueChunks

```java
private void enqueueChunks(LongList chunks)
```

**Parameters:**

- `chunks` (`LongList`)

**Returns:** `private void`

### acceptChunkResult

```java
private void acceptChunkResult(long chunk, ChunkResult<ChunkAccess> result)
```

**Parameters:**

- `chunk` (`long`)
- `result` (`ChunkResult<ChunkAccess>`)

**Returns:** `private void`

### collectChunks

```java
private LongList collectChunks(int count)
```

**Parameters:**

- `count` (`int`)

**Returns:** `private LongList`

### acquireChunk

```java
private void acquireChunk(long chunk)
```

**Parameters:**

- `chunk` (`long`)

**Returns:** `private void`

### releaseChunk

```java
private void releaseChunk(long chunk)
```

**Parameters:**

- `chunk` (`long`)

**Returns:** `private void`

### isChunkFullyGenerated

```java
private boolean isChunkFullyGenerated(ChunkPos chunkPosInLocalSpace)
```

**Parameters:**

- `chunkPosInLocalSpace` (`ChunkPos`)

**Returns:** `private boolean`

### update

```java
void update(int ok, int error, int skipped, int total)
```

**Parameters:**

- `ok` (`int`)
- `error` (`int`)
- `skipped` (`int`)
- `total` (`int`)

### complete

```java
void complete(int error)
```

**Parameters:**

- `error` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Listener` | interface |  |
