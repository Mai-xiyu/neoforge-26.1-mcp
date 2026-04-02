# BlockPosArgument

**Package:** `net.minecraft.commands.arguments.coordinates`
**Type:** class
**Implements:** `ArgumentType<Coordinates>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_LOADED` | `SimpleCommandExceptionType` |  |
| `ERROR_OUT_OF_WORLD` | `SimpleCommandExceptionType` |  |
| `ERROR_OUT_OF_BOUNDS` | `SimpleCommandExceptionType` |  |

## Methods

### blockPos

```java
public static BlockPosArgument blockPos()
```

**Returns:** `public static BlockPosArgument`

### BlockPosArgument

```java
return new BlockPosArgument()
```

**Returns:** `return new`

### getLoadedBlockPos

```java
public static BlockPos getLoadedBlockPos(CommandContext<CommandSourceStack> p_118243_, String p_118244_)
```

**Parameters:**

- `p_118243_` (`CommandContext<CommandSourceStack>`)
- `p_118244_` (`String`)

**Returns:** `public static BlockPos`

### getLoadedBlockPos

```java
return getLoadedBlockPos()
```

**Returns:** `return`

### getLoadedBlockPos

```java
public static BlockPos getLoadedBlockPos(CommandContext<CommandSourceStack> p_265283_, ServerLevel p_265219_, String p_265677_)
```

**Parameters:**

- `p_265283_` (`CommandContext<CommandSourceStack>`)
- `p_265219_` (`ServerLevel`)
- `p_265677_` (`String`)

**Returns:** `public static BlockPos`

### getBlockPos

```java
public static BlockPos getBlockPos(CommandContext<CommandSourceStack> p_265651_, String p_265039_)
```

**Parameters:**

- `p_265651_` (`CommandContext<CommandSourceStack>`)
- `p_265039_` (`String`)

**Returns:** `public static BlockPos`

### getSpawnablePos

```java
public static BlockPos getSpawnablePos(CommandContext<CommandSourceStack> p_174396_, String p_174397_)
```

**Parameters:**

- `p_174396_` (`CommandContext<CommandSourceStack>`)
- `p_174397_` (`String`)

**Returns:** `public static BlockPos`

### parse

```java
public Coordinates parse(StringReader p_118241_)
```

**Parameters:**

- `p_118241_` (`StringReader`)

**Returns:** `public Coordinates`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_118250_, SuggestionsBuilder p_118251_)
```

**Parameters:**

- `p_118250_` (`CommandContext<S>`)
- `p_118251_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
