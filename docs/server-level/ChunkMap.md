# ChunkMap

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `ChunkStorage`
**Implements:** `ChunkHolder.PlayerProvider`, `GeneratingChunkMap`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MIN_VIEW_DISTANCE` | `int` |  |
| `MAX_VIEW_DISTANCE` | `int` |  |
| `FORCED_TICKET_LEVEL` | `int` |  |

## Methods

### ChunkMap

```java
public ChunkMap(ServerLevel p_214836_, LevelStorageSource.LevelStorageAccess p_214837_, DataFixer p_214838_, StructureTemplateManager p_214839_, Executor p_214840_, BlockableEventLoop<Runnable> p_214841_, LightChunkGetter p_214842_, ChunkGenerator p_214843_, ChunkProgressListener p_214844_, ChunkStatusUpdateListener p_214845_, Supplier<DimensionDataStorage> p_214846_, int p_214847_, boolean p_214848_)
```

**Parameters:**

- `p_214836_` (`ServerLevel`)
- `p_214837_` (`LevelStorageSource.LevelStorageAccess`)
- `p_214838_` (`DataFixer`)
- `p_214839_` (`StructureTemplateManager`)
- `p_214840_` (`Executor`)
- `p_214841_` (`BlockableEventLoop<Runnable>`)
- `p_214842_` (`LightChunkGetter`)
- `p_214843_` (`ChunkGenerator`)
- `p_214844_` (`ChunkProgressListener`)
- `p_214845_` (`ChunkStatusUpdateListener`)
- `p_214846_` (`Supplier<DimensionDataStorage>`)
- `p_214847_` (`int`)
- `p_214848_` (`boolean`)

**Returns:** `public`

### generator

```java
protected ChunkGenerator generator()
```

**Returns:** `protected ChunkGenerator`

### generatorState

```java
protected ChunkGeneratorStructureState generatorState()
```

**Returns:** `protected ChunkGeneratorStructureState`

### randomState

```java
protected RandomState randomState()
```

**Returns:** `protected RandomState`

### euclideanDistanceSquared

```java
private static double euclideanDistanceSquared(ChunkPos p_140227_, Entity p_140228_)
```

**Parameters:**

- `p_140227_` (`ChunkPos`)
- `p_140228_` (`Entity`)

**Returns:** `private static double`

### isChunkTracked

```java
boolean isChunkTracked(ServerPlayer p_295366_, int p_294911_, int p_296247_)
```

**Parameters:**

- `p_295366_` (`ServerPlayer`)
- `p_294911_` (`int`)
- `p_296247_` (`int`)

**Returns:** `boolean`

### isChunkOnTrackedBorder

```java
private boolean isChunkOnTrackedBorder(ServerPlayer p_295596_, int p_294838_, int p_295212_)
```

**Parameters:**

- `p_295596_` (`ServerPlayer`)
- `p_294838_` (`int`)
- `p_295212_` (`int`)

**Returns:** `private boolean`

### getLightEngine

```java
protected ThreadedLevelLightEngine getLightEngine()
```

**Returns:** `protected ThreadedLevelLightEngine`

### getUpdatingChunkIfPresent

```java
protected ChunkHolder getUpdatingChunkIfPresent(long p_140175_)
```

**Parameters:**

- `p_140175_` (`long`)

**Returns:** `ChunkHolder`

### getVisibleChunkIfPresent

```java
public ChunkHolder getVisibleChunkIfPresent(long p_140328_)
```

**Parameters:**

- `p_140328_` (`long`)

**Returns:** `ChunkHolder`

### getChunkQueueLevel

```java
protected IntSupplier getChunkQueueLevel(long p_140372_)
```

**Parameters:**

- `p_140372_` (`long`)

**Returns:** `protected IntSupplier`

### getChunkDebugData

```java
public String getChunkDebugData(ChunkPos p_140205_)
```

**Parameters:**

- `p_140205_` (`ChunkPos`)

**Returns:** `public String`

### getChunkRangeFuture

```java
private CompletableFuture<ChunkResult<List<ChunkAccess>>> getChunkRangeFuture(ChunkHolder p_281446_, int p_282030_, IntFunction<ChunkStatus> p_282923_)
```

**Parameters:**

- `p_281446_` (`ChunkHolder`)
- `p_282030_` (`int`)
- `p_282923_` (`IntFunction<ChunkStatus>`)

**Returns:** `private CompletableFuture<ChunkResult<List<ChunkAccess>>>`

### debugFuturesAndCreateReportedException

```java
public ReportedException debugFuturesAndCreateReportedException(IllegalStateException p_203752_, String p_203753_)
```

**Parameters:**

- `p_203752_` (`IllegalStateException`)
- `p_203753_` (`String`)

**Returns:** `public ReportedException`

### ReportedException

```java
return new ReportedException()
```

**Returns:** `return new`

### prepareEntityTickingChunk

```java
public CompletableFuture<ChunkResult<LevelChunk>> prepareEntityTickingChunk(ChunkHolder p_281455_)
```

**Parameters:**

- `p_281455_` (`ChunkHolder`)

**Returns:** `public CompletableFuture<ChunkResult<LevelChunk>>`

### updateChunkScheduling

```java
ChunkHolder updateChunkScheduling(long p_140177_, int p_140178_, ChunkHolder p_140179_, int p_140180_)
```

**Parameters:**

- `p_140177_` (`long`)
- `p_140178_` (`int`)
- `p_140179_` (`ChunkHolder`)
- `p_140180_` (`int`)

**Returns:** `ChunkHolder`

### close

```java
public void close()
```

### saveAllChunks

```java
protected void saveAllChunks(boolean p_140319_)
```

**Parameters:**

- `p_140319_` (`boolean`)

**Returns:** `protected void`

### tick

```java
protected void tick(BooleanSupplier p_140281_)
```

**Parameters:**

- `p_140281_` (`BooleanSupplier`)

**Returns:** `protected void`

### hasWork

```java
public boolean hasWork()
```

**Returns:** `public boolean`

### processUnloads

```java
private void processUnloads(BooleanSupplier p_140354_)
```

**Parameters:**

- `p_140354_` (`BooleanSupplier`)

**Returns:** `private void`

### scheduleUnload

```java
private void scheduleUnload(long p_140182_, ChunkHolder p_140183_)
```

**Parameters:**

- `p_140182_` (`long`)
- `p_140183_` (`ChunkHolder`)

**Returns:** `private void`

### promoteChunkMap

```java
protected boolean promoteChunkMap()
```

**Returns:** `protected boolean`

### scheduleChunkLoad

```java
private CompletableFuture<ChunkAccess> scheduleChunkLoad(ChunkPos p_140418_)
```

**Parameters:**

- `p_140418_` (`ChunkPos`)

**Returns:** `private CompletableFuture<ChunkAccess>`

### isChunkDataValid

```java
private static boolean isChunkDataValid(CompoundTag p_214941_)
```

**Parameters:**

- `p_214941_` (`CompoundTag`)

**Returns:** `private static boolean`

### handleChunkLoadFailure

```java
private ChunkAccess handleChunkLoadFailure(Throwable p_214902_, ChunkPos p_214903_)
```

**Parameters:**

- `p_214902_` (`Throwable`)
- `p_214903_` (`ChunkPos`)

**Returns:** `private ChunkAccess`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### createEmptyChunk

```java
private ChunkAccess createEmptyChunk(ChunkPos p_214962_)
```

**Parameters:**

- `p_214962_` (`ChunkPos`)

**Returns:** `private ChunkAccess`

### markPositionReplaceable

```java
private void markPositionReplaceable(ChunkPos p_140423_)
```

**Parameters:**

- `p_140423_` (`ChunkPos`)

**Returns:** `private void`

### markPosition

```java
private byte markPosition(ChunkPos p_140230_, ChunkType p_332120_)
```

**Parameters:**

- `p_140230_` (`ChunkPos`)
- `p_332120_` (`ChunkType`)

**Returns:** `private byte`

### acquireGeneration

```java
public GenerationChunkHolder acquireGeneration(long p_347661_)
```

**Parameters:**

- `p_347661_` (`long`)

**Returns:** `GenerationChunkHolder`

### releaseGeneration

```java
public void releaseGeneration(GenerationChunkHolder p_347698_)
```

**Parameters:**

- `p_347698_` (`GenerationChunkHolder`)

### applyStep

```java
public CompletableFuture<ChunkAccess> applyStep(GenerationChunkHolder p_347627_, ChunkStep p_347638_, StaticCache2D<GenerationChunkHolder> p_347552_)
```

**Parameters:**

- `p_347627_` (`GenerationChunkHolder`)
- `p_347638_` (`ChunkStep`)
- `p_347552_` (`StaticCache2D<GenerationChunkHolder>`)

**Returns:** `CompletableFuture<ChunkAccess>`

### IllegalStateException

```java
throw new IllegalStateException("Parent chunk missing")
```

**Parameters:**

- `missing"` (`"Parent chunk`)

**Returns:** `throw new`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### scheduleGenerationTask

```java
public ChunkGenerationTask scheduleGenerationTask(ChunkStatus p_347605_, ChunkPos p_347675_)
```

**Parameters:**

- `p_347605_` (`ChunkStatus`)
- `p_347675_` (`ChunkPos`)

**Returns:** `ChunkGenerationTask`

### runGenerationTask

```java
private void runGenerationTask(ChunkGenerationTask p_347721_)
```

**Parameters:**

- `p_347721_` (`ChunkGenerationTask`)

**Returns:** `private void`

### runGenerationTasks

```java
public void runGenerationTasks()
```

### prepareTickingChunk

```java
public CompletableFuture<ChunkResult<LevelChunk>> prepareTickingChunk(ChunkHolder p_143054_)
```

**Parameters:**

- `p_143054_` (`ChunkHolder`)

**Returns:** `public CompletableFuture<ChunkResult<LevelChunk>>`

### onChunkReadyToSend

```java
private void onChunkReadyToSend(LevelChunk p_296003_)
```

**Parameters:**

- `p_296003_` (`LevelChunk`)

**Returns:** `private void`

### markChunkPendingToSend

```java
 markChunkPendingToSend()
