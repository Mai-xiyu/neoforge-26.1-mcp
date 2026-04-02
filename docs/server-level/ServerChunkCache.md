# ServerChunkCache

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `ChunkSource`
**Implements:** `net.neoforged.neoforge.common.extensions.IServerChunkCacheExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `level` | `ServerLevel` |  |
| `chunkMap` | `ChunkMap` |  |

## Methods

### ServerChunkCache

```java
public ServerChunkCache(ServerLevel p_214982_, LevelStorageSource.LevelStorageAccess p_214983_, DataFixer p_214984_, StructureTemplateManager p_214985_, Executor p_214986_, ChunkGenerator p_214987_, int p_214988_, int p_214989_, boolean p_214990_, ChunkProgressListener p_214991_, ChunkStatusUpdateListener p_214992_, Supplier<DimensionDataStorage> p_214993_)
```

**Parameters:**

- `p_214982_` (`ServerLevel`)
- `p_214983_` (`LevelStorageSource.LevelStorageAccess`)
- `p_214984_` (`DataFixer`)
- `p_214985_` (`StructureTemplateManager`)
- `p_214986_` (`Executor`)
- `p_214987_` (`ChunkGenerator`)
- `p_214988_` (`int`)
- `p_214989_` (`int`)
- `p_214990_` (`boolean`)
- `p_214991_` (`ChunkProgressListener`)
- `p_214992_` (`ChunkStatusUpdateListener`)
- `p_214993_` (`Supplier<DimensionDataStorage>`)

**Returns:** `public`

### getLightEngine

```java
public ThreadedLevelLightEngine getLightEngine()
```

**Returns:** `public ThreadedLevelLightEngine`

### getTickingGenerated

```java
public int getTickingGenerated()
```

**Returns:** `public int`

### storeInCache

```java
private void storeInCache(long p_8367_, ChunkAccess p_8368_, ChunkStatus p_331839_)
```

**Parameters:**

- `p_8367_` (`long`)
- `p_8368_` (`ChunkAccess`)
- `p_331839_` (`ChunkStatus`)

**Returns:** `private void`

### getChunk

```java
public ChunkAccess getChunk(int p_8360_, int p_8361_, ChunkStatus p_330876_, boolean p_8363_)
```

**Parameters:**

- `p_8360_` (`int`)
- `p_8361_` (`int`)
- `p_330876_` (`ChunkStatus`)
- `p_8363_` (`boolean`)

**Returns:** `ChunkAccess`

### getChunkNow

```java
public LevelChunk getChunkNow(int p_8357_, int p_8358_)
```

**Parameters:**

- `p_8357_` (`int`)
- `p_8358_` (`int`)

**Returns:** `LevelChunk`

### clearCache

```java
private void clearCache()
```

**Returns:** `private void`

### getChunkFuture

```java
public CompletableFuture<ChunkResult<ChunkAccess>> getChunkFuture(int p_8432_, int p_8433_, ChunkStatus p_330326_, boolean p_8435_)
```

**Parameters:**

- `p_8432_` (`int`)
- `p_8433_` (`int`)
- `p_330326_` (`ChunkStatus`)
- `p_8435_` (`boolean`)

**Returns:** `public CompletableFuture<ChunkResult<ChunkAccess>>`

### getChunkFutureMainThread

```java
private CompletableFuture<ChunkResult<ChunkAccess>> getChunkFutureMainThread(int p_8457_, int p_8458_, ChunkStatus p_331599_, boolean p_8460_)
```

**Parameters:**

- `p_8457_` (`int`)
- `p_8458_` (`int`)
- `p_331599_` (`ChunkStatus`)
- `p_8460_` (`boolean`)

**Returns:** `private CompletableFuture<ChunkResult<ChunkAccess>>`

### chunkAbsent

```java
private boolean chunkAbsent(ChunkHolder p_8417_, int p_8418_)
```

**Parameters:**

- `p_8417_` (`ChunkHolder`)
- `p_8418_` (`int`)

**Returns:** `private boolean`

### hasChunk

```java
public boolean hasChunk(int p_8429_, int p_8430_)
```

**Parameters:**

- `p_8429_` (`int`)
- `p_8430_` (`int`)

**Returns:** `boolean`

### getChunkForLighting

```java
public LightChunk getChunkForLighting(int p_8454_, int p_8455_)
```

**Parameters:**

- `p_8454_` (`int`)
- `p_8455_` (`int`)

**Returns:** `LightChunk`

### getLevel

```java
public Level getLevel()
```

**Returns:** `public Level`

### pollTask

```java
public boolean pollTask()
```

**Returns:** `public boolean`

### runDistanceManagerUpdates

```java
boolean runDistanceManagerUpdates()
```

**Returns:** `boolean`

### isPositionTicking

```java
public boolean isPositionTicking(long p_143240_)
```

**Parameters:**

- `p_143240_` (`long`)

**Returns:** `public boolean`

### save

```java
public void save(boolean p_8420_)
```

**Parameters:**

- `p_8420_` (`boolean`)

**Returns:** `public void`

### close

```java
public void close()
```

### tick

```java
public void tick(BooleanSupplier p_201913_, boolean p_201914_)
```

**Parameters:**

- `p_201913_` (`BooleanSupplier`)
- `p_201914_` (`boolean`)

### tickChunks

```java
private void tickChunks()
```

**Returns:** `private void`

### getFullChunk

```java
private void getFullChunk(long p_8371_, Consumer<LevelChunk> p_8372_)
```

**Parameters:**

- `p_8371_` (`long`)
- `p_8372_` (`Consumer<LevelChunk>`)

**Returns:** `private void`

### gatherStats

```java
public String gatherStats()
```

**Returns:** `String`

### getPendingTasksCount

```java
public int getPendingTasksCount()
```

**Returns:** `int`

### getGenerator

```java
public ChunkGenerator getGenerator()
```

**Returns:** `public ChunkGenerator`

### getGeneratorState

```java
public ChunkGeneratorStructureState getGeneratorState()
```

**Returns:** `public ChunkGeneratorStructureState`

### randomState

```java
public RandomState randomState()
```

**Returns:** `public RandomState`

### getLoadedChunksCount

```java
public int getLoadedChunksCount()
```

**Returns:** `int`

### blockChanged

```java
public void blockChanged(BlockPos p_8451_)
```

**Parameters:**

- `p_8451_` (`BlockPos`)

**Returns:** `public void`

### onLightUpdate

```java
public void onLightUpdate(LightLayer p_8403_, SectionPos p_8404_)
```

**Parameters:**

- `p_8403_` (`LightLayer`)
- `p_8404_` (`SectionPos`)

### addRegionTicket

```java
<T> public <T> void addRegionTicket(TicketType<T> p_8388_, ChunkPos p_8389_, int p_8390_, T p_8391_)
```

**Parameters:**

- `p_8388_` (`TicketType<T>`)
- `p_8389_` (`ChunkPos`)
- `p_8390_` (`int`)
- `p_8391_` (`T`)

**Returns:** `public <T> void`

### addRegionTicket

```java
 addRegionTicket()
