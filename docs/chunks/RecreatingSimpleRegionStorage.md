# RecreatingSimpleRegionStorage

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Extends:** `SimpleRegionStorage`

## Methods

### RecreatingSimpleRegionStorage

```java
public RecreatingSimpleRegionStorage(RegionStorageInfo p_326344_, Path p_321669_, RegionStorageInfo p_326265_, Path p_321677_, DataFixer p_321544_, boolean p_321823_, DataFixTypes p_321736_)
```

**Parameters:**

- `p_326344_` (`RegionStorageInfo`)
- `p_321669_` (`Path`)
- `p_326265_` (`RegionStorageInfo`)
- `p_321677_` (`Path`)
- `p_321544_` (`DataFixer`)
- `p_321823_` (`boolean`)
- `p_321736_` (`DataFixTypes`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### write

```java
public CompletableFuture<Void> write(ChunkPos p_321592_, CompoundTag p_321676_)
```

**Parameters:**

- `p_321592_` (`ChunkPos`)
- `p_321676_` (`CompoundTag`)

**Returns:** `CompletableFuture<Void>`

### close

```java
public void close()
```
