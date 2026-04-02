# UnihexProvider

**Package:** `net.minecraft.client.gui.font.providers`
**Type:** class
**Implements:** `GlyphProvider`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### UnihexProvider

```java
 UnihexProvider(CodepointMap<UnihexProvider.Glyph> p_285457_)
```

**Parameters:**

- `p_285457_` (`CodepointMap<UnihexProvider.Glyph>`)

**Returns:** ``

### getGlyph

```java
public GlyphInfo getGlyph(int p_285239_)
```

**Parameters:**

- `p_285239_` (`int`)

**Returns:** `GlyphInfo`

### getSupportedGlyphs

```java
public IntSet getSupportedGlyphs()
```

**Returns:** `IntSet`

### unpackBitsToBytes

```java
static void unpackBitsToBytes(IntBuffer p_285211_, int p_285508_, int p_285312_, int p_285412_)
```

**Parameters:**

- `p_285211_` (`IntBuffer`)
- `p_285508_` (`int`)
- `p_285312_` (`int`)
- `p_285412_` (`int`)

### unpackBitsToBytes

```java
static void unpackBitsToBytes(IntBuffer p_285283_, UnihexProvider.LineData p_285485_, int p_284940_, int p_284950_)
```

**Parameters:**

- `p_285283_` (`IntBuffer`)
- `p_285485_` (`UnihexProvider.LineData`)
- `p_284940_` (`int`)
- `p_284950_` (`int`)

**Returns:** `static void`

### unpackBitsToBytes

```java
 unpackBitsToBytes()
```

**Returns:** ``

### readFromStream

```java
static void readFromStream(InputStream p_285315_, UnihexProvider.ReaderOutput p_285353_)
```

**Parameters:**

- `p_285315_` (`InputStream`)
- `p_285353_` (`UnihexProvider.ReaderOutput`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid entry at line " + i + ": expected 4, 5 or 6 hex digits followed by a colon")
```

**Parameters:**

- `4` (`"Invalid entry at line " + i + ": expected`)
- `colon"` (`5 or 6 hex digits followed by a`)

**Returns:** `throw new`

### copyUntil

```java
 copyUntil()
```

**Returns:** ``

### decodeHex

```java
static int decodeHex(int p_285205_, ByteList p_285268_, int p_285345_)
```

**Parameters:**

- `p_285205_` (`int`)
- `p_285268_` (`ByteList`)
- `p_285345_` (`int`)

**Returns:** `static int`

### decodeHex

```java
private static int decodeHex(int p_284952_, byte p_285036_)
```

**Parameters:**

- `p_284952_` (`int`)
- `p_285036_` (`byte`)

**Returns:** `private static int`

### copyUntil

```java
private static boolean copyUntil(InputStream p_284994_, ByteList p_285351_, int p_285177_)
```

**Parameters:**

- `p_284994_` (`InputStream`)
- `p_285351_` (`ByteList`)
- `p_285177_` (`int`)

**Returns:** `private static boolean`

### line

```java
public int line(int p_285203_)
```

**Parameters:**

- `p_285203_` (`int`)

**Returns:** `int`

### read

```java
static UnihexProvider.LineData read(int p_285080_, ByteList p_285481_)
```

**Parameters:**

- `p_285080_` (`int`)
- `p_285481_` (`ByteList`)

**Returns:** `static UnihexProvider.LineData`

### bitWidth

```java
public int bitWidth()
```

**Returns:** `int`

### Definition

```java
private Definition(ResourceLocation p_286378_, List<UnihexProvider.OverrideRange> p_286770_)
```

**Parameters:**

- `p_286378_` (`ResourceLocation`)
- `p_286770_` (`List<UnihexProvider.OverrideRange>`)

**Returns:** `private`

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
private GlyphProvider load(ResourceManager p_286472_)
```

**Parameters:**

- `p_286472_` (`ResourceManager`)

**Returns:** `private GlyphProvider`

### loadData

```java
private UnihexProvider loadData(InputStream p_286795_)
```

**Parameters:**

- `p_286795_` (`InputStream`)

**Returns:** `private UnihexProvider`

### Dimensions

```java
public static record Dimensions(int left, int right)
```

**Parameters:**

- `left` (`int`)
- `right` (`int`)

**Returns:** `record`

### pack

```java
public int pack()
```

**Returns:** `public int`

### pack

```java
return pack()
```

**Returns:** `return`

### pack

```java
public static int pack(int p_285339_, int p_285120_)
```

**Parameters:**

- `p_285339_` (`int`)
- `p_285120_` (`int`)

**Returns:** `public static int`

### left

```java
public static int left(int p_285195_)
```

**Parameters:**

- `p_285195_` (`int`)

**Returns:** `public static int`

### right

```java
public static int right(int p_285419_)
```

**Parameters:**

- `p_285419_` (`int`)

**Returns:** `public static int`

### width

```java
public int width()
```

**Returns:** `public int`

### getAdvance

```java
public float getAdvance()
```

**Returns:** `float`

### getShadowOffset

```java
public float getShadowOffset()
```

**Returns:** `float`

### getBoldOffset

```java
public float getBoldOffset()
```

**Returns:** `float`

### bake

```java
public BakedGlyph bake(Function<SheetGlyphInfo, BakedGlyph> p_285377_)
```

**Parameters:**

- `p_285377_` (`Function<SheetGlyphInfo, BakedGlyph>`)

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

### upload

```java
public void upload(int p_285473_, int p_285510_)
```

**Parameters:**

- `p_285473_` (`int`)
- `p_285510_` (`int`)

### isColored

```java
public boolean isColored()
```

**Returns:** `boolean`

### line

```java
public int line(int p_285172_)
```

**Parameters:**

- `p_285172_` (`int`)

**Returns:** `int`

### read24

```java
static UnihexProvider.LineData read24(int p_285362_, ByteList p_285123_)
```

**Parameters:**

- `p_285362_` (`int`)
- `p_285123_` (`ByteList`)

**Returns:** `static UnihexProvider.LineData`

### read32

```java
public static UnihexProvider.LineData read32(int p_285222_, ByteList p_285346_)
```

**Parameters:**

- `p_285222_` (`int`)
- `p_285346_` (`ByteList`)

**Returns:** `public static UnihexProvider.LineData`

### line

```java
int line(int p_285166_)
```

**Parameters:**

- `p_285166_` (`int`)

**Returns:** `int`

### bitWidth

```java
int bitWidth()
```

**Returns:** `int`

### mask

```java
default int mask()
```

**Returns:** `default int`

### calculateWidth

```java
default int calculateWidth()
```

**Returns:** `default int`

### OverrideRange

```java
static record OverrideRange(int from, int to, UnihexProvider.Dimensions dimensions)
```

**Parameters:**

- `from` (`int`)
- `to` (`int`)
- `dimensions` (`UnihexProvider.Dimensions`)

**Returns:** `record`

### accept

```java
void accept(int p_285139_, UnihexProvider.LineData p_284982_)
```

**Parameters:**

- `p_285139_` (`int`)
- `p_284982_` (`UnihexProvider.LineData`)

### line

```java
public int line(int p_285158_)
```

**Parameters:**

- `p_285158_` (`int`)

**Returns:** `int`

### read

```java
static UnihexProvider.LineData read(int p_285528_, ByteList p_284958_)
```

**Parameters:**

- `p_285528_` (`int`)
- `p_284958_` (`ByteList`)

**Returns:** `static UnihexProvider.LineData`

### bitWidth

```java
public int bitWidth()
```

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Definition` | class |  |
| `Dimensions` | record |  |
| `LineData` | interface |  |
| `ReaderOutput` | interface |  |
