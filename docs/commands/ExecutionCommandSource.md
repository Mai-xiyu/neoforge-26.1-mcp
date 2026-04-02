# ExecutionCommandSource

**Package:** `net.minecraft.commands`
**Type:** interface<T extends ExecutionCommandSource<T>>

## Methods

### hasPermission

```java
boolean hasPermission(int p_306071_)
```

**Parameters:**

- `p_306071_` (`int`)

**Returns:** `boolean`

### withCallback

```java
T withCallback(CommandResultCallback p_309572_)
```

**Parameters:**

- `p_309572_` (`CommandResultCallback`)

**Returns:** `T`

### callback

```java
CommandResultCallback callback()
```

**Returns:** `CommandResultCallback`

### clearCallbacks

```java
default T clearCallbacks()
```

**Returns:** `default T`

### dispatcher

```java
CommandDispatcher<T> dispatcher()
```

**Returns:** `CommandDispatcher<T>`

### handleError

```java
void handleError(CommandExceptionType p_307509_, Message p_307413_, boolean p_307299_, TraceCallbacks p_307535_)
```

**Parameters:**

- `p_307509_` (`CommandExceptionType`)
- `p_307413_` (`Message`)
- `p_307299_` (`boolean`)
- `p_307535_` (`TraceCallbacks`)

### isSilent

```java
boolean isSilent()
```

**Returns:** `boolean`

### handleError

```java
default void handleError(CommandSyntaxException p_307419_, boolean p_307222_, TraceCallbacks p_307604_)
```

**Parameters:**

- `p_307419_` (`CommandSyntaxException`)
- `p_307222_` (`boolean`)
- `p_307604_` (`TraceCallbacks`)

**Returns:** `default void`

### resultConsumer

```java
static <T extends ExecutionCommandSource<T>> ResultConsumer<T> resultConsumer()
```

**Returns:** `static <T extends ExecutionCommandSource<T>> ResultConsumer<T>`
