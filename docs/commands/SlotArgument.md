# SlotArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<Integer>`

## Methods

### slot

```java
public static SlotArgument slot()
```

**Returns:** `public static SlotArgument`

### SlotArgument

```java
return new SlotArgument()
```

**Returns:** `return new`

### getSlot

```java
public static int getSlot(CommandContext<CommandSourceStack> p_111280_, String p_111281_)
```

**Parameters:**

- `p_111280_` (`CommandContext<CommandSourceStack>`)
- `p_111281_` (`String`)

**Returns:** `public static int`

### parse

```java
public Integer parse(StringReader p_111278_)
```

**Parameters:**

- `p_111278_` (`StringReader`)

**Returns:** `public Integer`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_111288_, SuggestionsBuilder p_111289_)
```

**Parameters:**

- `p_111288_` (`CommandContext<S>`)
- `p_111289_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
