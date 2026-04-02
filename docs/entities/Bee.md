# Bee

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`
**Implements:** `NeutralMob`, `FlyingAnimal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLAP_DEGREES_PER_TICK` | `float` |  |
| `TICKS_PER_FLAP` | `int` |  |
| `TAG_CROPS_GROWN_SINCE_POLLINATION` | `String` |  |
| `TAG_CANNOT_ENTER_HIVE_TICKS` | `String` |  |
| `TAG_TICKS_SINCE_POLLINATION` | `String` |  |
| `TAG_HAS_STUNG` | `String` |  |
| `TAG_HAS_NECTAR` | `String` |  |
| `TAG_FLOWER_POS` | `String` |  |
| `TAG_HIVE_POS` | `String` |  |

## Methods

### Bee

```java
public Bee(EntityType<? extends Bee> p_27717_, Level p_27718_)
```

**Parameters:**

- `p_27717_` (`EntityType<? extends Bee>`)
- `p_27718_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326248_)
```

**Parameters:**

- `p_326248_` (`SynchedEntityData.Builder`)

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_27788_, LevelReader p_27789_)
```

**Parameters:**

- `p_27788_` (`BlockPos`)
- `p_27789_` (`LevelReader`)

**Returns:** `float`

### registerGoals

```java
protected void registerGoals()
```

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_27823_)
```

**Parameters:**

- `p_27823_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_27793_)
```

**Parameters:**

- `p_27793_` (`CompoundTag`)

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_27722_)
```

**Parameters:**

- `p_27722_` (`Entity`)

**Returns:** `boolean`

### tick

```java
public void tick()
```

### spawnFluidParticle

```java
private void spawnFluidParticle(Level p_27780_, double p_27781_, double p_27782_, double p_27783_, double p_27784_, double p_27785_, ParticleOptions p_27786_)
```

**Parameters:**

- `p_27780_` (`Level`)
- `p_27781_` (`double`)
- `p_27782_` (`double`)
- `p_27783_` (`double`)
- `p_27784_` (`double`)
- `p_27785_` (`double`)
- `p_27786_` (`ParticleOptions`)

**Returns:** `private void`

### pathfindRandomlyTowards

```java
void pathfindRandomlyTowards(BlockPos p_27881_)
```

**Parameters:**

- `p_27881_` (`BlockPos`)

### getSavedFlowerPos

```java
public BlockPos getSavedFlowerPos()
```

**Returns:** `BlockPos`

### hasSavedFlowerPos

```java
public boolean hasSavedFlowerPos()
```

**Returns:** `public boolean`

### setSavedFlowerPos

```java
public void setSavedFlowerPos(BlockPos p_27877_)
```

**Parameters:**

- `p_27877_` (`BlockPos`)

**Returns:** `public void`

### getTravellingTicks

```java
public int getTravellingTicks()
```

**Returns:** `int`

### getBlacklistedHives

```java
public List<BlockPos> getBlacklistedHives()
```

**Returns:** `List<BlockPos>`

### isTiredOfLookingForNectar

```java
private boolean isTiredOfLookingForNectar()
```

**Returns:** `private boolean`

### wantsToEnterHive

```java
boolean wantsToEnterHive()
```

**Returns:** `boolean`

### setStayOutOfHiveCountdown

```java
public void setStayOutOfHiveCountdown(int p_27916_)
```

**Parameters:**

- `p_27916_` (`int`)

**Returns:** `public void`

### getRollAmount

```java
public float getRollAmount(float p_27936_)
```

**Parameters:**

- `p_27936_` (`float`)

**Returns:** `public float`

### updateRollAmount

```java
private void updateRollAmount()
```

**Returns:** `private void`

### customServerAiStep

```java
protected void customServerAiStep()
```

### resetTicksWithoutNectarSinceExitingHive

```java
public void resetTicksWithoutNectarSinceExitingHive()
```

**Returns:** `public void`

### isHiveNearFire

```java
private boolean isHiveNearFire()
```

**Returns:** `private boolean`

### getRemainingPersistentAngerTime

```java
public int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### setRemainingPersistentAngerTime

```java
public void setRemainingPersistentAngerTime(int p_27795_)
```

**Parameters:**

- `p_27795_` (`int`)

### getPersistentAngerTarget

```java
public UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### setPersistentAngerTarget

```java
public void setPersistentAngerTarget(UUID p_27791_)
```

**Parameters:**

- `p_27791_` (`UUID`)

### startPersistentAngerTimer

```java
public void startPersistentAngerTimer()
```

### doesHiveHaveSpace

```java
private boolean doesHiveHaveSpace(BlockPos p_27885_)
```

**Parameters:**

- `p_27885_` (`BlockPos`)

**Returns:** `private boolean`

### hasHive

```java
public boolean hasHive()
```

**Returns:** `boolean`

### getHivePos

```java
public BlockPos getHivePos()
```

**Returns:** `BlockPos`

### getGoalSelector

```java
public GoalSelector getGoalSelector()
```

**Returns:** `GoalSelector`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### getCropsGrownSincePollination

