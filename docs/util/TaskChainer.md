# TaskChainer

**Package:** `net.minecraft.util`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Methods

### immediate

```java
static TaskChainer immediate(Executor p_251122_)
```

**Parameters:**

- `p_251122_` (`Executor`)

**Returns:** `static TaskChainer`

### TaskChainer

```java
return new TaskChainer()
```

**Returns:** `return new`

### append

```java
public <T> void append(CompletableFuture<T> p_307340_, Consumer<T> p_307235_)
```

**Parameters:**

- `p_307340_` (`CompletableFuture<T>`)
- `p_307235_` (`Consumer<T>`)

### append

```java
default void append(Runnable p_307389_)
```

**Parameters:**

- `p_307389_` (`Runnable`)

**Returns:** `default void`

### append

```java
<T> <T> void append(CompletableFuture<T> p_307473_, Consumer<T> p_307567_)
```

**Parameters:**

- `p_307473_` (`CompletableFuture<T>`)
- `p_307567_` (`Consumer<T>`)

**Returns:** `<T> void`
