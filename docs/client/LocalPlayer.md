# LocalPlayer

**Package:** `net.minecraft.client.player`
**Type:** class
**Extends:** `AbstractClientPlayer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LOGGER` | `Logger` |  |
| `connection` | `ClientPacketListener` |  |
| `input` | `Input` |  |
| `minecraft` | `Minecraft` |  |
| `sprintTriggerTime` | `int` |  |
| `yBob` | `float` |  |
| `xBob` | `float` |  |
| `yBobO` | `float` |  |
| `xBobO` | `float` |  |
| `spinningEffectIntensity` | `float` |  |
| `oSpinningEffectIntensity` | `float` |  |

## Methods

### LocalPlayer

```java
public LocalPlayer(Minecraft p_108621_, ClientLevel p_108622_, ClientPacketListener p_108623_, StatsCounter p_108624_, ClientRecipeBook p_108625_, boolean p_108626_, boolean p_108627_)
```

**Parameters:**

- `p_108621_` (`Minecraft`)
- `p_108622_` (`ClientLevel`)
- `p_108623_` (`ClientPacketListener`)
- `p_108624_` (`StatsCounter`)
- `p_108625_` (`ClientRecipeBook`)
- `p_108626_` (`boolean`)
- `p_108627_` (`boolean`)

**Returns:** `public`

### hurt

```java
public boolean hurt(DamageSource p_108662_, float p_108663_)
```

**Parameters:**

- `p_108662_` (`DamageSource`)
- `p_108663_` (`float`)

**Returns:** `boolean`

### heal

```java
public void heal(float p_108708_)
```

**Parameters:**

- `p_108708_` (`float`)

### startRiding

```java
public boolean startRiding(Entity p_108667_, boolean p_108668_)
```

**Parameters:**

- `p_108667_` (`Entity`)
- `p_108668_` (`boolean`)

**Returns:** `boolean`

### removeVehicle

```java
public void removeVehicle()
```

### getViewXRot

```java
public float getViewXRot(float p_108742_)
```

**Parameters:**

- `p_108742_` (`float`)

**Returns:** `float`

### getViewYRot

```java
public float getViewYRot(float p_108753_)
```

**Parameters:**

- `p_108753_` (`float`)

**Returns:** `float`

### tick

```java
public void tick()
```

### getCurrentMood

```java
public float getCurrentMood()
```

**Returns:** `public float`

### sendPosition

```java
private void sendPosition()
```

**Returns:** `private void`

### sendIsSprintingIfNeeded

```java
private void sendIsSprintingIfNeeded()
```

**Returns:** `private void`

### drop

```java
public boolean drop(boolean p_108701_)
```

**Parameters:**

- `p_108701_` (`boolean`)

**Returns:** `public boolean`

### swing

```java
public void swing(InteractionHand p_108660_)
```

**Parameters:**

- `p_108660_` (`InteractionHand`)

### respawn

```java
public void respawn()
```

### actuallyHurt

```java
protected void actuallyHurt(DamageSource p_108729_, float p_108730_)
```

**Parameters:**

- `p_108729_` (`DamageSource`)
- `p_108730_` (`float`)

### closeContainer

```java
public void closeContainer()
```

### clientSideCloseContainer

```java
public void clientSideCloseContainer()
```

**Returns:** `public void`

### hurtTo

```java
public void hurtTo(float p_108761_)
```

**Parameters:**

- `p_108761_` (`float`)

**Returns:** `public void`

### onUpdateAbilities

```java
public void onUpdateAbilities()
```

### isLocalPlayer

```java
public boolean isLocalPlayer()
```

**Returns:** `boolean`

### isSuppressingSlidingDownLadder

```java
public boolean isSuppressingSlidingDownLadder()
```

**Returns:** `boolean`

### canSpawnSprintParticle

```java
public boolean canSpawnSprintParticle()
```

**Returns:** `boolean`

### sendRidingJump

```java
protected void sendRidingJump()
```

**Returns:** `protected void`

### sendOpenInventory

```java
public void sendOpenInventory()
```

**Returns:** `public void`

### getStats

```java
public StatsCounter getStats()
```

**Returns:** `public StatsCounter`

### getRecipeBook

```java
public ClientRecipeBook getRecipeBook()
```

**Returns:** `public ClientRecipeBook`

### removeRecipeHighlight

```java
public void removeRecipeHighlight(RecipeHolder<?> p_300983_)
```

**Parameters:**

- `p_300983_` (`RecipeHolder<?>`)

**Returns:** `public void`

### getPermissionLevel

