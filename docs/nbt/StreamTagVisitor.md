# StreamTagVisitor

**Package:** `net.minecraft.nbt`
**Type:** interface

## Methods

### visitEnd

```java
StreamTagVisitor.ValueResult visitEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(String p_197525_)
```

**Parameters:**

- `p_197525_` (`String`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(byte p_197520_)
```

**Parameters:**

- `p_197520_` (`byte`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(short p_197531_)
```

**Parameters:**

- `p_197531_` (`short`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(int p_197523_)
```

**Parameters:**

- `p_197523_` (`int`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(long p_197524_)
```

**Parameters:**

- `p_197524_` (`long`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(float p_197522_)
```

**Parameters:**

- `p_197522_` (`float`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(double p_197521_)
```

**Parameters:**

- `p_197521_` (`double`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(byte[] p_197532_)
```

**Parameters:**

- `p_197532_` (`byte[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(int[] p_197533_)
```

**Parameters:**

- `p_197533_` (`int[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visit

```java
StreamTagVisitor.ValueResult visit(long[] p_197534_)
```

**Parameters:**

- `p_197534_` (`long[]`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitList

```java
StreamTagVisitor.ValueResult visitList(TagType<?> p_197527_, int p_197528_)
```

**Parameters:**

- `p_197527_` (`TagType<?>`)
- `p_197528_` (`int`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitEntry

```java
StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197526_)
```

**Parameters:**

- `p_197526_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitEntry

```java
StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197529_, String p_197530_)
```

**Parameters:**

- `p_197529_` (`TagType<?>`)
- `p_197530_` (`String`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitElement

```java
StreamTagVisitor.EntryResult visitElement(TagType<?> p_197536_, int p_197537_)
```

**Parameters:**

- `p_197536_` (`TagType<?>`)
- `p_197537_` (`int`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitContainerEnd

```java
StreamTagVisitor.ValueResult visitContainerEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### visitRootEntry

```java
StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197535_)
```

**Parameters:**

- `p_197535_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.ValueResult`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EntryResult` | enum |  |
| `ValueResult` | enum |  |
