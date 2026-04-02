# StringTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Implements:** `Tag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `TagType<StringTag>` |  |

## Methods

### load

```java
public StringTag load(DataInput p_129320_, NbtAccounter p_129322_)
```

**Parameters:**

- `p_129320_` (`DataInput`)
- `p_129322_` (`NbtAccounter`)

**Returns:** `public StringTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197570_, StreamTagVisitor p_197571_, NbtAccounter p_302336_)
```

**Parameters:**

- `p_197570_` (`DataInput`)
- `p_197571_` (`StreamTagVisitor`)
- `p_302336_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### readAccounted

```java
private static String readAccounted(DataInput p_302398_, NbtAccounter p_302365_)
```

**Parameters:**

- `p_302398_` (`DataInput`)
- `p_302365_` (`NbtAccounter`)

**Returns:** `private static String`

### skip

```java
public void skip(DataInput p_197568_, NbtAccounter p_302356_)
```

**Parameters:**

- `p_197568_` (`DataInput`)
- `p_302356_` (`NbtAccounter`)

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

### skipString

```java
public static void skipString(DataInput p_197564_)
```

**Parameters:**

- `p_197564_` (`DataInput`)

**Returns:** `public static void`

### StringTag

```java
private StringTag(String p_129293_)
```

**Parameters:**

- `p_129293_` (`String`)

**Returns:** `private`

### valueOf

```java
public static StringTag valueOf(String p_129298_)
```

**Parameters:**

- `p_129298_` (`String`)

**Returns:** `public static StringTag`

### write

```java
public void write(DataOutput p_129296_)
```

**Parameters:**

- `p_129296_` (`DataOutput`)

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
public TagType<StringTag> getType()
```

**Returns:** `TagType<StringTag>`

### toString

```java
public String toString()
```

**Returns:** `String`

### copy

```java
public StringTag copy()
```

**Returns:** `public StringTag`

### equals

```java
public boolean equals(Object p_129308_)
```

**Parameters:**

- `p_129308_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getAsString

```java
public String getAsString()
```

**Returns:** `String`

### accept

```java
public void accept(TagVisitor p_178154_)
```

**Parameters:**

- `p_178154_` (`TagVisitor`)

### quoteAndEscape

```java
public static String quoteAndEscape(String p_129304_)
```

**Parameters:**

- `p_129304_` (`String`)

**Returns:** `public static String`

### accept

```java
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197566_)
```

**Parameters:**

- `p_197566_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
