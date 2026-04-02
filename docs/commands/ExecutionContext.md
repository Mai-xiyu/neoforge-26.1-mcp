# ExecutionContext

**Package:** `net.minecraft.commands.execution`
**Type:** class<T>
**Implements:** `AutoCloseable`

## Methods

### ExecutionContext

```java
public ExecutionContext(int p_306012_, int p_306180_, ProfilerFiller p_306142_)
```

**Parameters:**

- `p_306012_` (`int`)
- `p_306180_` (`int`)
- `p_306142_` (`ProfilerFiller`)

**Returns:** `public`

### createTopFrame

```java
private static <T extends ExecutionCommandSource<T>> Frame createTopFrame(ExecutionContext<T> p_309594_, CommandResultCallback p_309689_)
```

**Parameters:**

- `p_309594_` (`ExecutionContext<T>`)
- `p_309689_` (`CommandResultCallback`)

**Returns:** `private static <T extends ExecutionCommandSource<T>> Frame`

### Frame

```java
return new Frame()
```

**Returns:** `return new`

### queueInitialFunctionCall

```java
public static <T extends ExecutionCommandSource<T>> void queueInitialFunctionCall(ExecutionContext<T> p_309686_, InstantiatedFunction<T> p_306145_, T p_309607_, CommandResultCallback p_309681_)
```

**Parameters:**

- `p_309686_` (`ExecutionContext<T>`)
- `p_306145_` (`InstantiatedFunction<T>`)
- `p_309607_` (`T`)
- `p_309681_` (`CommandResultCallback`)

**Returns:** `public static <T extends ExecutionCommandSource<T>> void`

### queueInitialCommandExecution

```java
public static <T extends ExecutionCommandSource<T>> void queueInitialCommandExecution(ExecutionContext<T> p_306236_, String p_305860_, ContextChain<T> p_305784_, T p_306195_, CommandResultCallback p_309622_)
```

**Parameters:**

- `p_306236_` (`ExecutionContext<T>`)
- `p_305860_` (`String`)
- `p_305784_` (`ContextChain<T>`)
- `p_306195_` (`T`)
- `p_309622_` (`CommandResultCallback`)

**Returns:** `public static <T extends ExecutionCommandSource<T>> void`

### handleQueueOverflow

```java
private void handleQueueOverflow()
```

**Returns:** `private void`

### queueNext

```java
public void queueNext(CommandQueueEntry<T> p_305869_)
```

**Parameters:**

- `p_305869_` (`CommandQueueEntry<T>`)

**Returns:** `public void`

### discardAtDepthOrHigher

```java
public void discardAtDepthOrHigher(int p_306290_)
```

**Parameters:**

- `p_306290_` (`int`)

**Returns:** `public void`

### frameControlForDepth

```java
public Frame.FrameControl frameControlForDepth(int p_309645_)
```

**Parameters:**

- `p_309645_` (`int`)

**Returns:** `public Frame.FrameControl`

### runCommandQueue

```java
public void runCommandQueue()
```

**Returns:** `public void`

### pushNewCommands

```java
private void pushNewCommands()
```

**Returns:** `private void`

### tracer

```java
public void tracer(TraceCallbacks p_305950_)
```

**Parameters:**

- `p_305950_` (`TraceCallbacks`)

**Returns:** `public void`

### tracer

```java
public TraceCallbacks tracer()
```

**Returns:** `TraceCallbacks`

### profiler

```java
public ProfilerFiller profiler()
```

**Returns:** `public ProfilerFiller`

### forkLimit

```java
public int forkLimit()
```

**Returns:** `public int`

### incrementCost

```java
public void incrementCost()
```

**Returns:** `public void`

### close

```java
public void close()
```