```

**Returns:** ``

### addRegionTicket

```java
<T> public <T> void addRegionTicket(TicketType<T> p_8388_, ChunkPos p_8389_, int p_8390_, T p_8391_, boolean forceTicks)
```

**Parameters:**

- `p_8388_` (`TicketType<T>`)
- `p_8389_` (`ChunkPos`)
- `p_8390_` (`int`)
- `p_8391_` (`T`)
- `forceTicks` (`boolean`)

**Returns:** `public <T> void`

### removeRegionTicket

```java
<T> public <T> void removeRegionTicket(TicketType<T> p_8439_, ChunkPos p_8440_, int p_8441_, T p_8442_)
```

**Parameters:**

- `p_8439_` (`TicketType<T>`)
- `p_8440_` (`ChunkPos`)
- `p_8441_` (`int`)
- `p_8442_` (`T`)

**Returns:** `public <T> void`

### removeRegionTicket

```java
 removeRegionTicket()
```

**Returns:** ``

### removeRegionTicket

```java
<T> public <T> void removeRegionTicket(TicketType<T> p_8439_, ChunkPos p_8440_, int p_8441_, T p_8442_, boolean forceTicks)
```

**Parameters:**

- `p_8439_` (`TicketType<T>`)
- `p_8440_` (`ChunkPos`)
- `p_8441_` (`int`)
- `p_8442_` (`T`)
- `forceTicks` (`boolean`)

**Returns:** `public <T> void`

### updateChunkForced

```java
public void updateChunkForced(ChunkPos p_8400_, boolean p_8401_)
```

**Parameters:**

- `p_8400_` (`ChunkPos`)
- `p_8401_` (`boolean`)

### move

```java
public void move(ServerPlayer p_8386_)
```

**Parameters:**

- `p_8386_` (`ServerPlayer`)

**Returns:** `public void`

### removeEntity

```java
public void removeEntity(Entity p_8444_)
```

**Parameters:**

- `p_8444_` (`Entity`)

**Returns:** `public void`

### addEntity

```java
public void addEntity(Entity p_8464_)
```

**Parameters:**

- `p_8464_` (`Entity`)

**Returns:** `public void`

### broadcastAndSend

```java
public void broadcastAndSend(Entity p_8395_, Packet<?> p_8396_)
```

**Parameters:**

- `p_8395_` (`Entity`)
- `p_8396_` (`Packet<?>`)

**Returns:** `public void`

### broadcast

```java
public void broadcast(Entity p_8446_, Packet<?> p_8447_)
```

**Parameters:**

- `p_8446_` (`Entity`)
- `p_8447_` (`Packet<?>`)

**Returns:** `public void`

### setViewDistance

```java
public void setViewDistance(int p_8355_)
```

**Parameters:**

- `p_8355_` (`int`)

**Returns:** `public void`

### setSimulationDistance

```java
public void setSimulationDistance(int p_184027_)
```

**Parameters:**

- `p_184027_` (`int`)

**Returns:** `public void`

### setSpawnSettings

```java
public void setSpawnSettings(boolean p_8425_, boolean p_8426_)
```

**Parameters:**

- `p_8425_` (`boolean`)
- `p_8426_` (`boolean`)

### getChunkDebugData

```java
public String getChunkDebugData(ChunkPos p_8449_)
```

**Parameters:**

- `p_8449_` (`ChunkPos`)

**Returns:** `public String`

### getDataStorage

```java
public DimensionDataStorage getDataStorage()
```

**Returns:** `public DimensionDataStorage`

### getPoiManager

```java
public PoiManager getPoiManager()
```

**Returns:** `public PoiManager`

### chunkScanner

```java
public ChunkScanAccess chunkScanner()
```

**Returns:** `public ChunkScanAccess`

### getLastSpawnState

```java
public NaturalSpawner.SpawnState getLastSpawnState()
```

**Returns:** `NaturalSpawner.SpawnState`

### removeTicketsOnClosing

```java
public void removeTicketsOnClosing()
```

**Returns:** `public void`

### ChunkAndHolder

```java
static record ChunkAndHolder(LevelChunk chunk, ChunkHolder holder)
```

**Parameters:**

- `chunk` (`LevelChunk`)
- `holder` (`ChunkHolder`)

**Returns:** `static record`

### MainThreadExecutor

```java
 MainThreadExecutor(Level p_8494_)
```

**Parameters:**

- `p_8494_` (`Level`)

**Returns:** ``

### managedBlock

```java
public void managedBlock(BooleanSupplier p_347606_)
```

**Parameters:**

- `p_347606_` (`BooleanSupplier`)

### wrapRunnable

```java
protected Runnable wrapRunnable(Runnable p_8506_)
```

**Parameters:**

- `p_8506_` (`Runnable`)

**Returns:** `Runnable`

### shouldRun

```java
protected boolean shouldRun(Runnable p_8504_)
```

**Parameters:**

- `p_8504_` (`Runnable`)

**Returns:** `boolean`

### scheduleExecutables

```java
protected boolean scheduleExecutables()
```

**Returns:** `boolean`

### getRunningThread

```java
protected Thread getRunningThread()
```

**Returns:** `Thread`

### doRunTask

```java
protected void doRunTask(Runnable p_8502_)
```

**Parameters:**

- `p_8502_` (`Runnable`)

### pollTask

```java
public boolean pollTask()
```

**Returns:** `boolean`
