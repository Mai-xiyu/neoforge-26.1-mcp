# BakedQuad

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `vertices` | `int[]` |  |
| `tintIndex` | `int` |  |
| `direction` | `Direction` |  |
| `sprite` | `TextureAtlasSprite` |  |

## Methods

### BakedQuad

```java
public BakedQuad(int[] p_111298_, int p_111299_, Direction p_111300_, TextureAtlasSprite p_111301_, boolean p_111302_)
```

**Parameters:**

- `p_111298_` (`int[]`)
- `p_111299_` (`int`)
- `p_111300_` (`Direction`)
- `p_111301_` (`TextureAtlasSprite`)
- `p_111302_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### BakedQuad

```java
public BakedQuad(int[] p_111298_, int p_111299_, Direction p_111300_, TextureAtlasSprite p_111301_, boolean p_111302_, boolean hasAmbientOcclusion)
```

**Parameters:**

- `p_111298_` (`int[]`)
- `p_111299_` (`int`)
- `p_111300_` (`Direction`)
- `p_111301_` (`TextureAtlasSprite`)
- `p_111302_` (`boolean`)
- `hasAmbientOcclusion` (`boolean`)

**Returns:** `public`

### getSprite

```java
public TextureAtlasSprite getSprite()
```

**Returns:** `public TextureAtlasSprite`

### getVertices

```java
public int[] getVertices()
```

**Returns:** `public int[]`

### isTinted

```java
public boolean isTinted()
```

**Returns:** `public boolean`

### getTintIndex

```java
public int getTintIndex()
```

**Returns:** `public int`

### getDirection

```java
public Direction getDirection()
```

**Returns:** `public Direction`

### isShade

```java
public boolean isShade()
```

**Returns:** `public boolean`

### hasAmbientOcclusion

```java
public boolean hasAmbientOcclusion()
```

**Returns:** `boolean`
