# Hoglin

**Package:** `net.minecraft.world.entity.monster.hoglin`
**Type:** class
**Extends:** `Animal`
**Implements:** `Enemy`, `HoglinBase`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SENSOR_TYPES` | `ImmutableList<? extends SensorType<? extends Sensor<? super Hoglin>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<? extends MemoryModuleType<?>>` |  |

## Methods

### Hoglin

```java
public Hoglin(EntityType<? extends Hoglin> p_34488_, Level p_34489_)
```

**Parameters:**

- `p_34488_` (`EntityType<? extends Hoglin>`)
- `p_34489_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_34491_)
```

**Parameters:**

- `p_34491_` (`Entity`)

**Returns:** `boolean`

### blockedByShield

```java
protected void blockedByShield(LivingEntity p_34550_)
```

**Parameters:**

- `p_34550_` (`LivingEntity`)

### hurt

```java
public boolean hurt(DamageSource p_34503_, float p_34504_)
```

**Parameters:**

- `p_34503_` (`DamageSource`)
- `p_34504_` (`float`)

**Returns:** `boolean`

### brainProvider

```java
protected Brain.Provider<Hoglin> brainProvider()
```

**Returns:** `Brain.Provider<Hoglin>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_34514_)
```

**Parameters:**

- `p_34514_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Hoglin> getBrain()
```

**Returns:** `Brain<Hoglin>`

### customServerAiStep

```java
protected void customServerAiStep()
```

### aiStep

```java
public void aiStep()
```

### ageBoundaryReached

```java
protected void ageBoundaryReached()
```

### checkHoglinSpawnRules

```java
public static boolean checkHoglinSpawnRules(EntityType<Hoglin> p_219182_, LevelAccessor p_219183_, MobSpawnType p_219184_, BlockPos p_219185_, RandomSource p_219186_)
```

**Parameters:**

- `p_219182_` (`EntityType<Hoglin>`)
- `p_219183_` (`LevelAccessor`)
- `p_219184_` (`MobSpawnType`)
- `p_219185_` (`BlockPos`)
- `p_219186_` (`RandomSource`)

**Returns:** `public static boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34508_, DifficultyInstance p_34509_, MobSpawnType p_34510_, SpawnGroupData p_34511_)
```

**Parameters:**

- `p_34508_` (`ServerLevelAccessor`)
- `p_34509_` (`DifficultyInstance`)
- `p_34510_` (`MobSpawnType`)
- `p_34511_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_34559_)
```

**Parameters:**

- `p_34559_` (`double`)

**Returns:** `boolean`

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_34516_, LevelReader p_34517_)
```

**Parameters:**

- `p_34516_` (`BlockPos`)
- `p_34517_` (`LevelReader`)

**Returns:** `float`

### mobInteract

```java
public InteractionResult mobInteract(Player p_34523_, InteractionHand p_34524_)
```

**Parameters:**

- `p_34523_` (`Player`)
- `p_34524_` (`InteractionHand`)

**Returns:** `InteractionResult`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_34496_)
```

**Parameters:**

- `p_34496_` (`byte`)

### getAttackAnimationRemainingTicks

```java
public int getAttackAnimationRemainingTicks()
```

**Returns:** `int`

### shouldDropExperience

```java
public boolean shouldDropExperience()
```

**Returns:** `boolean`

### getBaseExperienceReward

```java
protected int getBaseExperienceReward()
```

**Returns:** `int`

### finishConversion

```java
private void finishConversion(ServerLevel p_34532_)
```

**Parameters:**

- `p_34532_` (`ServerLevel`)

**Returns:** `private void`

### isFood

```java
public boolean isFood(ItemStack p_34562_)
```

**Parameters:**

- `p_34562_` (`ItemStack`)

**Returns:** `boolean`

### isAdult

```java
public boolean isAdult()
```

**Returns:** `public boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326309_)
```

**Parameters:**

- `p_326309_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34529_)
```

**Parameters:**

- `p_34529_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34519_)
```

**Parameters:**

- `p_34519_` (`CompoundTag`)

### setImmuneToZombification

```java
public void setImmuneToZombification(boolean p_34565_)
```

**Parameters:**

- `p_34565_` (`boolean`)

**Returns:** `public void`

### isImmuneToZombification

```java
private boolean isImmuneToZombification()
```

**Returns:** `private boolean`

### isConverting

```java
public boolean isConverting()
```

**Returns:** `public boolean`

### setCannotBeHunted

```java
private void setCannotBeHunted(boolean p_34567_)
```

**Parameters:**

- `p_34567_` (`boolean`)

**Returns:** `private void`

### canBeHunted

```java
public boolean canBeHunted()
```

**Returns:** `public boolean`

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149900_, AgeableMob p_149901_)
```

**Parameters:**

- `p_149900_` (`ServerLevel`)
- `p_149901_` (`AgeableMob`)

**Returns:** `AgeableMob`

### canFallInLove

```java
public boolean canFallInLove()
```

**Returns:** `boolean`

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
protected SoundEvent getHurtSound(DamageSource p_34548_)
```

**Parameters:**

- `p_34548_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSwimSound

```java
protected SoundEvent getSwimSound()
```

**Returns:** `SoundEvent`

### getSwimSplashSound

```java
protected SoundEvent getSwimSplashSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_34526_, BlockState p_34527_)
```

**Parameters:**

- `p_34526_` (`BlockPos`)
- `p_34527_` (`BlockState`)

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`
