# ItemInHandRenderer

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ItemInHandRenderer

```java
public ItemInHandRenderer(Minecraft p_234241_, EntityRenderDispatcher p_234242_, ItemRenderer p_234243_)
```

**Parameters:**

- `p_234241_` (`Minecraft`)
- `p_234242_` (`EntityRenderDispatcher`)
- `p_234243_` (`ItemRenderer`)

**Returns:** `public`

### renderItem

```java
public void renderItem(LivingEntity p_270072_, ItemStack p_270793_, ItemDisplayContext p_270837_, boolean p_270203_, PoseStack p_270974_, MultiBufferSource p_270686_, int p_270103_)
```

**Parameters:**

- `p_270072_` (`LivingEntity`)
- `p_270793_` (`ItemStack`)
- `p_270837_` (`ItemDisplayContext`)
- `p_270203_` (`boolean`)
- `p_270974_` (`PoseStack`)
- `p_270686_` (`MultiBufferSource`)
- `p_270103_` (`int`)

**Returns:** `public void`

### calculateMapTilt

```java
private float calculateMapTilt(float p_109313_)
```

**Parameters:**

- `p_109313_` (`float`)

**Returns:** `private float`

### renderMapHand

```java
private void renderMapHand(PoseStack p_109362_, MultiBufferSource p_109363_, int p_109364_, HumanoidArm p_109365_)
```

**Parameters:**

- `p_109362_` (`PoseStack`)
- `p_109363_` (`MultiBufferSource`)
- `p_109364_` (`int`)
- `p_109365_` (`HumanoidArm`)

**Returns:** `private void`

### renderOneHandedMap

```java
private void renderOneHandedMap(PoseStack p_109354_, MultiBufferSource p_109355_, int p_109356_, float p_109357_, HumanoidArm p_109358_, float p_109359_, ItemStack p_109360_)
```

**Parameters:**

- `p_109354_` (`PoseStack`)
- `p_109355_` (`MultiBufferSource`)
- `p_109356_` (`int`)
- `p_109357_` (`float`)
- `p_109358_` (`HumanoidArm`)
- `p_109359_` (`float`)
- `p_109360_` (`ItemStack`)

**Returns:** `private void`

### renderTwoHandedMap

```java
private void renderTwoHandedMap(PoseStack p_109340_, MultiBufferSource p_109341_, int p_109342_, float p_109343_, float p_109344_, float p_109345_)
```

**Parameters:**

- `p_109340_` (`PoseStack`)
- `p_109341_` (`MultiBufferSource`)
- `p_109342_` (`int`)
- `p_109343_` (`float`)
- `p_109344_` (`float`)
- `p_109345_` (`float`)

**Returns:** `private void`

### renderMap

```java
private void renderMap(PoseStack p_109367_, MultiBufferSource p_109368_, int p_109369_, ItemStack p_109370_)
```

**Parameters:**

- `p_109367_` (`PoseStack`)
- `p_109368_` (`MultiBufferSource`)
- `p_109369_` (`int`)
- `p_109370_` (`ItemStack`)

**Returns:** `private void`

### renderPlayerArm

```java
private void renderPlayerArm(PoseStack p_109347_, MultiBufferSource p_109348_, int p_109349_, float p_109350_, float p_109351_, HumanoidArm p_109352_)
```

**Parameters:**

- `p_109347_` (`PoseStack`)
- `p_109348_` (`MultiBufferSource`)
- `p_109349_` (`int`)
- `p_109350_` (`float`)
- `p_109351_` (`float`)
- `p_109352_` (`HumanoidArm`)

**Returns:** `private void`

### applyEatTransform

```java
private void applyEatTransform(PoseStack p_109331_, float p_109332_, HumanoidArm p_109333_, ItemStack p_109334_, Player p_346361_)
```

**Parameters:**

- `p_109331_` (`PoseStack`)
- `p_109332_` (`float`)
- `p_109333_` (`HumanoidArm`)
- `p_109334_` (`ItemStack`)
- `p_346361_` (`Player`)

**Returns:** `private void`

### applyBrushTransform

```java
private void applyBrushTransform(PoseStack p_273513_, float p_273245_, HumanoidArm p_273726_, ItemStack p_272809_, Player p_345294_, float p_273333_)
```

