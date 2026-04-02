# StoringChunkProgressListener

**Package:** `net.minecraft.server.level.progress`
**Type:** class
**Implements:** `ChunkProgressListener`

## Methods

### StoringChunkProgressListener

```java
private StoringChunkProgressListener(LoggerChunkProgressListener p_320931_, int p_9661_, int p_320510_, int p_320086_)
```

**Parameters:**

- `p_320931_` (`LoggerChunkProgressListener`)
- `p_9661_` (`int`)
- `p_320510_` (`int`)
- `p_320086_` (`int`)

**Returns:** `private`

### createFromGameruleRadius

```java
public static StoringChunkProgressListener createFromGameruleRadius(int p_320244_)
```

**Parameters:**

- `p_320244_` (`int`)

**Returns:** `public static StoringChunkProgressListener`

### create

```java
public static StoringChunkProgressListener create(int p_320911_)
```

**Parameters:**

- `p_320911_` (`int`)

**Returns:** `public static StoringChunkProgressListener`

### StoringChunkProgressListener

```java
return new StoringChunkProgressListener()
```

**Returns:** `return new`

### createCompleted

```java
public static StoringChunkProgressListener createCompleted()
```

**Returns:** `public static StoringChunkProgressListener`

### updateSpawnPos

```java
public void updateSpawnPos(ChunkPos p_9667_)
```

**Parameters:**

- `p_9667_` (`ChunkPos`)

### onStatusChange

```java
public void onStatusChange(ChunkPos p_9669_, ChunkStatus p_331945_)
```

**Parameters:**

- `p_9669_` (`ChunkPos`)
- `p_331945_` (`ChunkStatus`)

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### getFullDiameter

```java
public int getFullDiameter()
```

**Returns:** `public int`

### getDiameter

```java
public int getDiameter()
```

**Returns:** `public int`

### getProgress

```java
public int getProgress()
```

**Returns:** `public int`

### getStatus

```java
public ChunkStatus getStatus(int p_9664_, int p_9665_)
```

**Parameters:**

- `p_9664_` (`int`)
- `p_9665_` (`int`)

**Returns:** `ChunkStatus`
