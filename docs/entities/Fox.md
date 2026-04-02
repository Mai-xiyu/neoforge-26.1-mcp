# Fox

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`
**Implements:** `VariantHolder<Fox.Type>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLAG_CROUCHING` | `int` |  |
| `FLAG_INTERESTED` | `int` |  |
| `FLAG_POUNCING` | `int` |  |

## Methods

### Fox

```java
public Fox(EntityType<? extends Fox> p_28451_, Level p_28452_)
```

**Parameters:**

- `p_28451_` (`EntityType<? extends Fox>`)
- `p_28452_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326335_)
```

**Parameters:**

- `p_326335_` (`SynchedEntityData.Builder`)

### registerGoals

```java
protected void registerGoals()
```

### getEatingSound

```java
public SoundEvent getEatingSound(ItemStack p_28540_)
```

**Parameters:**

- `p_28540_` (`ItemStack`)

**Returns:** `SoundEvent`

### aiStep

```java
public void aiStep()
```

### isImmobile

```java
protected boolean isImmobile()
```

**Returns:** `boolean`

### canEat

```java
private boolean canEat(ItemStack p_28598_)
```

**Parameters:**

- `p_28598_` (`ItemStack`)

**Returns:** `private boolean`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_218171_, DifficultyInstance p_218172_)
```

**Parameters:**

- `p_218171_` (`RandomSource`)
- `p_218172_` (`DifficultyInstance`)

### handleEntityEvent

```java
public void handleEntityEvent(byte p_28456_)
```

**Parameters:**

- `p_28456_` (`byte`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getBreedOffspring

```java
public Fox getBreedOffspring(ServerLevel p_148912_, AgeableMob p_148913_)
```

**Parameters:**

- `p_148912_` (`ServerLevel`)
- `p_148913_` (`AgeableMob`)

**Returns:** `Fox`

### checkFoxSpawnRules

```java
public static boolean checkFoxSpawnRules(EntityType<Fox> p_218176_, LevelAccessor p_218177_, MobSpawnType p_218178_, BlockPos p_218179_, RandomSource p_218180_)
```

**Parameters:**

- `p_218176_` (`EntityType<Fox>`)
- `p_218177_` (`LevelAccessor`)
- `p_218178_` (`MobSpawnType`)
- `p_218179_` (`BlockPos`)
- `p_218180_` (`RandomSource`)

**Returns:** `public static boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_28487_, DifficultyInstance p_28488_, MobSpawnType p_28489_, SpawnGroupData p_28490_)
```

**Parameters:**

- `p_28487_` (`ServerLevelAccessor`)
- `p_28488_` (`DifficultyInstance`)
- `p_28489_` (`MobSpawnType`)
- `p_28490_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### setTargetGoals

```java
private void setTargetGoals()
```

**Returns:** `private void`

### usePlayerItem

```java
protected void usePlayerItem(Player p_148908_, InteractionHand p_148909_, ItemStack p_148910_)
```

**Parameters:**

- `p_148908_` (`Player`)
- `p_148909_` (`InteractionHand`)
- `p_148910_` (`ItemStack`)

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316477_)
```

**Parameters:**

- `p_316477_` (`Pose`)

**Returns:** `EntityDimensions`

### getVariant

```java
public Fox.Type getVariant()
```

**Returns:** `public Fox.Type`

### setVariant

```java
public void setVariant(Fox.Type p_28465_)
```

**Parameters:**

- `p_28465_` (`Fox.Type`)

**Returns:** `public void`

### getTrustedUUIDs

```java
List<UUID> getTrustedUUIDs()
```

**Returns:** `List<UUID>`

### addTrustedUUID

```java
void addTrustedUUID(UUID p_28516_)
```

**Parameters:**

- `p_28516_` (`UUID`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_28518_)
```

**Parameters:**

- `p_28518_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_28493_)
```

**Parameters:**

- `p_28493_` (`CompoundTag`)

### isSitting

```java
public boolean isSitting()
```

**Returns:** `public boolean`

### setSitting

```java
public void setSitting(boolean p_28611_)
```

**Parameters:**

- `p_28611_` (`boolean`)

**Returns:** `public void`

### isFaceplanted

```java
public boolean isFaceplanted()
```

**Returns:** `public boolean`

### setFaceplanted

```java
void setFaceplanted(boolean p_28619_)
```

**Parameters:**

- `p_28619_` (`boolean`)

### isDefending

```java
boolean isDefending()
```

**Returns:** `boolean`

### setDefending

```java
void setDefending(boolean p_28623_)
```

**Parameters:**

- `p_28623_` (`boolean`)

### isSleeping

```java
public boolean isSleeping()
```

**Returns:** `boolean`

### setSleeping

```java
void setSleeping(boolean p_28627_)
```

**Parameters:**

- `p_28627_` (`boolean`)

### setFlag

```java
private void setFlag(int p_28533_, boolean p_28534_)
```

**Parameters:**

- `p_28533_` (`int`)
- `p_28534_` (`boolean`)

**Returns:** `private void`

### getFlag

```java
private boolean getFlag(int p_28609_)
```

**Parameters:**

- `p_28609_` (`int`)

**Returns:** `private boolean`

### canTakeItem

```java
public boolean canTakeItem(ItemStack p_28552_)
```

**Parameters:**

- `p_28552_` (`ItemStack`)

**Returns:** `boolean`

### canHoldItem

```java
public boolean canHoldItem(ItemStack p_28578_)
```

**Parameters:**

- `p_28578_` (`ItemStack`)

**Returns:** `boolean`

### spitOutItem

```java
private void spitOutItem(ItemStack p_28602_)
```

**Parameters:**

- `p_28602_` (`ItemStack`)

**Returns:** `private void`

### dropItemStack

```java
private void dropItemStack(ItemStack p_28606_)
```

**Parameters:**

- `p_28606_` (`ItemStack`)

**Returns:** `private void`

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_28514_)
```

