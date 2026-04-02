# ColumnPosArgument

**Package:** `net.minecraft.commands.arguments.coordinates`
**Type:** class
**Implements:** `ArgumentType<Coordinates>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_COMPLETE` | `SimpleCommandExceptionType` |  |

## Methods

### columnPos

```java
public static ColumnPosArgument columnPos()
```

**Returns:** `public static ColumnPosArgument`

### ColumnPosArgument

```java
return new ColumnPosArgument()
```

**Returns:** `return new`

### getColumnPos

```java
public static ColumnPos getColumnPos(CommandContext<CommandSourceStack> p_118993_, String p_118994_)
```

**Parameters:**

- `p_118993_` (`CommandContext<CommandSourceStack>`)
- `p_118994_` (`String`)

**Returns:** `public static ColumnPos`

### parse

```java
public Coordinates parse(StringReader p_118991_)
```

**Parameters:**

- `p_118991_` (`StringReader`)

**Returns:** `public Coordinates`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_118997_, SuggestionsBuilder p_118998_)
```

**Parameters:**

- `p_118997_` (`CommandContext<S>`)
- `p_118998_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
