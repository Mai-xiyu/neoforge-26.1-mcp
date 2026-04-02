# MutableComponent

**Package:** `net.minecraft.network.chat`
**Type:** class
**Implements:** `Component`

## Methods

### MutableComponent

```java
 MutableComponent(ComponentContents p_237200_, List<Component> p_237201_, Style p_237202_)
```

**Parameters:**

- `p_237200_` (`ComponentContents`)
- `p_237201_` (`List<Component>`)
- `p_237202_` (`Style`)

**Returns:** ``

### create

```java
public static MutableComponent create(ComponentContents p_237205_)
```

**Parameters:**

- `p_237205_` (`ComponentContents`)

**Returns:** `public static MutableComponent`

### getContents

```java
public ComponentContents getContents()
```

**Returns:** `ComponentContents`

### getSiblings

```java
public List<Component> getSiblings()
```

**Returns:** `List<Component>`

### setStyle

```java
public MutableComponent setStyle(Style p_130943_)
```

**Parameters:**

- `p_130943_` (`Style`)

**Returns:** `public MutableComponent`

### getStyle

```java
public Style getStyle()
```

**Returns:** `Style`

### append

```java
public MutableComponent append(String p_130947_)
```

**Parameters:**

- `p_130947_` (`String`)

**Returns:** `public MutableComponent`

### append

```java
public MutableComponent append(Component p_130942_)
```

**Parameters:**

- `p_130942_` (`Component`)

**Returns:** `public MutableComponent`

### withStyle

```java
public MutableComponent withStyle(UnaryOperator<Style> p_130939_)
```

**Parameters:**

- `p_130939_` (`UnaryOperator<Style>`)

**Returns:** `public MutableComponent`

### withStyle

```java
public MutableComponent withStyle(Style p_130949_)
```

**Parameters:**

- `p_130949_` (`Style`)

**Returns:** `public MutableComponent`

### withStyle

```java
public MutableComponent withStyle(ChatFormatting[]... p_130945_)
```

**Parameters:**

- `p_130945_` (`ChatFormatting[]...`)

**Returns:** `public MutableComponent`

### withStyle

```java
public MutableComponent withStyle(ChatFormatting p_130941_)
```

**Parameters:**

- `p_130941_` (`ChatFormatting`)

**Returns:** `public MutableComponent`

### withColor

```java
public MutableComponent withColor(int p_307552_)
```

**Parameters:**

- `p_307552_` (`int`)

**Returns:** `public MutableComponent`

### getVisualOrderText

```java
public FormattedCharSequence getVisualOrderText()
```

**Returns:** `FormattedCharSequence`

### equals

```java
public boolean equals(Object p_237209_)
```

**Parameters:**

- `p_237209_` (`Object`)

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
