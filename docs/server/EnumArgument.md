# EnumArgument

**Package:** `net.neoforged.neoforge.server.command`
**Type:** class<T extends Enum<T>> implements ArgumentType<T>
**Side:** 🖧 Server

## Methods

### enumArgument

```java
public static <R extends Enum<R>> EnumArgument<R> enumArgument(Class<R> enumClass)
```

**Parameters:**

- `enumClass` (`Class<R>`)

**Returns:** `public static <R extends Enum<R>> EnumArgument<R>`

### EnumArgument

```java
private EnumArgument(Class<T> enumClass)
```

**Parameters:**

- `enumClass` (`Class<T>`)

**Returns:** `private`

### parse

```java
public T parse(StringReader reader)
```

**Parameters:**

- `reader` (`StringReader`)

**Returns:** `T`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> context, SuggestionsBuilder builder)
```

**Parameters:**

- `context` (`CommandContext<S>`)
- `builder` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(Template template, FriendlyByteBuf buffer)
```

**Parameters:**

- `template` (`Template`)
- `buffer` (`FriendlyByteBuf`)

### deserializeFromNetwork

```java
public Template deserializeFromNetwork(FriendlyByteBuf buffer)
```

**Parameters:**

- `buffer` (`FriendlyByteBuf`)

**Returns:** `Template`

### serializeToJson

```java
public void serializeToJson(Template template, JsonObject json)
```

**Parameters:**

- `template` (`Template`)
- `json` (`JsonObject`)

### unpack

```java
public Template unpack(EnumArgument<T> argument)
```

**Parameters:**

- `argument` (`EnumArgument<T>`)

**Returns:** `Template`

### Template

```java
return new Template()
```

**Returns:** `return new`

### Template

```java
 Template(Class<T> enumClass)
```

**Parameters:**

- `enumClass` (`Class<T>`)

**Returns:** ``

### instantiate

```java
public EnumArgument<T> instantiate(CommandBuildContext p_223435_)
```

**Parameters:**

- `p_223435_` (`CommandBuildContext`)

**Returns:** `EnumArgument<T>`

### type

```java
public ArgumentTypeInfo<EnumArgument<T>, ?> type()
```

**Returns:** `ArgumentTypeInfo<EnumArgument<T>, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
