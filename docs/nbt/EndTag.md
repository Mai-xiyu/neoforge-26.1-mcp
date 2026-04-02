# EndTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Implements:** `Tag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<EndTag>` |  |
| `INSTANCE` | `EndTag` |  |

## Methods

### load

```java
public EndTag load(DataInput p_128550_, NbtAccounter p_128552_)
```

**Parameters:**

- `p_128550_` (`DataInput`)
- `p_128552_` (`NbtAccounter`)

**Returns:** `public EndTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197465_, StreamTagVisitor p_197466_, NbtAccounter p_302346_)
```

**Parameters:**

- `p_197465_` (`DataInput`)
- `p_197466_` (`StreamTagVisitor`)
- `p_302346_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### skip

```java
public void skip(DataInput p_197462_, int p_197463_, NbtAccounter p_302354_)
```

**Parameters:**

- `p_197462_` (`DataInput`)
- `p_197463_` (`int`)
- `p_302354_` (`NbtAccounter`)

### skip

```java
public void skip(DataInput p_197460_, NbtAccounter p_302327_)
```

**Parameters:**

- `p_197460_` (`DataInput`)
- `p_302327_` (`NbtAccounter`)

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

### EndTag

```java
private EndTag()
```

**Returns:** `private`

### write

```java
public void write(DataOutput p_128539_)
```

**Parameters:**

- `p_128539_` (`DataOutput`)

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
public TagType<EndTag> getType()
```

**Returns:** `TagType<EndTag>`

### toString

```java
public String toString()
```

**Returns:** `String`

### copy

```java
public EndTag copy()
```

**Returns:** `public EndTag`

### accept

```java
public void accept(TagVisitor p_177863_)
```

**Parameters:**

- `p_177863_` (`TagVisitor`)

### accept

```java
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197458_)
```

**Parameters:**

- `p_197458_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
