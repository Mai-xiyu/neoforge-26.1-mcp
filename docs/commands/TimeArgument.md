# TimeArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<Integer>`

## Methods

### TimeArgument

```java
private TimeArgument(int p_265107_)
```

**Parameters:**

- `p_265107_` (`int`)

**Returns:** `private`

### time

```java
public static TimeArgument time()
```

**Returns:** `public static TimeArgument`

### TimeArgument

```java
return new TimeArgument()
```

**Returns:** `return new`

### time

```java
public static TimeArgument time(int p_265722_)
```

**Parameters:**

- `p_265722_` (`int`)

**Returns:** `public static TimeArgument`

### TimeArgument

```java
return new TimeArgument()
```

**Returns:** `return new`

### parse

```java
public Integer parse(StringReader p_113039_)
```

**Parameters:**

- `p_113039_` (`StringReader`)

**Returns:** `public Integer`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_113044_, SuggestionsBuilder p_113045_)
```

**Parameters:**

- `p_113044_` (`CommandContext<S>`)
- `p_113045_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(TimeArgument.Info.Template p_265434_, FriendlyByteBuf p_265320_)
```

**Parameters:**

- `p_265434_` (`TimeArgument.Info.Template`)
- `p_265320_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public TimeArgument.Info.Template deserializeFromNetwork(FriendlyByteBuf p_265324_)
```

**Parameters:**

- `p_265324_` (`FriendlyByteBuf`)

**Returns:** `public TimeArgument.Info.Template`

### serializeToJson

```java
public void serializeToJson(TimeArgument.Info.Template p_265110_, JsonObject p_265629_)
```

**Parameters:**

- `p_265110_` (`TimeArgument.Info.Template`)
- `p_265629_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public TimeArgument.Info.Template unpack(TimeArgument p_265544_)
```

**Parameters:**

- `p_265544_` (`TimeArgument`)

**Returns:** `public TimeArgument.Info.Template`

### Template

```java
 Template(int p_265096_)
```

**Parameters:**

- `p_265096_` (`int`)

**Returns:** ``

### instantiate

```java
public TimeArgument instantiate(CommandBuildContext p_265466_)
```

**Parameters:**

- `p_265466_` (`CommandBuildContext`)

**Returns:** `public TimeArgument`

### type

```java
public ArgumentTypeInfo<TimeArgument, ?> type()
```

**Returns:** `ArgumentTypeInfo<TimeArgument, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
