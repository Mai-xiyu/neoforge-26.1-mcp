# IArmPoseTransformer

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Description

An ArmPose that can be defined by the user.
Register one by creating a custom `net.minecraft.client.model.HumanoidModel.ArmPose`
and returning it in `IClientItemExtensions#getArmPose(LivingEntity, InteractionHand, ItemStack)`.

## Methods

### applyTransform

```java
void applyTransform(HumanoidModel<?> model, LivingEntity entity, HumanoidArm arm)
```

**Parameters:**

- `model` (`HumanoidModel<?>`)
- `entity` (`LivingEntity`)
- `arm` (`HumanoidArm`)
