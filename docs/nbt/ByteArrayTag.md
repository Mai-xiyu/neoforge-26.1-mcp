# ByteArrayTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `CollectionTag<ByteTag>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<ByteArrayTag>` |  |

## Methods

### load

```java
public ByteArrayTag load(DataInput p_128252_, NbtAccounter p_128254_)
```

**Parameters:**

- `p_128252_` (`DataInput`)
- `p_128254_` (`NbtAccounter`)

**Returns:** `public ByteArrayTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197433_, StreamTagVisitor p_197434_, NbtAccounter p_302366_)
```

**Parameters:**

- `p_197433_` (`DataInput`)
- `p_197434_` (`StreamTagVisitor`)
- `p_302366_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static byte[] readAccounted(DataInput p_302389_, NbtAccounter p_302320_)
```

**Parameters:**

- `p_302389_` (`DataInput`)
- `p_302320_` (`NbtAccounter`)

**Returns:** `private static byte[]`

### skip

```java
public void skip(DataInput p_197431_, NbtAccounter p_302351_)
```

**Parameters:**

- `p_197431_` (`DataInput`)
- `p_302351_` (`NbtAccounter`)

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

### ByteArrayTag

```java
public ByteArrayTag(byte[] p_128191_)
```

**Parameters:**

- `p_128191_` (`byte[]`)

**Returns:** `public`

### ByteArrayTag

```java
public ByteArrayTag(List<Byte> p_128189_)
```

**Parameters:**

- `p_128189_` (`List<Byte>`)

**Returns:** `public`

### toArray

```java
private static byte[] toArray(List<Byte> p_128207_)
```

**Parameters:**

- `p_128207_` (`List<Byte>`)

**Returns:** `private static byte[]`

### write

```java
public void write(DataOutput p_128202_)
```

**Parameters:**

- `p_128202_` (`DataOutput`)

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
public TagType<ByteArrayTag> getType()
```

**Returns:** `TagType<ByteArrayTag>`

### toString

```java
public String toString()
```

**Returns:** `String`

### copy

```java
public Tag copy()
```

**Returns:** `Tag`

### ByteArrayTag

```java
return new ByteArrayTag()
```

**Returns:** `return new`

### equals

```java
public boolean equals(Object p_128233_)
```

**Parameters:**

- `p_128233_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177839_)
```

**Parameters:**

- `p_177839_` (`TagVisitor`)

### getAsByteArray

```java
public byte[] getAsByteArray()
```

**Returns:** `public byte[]`

### size

```java
public int size()
```

**Returns:** `int`

### get

```java
public ByteTag get(int p_128194_)
```

**Parameters:**

- `p_128194_` (`int`)

**Returns:** `public ByteTag`

### set

```java
public ByteTag set(int p_128196_, ByteTag p_128197_)
```

**Parameters:**

- `p_128196_` (`int`)
- `p_128197_` (`ByteTag`)

**Returns:** `public ByteTag`

### add

```java
public void add(int p_128215_, ByteTag p_128216_)
```

**Parameters:**

- `p_128215_` (`int`)
- `p_128216_` (`ByteTag`)

**Returns:** `public void`

### setTag

```java
public boolean setTag(int p_128199_, Tag p_128200_)
```

**Parameters:**

- `p_128199_` (`int`)
- `p_128200_` (`Tag`)

**Returns:** `boolean`

### addTag

```java
public boolean addTag(int p_128218_, Tag p_128219_)
```

**Parameters:**

- `p_128218_` (`int`)
- `p_128219_` (`Tag`)

**Returns:** `boolean`

### remove

```java
public ByteTag remove(int p_128213_)
```

**Parameters:**

- `p_128213_` (`int`)

**Returns:** `public ByteTag`

### getElementType

```java
public byte getElementType()
```

**Returns:** `byte`

### clear

```java
public void clear()
```

### accept

```java
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197429_)
```

**Parameters:**

- `p_197429_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
