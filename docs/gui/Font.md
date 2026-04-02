# Font

**Package:** `net.minecraft.client.gui`
**Type:** class
**Implements:** `net.neoforged.neoforge.client.extensions.IFontExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ALPHA_CUTOFF` | `int` |  |
| `lineHeight` | `int` |  |
| `random` | `RandomSource` |  |

## Methods

### Font

```java
public Font(Function<ResourceLocation, FontSet> p_243253_, boolean p_243245_)
```

**Parameters:**

- `p_243253_` (`Function<ResourceLocation, FontSet>`)
- `p_243245_` (`boolean`)

**Returns:** `public`

### getFontSet

```java
FontSet getFontSet(ResourceLocation p_92864_)
```

**Parameters:**

- `p_92864_` (`ResourceLocation`)

**Returns:** `FontSet`

### bidirectionalShaping

```java
public String bidirectionalShaping(String p_92802_)
```

**Parameters:**

- `p_92802_` (`String`)

**Returns:** `public String`

### drawInBatch

```java
public int drawInBatch(String p_272751_, float p_272661_, float p_273129_, int p_273272_, boolean p_273209_, Matrix4f p_272940_, MultiBufferSource p_273017_, Font.DisplayMode p_272608_, int p_273365_, int p_272755_)
```

**Parameters:**

- `p_272751_` (`String`)
- `p_272661_` (`float`)
- `p_273129_` (`float`)
- `p_273272_` (`int`)
- `p_273209_` (`boolean`)
- `p_272940_` (`Matrix4f`)
- `p_273017_` (`MultiBufferSource`)
- `p_272608_` (`Font.DisplayMode`)
- `p_273365_` (`int`)
- `p_272755_` (`int`)

**Returns:** `public int`

### drawInBatch

```java
public int drawInBatch(String p_272780_, float p_272811_, float p_272610_, int p_273422_, boolean p_273016_, Matrix4f p_273443_, MultiBufferSource p_273387_, Font.DisplayMode p_273551_, int p_272706_, int p_273114_, boolean p_273022_)
```

**Parameters:**

- `p_272780_` (`String`)
- `p_272811_` (`float`)
- `p_272610_` (`float`)
- `p_273422_` (`int`)
- `p_273016_` (`boolean`)
- `p_273443_` (`Matrix4f`)
- `p_273387_` (`MultiBufferSource`)
- `p_273551_` (`Font.DisplayMode`)
- `p_272706_` (`int`)
- `p_273114_` (`int`)
- `p_273022_` (`boolean`)

**Returns:** `public int`

### drawInBatch

```java
public int drawInBatch(Component p_273032_, float p_273249_, float p_273594_, int p_273714_, boolean p_273050_, Matrix4f p_272974_, MultiBufferSource p_273695_, Font.DisplayMode p_272782_, int p_272603_, int p_273632_)
```

**Parameters:**

- `p_273032_` (`Component`)
- `p_273249_` (`float`)
- `p_273594_` (`float`)
- `p_273714_` (`int`)
- `p_273050_` (`boolean`)
- `p_272974_` (`Matrix4f`)
- `p_273695_` (`MultiBufferSource`)
- `p_272782_` (`Font.DisplayMode`)
- `p_272603_` (`int`)
- `p_273632_` (`int`)

**Returns:** `public int`

### drawInBatch

```java
public int drawInBatch(FormattedCharSequence p_273262_, float p_273006_, float p_273254_, int p_273375_, boolean p_273674_, Matrix4f p_273525_, MultiBufferSource p_272624_, Font.DisplayMode p_273418_, int p_273330_, int p_272981_)
```

**Parameters:**

- `p_273262_` (`FormattedCharSequence`)
- `p_273006_` (`float`)
- `p_273254_` (`float`)
- `p_273375_` (`int`)
- `p_273674_` (`boolean`)
- `p_273525_` (`Matrix4f`)
- `p_272624_` (`MultiBufferSource`)
- `p_273418_` (`Font.DisplayMode`)
- `p_273330_` (`int`)
- `p_272981_` (`int`)

**Returns:** `public int`

### drawInBatch8xOutline

