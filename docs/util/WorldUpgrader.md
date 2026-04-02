# WorldUpgrader

**Package:** `net.minecraft.util.worldupdate`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `dataFixType` | `DataFixTypes` |  |

## Methods

### WorldUpgrader

```java
public WorldUpgrader(LevelStorageSource.LevelStorageAccess p_249922_, DataFixer p_250273_, RegistryAccess p_323645_, boolean p_250738_, boolean p_321700_)
```

**Parameters:**

- `p_249922_` (`LevelStorageSource.LevelStorageAccess`)
- `p_250273_` (`DataFixer`)
- `p_323645_` (`RegistryAccess`)
- `p_250738_` (`boolean`)
- `p_321700_` (`boolean`)

**Returns:** `public`

### cancel

```java
public void cancel()
```

**Returns:** `public void`

### work

```java
private void work()
```

**Returns:** `private void`

### isFinished

```java
public boolean isFinished()
```

**Returns:** `public boolean`

### levels

```java
public Set<ResourceKey<Level>> levels()
```

**Returns:** `public Set<ResourceKey<Level>>`

### dimensionProgress

```java
public float dimensionProgress(ResourceKey<Level> p_18828_)
```

**Parameters:**

- `p_18828_` (`ResourceKey<Level>`)

**Returns:** `public float`

### getProgress

```java
public float getProgress()
```

**Returns:** `public float`

### getTotalChunks

```java
public int getTotalChunks()
```

**Returns:** `public int`

### getConverted

```java
public int getConverted()
```

**Returns:** `public int`

### getSkipped

```java
public int getSkipped()
```

**Returns:** `public int`

### getStatus

```java
public Component getStatus()
```

**Returns:** `public Component`

### resolveRecreateDirectory

```java
static Path resolveRecreateDirectory(Path p_326514_)
```

**Parameters:**

- `p_326514_` (`Path`)

**Returns:** `static Path`

### AbstractUpgrader

```java
 AbstractUpgrader(DataFixTypes p_321854_, String p_321675_, String p_326131_, MutableComponent p_321807_, MutableComponent p_321799_)
```

**Parameters:**

- `p_321854_` (`DataFixTypes`)
- `p_321675_` (`String`)
- `p_326131_` (`String`)
- `p_321807_` (`MutableComponent`)
- `p_321799_` (`MutableComponent`)

**Returns:** ``

### upgrade

```java
public void upgrade()
```

**Returns:** `public void`

### getDimensionsToUpgrade

```java
private List<WorldUpgrader.DimensionToUpgrade<T>> getDimensionsToUpgrade()
```

**Returns:** `private List<WorldUpgrader.DimensionToUpgrade<T>>`

### createStorage

```java
protected abstract T createStorage(RegionStorageInfo p_326496_, Path p_321752_)
```

**Parameters:**

- `p_326496_` (`RegionStorageInfo`)
- `p_321752_` (`Path`)

**Returns:** `protected abstract T`

### getFilesToProcess

```java
private ListIterator<WorldUpgrader.FileToUpgrade> getFilesToProcess(RegionStorageInfo p_325920_, Path p_326489_)
```

**Parameters:**

- `p_325920_` (`RegionStorageInfo`)
- `p_326489_` (`Path`)

**Returns:** `private ListIterator<WorldUpgrader.FileToUpgrade>`

### getAllChunkPositions

```java
private static List<WorldUpgrader.FileToUpgrade> getAllChunkPositions(RegionStorageInfo p_326177_, Path p_326228_)
```

**Parameters:**

- `p_326177_` (`RegionStorageInfo`)
- `p_326228_` (`Path`)

**Returns:** `private static List<WorldUpgrader.FileToUpgrade>`

### processOnePosition

```java
private boolean processOnePosition(ResourceKey<Level> p_321757_, T p_321658_, ChunkPos p_321833_)
```

**Parameters:**

