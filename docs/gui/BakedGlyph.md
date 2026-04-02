# BakedGlyph

**Package:** `net.minecraft.client.gui.font.glyphs`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `x0` | `float` |  |
| `y0` | `float` |  |
| `x1` | `float` |  |
| `y1` | `float` |  |
| `depth` | `float` |  |
| `r` | `float` |  |
| `g` | `float` |  |
| `b` | `float` |  |
| `a` | `float` |  |

## Methods

### BakedGlyph

```java
public BakedGlyph(GlyphRenderTypes p_285527_, float p_285271_, float p_284970_, float p_285098_, float p_285023_, float p_285242_, float p_285043_, float p_285100_, float p_284948_)
```

**Parameters:**

- `p_285527_` (`GlyphRenderTypes`)
- `p_285271_` (`float`)
- `p_284970_` (`float`)
- `p_285098_` (`float`)
- `p_285023_` (`float`)
- `p_285242_` (`float`)
- `p_285043_` (`float`)
- `p_285100_` (`float`)
- `p_284948_` (`float`)

**Returns:** `public`

### render

```java
public void render(boolean p_95227_, float p_95228_, float p_95229_, Matrix4f p_253706_, VertexConsumer p_95231_, float p_95232_, float p_95233_, float p_95234_, float p_95235_, int p_95236_)
```

**Parameters:**

- `p_95227_` (`boolean`)
- `p_95228_` (`float`)
- `p_95229_` (`float`)
- `p_253706_` (`Matrix4f`)
- `p_95231_` (`VertexConsumer`)
- `p_95232_` (`float`)
- `p_95233_` (`float`)
- `p_95234_` (`float`)
- `p_95235_` (`float`)
- `p_95236_` (`int`)

**Returns:** `public void`

### renderEffect

```java
public void renderEffect(BakedGlyph.Effect p_95221_, Matrix4f p_254370_, VertexConsumer p_95223_, int p_95224_)
```

**Parameters:**

- `p_95221_` (`BakedGlyph.Effect`)
- `p_254370_` (`Matrix4f`)
- `p_95223_` (`VertexConsumer`)
- `p_95224_` (`int`)

**Returns:** `public void`

### renderType

```java
public RenderType renderType(Font.DisplayMode p_181388_)
```

**Parameters:**

- `p_181388_` (`Font.DisplayMode`)

**Returns:** `public RenderType`

### Effect

```java
public Effect(float p_95247_, float p_95248_, float p_95249_, float p_95250_, float p_95251_, float p_95252_, float p_95253_, float p_95254_, float p_95255_)
```

**Parameters:**

- `p_95247_` (`float`)
- `p_95248_` (`float`)
- `p_95249_` (`float`)
- `p_95250_` (`float`)
- `p_95251_` (`float`)
- `p_95252_` (`float`)
- `p_95253_` (`float`)
- `p_95254_` (`float`)
- `p_95255_` (`float`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Effect` | class |  |
