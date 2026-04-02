# Silverfish

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`

## Methods

### Silverfish

```java
public Silverfish(EntityType<? extends Silverfish> p_33523_, Level p_33524_)
```

**Parameters:**

- `p_33523_` (`EntityType<? extends Silverfish>`)
- `p_33524_` (`Level`)

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

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33549_)
```

**Parameters:**

- `p_33549_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_33543_, BlockState p_33544_)
```

**Parameters:**

- `p_33543_` (`BlockPos`)
- `p_33544_` (`BlockState`)

### hurt

```java
public boolean hurt(DamageSource p_33527_, float p_33528_)
```

**Parameters:**

- `p_33527_` (`DamageSource`)
- `p_33528_` (`float`)

**Returns:** `boolean`

### tick

```java
public void tick()
```

### setYBodyRot

```java
public void setYBodyRot(float p_33553_)
```

**Parameters:**

- `p_33553_` (`float`)

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_33530_, LevelReader p_33531_)
```

**Parameters:**

- `p_33530_` (`BlockPos`)
- `p_33531_` (`LevelReader`)

**Returns:** `float`

### checkSilverfishSpawnRules

```java
public static boolean checkSilverfishSpawnRules(EntityType<Silverfish> p_219077_, LevelAccessor p_219078_, MobSpawnType p_219079_, BlockPos p_219080_, RandomSource p_219081_)
```

**Parameters:**

- `p_219077_` (`EntityType<Silverfish>`)
- `p_219078_` (`LevelAccessor`)
- `p_219079_` (`MobSpawnType`)
- `p_219080_` (`BlockPos`)
- `p_219081_` (`RandomSource`)

**Returns:** `public static boolean`

### SilverfishMergeWithStoneGoal

```java
public SilverfishMergeWithStoneGoal(Silverfish p_33558_)
```

**Parameters:**

- `p_33558_` (`Silverfish`)

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

### SilverfishWakeUpFriendsGoal

```java
public SilverfishWakeUpFriendsGoal(Silverfish p_33565_)
```

**Parameters:**

- `p_33565_` (`Silverfish`)

**Returns:** `public`

### notifyHurt

```java
public void notifyHurt()
```

**Returns:** `public void`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```
