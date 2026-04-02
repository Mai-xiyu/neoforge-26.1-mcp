# EntityStorage

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Implements:** `EntityPersistentStorage<Entity>`

## Methods

### EntityStorage

```java
public EntityStorage(SimpleRegionStorage p_321748_, ServerLevel p_196924_, Executor p_196928_)
```

**Parameters:**

- `p_321748_` (`SimpleRegionStorage`)
- `p_196924_` (`ServerLevel`)
- `p_196928_` (`Executor`)

**Returns:** `public`

### loadEntities

```java
public CompletableFuture<ChunkEntities<Entity>> loadEntities(ChunkPos p_156551_)
```

**Parameters:**

- `p_156551_` (`ChunkPos`)

**Returns:** `CompletableFuture<ChunkEntities<Entity>>`

### emptyChunk

```java
return emptyChunk()
```

**Returns:** `return`

### readChunkPos

```java
private static ChunkPos readChunkPos(CompoundTag p_156571_)
```

**Parameters:**

- `p_156571_` (`CompoundTag`)

**Returns:** `private static ChunkPos`

### ChunkPos

```java
return new ChunkPos()
```

**Returns:** `return new`

### writeChunkPos

```java
private static void writeChunkPos(CompoundTag p_156563_, ChunkPos p_156564_)
```

**Parameters:**

- `p_156563_` (`CompoundTag`)
- `p_156564_` (`ChunkPos`)

**Returns:** `private static void`

### emptyChunk

```java
private static ChunkEntities<Entity> emptyChunk(ChunkPos p_156569_)
```

**Parameters:**

- `p_156569_` (`ChunkPos`)

**Returns:** `private static ChunkEntities<Entity>`

### storeEntities

```java
public void storeEntities(ChunkEntities<Entity> p_156559_)
```

**Parameters:**

- `p_156559_` (`ChunkEntities<Entity>`)

### writeChunkPos

```java
 writeChunkPos()
```

**Returns:** ``

### reportSaveFailureIfPresent

```java
private void reportSaveFailureIfPresent(CompletableFuture<?> p_352240_, ChunkPos p_352077_)
```

**Parameters:**

- `p_352240_` (`CompletableFuture<?>`)
- `p_352077_` (`ChunkPos`)

**Returns:** `private void`

### reportLoadFailureIfPresent

```java
private void reportLoadFailureIfPresent(CompletableFuture<?> p_352123_, ChunkPos p_352328_)
```

**Parameters:**

- `p_352123_` (`CompletableFuture<?>`)
- `p_352328_` (`ChunkPos`)

**Returns:** `private void`

### flush

```java
public void flush(boolean p_182487_)
```

**Parameters:**

- `p_182487_` (`boolean`)

### close

```java
public void close()
```
