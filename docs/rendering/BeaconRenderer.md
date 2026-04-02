# BeaconRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<BeaconBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BEAM_LOCATION` | `ResourceLocation` |  |
| `MAX_RENDER_Y` | `int` |  |

## Methods

### BeaconRenderer

```java
public BeaconRenderer(BlockEntityRendererProvider.Context p_173529_)
```

**Parameters:**

- `p_173529_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(BeaconBlockEntity p_112140_, float p_112141_, PoseStack p_112142_, MultiBufferSource p_112143_, int p_112144_, int p_112145_)
```

**Parameters:**

- `p_112140_` (`BeaconBlockEntity`)
- `p_112141_` (`float`)
- `p_112142_` (`PoseStack`)
- `p_112143_` (`MultiBufferSource`)
- `p_112144_` (`int`)
- `p_112145_` (`int`)

**Returns:** `public void`

### renderBeaconBeam

```java
private static void renderBeaconBeam(PoseStack p_112185_, MultiBufferSource p_112186_, float p_112188_, long p_112190_, int p_112191_, int p_112192_, int p_350457_)
```

**Parameters:**

- `p_112185_` (`PoseStack`)
- `p_112186_` (`MultiBufferSource`)
- `p_112188_` (`float`)
- `p_112190_` (`long`)
- `p_112191_` (`int`)
- `p_112192_` (`int`)
- `p_350457_` (`int`)

**Returns:** `private static void`

### renderBeaconBeam

```java
 renderBeaconBeam()
```

**Returns:** ``

### renderBeaconBeam

```java
public static void renderBeaconBeam(PoseStack p_112177_, MultiBufferSource p_112178_, ResourceLocation p_350504_, float p_112179_, float p_350618_, long p_112180_, int p_112181_, int p_112182_, int p_350915_, float p_350604_, float p_350669_)
```

**Parameters:**

- `p_112177_` (`PoseStack`)
- `p_112178_` (`MultiBufferSource`)
- `p_350504_` (`ResourceLocation`)
- `p_112179_` (`float`)
- `p_350618_` (`float`)
- `p_112180_` (`long`)
- `p_112181_` (`int`)
- `p_112182_` (`int`)
- `p_350915_` (`int`)
- `p_350604_` (`float`)
- `p_350669_` (`float`)

**Returns:** `public static void`

### renderPart

```java
private static void renderPart(PoseStack p_112156_, VertexConsumer p_112157_, int p_112162_, int p_112163_, int p_351014_, float p_112158_, float p_112159_, float p_112160_, float p_112161_, float p_112164_, float p_112165_, float p_112166_, float p_112167_, float p_112168_, float p_112169_, float p_112170_, float p_112171_)
```

**Parameters:**

- `p_112156_` (`PoseStack`)
- `p_112157_` (`VertexConsumer`)
- `p_112162_` (`int`)
- `p_112163_` (`int`)
- `p_351014_` (`int`)
- `p_112158_` (`float`)
- `p_112159_` (`float`)
- `p_112160_` (`float`)
- `p_112161_` (`float`)
- `p_112164_` (`float`)
- `p_112165_` (`float`)
- `p_112166_` (`float`)
- `p_112167_` (`float`)
- `p_112168_` (`float`)
- `p_112169_` (`float`)
- `p_112170_` (`float`)
- `p_112171_` (`float`)

**Returns:** `private static void`

### renderQuad

```java
 renderQuad()
```

**Returns:** ``

### renderQuad

```java
 renderQuad()
```

**Returns:** ``

### renderQuad

```java
 renderQuad()
```

**Returns:** ``

### renderQuad

```java
 renderQuad()
```

**Returns:** ``

### renderQuad

```java
private static void renderQuad(PoseStack.Pose p_323955_, VertexConsumer p_112122_, int p_112127_, int p_112128_, int p_350566_, float p_112123_, float p_112124_, float p_112125_, float p_112126_, float p_112129_, float p_112130_, float p_112131_, float p_112132_)
```

**Parameters:**

- `p_323955_` (`PoseStack.Pose`)
- `p_112122_` (`VertexConsumer`)
- `p_112127_` (`int`)
- `p_112128_` (`int`)
- `p_350566_` (`int`)
- `p_112123_` (`float`)
- `p_112124_` (`float`)
- `p_112125_` (`float`)
- `p_112126_` (`float`)
- `p_112129_` (`float`)
- `p_112130_` (`float`)
- `p_112131_` (`float`)
- `p_112132_` (`float`)

**Returns:** `private static void`

### addVertex

```java
 addVertex()
```

**Returns:** ``

### addVertex

```java
 addVertex()
```

**Returns:** ``

### addVertex

```java
 addVertex()
```

**Returns:** ``

### addVertex

```java
 addVertex()
```

**Returns:** ``

### addVertex

```java
private static void addVertex(PoseStack.Pose p_324495_, VertexConsumer p_253894_, int p_254357_, int p_350652_, float p_253871_, float p_253841_, float p_254568_, float p_254361_)
```

**Parameters:**

- `p_324495_` (`PoseStack.Pose`)
- `p_253894_` (`VertexConsumer`)
- `p_254357_` (`int`)
- `p_350652_` (`int`)
- `p_253871_` (`float`)
- `p_253841_` (`float`)
- `p_254568_` (`float`)
- `p_254361_` (`float`)

**Returns:** `private static void`

### shouldRenderOffScreen

```java
public boolean shouldRenderOffScreen(BeaconBlockEntity p_112138_)
```

**Parameters:**

- `p_112138_` (`BeaconBlockEntity`)

**Returns:** `public boolean`

### getViewDistance

```java
public int getViewDistance()
```

**Returns:** `int`

### shouldRender

```java
public boolean shouldRender(BeaconBlockEntity p_173531_, Vec3 p_173532_)
```

**Parameters:**

- `p_173531_` (`BeaconBlockEntity`)
- `p_173532_` (`Vec3`)

**Returns:** `public boolean`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(BeaconBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`BeaconBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
