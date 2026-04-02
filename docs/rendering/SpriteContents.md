# SpriteContents

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Implements:** `Stitcher.Entry`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `byMipLevel` | `NativeImage[]` |  |

## Methods

### SpriteContents

```java
public SpriteContents(ResourceLocation p_249787_, FrameSize p_251031_, NativeImage p_252131_, ResourceMetadata p_294742_)
```

**Parameters:**

- `p_249787_` (`ResourceLocation`)
- `p_251031_` (`FrameSize`)
- `p_252131_` (`NativeImage`)
- `p_294742_` (`ResourceMetadata`)

**Returns:** `public`

### getOriginalImage

```java
public NativeImage getOriginalImage()
```

**Returns:** `public NativeImage`

### increaseMipLevel

```java
public void increaseMipLevel(int p_248864_)
```

**Parameters:**

- `p_248864_` (`int`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### getFrameCount

```java
private int getFrameCount()
```

**Returns:** `private int`

### upload

```java
void upload(int p_248895_, int p_250245_, int p_250458_, int p_251337_, NativeImage[] p_248825_)
```

**Parameters:**

- `p_248895_` (`int`)
- `p_250245_` (`int`)
- `p_250458_` (`int`)
- `p_251337_` (`int`)
- `p_248825_` (`NativeImage[]`)

### width

```java
public int width()
```

**Returns:** `int`

### height

```java
public int height()
```

**Returns:** `int`

### name

```java
public ResourceLocation name()
```

**Returns:** `ResourceLocation`

### getUniqueFrames

```java
public IntStream getUniqueFrames()
```

**Returns:** `public IntStream`

### createTicker

```java
public SpriteTicker createTicker()
```

**Returns:** `SpriteTicker`

### metadata

```java
public ResourceMetadata metadata()
```

**Returns:** `public ResourceMetadata`

### close

```java
public void close()
```

### toString

```java
public String toString()
```

**Returns:** `String`

### isTransparent

```java
public boolean isTransparent(int p_250374_, int p_250934_, int p_249573_)
```

**Parameters:**

- `p_250374_` (`int`)
- `p_250934_` (`int`)
- `p_249573_` (`int`)

**Returns:** `public boolean`

### uploadFirstFrame

```java
public void uploadFirstFrame(int p_252315_, int p_248634_)
```

**Parameters:**

- `p_252315_` (`int`)
- `p_248634_` (`int`)

**Returns:** `public void`

### AnimatedTexture

```java
 AnimatedTexture(List<SpriteContents.FrameInfo> p_250968_, int p_251686_, boolean p_251832_)
```

**Parameters:**

- `p_250968_` (`List<SpriteContents.FrameInfo>`)
- `p_251686_` (`int`)
- `p_251832_` (`boolean`)

**Returns:** ``

### getFrameX

```java
int getFrameX(int p_249475_)
```

**Parameters:**

- `p_249475_` (`int`)

**Returns:** `int`

### getFrameY

```java
int getFrameY(int p_251327_)
```

**Parameters:**

- `p_251327_` (`int`)

**Returns:** `int`

### uploadFrame

```java
void uploadFrame(int p_250449_, int p_248877_, int p_249060_)
```

**Parameters:**

- `p_250449_` (`int`)
- `p_248877_` (`int`)
- `p_249060_` (`int`)

### createTicker

```java
public SpriteTicker createTicker()
```

**Returns:** `public SpriteTicker`

### uploadFirstFrame

```java
public void uploadFirstFrame(int p_251807_, int p_248676_)
```

**Parameters:**

- `p_251807_` (`int`)
- `p_248676_` (`int`)

**Returns:** `public void`

### getUniqueFrames

```java
public IntStream getUniqueFrames()
```

**Returns:** `public IntStream`

### FrameInfo

```java
 FrameInfo(int p_248909_, int p_250552_)
```

**Parameters:**

- `p_248909_` (`int`)
- `p_250552_` (`int`)

**Returns:** ``

### InterpolationData

```java
 InterpolationData()
```

**Returns:** ``

### uploadInterpolatedFrame

```java
void uploadInterpolatedFrame(int p_250513_, int p_251644_, SpriteContents.Ticker p_248626_)
```

**Parameters:**

- `p_250513_` (`int`)
- `p_251644_` (`int`)
- `p_248626_` (`SpriteContents.Ticker`)

### getPixel

```java
private int getPixel(SpriteContents.AnimatedTexture p_251976_, int p_250761_, int p_250049_, int p_250004_, int p_251489_)
```

**Parameters:**

- `p_251976_` (`SpriteContents.AnimatedTexture`)
- `p_250761_` (`int`)
- `p_250049_` (`int`)
- `p_250004_` (`int`)
- `p_251489_` (`int`)

**Returns:** `private int`

### mix

```java
private int mix(double p_250974_, int p_252151_, int p_249832_)
```

**Parameters:**

- `p_250974_` (`double`)
- `p_252151_` (`int`)
- `p_249832_` (`int`)

**Returns:** `private int`

### close

```java
public void close()
```

### Ticker

```java
 Ticker(SpriteContents.AnimatedTexture p_249618_, SpriteContents.InterpolationData p_251097_)
```

**Parameters:**

- `p_249618_` (`SpriteContents.AnimatedTexture`)
- `p_251097_` (`SpriteContents.InterpolationData`)

**Returns:** ``

### tickAndUpload

```java
public void tickAndUpload(int p_249105_, int p_249676_)
```

**Parameters:**

- `p_249105_` (`int`)
- `p_249676_` (`int`)

### close

```java
public void close()
```
