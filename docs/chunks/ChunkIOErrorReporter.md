# ChunkIOErrorReporter

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** interface

## Methods

### reportChunkLoadFailure

```java
void reportChunkLoadFailure(Throwable p_352423_, RegionStorageInfo p_352249_, ChunkPos p_352119_)
```

**Parameters:**

- `p_352423_` (`Throwable`)
- `p_352249_` (`RegionStorageInfo`)
- `p_352119_` (`ChunkPos`)

### reportChunkSaveFailure

```java
void reportChunkSaveFailure(Throwable p_352260_, RegionStorageInfo p_352103_, ChunkPos p_352276_)
```

**Parameters:**

- `p_352260_` (`Throwable`)
- `p_352103_` (`RegionStorageInfo`)
- `p_352276_` (`ChunkPos`)

### createMisplacedChunkReport

```java
static ReportedException createMisplacedChunkReport(ChunkPos p_352158_, ChunkPos p_352311_)
```

**Parameters:**

- `p_352158_` (`ChunkPos`)
- `p_352311_` (`ChunkPos`)

**Returns:** `static ReportedException`

### ReportedException

```java
return new ReportedException()
```

**Returns:** `return new`

### reportMisplacedChunk

```java
default void reportMisplacedChunk(ChunkPos p_352223_, ChunkPos p_352433_, RegionStorageInfo p_352461_)
```

**Parameters:**

- `p_352223_` (`ChunkPos`)
- `p_352433_` (`ChunkPos`)
- `p_352461_` (`RegionStorageInfo`)

**Returns:** `default void`
