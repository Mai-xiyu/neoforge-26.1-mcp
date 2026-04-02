# ScoreHolderArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<ScoreHolderArgument.Result>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SUGGEST_SCORE_HOLDERS` | `SuggestionProvider<CommandSourceStack>` |  |

## Methods

### ScoreHolderArgument

```java
public ScoreHolderArgument(boolean p_108216_)
```

**Parameters:**

- `p_108216_` (`boolean`)

**Returns:** `public`

### getName

```java
public static ScoreHolder getName(CommandContext<CommandSourceStack> p_108224_, String p_108225_)
```

**Parameters:**

- `p_108224_` (`CommandContext<CommandSourceStack>`)
- `p_108225_` (`String`)

**Returns:** `public static ScoreHolder`

### getNames

```java
public static Collection<ScoreHolder> getNames(CommandContext<CommandSourceStack> p_108244_, String p_108245_)
```

**Parameters:**

- `p_108244_` (`CommandContext<CommandSourceStack>`)
- `p_108245_` (`String`)

**Returns:** `public static Collection<ScoreHolder>`

### getNames

```java
return getNames()
```

**Returns:** `return`

### getNamesWithDefaultWildcard

```java
public static Collection<ScoreHolder> getNamesWithDefaultWildcard(CommandContext<CommandSourceStack> p_108247_, String p_108248_)
```

**Parameters:**

- `p_108247_` (`CommandContext<CommandSourceStack>`)
- `p_108248_` (`String`)

**Returns:** `public static Collection<ScoreHolder>`

### getNames

```java
public static Collection<ScoreHolder> getNames(CommandContext<CommandSourceStack> p_108227_, String p_108228_, Supplier<Collection<ScoreHolder>> p_108229_)
```

**Parameters:**

- `p_108227_` (`CommandContext<CommandSourceStack>`)
- `p_108228_` (`String`)
- `p_108229_` (`Supplier<Collection<ScoreHolder>>`)

**Returns:** `public static Collection<ScoreHolder>`

### scoreHolder

```java
public static ScoreHolderArgument scoreHolder()
```

**Returns:** `public static ScoreHolderArgument`

### ScoreHolderArgument

```java
return new ScoreHolderArgument()
```

**Returns:** `return new`

### scoreHolders

```java
public static ScoreHolderArgument scoreHolders()
```

**Returns:** `public static ScoreHolderArgument`

### ScoreHolderArgument

```java
return new ScoreHolderArgument()
```

**Returns:** `return new`

### parse

```java
public ScoreHolderArgument.Result parse(StringReader p_108219_)
```

**Parameters:**

- `p_108219_` (`StringReader`)

**Returns:** `public ScoreHolderArgument.Result`

### parse

```java
<S> public <S> ScoreHolderArgument.Result parse(StringReader p_353125_, S p_353126_)
```

**Parameters:**

- `p_353125_` (`StringReader`)
- `p_353126_` (`S`)

**Returns:** `public <S> ScoreHolderArgument.Result`

### parse

```java
private ScoreHolderArgument.Result parse(StringReader p_353140_, boolean p_353127_)
```

**Parameters:**

- `p_353140_` (`StringReader`)
- `p_353127_` (`boolean`)

**Returns:** `private ScoreHolderArgument.Result`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(ScoreHolderArgument.Info.Template p_233469_, FriendlyByteBuf p_233470_)
```

**Parameters:**

- `p_233469_` (`ScoreHolderArgument.Info.Template`)
- `p_233470_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public ScoreHolderArgument.Info.Template deserializeFromNetwork(FriendlyByteBuf p_233480_)
```

**Parameters:**

- `p_233480_` (`FriendlyByteBuf`)

**Returns:** `public ScoreHolderArgument.Info.Template`

### serializeToJson

```java
public void serializeToJson(ScoreHolderArgument.Info.Template p_233466_, JsonObject p_233467_)
```

**Parameters:**

- `p_233466_` (`ScoreHolderArgument.Info.Template`)
- `p_233467_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public ScoreHolderArgument.Info.Template unpack(ScoreHolderArgument p_233472_)
```

**Parameters:**

- `p_233472_` (`ScoreHolderArgument`)

**Returns:** `public ScoreHolderArgument.Info.Template`

### Template

```java
 Template(boolean p_233487_)
```

**Parameters:**

- `p_233487_` (`boolean`)

**Returns:** ``

### instantiate

```java
public ScoreHolderArgument instantiate(CommandBuildContext p_233490_)
```

**Parameters:**

- `p_233490_` (`CommandBuildContext`)

**Returns:** `public ScoreHolderArgument`

### ScoreHolderArgument

```java
return new ScoreHolderArgument()
```

**Returns:** `return new`

### type

```java
public ArgumentTypeInfo<ScoreHolderArgument, ?> type()
```

**Returns:** `ArgumentTypeInfo<ScoreHolderArgument, ?>`

### getNames

```java
Collection<ScoreHolder> getNames(CommandSourceStack p_108252_, Supplier<Collection<ScoreHolder>> p_108253_)
```

**Parameters:**

- `p_108252_` (`CommandSourceStack`)
- `p_108253_` (`Supplier<Collection<ScoreHolder>>`)

**Returns:** `Collection<ScoreHolder>`

### SelectorResult

```java
public SelectorResult(EntitySelector p_108256_)
```

**Parameters:**

- `p_108256_` (`EntitySelector`)

**Returns:** `public`

### getNames

```java
public Collection<ScoreHolder> getNames(CommandSourceStack p_108258_, Supplier<Collection<ScoreHolder>> p_108259_)
```

**Parameters:**

- `p_108258_` (`CommandSourceStack`)
- `p_108259_` (`Supplier<Collection<ScoreHolder>>`)

**Returns:** `Collection<ScoreHolder>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
| `Result` | interface |  |
| `SelectorResult` | class |  |