```

**Returns:** ``

### prepareAccessibleChunk

```java
public CompletableFuture<ChunkResult<LevelChunk>> prepareAccessibleChunk(ChunkHolder p_143110_)
```

**Parameters:**

- `p_143110_` (`ChunkHolder`)

**Returns:** `public CompletableFuture<ChunkResult<LevelChunk>>`

### getTickingGenerated

```java
public int getTickingGenerated()
```

**Returns:** `public int`

### saveChunkIfNeeded

```java
private boolean saveChunkIfNeeded(ChunkHolder p_198875_)
```

**Parameters:**

- `p_198875_` (`ChunkHolder`)

**Returns:** `private boolean`

### save

```java
private boolean save(ChunkAccess p_140259_)
```

**Parameters:**

- `p_140259_` (`ChunkAccess`)

**Returns:** `private boolean`

### isExistingChunkFull

```java
private boolean isExistingChunkFull(ChunkPos p_140426_)
```

**Parameters:**

- `p_140426_` (`ChunkPos`)

**Returns:** `private boolean`

### setServerViewDistance

```java
protected void setServerViewDistance(int p_295758_)
```

**Parameters:**

- `p_295758_` (`int`)

**Returns:** `protected void`

### getPlayerViewDistance

```java
int getPlayerViewDistance(ServerPlayer p_295024_)
```

**Parameters:**

- `p_295024_` (`ServerPlayer`)

**Returns:** `int`

### markChunkPendingToSend

```java
private void markChunkPendingToSend(ServerPlayer p_294638_, ChunkPos p_296183_)
```

**Parameters:**

- `p_294638_` (`ServerPlayer`)
- `p_296183_` (`ChunkPos`)

**Returns:** `private void`

### markChunkPendingToSend

```java
 markChunkPendingToSend()
