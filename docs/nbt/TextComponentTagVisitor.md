# TextComponentTagVisitor

**Package:** `net.minecraft.nbt`
**Type:** class
**Implements:** `TagVisitor`

## Methods

### TextComponentTagVisitor

```java
public TextComponentTagVisitor(String p_178251_)
```

**Parameters:**

- `p_178251_` (`String`)

**Returns:** `public`

### visit

```java
public Component visit(Tag p_178282_)
```

**Parameters:**

- `p_178282_` (`Tag`)

**Returns:** `public Component`

### visitString

```java
public void visitString(StringTag p_178280_)
```

**Parameters:**

- `p_178280_` (`StringTag`)

### visitByte

```java
public void visitByte(ByteTag p_178258_)
```

**Parameters:**

- `p_178258_` (`ByteTag`)

### visitShort

```java
public void visitShort(ShortTag p_178278_)
```

**Parameters:**

- `p_178278_` (`ShortTag`)

### visitInt

```java
public void visitInt(IntTag p_178270_)
```

**Parameters:**

- `p_178270_` (`IntTag`)

### visitLong

```java
public void visitLong(LongTag p_178276_)
```

**Parameters:**

- `p_178276_` (`LongTag`)

### visitFloat

```java
public void visitFloat(FloatTag p_178266_)
```

**Parameters:**

- `p_178266_` (`FloatTag`)

### visitDouble

```java
public void visitDouble(DoubleTag p_178262_)
```

**Parameters:**

- `p_178262_` (`DoubleTag`)

### visitByteArray

```java
public void visitByteArray(ByteArrayTag p_178256_)
```

**Parameters:**

- `p_178256_` (`ByteArrayTag`)

### visitIntArray

```java
public void visitIntArray(IntArrayTag p_178268_)
```

**Parameters:**

- `p_178268_` (`IntArrayTag`)

### visitLongArray

```java
public void visitLongArray(LongArrayTag p_178274_)
```

**Parameters:**

- `p_178274_` (`LongArrayTag`)

### visitList

```java
public void visitList(ListTag p_178272_)
```

**Parameters:**

- `p_178272_` (`ListTag`)

### visitCompound

```java
public void visitCompound(CompoundTag p_178260_)
```

**Parameters:**

- `p_178260_` (`CompoundTag`)

### appendSubTag

```java
private void appendSubTag(Tag p_347469_, boolean p_347632_)
```

**Parameters:**

- `p_347469_` (`Tag`)
- `p_347632_` (`boolean`)

**Returns:** `private void`

### handleEscapePretty

```java
protected static Component handleEscapePretty(String p_178254_)
```

**Parameters:**

- `p_178254_` (`String`)

**Returns:** `protected static Component`

### visitEnd

```java
public void visitEnd(EndTag p_178264_)
```

**Parameters:**

- `p_178264_` (`EndTag`)
