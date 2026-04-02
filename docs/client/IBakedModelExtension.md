# IBakedModelExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `BakedModel`.

## Methods

### self

```java
private BakedModel self()
```

**Returns:** `private BakedModel`

### getQuads

```java
default List<BakedQuad> getQuads(BlockState state, Direction side, RandomSource rand, ModelData data, RenderType renderType)
```

**Parameters:**

- `state` (`BlockState`)
- `side` (`Direction`)
- `rand` (`RandomSource`)
- `data` (`ModelData`)
- `renderType` (`RenderType`)

**Returns:** `List<BakedQuad>`

### useAmbientOcclusion

```java
default TriState useAmbientOcclusion(BlockState state, ModelData data, RenderType renderType)
```

**Parameters:**

- `state` (`BlockState`)
- `data` (`ModelData`)
- `renderType` (`RenderType`)

**Returns:** `TriState`

### applyTransform

```java
default BakedModel applyTransform(ItemDisplayContext transformType, PoseStack poseStack, boolean applyLeftHandTransform)
```

**Parameters:**

- `transformType` (`ItemDisplayContext`)
- `poseStack` (`PoseStack`)
- `applyLeftHandTransform` (`boolean`)

**Returns:** `BakedModel`

### self

```java
return self()
```

**Returns:** `return`

### getModelData

```java
default ModelData getModelData(BlockAndTintGetter level, BlockPos pos, BlockState state, ModelData modelData)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `modelData` (`ModelData`)

**Returns:** `default ModelData`

### getParticleIcon

```java
default TextureAtlasSprite getParticleIcon(ModelData data)
```

**Parameters:**

- `data` (`ModelData`)

**Returns:** `default TextureAtlasSprite`

### getRenderTypes

```java
default ChunkRenderTypeSet getRenderTypes(BlockState state, RandomSource rand, ModelData data)
```

**Parameters:**

- `state` (`BlockState`)
- `rand` (`RandomSource`)
- `data` (`ModelData`)

**Returns:** `ChunkRenderTypeSet`

### getRenderTypes

```java
default List<RenderType> getRenderTypes(ItemStack itemStack, boolean fabulous)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `fabulous` (`boolean`)

**Returns:** `List<RenderType>`

### getRenderPasses

```java
default List<BakedModel> getRenderPasses(ItemStack itemStack, boolean fabulous)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `fabulous` (`boolean`)

**Returns:** `List<BakedModel>`
