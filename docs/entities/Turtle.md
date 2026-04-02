# Turtle

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BABY_ON_LAND_SELECTOR` | `Predicate<LivingEntity>` |  |

## Methods

### Turtle

```java
public Turtle(EntityType<? extends Turtle> p_30132_, Level p_30133_)
```

**Parameters:**

- `p_30132_` (`EntityType<? extends Turtle>`)
- `p_30133_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setHomePos

```java
public void setHomePos(BlockPos p_30220_)
```

**Parameters:**

- `p_30220_` (`BlockPos`)

**Returns:** `public void`

### getHomePos

```java
BlockPos getHomePos()
```

**Returns:** `BlockPos`

### setTravelPos

```java
void setTravelPos(BlockPos p_30224_)
```

**Parameters:**

- `p_30224_` (`BlockPos`)

### getTravelPos

```java
BlockPos getTravelPos()
```

**Returns:** `BlockPos`

### hasEgg

```java
public boolean hasEgg()
```

**Returns:** `public boolean`

### setHasEgg

```java
void setHasEgg(boolean p_30235_)
```

**Parameters:**

- `p_30235_` (`boolean`)

### isLayingEgg

```java
public boolean isLayingEgg()
```

**Returns:** `public boolean`

### setLayingEgg

```java
void setLayingEgg(boolean p_30237_)
```

**Parameters:**

- `p_30237_` (`boolean`)

### isGoingHome

```java
boolean isGoingHome()
```

**Returns:** `boolean`

### setGoingHome

```java
void setGoingHome(boolean p_30239_)
```

**Parameters:**

- `p_30239_` (`boolean`)

### isTravelling

```java
boolean isTravelling()
```

**Returns:** `boolean`

### setTravelling

```java
void setTravelling(boolean p_30241_)
```

**Parameters:**

- `p_30241_` (`boolean`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326064_)
```

**Parameters:**

- `p_326064_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30176_)
```

**Parameters:**

- `p_30176_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30162_)
```

**Parameters:**

- `p_30162_` (`CompoundTag`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_30153_, DifficultyInstance p_30154_, MobSpawnType p_30155_, SpawnGroupData p_30156_)
```

**Parameters:**

- `p_30153_` (`ServerLevelAccessor`)
- `p_30154_` (`DifficultyInstance`)
- `p_30155_` (`MobSpawnType`)
- `p_30156_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### checkTurtleSpawnRules

```java
public static boolean checkTurtleSpawnRules(EntityType<Turtle> p_218277_, LevelAccessor p_218278_, MobSpawnType p_218279_, BlockPos p_218280_, RandomSource p_218281_)
```

**Parameters:**

- `p_218277_` (`EntityType<Turtle>`)
- `p_218278_` (`LevelAccessor`)
- `p_218279_` (`MobSpawnType`)
- `p_218280_` (`BlockPos`)
- `p_218281_` (`RandomSource`)

**Returns:** `public static boolean`

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### isPushedByFluid

```java
public boolean isPushedByFluid()
```

**Returns:** `boolean`

### getAmbientSoundInterval

```java
public int getAmbientSoundInterval()
```

**Returns:** `int`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### playSwimSound

```java
protected void playSwimSound(float p_30192_)
```

**Parameters:**

- `p_30192_` (`float`)

### getSwimSound

```java
protected SoundEvent getSwimSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_30202_)
```

**Parameters:**

- `p_30202_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_30173_, BlockState p_30174_)
```

**Parameters:**

- `p_30173_` (`BlockPos`)
- `p_30174_` (`BlockState`)

### canFallInLove

```java
public boolean canFallInLove()
```

**Returns:** `boolean`

### nextStep

```java
protected float nextStep()
```

**Returns:** `float`

### getAgeScale

```java
public float getAgeScale()
```

**Returns:** `float`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_30171_)
```

**Parameters:**

- `p_30171_` (`Level`)

