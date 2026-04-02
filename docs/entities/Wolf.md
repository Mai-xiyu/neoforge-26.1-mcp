# Wolf

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `TamableAnimal`
**Implements:** `NeutralMob`, `VariantHolder<Holder<WolfVariant>>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PREY_SELECTOR` | `Predicate<LivingEntity>` |  |

## Methods

### Wolf

```java
public Wolf(EntityType<? extends Wolf> p_30369_, Level p_30370_)
```

**Parameters:**

- `p_30369_` (`EntityType<? extends Wolf>`)
- `p_30370_` (`Level`)

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

### getTexture

```java
public ResourceLocation getTexture()
```

**Returns:** `public ResourceLocation`

### getVariant

```java
public Holder<WolfVariant> getVariant()
```

**Returns:** `public Holder<WolfVariant>`

### setVariant

```java
public void setVariant(Holder<WolfVariant> p_332777_)
```

**Parameters:**

- `p_332777_` (`Holder<WolfVariant>`)

**Returns:** `public void`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326027_)
```

**Parameters:**

- `p_326027_` (`SynchedEntityData.Builder`)

### playStepSound

```java
protected void playStepSound(BlockPos p_30415_, BlockState p_30416_)
```

**Parameters:**

- `p_30415_` (`BlockPos`)
- `p_30416_` (`BlockState`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30418_)
```

**Parameters:**

- `p_30418_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30402_)
```

**Parameters:**

- `p_30402_` (`CompoundTag`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_332775_, DifficultyInstance p_332793_, MobSpawnType p_332761_, SpawnGroupData p_332782_)
```

**Parameters:**

- `p_332775_` (`ServerLevelAccessor`)
- `p_332793_` (`DifficultyInstance`)
- `p_332761_` (`MobSpawnType`)
- `p_332782_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_30424_)
```

**Parameters:**

- `p_30424_` (`DamageSource`)

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

### aiStep

```java
public void aiStep()
```

### tick

```java
public void tick()
```

### cancelShake

```java
private void cancelShake()
```

**Returns:** `private void`

### die

```java
public void die(DamageSource p_30384_)
```

**Parameters:**

- `p_30384_` (`DamageSource`)

### isWet

```java
public boolean isWet()
```

**Returns:** `public boolean`

### getWetShade

```java
public float getWetShade(float p_30447_)
```

**Parameters:**

- `p_30447_` (`float`)

**Returns:** `public float`

### getBodyRollAngle

```java
public float getBodyRollAngle(float p_30433_, float p_30434_)
```

**Parameters:**

- `p_30433_` (`float`)
- `p_30434_` (`float`)

**Returns:** `public float`

### getHeadRollAngle

```java
public float getHeadRollAngle(float p_30449_)
```

**Parameters:**

- `p_30449_` (`float`)

**Returns:** `public float`

### getMaxHeadXRot

```java
public int getMaxHeadXRot()
```

**Returns:** `int`

### hurt

```java
public boolean hurt(DamageSource p_30386_, float p_30387_)
```

**Parameters:**

- `p_30386_` (`DamageSource`)
- `p_30387_` (`float`)

**Returns:** `boolean`

### canUseSlot

```java
public boolean canUseSlot(EquipmentSlot p_348657_)
```

**Parameters:**

- `p_348657_` (`EquipmentSlot`)

**Returns:** `boolean`

### actuallyHurt

```java
protected void actuallyHurt(DamageSource p_331935_, float p_330695_)
```

**Parameters:**

- `p_331935_` (`DamageSource`)
- `p_330695_` (`float`)

### canArmorAbsorb

```java
private boolean canArmorAbsorb(DamageSource p_331524_)
```

**Parameters:**

- `p_331524_` (`DamageSource`)

**Returns:** `private boolean`

### applyTamingSideEffects

```java
protected void applyTamingSideEffects()
```

### hurtArmor

```java
protected void hurtArmor(DamageSource p_332118_, float p_330593_)
```

**Parameters:**

- `p_332118_` (`DamageSource`)
- `p_330593_` (`float`)

### mobInteract

```java
public InteractionResult mobInteract(Player p_30412_, InteractionHand p_30413_)
```

**Parameters:**

- `p_30412_` (`Player`)
- `p_30413_` (`InteractionHand`)

**Returns:** `InteractionResult`

### tryToTame

```java
private void tryToTame(Player p_333736_)
```

**Parameters:**

- `p_333736_` (`Player`)

**Returns:** `private void`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_30379_)
```