```java
int getCropsGrownSincePollination()
```

**Returns:** `int`

### resetNumCropsGrownSincePollination

```java
private void resetNumCropsGrownSincePollination()
```

**Returns:** `private void`

### incrementNumCropsGrownSincePollination

```java
void incrementNumCropsGrownSincePollination()
```

### aiStep

```java
public void aiStep()
```

### isHiveValid

```java
boolean isHiveValid()
```

**Returns:** `boolean`

### hasNectar

```java
public boolean hasNectar()
```

**Returns:** `public boolean`

### setHasNectar

```java
void setHasNectar(boolean p_27920_)
```

**Parameters:**

- `p_27920_` (`boolean`)

### hasStung

```java
public boolean hasStung()
```

**Returns:** `public boolean`

### setHasStung

```java
private void setHasStung(boolean p_27926_)
```

**Parameters:**

- `p_27926_` (`boolean`)

**Returns:** `private void`

### isRolling

```java
private boolean isRolling()
```

**Returns:** `private boolean`

### setRolling

```java
private void setRolling(boolean p_27930_)
```

**Parameters:**

- `p_27930_` (`boolean`)

**Returns:** `private void`

### isTooFarAway

```java
boolean isTooFarAway(BlockPos p_27890_)
```

**Parameters:**

- `p_27890_` (`BlockPos`)

**Returns:** `boolean`

### setFlag

```java
private void setFlag(int p_27833_, boolean p_27834_)
```

**Parameters:**

- `p_27833_` (`int`)
- `p_27834_` (`boolean`)

**Returns:** `private void`

### getFlag

```java
private boolean getFlag(int p_27922_)
```

**Parameters:**

- `p_27922_` (`int`)

**Returns:** `private boolean`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_27815_)
```

**Parameters:**

- `p_27815_` (`Level`)

**Returns:** `PathNavigation`

### isStableDestination

```java
public boolean isStableDestination(BlockPos p_27947_)
```

**Parameters:**

- `p_27947_` (`BlockPos`)

**Returns:** `boolean`

### tick

```java
public void tick()
```

### isFood

```java
public boolean isFood(ItemStack p_27895_)
```

**Parameters:**

- `p_27895_` (`ItemStack`)

**Returns:** `boolean`

### isFlowerValid

```java
boolean isFlowerValid(BlockPos p_27897_)
```

**Parameters:**

- `p_27897_` (`BlockPos`)

**Returns:** `boolean`

### playStepSound

```java
protected void playStepSound(BlockPos p_27820_, BlockState p_27821_)
```

**Parameters:**

- `p_27820_` (`BlockPos`)
- `p_27821_` (`BlockState`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_27845_)
```

**Parameters:**

- `p_27845_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### getBreedOffspring

```java
public Bee getBreedOffspring(ServerLevel p_148760_, AgeableMob p_148761_)
```

**Parameters:**

- `p_148760_` (`ServerLevel`)
- `p_148761_` (`AgeableMob`)

**Returns:** `Bee`

### checkFallDamage

```java
protected void checkFallDamage(double p_27754_, boolean p_27755_, BlockState p_27756_, BlockPos p_27757_)
```

**Parameters:**

- `p_27754_` (`double`)
- `p_27755_` (`boolean`)
- `p_27756_` (`BlockState`)
- `p_27757_` (`BlockPos`)

### isFlapping

```java
public boolean isFlapping()
```

**Returns:** `boolean`

### isFlying

```java
public boolean isFlying()
```

**Returns:** `boolean`

### dropOffNectar

```java
public void dropOffNectar()
```

**Returns:** `public void`

### hurt

```java
public boolean hurt(DamageSource p_27762_, float p_27763_)
```

**Parameters:**

- `p_27762_` (`DamageSource`)
- `p_27763_` (`float`)

**Returns:** `boolean`

### jumpInLiquid ⚠️ *Deprecated*

```java
use jumpInFluid instead
    protected void jumpInLiquid(TagKey<Fluid> p_204061_)
```

**Parameters:**

- `p_204061_` (`TagKey<Fluid>`)

**Returns:** `use jumpInFluid instead
    protected void`

### jumpInLiquidInternal

```java
private void jumpInLiquidInternal()
```

**Returns:** `private void`

### jumpInFluid

```java
public void jumpInFluid(net.neoforged.neoforge.fluids.FluidType type)
```

**Parameters:**

- `type` (`net.neoforged.neoforge.fluids.FluidType`)

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### closerThan

```java
boolean closerThan(BlockPos p_27817_, int p_27818_)
```

**Parameters:**

- `p_27817_` (`BlockPos`)
- `p_27818_` (`int`)

**Returns:** `boolean`

### setHivePos

```java
public void setHivePos(BlockPos p_330297_)
```

**Parameters:**

- `p_330297_` (`BlockPos`)

**Returns:** `public void`

### canBeeUse

```java
public abstract boolean canBeeUse()
```

**Returns:** `public abstract boolean`

### canBeeContinueToUse

```java
public abstract boolean canBeeContinueToUse()
```

**Returns:** `public abstract boolean`

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

### BeeAttackGoal

```java
 BeeAttackGoal(PathfinderMob p_27960_, double p_27961_, boolean p_27962_)
