# ObjectiveArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<String>`

## Methods

### objective

```java
public static ObjectiveArgument objective()
```

**Returns:** `public static ObjectiveArgument`

### ObjectiveArgument

```java
return new ObjectiveArgument()
```

**Returns:** `return new`

### getObjective

```java
public static Objective getObjective(CommandContext<CommandSourceStack> p_101961_, String p_101962_)
```

**Parameters:**

- `p_101961_` (`CommandContext<CommandSourceStack>`)
- `p_101962_` (`String`)

**Returns:** `public static Objective`

### getWritableObjective

```java
public static Objective getWritableObjective(CommandContext<CommandSourceStack> p_101966_, String p_101967_)
```

**Parameters:**

- `p_101966_` (`CommandContext<CommandSourceStack>`)
- `p_101967_` (`String`)

**Returns:** `public static Objective`

### parse

```java
public String parse(StringReader p_101959_)
```

**Parameters:**

- `p_101959_` (`StringReader`)

**Returns:** `public String`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_101974_, SuggestionsBuilder p_101975_)
```

**Parameters:**

- `p_101974_` (`CommandContext<S>`)
- `p_101975_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
