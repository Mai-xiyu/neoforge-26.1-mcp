# RecreatingChunkStorage

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Extends:** `ChunkStorage`

## Methods

### RecreatingChunkStorage

```java
public RecreatingChunkStorage(RegionStorageInfo p_325929_, Path p_321613_, RegionStorageInfo p_326497_, Path p_321731_, DataFixer p_321644_, boolean p_321789_)
```

**Parameters:**

- `p_325929_` (`RegionStorageInfo`)
- `p_321613_` (`Path`)
- `p_326497_` (`RegionStorageInfo`)
- `p_321731_` (`Path`)
- `p_321644_` (`DataFixer`)
- `p_321789_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### write

```java
public CompletableFuture<Void> write(ChunkPos p_321778_, CompoundTag p_321767_)
```

**Parameters:**

- `p_321778_` (`ChunkPos`)
- `p_321767_` (`CompoundTag`)

**Returns:** `CompletableFuture<Void>`

### close

```java
public void close()
```
