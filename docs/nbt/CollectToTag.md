# CollectToTag

**Package:** `net.minecraft.nbt.visitors`
**Type:** class
**Implements:** `StreamTagVisitor`

## Methods

### getResult

```java
public Tag getResult()
```

**Returns:** `Tag`

### depth

```java
protected int depth()
```

**Returns:** `protected int`

### appendEntry

```java
private void appendEntry(Tag p_197683_)
```

**Parameters:**

- `p_197683_` (`Tag`)

**Returns:** `private void`

### visitEnd

```java
public StreamTagVisitor.ValueResult visitEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(String p_197678_)
```

**Parameters:**

- `p_197678_` (`String`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(byte p_197668_)
```

**Parameters:**

- `p_197668_` (`byte`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(short p_197693_)
```

**Parameters:**

- `p_197693_` (`short`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(int p_197674_)
```

**Parameters:**

- `p_197674_` (`int`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(long p_197676_)
```

**Parameters:**

- `p_197676_` (`long`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(float p_197672_)
```

**Parameters:**

- `p_197672_` (`float`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(double p_197670_)
```

**Parameters:**

- `p_197670_` (`double`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(byte[] p_197695_)
```

**Parameters:**

- `p_197695_` (`byte[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(int[] p_197697_)
```

**Parameters:**

- `p_197697_` (`int[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
public StreamTagVisitor.ValueResult visit(long[] p_197699_)
```

**Parameters:**

- `p_197699_` (`long[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitList

```java
public StreamTagVisitor.ValueResult visitList(TagType<?> p_197687_, int p_197688_)
```

**Parameters:**

- `p_197687_` (`TagType<?>`)
- `p_197688_` (`int`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitElement

```java
public StreamTagVisitor.EntryResult visitElement(TagType<?> p_197709_, int p_197710_)
```

**Parameters:**

- `p_197709_` (`TagType<?>`)
- `p_197710_` (`int`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitEntry

```java
public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197685_)
```

**Parameters:**

- `p_197685_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitEntry

```java
public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197690_, String p_197691_)
```

**Parameters:**

- `p_197690_` (`TagType<?>`)
- `p_197691_` (`String`)

**Returns:** `StreamTagVisitor.EntryResult`

### enterContainerIfNeeded

```java
private void enterContainerIfNeeded(TagType<?> p_197712_)
```

**Parameters:**

- `p_197712_` (`TagType<?>`)

**Returns:** `private void`

### visitContainerEnd

```java
public StreamTagVisitor.ValueResult visitContainerEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### visitRootEntry

```java
public StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197707_)
```

**Parameters:**

- `p_197707_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.ValueResult`
