# FormattedCharSequence

**Package:** `net.minecraft.util`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Methods

### accept

```java
boolean accept(FormattedCharSink p_13732_)
```

**Parameters:**

- `p_13732_` (`FormattedCharSink`)

**Returns:** `boolean`

### codepoint

```java
static FormattedCharSequence codepoint(int p_13694_, Style p_13695_)
```

**Parameters:**

- `p_13694_` (`int`)
- `p_13695_` (`Style`)

**Returns:** `static FormattedCharSequence`

### forward

```java
static FormattedCharSequence forward(String p_13715_, Style p_13716_)
```

**Parameters:**

- `p_13715_` (`String`)
- `p_13716_` (`Style`)

**Returns:** `static FormattedCharSequence`

### forward

```java
static FormattedCharSequence forward(String p_144718_, Style p_144719_, Int2IntFunction p_144720_)
```

**Parameters:**

- `p_144718_` (`String`)
- `p_144719_` (`Style`)
- `p_144720_` (`Int2IntFunction`)

**Returns:** `static FormattedCharSequence`

### backward

```java
static FormattedCharSequence backward(String p_144724_, Style p_144725_)
```

**Parameters:**

- `p_144724_` (`String`)
- `p_144725_` (`Style`)

**Returns:** `static FormattedCharSequence`

### backward

```java
static FormattedCharSequence backward(String p_13741_, Style p_13742_, Int2IntFunction p_13743_)
```

**Parameters:**

- `p_13741_` (`String`)
- `p_13742_` (`Style`)
- `p_13743_` (`Int2IntFunction`)

**Returns:** `static FormattedCharSequence`

### decorateOutput

```java
static FormattedCharSink decorateOutput(FormattedCharSink p_13706_, Int2IntFunction p_13707_)
```

**Parameters:**

- `p_13706_` (`FormattedCharSink`)
- `p_13707_` (`Int2IntFunction`)

**Returns:** `static FormattedCharSink`

### composite

```java
static FormattedCharSequence composite()
```

**Returns:** `static FormattedCharSequence`

### composite

```java
static FormattedCharSequence composite(FormattedCharSequence p_144712_)
```

**Parameters:**

- `p_144712_` (`FormattedCharSequence`)

**Returns:** `static FormattedCharSequence`

### composite

```java
static FormattedCharSequence composite(FormattedCharSequence p_13697_, FormattedCharSequence p_13698_)
```

**Parameters:**

- `p_13697_` (`FormattedCharSequence`)
- `p_13698_` (`FormattedCharSequence`)

**Returns:** `static FormattedCharSequence`

### fromPair

```java
return fromPair()
```

**Returns:** `return`

### composite

```java
static FormattedCharSequence composite(FormattedCharSequence[]... p_144722_)
```

**Parameters:**

- `p_144722_` (`FormattedCharSequence[]...`)

**Returns:** `static FormattedCharSequence`

### composite

```java
static FormattedCharSequence composite(List<FormattedCharSequence> p_13723_)
```

**Parameters:**

- `p_13723_` (`List<FormattedCharSequence>`)

**Returns:** `static FormattedCharSequence`

### fromPair

```java
static FormattedCharSequence fromPair(FormattedCharSequence p_13734_, FormattedCharSequence p_13735_)
```

**Parameters:**

- `p_13734_` (`FormattedCharSequence`)
- `p_13735_` (`FormattedCharSequence`)

**Returns:** `static FormattedCharSequence`

### fromList

```java
static FormattedCharSequence fromList(List<FormattedCharSequence> p_13745_)
```

**Parameters:**

- `p_13745_` (`List<FormattedCharSequence>`)

**Returns:** `static FormattedCharSequence`