```java
public void drawInBatch8xOutline(FormattedCharSequence p_168646_, float p_168647_, float p_168648_, int p_168649_, int p_168650_, Matrix4f p_254170_, MultiBufferSource p_168652_, int p_168653_)
```

**Parameters:**

- `p_168646_` (`FormattedCharSequence`)
- `p_168647_` (`float`)
- `p_168648_` (`float`)
- `p_168649_` (`int`)
- `p_168650_` (`int`)
- `p_254170_` (`Matrix4f`)
- `p_168652_` (`MultiBufferSource`)
- `p_168653_` (`int`)

**Returns:** `public void`

### adjustColor

```java
private static int adjustColor(int p_92720_)
```

**Parameters:**

- `p_92720_` (`int`)

**Returns:** `private static int`

### drawInternal

```java
private int drawInternal(String p_273658_, float p_273086_, float p_272883_, int p_273547_, boolean p_272778_, Matrix4f p_272662_, MultiBufferSource p_273012_, Font.DisplayMode p_273381_, int p_272855_, int p_272745_, boolean p_272785_)
```

**Parameters:**

- `p_273658_` (`String`)
- `p_273086_` (`float`)
- `p_272883_` (`float`)
- `p_273547_` (`int`)
- `p_272778_` (`boolean`)
- `p_272662_` (`Matrix4f`)
- `p_273012_` (`MultiBufferSource`)
- `p_273381_` (`Font.DisplayMode`)
- `p_272855_` (`int`)
- `p_272745_` (`int`)
- `p_272785_` (`boolean`)

**Returns:** `private int`

### drawInternal

```java
private int drawInternal(FormattedCharSequence p_273025_, float p_273121_, float p_272717_, int p_273653_, boolean p_273531_, Matrix4f p_273265_, MultiBufferSource p_273560_, Font.DisplayMode p_273342_, int p_273373_, int p_273266_)
```

**Parameters:**

- `p_273025_` (`FormattedCharSequence`)
- `p_273121_` (`float`)
- `p_272717_` (`float`)
- `p_273653_` (`int`)
- `p_273531_` (`boolean`)
- `p_273265_` (`Matrix4f`)
- `p_273560_` (`MultiBufferSource`)
- `p_273342_` (`Font.DisplayMode`)
- `p_273373_` (`int`)
- `p_273266_` (`int`)

**Returns:** `private int`

### renderText

```java
private float renderText(String p_273765_, float p_273532_, float p_272783_, int p_273217_, boolean p_273583_, Matrix4f p_272734_, MultiBufferSource p_272595_, Font.DisplayMode p_273610_, int p_273727_, int p_273199_)
```

**Parameters:**

- `p_273765_` (`String`)
- `p_273532_` (`float`)
- `p_272783_` (`float`)
- `p_273217_` (`int`)
- `p_273583_` (`boolean`)
- `p_272734_` (`Matrix4f`)
- `p_272595_` (`MultiBufferSource`)
- `p_273610_` (`Font.DisplayMode`)
- `p_273727_` (`int`)
- `p_273199_` (`int`)

**Returns:** `private float`

### renderText

```java
private float renderText(FormattedCharSequence p_273322_, float p_272632_, float p_273541_, int p_273200_, boolean p_273312_, Matrix4f p_273276_, MultiBufferSource p_273392_, Font.DisplayMode p_272625_, int p_273774_, int p_273371_)
```

**Parameters:**

- `p_273322_` (`FormattedCharSequence`)
- `p_272632_` (`float`)
- `p_273541_` (`float`)
- `p_273200_` (`int`)
- `p_273312_` (`boolean`)
- `p_273276_` (`Matrix4f`)
- `p_273392_` (`MultiBufferSource`)
- `p_272625_` (`Font.DisplayMode`)
- `p_273774_` (`int`)
- `p_273371_` (`int`)

**Returns:** `private float`

### renderChar

```java
void renderChar(BakedGlyph p_254105_, boolean p_254001_, boolean p_254262_, float p_254256_, float p_253753_, float p_253629_, Matrix4f p_254014_, VertexConsumer p_253852_, float p_254317_, float p_253809_, float p_253870_, float p_254287_, int p_253905_)
```

