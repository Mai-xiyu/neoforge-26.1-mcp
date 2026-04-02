# ChunkHolder

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `GenerationChunkHolder`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `UNLOADED_LEVEL_CHUNK` | `ChunkResult<LevelChunk>` |  |

## Methods

### ChunkHolder

```java
public ChunkHolder(ChunkPos p_142986_, int p_142987_, LevelHeightAccessor p_142988_, LevelLightEngine p_142989_, ChunkHolder.LevelChangeListener p_142990_, ChunkHolder.PlayerProvider p_142991_)
```

**Parameters:**

- `p_142986_` (`ChunkPos`)
- `p_142987_` (`int`)
- `p_142988_` (`LevelHeightAccessor`)
- `p_142989_` (`LevelLightEngine`)
- `p_142990_` (`ChunkHolder.LevelChangeListener`)
- `p_142991_` (`ChunkHolder.PlayerProvider`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTickingChunkFuture

```java
public CompletableFuture<ChunkResult<LevelChunk>> getTickingChunkFuture()
```

**Returns:** `public CompletableFuture<ChunkResult<LevelChunk>>`

### getEntityTickingChunkFuture

```java
public CompletableFuture<ChunkResult<LevelChunk>> getEntityTickingChunkFuture()
```

**Returns:** `public CompletableFuture<ChunkResult<LevelChunk>>`

### getFullChunkFuture

```java
public CompletableFuture<ChunkResult<LevelChunk>> getFullChunkFuture()
```

**Returns:** `public CompletableFuture<ChunkResult<LevelChunk>>`

### getTickingChunk

```java
public LevelChunk getTickingChunk()
```

**Returns:** `LevelChunk`

### getChunkToSend

```java
public LevelChunk getChunkToSend()
```

**Returns:** `LevelChunk`

### getSendSyncFuture

```java
public CompletableFuture<?> getSendSyncFuture()
```

**Returns:** `public CompletableFuture<?>`

### addSendDependency

```java
public void addSendDependency(CompletableFuture<?> p_301235_)
```

**Parameters:**

- `p_301235_` (`CompletableFuture<?>`)

**Returns:** `public void`

### getSaveSyncFuture

```java
public CompletableFuture<?> getSaveSyncFuture()
```

**Returns:** `public CompletableFuture<?>`

### isReadyForSaving

```java
public boolean isReadyForSaving()
```

**Returns:** `public boolean`

### addSaveDependency

```java
private void addSaveDependency(CompletableFuture<?> p_200418_)
```

**Parameters:**

- `p_200418_` (`CompletableFuture<?>`)

**Returns:** `private void`

### blockChanged

```java
public void blockChanged(BlockPos p_140057_)
```

**Parameters:**

- `p_140057_` (`BlockPos`)

**Returns:** `public void`

### sectionLightChanged

```java
public void sectionLightChanged(LightLayer p_140037_, int p_140038_)
```

**Parameters:**

- `p_140037_` (`LightLayer`)
- `p_140038_` (`int`)

**Returns:** `public void`

### broadcastChanges

```java
public void broadcastChanges(LevelChunk p_140055_)
```

**Parameters:**

- `p_140055_` (`LevelChunk`)

**Returns:** `public void`

### broadcastBlockEntityIfNeeded

```java
private void broadcastBlockEntityIfNeeded(List<ServerPlayer> p_288982_, Level p_289011_, BlockPos p_288969_, BlockState p_288973_)
```

**Parameters:**

- `p_288982_` (`List<ServerPlayer>`)
- `p_289011_` (`Level`)
- `p_288969_` (`BlockPos`)
- `p_288973_` (`BlockState`)

**Returns:** `private void`

### broadcastBlockEntity

```java
private void broadcastBlockEntity(List<ServerPlayer> p_288988_, Level p_289005_, BlockPos p_288981_)
```

**Parameters:**

- `p_288988_` (`List<ServerPlayer>`)
- `p_289005_` (`Level`)
- `p_288981_` (`BlockPos`)

**Returns:** `private void`

### broadcast

```java
private void broadcast(List<ServerPlayer> p_288998_, Packet<?> p_289013_)
```

**Parameters:**

- `p_288998_` (`List<ServerPlayer>`)
- `p_289013_` (`Packet<?>`)

**Returns:** `private void`

### getTicketLevel

```java
public int getTicketLevel()
```

**Returns:** `int`

### getQueueLevel

```java
public int getQueueLevel()
```

**Returns:** `int`

### setQueueLevel

```java
private void setQueueLevel(int p_140087_)
```

**Parameters:**

- `p_140087_` (`int`)

**Returns:** `private void`

### setTicketLevel

```java
public void setTicketLevel(int p_140028_)
```

**Parameters:**

- `p_140028_` (`int`)

**Returns:** `public void`

### scheduleFullChunkPromotion

```java
private void scheduleFullChunkPromotion(ChunkMap p_142999_, CompletableFuture<ChunkResult<LevelChunk>> p_143000_, Executor p_143001_, FullChunkStatus p_287621_)
```

**Parameters:**

- `p_142999_` (`ChunkMap`)
- `p_143000_` (`CompletableFuture<ChunkResult<LevelChunk>>`)
- `p_143001_` (`Executor`)
- `p_287621_` (`FullChunkStatus`)

**Returns:** `private void`

### demoteFullChunk

```java
private void demoteFullChunk(ChunkMap p_287599_, FullChunkStatus p_287649_)
```

**Parameters:**

- `p_287599_` (`ChunkMap`)
- `p_287649_` (`FullChunkStatus`)

**Returns:** `private void`

### updateFutures

```java
protected void updateFutures(ChunkMap p_143004_, Executor p_143005_)
```

**Parameters:**

- `p_143004_` (`ChunkMap`)
- `p_143005_` (`Executor`)

**Returns:** `protected void`

### wasAccessibleSinceLastSave

```java
public boolean wasAccessibleSinceLastSave()
```

**Returns:** `public boolean`

### refreshAccessibility

```java
public void refreshAccessibility()
```

**Returns:** `public void`

### onLevelChange

```java
void onLevelChange(ChunkPos p_140119_, IntSupplier p_140120_, int p_140121_, IntConsumer p_140122_)
```

**Parameters:**

- `p_140119_` (`ChunkPos`)
- `p_140120_` (`IntSupplier`)
- `p_140121_` (`int`)
- `p_140122_` (`IntConsumer`)

### getPlayers

```java
List<ServerPlayer> getPlayers(ChunkPos p_183717_, boolean p_183718_)
```

**Parameters:**

- `p_183717_` (`ChunkPos`)
- `p_183718_` (`boolean`)

**Returns:** `List<ServerPlayer>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LevelChangeListener` | interface |  |
| `PlayerProvider` | interface |  |
