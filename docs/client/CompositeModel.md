# CompositeModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Implements:** `IUnbakedGeometry<CompositeModel>`
**Side:** 🖥️ Client

## Description

A model composed of several named children.



These respect component visibility as specified in `IGeometryBakingContext` and can additionally be provided
with an item-specific render ordering, for multi-pass arrangements.

## Methods

### CompositeModel

```java
public CompositeModel(ImmutableMap<String, BlockModel> children, ImmutableList<String> itemPasses)
```

**Parameters:**

- `children` (`ImmutableMap<String, BlockModel>`)
- `itemPasses` (`ImmutableList<String>`)

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

### IllegalStateException

```java
throw new IllegalStateException("Specified \"" + name + "\" in \"item_render_order\", but that is not a child of this model.")
```

**Parameters:**

- `\"item_render_order\"` (`"Specified \"" + name + "\" in`)
- `model."` (`but that is not a child of this`)

**Returns:** `throw new`

### resolveParents

```java
public void resolveParents(Function<ResourceLocation, UnbakedModel> modelGetter, IGeometryBakingContext context)
```

**Parameters:**

- `modelGetter` (`Function<ResourceLocation, UnbakedModel>`)
- `context` (`IGeometryBakingContext`)

### getConfigurableComponentNames

```java
public Set<String> getConfigurableComponentNames()
```

**Returns:** `Set<String>`

### Baked

```java
public Baked(boolean isGui3d, boolean isSideLit, boolean isAmbientOcclusion, TextureAtlasSprite particle, ItemTransforms transforms, ItemOverrides overrides, ImmutableMap<String, BakedModel> children, ImmutableList<BakedModel> itemPasses)
```

**Parameters:**

- `isGui3d` (`boolean`)
- `isSideLit` (`boolean`)
- `isAmbientOcclusion` (`boolean`)
- `particle` (`TextureAtlasSprite`)
- `transforms` (`ItemTransforms`)
- `overrides` (`ItemOverrides`)
- `children` (`ImmutableMap<String, BakedModel>`)
- `itemPasses` (`ImmutableList<BakedModel>`)

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

### getModelData

```java
public ModelData getModelData(BlockAndTintGetter level, BlockPos pos, BlockState state, ModelData modelData)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `modelData` (`ModelData`)

**Returns:** `ModelData`

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

### getRenderTypes

```java
public ChunkRenderTypeSet getRenderTypes(BlockState state, RandomSource rand, ModelData data)
```

**Parameters:**

- `state` (`BlockState`)
- `rand` (`RandomSource`)
- `data` (`ModelData`)

**Returns:** `ChunkRenderTypeSet`

### getRenderPasses

```java
public List<BakedModel> getRenderPasses(ItemStack itemStack, boolean fabulous)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `fabulous` (`boolean`)

**Returns:** `List<BakedModel>`

### getPart

```java
public BakedModel getPart(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `BakedModel`

### builder

```java
public static Builder builder(IGeometryBakingContext owner, TextureAtlasSprite particle, ItemOverrides overrides, ItemTransforms cameraTransforms)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `particle` (`TextureAtlasSprite`)
- `overrides` (`ItemOverrides`)
- `cameraTransforms` (`ItemTransforms`)

**Returns:** `public static Builder`

### builder

```java
public static Builder builder(boolean isAmbientOcclusion, boolean isGui3d, boolean isSideLit, TextureAtlasSprite particle, ItemOverrides overrides, ItemTransforms cameraTransforms)
```

**Parameters:**

- `isAmbientOcclusion` (`boolean`)
- `isGui3d` (`boolean`)
- `isSideLit` (`boolean`)
- `particle` (`TextureAtlasSprite`)
- `overrides` (`ItemOverrides`)
- `cameraTransforms` (`ItemTransforms`)

