# AnimationMetadataSection

**Package:** `net.minecraft.client.resources.metadata.animation`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SERIALIZER` | `AnimationMetadataSectionSerializer` |  |
| `SECTION_NAME` | `String` |  |
| `DEFAULT_FRAME_TIME` | `int` |  |
| `UNKNOWN_SIZE` | `int` |  |
| `EMPTY` | `AnimationMetadataSection` |  |

## Methods

### calculateFrameSize

```java
public FrameSize calculateFrameSize(int p_251622_, int p_252064_)
```

**Parameters:**

- `p_251622_` (`int`)
- `p_252064_` (`int`)

**Returns:** `FrameSize`

### FrameSize

```java
return new FrameSize()
```

**Returns:** `return new`

### AnimationMetadataSection

```java
public AnimationMetadataSection(List<AnimationFrame> p_119020_, int p_119021_, int p_119022_, int p_119023_, boolean p_119024_)
```

**Parameters:**

- `p_119020_` (`List<AnimationFrame>`)
- `p_119021_` (`int`)
- `p_119022_` (`int`)
- `p_119023_` (`int`)
- `p_119024_` (`boolean`)

**Returns:** `public`

### calculateFrameSize

```java
public FrameSize calculateFrameSize(int p_249859_, int p_250148_)
```

**Parameters:**

- `p_249859_` (`int`)
- `p_250148_` (`int`)

**Returns:** `public FrameSize`

### FrameSize

```java
return new FrameSize()
```

**Returns:** `return new`

### FrameSize

```java
return new FrameSize()
```

**Returns:** `return new`

### getDefaultFrameTime

```java
public int getDefaultFrameTime()
```

**Returns:** `public int`

### isInterpolatedFrames

```java
public boolean isInterpolatedFrames()
```

**Returns:** `public boolean`

### forEachFrame

```java
public void forEachFrame(AnimationMetadataSection.FrameOutput p_174862_)
```

**Parameters:**

- `p_174862_` (`AnimationMetadataSection.FrameOutput`)

**Returns:** `public void`

### accept

```java
void accept(int p_174864_, int p_174865_)
```

**Parameters:**

- `p_174864_` (`int`)
- `p_174865_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FrameOutput` | interface |  |
