# VertexFormat

**Package:** `com.mojang.blaze3d.vertex`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `UNKNOWN_ELEMENT` | `int` |  |

## Methods

### VertexFormat

```java
 VertexFormat(List<VertexFormatElement> p_350393_, List<String> p_350887_, IntList p_350817_, int p_350310_)
```

**Parameters:**

- `p_350393_` (`List<VertexFormatElement>`)
- `p_350887_` (`List<String>`)
- `p_350817_` (`IntList`)
- `p_350310_` (`int`)

**Returns:** ``

### builder

```java
public static VertexFormat.Builder builder()
```

**Returns:** `public static VertexFormat.Builder`

### toString

```java
public String toString()
```

**Returns:** `String`

### getVertexSize

```java
public int getVertexSize()
```

**Returns:** `public int`

### getElements

```java
public List<VertexFormatElement> getElements()
```

**Returns:** `public List<VertexFormatElement>`

### getElementAttributeNames

```java
public List<String> getElementAttributeNames()
```

**Returns:** `public List<String>`

### getOffsetsByElement

```java
public int[] getOffsetsByElement()
```

**Returns:** `public int[]`

### getOffset

```java
public int getOffset(VertexFormatElement p_350713_)
```

**Parameters:**

- `p_350713_` (`VertexFormatElement`)

**Returns:** `public int`

### contains

```java
public boolean contains(VertexFormatElement p_351022_)
```

**Parameters:**

- `p_351022_` (`VertexFormatElement`)

**Returns:** `public boolean`

### getElementsMask

```java
public int getElementsMask()
```

**Returns:** `public int`

### getElementName

```java
public String getElementName(VertexFormatElement p_350904_)
```

**Parameters:**

- `p_350904_` (`VertexFormatElement`)

**Returns:** `public String`

### IllegalArgumentException

```java
throw new IllegalArgumentException(p_350904_ + " is not contained in format")
```

**Parameters:**

- `format"` (`p_350904_ + " is not contained in`)

**Returns:** `throw new`

### equals

```java
public boolean equals(Object p_86026_)
```

**Parameters:**

- `p_86026_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### setupBufferState

```java
public void setupBufferState()
```

**Returns:** `public void`

### _setupBufferState

```java
private void _setupBufferState()
```

**Returns:** `private void`

### clearBufferState

```java
public void clearBufferState()
```

**Returns:** `public void`

### _clearBufferState

```java
private void _clearBufferState()
```

**Returns:** `private void`

### getImmediateDrawVertexBuffer

```java
public VertexBuffer getImmediateDrawVertexBuffer()
```

**Returns:** `public VertexBuffer`

### Builder

```java
 Builder()
```

**Returns:** ``

### add

```java
public VertexFormat.Builder add(String p_350281_, VertexFormatElement p_350956_)
```

**Parameters:**

- `p_350281_` (`String`)
- `p_350956_` (`VertexFormatElement`)

**Returns:** `public VertexFormat.Builder`

### padding

```java
public VertexFormat.Builder padding(int p_351055_)
```

**Parameters:**

- `p_351055_` (`int`)

**Returns:** `public VertexFormat.Builder`

### build

```java
public VertexFormat build()
```

**Returns:** `public VertexFormat`

### VertexFormat

```java
return new VertexFormat()
```

**Returns:** `return new`

### INT

```java
, INT()
```

**Returns:** `,`

### IndexType

```java
private IndexType(int p_166930_, int p_166931_)
```

**Parameters:**

- `p_166930_` (`int`)
- `p_166931_` (`int`)

**Returns:** `private`

### least

```java
public static VertexFormat.IndexType least(int p_166934_)
```

**Parameters:**

- `p_166934_` (`int`)

**Returns:** `public static VertexFormat.IndexType`

### QUADS

```java
, QUADS()
```

**Returns:** `,`

### Mode

```java
private Mode(int p_231238_, int p_231239_, int p_231240_, boolean p_231241_)
```

**Parameters:**

- `p_231238_` (`int`)
- `p_231239_` (`int`)
- `p_231240_` (`int`)
- `p_231241_` (`boolean`)

**Returns:** `private`

### indexCount

```java
public int indexCount(int p_166959_)
```

**Parameters:**

- `p_166959_` (`int`)

**Returns:** `public int`

### getElementMapping

```java
public ImmutableMap<String, VertexFormatElement> getElementMapping()
```

**Returns:** `public ImmutableMap<String, VertexFormatElement>`

### hasPosition

```java
public boolean hasPosition()
```

**Returns:** `public boolean`

### hasNormal

```java
public boolean hasNormal()
```

**Returns:** `public boolean`

### hasColor

```java
public boolean hasColor()
```

**Returns:** `public boolean`

### hasUV

```java
public boolean hasUV(int which)
```

**Parameters:**

- `which` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `IndexType` | enum |  |
| `Mode` | enum |  |