**Parameters:**

- `p_30379_` (`byte`)

### getTailAngle

```java
public float getTailAngle()
```

**Returns:** `public float`

### isFood

```java
public boolean isFood(ItemStack p_30440_)
```

**Parameters:**

- `p_30440_` (`ItemStack`)

**Returns:** `boolean`

### getMaxSpawnClusterSize

```java
public int getMaxSpawnClusterSize()
```

**Returns:** `int`

### getRemainingPersistentAngerTime

```java
public int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### setRemainingPersistentAngerTime

```java
public void setRemainingPersistentAngerTime(int p_30404_)
```

**Parameters:**

- `p_30404_` (`int`)

### startPersistentAngerTimer

```java
public void startPersistentAngerTimer()
```

### getPersistentAngerTarget

```java
public UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### setPersistentAngerTarget

```java
public void setPersistentAngerTarget(UUID p_30400_)
```

**Parameters:**

- `p_30400_` (`UUID`)

### getCollarColor

```java
public DyeColor getCollarColor()
```

**Returns:** `public DyeColor`

### hasArmor

```java
public boolean hasArmor()
```

**Returns:** `public boolean`

### setCollarColor

```java
private void setCollarColor(DyeColor p_30398_)
```

**Parameters:**

- `p_30398_` (`DyeColor`)

**Returns:** `private void`

### getBreedOffspring

```java
public Wolf getBreedOffspring(ServerLevel p_149088_, AgeableMob p_149089_)
```

**Parameters:**

- `p_149088_` (`ServerLevel`)
- `p_149089_` (`AgeableMob`)

**Returns:** `Wolf`

### setIsInterested

```java
public void setIsInterested(boolean p_30445_)
```

**Parameters:**

- `p_30445_` (`boolean`)

**Returns:** `public void`

### canMate

```java
public boolean canMate(Animal p_30392_)
```

**Parameters:**

- `p_30392_` (`Animal`)

**Returns:** `boolean`

### isInterested

```java
public boolean isInterested()
```

**Returns:** `public boolean`

### wantsToAttack

```java
public boolean wantsToAttack(LivingEntity p_30389_, LivingEntity p_30390_)
```

**Parameters:**

- `p_30389_` (`LivingEntity`)
- `p_30390_` (`LivingEntity`)

**Returns:** `boolean`

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### checkWolfSpawnRules

```java
public static boolean checkWolfSpawnRules(EntityType<Wolf> p_218292_, LevelAccessor p_218293_, MobSpawnType p_218294_, BlockPos p_218295_, RandomSource p_218296_)
```

**Parameters:**

- `p_218292_` (`EntityType<Wolf>`)
- `p_218293_` (`LevelAccessor`)
- `p_218294_` (`MobSpawnType`)
- `p_218295_` (`BlockPos`)
- `p_218296_` (`RandomSource`)

**Returns:** `public static boolean`

### WolfAvoidEntityGoal

```java
public WolfAvoidEntityGoal(Wolf p_30454_, Class<T> p_30455_, float p_30456_, double p_30457_, double p_30458_)
```

**Parameters:**

- `p_30454_` (`Wolf`)
- `p_30455_` (`Class<T>`)
- `p_30456_` (`float`)
- `p_30457_` (`double`)
- `p_30458_` (`double`)

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

### avoidLlama

```java
private boolean avoidLlama(Llama p_30461_)
```

**Parameters:**

- `p_30461_` (`Llama`)

**Returns:** `private boolean`

### start

```java
public void start()
```

### tick

```java
public void tick()
```

### WolfPackData

```java
public WolfPackData(Holder<WolfVariant> p_332792_)
```

**Parameters:**

- `p_332792_` (`Holder<WolfVariant>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `WolfPackData` | class |  |
