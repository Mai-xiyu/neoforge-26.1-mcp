# TagType

**Package:** `net.minecraft.nbt`
**Type:** interface<T extends Tag>

## Methods

### load

```java
T load(DataInput p_129379_, NbtAccounter p_129381_)
```

**Parameters:**

- `p_129379_` (`DataInput`)
- `p_129381_` (`NbtAccounter`)

**Returns:** `T`

### parse

```java
StreamTagVisitor.ValueResult parse(DataInput p_197578_, StreamTagVisitor p_197579_, NbtAccounter p_302376_)
```

**Parameters:**

- `p_197578_` (`DataInput`)
- `p_197579_` (`StreamTagVisitor`)
- `p_302376_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### parseRoot

```java
default void parseRoot(DataInput p_197581_, StreamTagVisitor p_197582_, NbtAccounter p_302373_)
```

**Parameters:**

- `p_197581_` (`DataInput`)
- `p_197582_` (`StreamTagVisitor`)
- `p_302373_` (`NbtAccounter`)

**Returns:** `default void`

### skip

```java
void skip(DataInput p_197576_, int p_197577_, NbtAccounter p_302319_)
```

**Parameters:**

- `p_197576_` (`DataInput`)
- `p_197577_` (`int`)
- `p_302319_` (`NbtAccounter`)

### skip

```java
void skip(DataInput p_197575_, NbtAccounter p_302391_)
```

**Parameters:**

- `p_197575_` (`DataInput`)
- `p_302391_` (`NbtAccounter`)

### isValue

```java
default boolean isValue()
```

**Returns:** `default boolean`

### getName

```java
String getName()
```

**Returns:** `String`

### getPrettyName

```java
String getPrettyName()
```

**Returns:** `String`

### createInvalid

```java
static TagType<EndTag> createInvalid(int p_129378_)
```

**Parameters:**

- `p_129378_` (`int`)

**Returns:** `static TagType<EndTag>`

### createException

```java
private IOException createException()
```

**Returns:** `private IOException`

### IOException

```java
return new IOException("Invalid tag id: " + p_129378_)
```

**Parameters:**

- `p_129378_` (`"Invalid tag id: " +`)

**Returns:** `return new`

### load

```java
public EndTag load(DataInput p_129387_, NbtAccounter p_129389_)
```

**Parameters:**

- `p_129387_` (`DataInput`)
- `p_129389_` (`NbtAccounter`)

**Returns:** `public EndTag`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197589_, StreamTagVisitor p_197590_, NbtAccounter p_302377_)
```

**Parameters:**

- `p_197589_` (`DataInput`)
- `p_197590_` (`StreamTagVisitor`)
- `p_302377_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### skip

```java
public void skip(DataInput p_197586_, int p_197587_, NbtAccounter p_302342_)
```

**Parameters:**

- `p_197586_` (`DataInput`)
- `p_197587_` (`int`)
- `p_302342_` (`NbtAccounter`)

### skip

```java
public void skip(DataInput p_197584_, NbtAccounter p_302343_)
```

**Parameters:**

- `p_197584_` (`DataInput`)
- `p_302343_` (`NbtAccounter`)

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

### skip

```java
default void skip(DataInput p_197595_, NbtAccounter p_302323_)
```

**Parameters:**

- `p_197595_` (`DataInput`)
- `p_302323_` (`NbtAccounter`)

### skip

```java
default void skip(DataInput p_197597_, int p_197598_, NbtAccounter p_302393_)
```

**Parameters:**

- `p_197597_` (`DataInput`)
- `p_197598_` (`int`)
- `p_302393_` (`NbtAccounter`)

### size

```java
int size()
```

**Returns:** `int`

### skip

```java
default void skip(DataInput p_197600_, int p_197601_, NbtAccounter p_302386_)
```

**Parameters:**

- `p_197600_` (`DataInput`)
- `p_197601_` (`int`)
- `p_302386_` (`NbtAccounter`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StaticSize` | interface |  |
| `VariableSize` | interface |  |
