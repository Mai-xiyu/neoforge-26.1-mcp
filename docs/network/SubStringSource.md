# SubStringSource

**Package:** `net.minecraft.network.chat`
**Type:** class

## Methods

### SubStringSource

```java
private SubStringSource(String p_131232_, List<Style> p_131233_, Int2IntFunction p_131234_)
```

**Parameters:**

- `p_131232_` (`String`)
- `p_131233_` (`List<Style>`)
- `p_131234_` (`Int2IntFunction`)

**Returns:** `private`

### getPlainText

```java
public String getPlainText()
```

**Returns:** `public String`

### substring

```java
public List<FormattedCharSequence> substring(int p_131237_, int p_131238_, boolean p_131239_)
```

**Parameters:**

- `p_131237_` (`int`)
- `p_131238_` (`int`)
- `p_131239_` (`boolean`)

**Returns:** `public List<FormattedCharSequence>`

### create

```java
public static SubStringSource create(FormattedText p_178537_)
```

**Parameters:**

- `p_178537_` (`FormattedText`)

**Returns:** `public static SubStringSource`

### create

```java
return create(p_178527_ -> p_178527_, p_178529_ -> p_178529_)
```

**Parameters:**

- `p_178529_` (`p_178527_ -> p_178527_, p_178529_ ->`)

**Returns:** `return`

### create

```java
public static SubStringSource create(FormattedText p_131252_, Int2IntFunction p_131253_, UnaryOperator<String> p_131254_)
```

**Parameters:**

- `p_131252_` (`FormattedText`)
- `p_131253_` (`Int2IntFunction`)
- `p_131254_` (`UnaryOperator<String>`)

**Returns:** `public static SubStringSource`
