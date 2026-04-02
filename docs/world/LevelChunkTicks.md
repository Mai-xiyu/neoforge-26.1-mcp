# LevelChunkTicks

**Package:** `net.minecraft.world.ticks`
**Type:** class<T> implements SerializableTickContainer<T>, TickContainerAccess<T>

## Methods

### LevelChunkTicks

```java
public LevelChunkTicks()
```

**Returns:** `public`

### LevelChunkTicks

```java
public LevelChunkTicks(List<SavedTick<T>> p_193169_)
```

**Parameters:**

- `p_193169_` (`List<SavedTick<T>>`)

**Returns:** `public`

### setOnTickAdded

```java
public void setOnTickAdded(BiConsumer<LevelChunkTicks<T>, ScheduledTick<T>> p_193182_)
```

**Parameters:**

- `p_193182_` (`BiConsumer<LevelChunkTicks<T>, ScheduledTick<T>>`)

**Returns:** `public void`

### peek

```java
public ScheduledTick<T> peek()
```

**Returns:** `ScheduledTick<T>`

### poll

```java
public ScheduledTick<T> poll()
```

**Returns:** `ScheduledTick<T>`

### schedule

```java
public void schedule(ScheduledTick<T> p_193177_)
```

**Parameters:**

- `p_193177_` (`ScheduledTick<T>`)

### scheduleUnchecked

```java
private void scheduleUnchecked(ScheduledTick<T> p_193194_)
```

**Parameters:**

- `p_193194_` (`ScheduledTick<T>`)

**Returns:** `private void`

### hasScheduledTick

```java
public boolean hasScheduledTick(BlockPos p_193179_, T p_193180_)
```

**Parameters:**

- `p_193179_` (`BlockPos`)
- `p_193180_` (`T`)

**Returns:** `boolean`

### removeIf

```java
public void removeIf(Predicate<ScheduledTick<T>> p_193184_)
```

**Parameters:**

- `p_193184_` (`Predicate<ScheduledTick<T>>`)

**Returns:** `public void`

### getAll

```java
public Stream<ScheduledTick<T>> getAll()
```

**Returns:** `public Stream<ScheduledTick<T>>`

### count

```java
public int count()
```

**Returns:** `int`

### save

```java
public ListTag save(long p_193174_, Function<T, String> p_193175_)
```

**Parameters:**

- `p_193174_` (`long`)
- `p_193175_` (`Function<T, String>`)

**Returns:** `public ListTag`

### unpack

```java
public void unpack(long p_193172_)
```

**Parameters:**

- `p_193172_` (`long`)

**Returns:** `public void`

### load

```java
<T> public static <T> LevelChunkTicks<T> load(ListTag p_193186_, Function<String, Optional<T>> p_193187_, ChunkPos p_193188_)
```

**Parameters:**

- `p_193186_` (`ListTag`)
- `p_193187_` (`Function<String, Optional<T>>`)
- `p_193188_` (`ChunkPos`)

**Returns:** `public static <T> LevelChunkTicks<T>`