**Returns:** `PathNavigation`

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149068_, AgeableMob p_149069_)
```

**Parameters:**

- `p_149068_` (`ServerLevel`)
- `p_149069_` (`AgeableMob`)

**Returns:** `AgeableMob`

### isFood

```java
public boolean isFood(ItemStack p_30231_)
```

**Parameters:**

- `p_30231_` (`ItemStack`)

**Returns:** `boolean`

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_30159_, LevelReader p_30160_)
```

**Parameters:**

- `p_30159_` (`BlockPos`)
- `p_30160_` (`LevelReader`)

**Returns:** `float`

### aiStep

```java
public void aiStep()
```

### ageBoundaryReached

```java
protected void ageBoundaryReached()
```

### travel

```java
public void travel(Vec3 p_30218_)
```

**Parameters:**

- `p_30218_` (`Vec3`)

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### thunderHit

```java
public void thunderHit(ServerLevel p_30140_, LightningBolt p_30141_)
```

**Parameters:**

- `p_30140_` (`ServerLevel`)
- `p_30141_` (`LightningBolt`)

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316685_)
```

**Parameters:**

- `p_316685_` (`Pose`)

**Returns:** `EntityDimensions`

### TurtleBreedGoal

```java
 TurtleBreedGoal(Turtle p_30244_, double p_30245_)
```

**Parameters:**

- `p_30244_` (`Turtle`)
- `p_30245_` (`double`)

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

### breed

```java
protected void breed()
```

### TurtleGoHomeGoal

```java
 TurtleGoHomeGoal(Turtle p_30253_, double p_30254_)
```

**Parameters:**

- `p_30253_` (`Turtle`)
- `p_30254_` (`double`)

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

### stop

```java
public void stop()
```

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### TurtleGoToWaterGoal

```java
 TurtleGoToWaterGoal(Turtle p_30262_, double p_30263_)
```

**Parameters:**

- `p_30262_` (`Turtle`)
- `p_30263_` (`double`)

**Returns:** ``

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### shouldRecalculatePath

```java
public boolean shouldRecalculatePath()
```

**Returns:** `boolean`

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_30270_, BlockPos p_30271_)
```

**Parameters:**

- `p_30270_` (`LevelReader`)
- `p_30271_` (`BlockPos`)

**Returns:** `boolean`

### TurtleLayEggGoal

```java
 TurtleLayEggGoal(Turtle p_30276_, double p_30277_)
```

**Parameters:**

- `p_30276_` (`Turtle`)
- `p_30277_` (`double`)

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

### tick

```java
public void tick()
```

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_30280_, BlockPos p_30281_)
```

**Parameters:**

- `p_30280_` (`LevelReader`)
- `p_30281_` (`BlockPos`)

**Returns:** `boolean`

### TurtleMoveControl

```java
 TurtleMoveControl(Turtle p_30286_)
```

**Parameters:**

- `p_30286_` (`Turtle`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### updateSpeed

```java
private void updateSpeed()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

### TurtlePanicGoal

```java
 TurtlePanicGoal(Turtle p_30290_, double p_30291_)
```

**Parameters:**

- `p_30290_` (`Turtle`)
- `p_30291_` (`double`)

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

### TurtlePathNavigation

```java
 TurtlePathNavigation(Turtle p_30294_, Level p_30295_)
```

**Parameters:**

- `p_30294_` (`Turtle`)
- `p_30295_` (`Level`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### isStableDestination

```java
public boolean isStableDestination(BlockPos p_30300_)
```

**Parameters:**

- `p_30300_` (`BlockPos`)

**Returns:** `boolean`

### TurtleRandomStrollGoal

```java
 TurtleRandomStrollGoal(Turtle p_30303_, double p_30304_, int p_30305_)
```

**Parameters:**

- `p_30303_` (`Turtle`)
- `p_30304_` (`double`)
- `p_30305_` (`int`)

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

### TurtleTravelGoal

```java
 TurtleTravelGoal(Turtle p_30333_, double p_30334_)
```

**Parameters:**

- `p_30333_` (`Turtle`)
- `p_30334_` (`double`)

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

### tick

```java
public void tick()
```

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### stop

```java
public void stop()
```
