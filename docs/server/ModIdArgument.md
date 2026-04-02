# ModIdArgument

**Package:** `net.neoforged.neoforge.server.command`
**Type:** class
**Implements:** `ArgumentType<String>`
**Side:** 🖧 Server

## Methods

### modIdArgument

```java
public static ModIdArgument modIdArgument()
```

**Returns:** `public static ModIdArgument`

### ModIdArgument

```java
return new ModIdArgument()
```

**Returns:** `return new`

### parse

```java
public String parse(StringReader reader)
```

**Parameters:**

- `reader` (`StringReader`)

**Returns:** `String`

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
