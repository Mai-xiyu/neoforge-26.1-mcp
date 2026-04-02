# SnbtPrinterTagVisitor

**Package:** `net.minecraft.nbt`
**Type:** class
**Implements:** `TagVisitor`

## Methods

### SnbtPrinterTagVisitor

```java
public SnbtPrinterTagVisitor()
```

**Returns:** `public`

### SnbtPrinterTagVisitor

```java
public SnbtPrinterTagVisitor(String p_178107_, int p_178108_, List<String> p_178109_)
```

**Parameters:**

- `p_178107_` (`String`)
- `p_178108_` (`int`)
- `p_178109_` (`List<String>`)

**Returns:** `public`

### visit

```java
public String visit(Tag p_178142_)
```

**Parameters:**

- `p_178142_` (`Tag`)

**Returns:** `public String`

### visitString

```java
public void visitString(StringTag p_178140_)
```

**Parameters:**

- `p_178140_` (`StringTag`)

### visitByte

```java
public void visitByte(ByteTag p_178118_)
```

**Parameters:**

- `p_178118_` (`ByteTag`)

### visitShort

```java
public void visitShort(ShortTag p_178138_)
```

**Parameters:**

- `p_178138_` (`ShortTag`)

### visitInt

```java
public void visitInt(IntTag p_178130_)
```

**Parameters:**

- `p_178130_` (`IntTag`)

### visitLong

```java
public void visitLong(LongTag p_178136_)
```

**Parameters:**

- `p_178136_` (`LongTag`)

### visitFloat

```java
public void visitFloat(FloatTag p_178126_)
```

**Parameters:**

- `p_178126_` (`FloatTag`)

### visitDouble

```java
public void visitDouble(DoubleTag p_178122_)
```

**Parameters:**

- `p_178122_` (`DoubleTag`)

### visitByteArray

```java
public void visitByteArray(ByteArrayTag p_178116_)
```

**Parameters:**

- `p_178116_` (`ByteArrayTag`)

### visitIntArray

```java
public void visitIntArray(IntArrayTag p_178128_)
```

**Parameters:**

- `p_178128_` (`IntArrayTag`)

### visitLongArray

```java
public void visitLongArray(LongArrayTag p_178134_)
```

**Parameters:**

- `p_178134_` (`LongArrayTag`)

### visitList

```java
public void visitList(ListTag p_178132_)
```

**Parameters:**

- `p_178132_` (`ListTag`)

### visitCompound

```java
public void visitCompound(CompoundTag p_178120_)
```

**Parameters:**

- `p_178120_` (`CompoundTag`)

### popPath

```java
private void popPath()
```

**Returns:** `private void`

### pushPath

```java
private void pushPath(String p_178145_)
```

**Parameters:**

- `p_178145_` (`String`)

**Returns:** `private void`

### getKeys

```java
protected List<String> getKeys(CompoundTag p_178147_)
```

**Parameters:**

- `p_178147_` (`CompoundTag`)

**Returns:** `protected List<String>`

### pathString

```java
public String pathString()
```

**Returns:** `public String`

### handleEscapePretty

```java
protected static String handleEscapePretty(String p_178112_)
```

**Parameters:**

- `p_178112_` (`String`)

**Returns:** `protected static String`

### visitEnd

```java
public void visitEnd(EndTag p_178124_)
```

**Parameters:**

- `p_178124_` (`EndTag`)
