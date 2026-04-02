# SlotsArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<SlotRange>`

## Methods

### slots

```java
public static SlotsArgument slots()
```

**Returns:** `public static SlotsArgument`

### SlotsArgument

```java
return new SlotsArgument()
```

**Returns:** `return new`

### getSlots

```java
public static SlotRange getSlots(CommandContext<CommandSourceStack> p_332720_, String p_332685_)
```

**Parameters:**

- `p_332720_` (`CommandContext<CommandSourceStack>`)
- `p_332685_` (`String`)

**Returns:** `public static SlotRange`

### parse

```java
public SlotRange parse(StringReader p_332649_)
```

**Parameters:**

- `p_332649_` (`StringReader`)

**Returns:** `public SlotRange`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_332783_, SuggestionsBuilder p_332759_)
```

**Parameters:**

- `p_332783_` (`CommandContext<S>`)
- `p_332759_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
