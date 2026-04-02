# SignRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<SignBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SignRenderer

```java
public SignRenderer(BlockEntityRendererProvider.Context p_173636_)
```

**Parameters:**

- `p_173636_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(SignBlockEntity p_112497_, float p_112498_, PoseStack p_112499_, MultiBufferSource p_112500_, int p_112501_, int p_112502_)
```

**Parameters:**

- `p_112497_` (`SignBlockEntity`)
- `p_112498_` (`float`)
- `p_112499_` (`PoseStack`)
- `p_112500_` (`MultiBufferSource`)
- `p_112501_` (`int`)
- `p_112502_` (`int`)

**Returns:** `public void`

### getSignModelRenderScale

```java
public float getSignModelRenderScale()
```

**Returns:** `public float`

### getSignTextRenderScale

```java
public float getSignTextRenderScale()
```

**Returns:** `public float`

### renderSignWithText

```java
void renderSignWithText(SignBlockEntity p_279389_, PoseStack p_279331_, MultiBufferSource p_279303_, int p_279396_, int p_279203_, BlockState p_279391_, SignBlock p_279224_, WoodType p_279162_, Model p_279444_)
```

**Parameters:**

- `p_279389_` (`SignBlockEntity`)
- `p_279331_` (`PoseStack`)
- `p_279303_` (`MultiBufferSource`)
- `p_279396_` (`int`)
- `p_279203_` (`int`)
- `p_279391_` (`BlockState`)
- `p_279224_` (`SignBlock`)
- `p_279162_` (`WoodType`)
- `p_279444_` (`Model`)

### translateSign

```java
void translateSign(PoseStack p_278074_, float p_277875_, BlockState p_277559_)
```

**Parameters:**

- `p_278074_` (`PoseStack`)
- `p_277875_` (`float`)
- `p_277559_` (`BlockState`)

### renderSign

```java
void renderSign(PoseStack p_279104_, MultiBufferSource p_279408_, int p_279494_, int p_279344_, WoodType p_279170_, Model p_279159_)
```

**Parameters:**

- `p_279104_` (`PoseStack`)
- `p_279408_` (`MultiBufferSource`)
- `p_279494_` (`int`)
- `p_279344_` (`int`)
- `p_279170_` (`WoodType`)
- `p_279159_` (`Model`)

### renderSignModel

```java
void renderSignModel(PoseStack p_250252_, int p_249399_, int p_249042_, Model p_250082_, VertexConsumer p_251093_)
```

**Parameters:**

- `p_250252_` (`PoseStack`)
- `p_249399_` (`int`)
- `p_249042_` (`int`)
- `p_250082_` (`Model`)
- `p_251093_` (`VertexConsumer`)

### getSignMaterial

```java
Material getSignMaterial(WoodType p_251961_)
```

**Parameters:**

- `p_251961_` (`WoodType`)

**Returns:** `Material`

### renderSignText

```java
void renderSignText(BlockPos p_279403_, SignText p_279361_, PoseStack p_279234_, MultiBufferSource p_279338_, int p_279300_, int p_279179_, int p_279357_, boolean p_279325_)
```

**Parameters:**

- `p_279403_` (`BlockPos`)
- `p_279361_` (`SignText`)
- `p_279234_` (`PoseStack`)
- `p_279338_` (`MultiBufferSource`)
- `p_279300_` (`int`)
- `p_279179_` (`int`)
- `p_279357_` (`int`)
- `p_279325_` (`boolean`)

### translateSignText

```java
private void translateSignText(PoseStack p_279133_, boolean p_279134_, Vec3 p_279280_)
```

**Parameters:**

- `p_279133_` (`PoseStack`)
- `p_279134_` (`boolean`)
- `p_279280_` (`Vec3`)

**Returns:** `private void`

### getTextOffset

```java
Vec3 getTextOffset()
```

**Returns:** `Vec3`

### isOutlineVisible

```java
static boolean isOutlineVisible(BlockPos p_277741_, int p_278022_)
```

**Parameters:**

- `p_277741_` (`BlockPos`)
- `p_278022_` (`int`)

**Returns:** `static boolean`

### getDarkColor

```java
public static int getDarkColor(SignText p_277914_)
```

**Parameters:**

- `p_277914_` (`SignText`)

**Returns:** `public static int`

### createSignModel

```java
public static SignRenderer.SignModel createSignModel(EntityModelSet p_173647_, WoodType p_173648_)
```

**Parameters:**

- `p_173647_` (`EntityModelSet`)
- `p_173648_` (`WoodType`)

**Returns:** `public static SignRenderer.SignModel`

### createSignLayer

```java
public static LayerDefinition createSignLayer()
```

**Returns:** `public static LayerDefinition`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(SignBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`SignBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`

### SignModel

```java
public SignModel(ModelPart p_173657_)
```

**Parameters:**

- `p_173657_` (`ModelPart`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderToBuffer

```java
public void renderToBuffer(PoseStack p_112510_, VertexConsumer p_112511_, int p_112512_, int p_112513_, int p_350294_)
```

**Parameters:**

- `p_112510_` (`PoseStack`)
- `p_112511_` (`VertexConsumer`)
- `p_112512_` (`int`)
- `p_112513_` (`int`)
- `p_350294_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SignModel` | class |  |
