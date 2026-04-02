# MainTarget

**Package:** `com.mojang.blaze3d.pipeline`
**Type:** class
**Extends:** `RenderTarget`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_WIDTH` | `int` |  |
| `DEFAULT_HEIGHT` | `int` |  |
| `width` | `int` |  |
| `height` | `int` |  |

## Methods

### MainTarget

```java
public MainTarget(int p_166137_, int p_166138_)
```

**Parameters:**

- `p_166137_` (`int`)
- `p_166138_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createFrameBuffer

```java
private void createFrameBuffer(int p_166142_, int p_166143_)
```

**Parameters:**

- `p_166142_` (`int`)
- `p_166143_` (`int`)

**Returns:** `private void`

### allocateAttachments

```java
private MainTarget.Dimension allocateAttachments(int p_166147_, int p_166148_)
```

**Parameters:**

- `p_166147_` (`int`)
- `p_166148_` (`int`)

**Returns:** `private MainTarget.Dimension`

### allocateColorAttachment

```java
private boolean allocateColorAttachment(MainTarget.Dimension p_166140_)
```

**Parameters:**

- `p_166140_` (`MainTarget.Dimension`)

**Returns:** `private boolean`

### allocateDepthAttachment

```java
private boolean allocateDepthAttachment(MainTarget.Dimension p_166145_)
```

**Parameters:**

- `p_166145_` (`MainTarget.Dimension`)

**Returns:** `private boolean`

### with

```java
MainTarget.AttachmentState with(MainTarget.AttachmentState p_166164_)
```

**Parameters:**

- `p_166164_` (`MainTarget.AttachmentState`)

**Returns:** `MainTarget.AttachmentState`

### Dimension

```java
 Dimension(int p_166171_, int p_166172_)
```

**Parameters:**

- `p_166171_` (`int`)
- `p_166172_` (`int`)

**Returns:** ``

### listWithFallback

```java
static List<MainTarget.Dimension> listWithFallback(int p_166174_, int p_166175_)
```

**Parameters:**

- `p_166174_` (`int`)
- `p_166175_` (`int`)

**Returns:** `static List<MainTarget.Dimension>`

### equals

```java
public boolean equals(Object p_166177_)
```

**Parameters:**

- `p_166177_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
