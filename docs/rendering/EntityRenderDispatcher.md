# EntityRenderDispatcher

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Implements:** `ResourceManagerReloadListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `textureManager` | `TextureManager` |  |
| `camera` | `Camera` |  |
| `crosshairPickEntity` | `Entity` |  |
| `options` | `Options` |  |

## Methods

### getPackedLightCoords

```java
<E extends Entity> public <E extends Entity> int getPackedLightCoords(E p_114395_, float p_114396_)
```

**Parameters:**

- `p_114395_` (`E`)
- `p_114396_` (`float`)

**Returns:** `public <E extends Entity> int`

### EntityRenderDispatcher

```java
public EntityRenderDispatcher(Minecraft p_234579_, TextureManager p_234580_, ItemRenderer p_234581_, BlockRenderDispatcher p_234582_, Font p_234583_, Options p_234584_, EntityModelSet p_234585_)
```

**Parameters:**

- `p_234579_` (`Minecraft`)
- `p_234580_` (`TextureManager`)
- `p_234581_` (`ItemRenderer`)
- `p_234582_` (`BlockRenderDispatcher`)
- `p_234583_` (`Font`)
- `p_234584_` (`Options`)
- `p_234585_` (`EntityModelSet`)

**Returns:** `public`

### getRenderer

```java
<T extends Entity> public <T extends Entity> EntityRenderer<? super T> getRenderer(T p_114383_)
```

**Parameters:**

- `p_114383_` (`T`)

**Returns:** `public <T extends Entity> EntityRenderer<? super T>`

### prepare

```java
public void prepare(Level p_114409_, Camera p_114410_, Entity p_114411_)
```

**Parameters:**

- `p_114409_` (`Level`)
- `p_114410_` (`Camera`)
- `p_114411_` (`Entity`)

**Returns:** `public void`

### overrideCameraOrientation

```java
public void overrideCameraOrientation(Quaternionf p_254264_)
```

**Parameters:**

- `p_254264_` (`Quaternionf`)

**Returns:** `public void`

### setRenderShadow

```java
public void setRenderShadow(boolean p_114469_)
```

**Parameters:**

- `p_114469_` (`boolean`)

**Returns:** `public void`

### setRenderHitBoxes

```java
public void setRenderHitBoxes(boolean p_114474_)
```

**Parameters:**

- `p_114474_` (`boolean`)

**Returns:** `public void`

### shouldRenderHitBoxes

```java
public boolean shouldRenderHitBoxes()
```

**Returns:** `public boolean`

### shouldRender

```java
<E extends Entity> public <E extends Entity> boolean shouldRender(E p_114398_, Frustum p_114399_, double p_114400_, double p_114401_, double p_114402_)
```

**Parameters:**

- `p_114398_` (`E`)
- `p_114399_` (`Frustum`)
- `p_114400_` (`double`)
- `p_114401_` (`double`)
- `p_114402_` (`double`)

**Returns:** `public <E extends Entity> boolean`

### render

```java
<E extends Entity> public <E extends Entity> void render(E p_114385_, double p_114386_, double p_114387_, double p_114388_, float p_114389_, float p_114390_, PoseStack p_114391_, MultiBufferSource p_114392_, int p_114393_)
```

**Parameters:**

- `p_114385_` (`E`)
- `p_114386_` (`double`)
- `p_114387_` (`double`)
- `p_114388_` (`double`)
- `p_114389_` (`float`)
- `p_114390_` (`float`)
- `p_114391_` (`PoseStack`)
- `p_114392_` (`MultiBufferSource`)
- `p_114393_` (`int`)

**Returns:** `public <E extends Entity> void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### renderServerSideHitbox

```java
private static void renderServerSideHitbox(PoseStack p_353069_, Entity p_353061_, MultiBufferSource p_353074_)
```

**Parameters:**

- `p_353069_` (`PoseStack`)
- `p_353061_` (`Entity`)
- `p_353074_` (`MultiBufferSource`)

**Returns:** `private static void`

### renderHitbox

```java
private static void renderHitbox(PoseStack p_114442_, VertexConsumer p_114443_, Entity p_114444_, float p_114445_, float p_353064_, float p_353059_, float p_353042_)
```

**Parameters:**

- `p_114442_` (`PoseStack`)
- `p_114443_` (`VertexConsumer`)
- `p_114444_` (`Entity`)
- `p_114445_` (`float`)
- `p_353064_` (`float`)
- `p_353059_` (`float`)
- `p_353042_` (`float`)

**Returns:** `private static void`

### renderVector

```java
private static void renderVector(PoseStack p_353057_, VertexConsumer p_353027_, Vector3f p_353068_, Vec3 p_353070_, int p_353032_)
```

**Parameters:**

- `p_353057_` (`PoseStack`)
- `p_353027_` (`VertexConsumer`)
- `p_353068_` (`Vector3f`)
- `p_353070_` (`Vec3`)
- `p_353032_` (`int`)

**Returns:** `private static void`

### renderFlame

```java
private void renderFlame(PoseStack p_114454_, MultiBufferSource p_114455_, Entity p_114456_, Quaternionf p_304964_)
```

**Parameters:**

