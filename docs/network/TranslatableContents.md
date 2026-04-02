# TranslatableContents

**Package:** `net.minecraft.network.chat.contents`
**Type:** class
**Implements:** `ComponentContents`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_ARGS` | `Object[]` |  |
| `CODEC` | `MapCodec<TranslatableContents>` |  |
| `TYPE` | `ComponentContents.Type<TranslatableContents>` |  |

## Methods

### filterAllowedArguments

```java
private static DataResult<Object> filterAllowedArguments(Object p_304727_)
```

**Parameters:**

- `p_304727_` (`Object`)

**Returns:** `private static DataResult<Object>`

### isAllowedPrimitiveArgument

```java
public static boolean isAllowedPrimitiveArgument(Object p_304690_)
```

**Parameters:**

- `p_304690_` (`Object`)

**Returns:** `public static boolean`

### adjustArgs

```java
private static Optional<List<Object>> adjustArgs(Object[] p_304743_)
```

**Parameters:**

- `p_304743_` (`Object[]`)

**Returns:** `private static Optional<List<Object>>`

### adjustArgs

```java
private static Object[] adjustArgs(Optional<List<Object>> p_304744_)
```

**Parameters:**

- `p_304744_` (`Optional<List<Object>>`)

**Returns:** `private static Object[]`

### create

```java
private static TranslatableContents create(String p_304502_, Optional<String> p_304440_, Optional<List<Object>> p_304710_)
```

**Parameters:**

- `p_304502_` (`String`)
- `p_304440_` (`Optional<String>`)
- `p_304710_` (`Optional<List<Object>>`)

**Returns:** `private static TranslatableContents`

### TranslatableContents

```java
public TranslatableContents(String p_265775_, String p_265204_, Object[] p_265752_)
```

**Parameters:**

- `p_265775_` (`String`)
- `p_265204_` (`String`)
- `p_265752_` (`Object[]`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("TranslatableContents' arguments must be either a Component, or a String. Was given " + arg + " for " + this.key)
```

**Parameters:**

- `Component` (`"TranslatableContents' arguments must be either a`)
- `this.key` (`or a String. Was given " + arg + " for " +`)

**Returns:** `throw new`

### type

```java
public ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`

### decompose

```java
private void decompose()
```

**Returns:** `private void`

### decomposeTemplate

```java
private void decomposeTemplate(String p_237516_, Consumer<FormattedText> p_237517_)
```

**Parameters:**

- `p_237516_` (`String`)
- `p_237517_` (`Consumer<FormattedText>`)

**Returns:** `private void`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### TranslatableFormatException

```java
throw new TranslatableFormatException("Unsupported format: '" + s1 + "'")
```

**Parameters:**

- `"'"` (`"Unsupported format: '" + s1 +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### TranslatableFormatException

```java
throw new TranslatableFormatException()
```

**Returns:** `throw new`

### getArgument

```java
private FormattedText getArgument(int p_237510_)
```

**Parameters:**

- `p_237510_` (`int`)

**Returns:** `private FormattedText`

### TranslatableFormatException

```java
throw new TranslatableFormatException()
```

**Returns:** `throw new`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237521_, Style p_237522_)
```

**Parameters:**

- `p_237521_` (`FormattedText.StyledContentConsumer<T>`)
- `p_237522_` (`Style`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237519_)
```

**Parameters:**

- `p_237519_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### resolve

```java
public MutableComponent resolve(CommandSourceStack p_237512_, Entity p_237513_, int p_237514_)
```

**Parameters:**

- `p_237512_` (`CommandSourceStack`)
- `p_237513_` (`Entity`)
- `p_237514_` (`int`)

**Returns:** `MutableComponent`

### equals

```java
public boolean equals(Object p_237526_)
```

**Parameters:**

- `p_237526_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### getKey

```java
public String getKey()
```

**Returns:** `public String`

### getFallback

```java
public String getFallback()
```

**Returns:** `String`

### getArgs

```java
public Object[] getArgs()
```

**Returns:** `public Object[]`
