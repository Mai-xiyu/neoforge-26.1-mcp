# PolarBear

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`
**Implements:** `NeutralMob`

## Methods

### PolarBear

```java
public PolarBear(EntityType<? extends PolarBear> p_29519_, Level p_29520_)
```

**Parameters:**

- `p_29519_` (`EntityType<? extends PolarBear>`)
- `p_29520_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149005_, AgeableMob p_149006_)
```

**Parameters:**

- `p_149005_` (`ServerLevel`)
- `p_149006_` (`AgeableMob`)

**Returns:** `AgeableMob`

### isFood

```java
public boolean isFood(ItemStack p_29565_)
```

**Parameters:**

- `p_29565_` (`ItemStack`)

**Returns:** `boolean`

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### checkPolarBearSpawnRules

```java
public static boolean checkPolarBearSpawnRules(EntityType<PolarBear> p_218250_, LevelAccessor p_218251_, MobSpawnType p_218252_, BlockPos p_218253_, RandomSource p_218254_)
```

**Parameters:**

- `p_218250_` (`EntityType<PolarBear>`)
- `p_218251_` (`LevelAccessor`)
- `p_218252_` (`MobSpawnType`)
- `p_218253_` (`BlockPos`)
- `p_218254_` (`RandomSource`)

**Returns:** `public static boolean`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29541_)
```

**Parameters:**

- `p_29541_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29548_)
```

**Parameters:**

- `p_29548_` (`CompoundTag`)

### startPersistentAngerTimer

```java
public void startPersistentAngerTimer()
```

### setRemainingPersistentAngerTime

```java
public void setRemainingPersistentAngerTime(int p_29543_)
```

**Parameters:**

- `p_29543_` (`int`)

### getRemainingPersistentAngerTime

```java
public int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### setPersistentAngerTarget

```java
public void setPersistentAngerTarget(UUID p_29539_)
```

**Parameters:**

- `p_29539_` (`UUID`)

### getPersistentAngerTarget

```java
public UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29559_)
```

**Parameters:**

- `p_29559_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_29545_, BlockState p_29546_)
```

**Parameters:**

- `p_29545_` (`BlockPos`)
- `p_29546_` (`BlockState`)

### playWarningSound

```java
protected void playWarningSound()
```

**Returns:** `protected void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326229_)
```

**Parameters:**

- `p_326229_` (`SynchedEntityData.Builder`)

### tick

```java
public void tick()
```

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316644_)
```

**Parameters:**

- `p_316644_` (`Pose`)

**Returns:** `EntityDimensions`

### isStanding

```java
public boolean isStanding()
```

**Returns:** `public boolean`

### setStanding

```java
public void setStanding(boolean p_29568_)
```

**Parameters:**

- `p_29568_` (`boolean`)

**Returns:** `public void`

### getStandingAnimationScale

```java
public float getStandingAnimationScale(float p_29570_)
```

**Parameters:**

- `p_29570_` (`float`)

**Returns:** `public float`

### getWaterSlowDown

```java
protected float getWaterSlowDown()
```

**Returns:** `float`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_29533_, DifficultyInstance p_29534_, MobSpawnType p_29535_, SpawnGroupData p_29536_)
```

**Parameters:**

- `p_29533_` (`ServerLevelAccessor`)
- `p_29534_` (`DifficultyInstance`)
- `p_29535_` (`MobSpawnType`)
- `p_29536_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### PolarBearAttackPlayersGoal

```java
public PolarBearAttackPlayersGoal()
```

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

### getFollowDistance

```java
protected double getFollowDistance()
```

**Returns:** `double`

### PolarBearHurtByTargetGoal

```java
public PolarBearHurtByTargetGoal()
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

### alertOther

```java
protected void alertOther(Mob p_29580_, LivingEntity p_29581_)
```

**Parameters:**

- `p_29580_` (`Mob`)
- `p_29581_` (`LivingEntity`)

### PolarBearMeleeAttackGoal

```java
public PolarBearMeleeAttackGoal()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### checkAndPerformAttack

```java
protected void checkAndPerformAttack(LivingEntity p_29589_)
```

**Parameters:**

- `p_29589_` (`LivingEntity`)

### stop

```java
public void stop()
```
