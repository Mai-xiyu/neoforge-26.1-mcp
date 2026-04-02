# SimpleRegionStorage

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Implements:** `AutoCloseable`

## Methods

### SimpleRegionStorage

```java
public SimpleRegionStorage(RegionStorageInfo p_326109_, Path p_321582_, DataFixer p_321815_, boolean p_321788_, DataFixTypes p_321522_)
```

**Parameters:**

- `p_326109_` (`RegionStorageInfo`)
- `p_321582_` (`Path`)
- `p_321815_` (`DataFixer`)
- `p_321788_` (`boolean`)
- `p_321522_` (`DataFixTypes`)

**Returns:** `public`

### read

```java
public CompletableFuture<Optional<CompoundTag>> read(ChunkPos p_321653_)
```

**Parameters:**

- `p_321653_` (`ChunkPos`)

**Returns:** `public CompletableFuture<Optional<CompoundTag>>`

### write

```java
public CompletableFuture<Void> write(ChunkPos p_321715_, CompoundTag p_321816_)
```

**Parameters:**

- `p_321715_` (`ChunkPos`)
- `p_321816_` (`CompoundTag`)

**Returns:** `public CompletableFuture<Void>`

### upgradeChunkTag

```java
public CompoundTag upgradeChunkTag(CompoundTag p_321601_, int p_321496_)
```

**Parameters:**

- `p_321601_` (`CompoundTag`)
- `p_321496_` (`int`)

**Returns:** `public CompoundTag`

### upgradeChunkTag

```java
public Dynamic<Tag> upgradeChunkTag(Dynamic<Tag> p_321643_, int p_321759_)
```

**Parameters:**

- `p_321643_` (`Dynamic<Tag>`)
- `p_321759_` (`int`)

**Returns:** `public Dynamic<Tag>`

### synchronize

```java
public CompletableFuture<Void> synchronize(boolean p_321682_)
```

**Parameters:**

- `p_321682_` (`boolean`)

**Returns:** `public CompletableFuture<Void>`

### close

```java
public void close()
```

### storageInfo

```java
public RegionStorageInfo storageInfo()
```

**Returns:** `public RegionStorageInfo`