- `p_321757_` (`ResourceKey<Level>`)
- `p_321658_` (`T`)
- `p_321833_` (`ChunkPos`)

**Returns:** `private boolean`

### tryProcessOnePosition

```java
protected abstract boolean tryProcessOnePosition(T p_321640_, ChunkPos p_321536_, ResourceKey<Level> p_321782_)
```

**Parameters:**

- `p_321640_` (`T`)
- `p_321536_` (`ChunkPos`)
- `p_321782_` (`ResourceKey<Level>`)

**Returns:** `protected abstract boolean`

### onFileFinished

```java
private void onFileFinished(RegionFile p_321800_)
```

**Parameters:**

- `p_321800_` (`RegionFile`)

**Returns:** `private void`

### ChunkUpgrader

```java
 ChunkUpgrader()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### tryProcessOnePosition

```java
protected boolean tryProcessOnePosition(ChunkStorage p_321581_, ChunkPos p_321524_, ResourceKey<Level> p_321488_)
```

**Parameters:**

- `p_321581_` (`ChunkStorage`)
- `p_321524_` (`ChunkPos`)
- `p_321488_` (`ResourceKey<Level>`)

**Returns:** `protected boolean`

### createStorage

```java
protected ChunkStorage createStorage(RegionStorageInfo p_325989_, Path p_321746_)
```

**Parameters:**

- `p_325989_` (`RegionStorageInfo`)
- `p_321746_` (`Path`)

**Returns:** `protected ChunkStorage`

### EntityUpgrader

```java
 EntityUpgrader()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### upgradeTag

```java
protected CompoundTag upgradeTag(SimpleRegionStorage p_321667_, CompoundTag p_321776_)
```

**Parameters:**

- `p_321667_` (`SimpleRegionStorage`)
- `p_321776_` (`CompoundTag`)

**Returns:** `CompoundTag`

### FileToUpgrade

```java
static record FileToUpgrade(RegionFile file, List<ChunkPos> chunksToUpgrade)
```

**Parameters:**

- `file` (`RegionFile`)
- `chunksToUpgrade` (`List<ChunkPos>`)

**Returns:** `static record`

### PoiUpgrader

```java
 PoiUpgrader()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### upgradeTag

```java
protected CompoundTag upgradeTag(SimpleRegionStorage p_321589_, CompoundTag p_321492_)
```

**Parameters:**

- `p_321589_` (`SimpleRegionStorage`)
- `p_321492_` (`CompoundTag`)

**Returns:** `CompoundTag`

### SimpleRegionStorageUpgrader

```java
 SimpleRegionStorageUpgrader(DataFixTypes p_321688_, String p_321507_, MutableComponent p_321726_, MutableComponent p_321505_)
```

**Parameters:**

- `p_321688_` (`DataFixTypes`)
- `p_321507_` (`String`)
- `p_321726_` (`MutableComponent`)
- `p_321505_` (`MutableComponent`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### createStorage

```java
protected SimpleRegionStorage createStorage(RegionStorageInfo p_325941_, Path p_321595_)
```

**Parameters:**

- `p_325941_` (`RegionStorageInfo`)
- `p_321595_` (`Path`)

**Returns:** `protected SimpleRegionStorage`

### tryProcessOnePosition

```java
protected boolean tryProcessOnePosition(SimpleRegionStorage p_321490_, ChunkPos p_321657_, ResourceKey<Level> p_321485_)
```

**Parameters:**

- `p_321490_` (`SimpleRegionStorage`)
- `p_321657_` (`ChunkPos`)
- `p_321485_` (`ResourceKey<Level>`)

**Returns:** `protected boolean`

### upgradeTag

```java
protected abstract CompoundTag upgradeTag(SimpleRegionStorage p_321857_, CompoundTag p_321575_)
```

**Parameters:**

- `p_321857_` (`SimpleRegionStorage`)
- `p_321575_` (`CompoundTag`)

**Returns:** `protected abstract CompoundTag`