- `p_114454_` (`PoseStack`)
- `p_114455_` (`MultiBufferSource`)
- `p_114456_` (`Entity`)
- `p_304964_` (`Quaternionf`)

**Returns:** `private void`

### fireVertex

```java
 fireVertex(-f1 - 0.0F, 0.0F - f4)
```

**Parameters:**

- `0.0F` (`-f1 -`)
- `f4` (`0.0F -`)

**Returns:** ``

### fireVertex

```java
 fireVertex(f1 - 0.0F, 0.0F - f4)
```

**Parameters:**

- `0.0F` (`f1 -`)
- `f4` (`0.0F -`)

**Returns:** ``

### fireVertex

```java
 fireVertex(f1 - 0.0F, 1.4F - f4)
```

**Parameters:**

- `0.0F` (`f1 -`)
- `f4` (`1.4F -`)

**Returns:** ``

### fireVertex

```java
 fireVertex(-f1 - 0.0F, 1.4F - f4)
```

**Parameters:**

- `0.0F` (`-f1 -`)
- `f4` (`1.4F -`)

**Returns:** ``

### fireVertex

```java
private static void fireVertex(PoseStack.Pose p_114415_, VertexConsumer p_114416_, float p_114417_, float p_114418_, float p_114419_, float p_114420_, float p_114421_)
```

**Parameters:**

- `p_114415_` (`PoseStack.Pose`)
- `p_114416_` (`VertexConsumer`)
- `p_114417_` (`float`)
- `p_114418_` (`float`)
- `p_114419_` (`float`)
- `p_114420_` (`float`)
- `p_114421_` (`float`)

**Returns:** `private static void`

### renderShadow

```java
private static void renderShadow(PoseStack p_114458_, MultiBufferSource p_114459_, Entity p_114460_, float p_114461_, float p_114462_, LevelReader p_114463_, float p_114464_)
```

**Parameters:**

- `p_114458_` (`PoseStack`)
- `p_114459_` (`MultiBufferSource`)
- `p_114460_` (`Entity`)
- `p_114461_` (`float`)
- `p_114462_` (`float`)
- `p_114463_` (`LevelReader`)
- `p_114464_` (`float`)

**Returns:** `private static void`

### renderBlockShadow

```java
 renderBlockShadow()
```

**Returns:** ``

### renderBlockShadow

```java
private static void renderBlockShadow(PoseStack.Pose p_277956_, VertexConsumer p_277533_, ChunkAccess p_277501_, LevelReader p_277622_, BlockPos p_277911_, double p_277682_, double p_278099_, double p_277806_, float p_277844_, float p_277496_)
```

**Parameters:**

- `p_277956_` (`PoseStack.Pose`)
- `p_277533_` (`VertexConsumer`)
- `p_277501_` (`ChunkAccess`)
- `p_277622_` (`LevelReader`)
- `p_277911_` (`BlockPos`)
- `p_277682_` (`double`)
- `p_278099_` (`double`)
- `p_277806_` (`double`)
- `p_277844_` (`float`)
- `p_277496_` (`float`)

**Returns:** `private static void`

### shadowVertex

```java
 shadowVertex()
```

**Returns:** ``

### shadowVertex

```java
 shadowVertex()
```

**Returns:** ``

### shadowVertex

```java
 shadowVertex()
```

**Returns:** ``

### shadowVertex

```java
 shadowVertex()
```

**Returns:** ``

### shadowVertex

```java
private static void shadowVertex(PoseStack.Pose p_114423_, VertexConsumer p_114424_, int p_350992_, float p_114425_, float p_114426_, float p_114427_, float p_114428_, float p_114429_)
```

**Parameters:**

- `p_114423_` (`PoseStack.Pose`)
- `p_114424_` (`VertexConsumer`)
- `p_350992_` (`int`)
- `p_114425_` (`float`)
- `p_114426_` (`float`)
- `p_114427_` (`float`)
- `p_114428_` (`float`)
- `p_114429_` (`float`)

**Returns:** `private static void`

### setLevel

```java
public void setLevel(Level p_114407_)
```

**Parameters:**

- `p_114407_` (`Level`)

**Returns:** `public void`

### distanceToSqr

```java
public double distanceToSqr(Entity p_114472_)
```

**Parameters:**

- `p_114472_` (`Entity`)

**Returns:** `public double`

### distanceToSqr

```java
public double distanceToSqr(double p_114379_, double p_114380_, double p_114381_)
```

**Parameters:**

- `p_114379_` (`double`)
- `p_114380_` (`double`)
- `p_114381_` (`double`)

**Returns:** `public double`

### cameraOrientation

```java
public Quaternionf cameraOrientation()
```

**Returns:** `public Quaternionf`

### getItemInHandRenderer

```java
public ItemInHandRenderer getItemInHandRenderer()
```

**Returns:** `public ItemInHandRenderer`

### getSkinMap

```java
public Map<PlayerSkin.Model, EntityRenderer<? extends Player>> getSkinMap()
```

**Returns:** `public Map<PlayerSkin.Model, EntityRenderer<? extends Player>>`

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager p_174004_)
```

**Parameters:**

- `p_174004_` (`ResourceManager`)
