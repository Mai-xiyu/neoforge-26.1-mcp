# ExecutionControl

**Package:** `net.minecraft.commands.execution`
**Type:** interface<T>

## Methods

### queueNext

```java
void queueNext(EntryAction<T> p_305867_)
```

**Parameters:**

- `p_305867_` (`EntryAction<T>`)

### tracer

```java
void tracer(TraceCallbacks p_305968_)
```

**Parameters:**

- `p_305968_` (`TraceCallbacks`)

### tracer

```java
TraceCallbacks tracer()
```

**Returns:** `TraceCallbacks`

### currentFrame

```java
Frame currentFrame()
```

**Returns:** `Frame`

### create

```java
static <T extends ExecutionCommandSource<T>> ExecutionControl<T> create(ExecutionContext<T> p_309708_, Frame p_309584_)
```

**Parameters:**

- `p_309708_` (`ExecutionContext<T>`)
- `p_309584_` (`Frame`)

**Returns:** `static <T extends ExecutionCommandSource<T>> ExecutionControl<T>`

### queueNext

```java
public void queueNext(EntryAction<T> p_309579_)
```

**Parameters:**

- `p_309579_` (`EntryAction<T>`)

### tracer

```java
public void tracer(TraceCallbacks p_309633_)
```

**Parameters:**

- `p_309633_` (`TraceCallbacks`)

### tracer

```java
public TraceCallbacks tracer()
```

**Returns:** `TraceCallbacks`

### currentFrame

```java
public Frame currentFrame()
```

**Returns:** `Frame`