**Parameters:**

- `p_28514_` (`ItemEntity`)

### tick

```java
public void tick()
```

### isFood

```java
public boolean isFood(ItemStack p_28594_)
```

**Parameters:**

- `p_28594_` (`ItemStack`)

**Returns:** `boolean`

### onOffspringSpawnedFromEgg

```java
protected void onOffspringSpawnedFromEgg(Player p_28481_, Mob p_28482_)
```

**Parameters:**

- `p_28481_` (`Player`)
- `p_28482_` (`Mob`)

### isPouncing

```java
public boolean isPouncing()
```

**Returns:** `public boolean`

### setIsPouncing

```java
public void setIsPouncing(boolean p_28613_)
```

**Parameters:**

- `p_28613_` (`boolean`)

**Returns:** `public void`

### isJumping

```java
public boolean isJumping()
```

**Returns:** `public boolean`

### isFullyCrouched

```java
public boolean isFullyCrouched()
```

**Returns:** `public boolean`

### setIsCrouching

```java
public void setIsCrouching(boolean p_28615_)
```

**Parameters:**

- `p_28615_` (`boolean`)

**Returns:** `public void`

### isCrouching

```java
public boolean isCrouching()
```

**Returns:** `boolean`

### setIsInterested

```java
public void setIsInterested(boolean p_28617_)
```

**Parameters:**

- `p_28617_` (`boolean`)

**Returns:** `public void`

### isInterested

```java
public boolean isInterested()
```

**Returns:** `public boolean`

### getHeadRollAngle

```java
public float getHeadRollAngle(float p_28621_)
```

**Parameters:**

- `p_28621_` (`float`)

**Returns:** `public float`

### getCrouchAmount

```java
public float getCrouchAmount(float p_28625_)
```

**Parameters:**

- `p_28625_` (`float`)

**Returns:** `public float`

### setTarget

```java
public void setTarget(LivingEntity p_28574_)
```

**Parameters:**

- `p_28574_` (`LivingEntity`)

### wakeUp

```java
void wakeUp()
```

### clearStates

```java
void clearStates()
```

### canMove

```java
boolean canMove()
```

**Returns:** `boolean`

### playAmbientSound

```java
public void playAmbientSound()
```

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_28548_)
```

**Parameters:**

- `p_28548_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### trusts

```java
boolean trusts(UUID p_28530_)
```

**Parameters:**

- `p_28530_` (`UUID`)

**Returns:** `boolean`

### dropAllDeathLoot

```java
protected void dropAllDeathLoot(ServerLevel p_348640_, DamageSource p_28536_)
```

**Parameters:**

- `p_348640_` (`ServerLevel`)
- `p_28536_` (`DamageSource`)

### dropEquipment

```java
protected void dropEquipment()
```

**Returns:** `protected void`

### isPathClear

```java
public static boolean isPathClear(Fox p_28472_, LivingEntity p_28473_)
```

**Parameters:**

- `p_28472_` (`Fox`)
- `p_28473_` (`LivingEntity`)

**Returns:** `public static boolean`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### DefendTrustedTargetGoal

```java
public DefendTrustedTargetGoal(Class<LivingEntity> p_28634_, boolean p_28635_, boolean p_28636_, Predicate<LivingEntity> p_28637_)
```

**Parameters:**

