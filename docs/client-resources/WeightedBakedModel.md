# WeightedBakedModel

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Implements:** `BakedModel`, `net.neoforged.neoforge.client.model.IDynamicBakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WeightedBakedModel

```java
public WeightedBakedModel(List<WeightedEntry.Wrapper<BakedModel>> p_119544_)
```

**Parameters:**

- `p_119544_` (`List<WeightedEntry.Wrapper<BakedModel>>`)

**Returns:** `public`

### getQuads

```java
so child models can have custom logic
    public List<BakedQuad> getQuads(BlockState p_235058_, Direction p_235059_, RandomSource p_235060_, net.neoforged.neoforge.client.model.data.ModelData modelData, .jetbrains.annotations.Nullable net.minecraft.client.renderer.RenderType renderType)
```

**Parameters:**

- `p_235058_` (`BlockState`)
- `p_235059_` (`Direction`)
- `p_235060_` (`RandomSource`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)
- `renderType` (`.jetbrains.annotations.Nullable net.minecraft.client.renderer.RenderType`)

**Returns:** `so child models can have custom logic
    public List<BakedQuad>`

### useAmbientOcclusion

```java
public boolean useAmbientOcclusion()
```

**Returns:** `boolean`

### useAmbientOcclusion

```java
public net.neoforged.neoforge.common.util.TriState useAmbientOcclusion(BlockState state, net.neoforged.neoforge.client.model.data.ModelData modelData, net.minecraft.client.renderer.RenderType renderType)
```

**Parameters:**

- `state` (`BlockState`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)
- `renderType` (`net.minecraft.client.renderer.RenderType`)

**Returns:** `net.neoforged.neoforge.common.util.TriState`

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

### getParticleIcon

```java
public TextureAtlasSprite getParticleIcon(net.neoforged.neoforge.client.model.data.ModelData modelData)
```

**Parameters:**

- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)

**Returns:** `TextureAtlasSprite`

### getTransforms

```java
public ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### applyTransform

```java
public BakedModel applyTransform(net.minecraft.world.item.ItemDisplayContext transformType, com.mojang.blaze3d.vertex.PoseStack poseStack, boolean applyLeftHandTransform)
```

**Parameters:**

- `transformType` (`net.minecraft.world.item.ItemDisplayContext`)
- `poseStack` (`com.mojang.blaze3d.vertex.PoseStack`)
- `applyLeftHandTransform` (`boolean`)

**Returns:** `BakedModel`

### getRenderTypes

```java
Get render types based on the active weighted model
    public net.neoforged.neoforge.client.ChunkRenderTypeSet getRenderTypes(.jetbrains.annotations.NotNull BlockState state, .jetbrains.annotations.NotNull RandomSource rand, .jetbrains.annotations.NotNull net.neoforged.neoforge.client.model.data.ModelData data)
```

**Parameters:**

- `state` (`.jetbrains.annotations.NotNull BlockState`)
- `rand` (`.jetbrains.annotations.NotNull RandomSource`)
- `data` (`.jetbrains.annotations.NotNull net.neoforged.neoforge.client.model.data.ModelData`)

**Returns:** `Get render types based on the active weighted model
    public net.neoforged.neoforge.client.ChunkRenderTypeSet`

### getModelData

```java
public net.neoforged.neoforge.client.model.data.ModelData getModelData(net.minecraft.world.level.BlockAndTintGetter level, net.minecraft.core.BlockPos pos, BlockState state, net.neoforged.neoforge.client.model.data.ModelData modelData)
```

**Parameters:**

- `level` (`net.minecraft.world.level.BlockAndTintGetter`)
- `pos` (`net.minecraft.core.BlockPos`)
- `state` (`BlockState`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)

**Returns:** `net.neoforged.neoforge.client.model.data.ModelData`

### getOverrides

```java
public ItemOverrides getOverrides()
```

**Returns:** `ItemOverrides`

### add

```java
public WeightedBakedModel.Builder add(BakedModel p_119560_, int p_119561_)
```

**Parameters:**

- `p_119560_` (`BakedModel`)
- `p_119561_` (`int`)

**Returns:** `public WeightedBakedModel.Builder`

### build

```java
public BakedModel build()
```

**Returns:** `BakedModel`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
