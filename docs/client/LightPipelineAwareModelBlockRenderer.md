# LightPipelineAwareModelBlockRenderer

**Package:** `net.neoforged.neoforge.client.model.lighting`
**Type:** class
**Extends:** `ModelBlockRenderer`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Description

Wrapper around `ModelBlockRenderer` to allow rendering blocks via Forge's lighting pipeline.

## Methods

### LightPipelineAwareModelBlockRenderer

```java
public LightPipelineAwareModelBlockRenderer(BlockColors colors)
```

**Parameters:**

- `colors` (`BlockColors`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tesselateWithoutAO

```java
public void tesselateWithoutAO(BlockAndTintGetter level, BakedModel model, BlockState state, BlockPos pos, PoseStack poseStack, VertexConsumer vertexConsumer, boolean checkSides, RandomSource rand, long seed, int packedOverlay, ModelData modelData, RenderType renderType)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `model` (`BakedModel`)
- `state` (`BlockState`)
- `pos` (`BlockPos`)
- `poseStack` (`PoseStack`)
- `vertexConsumer` (`VertexConsumer`)
- `checkSides` (`boolean`)
- `rand` (`RandomSource`)
- `seed` (`long`)
- `packedOverlay` (`int`)
- `modelData` (`ModelData`)
- `renderType` (`RenderType`)

### tesselateWithAO

```java
public void tesselateWithAO(BlockAndTintGetter level, BakedModel model, BlockState state, BlockPos pos, PoseStack poseStack, VertexConsumer vertexConsumer, boolean checkSides, RandomSource rand, long seed, int packedOverlay, ModelData modelData, RenderType renderType)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `model` (`BakedModel`)
- `state` (`BlockState`)
- `pos` (`BlockPos`)
- `poseStack` (`PoseStack`)
- `vertexConsumer` (`VertexConsumer`)
- `checkSides` (`boolean`)
- `rand` (`RandomSource`)
- `seed` (`long`)
- `packedOverlay` (`int`)
- `modelData` (`ModelData`)
- `renderType` (`RenderType`)

### render

```java
public static boolean render(VertexConsumer vertexConsumer, QuadLighter lighter, BlockAndTintGetter level, BakedModel model, BlockState state, BlockPos pos, PoseStack poseStack, boolean checkSides, RandomSource rand, long seed, int packedOverlay, ModelData modelData, RenderType renderType)
```

**Parameters:**

- `vertexConsumer` (`VertexConsumer`)
- `lighter` (`QuadLighter`)
- `level` (`BlockAndTintGetter`)
- `model` (`BakedModel`)
- `state` (`BlockState`)
- `pos` (`BlockPos`)
- `poseStack` (`PoseStack`)
- `checkSides` (`boolean`)
- `rand` (`RandomSource`)
- `seed` (`long`)
- `packedOverlay` (`int`)
- `modelData` (`ModelData`)
- `renderType` (`RenderType`)

**Returns:** `public static boolean`

### getQuadLighter

```java
public QuadLighter getQuadLighter(boolean smooth)
```

**Parameters:**

- `smooth` (`boolean`)

**Returns:** `public QuadLighter`
