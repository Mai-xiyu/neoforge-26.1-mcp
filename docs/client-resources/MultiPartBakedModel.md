# MultiPartBakedModel

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Implements:** `BakedModel`, `net.neoforged.neoforge.client.model.IDynamicBakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `hasAmbientOcclusion` | `boolean` |  |
| `isGui3d` | `boolean` |  |
| `usesBlockLight` | `boolean` |  |
| `particleIcon` | `TextureAtlasSprite` |  |
| `transforms` | `ItemTransforms` |  |
| `overrides` | `ItemOverrides` |  |

## Methods

### MultiPartBakedModel

```java
public MultiPartBakedModel(List<Pair<Predicate<BlockState>, BakedModel>> p_119462_)
```

**Parameters:**

- `p_119462_` (`List<Pair<Predicate<BlockState>, BakedModel>>`)

**Returns:** `public`

### getSelectors

```java
public BitSet getSelectors(BlockState p_235050_)
```

**Parameters:**

- `p_235050_` (`BlockState`)

**Returns:** `public BitSet`

### getQuads

```java
public List<BakedQuad> getQuads(BlockState p_235050_, Direction p_235051_, RandomSource p_235052_, net.neoforged.neoforge.client.model.data.ModelData modelData, .jetbrains.annotations.Nullable net.minecraft.client.renderer.RenderType renderType)
```

**Parameters:**

- `p_235050_` (`BlockState`)
- `p_235051_` (`Direction`)
- `p_235052_` (`RandomSource`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)
- `renderType` (`.jetbrains.annotations.Nullable net.minecraft.client.renderer.RenderType`)

**Returns:** `List<BakedQuad>`

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
Get render types based on the selectors matched by the given block state
    public net.neoforged.neoforge.client.ChunkRenderTypeSet getRenderTypes(.jetbrains.annotations.NotNull BlockState state, .jetbrains.annotations.NotNull RandomSource rand, .jetbrains.annotations.NotNull net.neoforged.neoforge.client.model.data.ModelData data)
```

**Parameters:**

- `state` (`.jetbrains.annotations.NotNull BlockState`)
- `rand` (`.jetbrains.annotations.NotNull RandomSource`)
- `data` (`.jetbrains.annotations.NotNull net.neoforged.neoforge.client.model.data.ModelData`)

**Returns:** `Get render types based on the selectors matched by the given block state
    public net.neoforged.neoforge.client.ChunkRenderTypeSet`

### getOverrides

```java
public ItemOverrides getOverrides()
```

**Returns:** `ItemOverrides`

### add

```java
public void add(Predicate<BlockState> p_119478_, BakedModel p_119479_)
```

**Parameters:**

- `p_119478_` (`Predicate<BlockState>`)
- `p_119479_` (`BakedModel`)

**Returns:** `public void`

### build

```java
public BakedModel build()
```

**Returns:** `public BakedModel`

### MultiPartBakedModel

```java
return new MultiPartBakedModel()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
