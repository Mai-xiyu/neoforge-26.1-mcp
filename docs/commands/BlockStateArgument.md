# BlockStateArgument

**Package:** `net.minecraft.commands.arguments.blocks`
**Type:** class
**Implements:** `ArgumentType<BlockInput>`

## Methods

### BlockStateArgument

```java
public BlockStateArgument(CommandBuildContext p_234649_)
```

**Parameters:**

- `p_234649_` (`CommandBuildContext`)

**Returns:** `public`

### block

```java
public static BlockStateArgument block(CommandBuildContext p_234651_)
```

**Parameters:**

- `p_234651_` (`CommandBuildContext`)

**Returns:** `public static BlockStateArgument`

### BlockStateArgument

```java
return new BlockStateArgument()
```

**Returns:** `return new`

### parse

```java
public BlockInput parse(StringReader p_116122_)
```

**Parameters:**

- `p_116122_` (`StringReader`)

**Returns:** `public BlockInput`

### getBlock

```java
public static BlockInput getBlock(CommandContext<CommandSourceStack> p_116124_, String p_116125_)
```

**Parameters:**

- `p_116124_` (`CommandContext<CommandSourceStack>`)
- `p_116125_` (`String`)

**Returns:** `public static BlockInput`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_116128_, SuggestionsBuilder p_116129_)
```

**Parameters:**

- `p_116128_` (`CommandContext<S>`)
- `p_116129_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
