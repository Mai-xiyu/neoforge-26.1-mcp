# Guardian

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ATTACK_TIME` | `int` |  |

## Methods

### Guardian

```java
public Guardian(EntityType<? extends Guardian> p_32810_, Level p_32811_)
```

**Parameters:**

- `p_32810_` (`EntityType<? extends Guardian>`)
- `p_32811_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_32846_)
```

**Parameters:**

- `p_32846_` (`Level`)

**Returns:** `PathNavigation`

### WaterBoundPathNavigation

```java
return new WaterBoundPathNavigation()
```

**Returns:** `return new`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326415_)
```

**Parameters:**

- `p_326415_` (`SynchedEntityData.Builder`)

### isMoving

```java
public boolean isMoving()
```

**Returns:** `public boolean`

### setMoving

```java
void setMoving(boolean p_32862_)
```

**Parameters:**

- `p_32862_` (`boolean`)

### getAttackDuration

```java
public int getAttackDuration()
```

**Returns:** `public int`

### setActiveAttackTarget

```java
void setActiveAttackTarget(int p_32818_)
```

**Parameters:**

- `p_32818_` (`int`)

### hasActiveAttackTarget

```java
public boolean hasActiveAttackTarget()
```

**Returns:** `public boolean`

### getActiveAttackTarget

```java
public LivingEntity getActiveAttackTarget()
```

**Returns:** `LivingEntity`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_32834_)
```

**Parameters:**

- `p_32834_` (`EntityDataAccessor<?>`)

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

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32852_)
```

**Parameters:**

- `p_32852_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_32831_, LevelReader p_32832_)
```

**Parameters:**

- `p_32831_` (`BlockPos`)
- `p_32832_` (`LevelReader`)

**Returns:** `float`

### aiStep

```java
public void aiStep()
```

### getFlopSound

```java
protected SoundEvent getFlopSound()
```

**Returns:** `protected SoundEvent`

### getTailAnimation

```java
public float getTailAnimation(float p_32864_)
```

**Parameters:**

- `p_32864_` (`float`)

**Returns:** `public float`

### getSpikesAnimation

```java
public float getSpikesAnimation(float p_32866_)
```

**Parameters:**

- `p_32866_` (`float`)

**Returns:** `public float`

### getAttackAnimationScale

```java
public float getAttackAnimationScale(float p_32813_)
```

**Parameters:**

- `p_32813_` (`float`)

**Returns:** `public float`

### getClientSideAttackTime

```java
public float getClientSideAttackTime()
```

**Returns:** `public float`

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_32829_)
```

**Parameters:**

- `p_32829_` (`LevelReader`)

**Returns:** `boolean`

### checkGuardianSpawnRules

```java
public static boolean checkGuardianSpawnRules(EntityType<? extends Guardian> p_218991_, LevelAccessor p_218992_, MobSpawnType p_218993_, BlockPos p_218994_, RandomSource p_218995_)
```

**Parameters:**

- `p_218991_` (`EntityType<? extends Guardian>`)
- `p_218992_` (`LevelAccessor`)
- `p_218993_` (`MobSpawnType`)
- `p_218994_` (`BlockPos`)
- `p_218995_` (`RandomSource`)

**Returns:** `public static boolean`

### hurt

```java
public boolean hurt(DamageSource p_32820_, float p_32821_)
```

**Parameters:**

- `p_32820_` (`DamageSource`)
- `p_32821_` (`float`)

**Returns:** `boolean`

### getMaxHeadXRot

```java
public int getMaxHeadXRot()
```

**Returns:** `int`

### travel

```java
public void travel(Vec3 p_32858_)
```

**Parameters:**

- `p_32858_` (`Vec3`)

### GuardianAttackGoal

```java
public GuardianAttackGoal(Guardian p_32871_)
```

**Parameters:**

- `p_32871_` (`Guardian`)

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

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### GuardianAttackSelector

```java
public GuardianAttackSelector(Guardian p_32879_)
```

**Parameters:**

- `p_32879_` (`Guardian`)

**Returns:** `public`

### test

```java
public boolean test(LivingEntity p_32881_)
```

**Parameters:**

- `p_32881_` (`LivingEntity`)

**Returns:** `public boolean`

### GuardianMoveControl

```java
public GuardianMoveControl(Guardian p_32886_)
```

**Parameters:**

- `p_32886_` (`Guardian`)

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
