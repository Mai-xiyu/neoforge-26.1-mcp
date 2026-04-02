# FunctionCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SUGGEST_FUNCTION` | `SuggestionProvider<CommandSourceStack>` |  |

## Methods

### signalResult

```java
public void signalResult(CommandSourceStack p_305828_, ResourceLocation p_306288_, int p_306112_)
```

**Parameters:**

- `p_305828_` (`CommandSourceStack`)
- `p_306288_` (`ResourceLocation`)
- `p_306112_` (`int`)

**Returns:** `public void`

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_137715_)
```

**Parameters:**

- `p_137715_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### arguments

```java
protected CompoundTag arguments(CommandContext<CommandSourceStack> p_306295_)
```

**Parameters:**

- `p_306295_` (`CommandContext<CommandSourceStack>`)

**Returns:** `CompoundTag`

### arguments

```java
protected CompoundTag arguments(CommandContext<CommandSourceStack> p_306208_)
```

**Parameters:**

- `p_306208_` (`CommandContext<CommandSourceStack>`)

**Returns:** `CompoundTag`

### arguments

```java
protected CompoundTag arguments(CommandContext<CommandSourceStack> p_306232_)
```

**Parameters:**

- `p_306232_` (`CommandContext<CommandSourceStack>`)

**Returns:** `CompoundTag`

### arguments

```java
protected CompoundTag arguments(CommandContext<CommandSourceStack> p_305935_)
```

**Parameters:**

- `p_305935_` (`CommandContext<CommandSourceStack>`)

**Returns:** `CompoundTag`

### getArgumentTag

```java
static CompoundTag getArgumentTag(NbtPathArgument.NbtPath p_295114_, DataAccessor p_296132_)
```

**Parameters:**

- `p_295114_` (`NbtPathArgument.NbtPath`)
- `p_296132_` (`DataAccessor`)

**Returns:** `static CompoundTag`

### modifySenderForExecution

```java
public static CommandSourceStack modifySenderForExecution(CommandSourceStack p_305783_)
```

**Parameters:**

- `p_305783_` (`CommandSourceStack`)

**Returns:** `public static CommandSourceStack`

### queueFunctions

```java
public static <T extends ExecutionCommandSource<T>> void queueFunctions(Collection<CommandFunction<T>> p_305938_, CompoundTag p_306214_, T p_306048_, T p_305876_, ExecutionControl<T> p_305902_, FunctionCommand.Callbacks<T> p_306230_, ChainModifiers p_309589_)
```

**Parameters:**

- `p_305938_` (`Collection<CommandFunction<T>>`)
- `p_306214_` (`CompoundTag`)
- `p_306048_` (`T`)
- `p_305876_` (`T`)
- `p_305902_` (`ExecutionControl<T>`)
- `p_306230_` (`FunctionCommand.Callbacks<T>`)
- `p_309589_` (`ChainModifiers`)

**Returns:** `public static <T extends ExecutionCommandSource<T>> void`

### queueFunctionsAsReturn

```java
 queueFunctionsAsReturn()
```

**Returns:** ``

### queueFunctionsNoReturn

```java
 queueFunctionsNoReturn()
```

**Returns:** ``

### instantiateAndQueueFunctions

```java
private static <T extends ExecutionCommandSource<T>> void instantiateAndQueueFunctions(CompoundTag p_309636_, ExecutionControl<T> p_309536_, CommandDispatcher<T> p_309639_, T p_309605_, CommandFunction<T> p_309610_, ResourceLocation p_309719_, CommandResultCallback p_309544_, boolean p_309542_)
```

**Parameters:**

- `p_309636_` (`CompoundTag`)
- `p_309536_` (`ExecutionControl<T>`)
- `p_309639_` (`CommandDispatcher<T>`)
- `p_309605_` (`T`)
- `p_309610_` (`CommandFunction<T>`)
- `p_309719_` (`ResourceLocation`)
- `p_309544_` (`CommandResultCallback`)
- `p_309542_` (`boolean`)

