# SeparateTransformsModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Implements:** `IUnbakedGeometry<SeparateTransformsModel>`
**Side:** 🖥️ Client

## Description

A model composed of multiple sub-models which are picked based on the `ItemDisplayContext` being used.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `Loader` |  |

## Methods

### SeparateTransformsModel

```java
public SeparateTransformsModel(BlockModel baseModel, ImmutableMap<ItemDisplayContext, BlockModel> perspectives)
```

**Parameters:**

- `baseModel` (`BlockModel`)
- `perspectives` (`ImmutableMap<ItemDisplayContext, BlockModel>`)

**Returns:** `public`

### bake

```java
public BakedModel bake(IGeometryBakingContext context, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState, ItemOverrides overrides)
```

**Parameters:**

- `context` (`IGeometryBakingContext`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)
- `overrides` (`ItemOverrides`)

**Returns:** `BakedModel`

### resolveParents

```java
public void resolveParents(Function<ResourceLocation, UnbakedModel> modelGetter, IGeometryBakingContext context)
```

**Parameters:**

- `modelGetter` (`Function<ResourceLocation, UnbakedModel>`)
- `context` (`IGeometryBakingContext`)

### Baked

```java
public Baked(boolean isAmbientOcclusion, boolean isGui3d, boolean isSideLit, TextureAtlasSprite particle, ItemOverrides overrides, BakedModel baseModel, ImmutableMap<ItemDisplayContext, BakedModel> perspectives)
```

**Parameters:**

- `isAmbientOcclusion` (`boolean`)
- `isGui3d` (`boolean`)
- `isSideLit` (`boolean`)
- `particle` (`TextureAtlasSprite`)
- `overrides` (`ItemOverrides`)
- `baseModel` (`BakedModel`)
- `perspectives` (`ImmutableMap<ItemDisplayContext, BakedModel>`)

**Returns:** `public`

### getQuads

```java
public List<BakedQuad> getQuads(BlockState state, Direction side, RandomSource rand, ModelData data, RenderType renderType)
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

### getOverrides

```java
public ItemOverrides getOverrides()
```

**Returns:** `ItemOverrides`

### getTransforms

```java
public ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### applyTransform

```java
public BakedModel applyTransform(ItemDisplayContext cameraTransformType, PoseStack poseStack, boolean applyLeftHandTransform)
```

**Parameters:**

- `cameraTransformType` (`ItemDisplayContext`)
- `poseStack` (`PoseStack`)
- `applyLeftHandTransform` (`boolean`)

**Returns:** `BakedModel`

### getRenderTypes

```java
public ChunkRenderTypeSet getRenderTypes(BlockState state, RandomSource rand, ModelData data)
```

**Parameters:**

- `state` (`BlockState`)
- `rand` (`RandomSource`)
- `data` (`ModelData`)

**Returns:** `ChunkRenderTypeSet`

### Loader

```java
private Loader()
```

**Returns:** `private`

### read

```java
public SeparateTransformsModel read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `SeparateTransformsModel`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Baked` | class |  |
| `Loader` | class |  |
