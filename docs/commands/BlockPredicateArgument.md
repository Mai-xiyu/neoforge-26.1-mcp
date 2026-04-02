# BlockPredicateArgument

**Package:** `net.minecraft.commands.arguments.blocks`
**Type:** class
**Implements:** `ArgumentType<BlockPredicateArgument.Result>`

## Methods

### BlockPredicateArgument

```java
public BlockPredicateArgument(CommandBuildContext p_234626_)
```

**Parameters:**

- `p_234626_` (`CommandBuildContext`)

**Returns:** `public`

### blockPredicate

```java
public static BlockPredicateArgument blockPredicate(CommandBuildContext p_234628_)
```

**Parameters:**

- `p_234628_` (`CommandBuildContext`)

**Returns:** `public static BlockPredicateArgument`

### BlockPredicateArgument

```java
return new BlockPredicateArgument()
```

**Returns:** `return new`

### parse

```java
public BlockPredicateArgument.Result parse(StringReader p_115572_)
```

**Parameters:**

- `p_115572_` (`StringReader`)

**Returns:** `public BlockPredicateArgument.Result`

### parse

```java
return parse()
```

**Returns:** `return`

### parse

```java
public static BlockPredicateArgument.Result parse(HolderLookup<Block> p_234634_, StringReader p_234635_)
```

**Parameters:**

- `p_234634_` (`HolderLookup<Block>`)
- `p_234635_` (`StringReader`)

**Returns:** `public static BlockPredicateArgument.Result`

### getBlockPredicate

```java
public static Predicate<BlockInWorld> getBlockPredicate(CommandContext<CommandSourceStack> p_115574_, String p_115575_)
```

**Parameters:**

- `p_115574_` (`CommandContext<CommandSourceStack>`)
- `p_115575_` (`String`)

**Returns:** `public static Predicate<BlockInWorld>`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_115587_, SuggestionsBuilder p_115588_)
```

**Parameters:**

- `p_115587_` (`CommandContext<S>`)
- `p_115588_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### BlockPredicate

```java
public BlockPredicate(BlockState p_115595_, Set<Property<?>> p_115596_, CompoundTag p_115597_)
```

**Parameters:**

- `p_115595_` (`BlockState`)
- `p_115596_` (`Set<Property<?>>`)
- `p_115597_` (`CompoundTag`)

**Returns:** `public`

### test

```java
public boolean test(BlockInWorld p_115599_)
```

**Parameters:**

- `p_115599_` (`BlockInWorld`)

**Returns:** `public boolean`

### requiresNbt

```java
public boolean requiresNbt()
```

**Returns:** `boolean`

### requiresNbt

```java
boolean requiresNbt()
```

**Returns:** `boolean`

### TagPredicate

```java
 TagPredicate(HolderSet<Block> p_234637_, Map<String, String> p_234638_, CompoundTag p_234639_)
```

**Parameters:**

- `p_234637_` (`HolderSet<Block>`)
- `p_234638_` (`Map<String, String>`)
- `p_234639_` (`CompoundTag`)

**Returns:** ``

### test

```java
public boolean test(BlockInWorld p_115617_)
```

**Parameters:**

- `p_115617_` (`BlockInWorld`)

**Returns:** `public boolean`

### requiresNbt

```java
public boolean requiresNbt()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Result` | interface |  |
