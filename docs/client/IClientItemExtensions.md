# IClientItemExtensions

**Package:** `net.neoforged.neoforge.client.extensions.common`
**Type:** interface
**Side:** 🖥️ Client

## Description

LogicalSide#CLIENT Client-only extensions to `Item`.
@see Item#initializeClient(Consumer)

## Methods

### of

```java
static IClientItemExtensions of(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `static IClientItemExtensions`

### of

```java
static IClientItemExtensions of(Item item)
```

**Parameters:**

- `item` (`Item`)

**Returns:** `static IClientItemExtensions`

### getFont

```java
default Font getFont(ItemStack stack, FontContext context)
```

**Parameters:**

- `stack` (`ItemStack`)
- `context` (`FontContext`)

**Returns:** `Font`

### getArmPose

```java
default HumanoidModel.ArmPose getArmPose(LivingEntity entityLiving, InteractionHand hand, ItemStack itemStack)
```

**Parameters:**

- `entityLiving` (`LivingEntity`)
- `hand` (`InteractionHand`)
- `itemStack` (`ItemStack`)

**Returns:** `HumanoidModel.ArmPose`

### applyForgeHandTransform

```java
default boolean applyForgeHandTransform(PoseStack poseStack, LocalPlayer player, HumanoidArm arm, ItemStack itemInHand, float partialTick, float equipProcess, float swingProcess)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `player` (`LocalPlayer`)
- `arm` (`HumanoidArm`)
- `itemInHand` (`ItemStack`)
- `partialTick` (`float`)
- `equipProcess` (`float`)
- `swingProcess` (`float`)

**Returns:** `boolean`

### getHumanoidArmorModel

```java
default HumanoidModel<?> getHumanoidArmorModel(LivingEntity livingEntity, ItemStack itemStack, EquipmentSlot equipmentSlot, HumanoidModel<?> original)
```

**Parameters:**

- `livingEntity` (`LivingEntity`)
- `itemStack` (`ItemStack`)
- `equipmentSlot` (`EquipmentSlot`)
- `original` (`HumanoidModel<?>`)

**Returns:** `HumanoidModel<?>`

### getGenericArmorModel

```java
default Model getGenericArmorModel(LivingEntity livingEntity, ItemStack itemStack, EquipmentSlot equipmentSlot, HumanoidModel<?> original)
```

**Parameters:**

- `livingEntity` (`LivingEntity`)
- `itemStack` (`ItemStack`)
- `equipmentSlot` (`EquipmentSlot`)
- `original` (`HumanoidModel<?>`)

**Returns:** `Model`

### setupModelAnimations

```java
default void setupModelAnimations(LivingEntity livingEntity, ItemStack itemStack, EquipmentSlot equipmentSlot, Model model, float limbSwing, float limbSwingAmount, float partialTick, float ageInTicks, float netHeadYaw, float headPitch)
```

**Parameters:**

- `livingEntity` (`LivingEntity`)
- `itemStack` (`ItemStack`)
- `equipmentSlot` (`EquipmentSlot`)
- `model` (`Model`)
- `limbSwing` (`float`)
- `limbSwingAmount` (`float`)
- `partialTick` (`float`)
- `ageInTicks` (`float`)
- `netHeadYaw` (`float`)
- `headPitch` (`float`)

### renderHelmetOverlay

```java
default void renderHelmetOverlay(ItemStack stack, Player player, int width, int height, float partialTick)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `width` (`int`)
- `height` (`int`)
- `partialTick` (`float`)

### renderHelmetOverlay

```java
default void renderHelmetOverlay(ItemStack stack, Player player, GuiGraphics guiGraphics, DeltaTracker deltaTracker)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `guiGraphics` (`GuiGraphics`)
- `deltaTracker` (`DeltaTracker`)

### getCustomRenderer

```java
default BlockEntityWithoutLevelRenderer getCustomRenderer()
```

**Returns:** `BlockEntityWithoutLevelRenderer`

### shouldBobAsEntity

```java
default boolean shouldBobAsEntity(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### shouldSpreadAsEntity

```java
default boolean shouldSpreadAsEntity(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getArmorLayerTintColor

```java
default int getArmorLayerTintColor(ItemStack stack, LivingEntity entity, ArmorMaterial.Layer layer, int layerIdx, int fallbackColor)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`LivingEntity`)
- `layer` (`ArmorMaterial.Layer`)
- `layerIdx` (`int`)
- `fallbackColor` (`int`)

**Returns:** `int`

### getDefaultDyeColor

```java
default int getDefaultDyeColor(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`
