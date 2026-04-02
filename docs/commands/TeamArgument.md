# TeamArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<String>`

## Methods

### team

```java
public static TeamArgument team()
```

**Returns:** `public static TeamArgument`

### TeamArgument

```java
return new TeamArgument()
```

**Returns:** `return new`

### getTeam

```java
public static PlayerTeam getTeam(CommandContext<CommandSourceStack> p_112092_, String p_112093_)
```

**Parameters:**

- `p_112092_` (`CommandContext<CommandSourceStack>`)
- `p_112093_` (`String`)

**Returns:** `public static PlayerTeam`

### parse

```java
public String parse(StringReader p_112090_)
```

**Parameters:**

- `p_112090_` (`StringReader`)

**Returns:** `public String`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_112098_, SuggestionsBuilder p_112099_)
```

**Parameters:**

- `p_112098_` (`CommandContext<S>`)
- `p_112099_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
