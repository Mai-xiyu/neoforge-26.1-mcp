# GameModeArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<GameType>`

## Methods

### parse

```java
public GameType parse(StringReader p_260111_)
```

**Parameters:**

- `p_260111_` (`StringReader`)

**Returns:** `public GameType`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_259767_, SuggestionsBuilder p_259515_)
```

**Parameters:**

- `p_259767_` (`CommandContext<S>`)
- `p_259515_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### gameMode

```java
public static GameModeArgument gameMode()
```

**Returns:** `public static GameModeArgument`

### GameModeArgument

```java
return new GameModeArgument()
```

**Returns:** `return new`

### getGameMode

```java
public static GameType getGameMode(CommandContext<CommandSourceStack> p_259927_, String p_260246_)
```

**Parameters:**

- `p_259927_` (`CommandContext<CommandSourceStack>`)
- `p_260246_` (`String`)

**Returns:** `public static GameType`
