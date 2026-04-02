# DimensionArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<ResourceLocation>`

## Methods

### parse

```java
public ResourceLocation parse(StringReader p_88807_)
```

**Parameters:**

- `p_88807_` (`StringReader`)

**Returns:** `public ResourceLocation`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_88817_, SuggestionsBuilder p_88818_)
```

**Parameters:**

- `p_88817_` (`CommandContext<S>`)
- `p_88818_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### dimension

```java
public static DimensionArgument dimension()
```

**Returns:** `public static DimensionArgument`

### DimensionArgument

```java
return new DimensionArgument()
```

**Returns:** `return new`

### getDimension

```java
public static ServerLevel getDimension(CommandContext<CommandSourceStack> p_88809_, String p_88810_)
```

**Parameters:**

- `p_88809_` (`CommandContext<CommandSourceStack>`)
- `p_88810_` (`String`)

**Returns:** `public static ServerLevel`
