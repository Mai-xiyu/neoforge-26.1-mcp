# StyleArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<Style>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_INVALID_JSON` | `DynamicCommandExceptionType` |  |

## Methods

### StyleArgument

```java
private StyleArgument(HolderLookup.Provider p_324376_)
```

**Parameters:**

- `p_324376_` (`HolderLookup.Provider`)

**Returns:** `private`

### getStyle

```java
public static Style getStyle(CommandContext<CommandSourceStack> p_313889_, String p_313891_)
```

**Parameters:**

- `p_313889_` (`CommandContext<CommandSourceStack>`)
- `p_313891_` (`String`)

**Returns:** `public static Style`

### style

```java
public static StyleArgument style(CommandBuildContext p_324578_)
```

**Parameters:**

- `p_324578_` (`CommandBuildContext`)

**Returns:** `public static StyleArgument`

### StyleArgument

```java
return new StyleArgument()
```

**Returns:** `return new`

### parse

```java
public Style parse(StringReader p_313833_)
```

**Parameters:**

- `p_313833_` (`StringReader`)

**Returns:** `public Style`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
