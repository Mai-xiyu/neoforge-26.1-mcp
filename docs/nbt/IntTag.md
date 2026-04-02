# IntTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `NumericTag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<IntTag>` |  |

## Methods

### load

```java
public IntTag load(DataInput p_128708_, NbtAccounter p_128710_)
```

**Parameters:**

- `p_128708_` (`DataInput`)
- `p_128710_` (`NbtAccounter`)

**Returns:** `public IntTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197483_, StreamTagVisitor p_197484_, NbtAccounter p_302339_)
```

**Parameters:**

- `p_197483_` (`DataInput`)
- `p_197484_` (`StreamTagVisitor`)
- `p_302339_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static int readAccounted(DataInput p_302357_, NbtAccounter p_302392_)
```

**Parameters:**

- `p_302357_` (`DataInput`)
- `p_302392_` (`NbtAccounter`)

**Returns:** `private static int`

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

### IntTag

```java
 IntTag(int p_128674_)
```

**Parameters:**

- `p_128674_` (`int`)

**Returns:** ``

### valueOf

```java
public static IntTag valueOf(int p_128680_)
```

**Parameters:**

- `p_128680_` (`int`)

**Returns:** `public static IntTag`

### write

```java
public void write(DataOutput p_128682_)
```

**Parameters:**

- `p_128682_` (`DataOutput`)

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
public TagType<IntTag> getType()
```

**Returns:** `TagType<IntTag>`

### copy

```java
public IntTag copy()
```

**Returns:** `public IntTag`

### equals

```java
public boolean equals(Object p_128691_)
```

**Parameters:**

- `p_128691_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177984_)
```

**Parameters:**

- `p_177984_` (`TagVisitor`)

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197481_)
```

**Parameters:**

- `p_197481_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`

### Cache

```java
private Cache()
```

**Returns:** `private`
