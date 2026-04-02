# ComponentContents

**Package:** `net.minecraft.network.chat`
**Type:** interface

## Methods

### visit

```java
<T> default <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237130_, Style p_237131_)
```

**Parameters:**

- `p_237130_` (`FormattedText.StyledContentConsumer<T>`)
- `p_237131_` (`Style`)

**Returns:** `default <T> Optional<T>`

### visit

```java
<T> default <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237129_)
```

**Parameters:**

- `p_237129_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `default <T> Optional<T>`

### resolve

```java
default MutableComponent resolve(CommandSourceStack p_237126_, Entity p_237127_, int p_237128_)
```

**Parameters:**

- `p_237126_` (`CommandSourceStack`)
- `p_237127_` (`Entity`)
- `p_237128_` (`int`)

**Returns:** `default MutableComponent`

### type

```java
ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | record |  |
