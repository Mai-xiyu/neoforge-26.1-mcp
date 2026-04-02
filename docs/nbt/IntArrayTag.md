# IntArrayTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Extends:** `CollectionTag<IntTag>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<IntArrayTag>` |  |

## Methods

### load

```java
public IntArrayTag load(DataInput p_128662_, NbtAccounter p_128664_)
```

**Parameters:**

- `p_128662_` (`DataInput`)
- `p_128664_` (`NbtAccounter`)

**Returns:** `public IntArrayTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197478_, StreamTagVisitor p_197479_, NbtAccounter p_302360_)
```

**Parameters:**

- `p_197478_` (`DataInput`)
- `p_197479_` (`StreamTagVisitor`)
- `p_302360_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static int[] readAccounted(DataInput p_302381_, NbtAccounter p_302330_)
```

**Parameters:**

- `p_302381_` (`DataInput`)
- `p_302330_` (`NbtAccounter`)

**Returns:** `private static int[]`

### skip

```java
public void skip(DataInput p_197476_, NbtAccounter p_302380_)
```

**Parameters:**

- `p_197476_` (`DataInput`)
- `p_302380_` (`NbtAccounter`)

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

### IntArrayTag

```java
public IntArrayTag(int[] p_128605_)
```

**Parameters:**

- `p_128605_` (`int[]`)

**Returns:** `public`

### IntArrayTag

```java
public IntArrayTag(List<Integer> p_128603_)
```

**Parameters:**

- `p_128603_` (`List<Integer>`)

**Returns:** `public`

### toArray

```java
private static int[] toArray(List<Integer> p_128621_)
```

**Parameters:**

- `p_128621_` (`List<Integer>`)

**Returns:** `private static int[]`

### write

```java
public void write(DataOutput p_128616_)
```

**Parameters:**

- `p_128616_` (`DataOutput`)

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
public TagType<IntArrayTag> getType()
```

**Returns:** `TagType<IntArrayTag>`

### toString

```java
public String toString()
```

**Returns:** `String`

### copy

```java
public IntArrayTag copy()
```

**Returns:** `public IntArrayTag`

### IntArrayTag

```java
return new IntArrayTag()
```

**Returns:** `return new`

### equals

```java
public boolean equals(Object p_128647_)
```

**Parameters:**

- `p_128647_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getAsIntArray

```java
public int[] getAsIntArray()
```

**Returns:** `public int[]`

### accept

```java
public void accept(TagVisitor p_177869_)
```

**Parameters:**

- `p_177869_` (`TagVisitor`)

### size

```java
public int size()
```

**Returns:** `int`

### get

```java
public IntTag get(int p_128608_)
```

**Parameters:**

- `p_128608_` (`int`)

**Returns:** `public IntTag`

### set

```java
public IntTag set(int p_128610_, IntTag p_128611_)
```

**Parameters:**

- `p_128610_` (`int`)
- `p_128611_` (`IntTag`)

**Returns:** `public IntTag`

### add

```java
public void add(int p_128629_, IntTag p_128630_)
```

**Parameters:**

- `p_128629_` (`int`)
- `p_128630_` (`IntTag`)

**Returns:** `public void`

### setTag

```java
public boolean setTag(int p_128613_, Tag p_128614_)
```

**Parameters:**

- `p_128613_` (`int`)
- `p_128614_` (`Tag`)

**Returns:** `boolean`

### addTag

```java
public boolean addTag(int p_128632_, Tag p_128633_)
```

**Parameters:**

- `p_128632_` (`int`)
- `p_128633_` (`Tag`)

**Returns:** `boolean`

### remove

```java
public IntTag remove(int p_128627_)
```

**Parameters:**

- `p_128627_` (`int`)

**Returns:** `public IntTag`

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
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197474_)
```

**Parameters:**

- `p_197474_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
