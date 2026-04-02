# ColorArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<ChatFormatting>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_INVALID_VALUE` | `DynamicCommandExceptionType` |  |

## Methods

### ColorArgument

```java
private ColorArgument()
```

**Returns:** `private`

### color

```java
public static ColorArgument color()
```

**Returns:** `public static ColorArgument`

### ColorArgument

```java
return new ColorArgument()
```

**Returns:** `return new`

### getColor

```java
public static ChatFormatting getColor(CommandContext<CommandSourceStack> p_85467_, String p_85468_)
```

**Parameters:**

- `p_85467_` (`CommandContext<CommandSourceStack>`)
- `p_85468_` (`String`)

**Returns:** `public static ChatFormatting`

### parse

```java
public ChatFormatting parse(StringReader p_85465_)
```

**Parameters:**

- `p_85465_` (`StringReader`)

**Returns:** `public ChatFormatting`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_85473_, SuggestionsBuilder p_85474_)
```

**Parameters:**

- `p_85473_` (`CommandContext<S>`)
- `p_85474_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
