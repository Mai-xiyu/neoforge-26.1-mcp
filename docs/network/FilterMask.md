# FilterMask

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FilterMask>` |  |
| `FULLY_FILTERED` | `FilterMask` |  |
| `PASS_THROUGH` | `FilterMask` |  |
| `FILTERED_STYLE` | `Style` |  |

## Methods

### FilterMask

```java
private FilterMask(BitSet p_243243_, FilterMask.Type p_243249_)
```

**Parameters:**

- `p_243243_` (`BitSet`)
- `p_243249_` (`FilterMask.Type`)

**Returns:** `private`

### FilterMask

```java
private FilterMask(BitSet p_253780_)
```

**Parameters:**

- `p_253780_` (`BitSet`)

**Returns:** `private`

### FilterMask

```java
public FilterMask(int p_243210_)
```

**Parameters:**

- `p_243210_` (`int`)

**Returns:** `public`

### type

```java
private FilterMask.Type type()
```

**Returns:** `private FilterMask.Type`

### mask

```java
private BitSet mask()
```

**Returns:** `private BitSet`

### read

```java
public static FilterMask read(FriendlyByteBuf p_243205_)
```

**Parameters:**

- `p_243205_` (`FriendlyByteBuf`)

**Returns:** `public static FilterMask`

### write

```java
public static void write(FriendlyByteBuf p_243308_, FilterMask p_243231_)
```

**Parameters:**

- `p_243308_` (`FriendlyByteBuf`)
- `p_243231_` (`FilterMask`)

**Returns:** `public static void`

### setFiltered

```java
public void setFiltered(int p_243202_)
```

**Parameters:**

- `p_243202_` (`int`)

**Returns:** `public void`

### apply

```java
public String apply(String p_243317_)
```

**Parameters:**

- `p_243317_` (`String`)

**Returns:** `String`

### String

```java
yield new String()
```

**Returns:** `yield new`

### applyWithFormatting

```java
public Component applyWithFormatting(String p_251709_)
```

**Parameters:**

- `p_251709_` (`String`)

**Returns:** `Component`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### isFullyFiltered

```java
public boolean isFullyFiltered()
```

**Returns:** `public boolean`

### equals

```java
public boolean equals(Object p_254275_)
```

**Parameters:**

- `p_254275_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### Type

```java
private Type(String p_253679_, Supplier<MapCodec<FilterMask>> p_253988_)
```

**Parameters:**

- `p_253679_` (`String`)
- `p_253988_` (`Supplier<MapCodec<FilterMask>>`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### codec

```java
private MapCodec<FilterMask> codec()
```

**Returns:** `private MapCodec<FilterMask>`
