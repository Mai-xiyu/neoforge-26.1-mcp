# ArmorStand

**Package:** `net.minecraft.world.entity.decoration`
**Type:** class
**Extends:** `LivingEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WOBBLE_TIME` | `int` |  |
| `DISABLE_TAKING_OFFSET` | `int` |  |
| `DISABLE_PUTTING_OFFSET` | `int` |  |
| `CLIENT_FLAG_SMALL` | `int` |  |
| `CLIENT_FLAG_SHOW_ARMS` | `int` |  |
| `CLIENT_FLAG_NO_BASEPLATE` | `int` |  |
| `CLIENT_FLAG_MARKER` | `int` |  |
| `DATA_CLIENT_FLAGS` | `EntityDataAccessor<Byte>` |  |
| `DATA_HEAD_POSE` | `EntityDataAccessor<Rotations>` |  |
| `DATA_BODY_POSE` | `EntityDataAccessor<Rotations>` |  |
| `DATA_LEFT_ARM_POSE` | `EntityDataAccessor<Rotations>` |  |
| `DATA_RIGHT_ARM_POSE` | `EntityDataAccessor<Rotations>` |  |
| `DATA_LEFT_LEG_POSE` | `EntityDataAccessor<Rotations>` |  |
| `DATA_RIGHT_LEG_POSE` | `EntityDataAccessor<Rotations>` |  |
| `lastHit` | `long` |  |

## Methods

### ArmorStand

```java
public ArmorStand(EntityType<? extends ArmorStand> p_31553_, Level p_31554_)
```

**Parameters:**

- `p_31553_` (`EntityType<? extends ArmorStand>`)
- `p_31554_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ArmorStand

```java
public ArmorStand(Level p_31556_, double p_31557_, double p_31558_, double p_31559_)
```

**Parameters:**

- `p_31556_` (`Level`)
- `p_31557_` (`double`)
- `p_31558_` (`double`)
- `p_31559_` (`double`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### refreshDimensions

```java
public void refreshDimensions()
```

### hasPhysics

```java
private boolean hasPhysics()
```

**Returns:** `private boolean`

### isEffectiveAi

```java
public boolean isEffectiveAi()
```

**Returns:** `boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326283_)
```

**Parameters:**

- `p_326283_` (`SynchedEntityData.Builder`)

### getHandSlots

```java
public Iterable<ItemStack> getHandSlots()
```

**Returns:** `Iterable<ItemStack>`

### getArmorSlots

```java
public Iterable<ItemStack> getArmorSlots()
```

**Returns:** `Iterable<ItemStack>`

### getItemBySlot

```java
public ItemStack getItemBySlot(EquipmentSlot p_31612_)
```

**Parameters:**

- `p_31612_` (`EquipmentSlot`)

**Returns:** `ItemStack`

### canUseSlot

```java
public boolean canUseSlot(EquipmentSlot p_326077_)
```

**Parameters:**

- `p_326077_` (`EquipmentSlot`)

**Returns:** `boolean`

### setItemSlot

```java
public void setItemSlot(EquipmentSlot p_31584_, ItemStack p_31585_)
```

**Parameters:**

- `p_31584_` (`EquipmentSlot`)
- `p_31585_` (`ItemStack`)

### canTakeItem

```java
public boolean canTakeItem(ItemStack p_31638_)
```

**Parameters:**

- `p_31638_` (`ItemStack`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_31619_)
```

**Parameters:**

- `p_31619_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_31600_)
```

**Parameters:**

- `p_31600_` (`CompoundTag`)

### readPose

```java
private void readPose(CompoundTag p_31658_)
```

**Parameters:**

- `p_31658_` (`CompoundTag`)

**Returns:** `private void`

### writePose

```java
private CompoundTag writePose()
```

**Returns:** `private CompoundTag`

### isPushable

```java
public boolean isPushable()
```

**Returns:** `boolean`

### doPush

```java
protected void doPush(Entity p_31564_)
```

**Parameters:**

- `p_31564_` (`Entity`)

### pushEntities

```java
protected void pushEntities()
```

### interactAt

```java
public InteractionResult interactAt(Player p_31594_, Vec3 p_31595_, InteractionHand p_31596_)
```

**Parameters:**

