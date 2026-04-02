# ResourceOrIdArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class<T> implements ArgumentType<Holder<T>>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_FAILED_TO_PARSE` | `DynamicCommandExceptionType` |  |

## Methods

### ResourceOrIdArgument

```java
protected ResourceOrIdArgument(CommandBuildContext p_335864_, ResourceKey<Registry<T>> p_335475_, Codec<Holder<T>> p_335632_)
```

**Parameters:**

- `p_335864_` (`CommandBuildContext`)
- `p_335475_` (`ResourceKey<Registry<T>>`)
- `p_335632_` (`Codec<Holder<T>>`)

**Returns:** `protected`

### lootTable

```java
public static ResourceOrIdArgument.LootTableArgument lootTable(CommandBuildContext p_335938_)
```

**Parameters:**

- `p_335938_` (`CommandBuildContext`)

**Returns:** `public static ResourceOrIdArgument.LootTableArgument`

### getLootTable

```java
public static Holder<LootTable> getLootTable(CommandContext<CommandSourceStack> p_335373_, String p_336017_)
```

**Parameters:**

- `p_335373_` (`CommandContext<CommandSourceStack>`)
- `p_336017_` (`String`)

**Returns:** `public static Holder<LootTable>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### lootModifier

```java
public static ResourceOrIdArgument.LootModifierArgument lootModifier(CommandBuildContext p_335731_)
```

**Parameters:**

- `p_335731_` (`CommandBuildContext`)

**Returns:** `public static ResourceOrIdArgument.LootModifierArgument`

### getLootModifier

```java
public static Holder<LootItemFunction> getLootModifier(CommandContext<CommandSourceStack> p_335678_, String p_336178_)
```

**Parameters:**

- `p_335678_` (`CommandContext<CommandSourceStack>`)
- `p_336178_` (`String`)

**Returns:** `public static Holder<LootItemFunction>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### lootPredicate

```java
public static ResourceOrIdArgument.LootPredicateArgument lootPredicate(CommandBuildContext p_335891_)
```

**Parameters:**

- `p_335891_` (`CommandBuildContext`)

**Returns:** `public static ResourceOrIdArgument.LootPredicateArgument`

### getLootPredicate

```java
public static Holder<LootItemCondition> getLootPredicate(CommandContext<CommandSourceStack> p_336183_, String p_336098_)
```

**Parameters:**

- `p_336183_` (`CommandContext<CommandSourceStack>`)
- `p_336098_` (`String`)

**Returns:** `public static Holder<LootItemCondition>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getResource

```java
<T> private static <T> Holder<T> getResource(CommandContext<CommandSourceStack> p_336122_, String p_335417_)
```

**Parameters:**

- `p_336122_` (`CommandContext<CommandSourceStack>`)
- `p_335417_` (`String`)

**Returns:** `private static <T> Holder<T>`

### parse

```java
public Holder<T> parse(StringReader p_335906_)
```

**Parameters:**

- `p_335906_` (`StringReader`)

**Returns:** `Holder<T>`

### parseInlineOrId

```java
static Tag parseInlineOrId(StringReader p_335947_)
```

**Parameters:**

- `p_335947_` (`StringReader`)

**Returns:** `Tag`

### hasConsumedWholeArg

```java
private static boolean hasConsumedWholeArg(StringReader p_335624_)
```

**Parameters:**

- `p_335624_` (`StringReader`)

**Returns:** `private static boolean`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### LootModifierArgument

```java
protected LootModifierArgument(CommandBuildContext p_335547_)
```

**Parameters:**

- `p_335547_` (`CommandBuildContext`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### LootPredicateArgument

```java
protected LootPredicateArgument(CommandBuildContext p_336020_)
```

**Parameters:**

- `p_336020_` (`CommandBuildContext`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### LootTableArgument

```java
protected LootTableArgument(CommandBuildContext p_335769_)
```

**Parameters:**

- `p_335769_` (`CommandBuildContext`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LootModifierArgument` | class |  |
| `LootPredicateArgument` | class |  |
| `LootTableArgument` | class |  |