**Returns:** `public static Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### Builder

```java
private Builder(boolean isAmbientOcclusion, boolean isGui3d, boolean isSideLit, TextureAtlasSprite particle, ItemOverrides overrides, ItemTransforms transforms)
```

**Parameters:**

- `isAmbientOcclusion` (`boolean`)
- `isGui3d` (`boolean`)
- `isSideLit` (`boolean`)
- `particle` (`TextureAtlasSprite`)
- `overrides` (`ItemOverrides`)
- `transforms` (`ItemTransforms`)

**Returns:** `private`

### addLayer

```java
public void addLayer(BakedModel model)
```

**Parameters:**

- `model` (`BakedModel`)

**Returns:** `public void`

### flushQuads

```java
 flushQuads()
```

**Returns:** ``

### addLayer

```java
private void addLayer(RenderTypeGroup renderTypes, List<BakedQuad> quads)
```

**Parameters:**

- `renderTypes` (`RenderTypeGroup`)
- `quads` (`List<BakedQuad>`)

**Returns:** `private void`

### flushQuads

```java
private void flushQuads(RenderTypeGroup renderTypes)
```

**Parameters:**

- `renderTypes` (`RenderTypeGroup`)

**Returns:** `private void`

### addLayer

```java
 addLayer()
```

**Returns:** ``

### setParticle

```java
public Builder setParticle(TextureAtlasSprite particleSprite)
```

**Parameters:**

- `particleSprite` (`TextureAtlasSprite`)

**Returns:** `public Builder`

### addQuads

```java
public Builder addQuads(RenderTypeGroup renderTypes, BakedQuad[]... quadsToAdd)
```

**Parameters:**

- `renderTypes` (`RenderTypeGroup`)
- `quadsToAdd` (`BakedQuad[]...`)

**Returns:** `public Builder`

### flushQuads

```java
 flushQuads()
```

**Returns:** ``

### addQuads

```java
public Builder addQuads(RenderTypeGroup renderTypes, Collection<BakedQuad> quadsToAdd)
```

**Parameters:**

- `renderTypes` (`RenderTypeGroup`)
- `quadsToAdd` (`Collection<BakedQuad>`)

**Returns:** `public Builder`

### flushQuads

```java
 flushQuads()
```

**Returns:** ``

### build

```java
public BakedModel build()
```

**Returns:** `public BakedModel`

### addLayer

```java
 addLayer()
```

**Returns:** ``

### resolve

```java
public static ModelData resolve(ModelData modelData, String name)
```

**Parameters:**

- `modelData` (`ModelData`)
- `name` (`String`)

**Returns:** `ModelData`

### builder

```java
public static Builder builder()
```

**Returns:** `public static Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### with

```java
public Builder with(String name, ModelData data)
```

**Parameters:**

- `name` (`String`)
- `data` (`ModelData`)

**Returns:** `public Builder`

### build

```java
public Data build()
```

**Returns:** `public Data`

### Data

```java
return new Data()
```

**Returns:** `return new`

### Loader

```java
private Loader()
```

**Returns:** `private`

### read

```java
public CompositeModel read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `CompositeModel`

### readChildren

```java
 readChildren()
```

**Returns:** ``

### JsonParseException

```java
throw new JsonParseException("Composite model requires a \"children\" element with at least one element.")
```

**Parameters:**

- `element."` (`"Composite model requires a \"children\" element with at least one`)

**Returns:** `throw new`

### JsonParseException

```java
throw new JsonParseException("Specified \"" + name + "\" in \"item_render_order\", but that is not a child of this model.")
```

**Parameters:**

- `\"item_render_order\"` (`"Specified \"" + name + "\" in`)
- `model."` (`but that is not a child of this`)

**Returns:** `throw new`

### readChildren

```java
private void readChildren(JsonObject jsonObject, String name, JsonDeserializationContext deserializationContext, ImmutableMap.Builder<String, BlockModel> children, List<String> itemPasses)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `name` (`String`)
- `deserializationContext` (`JsonDeserializationContext`)
- `children` (`ImmutableMap.Builder<String, BlockModel>`)
- `itemPasses` (`List<String>`)

**Returns:** `private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Baked` | class |  |
| `Builder` | class |  |
| `Data` | class |  |
| `Builder` | class |  |
| `Loader` | class |  |
