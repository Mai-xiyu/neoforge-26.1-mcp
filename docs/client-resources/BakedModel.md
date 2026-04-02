# BakedModel

**Package:** `net.minecraft.client.resources.model`
**Type:** interface
**Extends:** `net.neoforged.neoforge.client.extensions.IBakedModelExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getQuads

```java
List<BakedQuad> getQuads(BlockState p_235039_, Direction p_235040_, RandomSource p_235041_)
```

**Parameters:**

- `p_235039_` (`BlockState`)
- `p_235040_` (`Direction`)
- `p_235041_` (`RandomSource`)

**Returns:** `List<BakedQuad>`

### useAmbientOcclusion

```java
boolean useAmbientOcclusion()
```

**Returns:** `boolean`

### isGui3d

```java
boolean isGui3d()
```

**Returns:** `boolean`

### usesBlockLight

```java
boolean usesBlockLight()
```

**Returns:** `boolean`

### isCustomRenderer

```java
boolean isCustomRenderer()
```

**Returns:** `boolean`

### getParticleIcon

```java
TextureAtlasSprite getParticleIcon()
```

**Returns:** `TextureAtlasSprite`

### getTransforms

```java
default ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### getOverrides

```java
ItemOverrides getOverrides()
```

**Returns:** `ItemOverrides`
