# LongArrayTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `CollectionTag<LongTag>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<LongArrayTag>` |  |

## Methods

### load

```java
public LongArrayTag load(DataInput p_128865_, NbtAccounter p_128867_)
```

**Parameters:**

- `p_128865_` (`DataInput`)
- `p_128867_` (`NbtAccounter`)

**Returns:** `public LongArrayTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197501_, StreamTagVisitor p_197502_, NbtAccounter p_302321_)
```

**Parameters:**

- `p_197501_` (`DataInput`)
- `p_197502_` (`StreamTagVisitor`)
- `p_302321_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static long[] readAccounted(DataInput p_302379_, NbtAccounter p_302364_)
```

**Parameters:**

- `p_302379_` (`DataInput`)
- `p_302364_` (`NbtAccounter`)

**Returns:** `private static long[]`

### skip

```java
public void skip(DataInput p_197499_, NbtAccounter p_302368_)
```

**Parameters:**

- `p_197499_` (`DataInput`)
- `p_302368_` (`NbtAccounter`)

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

### LongArrayTag

```java
public LongArrayTag(long[] p_128808_)
```

**Parameters:**

- `p_128808_` (`long[]`)

**Returns:** `public`

### LongArrayTag

```java
public LongArrayTag(LongSet p_128804_)
```

**Parameters:**

- `p_128804_` (`LongSet`)

**Returns:** `public`

### LongArrayTag

```java
public LongArrayTag(List<Long> p_128806_)
```

**Parameters:**

- `p_128806_` (`List<Long>`)

**Returns:** `public`

### toArray

```java
private static long[] toArray(List<Long> p_128824_)
```

**Parameters:**

- `p_128824_` (`List<Long>`)

**Returns:** `private static long[]`

### write

```java
public void write(DataOutput p_128819_)
```

**Parameters:**

- `p_128819_` (`DataOutput`)

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
public TagType<LongArrayTag> getType()
```

**Returns:** `TagType<LongArrayTag>`

### toString

```java
public String toString()
```

**Returns:** `String`

### copy

```java
public LongArrayTag copy()
```

**Returns:** `public LongArrayTag`

### LongArrayTag

```java
return new LongArrayTag()
```

**Returns:** `return new`

### equals

```java
public boolean equals(Object p_128850_)
```

**Parameters:**

- `p_128850_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177995_)
```

**Parameters:**

- `p_177995_` (`TagVisitor`)

### getAsLongArray

```java
public long[] getAsLongArray()
```

**Returns:** `public long[]`

### size

```java
public int size()
```

**Returns:** `int`

### get

```java
public LongTag get(int p_128811_)
```

**Parameters:**

- `p_128811_` (`int`)

**Returns:** `public LongTag`

### set

```java
public LongTag set(int p_128813_, LongTag p_128814_)
```

**Parameters:**

- `p_128813_` (`int`)
- `p_128814_` (`LongTag`)

**Returns:** `public LongTag`

### add

```java
public void add(int p_128832_, LongTag p_128833_)
```

**Parameters:**

- `p_128832_` (`int`)
- `p_128833_` (`LongTag`)

**Returns:** `public void`

### setTag

```java
public boolean setTag(int p_128816_, Tag p_128817_)
```

**Parameters:**

- `p_128816_` (`int`)
- `p_128817_` (`Tag`)

**Returns:** `boolean`

### addTag

```java
public boolean addTag(int p_128835_, Tag p_128836_)
```

**Parameters:**

- `p_128835_` (`int`)
- `p_128836_` (`Tag`)

**Returns:** `boolean`

### remove

```java
public LongTag remove(int p_128830_)
```

**Parameters:**

- `p_128830_` (`int`)

**Returns:** `public LongTag`

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197497_)
```

**Parameters:**

- `p_197497_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
