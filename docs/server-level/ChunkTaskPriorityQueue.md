# ChunkTaskPriorityQueue

**Package:** `net.minecraft.server.level`
**Type:** class<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PRIORITY_LEVEL_COUNT` | `int` |  |

## Methods

### ChunkTaskPriorityQueue

```java
public ChunkTaskPriorityQueue(String p_140516_, int p_140517_)
```

**Parameters:**

- `p_140516_` (`String`)
- `p_140517_` (`int`)

**Returns:** `public`

### resortChunkTasks

```java
protected void resortChunkTasks(int p_140522_, ChunkPos p_140523_, int p_140524_)
```

**Parameters:**

- `p_140522_` (`int`)
- `p_140523_` (`ChunkPos`)
- `p_140524_` (`int`)

**Returns:** `protected void`

### submit

```java
protected void submit(Optional<T> p_140536_, long p_140537_, int p_140538_)
```

**Parameters:**

- `p_140536_` (`Optional<T>`)
- `p_140537_` (`long`)
- `p_140538_` (`int`)

**Returns:** `protected void`

### release

```java
protected void release(long p_140531_, boolean p_140532_)
```

**Parameters:**

- `p_140531_` (`long`)
- `p_140532_` (`boolean`)

**Returns:** `protected void`

### acquire

```java
private Runnable acquire(long p_140526_)
```

**Parameters:**

- `p_140526_` (`long`)

**Returns:** `private Runnable`

### pop

```java
public Stream<Either<T, Runnable>> pop()
```

**Returns:** `Stream<Either<T, Runnable>>`

### hasWork

```java
public boolean hasWork()
```

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### getAcquired

```java
LongSet getAcquired()
```

**Returns:** `LongSet`

### LongOpenHashSet

```java
return new LongOpenHashSet()
```

**Returns:** `return new`
