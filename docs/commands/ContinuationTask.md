# ContinuationTask

**Package:** `net.minecraft.commands.execution.tasks`
**Type:** class<T, P> implements EntryAction<T>

## Methods

### ContinuationTask

```java
private ContinuationTask(ContinuationTask.TaskProvider<T, P> p_306200_, List<P> p_306026_, Frame p_309650_)
```

**Parameters:**

- `p_306200_` (`ContinuationTask.TaskProvider<T, P>`)
- `p_306026_` (`List<P>`)
- `p_309650_` (`Frame`)

**Returns:** `private`

### execute

```java
public void execute(ExecutionContext<T> p_306022_, Frame p_309626_)
```

**Parameters:**

- `p_306022_` (`ExecutionContext<T>`)
- `p_309626_` (`Frame`)

### schedule

```java
< this.arguments.size()) {
            p_306022_.queueNext(this.selfEntry);
        }
    }

    public static <T, P> void schedule(ExecutionContext<T> p_306309_, Frame p_309712_, List<P> p_306081_, ContinuationTask.TaskProvider<T, P> p_305883_)
```

**Parameters:**

- `p_306309_` (`ExecutionContext<T>`)
- `p_309712_` (`Frame`)
- `p_306081_` (`List<P>`)
- `p_305883_` (`ContinuationTask.TaskProvider<T, P>`)

### create

```java
CommandQueueEntry<T> create(Frame p_309619_, P p_305901_)
```

**Parameters:**

- `p_309619_` (`Frame`)
- `p_305901_` (`P`)

**Returns:** `CommandQueueEntry<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TaskProvider` | interface |  |
