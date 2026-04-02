# TextureAtlas

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Extends:** `AbstractTexture`
**Implements:** `Dumpable`, `Tickable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TextureAtlas

```java
public TextureAtlas(ResourceLocation p_118269_)
```

**Parameters:**

- `p_118269_` (`ResourceLocation`)

**Returns:** `public`

### load

```java
public void load(ResourceManager p_118282_)
```

**Parameters:**

- `p_118282_` (`ResourceManager`)

### upload

```java
public void upload(SpriteLoader.Preparations p_250662_)
```

**Parameters:**

- `p_250662_` (`SpriteLoader.Preparations`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### dumpContents

```java
public void dumpContents(ResourceLocation p_276106_, Path p_276127_)
```

**Parameters:**

- `p_276106_` (`ResourceLocation`)
- `p_276127_` (`Path`)

### dumpSpriteNames

```java
 dumpSpriteNames()
```

**Returns:** ``

### dumpSpriteNames

```java
private static void dumpSpriteNames(Path p_261769_, String p_262102_, Map<ResourceLocation, TextureAtlasSprite> p_261722_)
```

**Parameters:**

- `p_261769_` (`Path`)
- `p_262102_` (`String`)
- `p_261722_` (`Map<ResourceLocation, TextureAtlasSprite>`)

**Returns:** `private static void`

### cycleAnimationFrames

```java
public void cycleAnimationFrames()
```

**Returns:** `public void`

### tick

```java
public void tick()
```

### getSprite

```java
public TextureAtlasSprite getSprite(ResourceLocation p_118317_)
```

**Parameters:**

- `p_118317_` (`ResourceLocation`)

**Returns:** `public TextureAtlasSprite`

### IllegalStateException

```java
throw new IllegalStateException("Tried to lookup sprite, but atlas is not initialized")
```

**Parameters:**

- `sprite` (`"Tried to lookup`)
- `initialized"` (`but atlas is not`)

**Returns:** `throw new`

### clearTextureData

```java
public void clearTextureData()
```

**Returns:** `public void`

### location

```java
public ResourceLocation location()
```

**Returns:** `public ResourceLocation`

### maxSupportedTextureSize

```java
public int maxSupportedTextureSize()
```

**Returns:** `public int`

### getWidth

```java
int getWidth()
```

**Returns:** `int`

### getHeight

```java
int getHeight()
```

**Returns:** `int`

### updateFilter

```java
public void updateFilter(SpriteLoader.Preparations p_251993_)
```

**Parameters:**

- `p_251993_` (`SpriteLoader.Preparations`)

**Returns:** `public void`

### getTextures

```java
public Map<ResourceLocation, TextureAtlasSprite> getTextures()
```

**Returns:** `public Map<ResourceLocation, TextureAtlasSprite>`
