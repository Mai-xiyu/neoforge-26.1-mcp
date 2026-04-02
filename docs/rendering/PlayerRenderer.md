# PlayerRenderer

**Package:** `net.minecraft.client.renderer.entity.player`
**Type:** class
**Extends:** `LivingEntityRenderer<AbstractClientPlayer, PlayerModel<AbstractClientPlayer>>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PlayerRenderer

```java
public PlayerRenderer(EntityRendererProvider.Context p_174557_, boolean p_174558_)
```

**Parameters:**

- `p_174557_` (`EntityRendererProvider.Context`)
- `p_174558_` (`boolean`)

**Returns:** `public`

### render

```java
public void render(AbstractClientPlayer p_117788_, float p_117789_, float p_117790_, PoseStack p_117791_, MultiBufferSource p_117792_, int p_117793_)
```

**Parameters:**

- `p_117788_` (`AbstractClientPlayer`)
- `p_117789_` (`float`)
- `p_117790_` (`float`)
- `p_117791_` (`PoseStack`)
- `p_117792_` (`MultiBufferSource`)
- `p_117793_` (`int`)

**Returns:** `public void`

### getRenderOffset

```java
public Vec3 getRenderOffset(AbstractClientPlayer p_117785_, float p_117786_)
```

**Parameters:**

- `p_117785_` (`AbstractClientPlayer`)
- `p_117786_` (`float`)

**Returns:** `public Vec3`

### setModelProperties

```java
private void setModelProperties(AbstractClientPlayer p_117819_)
```

**Parameters:**

- `p_117819_` (`AbstractClientPlayer`)

**Returns:** `private void`

### getArmPose

```java
private static HumanoidModel.ArmPose getArmPose(AbstractClientPlayer p_117795_, InteractionHand p_117796_)
```

**Parameters:**

- `p_117795_` (`AbstractClientPlayer`)
- `p_117796_` (`InteractionHand`)

**Returns:** `private static HumanoidModel.ArmPose`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(AbstractClientPlayer p_117783_)
```

**Parameters:**

- `p_117783_` (`AbstractClientPlayer`)

**Returns:** `public ResourceLocation`

### scale

```java
protected void scale(AbstractClientPlayer p_117798_, PoseStack p_117799_, float p_117800_)
```

**Parameters:**

- `p_117798_` (`AbstractClientPlayer`)
- `p_117799_` (`PoseStack`)
- `p_117800_` (`float`)

**Returns:** `protected void`

### renderNameTag

```java
protected void renderNameTag(AbstractClientPlayer p_117808_, Component p_117809_, PoseStack p_117810_, MultiBufferSource p_117811_, int p_117812_, float p_316461_)
```

**Parameters:**

- `p_117808_` (`AbstractClientPlayer`)
- `p_117809_` (`Component`)
- `p_117810_` (`PoseStack`)
- `p_117811_` (`MultiBufferSource`)
- `p_117812_` (`int`)
- `p_316461_` (`float`)

**Returns:** `protected void`

### renderRightHand

```java
public void renderRightHand(PoseStack p_117771_, MultiBufferSource p_117772_, int p_117773_, AbstractClientPlayer p_117774_)
```

**Parameters:**

- `p_117771_` (`PoseStack`)
- `p_117772_` (`MultiBufferSource`)
- `p_117773_` (`int`)
- `p_117774_` (`AbstractClientPlayer`)

**Returns:** `public void`

### renderLeftHand

```java
public void renderLeftHand(PoseStack p_117814_, MultiBufferSource p_117815_, int p_117816_, AbstractClientPlayer p_117817_)
```

**Parameters:**

- `p_117814_` (`PoseStack`)
- `p_117815_` (`MultiBufferSource`)
- `p_117816_` (`int`)
- `p_117817_` (`AbstractClientPlayer`)

**Returns:** `public void`

### renderHand

```java
private void renderHand(PoseStack p_117776_, MultiBufferSource p_117777_, int p_117778_, AbstractClientPlayer p_117779_, ModelPart p_117780_, ModelPart p_117781_)
```

**Parameters:**

- `p_117776_` (`PoseStack`)
- `p_117777_` (`MultiBufferSource`)
- `p_117778_` (`int`)
- `p_117779_` (`AbstractClientPlayer`)
- `p_117780_` (`ModelPart`)
- `p_117781_` (`ModelPart`)

**Returns:** `private void`

### setupRotations

```java
protected void setupRotations(AbstractClientPlayer p_117802_, PoseStack p_117803_, float p_117804_, float p_117805_, float p_117806_, float p_320048_)
```

**Parameters:**

- `p_117802_` (`AbstractClientPlayer`)
- `p_117803_` (`PoseStack`)
- `p_117804_` (`float`)
- `p_117805_` (`float`)
- `p_117806_` (`float`)
- `p_320048_` (`float`)

**Returns:** `protected void`
