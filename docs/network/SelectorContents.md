# SelectorContents

**Package:** `net.minecraft.network.chat.contents`
**Type:** class
**Implements:** `ComponentContents`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SelectorContents>` |  |
| `TYPE` | `ComponentContents.Type<SelectorContents>` |  |
| `separator` | `Optional<Component>` |  |

## Methods

### SelectorContents

```java
public SelectorContents(String p_237464_, Optional<Component> p_237465_)
```

**Parameters:**

- `p_237464_` (`String`)
- `p_237465_` (`Optional<Component>`)

**Returns:** `public`

### type

```java
public ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`

### getPattern

```java
public String getPattern()
```

**Returns:** `public String`

### getSelector

```java
public EntitySelector getSelector()
```

**Returns:** `EntitySelector`

### getSeparator

```java
public Optional<Component> getSeparator()
```

**Returns:** `public Optional<Component>`

### resolve

```java
public MutableComponent resolve(CommandSourceStack p_237468_, Entity p_237469_, int p_237470_)
```

**Parameters:**

- `p_237468_` (`CommandSourceStack`)
- `p_237469_` (`Entity`)
- `p_237470_` (`int`)

**Returns:** `MutableComponent`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237476_, Style p_237477_)
```

**Parameters:**

- `p_237476_` (`FormattedText.StyledContentConsumer<T>`)
- `p_237477_` (`Style`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237474_)
```

**Parameters:**

- `p_237474_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### equals

```java
public boolean equals(Object p_237481_)
```

**Parameters:**

- `p_237481_` (`Object`)

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