**Returns:** `private static <T extends ExecutionCommandSource<T>> void`

### decorateOutputIfNeeded

```java
private static <T extends ExecutionCommandSource<T>> CommandResultCallback decorateOutputIfNeeded(T p_309706_, FunctionCommand.Callbacks<T> p_309672_, ResourceLocation p_309690_, CommandResultCallback p_309608_)
```

**Parameters:**

- `p_309706_` (`T`)
- `p_309672_` (`FunctionCommand.Callbacks<T>`)
- `p_309690_` (`ResourceLocation`)
- `p_309608_` (`CommandResultCallback`)

**Returns:** `private static <T extends ExecutionCommandSource<T>> CommandResultCallback`

### queueFunctionsAsReturn

```java
private static <T extends ExecutionCommandSource<T>> void queueFunctionsAsReturn(Collection<CommandFunction<T>> p_309534_, CompoundTag p_309696_, T p_309655_, T p_309547_, ExecutionControl<T> p_309663_, FunctionCommand.Callbacks<T> p_309585_)
```

**Parameters:**

- `p_309534_` (`Collection<CommandFunction<T>>`)
- `p_309696_` (`CompoundTag`)
- `p_309655_` (`T`)
- `p_309547_` (`T`)
- `p_309663_` (`ExecutionControl<T>`)
- `p_309585_` (`FunctionCommand.Callbacks<T>`)

**Returns:** `private static <T extends ExecutionCommandSource<T>> void`

### instantiateAndQueueFunctions

```java
 instantiateAndQueueFunctions()
```

**Returns:** ``

### queueFunctionsNoReturn

```java
private static <T extends ExecutionCommandSource<T>> void queueFunctionsNoReturn(Collection<CommandFunction<T>> p_309573_, CompoundTag p_309637_, T p_309693_, T p_309593_, ExecutionControl<T> p_309574_, FunctionCommand.Callbacks<T> p_309570_)
```

**Parameters:**

- `p_309573_` (`Collection<CommandFunction<T>>`)
- `p_309637_` (`CompoundTag`)
- `p_309693_` (`T`)
- `p_309593_` (`T`)
- `p_309574_` (`ExecutionControl<T>`)
- `p_309570_` (`FunctionCommand.Callbacks<T>`)

**Returns:** `private static <T extends ExecutionCommandSource<T>> void`

### instantiateAndQueueFunctions

```java
 instantiateAndQueueFunctions()
```

**Returns:** ``

### instantiateAndQueueFunctions

```java
 instantiateAndQueueFunctions()
```

**Returns:** ``

### add

```java
public void add(int p_309590_)
```

**Parameters:**

- `p_309590_` (`int`)

**Returns:** `public void`

### instantiateAndQueueFunctions

```java
 instantiateAndQueueFunctions()
```

**Returns:** ``

### signalResult

```java
void signalResult(T p_306084_, ResourceLocation p_306003_, int p_305926_)
```

**Parameters:**

- `p_306084_` (`T`)
- `p_306003_` (`ResourceLocation`)
- `p_305926_` (`int`)

### arguments

```java
protected abstract CompoundTag arguments(CommandContext<CommandSourceStack> p_306010_)
```

**Parameters:**

- `p_306010_` (`CommandContext<CommandSourceStack>`)

**Returns:** `CompoundTag`

### runGuarded

```java
public void runGuarded(CommandSourceStack p_305800_, ContextChain<CommandSourceStack> p_305848_, ChainModifiers p_309662_, ExecutionControl<CommandSourceStack> p_306013_)
```

**Parameters:**

- `p_305800_` (`CommandSourceStack`)
- `p_305848_` (`ContextChain<CommandSourceStack>`)
- `p_309662_` (`ChainModifiers`)
- `p_306013_` (`ExecutionControl<CommandSourceStack>`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Callbacks` | interface |  |
