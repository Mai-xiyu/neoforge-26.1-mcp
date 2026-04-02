# AngleArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<AngleArgument.SingleAngle>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_COMPLETE` | `SimpleCommandExceptionType` |  |
| `ERROR_INVALID_ANGLE` | `SimpleCommandExceptionType` |  |

## Methods

### angle

```java
public static AngleArgument angle()
```

**Returns:** `public static AngleArgument`

### AngleArgument

```java
return new AngleArgument()
```

**Returns:** `return new`

### getAngle

```java
public static float getAngle(CommandContext<CommandSourceStack> p_83811_, String p_83812_)
```

**Parameters:**

- `p_83811_` (`CommandContext<CommandSourceStack>`)
- `p_83812_` (`String`)

**Returns:** `public static float`

### parse

```java
public AngleArgument.SingleAngle parse(StringReader p_83809_)
```

**Parameters:**

- `p_83809_` (`StringReader`)

**Returns:** `public AngleArgument.SingleAngle`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### SingleAngle

```java
 SingleAngle(float p_83819_, boolean p_83820_)
```

**Parameters:**

- `p_83819_` (`float`)
- `p_83820_` (`boolean`)

**Returns:** ``

### getAngle

```java
public float getAngle(CommandSourceStack p_83826_)
```

**Parameters:**

- `p_83826_` (`CommandSourceStack`)

**Returns:** `public float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SingleAngle` | class |  |
