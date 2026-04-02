# OperationArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<OperationArgument.Operation>`

## Methods

### operation

```java
public static OperationArgument operation()
```

**Returns:** `public static OperationArgument`

### OperationArgument

```java
return new OperationArgument()
```

**Returns:** `return new`

### getOperation

```java
public static OperationArgument.Operation getOperation(CommandContext<CommandSourceStack> p_103276_, String p_103277_)
```

**Parameters:**

- `p_103276_` (`CommandContext<CommandSourceStack>`)
- `p_103277_` (`String`)

**Returns:** `public static OperationArgument.Operation`

### parse

```java
public OperationArgument.Operation parse(StringReader p_103274_)
```

**Parameters:**

- `p_103274_` (`StringReader`)

**Returns:** `public OperationArgument.Operation`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_103302_, SuggestionsBuilder p_103303_)
```

**Parameters:**

- `p_103302_` (`CommandContext<S>`)
- `p_103303_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### getOperation

```java
private static OperationArgument.Operation getOperation(String p_103282_)
```

**Parameters:**

- `p_103282_` (`String`)

**Returns:** `private static OperationArgument.Operation`

### getSimpleOperation

```java
private static OperationArgument.SimpleOperation getSimpleOperation(String p_103287_)
```

**Parameters:**

- `p_103287_` (`String`)

**Returns:** `private static OperationArgument.SimpleOperation`

### apply

```java
void apply(ScoreAccess p_313872_, ScoreAccess p_313910_)
```

**Parameters:**

- `p_313872_` (`ScoreAccess`)
- `p_313910_` (`ScoreAccess`)

### apply

```java
int apply(int p_103309_, int p_103310_)
```

**Parameters:**

- `p_103309_` (`int`)
- `p_103310_` (`int`)

**Returns:** `int`

### apply

```java
default void apply(ScoreAccess p_313880_, ScoreAccess p_313804_)
```

**Parameters:**

- `p_313880_` (`ScoreAccess`)
- `p_313804_` (`ScoreAccess`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Operation` | interface |  |
