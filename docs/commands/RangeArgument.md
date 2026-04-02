# RangeArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** interface<T extends MinMaxBounds<?>> extends ArgumentType<T>

## Methods

### intRange

```java
static RangeArgument.Ints intRange()
```

**Returns:** `static RangeArgument.Ints`

### floatRange

```java
static RangeArgument.Floats floatRange()
```

**Returns:** `static RangeArgument.Floats`

### getRange

```java
public static MinMaxBounds.Doubles getRange(CommandContext<CommandSourceStack> p_170805_, String p_170806_)
```

**Parameters:**

- `p_170805_` (`CommandContext<CommandSourceStack>`)
- `p_170806_` (`String`)

**Returns:** `public static MinMaxBounds.Doubles`

### parse

```java
public MinMaxBounds.Doubles parse(StringReader p_170803_)
```

**Parameters:**

- `p_170803_` (`StringReader`)

**Returns:** `public MinMaxBounds.Doubles`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### getRange

```java
public static MinMaxBounds.Ints getRange(CommandContext<CommandSourceStack> p_105420_, String p_105421_)
```

**Parameters:**

- `p_105420_` (`CommandContext<CommandSourceStack>`)
- `p_105421_` (`String`)

**Returns:** `public static MinMaxBounds.Ints`

### parse

```java
public MinMaxBounds.Ints parse(StringReader p_105418_)
```

**Parameters:**

- `p_105418_` (`StringReader`)

**Returns:** `public MinMaxBounds.Ints`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Floats` | class |  |
| `Ints` | class |  |
