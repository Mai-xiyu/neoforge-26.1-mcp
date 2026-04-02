# SpecialGlyphs

**Package:** `net.minecraft.client.gui.font.glyphs`
**Type:** enum
**Implements:** `GlyphInfo`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### generate

```java
private static NativeImage generate(int p_232609_, int p_232610_, SpecialGlyphs.PixelProvider p_232611_)
```

**Parameters:**

- `p_232609_` (`int`)
- `p_232610_` (`int`)
- `p_232611_` (`SpecialGlyphs.PixelProvider`)

**Returns:** `private static NativeImage`

### SpecialGlyphs

```java
private SpecialGlyphs(Supplier<NativeImage> p_232604_)
```

**Parameters:**

- `p_232604_` (`Supplier<NativeImage>`)

**Returns:** `private`

### getAdvance

```java
public float getAdvance()
```

**Returns:** `float`

### bake

```java
public BakedGlyph bake(Function<SheetGlyphInfo, BakedGlyph> p_232616_)
```

**Parameters:**

- `p_232616_` (`Function<SheetGlyphInfo, BakedGlyph>`)

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

### upload

```java
public void upload(int p_232629_, int p_232630_)
```

**Parameters:**

- `p_232629_` (`int`)
- `p_232630_` (`int`)

### isColored

```java
public boolean isColored()
```

**Returns:** `boolean`

### getColor

```java
int getColor(int p_232635_, int p_232636_)
```

**Parameters:**

- `p_232635_` (`int`)
- `p_232636_` (`int`)

**Returns:** `int`
