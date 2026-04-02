# CommandFunction

**Package:** `net.minecraft.commands.functions`
**Type:** interface<T>

## Methods

### id

```java
ResourceLocation id()
```

**Returns:** `ResourceLocation`

### instantiate

```java
InstantiatedFunction<T> instantiate(CompoundTag p_306231_, CommandDispatcher<T> p_305923_)
```

**Parameters:**

- `p_306231_` (`CompoundTag`)
- `p_305923_` (`CommandDispatcher<T>`)

**Returns:** `InstantiatedFunction<T>`

### shouldConcatenateNextLine

```java
private static boolean shouldConcatenateNextLine(CharSequence p_306338_)
```

**Parameters:**

- `p_306338_` (`CharSequence`)

**Returns:** `private static boolean`

### fromLines

```java
static <T extends ExecutionCommandSource<T>> CommandFunction<T> fromLines(ResourceLocation p_306082_, CommandDispatcher<T> p_306046_, T p_305973_, List<String> p_306307_)
```

**Parameters:**

- `p_306082_` (`ResourceLocation`)
- `p_306046_` (`CommandDispatcher<T>`)
- `p_305973_` (`T`)
- `p_306307_` (`List<String>`)

**Returns:** `static <T extends ExecutionCommandSource<T>> CommandFunction<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Line continuation at end of file")
```

**Parameters:**

- `file"` (`"Line continuation at end of`)

**Returns:** `throw new`

### checkCommandLineLength

```java
 checkCommandLineLength()
```

**Returns:** ``

### checkCommandLineLength

```java
 checkCommandLineLength()
```

**Returns:** ``

### checkCommandLineLength

```java
static void checkCommandLineLength(CharSequence p_326091_)
```

**Parameters:**

- `p_326091_` (`CharSequence`)

**Returns:** `static void`

### parseCommand

```java
static <T extends ExecutionCommandSource<T>> UnboundEntryAction<T> parseCommand(CommandDispatcher<T> p_306213_, T p_305785_, StringReader p_306140_)
```

**Parameters:**

- `p_306213_` (`CommandDispatcher<T>`)
- `p_305785_` (`T`)
- `p_306140_` (`StringReader`)

**Returns:** `static <T extends ExecutionCommandSource<T>> UnboundEntryAction<T>`
