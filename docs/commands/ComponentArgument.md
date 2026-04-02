# ComponentArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<Component>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_INVALID_JSON` | `DynamicCommandExceptionType` |  |

## Methods

### ComponentArgument

```java
private ComponentArgument(HolderLookup.Provider p_323707_)
```

**Parameters:**

- `p_323707_` (`HolderLookup.Provider`)

**Returns:** `private`

### getComponent

```java
public static Component getComponent(CommandContext<CommandSourceStack> p_87118_, String p_87119_)
```

**Parameters:**

- `p_87118_` (`CommandContext<CommandSourceStack>`)
- `p_87119_` (`String`)

**Returns:** `public static Component`

### textComponent

```java
public static ComponentArgument textComponent(CommandBuildContext p_324401_)
```

**Parameters:**

- `p_324401_` (`CommandBuildContext`)

**Returns:** `public static ComponentArgument`

### ComponentArgument

```java
return new ComponentArgument()
```

**Returns:** `return new`

### parse

```java
public Component parse(StringReader p_87116_)
```

**Parameters:**

- `p_87116_` (`StringReader`)

**Returns:** `public Component`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
