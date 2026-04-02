# PlainTextContents

**Package:** `net.minecraft.network.chat.contents`
**Type:** interface
**Extends:** `ComponentContents`

## Methods

### toString

```java
public String toString()
```

**Returns:** `String`

### text

```java
public String text()
```

**Returns:** `String`

### create

```java
static PlainTextContents create(String p_304441_)
```

**Parameters:**

- `p_304441_` (`String`)

**Returns:** `static PlainTextContents`

### text

```java
String text()
```

**Returns:** `String`

### type

```java
default ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_304816_)
```

**Parameters:**

- `p_304816_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_304890_, Style p_304907_)
```

**Parameters:**

- `p_304890_` (`FormattedText.StyledContentConsumer<T>`)
- `p_304907_` (`Style`)

**Returns:** `Optional<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LiteralContents` | record |  |
