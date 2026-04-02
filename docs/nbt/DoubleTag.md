# DoubleTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `NumericTag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ZERO` | `DoubleTag` |  |
| `TYPE` | `TagType<DoubleTag>` |  |

## Methods

### load

```java
public DoubleTag load(DataInput p_128524_, NbtAccounter p_128526_)
```

**Parameters:**

- `p_128524_` (`DataInput`)
- `p_128526_` (`NbtAccounter`)

**Returns:** `public DoubleTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197454_, StreamTagVisitor p_197455_, NbtAccounter p_302353_)
```

**Parameters:**

- `p_197454_` (`DataInput`)
- `p_197455_` (`StreamTagVisitor`)
- `p_302353_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static double readAccounted(DataInput p_302363_, NbtAccounter p_302397_)
```

**Parameters:**

- `p_302363_` (`DataInput`)
- `p_302397_` (`NbtAccounter`)

**Returns:** `private static double`

### size

```java
public int size()
```

**Returns:** `int`

### getName

```java
public String getName()
```

**Returns:** `String`

### getPrettyName

```java
public String getPrettyName()
```

**Returns:** `String`

### isValue

```java
public boolean isValue()
```

**Returns:** `boolean`

### DoubleTag

```java
private DoubleTag(double p_128498_)
```

**Parameters:**

- `p_128498_` (`double`)

**Returns:** `private`

### valueOf

```java
public static DoubleTag valueOf(double p_128501_)
```

**Parameters:**

- `p_128501_` (`double`)

**Returns:** `public static DoubleTag`

### write

```java
public void write(DataOutput p_128503_)
```

**Parameters:**

- `p_128503_` (`DataOutput`)

### sizeInBytes

```java
public int sizeInBytes()
```

**Returns:** `int`

### getId

```java
public byte getId()
```

**Returns:** `byte`

### getType

```java
public TagType<DoubleTag> getType()
```

**Returns:** `TagType<DoubleTag>`

### copy

```java
public DoubleTag copy()
```

**Returns:** `public DoubleTag`

### equals

```java
public boolean equals(Object p_128512_)
```

**Parameters:**

- `p_128512_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177860_)
```

**Parameters:**

- `p_177860_` (`TagVisitor`)

### getAsLong

```java
public long getAsLong()
```

**Returns:** `long`

### getAsInt

```java
public int getAsInt()
```

**Returns:** `int`

### getAsShort

```java
public short getAsShort()
```

**Returns:** `short`

### getAsByte

```java
public byte getAsByte()
```

**Returns:** `byte`

### getAsDouble

```java
public double getAsDouble()
```

**Returns:** `double`

### getAsFloat

```java
public float getAsFloat()
```

**Returns:** `float`

### getAsNumber

```java
public Number getAsNumber()
```

**Returns:** `Number`

### accept

```java
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197452_)
```

**Parameters:**

- `p_197452_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
