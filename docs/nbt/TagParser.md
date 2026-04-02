# TagParser

**Package:** `net.minecraft.nbt`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_TRAILING_DATA` | `SimpleCommandExceptionType` |  |
| `ERROR_EXPECTED_KEY` | `SimpleCommandExceptionType` |  |
| `ERROR_EXPECTED_VALUE` | `SimpleCommandExceptionType` |  |
| `ERROR_INSERT_MIXED_LIST` | `Dynamic2CommandExceptionType` |  |
| `ERROR_INSERT_MIXED_ARRAY` | `Dynamic2CommandExceptionType` |  |
| `ERROR_INVALID_ARRAY` | `DynamicCommandExceptionType` |  |
| `ELEMENT_SEPARATOR` | `char` |  |
| `NAME_VALUE_SEPARATOR` | `char` |  |
| `AS_CODEC` | `Codec<CompoundTag>` |  |
| `LENIENT_CODEC` | `Codec<CompoundTag>` |  |

## Methods

### parseTag

```java
public static CompoundTag parseTag(String p_129360_)
```

**Parameters:**

- `p_129360_` (`String`)

**Returns:** `public static CompoundTag`

### readSingleStruct

```java
CompoundTag readSingleStruct()
```

**Returns:** `CompoundTag`

### TagParser

```java
public TagParser(StringReader p_129350_)
```

**Parameters:**

- `p_129350_` (`StringReader`)

**Returns:** `public`

### readKey

```java
protected String readKey()
```

**Returns:** `protected String`

### readTypedValue

```java
protected Tag readTypedValue()
```

**Returns:** `protected Tag`

### type

```java
private Tag type(String p_129369_)
```

**Parameters:**

- `p_129369_` (`String`)

**Returns:** `private Tag`

### readValue

```java
public Tag readValue()
```

**Returns:** `public Tag`

### readList

```java
protected Tag readList()
```

**Returns:** `protected Tag`

### readStruct

```java
public CompoundTag readStruct()
```

**Returns:** `public CompoundTag`

### readListTag

```java
private Tag readListTag()
```

**Returns:** `private Tag`

### readArrayTag

```java
private Tag readArrayTag()
```

**Returns:** `private Tag`

### readArray

```java
<T extends Number> private <T extends Number> List<T> readArray(TagType<?> p_129362_, TagType<?> p_129363_)
```

**Parameters:**

- `p_129362_` (`TagType<?>`)
- `p_129363_` (`TagType<?>`)

**Returns:** `private <T extends Number> List<T>`

### hasElementSeparator

```java
private boolean hasElementSeparator()
```

**Returns:** `private boolean`

### expect

```java
private void expect(char p_129353_)
```

**Parameters:**

- `p_129353_` (`char`)

**Returns:** `private void`
