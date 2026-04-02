# ChunkTaskPriorityQueueSorter

**Package:** `net.minecraft.server.level`
**Type:** class
**Implements:** `ChunkHolder.LevelChangeListener`, `AutoCloseable`

## Methods

### ChunkTaskPriorityQueueSorter

```java
public ChunkTaskPriorityQueueSorter(List<ProcessorHandle<?>> p_140555_, Executor p_140556_, int p_140557_)
```

**Parameters:**

- `p_140555_` (`List<ProcessorHandle<?>>`)
- `p_140556_` (`Executor`)
- `p_140557_` (`int`)

**Returns:** `public`

### hasWork

```java
public boolean hasWork()
```

**Returns:** `public boolean`

### message

```java
<T> public static <T> ChunkTaskPriorityQueueSorter.Message<T> message(Function<ProcessorHandle<Unit>, T> p_143182_, long p_143183_, IntSupplier p_143184_)
```

**Parameters:**

- `p_143182_` (`Function<ProcessorHandle<Unit>, T>`)
- `p_143183_` (`long`)
- `p_143184_` (`IntSupplier`)

**Returns:** `public static <T> ChunkTaskPriorityQueueSorter.Message<T>`

### message

```java
public static ChunkTaskPriorityQueueSorter.Message<Runnable> message(Runnable p_140625_, long p_140626_, IntSupplier p_140627_)
```

**Parameters:**

- `p_140625_` (`Runnable`)
- `p_140626_` (`long`)
- `p_140627_` (`IntSupplier`)

**Returns:** `public static ChunkTaskPriorityQueueSorter.Message<Runnable>`

### message

```java
public static ChunkTaskPriorityQueueSorter.Message<Runnable> message(GenerationChunkHolder p_347444_, Runnable p_140644_)
```

**Parameters:**

- `p_347444_` (`GenerationChunkHolder`)
- `p_140644_` (`Runnable`)

**Returns:** `public static ChunkTaskPriorityQueueSorter.Message<Runnable>`

### message

```java
<T> public static <T> ChunkTaskPriorityQueueSorter.Message<T> message(GenerationChunkHolder p_347496_, Function<ProcessorHandle<Unit>, T> p_143158_)
```

**Parameters:**

- `p_347496_` (`GenerationChunkHolder`)
- `p_143158_` (`Function<ProcessorHandle<Unit>, T>`)

**Returns:** `public static <T> ChunkTaskPriorityQueueSorter.Message<T>`

### release

```java
public static ChunkTaskPriorityQueueSorter.Release release(Runnable p_140629_, long p_140630_, boolean p_140631_)
```

**Parameters:**

- `p_140629_` (`Runnable`)
- `p_140630_` (`long`)
- `p_140631_` (`boolean`)

**Returns:** `public static ChunkTaskPriorityQueueSorter.Release`

### getProcessor

```java
<T> public <T> ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<T>> getProcessor(ProcessorHandle<T> p_140605_, boolean p_140606_)
```

**Parameters:**

- `p_140605_` (`ProcessorHandle<T>`)
- `p_140606_` (`boolean`)

**Returns:** `public <T> ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<T>>`

### getReleaseProcessor

```java
public ProcessorHandle<ChunkTaskPriorityQueueSorter.Release> getReleaseProcessor(ProcessorHandle<Runnable> p_140568_)
```

**Parameters:**

- `p_140568_` (`ProcessorHandle<Runnable>`)

**Returns:** `public ProcessorHandle<ChunkTaskPriorityQueueSorter.Release>`

### onLevelChange

```java
public void onLevelChange(ChunkPos p_140616_, IntSupplier p_140617_, int p_140618_, IntConsumer p_140619_)
```

**Parameters:**

- `p_140616_` (`ChunkPos`)
- `p_140617_` (`IntSupplier`)
- `p_140618_` (`int`)
- `p_140619_` (`IntConsumer`)

### release

```java
<T> private <T> void release(ProcessorHandle<T> p_140570_, long p_140571_, Runnable p_140572_, boolean p_140573_)
```

**Parameters:**

- `p_140570_` (`ProcessorHandle<T>`)
- `p_140571_` (`long`)
- `p_140572_` (`Runnable`)
- `p_140573_` (`boolean`)

**Returns:** `private <T> void`

### submit

```java
<T> private <T> void submit(ProcessorHandle<T> p_140590_, Function<ProcessorHandle<Unit>, T> p_140591_, long p_140592_, IntSupplier p_140593_, boolean p_140594_)
```

**Parameters:**

- `p_140590_` (`ProcessorHandle<T>`)
- `p_140591_` (`Function<ProcessorHandle<Unit>, T>`)
- `p_140592_` (`long`)
- `p_140593_` (`IntSupplier`)
- `p_140594_` (`boolean`)

**Returns:** `private <T> void`

### pollTask

```java
<T> private <T> void pollTask(ChunkTaskPriorityQueue<Function<ProcessorHandle<Unit>, T>> p_140646_, ProcessorHandle<T> p_140647_)
```

**Parameters:**

- `p_140646_` (`ChunkTaskPriorityQueue<Function<ProcessorHandle<Unit>, T>>`)
- `p_140647_` (`ProcessorHandle<T>`)

**Returns:** `private <T> void`

### getQueue

```java
<T> private <T> ChunkTaskPriorityQueue<Function<ProcessorHandle<Unit>, T>> getQueue(ProcessorHandle<T> p_140653_)
```

**Parameters:**

- `p_140653_` (`ProcessorHandle<T>`)

**Returns:** `private <T> ChunkTaskPriorityQueue<Function<ProcessorHandle<Unit>, T>>`

### getDebugStatus

```java
public String getDebugStatus()
```

**Returns:** `String`

### close

```java
public void close()
```

### Message

```java
 Message(Function<ProcessorHandle<Unit>, T> p_140668_, long p_140669_, IntSupplier p_140670_)
```

**Parameters:**

- `p_140668_` (`Function<ProcessorHandle<Unit>, T>`)
- `p_140669_` (`long`)
- `p_140670_` (`IntSupplier`)

**Returns:** ``

### Release

```java
 Release(Runnable p_140686_, long p_140687_, boolean p_140688_)
```

**Parameters:**

- `p_140686_` (`Runnable`)
- `p_140687_` (`long`)
- `p_140688_` (`boolean`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Message` | class |  |
| `Release` | class |  |