```java
public int getPermissionLevel()
```

**Returns:** `int`

### setPermissionLevel

```java
public void setPermissionLevel(int p_108649_)
```

**Parameters:**

- `p_108649_` (`int`)

**Returns:** `public void`

### displayClientMessage

```java
public void displayClientMessage(Component p_108696_, boolean p_108697_)
```

**Parameters:**

- `p_108696_` (`Component`)
- `p_108697_` (`boolean`)

### moveTowardsClosestSpace

```java
private void moveTowardsClosestSpace(double p_108705_, double p_108706_)
```

**Parameters:**

- `p_108705_` (`double`)
- `p_108706_` (`double`)

**Returns:** `private void`

### suffocatesAt

```java
private boolean suffocatesAt(BlockPos p_108747_)
```

**Parameters:**

- `p_108747_` (`BlockPos`)

**Returns:** `private boolean`

### setExperienceValues

```java
public void setExperienceValues(float p_108645_, int p_108646_, int p_108647_)
```

**Parameters:**

- `p_108645_` (`float`)
- `p_108646_` (`int`)
- `p_108647_` (`int`)

**Returns:** `public void`

### sendSystemMessage

```java
public void sendSystemMessage(Component p_234129_)
```

**Parameters:**

- `p_234129_` (`Component`)

### handleEntityEvent

```java
public void handleEntityEvent(byte p_108643_)
```

**Parameters:**

- `p_108643_` (`byte`)

### setShowDeathScreen

```java
public void setShowDeathScreen(boolean p_108712_)
```

**Parameters:**

- `p_108712_` (`boolean`)

**Returns:** `public void`

### shouldShowDeathScreen

```java
public boolean shouldShowDeathScreen()
```

**Returns:** `public boolean`

### setDoLimitedCrafting

```java
public void setDoLimitedCrafting(boolean p_302021_)
```

**Parameters:**

- `p_302021_` (`boolean`)

**Returns:** `public void`

### getDoLimitedCrafting

```java
public boolean getDoLimitedCrafting()
```

**Returns:** `public boolean`

### playSound

```java
public void playSound(SoundEvent p_108651_, float p_108652_, float p_108653_)
```

**Parameters:**

- `p_108651_` (`SoundEvent`)
- `p_108652_` (`float`)
- `p_108653_` (`float`)

### playNotifySound

```java
public void playNotifySound(SoundEvent p_108655_, SoundSource p_108656_, float p_108657_, float p_108658_)
```

**Parameters:**

- `p_108655_` (`SoundEvent`)
- `p_108656_` (`SoundSource`)
- `p_108657_` (`float`)
- `p_108658_` (`float`)

### isEffectiveAi

```java
public boolean isEffectiveAi()
```

**Returns:** `boolean`

### startUsingItem

```java
public void startUsingItem(InteractionHand p_108718_)
```

**Parameters:**

- `p_108718_` (`InteractionHand`)

### isUsingItem

```java
public boolean isUsingItem()
```

**Returns:** `boolean`

### stopUsingItem

```java
public void stopUsingItem()
```

### getUsedItemHand

```java
public InteractionHand getUsedItemHand()
```

