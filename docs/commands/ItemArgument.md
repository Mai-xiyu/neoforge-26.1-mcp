# ItemArgument

**Package:** `net.minecraft.commands.arguments.item`
**Type:** class
**Implements:** `ArgumentType<ItemInput>`

## Methods

### ItemArgument

```java
public ItemArgument(CommandBuildContext p_235278_)
```

**Parameters:**

- `p_235278_` (`CommandBuildContext`)

**Returns:** `public`

### item

```java
public static ItemArgument item(CommandBuildContext p_235280_)
```

**Parameters:**

- `p_235280_` (`CommandBuildContext`)

**Returns:** `public static ItemArgument`

### ItemArgument

```java
return new ItemArgument()
```

**Returns:** `return new`

### parse

```java
public ItemInput parse(StringReader p_120962_)
```

**Parameters:**

- `p_120962_` (`StringReader`)

**Returns:** `public ItemInput`

### getItem

```java
<S> public static <S> ItemInput getItem(CommandContext<S> p_120964_, String p_120965_)
```

**Parameters:**

- `p_120964_` (`CommandContext<S>`)
- `p_120965_` (`String`)

**Returns:** `public static <S> ItemInput`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_120968_, SuggestionsBuilder p_120969_)
```

**Parameters:**

- `p_120968_` (`CommandContext<S>`)
- `p_120969_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
