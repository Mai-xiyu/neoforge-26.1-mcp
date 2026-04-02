# IOWorker

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Implements:** `ChunkScanAccess`, `AutoCloseable`

## Methods

### IOWorker

```java
protected IOWorker(RegionStorageInfo p_325953_, Path p_196930_, boolean p_196931_)
```

**Parameters:**

- `p_325953_` (`RegionStorageInfo`)
- `p_196930_` (`Path`)
- `p_196931_` (`boolean`)

**Returns:** `protected`

### isOldChunkAround

```java
public boolean isOldChunkAround(ChunkPos p_223472_, int p_223473_)
```

**Parameters:**

- `p_223472_` (`ChunkPos`)
- `p_223473_` (`int`)

**Returns:** `public boolean`

### getOrCreateOldDataForRegion

```java
private CompletableFuture<BitSet> getOrCreateOldDataForRegion(int p_223464_, int p_223465_)
```

**Parameters:**

- `p_223464_` (`int`)
- `p_223465_` (`int`)

**Returns:** `private CompletableFuture<BitSet>`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### createOldDataForRegion

```java
private CompletableFuture<BitSet> createOldDataForRegion(int p_223490_, int p_223491_)
```

**Parameters:**

- `p_223490_` (`int`)
- `p_223491_` (`int`)

**Returns:** `private CompletableFuture<BitSet>`

### isOldChunk

```java
private boolean isOldChunk(CompoundTag p_223485_)
```

**Parameters:**

- `p_223485_` (`CompoundTag`)

**Returns:** `private boolean`

### store

```java
public CompletableFuture<Void> store(ChunkPos p_63539_, CompoundTag p_63540_)
```

**Parameters:**

- `p_63539_` (`ChunkPos`)
- `p_63540_` (`CompoundTag`)

**Returns:** `public CompletableFuture<Void>`

### loadAsync

```java
public CompletableFuture<Optional<CompoundTag>> loadAsync(ChunkPos p_156588_)
```

**Parameters:**

- `p_156588_` (`ChunkPos`)

**Returns:** `public CompletableFuture<Optional<CompoundTag>>`

### synchronize

```java
public CompletableFuture<Void> synchronize(boolean p_182499_)
```

**Parameters:**

- `p_182499_` (`boolean`)

**Returns:** `public CompletableFuture<Void>`

### scanChunk

```java
public CompletableFuture<Void> scanChunk(ChunkPos p_196939_, StreamTagVisitor p_196940_)
```

**Parameters:**

- `p_196939_` (`ChunkPos`)
- `p_196940_` (`StreamTagVisitor`)

**Returns:** `CompletableFuture<Void>`

### submitTask

```java
<T> private <T> CompletableFuture<T> submitTask(Supplier<Either<T, Exception>> p_63546_)
```

**Parameters:**

- `p_63546_` (`Supplier<Either<T, Exception>>`)

**Returns:** `private <T> CompletableFuture<T>`

### storePendingChunk

```java
private void storePendingChunk()
```

**Returns:** `private void`

### tellStorePending

```java
private void tellStorePending()
```

**Returns:** `private void`

### runStore

```java
private void runStore(ChunkPos p_63536_, IOWorker.PendingStore p_63537_)
```

**Parameters:**

- `p_63536_` (`ChunkPos`)
- `p_63537_` (`IOWorker.PendingStore`)

**Returns:** `private void`

### close

```java
public void close()
```

### storageInfo

```java
public RegionStorageInfo storageInfo()
```

**Returns:** `public RegionStorageInfo`

### PendingStore

```java
public PendingStore(CompoundTag p_63568_)
```

**Parameters:**

- `p_63568_` (`CompoundTag`)

**Returns:** `public`

### copyData

```java
CompoundTag copyData()
```

**Returns:** `CompoundTag`
