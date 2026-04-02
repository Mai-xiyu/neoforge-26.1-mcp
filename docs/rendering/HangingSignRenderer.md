# HangingSignRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Extends:** `SignRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `root` | `ModelPart` |  |

## Methods

### HangingSignRenderer

```java
public HangingSignRenderer(BlockEntityRendererProvider.Context p_248772_)
```

**Parameters:**

- `p_248772_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSignModelRenderScale

```java
public float getSignModelRenderScale()
```

**Returns:** `float`

### getSignTextRenderScale

```java
public float getSignTextRenderScale()
```

**Returns:** `float`

### render

```java
public void render(SignBlockEntity p_249482_, float p_249273_, PoseStack p_250062_, MultiBufferSource p_250878_, int p_249035_, int p_252030_)
```

**Parameters:**

- `p_249482_` (`SignBlockEntity`)
- `p_249273_` (`float`)
- `p_250062_` (`PoseStack`)
- `p_250878_` (`MultiBufferSource`)
- `p_249035_` (`int`)
- `p_252030_` (`int`)

### translateSign

```java
void translateSign(PoseStack p_277807_, float p_277917_, BlockState p_277638_)
```

**Parameters:**

- `p_277807_` (`PoseStack`)
- `p_277917_` (`float`)
- `p_277638_` (`BlockState`)

### renderSignModel

```java
void renderSignModel(PoseStack p_251159_, int p_249874_, int p_249794_, Model p_248746_, VertexConsumer p_249165_)
```

**Parameters:**

- `p_251159_` (`PoseStack`)
- `p_249874_` (`int`)
- `p_249794_` (`int`)
- `p_248746_` (`Model`)
- `p_249165_` (`VertexConsumer`)

### getSignMaterial

```java
Material getSignMaterial(WoodType p_251791_)
```

**Parameters:**

- `p_251791_` (`WoodType`)

**Returns:** `Material`

### getTextOffset

```java
Vec3 getTextOffset()
```

**Returns:** `Vec3`

### createHangingSignLayer

```java
public static LayerDefinition createHangingSignLayer()
```

**Returns:** `public static LayerDefinition`

### HangingSignModel

```java
public HangingSignModel(ModelPart p_249124_)
```

**Parameters:**

- `p_249124_` (`ModelPart`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### evaluateVisibleParts

```java
public void evaluateVisibleParts(BlockState p_250268_)
```

**Parameters:**

- `p_250268_` (`BlockState`)

**Returns:** `public void`

### renderToBuffer

```java
public void renderToBuffer(PoseStack p_251590_, VertexConsumer p_249470_, int p_250912_, int p_251773_, int p_350547_)
```

**Parameters:**

- `p_251590_` (`PoseStack`)
- `p_249470_` (`VertexConsumer`)
- `p_250912_` (`int`)
- `p_251773_` (`int`)
- `p_350547_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `HangingSignModel` | class |  |
