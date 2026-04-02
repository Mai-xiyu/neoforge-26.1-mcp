# ObjectiveCriteriaArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<ObjectiveCriteria>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_INVALID_VALUE` | `DynamicCommandExceptionType` |  |

## Methods

### ObjectiveCriteriaArgument

```java
private ObjectiveCriteriaArgument()
```

**Returns:** `private`

### criteria

```java
public static ObjectiveCriteriaArgument criteria()
```

**Returns:** `public static ObjectiveCriteriaArgument`

### ObjectiveCriteriaArgument

```java
return new ObjectiveCriteriaArgument()
```

**Returns:** `return new`

### getCriteria

```java
public static ObjectiveCriteria getCriteria(CommandContext<CommandSourceStack> p_102566_, String p_102567_)
```

**Parameters:**

- `p_102566_` (`CommandContext<CommandSourceStack>`)
- `p_102567_` (`String`)

**Returns:** `public static ObjectiveCriteria`

### parse

```java
public ObjectiveCriteria parse(StringReader p_102560_)
```

**Parameters:**

- `p_102560_` (`StringReader`)

**Returns:** `public ObjectiveCriteria`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_102572_, SuggestionsBuilder p_102573_)
```

**Parameters:**

- `p_102572_` (`CommandContext<S>`)
- `p_102573_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getName

```java
<T> public <T> String getName(StatType<T> p_102557_, Object p_102558_)
```

**Parameters:**

- `p_102557_` (`StatType<T>`)
- `p_102558_` (`Object`)

**Returns:** `public <T> String`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
