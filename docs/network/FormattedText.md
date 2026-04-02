# FormattedText

**Package:** `net.minecraft.network.chat`
**Type:** interface

## Methods

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130779_)
```

**Parameters:**

- `p_130779_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130781_, Style p_130782_)
```

**Parameters:**

- `p_130781_` (`FormattedText.StyledContentConsumer<T>`)
- `p_130782_` (`Style`)

**Returns:** `Optional<T>`

### visit

```java
<T> <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130770_)
```

**Parameters:**

- `p_130770_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `<T> Optional<T>`

### visit

```java
<T> <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130771_, Style p_130772_)
```

**Parameters:**

- `p_130771_` (`FormattedText.StyledContentConsumer<T>`)
- `p_130772_` (`Style`)

**Returns:** `<T> Optional<T>`

### of

```java
static FormattedText of(String p_130776_)
```

**Parameters:**

- `p_130776_` (`String`)

**Returns:** `static FormattedText`

### FormattedText

```java
return new FormattedText()
```

**Returns:** `return new`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130787_)
```

**Parameters:**

- `p_130787_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130789_, Style p_130790_)
```

**Parameters:**

- `p_130789_` (`FormattedText.StyledContentConsumer<T>`)
- `p_130790_` (`Style`)

**Returns:** `Optional<T>`

### of

```java
static FormattedText of(String p_130763_, Style p_130764_)
```

**Parameters:**

- `p_130763_` (`String`)
- `p_130764_` (`Style`)

**Returns:** `static FormattedText`

### FormattedText

```java
return new FormattedText()
```

**Returns:** `return new`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130797_)
```

**Parameters:**

- `p_130797_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130799_, Style p_130800_)
```

**Parameters:**

- `p_130799_` (`FormattedText.StyledContentConsumer<T>`)
- `p_130800_` (`Style`)

**Returns:** `Optional<T>`

### composite

```java
static FormattedText composite(FormattedText[]... p_130774_)
```

**Parameters:**

- `p_130774_` (`FormattedText[]...`)

**Returns:** `static FormattedText`

### composite

```java
static FormattedText composite(List<? extends FormattedText> p_130769_)
```

**Parameters:**

- `p_130769_` (`List<? extends FormattedText>`)

**Returns:** `static FormattedText`

### FormattedText

```java
return new FormattedText()
```

**Returns:** `return new`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130805_)
```

**Parameters:**

- `p_130805_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130807_, Style p_130808_)
```

**Parameters:**

- `p_130807_` (`FormattedText.StyledContentConsumer<T>`)
- `p_130808_` (`Style`)

**Returns:** `Optional<T>`

### getString

```java
default String getString()
```

**Returns:** `default String`

### accept

```java
Optional<T> accept(String p_130810_)
```

**Parameters:**

- `p_130810_` (`String`)

**Returns:** `Optional<T>`

### accept

```java
Optional<T> accept(Style p_130811_, String p_130812_)
```

**Parameters:**

- `p_130811_` (`Style`)
- `p_130812_` (`String`)

**Returns:** `Optional<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ContentConsumer` | interface |  |
| `StyledContentConsumer` | interface |  |
