# StringRepresentableArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class<T extends Enum<T> & StringRepresentable> implements ArgumentType<T>

## Methods

### StringRepresentableArgument

```java
protected StringRepresentableArgument(Codec<T> p_234060_, Supplier<T[]> p_234061_)
```

**Parameters:**

- `p_234060_` (`Codec<T>`)
- `p_234061_` (`Supplier<T[]>`)

**Returns:** `protected`

### parse

```java
public T parse(StringReader p_234063_)
```

**Parameters:**

- `p_234063_` (`StringReader`)

**Returns:** `public T`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_234074_, SuggestionsBuilder p_234075_)
```

**Parameters:**

- `p_234074_` (`CommandContext<S>`)
- `p_234075_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### convertId

```java
protected String convertId(String p_275436_)
```

**Parameters:**

- `p_275436_` (`String`)

**Returns:** `protected String`
