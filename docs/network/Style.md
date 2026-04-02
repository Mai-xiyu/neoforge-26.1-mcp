# Style

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `Style` |  |
| `DEFAULT_FONT` | `ResourceLocation` |  |

## Methods

### create

```java
private static Style create(Optional<TextColor> p_237258_, Optional<Boolean> p_237259_, Optional<Boolean> p_237260_, Optional<Boolean> p_237261_, Optional<Boolean> p_237262_, Optional<Boolean> p_237263_, Optional<ClickEvent> p_237264_, Optional<HoverEvent> p_237265_, Optional<String> p_304921_, Optional<ResourceLocation> p_304811_)
```

**Parameters:**

- `p_237258_` (`Optional<TextColor>`)
- `p_237259_` (`Optional<Boolean>`)
- `p_237260_` (`Optional<Boolean>`)
- `p_237261_` (`Optional<Boolean>`)
- `p_237262_` (`Optional<Boolean>`)
- `p_237263_` (`Optional<Boolean>`)
- `p_237264_` (`Optional<ClickEvent>`)
- `p_237265_` (`Optional<HoverEvent>`)
- `p_304921_` (`Optional<String>`)
- `p_304811_` (`Optional<ResourceLocation>`)

**Returns:** `private static Style`

### Style

```java
private Style(TextColor p_131113_, Boolean p_131114_, Boolean p_131115_, Boolean p_131116_, Boolean p_131117_, Boolean p_131118_, ClickEvent p_131119_, HoverEvent p_131120_, String p_131121_, ResourceLocation p_131122_)
```

**Parameters:**

- `p_131113_` (`TextColor`)
- `p_131114_` (`Boolean`)
- `p_131115_` (`Boolean`)
- `p_131116_` (`Boolean`)
- `p_131117_` (`Boolean`)
- `p_131118_` (`Boolean`)
- `p_131119_` (`ClickEvent`)
- `p_131120_` (`HoverEvent`)
- `p_131121_` (`String`)
- `p_131122_` (`ResourceLocation`)

**Returns:** `private`

### getColor

```java
public TextColor getColor()
```

**Returns:** `TextColor`

### isBold

```java
public boolean isBold()
```

**Returns:** `public boolean`

### isItalic

```java
public boolean isItalic()
```

**Returns:** `public boolean`

### isStrikethrough

```java
public boolean isStrikethrough()
```

**Returns:** `public boolean`

### isUnderlined

```java
public boolean isUnderlined()
```

**Returns:** `public boolean`

### isObfuscated

```java
public boolean isObfuscated()
```

**Returns:** `public boolean`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getClickEvent

```java
public ClickEvent getClickEvent()
```

**Returns:** `ClickEvent`

### getHoverEvent

```java
public HoverEvent getHoverEvent()
```

**Returns:** `HoverEvent`

### getInsertion

```java
public String getInsertion()
```

**Returns:** `String`

### getFont

```java
public ResourceLocation getFont()
```

**Returns:** `public ResourceLocation`

### checkEmptyAfterChange

```java
<T> private static <T> Style checkEmptyAfterChange(Style p_304840_, T p_304483_, T p_304384_)
```

**Parameters:**

- `p_304840_` (`Style`)
- `p_304483_` (`T`)
- `p_304384_` (`T`)

**Returns:** `private static <T> Style`

### withColor

```java
public Style withColor(TextColor p_131149_)
```

**Parameters:**

- `p_131149_` (`TextColor`)

**Returns:** `public Style`

### withColor

```java
public Style withColor(ChatFormatting p_131141_)
```

**Parameters:**

- `p_131141_` (`ChatFormatting`)

**Returns:** `public Style`

### withColor

```java
public Style withColor(int p_178521_)
```

**Parameters:**

- `p_178521_` (`int`)

**Returns:** `public Style`

### withBold

```java
public Style withBold(Boolean p_131137_)
```

**Parameters:**

- `p_131137_` (`Boolean`)

**Returns:** `public Style`

### withItalic

```java
public Style withItalic(Boolean p_131156_)
```

**Parameters:**

- `p_131156_` (`Boolean`)

**Returns:** `public Style`

### withUnderlined

```java
public Style withUnderlined(Boolean p_131163_)
```

**Parameters:**

- `p_131163_` (`Boolean`)

**Returns:** `public Style`

### withStrikethrough

```java
public Style withStrikethrough(Boolean p_178523_)
```

**Parameters:**

- `p_178523_` (`Boolean`)

**Returns:** `public Style`

### withObfuscated

```java
public Style withObfuscated(Boolean p_178525_)
```

**Parameters:**

- `p_178525_` (`Boolean`)

**Returns:** `public Style`

### withClickEvent

```java
public Style withClickEvent(ClickEvent p_131143_)
```

**Parameters:**

- `p_131143_` (`ClickEvent`)

**Returns:** `public Style`

### withHoverEvent

```java
public Style withHoverEvent(HoverEvent p_131145_)
```

**Parameters:**

- `p_131145_` (`HoverEvent`)

**Returns:** `public Style`

### withInsertion

```java
public Style withInsertion(String p_131139_)
```

**Parameters:**

- `p_131139_` (`String`)

**Returns:** `public Style`

### withFont

```java
public Style withFont(ResourceLocation p_131151_)
```

**Parameters:**

- `p_131151_` (`ResourceLocation`)

**Returns:** `public Style`

### applyFormat

```java
public Style applyFormat(ChatFormatting p_131158_)
```

**Parameters:**

- `p_131158_` (`ChatFormatting`)

**Returns:** `public Style`

### Style

```java
return new Style()
```

**Returns:** `return new`

### applyLegacyFormat

```java
public Style applyLegacyFormat(ChatFormatting p_131165_)
```

**Parameters:**

- `p_131165_` (`ChatFormatting`)

**Returns:** `public Style`

### Style

```java
return new Style()
```

**Returns:** `return new`

### applyFormats

```java
public Style applyFormats(ChatFormatting[]... p_131153_)
```

**Parameters:**

- `p_131153_` (`ChatFormatting[]...`)

**Returns:** `public Style`

### Style

```java
return new Style()
```

**Returns:** `return new`

### applyTo

```java
public Style applyTo(Style p_131147_)
```

**Parameters:**

- `p_131147_` (`Style`)

**Returns:** `public Style`

### toString

```java
public String toString()
```

**Returns:** `String`

### prependSeparator

```java
private void prependSeparator()
```

**Returns:** `private void`

### addFlagString

```java
void addFlagString(String p_237290_, Boolean p_237291_)
```

**Parameters:**

- `p_237290_` (`String`)
- `p_237291_` (`Boolean`)

### addValueString

```java
void addValueString(String p_237293_, Object p_237294_)
```

**Parameters:**

- `p_237293_` (`String`)
- `p_237294_` (`Object`)

### equals

```java
public boolean equals(Object p_131175_)
```

**Parameters:**

- `p_131175_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
