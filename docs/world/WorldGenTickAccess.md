# WorldGenTickAccess

**Package:** `net.minecraft.world.ticks`
**Type:** class<T> implements LevelTickAccess<T>

## Methods

### WorldGenTickAccess

```java
public WorldGenTickAccess(Function<BlockPos, TickContainerAccess<T>> p_193454_)
```

**Parameters:**

- `p_193454_` (`Function<BlockPos, TickContainerAccess<T>>`)

**Returns:** `public`

### hasScheduledTick

```java
public boolean hasScheduledTick(BlockPos p_193459_, T p_193460_)
```

**Parameters:**

- `p_193459_` (`BlockPos`)
- `p_193460_` (`T`)

**Returns:** `boolean`

### schedule

```java
public void schedule(ScheduledTick<T> p_193457_)
```

**Parameters:**

- `p_193457_` (`ScheduledTick<T>`)

### willTickThisTick

```java
public boolean willTickThisTick(BlockPos p_193462_, T p_193463_)
```

**Parameters:**

- `p_193462_` (`BlockPos`)
- `p_193463_` (`T`)

**Returns:** `boolean`

### count

```java
public int count()
```

**Returns:** `int`
