# CustomCommandExecutor

**Package:** `net.minecraft.commands.execution`
**Type:** interface<T>

## Methods

### run

```java
void run(T p_306241_, ContextChain<T> p_305832_, ChainModifiers p_309612_, ExecutionControl<T> p_306256_)
```

**Parameters:**

- `p_306241_` (`T`)
- `p_305832_` (`ContextChain<T>`)
- `p_309612_` (`ChainModifiers`)
- `p_306256_` (`ExecutionControl<T>`)

### run

```java
default int run(CommandContext<T> p_306336_)
```

**Parameters:**

- `p_306336_` (`CommandContext<T>`)

**Returns:** `int`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("This function should not run")
```

**Parameters:**

- `run"` (`"This function should not`)

**Returns:** `throw new`

### run

```java
public final void run(T p_306339_, ContextChain<T> p_306289_, ChainModifiers p_309578_, ExecutionControl<T> p_306027_)
```

**Parameters:**

- `p_306339_` (`T`)
- `p_306289_` (`ContextChain<T>`)
- `p_309578_` (`ChainModifiers`)
- `p_306027_` (`ExecutionControl<T>`)

**Returns:** `public final void`

### onError

```java
protected void onError(CommandSyntaxException p_306165_, T p_306155_, ChainModifiers p_309597_, TraceCallbacks p_307254_)
```

**Parameters:**

- `p_306165_` (`CommandSyntaxException`)
- `p_306155_` (`T`)
- `p_309597_` (`ChainModifiers`)
- `p_307254_` (`TraceCallbacks`)

**Returns:** `protected void`

### runGuarded

```java
protected abstract void runGuarded(T p_306117_, ContextChain<T> p_306121_, ChainModifiers p_309631_, ExecutionControl<T> p_305981_)
```

**Parameters:**

- `p_306117_` (`T`)
- `p_306121_` (`ContextChain<T>`)
- `p_309631_` (`ChainModifiers`)
- `p_305981_` (`ExecutionControl<T>`)

**Returns:** `protected abstract void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CommandAdapter` | interface |  |