**Parameters:**

- `p_254105_` (`BakedGlyph`)
- `p_254001_` (`boolean`)
- `p_254262_` (`boolean`)
- `p_254256_` (`float`)
- `p_253753_` (`float`)
- `p_253629_` (`float`)
- `p_254014_` (`Matrix4f`)
- `p_253852_` (`VertexConsumer`)
- `p_254317_` (`float`)
- `p_253809_` (`float`)
- `p_253870_` (`float`)
- `p_254287_` (`float`)
- `p_253905_` (`int`)

### width

```java
public int width(String p_92896_)
```

**Parameters:**

- `p_92896_` (`String`)

**Returns:** `public int`

### width

```java
public int width(FormattedText p_92853_)
```

**Parameters:**

- `p_92853_` (`FormattedText`)

**Returns:** `public int`

### width

```java
public int width(FormattedCharSequence p_92725_)
```

**Parameters:**

- `p_92725_` (`FormattedCharSequence`)

**Returns:** `public int`

### plainSubstrByWidth

```java
public String plainSubstrByWidth(String p_92838_, int p_92839_, boolean p_92840_)
```

**Parameters:**

- `p_92838_` (`String`)
- `p_92839_` (`int`)
- `p_92840_` (`boolean`)

**Returns:** `public String`

### plainSubstrByWidth

```java
public String plainSubstrByWidth(String p_92835_, int p_92836_)
```

**Parameters:**

- `p_92835_` (`String`)
- `p_92836_` (`int`)

**Returns:** `public String`

### substrByWidth

```java
public FormattedText substrByWidth(FormattedText p_92855_, int p_92856_)
```

**Parameters:**

- `p_92855_` (`FormattedText`)
- `p_92856_` (`int`)

**Returns:** `public FormattedText`

### wordWrapHeight

```java
public int wordWrapHeight(String p_92921_, int p_92922_)
```

**Parameters:**

- `p_92921_` (`String`)
- `p_92922_` (`int`)

**Returns:** `public int`

### wordWrapHeight

```java
public int wordWrapHeight(FormattedText p_239134_, int p_239135_)
```

**Parameters:**

- `p_239134_` (`FormattedText`)
- `p_239135_` (`int`)

**Returns:** `public int`

### split

```java
public List<FormattedCharSequence> split(FormattedText p_92924_, int p_92925_)
```

**Parameters:**

- `p_92924_` (`FormattedText`)
- `p_92925_` (`int`)

**Returns:** `public List<FormattedCharSequence>`

### isBidirectional

```java
public boolean isBidirectional()
```

**Returns:** `public boolean`

### getSplitter

```java
public StringSplitter getSplitter()
```

**Returns:** `public StringSplitter`

### self

```java
public Font self()
```

**Returns:** `Font`

### addEffect

```java
private void addEffect(BakedGlyph.Effect p_92965_)
```

**Parameters:**

- `p_92965_` (`BakedGlyph.Effect`)

**Returns:** `private void`

### StringRenderOutput

```java
public StringRenderOutput(MultiBufferSource p_181365_, float p_181366_, float p_181367_, int p_181368_, boolean p_181369_, Matrix4f p_254510_, Font.DisplayMode p_181371_, int p_181372_)
```

**Parameters:**

- `p_181365_` (`MultiBufferSource`)
- `p_181366_` (`float`)
- `p_181367_` (`float`)
- `p_181368_` (`int`)
- `p_181369_` (`boolean`)
- `p_254510_` (`Matrix4f`)
- `p_181371_` (`Font.DisplayMode`)
- `p_181372_` (`int`)

**Returns:** `public`

### accept

```java
public boolean accept(int p_92967_, Style p_92968_, int p_92969_)
```

**Parameters:**

- `p_92967_` (`int`)
- `p_92968_` (`Style`)
- `p_92969_` (`int`)

**Returns:** `boolean`

### finish

```java
public float finish(int p_92962_, float p_92963_)
```

**Parameters:**

- `p_92962_` (`int`)
- `p_92963_` (`float`)

**Returns:** `public float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DisplayMode` | enum |  |
