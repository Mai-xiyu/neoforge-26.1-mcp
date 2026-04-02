# BuiltInModel

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Implements:** `BakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BuiltInModel

```java
public BuiltInModel(ItemTransforms p_119172_, ItemOverrides p_119173_, TextureAtlasSprite p_119174_, boolean p_119175_)
```

**Parameters:**

- `p_119172_` (`ItemTransforms`)
- `p_119173_` (`ItemOverrides`)
- `p_119174_` (`TextureAtlasSprite`)
- `p_119175_` (`boolean`)

**Returns:** `public`

### getQuads

```java
public List<BakedQuad> getQuads(BlockState p_235043_, Direction p_235044_, RandomSource p_235045_)
```

**Parameters:**

- `p_235043_` (`BlockState`)
- `p_235044_` (`Direction`)
- `p_235045_` (`RandomSource`)

**Returns:** `List<BakedQuad>`

### useAmbientOcclusion

```java
public boolean useAmbientOcclusion()
```

**Returns:** `boolean`

### isGui3d

```java
public boolean isGui3d()
```

**Returns:** `boolean`

### usesBlockLight

```java
public boolean usesBlockLight()
```

**Returns:** `boolean`

### isCustomRenderer

```java
public boolean isCustomRenderer()
```

**Returns:** `boolean`

### getParticleIcon

```java
public TextureAtlasSprite getParticleIcon()
```

**Returns:** `TextureAtlasSprite`

### getTransforms

```java
public ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### getOverrides

```java
public ItemOverrides getOverrides()
```

**Returns:** `ItemOverrides`