```

**Returns:** ``

### markChunkPendingToSend

```java
private static void markChunkPendingToSend(ServerPlayer p_295834_, LevelChunk p_296281_)
```

**Parameters:**

- `p_295834_` (`ServerPlayer`)
- `p_296281_` (`LevelChunk`)

**Returns:** `private static void`

### dropChunk

```java
private static void dropChunk(ServerPlayer p_294215_, ChunkPos p_294758_)
```

**Parameters:**

- `p_294215_` (`ServerPlayer`)
- `p_294758_` (`ChunkPos`)

**Returns:** `private static void`

### getChunkToSend

```java
public LevelChunk getChunkToSend(long p_300929_)
```

**Parameters:**

- `p_300929_` (`long`)

**Returns:** `LevelChunk`

### size

```java
public int size()
```

**Returns:** `public int`

### getDistanceManager

```java
public net.minecraft.server.level.DistanceManager getDistanceManager()
```

**Returns:** `public net.minecraft.server.level.DistanceManager`

### getChunks

```java
protected Iterable<ChunkHolder> getChunks()
```

**Returns:** `protected Iterable<ChunkHolder>`

### dumpChunks

```java
void dumpChunks(Writer p_140275_)
```

**Parameters:**

- `p_140275_` (`Writer`)

### printFuture

```java
private static String printFuture(CompletableFuture<ChunkResult<LevelChunk>> p_140279_)
```

**Parameters:**

- `p_140279_` (`CompletableFuture<ChunkResult<LevelChunk>>`)

**Returns:** `private static String`

### readChunk

```java
private CompletableFuture<Optional<CompoundTag>> readChunk(ChunkPos p_214964_)
```

**Parameters:**

- `p_214964_` (`ChunkPos`)

**Returns:** `private CompletableFuture<Optional<CompoundTag>>`

### upgradeChunkTag

```java
private CompoundTag upgradeChunkTag(CompoundTag p_214948_)
```

**Parameters:**

- `p_214948_` (`CompoundTag`)

**Returns:** `private CompoundTag`

### anyPlayerCloseEnoughForSpawning

```java
boolean anyPlayerCloseEnoughForSpawning(ChunkPos p_183880_)
```

**Parameters:**

- `p_183880_` (`ChunkPos`)

**Returns:** `boolean`

### getPlayersCloseForSpawning

```java
public List<ServerPlayer> getPlayersCloseForSpawning(ChunkPos p_183889_)
```

**Parameters:**

- `p_183889_` (`ChunkPos`)

**Returns:** `public List<ServerPlayer>`

### playerIsCloseEnoughForSpawning

```java
private boolean playerIsCloseEnoughForSpawning(ServerPlayer p_183752_, ChunkPos p_183753_)
```

**Parameters:**

- `p_183752_` (`ServerPlayer`)
- `p_183753_` (`ChunkPos`)

**Returns:** `private boolean`

### skipPlayer

```java
private boolean skipPlayer(ServerPlayer p_140330_)
```

**Parameters:**

- `p_140330_` (`ServerPlayer`)

**Returns:** `private boolean`

### updatePlayerStatus

```java
void updatePlayerStatus(ServerPlayer p_140193_, boolean p_140194_)
```

**Parameters:**

- `p_140193_` (`ServerPlayer`)
- `p_140194_` (`boolean`)

### updatePlayerPos

```java
private void updatePlayerPos(ServerPlayer p_140374_)
```

**Parameters:**

- `p_140374_` (`ServerPlayer`)

**Returns:** `private void`

### move

```java
public void move(ServerPlayer p_140185_)
```

**Parameters:**

- `p_140185_` (`ServerPlayer`)

**Returns:** `public void`

### updateChunkTracking

```java
private void updateChunkTracking(ServerPlayer p_183755_)
```

**Parameters:**

- `p_183755_` (`ServerPlayer`)

**Returns:** `private void`

### applyChunkTrackingView

```java
private void applyChunkTrackingView(ServerPlayer p_294188_, ChunkTrackingView p_294174_)
```

**Parameters:**

- `p_294188_` (`ServerPlayer`)
- `p_294174_` (`ChunkTrackingView`)

**Returns:** `private void`

### getPlayers

```java
public List<ServerPlayer> getPlayers(ChunkPos p_183801_, boolean p_183802_)
```

**Parameters:**

- `p_183801_` (`ChunkPos`)
- `p_183802_` (`boolean`)

**Returns:** `List<ServerPlayer>`

### addEntity

```java
protected void addEntity(Entity p_140200_)
```

**Parameters:**

- `p_140200_` (`Entity`)

**Returns:** `protected void`

### removeEntity

```java
protected void removeEntity(Entity p_140332_)
```

**Parameters:**

- `p_140332_` (`Entity`)

**Returns:** `protected void`

### tick

```java
protected void tick()
```

**Returns:** `protected void`

### broadcast

```java
public void broadcast(Entity p_140202_, Packet<?> p_140203_)
```

**Parameters:**

- `p_140202_` (`Entity`)
- `p_140203_` (`Packet<?>`)

**Returns:** `public void`

### broadcastAndSend

```java
protected void broadcastAndSend(Entity p_140334_, Packet<?> p_140335_)
```

**Parameters:**

- `p_140334_` (`Entity`)
- `p_140335_` (`Packet<?>`)

**Returns:** `protected void`

### resendBiomesForChunks

```java
public void resendBiomesForChunks(List<ChunkAccess> p_275577_)
```

**Parameters:**

- `p_275577_` (`List<ChunkAccess>`)

**Returns:** `public void`

### getPoiManager

```java
protected PoiManager getPoiManager()
```

**Returns:** `protected PoiManager`

### getStorageName

```java
public String getStorageName()
```

**Returns:** `public String`

### onFullChunkStatusChange

```java
void onFullChunkStatusChange(ChunkPos p_287612_, FullChunkStatus p_287685_)
```

**Parameters:**

- `p_287612_` (`ChunkPos`)
- `p_287685_` (`FullChunkStatus`)

### waitForLightBeforeSending

```java
public void waitForLightBeforeSending(ChunkPos p_301194_, int p_301130_)
```

**Parameters:**

- `p_301194_` (`ChunkPos`)
- `p_301130_` (`int`)

**Returns:** `public void`

### DistanceManager

```java
protected DistanceManager(Executor p_140459_, Executor p_140460_)
```

**Parameters:**

- `p_140459_` (`Executor`)
- `p_140460_` (`Executor`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### isChunkToRemove

```java
protected boolean isChunkToRemove(long p_140462_)
```

**Parameters:**

- `p_140462_` (`long`)

**Returns:** `boolean`

### getChunk

```java
protected ChunkHolder getChunk(long p_140469_)
```

**Parameters:**

- `p_140469_` (`long`)

**Returns:** `ChunkHolder`

### updateChunkScheduling

```java
protected ChunkHolder updateChunkScheduling(long p_140464_, int p_140465_, ChunkHolder p_140466_, int p_140467_)
```

**Parameters:**

- `p_140464_` (`long`)
- `p_140465_` (`int`)
- `p_140466_` (`ChunkHolder`)
- `p_140467_` (`int`)

**Returns:** `ChunkHolder`

### TrackedEntity

```java
public TrackedEntity(Entity p_140478_, int p_140479_, int p_140480_, boolean p_140481_)
```

**Parameters:**

- `p_140478_` (`Entity`)
- `p_140479_` (`int`)
- `p_140480_` (`int`)
- `p_140481_` (`boolean`)

**Returns:** `public`

### equals

```java
public boolean equals(Object p_140506_)
```

**Parameters:**

- `p_140506_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### broadcast

