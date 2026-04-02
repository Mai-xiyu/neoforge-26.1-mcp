# TrueTypeGlyphProvider

**Package:** `com.mojang.blaze3d.font`
**Type:** class
**Implements:** `GlyphProvider`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TrueTypeGlyphProvider

```java
public TrueTypeGlyphProvider(ByteBuffer p_83846_, FT_Face p_320481_, float p_83848_, float p_83849_, float p_83850_, float p_83851_, String p_83852_)
```

**Parameters:**

- `p_83846_` (`ByteBuffer`)
- `p_320481_` (`FT_Face`)
- `p_83848_` (`float`)
- `p_83849_` (`float`)
- `p_83850_` (`float`)
- `p_83851_` (`float`)
- `p_83852_` (`String`)

**Returns:** `public`

### getGlyph

```java
public GlyphInfo getGlyph(int p_231116_)
```

**Parameters:**

- `p_231116_` (`int`)

**Returns:** `GlyphInfo`

### validateFontOpen

```java
FT_Face validateFontOpen()
```

**Returns:** `FT_Face`

### IllegalStateException

```java
throw new IllegalStateException("Provider already closed")
```

**Parameters:**

- `closed"` (`"Provider already`)

**Returns:** `throw new`

### close

```java
public void close()
```

### synchronized

```java
 synchronized()
```

**Returns:** ``

### getSupportedGlyphs

```java
public IntSet getSupportedGlyphs()
```

**Returns:** `IntSet`

### Glyph

```java
 Glyph(float p_83886_, float p_83887_, int p_83882_, int p_83883_, float p_320408_, int p_83884_)
```

**Parameters:**

- `p_83886_` (`float`)
- `p_83887_` (`float`)
- `p_83882_` (`int`)
- `p_83883_` (`int`)
- `p_320408_` (`float`)
- `p_83884_` (`int`)

**Returns:** ``

### getAdvance

```java
public float getAdvance()
```

**Returns:** `float`

### bake

```java
public BakedGlyph bake(Function<SheetGlyphInfo, BakedGlyph> p_231120_)
```

**Parameters:**

- `p_231120_` (`Function<SheetGlyphInfo, BakedGlyph>`)

**Returns:** `BakedGlyph`

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

### getOversample

```java
public float getOversample()
```

**Returns:** `float`

### getBearingLeft

```java
public float getBearingLeft()
```

**Returns:** `float`

### getBearingTop

```java
public float getBearingTop()
```

**Returns:** `float`

### upload

```java
public void upload(int p_231126_, int p_231127_)
```

**Parameters:**

- `p_231126_` (`int`)
- `p_231127_` (`int`)

### isColored

```java
public boolean isColored()
```

**Returns:** `boolean`
