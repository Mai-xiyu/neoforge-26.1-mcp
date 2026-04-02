# ChunkStorage

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Implements:** `AutoCloseable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LAST_MONOLYTH_STRUCTURE_DATA_VERSION` | `int` |  |
| `fixerUpper` | `DataFixer` |  |

## Methods

### ChunkStorage

```java
public ChunkStorage(RegionStorageInfo p_326130_, Path p_196912_, DataFixer p_196913_, boolean p_196914_)
```

**Parameters:**

- `p_326130_` (`RegionStorageInfo`)
- `p_196912_` (`Path`)
- `p_196913_` (`DataFixer`)
- `p_196914_` (`boolean`)

**Returns:** `public`

### isOldChunkAround

```java
public boolean isOldChunkAround(ChunkPos p_223452_, int p_223453_)
```

**Parameters:**

- `p_223452_` (`ChunkPos`)
- `p_223453_` (`int`)

**Returns:** `public boolean`

### upgradeChunkTag

```java
public CompoundTag upgradeChunkTag(ResourceKey<Level> p_188289_, Supplier<DimensionDataStorage> p_188290_, CompoundTag p_188291_, Optional<ResourceKey<MapCodec<? extends ChunkGenerator>>> p_188292_)
```

**Parameters:**

- `p_188289_` (`ResourceKey<Level>`)
- `p_188290_` (`Supplier<DimensionDataStorage>`)
- `p_188291_` (`CompoundTag`)
- `p_188292_` (`Optional<ResourceKey<MapCodec<? extends ChunkGenerator>>>`)

**Returns:** `public CompoundTag`

### injectDatafixingContext

```java
 injectDatafixingContext()
```

**Returns:** ``

### removeDatafixingContext

```java
 removeDatafixingContext()
```

**Returns:** ``

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### getLegacyStructureHandler

```java
private LegacyStructureDataHandler getLegacyStructureHandler(ResourceKey<Level> p_223449_, Supplier<DimensionDataStorage> p_223450_)
```

**Parameters:**

- `p_223449_` (`ResourceKey<Level>`)
- `p_223450_` (`Supplier<DimensionDataStorage>`)

**Returns:** `private LegacyStructureDataHandler`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### injectDatafixingContext

```java
public static void injectDatafixingContext(CompoundTag p_196919_, ResourceKey<Level> p_196920_, Optional<ResourceKey<MapCodec<? extends ChunkGenerator>>> p_196921_)
```

**Parameters:**

- `p_196919_` (`CompoundTag`)
- `p_196920_` (`ResourceKey<Level>`)
- `p_196921_` (`Optional<ResourceKey<MapCodec<? extends ChunkGenerator>>>`)

**Returns:** `public static void`

### removeDatafixingContext

```java
private static void removeDatafixingContext(CompoundTag p_348632_)
```

**Parameters:**

- `p_348632_` (`CompoundTag`)

**Returns:** `private static void`

### getVersion

```java
public static int getVersion(CompoundTag p_63506_)
```

**Parameters:**

- `p_63506_` (`CompoundTag`)

**Returns:** `public static int`

### read

```java
public CompletableFuture<Optional<CompoundTag>> read(ChunkPos p_223455_)
```

**Parameters:**

- `p_223455_` (`ChunkPos`)

**Returns:** `public CompletableFuture<Optional<CompoundTag>>`

### write

```java
public CompletableFuture<Void> write(ChunkPos p_63503_, CompoundTag p_63504_)
```

**Parameters:**

- `p_63503_` (`ChunkPos`)
- `p_63504_` (`CompoundTag`)

**Returns:** `public CompletableFuture<Void>`

### handleLegacyStructureIndex

```java
protected void handleLegacyStructureIndex(ChunkPos p_321604_)
```

**Parameters:**

- `p_321604_` (`ChunkPos`)

**Returns:** `protected void`

### flushWorker

```java
public void flushWorker()
```

**Returns:** `public void`

### close

```java
public void close()
```

### chunkScanner

```java
public ChunkScanAccess chunkScanner()
```

**Returns:** `public ChunkScanAccess`

### storageInfo

```java
protected RegionStorageInfo storageInfo()
```

**Returns:** `protected RegionStorageInfo`