```java
public void broadcast(Packet<?> p_140490_)
```

**Parameters:**

- `p_140490_` (`Packet<?>`)

**Returns:** `public void`

### broadcastAndSend

```java
public void broadcastAndSend(Packet<?> p_140500_)
```

**Parameters:**

- `p_140500_` (`Packet<?>`)

**Returns:** `public void`

### broadcastRemoved

```java
public void broadcastRemoved()
```

**Returns:** `public void`

### removePlayer

```java
public void removePlayer(ServerPlayer p_140486_)
```

**Parameters:**

- `p_140486_` (`ServerPlayer`)

**Returns:** `public void`

### updatePlayer

```java
public void updatePlayer(ServerPlayer p_140498_)
```

**Parameters:**

- `p_140498_` (`ServerPlayer`)

**Returns:** `public void`

### scaledRange

```java
private int scaledRange(int p_140484_)
```

**Parameters:**

- `p_140484_` (`int`)

**Returns:** `private int`

### getEffectiveRange

```java
private int getEffectiveRange()
```

**Returns:** `private int`

### updatePlayers

```java
public void updatePlayers(List<ServerPlayer> p_140488_)
```

**Parameters:**

- `p_140488_` (`List<ServerPlayer>`)

**Returns:** `public void`

### scheduleOnMainThreadMailbox

```java
public void scheduleOnMainThreadMailbox(ChunkTaskPriorityQueueSorter.Message<Runnable> msg)
```

**Parameters:**

- `msg` (`ChunkTaskPriorityQueueSorter.Message<Runnable>`)
