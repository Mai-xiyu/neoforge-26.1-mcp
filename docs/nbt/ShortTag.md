# ShortTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `NumericTag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<ShortTag>` |  |

## Methods

### load

```java
public ShortTag load(DataInput p_129282_, NbtAccounter p_129284_)
```

**Parameters:**

- `p_129282_` (`DataInput`)
- `p_129284_` (`NbtAccounter`)

**Returns:** `public ShortTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197517_, StreamTagVisitor p_197518_, NbtAccounter p_302385_)
```

**Parameters:**

- `p_197517_` (`DataInput`)
- `p_197518_` (`StreamTagVisitor`)
- `p_302385_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static short readAccounted(DataInput p_302332_, NbtAccounter p_302335_)
```

**Parameters:**

- `p_302332_` (`DataInput`)
- `p_302335_` (`NbtAccounter`)

**Returns:** `private static short`

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

### ShortTag

```java
 ShortTag(short p_129248_)
```

**Parameters:**

- `p_129248_` (`short`)

**Returns:** ``

### valueOf

```java
public static ShortTag valueOf(short p_129259_)
```

**Parameters:**

- `p_129259_` (`short`)

**Returns:** `public static ShortTag`

### write

```java
public void write(DataOutput p_129254_)
```

**Parameters:**

- `p_129254_` (`DataOutput`)

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
public TagType<ShortTag> getType()
```

**Returns:** `TagType<ShortTag>`

### copy

```java
public ShortTag copy()
```

**Returns:** `public ShortTag`

### equals

```java
public boolean equals(Object p_129265_)
```

**Parameters:**

- `p_129265_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_178084_)
```

**Parameters:**

- `p_178084_` (`TagVisitor`)

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197515_)
```

**Parameters:**

- `p_197515_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`

### Cache

```java
private Cache()
```

**Returns:** `private`
