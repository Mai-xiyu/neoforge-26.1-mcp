# BitmapProvider

**Package:** `net.minecraft.client.gui.font.providers`
**Type:** class
**Implements:** `GlyphProvider`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BitmapProvider.Definition>` |  |

## Methods

### BitmapProvider

```java
 BitmapProvider(NativeImage p_285380_, CodepointMap<BitmapProvider.Glyph> p_285445_)
```

**Parameters:**

- `p_285380_` (`NativeImage`)
- `p_285445_` (`CodepointMap<BitmapProvider.Glyph>`)

**Returns:** ``

### close

```java
public void close()
```

### getGlyph

```java
public GlyphInfo getGlyph(int p_232638_)
```

**Parameters:**

- `p_232638_` (`int`)

**Returns:** `GlyphInfo`

### getSupportedGlyphs

```java
public IntSet getSupportedGlyphs()
```

**Returns:** `IntSet`

### validateDimensions

```java
private static DataResult<int[][]> validateDimensions(int[][] p_286348_)
```

**Parameters:**

- `p_286348_` (`int[][]`)

**Returns:** `private static DataResult<int[][]>`

### validate

```java
private static DataResult<BitmapProvider.Definition> validate(BitmapProvider.Definition p_286662_)
```

**Parameters:**

- `p_286662_` (`BitmapProvider.Definition`)

**Returns:** `private static DataResult<BitmapProvider.Definition>`

### type

```java
public GlyphProviderType type()
```

**Returns:** `GlyphProviderType`

### unpack

```java
public Either<GlyphProviderDefinition.Loader, GlyphProviderDefinition.Reference> unpack()
```

**Returns:** `Either<GlyphProviderDefinition.Loader, GlyphProviderDefinition.Reference>`

### load

```java
private GlyphProvider load(ResourceManager p_286694_)
```

**Parameters:**

- `p_286694_` (`ResourceManager`)

**Returns:** `private GlyphProvider`

### getActualGlyphWidth

```java
private int getActualGlyphWidth(NativeImage p_286449_, int p_286656_, int p_286554_, int p_286657_, int p_286307_)
```

**Parameters:**

- `p_286449_` (`NativeImage`)
- `p_286656_` (`int`)
- `p_286554_` (`int`)
- `p_286657_` (`int`)
- `p_286307_` (`int`)

**Returns:** `private int`

### getAdvance

```java
public float getAdvance()
```

**Returns:** `float`

### bake

```java
public BakedGlyph bake(Function<SheetGlyphInfo, BakedGlyph> p_232640_)
```

**Parameters:**

- `p_232640_` (`Function<SheetGlyphInfo, BakedGlyph>`)

**Returns:** `BakedGlyph`

### getOversample

```java
public float getOversample()
```

**Returns:** `float`

### getPixelWidth

```java
public int getPixelWidth()
```

**Returns:** `int`

### getPixelHeight

```java
public int getPixelHeight()
```

**Returns:** `int`

### getBearingTop

```java
public float getBearingTop()
```

**Returns:** `float`

### upload

```java
public void upload(int p_232658_, int p_232659_)
```

**Parameters:**

- `p_232658_` (`int`)
- `p_232659_` (`int`)

### isColored

```java
public boolean isColored()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Definition` | record |  |
