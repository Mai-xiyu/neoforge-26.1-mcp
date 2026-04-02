# FloatTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `NumericTag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ZERO` | `FloatTag` |  |
| `TYPE` | `TagType<FloatTag>` |  |

## Methods

### load

```java
public FloatTag load(DataInput p_128590_, NbtAccounter p_128592_)
```

**Parameters:**

- `p_128590_` (`DataInput`)
- `p_128592_` (`NbtAccounter`)

**Returns:** `public FloatTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197470_, StreamTagVisitor p_197471_, NbtAccounter p_302329_)
```

**Parameters:**

- `p_197470_` (`DataInput`)
- `p_197471_` (`StreamTagVisitor`)
- `p_302329_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static float readAccounted(DataInput p_302328_, NbtAccounter p_302359_)
```

**Parameters:**

- `p_302328_` (`DataInput`)
- `p_302359_` (`NbtAccounter`)

**Returns:** `private static float`

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

### FloatTag

```java
private FloatTag(float p_128564_)
```

**Parameters:**

- `p_128564_` (`float`)

**Returns:** `private`

### valueOf

```java
public static FloatTag valueOf(float p_128567_)
```

**Parameters:**

- `p_128567_` (`float`)

**Returns:** `public static FloatTag`

### write

```java
public void write(DataOutput p_128569_)
```

**Parameters:**

- `p_128569_` (`DataOutput`)

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
public TagType<FloatTag> getType()
```

**Returns:** `TagType<FloatTag>`

### copy

```java
public FloatTag copy()
```

**Returns:** `public FloatTag`

### equals

```java
public boolean equals(Object p_128578_)
```

**Parameters:**

- `p_128578_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177866_)
```

**Parameters:**

- `p_177866_` (`TagVisitor`)

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197468_)
```

**Parameters:**

- `p_197468_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