**Parameters:**

- `p_273513_` (`PoseStack`)
- `p_273245_` (`float`)
- `p_273726_` (`HumanoidArm`)
- `p_272809_` (`ItemStack`)
- `p_345294_` (`Player`)
- `p_273333_` (`float`)

**Returns:** `private void`

### applyItemArmAttackTransform

```java
private void applyItemArmAttackTransform(PoseStack p_109336_, HumanoidArm p_109337_, float p_109338_)
```

**Parameters:**

- `p_109336_` (`PoseStack`)
- `p_109337_` (`HumanoidArm`)
- `p_109338_` (`float`)

**Returns:** `private void`

### applyItemArmTransform

```java
private void applyItemArmTransform(PoseStack p_109383_, HumanoidArm p_109384_, float p_109385_)
```

**Parameters:**

- `p_109383_` (`PoseStack`)
- `p_109384_` (`HumanoidArm`)
- `p_109385_` (`float`)

**Returns:** `private void`

### renderHandsWithItems

```java
public void renderHandsWithItems(float p_109315_, PoseStack p_109316_, MultiBufferSource.BufferSource p_109317_, LocalPlayer p_109318_, int p_109319_)
```

**Parameters:**

- `p_109315_` (`float`)
- `p_109316_` (`PoseStack`)
- `p_109317_` (`MultiBufferSource.BufferSource`)
- `p_109318_` (`LocalPlayer`)
- `p_109319_` (`int`)

**Returns:** `public void`

### evaluateWhichHandsToRender

```java
static ItemInHandRenderer.HandRenderSelection evaluateWhichHandsToRender(LocalPlayer p_172915_)
```

**Parameters:**

- `p_172915_` (`LocalPlayer`)

**Returns:** `ItemInHandRenderer.HandRenderSelection`

### selectionUsingItemWhileHoldingBowLike

```java
return selectionUsingItemWhileHoldingBowLike()
```

**Returns:** `return`

### selectionUsingItemWhileHoldingBowLike

```java
private static ItemInHandRenderer.HandRenderSelection selectionUsingItemWhileHoldingBowLike(LocalPlayer p_172917_)
```

**Parameters:**

- `p_172917_` (`LocalPlayer`)

**Returns:** `private static ItemInHandRenderer.HandRenderSelection`

### isChargedCrossbow

```java
private static boolean isChargedCrossbow(ItemStack p_172913_)
```

**Parameters:**

- `p_172913_` (`ItemStack`)

**Returns:** `private static boolean`

### renderArmWithItem

```java
private void renderArmWithItem(AbstractClientPlayer p_109372_, float p_109373_, float p_109374_, InteractionHand p_109375_, float p_109376_, ItemStack p_109377_, float p_109378_, PoseStack p_109379_, MultiBufferSource p_109380_, int p_109381_)
```

**Parameters:**

- `p_109372_` (`AbstractClientPlayer`)
- `p_109373_` (`float`)
- `p_109374_` (`float`)
- `p_109375_` (`InteractionHand`)
- `p_109376_` (`float`)
- `p_109377_` (`ItemStack`)
- `p_109378_` (`float`)
- `p_109379_` (`PoseStack`)
- `p_109380_` (`MultiBufferSource`)
- `p_109381_` (`int`)

**Returns:** `private void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### itemUsed

```java
public void itemUsed(InteractionHand p_109321_)
```

**Parameters:**

- `p_109321_` (`InteractionHand`)

**Returns:** `public void`

### RENDER_OFF_HAND_ONLY

```java
, RENDER_OFF_HAND_ONLY()
```

**Returns:** `,`

### HandRenderSelection

```java
private HandRenderSelection(boolean p_172928_, boolean p_172929_)
```

**Parameters:**

- `p_172928_` (`boolean`)
- `p_172929_` (`boolean`)

**Returns:** `private`

### onlyForHand

```java
public static ItemInHandRenderer.HandRenderSelection onlyForHand(InteractionHand p_172932_)
```

**Parameters:**

- `p_172932_` (`InteractionHand`)

**Returns:** `public static ItemInHandRenderer.HandRenderSelection`
