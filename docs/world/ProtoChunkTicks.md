# ProtoChunkTicks

**Package:** `net.minecraft.world.ticks`
**Type:** class<T> implements SerializableTickContainer<T>, TickContainerAccess<T>

## Methods

### schedule

```java
public void schedule(ScheduledTick<T> p_193298_)
```

**Parameters:**

- `p_193298_` (`ScheduledTick<T>`)

### schedule

```java
private void schedule(SavedTick<T> p_193296_)
```

**Parameters:**

- `p_193296_` (`SavedTick<T>`)

**Returns:** `private void`

### hasScheduledTick

```java
public boolean hasScheduledTick(BlockPos p_193300_, T p_193301_)
```

**Parameters:**

- `p_193300_` (`BlockPos`)
- `p_193301_` (`T`)

**Returns:** `boolean`

### count

```java
public int count()
```

**Returns:** `int`

### save

```java
public Tag save(long p_193308_, Function<T, String> p_193309_)
```

**Parameters:**

- `p_193308_` (`long`)
- `p_193309_` (`Function<T, String>`)

**Returns:** `Tag`

### scheduledTicks

```java
public List<SavedTick<T>> scheduledTicks()
```

**Returns:** `public List<SavedTick<T>>`

### load

```java
<T> public static <T> ProtoChunkTicks<T> load(ListTag p_193303_, Function<String, Optional<T>> p_193304_, ChunkPos p_193305_)
```

**Parameters:**

- `p_193303_` (`ListTag`)
- `p_193304_` (`Function<String, Optional<T>>`)
- `p_193305_` (`ChunkPos`)

**Returns:** `public static <T> ProtoChunkTicks<T>`
