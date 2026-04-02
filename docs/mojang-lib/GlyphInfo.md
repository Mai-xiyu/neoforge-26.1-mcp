# GlyphInfo

**Package:** `com.mojang.blaze3d.font`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getAdvance

```java
float getAdvance()
```

**Returns:** `float`

### getAdvance

```java
default float getAdvance(boolean p_83828_)
```

**Parameters:**

- `p_83828_` (`boolean`)

**Returns:** `default float`

### getBoldOffset

```java
default float getBoldOffset()
```

**Returns:** `default float`

### getShadowOffset

```java
default float getShadowOffset()
```

**Returns:** `default float`

### bake

```java
BakedGlyph bake(Function<SheetGlyphInfo, BakedGlyph> p_231088_)
```

**Parameters:**

- `p_231088_` (`Function<SheetGlyphInfo, BakedGlyph>`)

**Returns:** `BakedGlyph`

### bake

```java
default BakedGlyph bake(Function<SheetGlyphInfo, BakedGlyph> p_231090_)
```

**Parameters:**

- `p_231090_` (`Function<SheetGlyphInfo, BakedGlyph>`)

**Returns:** `BakedGlyph`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SpaceGlyphInfo` | interface |  |
