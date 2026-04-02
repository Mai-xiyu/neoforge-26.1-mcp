# TextureAtlasSprite

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TextureAtlasSprite

```java
protected TextureAtlasSprite(ResourceLocation p_250211_, SpriteContents p_248526_, int p_248950_, int p_249741_, int p_248672_, int p_248637_)
```

**Parameters:**

- `p_250211_` (`ResourceLocation`)
- `p_248526_` (`SpriteContents`)
- `p_248950_` (`int`)
- `p_249741_` (`int`)
- `p_248672_` (`int`)
- `p_248637_` (`int`)

**Returns:** `protected`

### getX

```java
public int getX()
```

**Returns:** `public int`

### getY

```java
public int getY()
```

**Returns:** `public int`

### getU0

```java
public float getU0()
```

**Returns:** `public float`

### getU1

```java
public float getU1()
```

**Returns:** `public float`

### contents

```java
public SpriteContents contents()
```

**Returns:** `public SpriteContents`

### createTicker

```java
public TextureAtlasSprite.Ticker createTicker()
```

**Returns:** `TextureAtlasSprite.Ticker`

### tickAndUpload

```java
public void tickAndUpload()
```

### close

```java
public void close()
```

### getU

```java
public float getU(float p_294967_)
```

**Parameters:**

- `p_294967_` (`float`)

**Returns:** `public float`

### getUOffset

```java
public float getUOffset(float p_174728_)
```

**Parameters:**

- `p_174728_` (`float`)

**Returns:** `public float`

### getV0

```java
public float getV0()
```

**Returns:** `public float`

### getV1

```java
public float getV1()
```

**Returns:** `public float`

### getV

```java
public float getV(float p_294167_)
```

**Parameters:**

- `p_294167_` (`float`)

**Returns:** `public float`

### getVOffset

```java
public float getVOffset(float p_174742_)
```

**Parameters:**

- `p_174742_` (`float`)

**Returns:** `public float`

### atlasLocation

```java
public ResourceLocation atlasLocation()
```

**Returns:** `public ResourceLocation`

### toString

```java
public String toString()
```

**Returns:** `String`

### uploadFirstFrame

```java
public void uploadFirstFrame()
```

**Returns:** `public void`

### atlasSize

```java
private float atlasSize()
```

**Returns:** `private float`

### uvShrinkRatio

```java
public float uvShrinkRatio()
```

**Returns:** `public float`

### wrap

```java
public VertexConsumer wrap(VertexConsumer p_118382_)
```

**Parameters:**

- `p_118382_` (`VertexConsumer`)

**Returns:** `public VertexConsumer`

### SpriteCoordinateExpander

```java
return new SpriteCoordinateExpander()
```

**Returns:** `return new`

### tickAndUpload

```java
void tickAndUpload()
```

### close

```java
void close()
```

### getPixelRGBA

```java
Exposed a pixel RGBA getter
    public int getPixelRGBA(int frameIndex, int x, int y)
```

**Parameters:**

- `frameIndex` (`int`)
- `x` (`int`)
- `y` (`int`)

**Returns:** `Exposed a pixel RGBA getter
    public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Ticker` | interface |  |