```

**Parameters:**

- `p_27960_` (`PathfinderMob`)
- `p_27961_` (`double`)
- `p_27962_` (`boolean`)

**Returns:** ``

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

### BeeBecomeAngryTargetGoal

```java
 BeeBecomeAngryTargetGoal(Bee p_27966_)
```

**Parameters:**

- `p_27966_` (`Bee`)

**Returns:** ``

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

### beeCanTarget

```java
private boolean beeCanTarget()
```

**Returns:** `private boolean`

### canBeeUse

```java
public boolean canBeeUse()
```

**Returns:** `boolean`

### canBeeContinueToUse

```java
public boolean canBeeContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### BeeGoToHiveGoal

```java
 BeeGoToHiveGoal()
```

**Returns:** ``

### canBeeUse

```java
public boolean canBeeUse()
```

**Returns:** `boolean`

### canBeeContinueToUse

```java
public boolean canBeeContinueToUse()
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

### pathfindDirectlyTowards

```java
private boolean pathfindDirectlyTowards(BlockPos p_27991_)
```

**Parameters:**

- `p_27991_` (`BlockPos`)

**Returns:** `private boolean`

### isTargetBlacklisted

```java
boolean isTargetBlacklisted(BlockPos p_27994_)
```

**Parameters:**

- `p_27994_` (`BlockPos`)

**Returns:** `boolean`

### blacklistTarget

```java
private void blacklistTarget(BlockPos p_27999_)
```

**Parameters:**

- `p_27999_` (`BlockPos`)

**Returns:** `private void`

### clearBlacklist

```java
void clearBlacklist()
```

### dropAndBlacklistHive

```java
private void dropAndBlacklistHive()
```

**Returns:** `private void`

### dropHive

```java
private void dropHive()
```

**Returns:** `private void`

### hasReachedTarget

```java
private boolean hasReachedTarget(BlockPos p_28002_)
```

**Parameters:**

- `p_28002_` (`BlockPos`)

**Returns:** `private boolean`

### BeeGoToKnownFlowerGoal

```java
 BeeGoToKnownFlowerGoal()
```

**Returns:** ``

### canBeeUse

```java
public boolean canBeeUse()
```

**Returns:** `boolean`

### canBeeContinueToUse

```java
public boolean canBeeContinueToUse()
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

### wantsToGoToKnownFlower

```java
private boolean wantsToGoToKnownFlower()
```

**Returns:** `private boolean`

### canBeeUse

```java
public boolean canBeeUse()
```

**Returns:** `boolean`

### canBeeContinueToUse

```java
public boolean canBeeContinueToUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### BeeHurtByOtherGoal

```java
 BeeHurtByOtherGoal(Bee p_28033_)
```

**Parameters:**

- `p_28033_` (`Bee`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### alertOther

```java
protected void alertOther(Mob p_28035_, LivingEntity p_28036_)
```

**Parameters:**

- `p_28035_` (`Mob`)
- `p_28036_` (`LivingEntity`)

### canBeeUse

```java
public boolean canBeeUse()
```

**Returns:** `boolean`

### canBeeContinueToUse

```java
public boolean canBeeContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### findNearbyHivesWithSpace

```java
private List<BlockPos> findNearbyHivesWithSpace()
```

**Returns:** `private List<BlockPos>`

### BeeLookControl

```java
 BeeLookControl(Mob p_28059_)
```

**Parameters:**

- `p_28059_` (`Mob`)

**Returns:** ``

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

### BeePollinateGoal

```java
 BeePollinateGoal()
```

**Returns:** ``

### canBeeUse

```java
public boolean canBeeUse()
```

**Returns:** `boolean`

### canBeeContinueToUse

```java
public boolean canBeeContinueToUse()
```

**Returns:** `boolean`

### hasPollinatedLongEnough

```java
private boolean hasPollinatedLongEnough()
```

**Returns:** `private boolean`

### isPollinating

```java
boolean isPollinating()
```

**Returns:** `boolean`

### stopPollinating

```java
void stopPollinating()
```

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### setWantedPos

```java
private void setWantedPos()
```

**Returns:** `private void`

### getOffset

```java
private float getOffset()
```

**Returns:** `private float`

### findNearbyFlower

```java
private Optional<BlockPos> findNearbyFlower()
```

**Returns:** `private Optional<BlockPos>`

### findNearestBlock

```java
private Optional<BlockPos> findNearestBlock(Predicate<BlockState> p_28076_, double p_28077_)
```

**Parameters:**

- `p_28076_` (`Predicate<BlockState>`)
- `p_28077_` (`double`)

**Returns:** `private Optional<BlockPos>`

### BeeWanderGoal

```java
 BeeWanderGoal()
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

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BeeGoToHiveGoal` | class |  |
| `BeeGoToKnownFlowerGoal` | class |  |
