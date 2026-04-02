# HumanoidModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends LivingEntity> extends AgeableListModel<T>
**Implements:** `ArmedModel`, `HeadedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `OVERLAY_SCALE` | `float` |  |
| `HAT_OVERLAY_SCALE` | `float` |  |
| `LEGGINGS_OVERLAY_SCALE` | `float` |  |
| `TOOT_HORN_XROT_BASE` | `float` |  |
| `TOOT_HORN_YROT_BASE` | `float` |  |
| `head` | `ModelPart` |  |
| `hat` | `ModelPart` |  |
| `body` | `ModelPart` |  |
| `rightArm` | `ModelPart` |  |
| `leftArm` | `ModelPart` |  |
| `rightLeg` | `ModelPart` |  |
| `leftLeg` | `ModelPart` |  |
| `leftArmPose` | `HumanoidModel.ArmPose` |  |
| `rightArmPose` | `HumanoidModel.ArmPose` |  |
| `crouching` | `boolean` |  |
| `swimAmount` | `float` |  |

## Methods

### HumanoidModel

```java
public HumanoidModel(ModelPart p_170677_)
```

**Parameters:**

- `p_170677_` (`ModelPart`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### HumanoidModel

```java
public HumanoidModel(ModelPart p_170679_, Function<ResourceLocation, RenderType> p_170680_)
```

**Parameters:**

- `p_170679_` (`ModelPart`)
- `p_170680_` (`Function<ResourceLocation, RenderType>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createMesh

```java
public static MeshDefinition createMesh(CubeDeformation p_170682_, float p_170683_)
```

**Parameters:**

- `p_170682_` (`CubeDeformation`)
- `p_170683_` (`float`)

**Returns:** `public static MeshDefinition`

### headParts

```java
protected Iterable<ModelPart> headParts()
```

**Returns:** `Iterable<ModelPart>`

### bodyParts

```java
protected Iterable<ModelPart> bodyParts()
```

**Returns:** `Iterable<ModelPart>`

### prepareMobModel

```java
public void prepareMobModel(T p_102861_, float p_102862_, float p_102863_, float p_102864_)
```

**Parameters:**

- `p_102861_` (`T`)
- `p_102862_` (`float`)
- `p_102863_` (`float`)
- `p_102864_` (`float`)

**Returns:** `public void`

### setupAnim

```java
public void setupAnim(T p_102866_, float p_102867_, float p_102868_, float p_102869_, float p_102870_, float p_102871_)
```

**Parameters:**

- `p_102866_` (`T`)
- `p_102867_` (`float`)
- `p_102868_` (`float`)
- `p_102869_` (`float`)
- `p_102870_` (`float`)
- `p_102871_` (`float`)

**Returns:** `public void`

### poseRightArm

```java
private void poseRightArm(T p_102876_)
```

**Parameters:**

- `p_102876_` (`T`)

**Returns:** `private void`

### poseLeftArm

```java
private void poseLeftArm(T p_102879_)
```

**Parameters:**

- `p_102879_` (`T`)

**Returns:** `private void`

### poseBlockingArm

```java
private void poseBlockingArm(ModelPart p_304530_, boolean p_304416_)
```

**Parameters:**

- `p_304530_` (`ModelPart`)
- `p_304416_` (`boolean`)

**Returns:** `private void`

### setupAttackAnimation

```java
protected void setupAttackAnimation(T p_102858_, float p_102859_)
```

**Parameters:**

- `p_102858_` (`T`)
- `p_102859_` (`float`)

**Returns:** `protected void`

### rotlerpRad

```java
protected float rotlerpRad(float p_102836_, float p_102837_, float p_102838_)
```

**Parameters:**

- `p_102836_` (`float`)
- `p_102837_` (`float`)
- `p_102838_` (`float`)

**Returns:** `protected float`

### quadraticArmUpdate

```java
private float quadraticArmUpdate(float p_102834_)
```

**Parameters:**

- `p_102834_` (`float`)

**Returns:** `private float`

### copyPropertiesTo

```java
public void copyPropertiesTo(HumanoidModel<T> p_102873_)
```

**Parameters:**

- `p_102873_` (`HumanoidModel<T>`)

**Returns:** `public void`

### setAllVisible

```java
public void setAllVisible(boolean p_102880_)
```

**Parameters:**

- `p_102880_` (`boolean`)

**Returns:** `public void`

### translateToHand

```java
public void translateToHand(HumanoidArm p_102854_, PoseStack p_102855_)
```

**Parameters:**

- `p_102854_` (`HumanoidArm`)
- `p_102855_` (`PoseStack`)

### getArm

```java
protected ModelPart getArm(HumanoidArm p_102852_)
```

**Parameters:**

- `p_102852_` (`HumanoidArm`)

**Returns:** `protected ModelPart`

### getHead

```java
public ModelPart getHead()
```

**Returns:** `ModelPart`

### getAttackArm

```java
private HumanoidArm getAttackArm(T p_102857_)
```

**Parameters:**

- `p_102857_` (`T`)

**Returns:** `private HumanoidArm`

### BRUSH

```java
, BRUSH()
```

**Returns:** `,`

### ArmPose

```java
.neoforged.fml.common.asm.enumextension.ReservedConstructor
        private ArmPose(boolean p_102896_)
```

**Parameters:**

- `p_102896_` (`boolean`)

**Returns:** `.neoforged.fml.common.asm.enumextension.ReservedConstructor
        private`

### ArmPose

```java
private ArmPose(boolean twoHanded, net.neoforged.neoforge.client.IArmPoseTransformer forgeArmPose)
```

**Parameters:**

- `twoHanded` (`boolean`)
- `forgeArmPose` (`net.neoforged.neoforge.client.IArmPoseTransformer`)

**Returns:** `private`

### isTwoHanded

```java
public boolean isTwoHanded()
```

**Returns:** `public boolean`

### applyTransform

```java
<T extends LivingEntity> public <T extends LivingEntity> void applyTransform(HumanoidModel<T> model, T entity, net.minecraft.world.entity.HumanoidArm arm)
```

**Parameters:**

- `model` (`HumanoidModel<T>`)
- `entity` (`T`)
- `arm` (`net.minecraft.world.entity.HumanoidArm`)

**Returns:** `public <T extends LivingEntity> void`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ArmPose` | enum |  |