- `p_31594_` (`Player`)
- `p_31595_` (`Vec3`)
- `p_31596_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getClickedSlot

```java
private EquipmentSlot getClickedSlot(Vec3 p_31660_)
```

**Parameters:**

- `p_31660_` (`Vec3`)

**Returns:** `private EquipmentSlot`

### isDisabled

```java
private boolean isDisabled(EquipmentSlot p_31627_)
```

**Parameters:**

- `p_31627_` (`EquipmentSlot`)

**Returns:** `private boolean`

### swapItem

```java
private boolean swapItem(Player p_31589_, EquipmentSlot p_31590_, ItemStack p_31591_, InteractionHand p_31592_)
```

**Parameters:**

- `p_31589_` (`Player`)
- `p_31590_` (`EquipmentSlot`)
- `p_31591_` (`ItemStack`)
- `p_31592_` (`InteractionHand`)

**Returns:** `private boolean`

### hurt

```java
public boolean hurt(DamageSource p_31579_, float p_31580_)
```

**Parameters:**

- `p_31579_` (`DamageSource`)
- `p_31580_` (`float`)

**Returns:** `boolean`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_31568_)
```

**Parameters:**

- `p_31568_` (`byte`)

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_31574_)
```

**Parameters:**

- `p_31574_` (`double`)

**Returns:** `boolean`

### showBreakingParticles

```java
private void showBreakingParticles()
```

**Returns:** `private void`

### causeDamage

```java
private void causeDamage(ServerLevel p_348633_, DamageSource p_31649_, float p_31650_)
```

**Parameters:**

- `p_348633_` (`ServerLevel`)
- `p_31649_` (`DamageSource`)
- `p_31650_` (`float`)

**Returns:** `private void`

### brokenByPlayer

```java
private void brokenByPlayer(ServerLevel p_348677_, DamageSource p_31647_)
```

**Parameters:**

- `p_348677_` (`ServerLevel`)
- `p_31647_` (`DamageSource`)

**Returns:** `private void`

### brokenByAnything

```java
private void brokenByAnything(ServerLevel p_348553_, DamageSource p_31654_)
```

**Parameters:**

- `p_348553_` (`ServerLevel`)
- `p_31654_` (`DamageSource`)

**Returns:** `private void`

### playBrokenSound

```java
private void playBrokenSound()
```

**Returns:** `private void`

### tickHeadTurn

```java
protected float tickHeadTurn(float p_31644_, float p_31645_)
```

**Parameters:**

- `p_31644_` (`float`)
- `p_31645_` (`float`)

**Returns:** `float`

### travel

```java
public void travel(Vec3 p_31656_)
```

**Parameters:**

- `p_31656_` (`Vec3`)

### setYBodyRot

```java
public void setYBodyRot(float p_31670_)
```

**Parameters:**

- `p_31670_` (`float`)

### setYHeadRot

```java
public void setYHeadRot(float p_31668_)
```

**Parameters:**

- `p_31668_` (`float`)

### tick

```java
public void tick()
```

### updateInvisibilityStatus

```java
protected void updateInvisibilityStatus()
```

### setInvisible

```java
public void setInvisible(boolean p_31663_)
```

**Parameters:**

- `p_31663_` (`boolean`)

### isBaby

```java
public boolean isBaby()
```

**Returns:** `boolean`

### kill

```java
public void kill()
```

### ignoreExplosion

```java
public boolean ignoreExplosion(Explosion p_312813_)
```

**Parameters:**

- `p_312813_` (`Explosion`)

**Returns:** `boolean`

### getPistonPushReaction

```java
public PushReaction getPistonPushReaction()
```

**Returns:** `PushReaction`

### isIgnoringBlockTriggers

```java
public boolean isIgnoringBlockTriggers()
```

**Returns:** `boolean`

### setSmall

```java
private void setSmall(boolean p_31604_)
```

**Parameters:**

- `p_31604_` (`boolean`)

**Returns:** `private void`

### isSmall

```java
public boolean isSmall()
```

**Returns:** `public boolean`

### setShowArms

```java
public void setShowArms(boolean p_31676_)
```

**Parameters:**

- `p_31676_` (`boolean`)

**Returns:** `public void`

### isShowArms

```java
public boolean isShowArms()
```

**Returns:** `public boolean`

### setNoBasePlate

```java
public void setNoBasePlate(boolean p_31679_)
```

**Parameters:**

- `p_31679_` (`boolean`)

**Returns:** `public void`

### isNoBasePlate

```java
public boolean isNoBasePlate()
```

**Returns:** `public boolean`

### setMarker

```java
private void setMarker(boolean p_31682_)
```

**Parameters:**

- `p_31682_` (`boolean`)

**Returns:** `private void`

### isMarker

```java
public boolean isMarker()
```

**Returns:** `public boolean`

### setBit

```java
private byte setBit(byte p_31570_, int p_31571_, boolean p_31572_)
```

**Parameters:**

- `p_31570_` (`byte`)
- `p_31571_` (`int`)
- `p_31572_` (`boolean`)

**Returns:** `private byte`

### setHeadPose

```java
public void setHeadPose(Rotations p_31598_)
```

**Parameters:**

- `p_31598_` (`Rotations`)

**Returns:** `public void`

### setBodyPose

```java
public void setBodyPose(Rotations p_31617_)
```

**Parameters:**

- `p_31617_` (`Rotations`)

**Returns:** `public void`

### setLeftArmPose

```java
public void setLeftArmPose(Rotations p_31624_)
```

**Parameters:**

- `p_31624_` (`Rotations`)

**Returns:** `public void`

### setRightArmPose

```java
public void setRightArmPose(Rotations p_31629_)
```

**Parameters:**

- `p_31629_` (`Rotations`)

**Returns:** `public void`

### setLeftLegPose

```java
public void setLeftLegPose(Rotations p_31640_)
```

**Parameters:**

- `p_31640_` (`Rotations`)

**Returns:** `public void`

### setRightLegPose

```java
public void setRightLegPose(Rotations p_31652_)
```

**Parameters:**

- `p_31652_` (`Rotations`)

**Returns:** `public void`

### getHeadPose

```java
public Rotations getHeadPose()
```

**Returns:** `public Rotations`

### getBodyPose

```java
public Rotations getBodyPose()
```

**Returns:** `public Rotations`

### getLeftArmPose

```java
public Rotations getLeftArmPose()
```

**Returns:** `public Rotations`

### getRightArmPose

```java
public Rotations getRightArmPose()
```

**Returns:** `public Rotations`

### getLeftLegPose

```java
public Rotations getLeftLegPose()
```

**Returns:** `public Rotations`

### getRightLegPose

```java
public Rotations getRightLegPose()
```

**Returns:** `public Rotations`

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### skipAttackInteraction

```java
public boolean skipAttackInteraction(Entity p_31687_)
```

**Parameters:**

- `p_31687_` (`Entity`)

**Returns:** `boolean`

### getMainArm

```java
public HumanoidArm getMainArm()
```

**Returns:** `HumanoidArm`

### getFallSounds

```java
public LivingEntity.Fallsounds getFallSounds()
```

**Returns:** `LivingEntity.Fallsounds`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_31636_)
```

**Parameters:**

- `p_31636_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### thunderHit

```java
public void thunderHit(ServerLevel p_31576_, LightningBolt p_31577_)
```

**Parameters:**

- `p_31576_` (`ServerLevel`)
- `p_31577_` (`LightningBolt`)

### isAffectedByPotions

```java
public boolean isAffectedByPotions()
```

**Returns:** `boolean`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_31602_)
```

**Parameters:**

- `p_31602_` (`EntityDataAccessor<?>`)

### attackable

```java
public boolean attackable()
```

**Returns:** `boolean`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_31587_)
```

**Parameters:**

- `p_31587_` (`Pose`)

**Returns:** `EntityDimensions`

### getDimensionsMarker

```java
private EntityDimensions getDimensionsMarker(boolean p_31684_)
```

**Parameters:**

- `p_31684_` (`boolean`)

**Returns:** `private EntityDimensions`

### getLightProbePosition

```java
public Vec3 getLightProbePosition(float p_31665_)
```

**Parameters:**

- `p_31665_` (`float`)

**Returns:** `Vec3`

### getPickResult

```java
public ItemStack getPickResult()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### canBeSeenByAnyone

```java
public boolean canBeSeenByAnyone()
```

**Returns:** `boolean`
