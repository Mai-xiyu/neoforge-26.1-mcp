# ListTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `CollectionTag<Tag>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<ListTag>` |  |

## Methods

### load

```java
public ListTag load(DataInput p_128792_, NbtAccounter p_128794_)
```

**Parameters:**

- `p_128792_` (`DataInput`)
- `p_128794_` (`NbtAccounter`)

**Returns:** `public ListTag`

### loadList

```java
private static ListTag loadList(DataInput p_302382_, NbtAccounter p_302349_)
```

**Parameters:**

- `p_302382_` (`DataInput`)
- `p_302349_` (`NbtAccounter`)

**Returns:** `private static ListTag`

### NbtFormatException

```java
throw new NbtFormatException("Missing type on ListTag")
```

**Parameters:**

- `ListTag"` (`"Missing type on`)

**Returns:** `throw new`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197491_, StreamTagVisitor p_197492_, NbtAccounter p_302333_)
```

**Parameters:**

- `p_197491_` (`DataInput`)
- `p_197492_` (`StreamTagVisitor`)
- `p_302333_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### parseList

```java
private static StreamTagVisitor.ValueResult parseList(DataInput p_302369_, StreamTagVisitor p_302372_, NbtAccounter p_302361_)
```

**Parameters:**

- `p_302369_` (`DataInput`)
- `p_302372_` (`StreamTagVisitor`)
- `p_302361_` (`NbtAccounter`)

**Returns:** `private static StreamTagVisitor.ValueResult`

### skip

```java
public void skip(DataInput p_302400_, NbtAccounter p_302390_)
```

**Parameters:**

- `p_302400_` (`DataInput`)
- `p_302390_` (`NbtAccounter`)

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

### ListTag

```java
 ListTag(List<Tag> p_128721_, byte p_128722_)
```

**Parameters:**

- `p_128721_` (`List<Tag>`)
- `p_128722_` (`byte`)

**Returns:** ``

### ListTag

```java
public ListTag()
```

**Returns:** `public`

### write

```java
public void write(DataOutput p_128734_)
```

**Parameters:**

- `p_128734_` (`DataOutput`)

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
public TagType<ListTag> getType()
```

**Returns:** `TagType<ListTag>`

### toString

```java
public String toString()
```

**Returns:** `String`

### updateTypeAfterRemove

```java
private void updateTypeAfterRemove()
```

**Returns:** `private void`

### remove

```java
public Tag remove(int p_128751_)
```

**Parameters:**

- `p_128751_` (`int`)

**Returns:** `Tag`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### getCompound

```java
public CompoundTag getCompound(int p_128729_)
```

**Parameters:**

- `p_128729_` (`int`)

**Returns:** `public CompoundTag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### getList

```java
public ListTag getList(int p_128745_)
```

**Parameters:**

- `p_128745_` (`int`)

**Returns:** `public ListTag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### getShort

```java
public short getShort(int p_128758_)
```

**Parameters:**

- `p_128758_` (`int`)

**Returns:** `public short`

### getInt

```java
public int getInt(int p_128764_)
```

**Parameters:**

- `p_128764_` (`int`)

**Returns:** `public int`

### getIntArray

```java
public int[] getIntArray(int p_128768_)
```

**Parameters:**

- `p_128768_` (`int`)

**Returns:** `public int[]`

### getLongArray

```java
public long[] getLongArray(int p_177992_)
```

**Parameters:**

- `p_177992_` (`int`)

**Returns:** `public long[]`

### getDouble

```java
public double getDouble(int p_128773_)
```

**Parameters:**

- `p_128773_` (`int`)

**Returns:** `public double`

### getFloat

```java
public float getFloat(int p_128776_)
```

**Parameters:**

- `p_128776_` (`int`)

**Returns:** `public float`

### getString

```java
public String getString(int p_128779_)
```

**Parameters:**

- `p_128779_` (`int`)

**Returns:** `public String`

### size

```java
public int size()
```

**Returns:** `int`

### get

```java
public Tag get(int p_128781_)
```

**Parameters:**

- `p_128781_` (`int`)

**Returns:** `public Tag`

### set

```java
public Tag set(int p_128760_, Tag p_128761_)
```

**Parameters:**

- `p_128760_` (`int`)
- `p_128761_` (`Tag`)

**Returns:** `Tag`

### add

```java
public void add(int p_128753_, Tag p_128754_)
```

**Parameters:**

- `p_128753_` (`int`)
- `p_128754_` (`Tag`)

### setTag

```java
public boolean setTag(int p_128731_, Tag p_128732_)
```

**Parameters:**

- `p_128731_` (`int`)
- `p_128732_` (`Tag`)

**Returns:** `boolean`

### addTag

```java
public boolean addTag(int p_128747_, Tag p_128748_)
```

**Parameters:**

- `p_128747_` (`int`)
- `p_128748_` (`Tag`)

**Returns:** `boolean`

### updateType

```java
private boolean updateType(Tag p_128739_)
```

**Parameters:**

- `p_128739_` (`Tag`)

**Returns:** `private boolean`

### copy

```java
public ListTag copy()
```

**Returns:** `public ListTag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### equals

```java
public boolean equals(Object p_128766_)
```

**Parameters:**

- `p_128766_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### accept

```java
public void accept(TagVisitor p_177990_)
```

**Parameters:**

- `p_177990_` (`TagVisitor`)

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197487_)
```

**Parameters:**

- `p_197487_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
