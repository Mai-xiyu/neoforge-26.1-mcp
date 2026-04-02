# SkipAll

**Package:** `net.minecraft.nbt.visitors`
**Type:** interface
**Extends:** `StreamTagVisitor`

## Methods

### visitEnd

```java
default StreamTagVisitor.ValueResult visitEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(String p_197729_)
```

**Parameters:**

- `p_197729_` (`String`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(byte p_197719_)
```

**Parameters:**

- `p_197719_` (`byte`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(short p_197739_)
```

**Parameters:**

- `p_197739_` (`short`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(int p_197725_)
```

**Parameters:**

- `p_197725_` (`int`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(long p_197727_)
```

**Parameters:**

- `p_197727_` (`long`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(float p_197723_)
```

**Parameters:**

- `p_197723_` (`float`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(double p_197721_)
```

**Parameters:**

- `p_197721_` (`double`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(byte[] p_197741_)
```

**Parameters:**

- `p_197741_` (`byte[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(int[] p_197743_)
```

**Parameters:**

- `p_197743_` (`int[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
default StreamTagVisitor.ValueResult visit(long[] p_197745_)
```

**Parameters:**

- `p_197745_` (`long[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitList

```java
default StreamTagVisitor.ValueResult visitList(TagType<?> p_197733_, int p_197734_)
```

**Parameters:**

- `p_197733_` (`TagType<?>`)
- `p_197734_` (`int`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitElement

```java
default StreamTagVisitor.EntryResult visitElement(TagType<?> p_197750_, int p_197751_)
```

**Parameters:**

- `p_197750_` (`TagType<?>`)
- `p_197751_` (`int`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitEntry

```java
default StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197731_)
```

**Parameters:**

- `p_197731_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitEntry

```java
default StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197736_, String p_197737_)
```

**Parameters:**

- `p_197736_` (`TagType<?>`)
- `p_197737_` (`String`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitContainerEnd

```java
default StreamTagVisitor.ValueResult visitContainerEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### visitRootEntry

```java
default StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197748_)
```

**Parameters:**

- `p_197748_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.ValueResult`
