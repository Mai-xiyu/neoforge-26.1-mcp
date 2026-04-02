# LongTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `NumericTag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<LongTag>` |  |

## Methods

### load

```java
public LongTag load(DataInput p_128906_, NbtAccounter p_128908_)
```

**Parameters:**

- `p_128906_` (`DataInput`)
- `p_128908_` (`NbtAccounter`)

**Returns:** `public LongTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197506_, StreamTagVisitor p_197507_, NbtAccounter p_302345_)
```

**Parameters:**

- `p_197506_` (`DataInput`)
- `p_197507_` (`StreamTagVisitor`)
- `p_302345_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static long readAccounted(DataInput p_302399_, NbtAccounter p_302341_)
```

**Parameters:**

- `p_302399_` (`DataInput`)
- `p_302341_` (`NbtAccounter`)

**Returns:** `private static long`

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

### LongTag

```java
 LongTag(long p_128877_)
```

**Parameters:**

- `p_128877_` (`long`)

**Returns:** ``

### valueOf

```java
public static LongTag valueOf(long p_128883_)
```

**Parameters:**

- `p_128883_` (`long`)

**Returns:** `public static LongTag`

### write

```java
public void write(DataOutput p_128885_)
```

**Parameters:**

- `p_128885_` (`DataOutput`)

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
public TagType<LongTag> getType()
```

**Returns:** `TagType<LongTag>`

### copy

```java
public LongTag copy()
```

**Returns:** `public LongTag`

### equals

```java
public boolean equals(Object p_128894_)
```

**Parameters:**

- `p_128894_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177998_)
```

**Parameters:**

- `p_177998_` (`TagVisitor`)

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197504_)
```

**Parameters:**

- `p_197504_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`

### Cache

```java
private Cache()
```

**Returns:** `private`
