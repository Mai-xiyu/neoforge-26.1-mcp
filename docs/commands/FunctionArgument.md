# FunctionArgument

**Package:** `net.minecraft.commands.arguments.item`
**Type:** class
**Implements:** `ArgumentType<FunctionArgument.Result>`

## Methods

### functions

```java
public static FunctionArgument functions()
```

**Returns:** `public static FunctionArgument`

### FunctionArgument

```java
return new FunctionArgument()
```

**Returns:** `return new`

### parse

```java
public FunctionArgument.Result parse(StringReader p_120909_)
```

**Parameters:**

- `p_120909_` (`StringReader`)

**Returns:** `public FunctionArgument.Result`

### create

```java
public Collection<CommandFunction<CommandSourceStack>> create(CommandContext<CommandSourceStack> p_120943_)
```

**Parameters:**

- `p_120943_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Collection<CommandFunction<CommandSourceStack>>`

### unwrap

```java
public Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>> unwrap(CommandContext<CommandSourceStack> p_120945_)
```

**Parameters:**

- `p_120945_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>>`

### unwrapToCollection

```java
public Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>> unwrapToCollection(CommandContext<CommandSourceStack> p_314710_)
```

**Parameters:**

- `p_314710_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>>`

### create

```java
public Collection<CommandFunction<CommandSourceStack>> create(CommandContext<CommandSourceStack> p_120952_)
```

**Parameters:**

- `p_120952_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Collection<CommandFunction<CommandSourceStack>>`

### unwrap

```java
public Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>> unwrap(CommandContext<CommandSourceStack> p_120954_)
```

**Parameters:**

- `p_120954_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>>`

### unwrapToCollection

```java
public Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>> unwrapToCollection(CommandContext<CommandSourceStack> p_314709_)
```

**Parameters:**

- `p_314709_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>>`

### getFunction

```java
static CommandFunction<CommandSourceStack> getFunction(CommandContext<CommandSourceStack> p_120929_, ResourceLocation p_120930_)
```

**Parameters:**

- `p_120929_` (`CommandContext<CommandSourceStack>`)
- `p_120930_` (`ResourceLocation`)

**Returns:** `static CommandFunction<CommandSourceStack>`

### getFunctionTag

```java
static Collection<CommandFunction<CommandSourceStack>> getFunctionTag(CommandContext<CommandSourceStack> p_235274_, ResourceLocation p_235275_)
```

**Parameters:**

- `p_235274_` (`CommandContext<CommandSourceStack>`)
- `p_235275_` (`ResourceLocation`)

**Returns:** `static Collection<CommandFunction<CommandSourceStack>>`

### getFunctions

```java
public static Collection<CommandFunction<CommandSourceStack>> getFunctions(CommandContext<CommandSourceStack> p_120911_, String p_120912_)
```

**Parameters:**

- `p_120911_` (`CommandContext<CommandSourceStack>`)
- `p_120912_` (`String`)

**Returns:** `public static Collection<CommandFunction<CommandSourceStack>>`

### getFunctionOrTag

```java
public static Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>> getFunctionOrTag(CommandContext<CommandSourceStack> p_120921_, String p_120922_)
```

**Parameters:**

- `p_120921_` (`CommandContext<CommandSourceStack>`)
- `p_120922_` (`String`)

**Returns:** `public static Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>>`

### getFunctionCollection

```java
public static Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>> getFunctionCollection(CommandContext<CommandSourceStack> p_314719_, String p_314716_)
```

**Parameters:**

- `p_314719_` (`CommandContext<CommandSourceStack>`)
- `p_314716_` (`String`)

**Returns:** `public static Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### create

```java
Collection<CommandFunction<CommandSourceStack>> create(CommandContext<CommandSourceStack> p_120955_)
```

**Parameters:**

- `p_120955_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Collection<CommandFunction<CommandSourceStack>>`

### unwrap

```java
Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>> unwrap(CommandContext<CommandSourceStack> p_120956_)
```

**Parameters:**

- `p_120956_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Pair<ResourceLocation, Either<CommandFunction<CommandSourceStack>, Collection<CommandFunction<CommandSourceStack>>>>`

### unwrapToCollection

```java
Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>> unwrapToCollection(CommandContext<CommandSourceStack> p_314714_)
```

**Parameters:**

- `p_314714_` (`CommandContext<CommandSourceStack>`)

**Returns:** `Pair<ResourceLocation, Collection<CommandFunction<CommandSourceStack>>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Result` | interface |  |
