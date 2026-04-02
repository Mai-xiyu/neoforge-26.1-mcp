# BlockRenderDispatcher

**Package:** `net.minecraft.client.renderer.block`
**Type:** class
**Implements:** `ResourceManagerReloadListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BlockRenderDispatcher

```java
public BlockRenderDispatcher(BlockModelShaper p_173399_, BlockEntityWithoutLevelRenderer p_173400_, BlockColors p_173401_)
```

**Parameters:**

- `p_173399_` (`BlockModelShaper`)
- `p_173400_` (`BlockEntityWithoutLevelRenderer`)
- `p_173401_` (`BlockColors`)

**Returns:** `public`

### getBlockModelShaper

```java
public BlockModelShaper getBlockModelShaper()
```

**Returns:** `public BlockModelShaper`

### renderBreakingTexture ⚠️ *Deprecated*

```java
Model data parameter
    public void renderBreakingTexture(BlockState p_110919_, BlockPos p_110920_, BlockAndTintGetter p_110921_, PoseStack p_110922_, VertexConsumer p_110923_)
```

**Parameters:**

- `p_110919_` (`BlockState`)
- `p_110920_` (`BlockPos`)
- `p_110921_` (`BlockAndTintGetter`)
- `p_110922_` (`PoseStack`)
- `p_110923_` (`VertexConsumer`)

**Returns:** `Model data parameter
    public void`

### renderBreakingTexture

```java
 renderBreakingTexture()
```

**Returns:** ``

### renderBreakingTexture

```java
public void renderBreakingTexture(BlockState p_110919_, BlockPos p_110920_, BlockAndTintGetter p_110921_, PoseStack p_110922_, VertexConsumer p_110923_, net.neoforged.neoforge.client.model.data.ModelData modelData)
```

**Parameters:**

- `p_110919_` (`BlockState`)
- `p_110920_` (`BlockPos`)
- `p_110921_` (`BlockAndTintGetter`)
- `p_110922_` (`PoseStack`)
- `p_110923_` (`VertexConsumer`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)

**Returns:** `public void`

### renderBatched

```java
public void renderBatched(BlockState p_234356_, BlockPos p_234357_, BlockAndTintGetter p_234358_, PoseStack p_234359_, VertexConsumer p_234360_, boolean p_234361_, RandomSource p_234362_)
```

**Parameters:**

- `p_234356_` (`BlockState`)
- `p_234357_` (`BlockPos`)
- `p_234358_` (`BlockAndTintGetter`)
- `p_234359_` (`PoseStack`)
- `p_234360_` (`VertexConsumer`)
- `p_234361_` (`boolean`)
- `p_234362_` (`RandomSource`)

**Returns:** `public void`

### renderBatched

```java
 renderBatched()
```

**Returns:** ``

### renderBatched

```java
public void renderBatched(BlockState p_234356_, BlockPos p_234357_, BlockAndTintGetter p_234358_, PoseStack p_234359_, VertexConsumer p_234360_, boolean p_234361_, RandomSource p_234362_, net.neoforged.neoforge.client.model.data.ModelData modelData, net.minecraft.client.renderer.RenderType renderType)
```

**Parameters:**

- `p_234356_` (`BlockState`)
- `p_234357_` (`BlockPos`)
- `p_234358_` (`BlockAndTintGetter`)
- `p_234359_` (`PoseStack`)
- `p_234360_` (`VertexConsumer`)
- `p_234361_` (`boolean`)
- `p_234362_` (`RandomSource`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)
- `renderType` (`net.minecraft.client.renderer.RenderType`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### renderLiquid

```java
public void renderLiquid(BlockPos p_234364_, BlockAndTintGetter p_234365_, VertexConsumer p_234366_, BlockState p_234367_, FluidState p_234368_)
```

**Parameters:**

- `p_234364_` (`BlockPos`)
- `p_234365_` (`BlockAndTintGetter`)
- `p_234366_` (`VertexConsumer`)
- `p_234367_` (`BlockState`)
- `p_234368_` (`FluidState`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### getModelRenderer

```java
public ModelBlockRenderer getModelRenderer()
```

**Returns:** `public ModelBlockRenderer`

### getBlockModel

```java
public BakedModel getBlockModel(BlockState p_110911_)
```

**Parameters:**

- `p_110911_` (`BlockState`)

**Returns:** `public BakedModel`

### renderSingleBlock ⚠️ *Deprecated*

```java
Model data and render type parameter
    public void renderSingleBlock(BlockState p_110913_, PoseStack p_110914_, MultiBufferSource p_110915_, int p_110916_, int p_110917_)
```

**Parameters:**

- `p_110913_` (`BlockState`)
- `p_110914_` (`PoseStack`)
- `p_110915_` (`MultiBufferSource`)
- `p_110916_` (`int`)
- `p_110917_` (`int`)

**Returns:** `Model data and render type parameter
    public void`

### renderSingleBlock

```java
 renderSingleBlock()
```

**Returns:** ``

### renderSingleBlock

```java
public void renderSingleBlock(BlockState p_110913_, PoseStack p_110914_, MultiBufferSource p_110915_, int p_110916_, int p_110917_, net.neoforged.neoforge.client.model.data.ModelData modelData, net.minecraft.client.renderer.RenderType renderType)
```

**Parameters:**

- `p_110913_` (`BlockState`)
- `p_110914_` (`PoseStack`)
- `p_110915_` (`MultiBufferSource`)
- `p_110916_` (`int`)
- `p_110917_` (`int`)
- `modelData` (`net.neoforged.neoforge.client.model.data.ModelData`)
- `renderType` (`net.minecraft.client.renderer.RenderType`)

**Returns:** `public void`

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager p_110909_)
```

**Parameters:**

- `p_110909_` (`ResourceManager`)

### getLiquidBlockRenderer

```java
public LiquidBlockRenderer getLiquidBlockRenderer()
```

**Returns:** `public LiquidBlockRenderer`
