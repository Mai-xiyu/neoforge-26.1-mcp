# FontTexture

**Package:** `net.minecraft.client.gui.font`
**Type:** class
**Extends:** `AbstractTexture`
**Implements:** `Dumpable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FontTexture

```java
public FontTexture(GlyphRenderTypes p_285000_, boolean p_285085_)
```

**Parameters:**

- `p_285000_` (`GlyphRenderTypes`)
- `p_285085_` (`boolean`)

**Returns:** `public`

### load

```java
public void load(ResourceManager p_95101_)
```

**Parameters:**

- `p_95101_` (`ResourceManager`)

### close

```java
public void close()
```

### add

```java
public BakedGlyph add(SheetGlyphInfo p_232569_)
```

**Parameters:**

- `p_232569_` (`SheetGlyphInfo`)

**Returns:** `BakedGlyph`

### dumpContents

```java
public void dumpContents(ResourceLocation p_285121_, Path p_285511_)
```

**Parameters:**

- `p_285121_` (`ResourceLocation`)
- `p_285511_` (`Path`)

### Node

```java
 Node(int p_95113_, int p_95114_, int p_95115_, int p_95116_)
```

**Parameters:**

- `p_95113_` (`int`)
- `p_95114_` (`int`)
- `p_95115_` (`int`)
- `p_95116_` (`int`)

**Returns:** ``

### insert

```java
FontTexture.Node insert(SheetGlyphInfo p_232571_)
```

**Parameters:**

- `p_232571_` (`SheetGlyphInfo`)

**Returns:** `FontTexture.Node`