- `p_28634_` (`Class<LivingEntity>`)
- `p_28635_` (`boolean`)
- `p_28636_` (`boolean`)
- `p_28637_` (`Predicate<LivingEntity>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### FaceplantGoal

```java
public FaceplantGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### tick

```java
public void tick()
```

### test

```java
public boolean test(LivingEntity p_28653_)
```

**Parameters:**

- `p_28653_` (`LivingEntity`)

**Returns:** `public boolean`

### hasShelter

```java
protected boolean hasShelter()
```

**Returns:** `protected boolean`

### alertable

```java
protected boolean alertable()
```

**Returns:** `protected boolean`

### FoxBreedGoal

```java
public FoxBreedGoal(double p_28668_)
```

**Parameters:**

- `p_28668_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### start

```java
public void start()
```

### breed

```java
protected void breed()
```

### FoxEatBerriesGoal

```java
public FoxEatBerriesGoal(double p_28675_, int p_28676_, int p_28677_)
```

**Parameters:**

- `p_28675_` (`double`)
- `p_28676_` (`int`)
- `p_28677_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### acceptedDistance

```java
public double acceptedDistance()
```

**Returns:** `double`

### shouldRecalculatePath

```java
public boolean shouldRecalculatePath()
```

**Returns:** `boolean`

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_28680_, BlockPos p_28681_)
```

**Parameters:**

- `p_28680_` (`LevelReader`)
- `p_28681_` (`BlockPos`)

**Returns:** `boolean`

### tick

```java
public void tick()
```

### onReachedTarget

```java
protected void onReachedTarget()
```

**Returns:** `protected void`

### pickGlowBerry

```java
private void pickGlowBerry(BlockState p_148927_)
```

**Parameters:**

- `p_148927_` (`BlockState`)

**Returns:** `private void`

### pickSweetBerries

```java
private void pickSweetBerries(BlockState p_148929_)
```

**Parameters:**

- `p_148929_` (`BlockState`)

**Returns:** `private void`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### FoxFloatGoal

```java
public FoxFloatGoal()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### start

```java
public void start()
```

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### FoxFollowParentGoal

```java
public FoxFollowParentGoal(Fox p_28696_, double p_28697_)
```

**Parameters:**

- `p_28696_` (`Fox`)
- `p_28697_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### FoxGroupData

```java
public FoxGroupData(Fox.Type p_28703_)
```

**Parameters:**

- `p_28703_` (`Fox.Type`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FoxLookAtPlayerGoal

```java
public FoxLookAtPlayerGoal(Mob p_28707_, Class<? extends LivingEntity> p_28708_, float p_28709_)
```

**Parameters:**

- `p_28707_` (`Mob`)
- `p_28708_` (`Class<? extends LivingEntity>`)
- `p_28709_` (`float`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### FoxLookControl

```java
public FoxLookControl()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### resetXRotOnTick

```java
protected boolean resetXRotOnTick()
```

**Returns:** `boolean`

### FoxMeleeAttackGoal

```java
public FoxMeleeAttackGoal(double p_28720_, boolean p_28721_)
```

**Parameters:**

- `p_28720_` (`double`)
- `p_28721_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### checkAndPerformAttack

```java
protected void checkAndPerformAttack(LivingEntity p_28724_)
```

**Parameters:**

- `p_28724_` (`LivingEntity`)

### start

```java
public void start()
```

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### FoxMoveControl

```java
public FoxMoveControl()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### FoxPanicGoal

```java
public FoxPanicGoal(double p_28734_)
```

**Parameters:**

- `p_28734_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### shouldPanic

```java
public boolean shouldPanic()
```

**Returns:** `boolean`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### isInterruptable

```java
public boolean isInterruptable()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### tick

```java
public void tick()
```

### FoxSearchForItemsGoal

```java
public FoxSearchForItemsGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### start

```java
public void start()
```

### FoxStrollThroughVillageGoal

```java
public FoxStrollThroughVillageGoal(int p_28754_, int p_28755_)
```

**Parameters:**

- `p_28754_` (`int`)
- `p_28755_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### start

```java
public void start()
```

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### canFoxMove

```java
private boolean canFoxMove()
```

**Returns:** `private boolean`

### PerchAndSearchGoal

```java
public PerchAndSearchGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### tick

```java
public void tick()
```

### resetLook

```java
private void resetLook()
```

**Returns:** `private void`

### SeekShelterGoal

```java
public SeekShelterGoal(double p_28777_)
```

**Parameters:**

- `p_28777_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### SleepGoal

```java
public SleepGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### canSleep

```java
private boolean canSleep()
```

**Returns:** `private boolean`

### stop

```java
public void stop()
```

### start

```java
public void start()
```

### StalkPreyGoal

```java
public StalkPreyGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### tick

```java
public void tick()
```

### SNOW

```java
, SNOW()
```

**Returns:** `,`

### Type

```java
private Type(int p_196658_, String p_196659_)
```

**Parameters:**

- `p_196658_` (`int`)
- `p_196659_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getId

```java
public int getId()
```

**Returns:** `public int`

### byName

```java
public static Fox.Type byName(String p_28817_)
```

**Parameters:**

- `p_28817_` (`String`)

**Returns:** `public static Fox.Type`

### byId

```java
public static Fox.Type byId(int p_28813_)
```

**Parameters:**

- `p_28813_` (`int`)

**Returns:** `public static Fox.Type`

### byBiome

```java
public static Fox.Type byBiome(Holder<Biome> p_204063_)
```

**Parameters:**

- `p_204063_` (`Holder<Biome>`)

**Returns:** `public static Fox.Type`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FoxAlertableEntitiesSelector` | class |  |
| `FoxEatBerriesGoal` | class |  |
| `FoxGroupData` | class |  |
| `FoxLookControl` | class |  |
| `FoxPounceGoal` | class |  |
| `Type` | enum |  |
