# ProcessorMailbox

**Package:** `net.minecraft.util.thread`
**Type:** class<T>
**Implements:** `ProfilerMeasured`, `ProcessorHandle<T>`, `AutoCloseable`, `Runnable`

## Methods

### create

```java
public static ProcessorMailbox<Runnable> create(Executor p_18752_, String p_18753_)
```

**Parameters:**

- `p_18752_` (`Executor`)
- `p_18753_` (`String`)

**Returns:** `public static ProcessorMailbox<Runnable>`

### ProcessorMailbox

```java
public ProcessorMailbox(StrictQueue<? super T, ? extends Runnable> p_18741_, Executor p_18742_, String p_18743_)
```

**Parameters:**

- `p_18741_` (`StrictQueue<? super T, ? extends Runnable>`)
- `p_18742_` (`Executor`)
- `p_18743_` (`String`)

**Returns:** `public`

### setAsScheduled

```java
private boolean setAsScheduled()
```

**Returns:** `private boolean`

### setAsIdle

```java
private void setAsIdle()
```

**Returns:** `private void`

### canBeScheduled

```java
private boolean canBeScheduled()
```

**Returns:** `private boolean`

### close

```java
public void close()
```

### shouldProcess

```java
private boolean shouldProcess()
```

**Returns:** `private boolean`

### pollTask

```java
private boolean pollTask()
```

**Returns:** `private boolean`

### run

```java
public void run()
```

### runAll

```java
public void runAll()
```

**Returns:** `public void`

### tell

```java
public void tell(T p_18750_)
```

**Parameters:**

- `p_18750_` (`T`)

### registerForExecution

```java
private void registerForExecution()
```

**Returns:** `private void`

### pollUntil

```java
private int pollUntil(Int2BooleanFunction p_18748_)
```

**Parameters:**

- `p_18748_` (`Int2BooleanFunction`)

**Returns:** `private int`

### size

```java
public int size()
```

**Returns:** `public int`

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

### name

```java
public String name()
```

**Returns:** `String`

### profiledMetrics

```java
public List<MetricSampler> profiledMetrics()
```

**Returns:** `List<MetricSampler>`
