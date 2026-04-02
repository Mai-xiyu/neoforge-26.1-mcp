# CollectFields

**Package:** `net.minecraft.nbt.visitors`
**Type:** class
**Extends:** `CollectToTag`

## Methods

### CollectFields

```java
public CollectFields(FieldSelector[]... p_202496_)
```

**Parameters:**

- `p_202496_` (`FieldSelector[]...`)

**Returns:** `public`

### visitRootEntry

```java
public StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197614_)
```

**Parameters:**

- `p_197614_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.ValueResult`

### visitEntry

```java
public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197608_)
```

**Parameters:**

- `p_197608_` (`TagType<?>`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitEntry

```java
public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197610_, String p_197611_)
```

**Parameters:**

- `p_197610_` (`TagType<?>`)
- `p_197611_` (`String`)

**Returns:** `StreamTagVisitor.EntryResult`

### visitContainerEnd

```java
public StreamTagVisitor.ValueResult visitContainerEnd()
```

**Returns:** `StreamTagVisitor.ValueResult`

### getMissingFieldCount

```java
public int getMissingFieldCount()
```

**Returns:** `public int`
