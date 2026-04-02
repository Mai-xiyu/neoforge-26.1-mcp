# ItemFrameRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class<T extends ItemFrame> extends EntityRenderer<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `GLOW_FRAME_BRIGHTNESS` | `int` |  |
| `BRIGHT_MAP_LIGHT_ADJUSTMENT` | `int` |  |

## Methods

### ItemFrameRenderer

```java
public ItemFrameRenderer(EntityRendererProvider.Context p_174204_)
```

**Parameters:**

- `p_174204_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBlockLightLevel

```java
protected int getBlockLightLevel(T p_174216_, BlockPos p_174217_)
```

**Parameters:**

- `p_174216_` (`T`)
- `p_174217_` (`BlockPos`)

**Returns:** `protected int`

### render

```java
public void render(T p_115076_, float p_115077_, float p_115078_, PoseStack p_115079_, MultiBufferSource p_115080_, int p_115081_)
```

**Parameters:**

- `p_115076_` (`T`)
- `p_115077_` (`float`)
- `p_115078_` (`float`)
- `p_115079_` (`PoseStack`)
- `p_115080_` (`MultiBufferSource`)
- `p_115081_` (`int`)

**Returns:** `public void`

### getLightVal

```java
private int getLightVal(T p_174209_, int p_174210_, int p_174211_)
```

**Parameters:**

- `p_174209_` (`T`)
- `p_174210_` (`int`)
- `p_174211_` (`int`)

**Returns:** `private int`

### getFrameModelResourceLoc

```java
private ModelResourceLocation getFrameModelResourceLoc(T p_174213_, ItemStack p_174214_)
```

**Parameters:**

- `p_174213_` (`T`)
- `p_174214_` (`ItemStack`)

**Returns:** `private ModelResourceLocation`

### getRenderOffset

```java
public Vec3 getRenderOffset(T p_115073_, float p_115074_)
```

**Parameters:**

- `p_115073_` (`T`)
- `p_115074_` (`float`)

**Returns:** `public Vec3`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(T p_115071_)
```

**Parameters:**

- `p_115071_` (`T`)

**Returns:** `public ResourceLocation`

### shouldShowName

```java
protected boolean shouldShowName(T p_115091_)
```

**Parameters:**

- `p_115091_` (`T`)

**Returns:** `protected boolean`

### renderNameTag

```java
protected void renderNameTag(T p_316437_, Component p_115066_, PoseStack p_115067_, MultiBufferSource p_115068_, int p_115069_, float p_316131_)
```

**Parameters:**

- `p_316437_` (`T`)
- `p_115066_` (`Component`)
- `p_115067_` (`PoseStack`)
- `p_115068_` (`MultiBufferSource`)
- `p_115069_` (`int`)
- `p_316131_` (`float`)

**Returns:** `protected void`
