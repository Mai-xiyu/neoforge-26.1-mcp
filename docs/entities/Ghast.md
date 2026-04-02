# Ghast

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `FlyingMob`
**Implements:** `Enemy`

## Methods

### Ghast

```java
public Ghast(EntityType<? extends Ghast> p_32725_, Level p_32726_)
```

**Parameters:**

- `p_32725_` (`EntityType<? extends Ghast>`)
- `p_32726_` (`Level`)

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

### isCharging

```java
public boolean isCharging()
```

**Returns:** `public boolean`

### setCharging

```java
public void setCharging(boolean p_32759_)
```

**Parameters:**

- `p_32759_` (`boolean`)

**Returns:** `public void`

### getExplosionPower

```java
public int getExplosionPower()
```

**Returns:** `public int`

### shouldDespawnInPeaceful

```java
protected boolean shouldDespawnInPeaceful()
```

**Returns:** `boolean`

### isReflectedFireball

```java
private static boolean isReflectedFireball(DamageSource p_238408_)
```

**Parameters:**

- `p_238408_` (`DamageSource`)

**Returns:** `private static boolean`

### isInvulnerableTo

```java
public boolean isInvulnerableTo(DamageSource p_238289_)
```

**Parameters:**

- `p_238289_` (`DamageSource`)

**Returns:** `boolean`

### hurt

```java
public boolean hurt(DamageSource p_32730_, float p_32731_)
```

**Parameters:**

- `p_32730_` (`DamageSource`)
- `p_32731_` (`float`)

**Returns:** `boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326063_)
```

**Parameters:**

- `p_326063_` (`SynchedEntityData.Builder`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32750_)
```

**Parameters:**

- `p_32750_` (`DamageSource`)

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

### checkGhastSpawnRules

```java
public static boolean checkGhastSpawnRules(EntityType<Ghast> p_218985_, LevelAccessor p_218986_, MobSpawnType p_218987_, BlockPos p_218988_, RandomSource p_218989_)
```

**Parameters:**

- `p_218985_` (`EntityType<Ghast>`)
- `p_218986_` (`LevelAccessor`)
- `p_218987_` (`MobSpawnType`)
- `p_218988_` (`BlockPos`)
- `p_218989_` (`RandomSource`)

**Returns:** `public static boolean`

### getMaxSpawnClusterSize

```java
public int getMaxSpawnClusterSize()
```

**Returns:** `int`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_32744_)
```

**Parameters:**

- `p_32744_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_32733_)
```

**Parameters:**

- `p_32733_` (`CompoundTag`)

### GhastLookGoal

```java
public GhastLookGoal(Ghast p_32762_)
```

**Parameters:**

- `p_32762_` (`Ghast`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### GhastMoveControl

```java
public GhastMoveControl(Ghast p_32768_)
```

**Parameters:**

- `p_32768_` (`Ghast`)

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

### canReach

```java
private boolean canReach(Vec3 p_32771_, int p_32772_)
```

**Parameters:**

- `p_32771_` (`Vec3`)
- `p_32772_` (`int`)

**Returns:** `private boolean`

### GhastShootFireballGoal

```java
public GhastShootFireballGoal(Ghast p_32776_)
```

**Parameters:**

- `p_32776_` (`Ghast`)

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

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### RandomFloatAroundGoal

```java
public RandomFloatAroundGoal(Ghast p_32783_)
```

**Parameters:**

- `p_32783_` (`Ghast`)

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
