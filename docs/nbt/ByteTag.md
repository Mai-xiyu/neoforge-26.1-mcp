# ByteTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `NumericTag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<ByteTag>` |  |
| `ZERO` | `ByteTag` |  |
| `ONE` | `ByteTag` |  |

## Methods

### load

```java
public ByteTag load(DataInput p_128297_, NbtAccounter p_128299_)
```

**Parameters:**

- `p_128297_` (`DataInput`)
- `p_128299_` (`NbtAccounter`)

**Returns:** `public ByteTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197438_, StreamTagVisitor p_197439_, NbtAccounter p_302383_)
```

**Parameters:**

- `p_197438_` (`DataInput`)
- `p_197439_` (`StreamTagVisitor`)
- `p_302383_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static byte readAccounted(DataInput p_302348_, NbtAccounter p_302326_)
```

**Parameters:**

- `p_302348_` (`DataInput`)
- `p_302326_` (`NbtAccounter`)

**Returns:** `private static byte`

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

### ByteTag

```java
 ByteTag(byte p_128261_)
```

**Parameters:**

- `p_128261_` (`byte`)

**Returns:** ``

### valueOf

```java
public static ByteTag valueOf(byte p_128267_)
```

**Parameters:**

- `p_128267_` (`byte`)

**Returns:** `public static ByteTag`

### valueOf

```java
public static ByteTag valueOf(boolean p_128274_)
```

**Parameters:**

- `p_128274_` (`boolean`)

**Returns:** `public static ByteTag`

### write

```java
public void write(DataOutput p_128269_)
```

**Parameters:**

- `p_128269_` (`DataOutput`)

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
public TagType<ByteTag> getType()
```

**Returns:** `TagType<ByteTag>`

### copy

```java
public ByteTag copy()
```

**Returns:** `public ByteTag`

### equals

```java
public boolean equals(Object p_128280_)
```

**Parameters:**

- `p_128280_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177842_)
```

**Parameters:**

- `p_177842_` (`TagVisitor`)

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197436_)
```

**Parameters:**

- `p_197436_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`

### Cache

```java
private Cache()
```

**Returns:** `private`
