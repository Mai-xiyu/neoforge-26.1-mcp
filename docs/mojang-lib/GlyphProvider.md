# GlyphProvider

**Package:** `com.mojang.blaze3d.font`
**Type:** interface
**Extends:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### close

```java
default void close()
```

### getGlyph

```java
default GlyphInfo getGlyph(int p_231091_)
```

**Parameters:**

- `p_231091_` (`int`)

**Returns:** `GlyphInfo`

### getSupportedGlyphs

```java
IntSet getSupportedGlyphs()
```

**Returns:** `IntSet`

### close

```java
public void close()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Conditional` | record |  |
