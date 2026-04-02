# GameProfileArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<GameProfileArgument.Result>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_UNKNOWN_PLAYER` | `SimpleCommandExceptionType` |  |

## Methods

### getGameProfiles

```java
public static Collection<GameProfile> getGameProfiles(CommandContext<CommandSourceStack> p_94591_, String p_94592_)
```

**Parameters:**

- `p_94591_` (`CommandContext<CommandSourceStack>`)
- `p_94592_` (`String`)

**Returns:** `public static Collection<GameProfile>`

### gameProfile

```java
public static GameProfileArgument gameProfile()
```

**Returns:** `public static GameProfileArgument`

### GameProfileArgument

```java
return new GameProfileArgument()
```

**Returns:** `return new`

### parse

```java
<S> public <S> GameProfileArgument.Result parse(StringReader p_353130_, S p_353124_)
```

**Parameters:**

- `p_353130_` (`StringReader`)
- `p_353124_` (`S`)

**Returns:** `public <S> GameProfileArgument.Result`

### parse

```java
public GameProfileArgument.Result parse(StringReader p_94586_)
```

**Parameters:**

- `p_94586_` (`StringReader`)

**Returns:** `public GameProfileArgument.Result`

### parse

```java
return parse()
```

**Returns:** `return`

### parse

```java
private static GameProfileArgument.Result parse(StringReader p_353133_, boolean p_353139_)
```

**Parameters:**

- `p_353133_` (`StringReader`)
- `p_353139_` (`boolean`)

**Returns:** `private static GameProfileArgument.Result`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_94598_, SuggestionsBuilder p_94599_)
```

**Parameters:**

- `p_94598_` (`CommandContext<S>`)
- `p_94599_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### getNames

```java
Collection<GameProfile> getNames(CommandSourceStack p_94602_)
```

**Parameters:**

- `p_94602_` (`CommandSourceStack`)

**Returns:** `Collection<GameProfile>`

### SelectorResult

```java
public SelectorResult(EntitySelector p_94605_)
```

**Parameters:**

- `p_94605_` (`EntitySelector`)

**Returns:** `public`

### getNames

```java
public Collection<GameProfile> getNames(CommandSourceStack p_94607_)
```

**Parameters:**

- `p_94607_` (`CommandSourceStack`)

**Returns:** `Collection<GameProfile>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Result` | interface |  |
| `SelectorResult` | class |  |
