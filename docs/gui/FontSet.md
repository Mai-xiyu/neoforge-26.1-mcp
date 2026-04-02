# FontSet

**Package:** `net.minecraft.client.gui.font`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FontSet

```java
public FontSet(TextureManager p_95062_, ResourceLocation p_95063_)
```

**Parameters:**

- `p_95062_` (`TextureManager`)
- `p_95063_` (`ResourceLocation`)

**Returns:** `public`

### reload

```java
public void reload(List<GlyphProvider.Conditional> p_326339_, Set<FontOption> p_326154_)
```

**Parameters:**

- `p_326339_` (`List<GlyphProvider.Conditional>`)
- `p_326154_` (`Set<FontOption>`)

**Returns:** `public void`

### reload

```java
public void reload(Set<FontOption> p_326252_)
```

**Parameters:**

- `p_326252_` (`Set<FontOption>`)

**Returns:** `public void`

### resetTextures

```java
private void resetTextures()
```

**Returns:** `private void`

### selectProviders

```java
private List<GlyphProvider> selectProviders(List<GlyphProvider.Conditional> p_326151_, Set<FontOption> p_326291_)
```

**Parameters:**

- `p_326151_` (`List<GlyphProvider.Conditional>`)
- `p_326291_` (`Set<FontOption>`)

**Returns:** `private List<GlyphProvider>`

### close

```java
public void close()
```

### closeTextures

```java
private void closeTextures()
```

**Returns:** `private void`

### hasFishyAdvance

```java
private static boolean hasFishyAdvance(GlyphInfo p_243323_)
```

**Parameters:**

- `p_243323_` (`GlyphInfo`)

**Returns:** `private static boolean`

### computeGlyphInfo

```java
private FontSet.GlyphInfoFilter computeGlyphInfo(int p_243321_)
```

**Parameters:**

- `p_243321_` (`int`)

**Returns:** `private FontSet.GlyphInfoFilter`

### getGlyphInfo

```java
public GlyphInfo getGlyphInfo(int p_243235_, boolean p_243251_)
```

**Parameters:**

- `p_243235_` (`int`)
- `p_243251_` (`boolean`)

**Returns:** `public GlyphInfo`

### computeBakedGlyph

```java
private BakedGlyph computeBakedGlyph(int p_232565_)
```

**Parameters:**

- `p_232565_` (`int`)

**Returns:** `private BakedGlyph`

### getGlyph

```java
public BakedGlyph getGlyph(int p_95079_)
```

**Parameters:**

- `p_95079_` (`int`)

**Returns:** `public BakedGlyph`

### stitch

```java
private BakedGlyph stitch(SheetGlyphInfo p_232557_)
```

**Parameters:**

- `p_232557_` (`SheetGlyphInfo`)

**Returns:** `private BakedGlyph`

### getRandomGlyph

```java
public BakedGlyph getRandomGlyph(GlyphInfo p_95068_)
```

**Parameters:**

- `p_95068_` (`GlyphInfo`)

**Returns:** `public BakedGlyph`

### name

```java
public ResourceLocation name()
```

**Returns:** `public ResourceLocation`

### whiteGlyph

```java
public BakedGlyph whiteGlyph()
```

**Returns:** `public BakedGlyph`

### GlyphInfoFilter

```java
static record GlyphInfoFilter(GlyphInfo glyphInfo, GlyphInfo glyphInfoNotFishy)
```

**Parameters:**

- `glyphInfo` (`GlyphInfo`)
- `glyphInfoNotFishy` (`GlyphInfo`)

**Returns:** `record`

### select

```java
GlyphInfo select(boolean p_243218_)
```

**Parameters:**

- `p_243218_` (`boolean`)

**Returns:** `GlyphInfo`
