# ScoreboardSlotArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<DisplaySlot>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_INVALID_VALUE` | `DynamicCommandExceptionType` |  |

## Methods

### ScoreboardSlotArgument

```java
private ScoreboardSlotArgument()
```

**Returns:** `private`

### displaySlot

```java
public static ScoreboardSlotArgument displaySlot()
```

**Returns:** `public static ScoreboardSlotArgument`

### ScoreboardSlotArgument

```java
return new ScoreboardSlotArgument()
```

**Returns:** `return new`

### getDisplaySlot

```java
public static DisplaySlot getDisplaySlot(CommandContext<CommandSourceStack> p_109200_, String p_109201_)
```

**Parameters:**

- `p_109200_` (`CommandContext<CommandSourceStack>`)
- `p_109201_` (`String`)

**Returns:** `public static DisplaySlot`

### parse

```java
public DisplaySlot parse(StringReader p_109198_)
```

**Parameters:**

- `p_109198_` (`StringReader`)

**Returns:** `public DisplaySlot`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_109206_, SuggestionsBuilder p_109207_)
```

**Parameters:**

- `p_109206_` (`CommandContext<S>`)
- `p_109207_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
