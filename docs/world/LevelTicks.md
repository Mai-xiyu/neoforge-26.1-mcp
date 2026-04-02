# LevelTicks

**Package:** `net.minecraft.world.ticks`
**Type:** class<T> implements LevelTickAccess<T>

## Methods

### LevelTicks

```java
public LevelTicks(LongPredicate p_193211_, Supplier<ProfilerFiller> p_193212_)
```

**Parameters:**

- `p_193211_` (`LongPredicate`)
- `p_193212_` (`Supplier<ProfilerFiller>`)

**Returns:** `public`

### addContainer

```java
public void addContainer(ChunkPos p_193232_, LevelChunkTicks<T> p_193233_)
```

**Parameters:**

- `p_193232_` (`ChunkPos`)
- `p_193233_` (`LevelChunkTicks<T>`)

**Returns:** `public void`

### removeContainer

```java
public void removeContainer(ChunkPos p_193230_)
```

**Parameters:**

- `p_193230_` (`ChunkPos`)

**Returns:** `public void`

### schedule

```java
public void schedule(ScheduledTick<T> p_193252_)
```

**Parameters:**

- `p_193252_` (`ScheduledTick<T>`)

### tick

```java
public void tick(long p_193226_, int p_193227_, BiConsumer<BlockPos, T> p_193228_)
```

**Parameters:**

- `p_193226_` (`long`)
- `p_193227_` (`int`)
- `p_193228_` (`BiConsumer<BlockPos, T>`)

**Returns:** `public void`

### collectTicks

```java
private void collectTicks(long p_193222_, int p_193223_, ProfilerFiller p_193224_)
```

**Parameters:**

- `p_193222_` (`long`)
- `p_193223_` (`int`)
- `p_193224_` (`ProfilerFiller`)

**Returns:** `private void`

### sortContainersToTick

```java
private void sortContainersToTick(long p_193217_)
```

**Parameters:**

- `p_193217_` (`long`)

**Returns:** `private void`

### drainContainers

```java
private void drainContainers(long p_193219_, int p_193220_)
```

**Parameters:**

- `p_193219_` (`long`)
- `p_193220_` (`int`)

**Returns:** `private void`

### rescheduleLeftoverContainers

```java
private void rescheduleLeftoverContainers()
```

**Returns:** `private void`

### updateContainerScheduling

```java
private void updateContainerScheduling(ScheduledTick<T> p_193280_)
```

**Parameters:**

- `p_193280_` (`ScheduledTick<T>`)

**Returns:** `private void`

### drainFromCurrentContainer

```java
private void drainFromCurrentContainer(Queue<LevelChunkTicks<T>> p_193268_, LevelChunkTicks<T> p_193269_, long p_193270_, int p_193271_)
```

**Parameters:**

- `p_193268_` (`Queue<LevelChunkTicks<T>>`)
- `p_193269_` (`LevelChunkTicks<T>`)
- `p_193270_` (`long`)
- `p_193271_` (`int`)

**Returns:** `private void`

### scheduleForThisTick

```java
private void scheduleForThisTick(ScheduledTick<T> p_193286_)
```

**Parameters:**

- `p_193286_` (`ScheduledTick<T>`)

**Returns:** `private void`

### canScheduleMoreTicks

```java
private boolean canScheduleMoreTicks(int p_193215_)
```

**Parameters:**

- `p_193215_` (`int`)

**Returns:** `private boolean`

### runCollectedTicks

```java
private void runCollectedTicks(BiConsumer<BlockPos, T> p_193273_)
```

**Parameters:**

- `p_193273_` (`BiConsumer<BlockPos, T>`)

**Returns:** `private void`

### cleanupAfterTick

```java
private void cleanupAfterTick()
```

**Returns:** `private void`

### hasScheduledTick

```java
public boolean hasScheduledTick(BlockPos p_193254_, T p_193255_)
```

**Parameters:**

- `p_193254_` (`BlockPos`)
- `p_193255_` (`T`)

**Returns:** `boolean`

### willTickThisTick

```java
public boolean willTickThisTick(BlockPos p_193282_, T p_193283_)
```

**Parameters:**

- `p_193282_` (`BlockPos`)
- `p_193283_` (`T`)

**Returns:** `boolean`

### calculateTickSetIfNeeded

```java
private void calculateTickSetIfNeeded()
```

**Returns:** `private void`

### forContainersInArea

```java
private void forContainersInArea(BoundingBox p_193237_, LevelTicks.PosAndContainerConsumer<T> p_193238_)
```

**Parameters:**

- `p_193237_` (`BoundingBox`)
- `p_193238_` (`LevelTicks.PosAndContainerConsumer<T>`)

**Returns:** `private void`

### clearArea

```java
public void clearArea(BoundingBox p_193235_)
```

**Parameters:**

- `p_193235_` (`BoundingBox`)

**Returns:** `public void`

### copyArea

```java
public void copyArea(BoundingBox p_193243_, Vec3i p_193244_)
```

**Parameters:**

- `p_193243_` (`BoundingBox`)
- `p_193244_` (`Vec3i`)

**Returns:** `public void`

### copyAreaFrom

```java
public void copyAreaFrom(LevelTicks<T> p_265554_, BoundingBox p_265172_, Vec3i p_265318_)
```

**Parameters:**

- `p_265554_` (`LevelTicks<T>`)
- `p_265172_` (`BoundingBox`)
- `p_265318_` (`Vec3i`)

**Returns:** `public void`

### count

```java
public int count()
```

**Returns:** `int`

### accept

```java
void accept(long p_193289_, LevelChunkTicks<T> p_193290_)
```

**Parameters:**

- `p_193289_` (`long`)
- `p_193290_` (`LevelChunkTicks<T>`)