**Returns:** `InteractionHand`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_108699_)
```

**Parameters:**

- `p_108699_` (`EntityDataAccessor<?>`)

### jumpableVehicle

```java
public PlayerRideableJumping jumpableVehicle()
```

**Returns:** `PlayerRideableJumping`

### getJumpRidingScale

```java
public float getJumpRidingScale()
```

**Returns:** `public float`

### isTextFilteringEnabled

```java
public boolean isTextFilteringEnabled()
```

**Returns:** `boolean`

### openTextEdit

```java
public void openTextEdit(SignBlockEntity p_277970_, boolean p_277980_)
```

**Parameters:**

- `p_277970_` (`SignBlockEntity`)
- `p_277980_` (`boolean`)

### openMinecartCommandBlock

```java
public void openMinecartCommandBlock(BaseCommandBlock p_108678_)
```

**Parameters:**

- `p_108678_` (`BaseCommandBlock`)

### openCommandBlock

```java
public void openCommandBlock(CommandBlockEntity p_108680_)
```

**Parameters:**

- `p_108680_` (`CommandBlockEntity`)

### openStructureBlock

```java
public void openStructureBlock(StructureBlockEntity p_108686_)
```

**Parameters:**

- `p_108686_` (`StructureBlockEntity`)

### openJigsawBlock

```java
public void openJigsawBlock(JigsawBlockEntity p_108682_)
```

**Parameters:**

- `p_108682_` (`JigsawBlockEntity`)

### openItemGui

```java
public void openItemGui(ItemStack p_108673_, InteractionHand p_108674_)
```

**Parameters:**

- `p_108673_` (`ItemStack`)
- `p_108674_` (`InteractionHand`)

### crit

```java
public void crit(Entity p_108665_)
```

**Parameters:**

- `p_108665_` (`Entity`)

### magicCrit

```java
public void magicCrit(Entity p_108710_)
```

**Parameters:**

- `p_108710_` (`Entity`)

### isShiftKeyDown

```java
public boolean isShiftKeyDown()
```

**Returns:** `boolean`

### isCrouching

```java
public boolean isCrouching()
```

**Returns:** `boolean`

### isMovingSlowly

```java
public boolean isMovingSlowly()
```

**Returns:** `public boolean`

### serverAiStep

```java
public void serverAiStep()
```

### isControlledCamera

```java
protected boolean isControlledCamera()
```

**Returns:** `protected boolean`

### resetPos

```java
public void resetPos()
```

**Returns:** `public void`

### aiStep

```java
public void aiStep()
```

### getActivePortalLocalTransition

```java
public Portal.Transition getActivePortalLocalTransition()
```

**Returns:** `public Portal.Transition`

### tickDeath

```java
protected void tickDeath()
```

### handleConfusionTransitionEffect

```java
private void handleConfusionTransitionEffect(boolean p_350372_)
```

**Parameters:**

- `p_350372_` (`boolean`)

**Returns:** `private void`

### rideTick

```java
public void rideTick()
```

### isHandsBusy

```java
public boolean isHandsBusy()
```

**Returns:** `public boolean`

### removeEffectNoUpdate

```java
public MobEffectInstance removeEffectNoUpdate(Holder<MobEffect> p_316634_)
```

**Parameters:**

- `p_316634_` (`Holder<MobEffect>`)

**Returns:** `MobEffectInstance`

### move

```java
public void move(MoverType p_108670_, Vec3 p_108671_)
```

**Parameters:**

- `p_108670_` (`MoverType`)
- `p_108671_` (`Vec3`)

### isAutoJumpEnabled

```java
public boolean isAutoJumpEnabled()
```

**Returns:** `public boolean`

### updateAutoJump

```java
protected void updateAutoJump(float p_108744_, float p_108745_)
```

**Parameters:**

- `p_108744_` (`float`)
- `p_108745_` (`float`)

**Returns:** `protected void`

### isHorizontalCollisionMinor

```java
protected boolean isHorizontalCollisionMinor(Vec3 p_197411_)
```

**Parameters:**

- `p_197411_` (`Vec3`)

**Returns:** `boolean`

### canAutoJump

```java
private boolean canAutoJump()
```

**Returns:** `private boolean`

### isMoving

```java
private boolean isMoving()
```

**Returns:** `private boolean`

### canStartSprinting

```java
private boolean canStartSprinting()
```

**Returns:** `private boolean`

### vehicleCanSprint

```java
private boolean vehicleCanSprint(Entity p_265184_)
```

**Parameters:**

- `p_265184_` (`Entity`)

**Returns:** `private boolean`

### hasEnoughImpulseToStartSprinting

```java
private boolean hasEnoughImpulseToStartSprinting()
```

**Returns:** `private boolean`

### hasEnoughFoodToStartSprinting

```java
private boolean hasEnoughFoodToStartSprinting()
```

**Returns:** `private boolean`

### getWaterVision

```java
public float getWaterVision()
```

**Returns:** `public float`

### onGameModeChanged

```java
public void onGameModeChanged(GameType p_287675_)
```

**Parameters:**

- `p_287675_` (`GameType`)

**Returns:** `public void`

### isUnderWater

```java
public boolean isUnderWater()
```

**Returns:** `boolean`

### updateIsUnderwater

```java
protected boolean updateIsUnderwater()
```

**Returns:** `boolean`

### getRopeHoldPosition

```java
public Vec3 getRopeHoldPosition(float p_108758_)
```

**Parameters:**

- `p_108758_` (`float`)

**Returns:** `Vec3`

### updateTutorialInventoryAction

```java
public void updateTutorialInventoryAction(ItemStack p_172532_, ItemStack p_172533_, ClickAction p_172534_)
```

**Parameters:**

- `p_172532_` (`ItemStack`)
- `p_172533_` (`ItemStack`)
- `p_172534_` (`ClickAction`)

### getVisualRotationYInDegrees

```java
public float getVisualRotationYInDegrees()
```

**Returns:** `float`
