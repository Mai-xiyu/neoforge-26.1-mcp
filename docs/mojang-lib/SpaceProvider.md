# SpaceProvider

**Package:** `com.mojang.blaze3d.font`
**Type:** class
**Implements:** `GlyphProvider`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SpaceProvider.Definition>` |  |

## Methods

### SpaceProvider

```java
public SpaceProvider(Map<Integer, Float> p_286456_)
```

**Parameters:**

- `p_286456_` (`Map<Integer, Float>`)

**Returns:** `public`

### getGlyph

```java
public GlyphInfo getGlyph(int p_231105_)
```

**Parameters:**

- `p_231105_` (`int`)

**Returns:** `GlyphInfo`

### getSupportedGlyphs

```java
public IntSet getSupportedGlyphs()
```

**Returns:** `IntSet`

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

### SpaceProvider

```java
> new SpaceProvider()
```

**Returns:** `> new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Definition` | record |  |
