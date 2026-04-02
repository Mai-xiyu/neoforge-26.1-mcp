# PersistentEntitySectionManager

**Package:** `net.minecraft.world.level.entity`
**Type:** class<T extends EntityAccess>
**Implements:** `AutoCloseable`

## Methods

### PersistentEntitySectionManager

```java
public PersistentEntitySectionManager(Class<T> p_157503_, LevelCallback<T> p_157504_, EntityPersistentStorage<T> p_157505_)
```

**Parameters:**

- `p_157503_` (`Class<T>`)
- `p_157504_` (`LevelCallback<T>`)
- `p_157505_` (`EntityPersistentStorage<T>`)

**Returns:** `public`

### removeSectionIfEmpty

```java
void removeSectionIfEmpty(long p_157510_, EntitySection<T> p_157511_)
```

**Parameters:**

- `p_157510_` (`long`)
- `p_157511_` (`EntitySection<T>`)

### addEntityUuid

```java
private boolean addEntityUuid(T p_157558_)
```

**Parameters:**

- `p_157558_` (`T`)

**Returns:** `private boolean`

### addNewEntity

```java
public boolean addNewEntity(T p_157534_)
```

**Parameters:**

- `p_157534_` (`T`)

**Returns:** `public boolean`

### addNewEntityWithoutEvent

```java
public boolean addNewEntityWithoutEvent(T entity)
```

**Parameters:**

- `entity` (`T`)

**Returns:** `public boolean`

### addEntity

```java
private boolean addEntity(T p_157539_, boolean p_157540_)
```

**Parameters:**

- `p_157539_` (`T`)
- `p_157540_` (`boolean`)

**Returns:** `private boolean`

### addEntityWithoutEvent

```java
return addEntityWithoutEvent()
```

**Returns:** `return`

### addEntityWithoutEvent

```java
private boolean addEntityWithoutEvent(T p_157539_, boolean p_157540_)
```

**Parameters:**

- `p_157539_` (`T`)
- `p_157540_` (`boolean`)

**Returns:** `private boolean`

### getEffectiveStatus

```java
<T extends EntityAccess> static <T extends EntityAccess> Visibility getEffectiveStatus(T p_157536_, Visibility p_157537_)
```

**Parameters:**

- `p_157536_` (`T`)
- `p_157537_` (`Visibility`)

**Returns:** `static <T extends EntityAccess> Visibility`

### addLegacyChunkEntities

```java
public void addLegacyChunkEntities(Stream<T> p_157553_)
```

**Parameters:**

- `p_157553_` (`Stream<T>`)

**Returns:** `public void`

### addWorldGenChunkEntities

```java
public void addWorldGenChunkEntities(Stream<T> p_157560_)
```

**Parameters:**

- `p_157560_` (`Stream<T>`)

**Returns:** `public void`

### startTicking

```java
void startTicking(T p_157565_)
```

**Parameters:**

- `p_157565_` (`T`)

### stopTicking

```java
void stopTicking(T p_157571_)
```

**Parameters:**

- `p_157571_` (`T`)

### startTracking

```java
void startTracking(T p_157576_)
```

**Parameters:**

- `p_157576_` (`T`)

### stopTracking

```java
void stopTracking(T p_157581_)
```

**Parameters:**

- `p_157581_` (`T`)

### updateChunkStatus

```java
public void updateChunkStatus(ChunkPos p_287590_, FullChunkStatus p_287623_)
```

**Parameters:**

- `p_287590_` (`ChunkPos`)
- `p_287623_` (`FullChunkStatus`)

**Returns:** `public void`

### updateChunkStatus

```java
public void updateChunkStatus(ChunkPos p_157528_, Visibility p_157529_)
```

**Parameters:**

- `p_157528_` (`ChunkPos`)
- `p_157529_` (`Visibility`)

**Returns:** `public void`

### ensureChunkQueuedForLoad

```java
private void ensureChunkQueuedForLoad(long p_157556_)
```

**Parameters:**

- `p_157556_` (`long`)

**Returns:** `private void`

### storeChunkSections

```java
private boolean storeChunkSections(long p_157513_, Consumer<T> p_157514_)
```

**Parameters:**

- `p_157513_` (`long`)
- `p_157514_` (`Consumer<T>`)

**Returns:** `private boolean`

### requestChunkLoad

```java
private void requestChunkLoad(long p_157563_)
```

**Parameters:**

- `p_157563_` (`long`)

**Returns:** `private void`

### processChunkUnload

```java
private boolean processChunkUnload(long p_157569_)
```

**Parameters:**

- `p_157569_` (`long`)

**Returns:** `private boolean`

### unloadEntity

```java
private void unloadEntity(EntityAccess p_157586_)
```

**Parameters:**

- `p_157586_` (`EntityAccess`)

**Returns:** `private void`

### processUnloads

```java
private void processUnloads()
```

**Returns:** `private void`

### processPendingLoads

```java
private void processPendingLoads()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### getAllChunksToSave

```java
private LongSet getAllChunksToSave()
```

**Returns:** `private LongSet`

### autoSave

```java
public void autoSave()
```

**Returns:** `public void`

### saveAll

```java
public void saveAll()
```

**Returns:** `public void`

### close

```java
public void close()
```

### isLoaded

```java
public boolean isLoaded(UUID p_157551_)
```

**Parameters:**

- `p_157551_` (`UUID`)

**Returns:** `public boolean`

### getEntityGetter

```java
public LevelEntityGetter<T> getEntityGetter()
```

**Returns:** `public LevelEntityGetter<T>`

### canPositionTick

```java
public boolean canPositionTick(BlockPos p_202168_)
```

**Parameters:**

- `p_202168_` (`BlockPos`)

**Returns:** `public boolean`

### canPositionTick

```java
public boolean canPositionTick(ChunkPos p_202166_)
```

**Parameters:**

- `p_202166_` (`ChunkPos`)

**Returns:** `public boolean`

### areEntitiesLoaded

```java
public boolean areEntitiesLoaded(long p_157508_)
```

**Parameters:**

- `p_157508_` (`long`)

**Returns:** `public boolean`

### dumpSections

```java
public void dumpSections(Writer p_157549_)
```

**Parameters:**

- `p_157549_` (`Writer`)

**Returns:** `public void`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### gatherStats

```java
public String gatherStats()
```

**Returns:** `String`

### count

```java
public int count()
```

**Returns:** `int`

### Callback

```java
 Callback(T p_157614_, long p_157615_, EntitySection<T> p_157616_)
```

**Parameters:**

- `p_157614_` (`T`)
- `p_157615_` (`long`)
- `p_157616_` (`EntitySection<T>`)

**Returns:** ``

### onMove

```java
public void onMove()
```

### updateStatus

```java
private void updateStatus(Visibility p_157621_, Visibility p_157622_)
```

**Parameters:**

- `p_157621_` (`Visibility`)
- `p_157622_` (`Visibility`)

**Returns:** `private void`

### onRemove

```java
public void onRemove(Entity.RemovalReason p_157619_)
```

**Parameters:**

- `p_157619_` (`Entity.RemovalReason`)
