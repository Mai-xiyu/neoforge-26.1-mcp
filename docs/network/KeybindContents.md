# KeybindContents

**Package:** `net.minecraft.network.chat.contents`
**Type:** class
**Implements:** `ComponentContents`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<KeybindContents>` |  |
| `TYPE` | `ComponentContents.Type<KeybindContents>` |  |

## Methods

### KeybindContents

```java
public KeybindContents(String p_237347_)
```

**Parameters:**

- `p_237347_` (`String`)

**Returns:** `public`

### getNestedComponent

```java
private Component getNestedComponent()
```

**Returns:** `private Component`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237350_)
```

**Parameters:**

- `p_237350_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237352_, Style p_237353_)
```

**Parameters:**

- `p_237352_` (`FormattedText.StyledContentConsumer<T>`)
- `p_237353_` (`Style`)

**Returns:** `Optional<T>`

### equals

```java
public boolean equals(Object p_237356_)
```

**Parameters:**

- `p_237356_` (`Object`)

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

### getName

```java
public String getName()
```

**Returns:** `public String`

### type

```java
public ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`
