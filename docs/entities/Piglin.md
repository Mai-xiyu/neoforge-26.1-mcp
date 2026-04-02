# Piglin

**Package:** `net.minecraft.world.entity.monster.piglin`
**Type:** class
**Extends:** `AbstractPiglin`
**Implements:** `CrossbowAttackMob`, `InventoryCarrier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SENSOR_TYPES` | `ImmutableList<SensorType<? extends Sensor<? super Piglin>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<MemoryModuleType<?>>` |  |

## Methods

### Piglin

```java
public Piglin(EntityType<? extends AbstractPiglin> p_34683_, Level p_34684_)
```

**Parameters:**

- `p_34683_` (`EntityType<? extends AbstractPiglin>`)
- `p_34684_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34751_)
```

**Parameters:**

- `p_34751_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34725_)
```

**Parameters:**

- `p_34725_` (`CompoundTag`)

### getInventory

```java
public SimpleContainer getInventory()
```

**Returns:** `SimpleContainer`

### dropCustomDeathLoot

```java
protected void dropCustomDeathLoot(ServerLevel p_348503_, DamageSource p_34697_, boolean p_34699_)
```

**Parameters:**

- `p_348503_` (`ServerLevel`)
- `p_34697_` (`DamageSource`)
- `p_34699_` (`boolean`)

### addToInventory

```java
protected ItemStack addToInventory(ItemStack p_34779_)
```

**Parameters:**

- `p_34779_` (`ItemStack`)

**Returns:** `protected ItemStack`

### canAddToInventory

```java
protected boolean canAddToInventory(ItemStack p_34781_)
```

**Parameters:**

- `p_34781_` (`ItemStack`)

**Returns:** `protected boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326106_)
```

**Parameters:**

- `p_326106_` (`SynchedEntityData.Builder`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_34727_)
```

**Parameters:**

- `p_34727_` (`EntityDataAccessor<?>`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### checkPiglinSpawnRules

```java
public static boolean checkPiglinSpawnRules(EntityType<Piglin> p_219198_, LevelAccessor p_219199_, MobSpawnType p_219200_, BlockPos p_219201_, RandomSource p_219202_)
```

**Parameters:**

- `p_219198_` (`EntityType<Piglin>`)
- `p_219199_` (`LevelAccessor`)
- `p_219200_` (`MobSpawnType`)
- `p_219201_` (`BlockPos`)
- `p_219202_` (`RandomSource`)

**Returns:** `public static boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34717_, DifficultyInstance p_34718_, MobSpawnType p_34719_, SpawnGroupData p_34720_)
```

**Parameters:**

- `p_34717_` (`ServerLevelAccessor`)
- `p_34718_` (`DifficultyInstance`)
- `p_34719_` (`MobSpawnType`)
- `p_34720_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### shouldDespawnInPeaceful

```java
protected boolean shouldDespawnInPeaceful()
```

**Returns:** `boolean`

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_34775_)
```

**Parameters:**

- `p_34775_` (`double`)

**Returns:** `boolean`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219189_, DifficultyInstance p_219190_)
```

**Parameters:**

- `p_219189_` (`RandomSource`)
- `p_219190_` (`DifficultyInstance`)

### maybeWearArmor

```java
private void maybeWearArmor(EquipmentSlot p_219192_, ItemStack p_219193_, RandomSource p_219194_)
```

**Parameters:**

- `p_219192_` (`EquipmentSlot`)
- `p_219193_` (`ItemStack`)
- `p_219194_` (`RandomSource`)

**Returns:** `private void`

### brainProvider

```java
protected Brain.Provider<Piglin> brainProvider()
```

**Returns:** `Brain.Provider<Piglin>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_34723_)
```

**Parameters:**

- `p_34723_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Piglin> getBrain()
```

**Returns:** `Brain<Piglin>`

### mobInteract

```java
public InteractionResult mobInteract(Player p_34745_, InteractionHand p_34746_)
```

**Parameters:**

- `p_34745_` (`Player`)
- `p_34746_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316426_)
```

**Parameters:**

- `p_316426_` (`Pose`)

**Returns:** `EntityDimensions`

### setBaby

```java
public void setBaby(boolean p_34729_)
```

**Parameters:**

- `p_34729_` (`boolean`)

### isBaby

```java
public boolean isBaby()
```

**Returns:** `boolean`

### setCannotHunt

```java
private void setCannotHunt(boolean p_34792_)
```

**Parameters:**

- `p_34792_` (`boolean`)

**Returns:** `private void`

### canHunt

```java
protected boolean canHunt()
```

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### getBaseExperienceReward

```java
protected int getBaseExperienceReward()
```

**Returns:** `int`

### finishConversion

```java
protected void finishConversion(ServerLevel p_34756_)
```

**Parameters:**

- `p_34756_` (`ServerLevel`)

### createSpawnWeapon

```java
private ItemStack createSpawnWeapon()
```

**Returns:** `private ItemStack`

### isChargingCrossbow

```java
private boolean isChargingCrossbow()
```

**Returns:** `private boolean`

### setChargingCrossbow

```java
public void setChargingCrossbow(boolean p_34753_)
```

**Parameters:**

- `p_34753_` (`boolean`)

### onCrossbowAttackPerformed

```java
public void onCrossbowAttackPerformed()
```

### getArmPose

```java
public PiglinArmPose getArmPose()
```

**Returns:** `PiglinArmPose`

### isDancing

```java
public boolean isDancing()
```

**Returns:** `public boolean`

### setDancing

```java
public void setDancing(boolean p_34790_)
```

**Parameters:**

- `p_34790_` (`boolean`)

**Returns:** `public void`

### hurt

```java
public boolean hurt(DamageSource p_34694_, float p_34695_)
```

**Parameters:**

- `p_34694_` (`DamageSource`)
- `p_34695_` (`float`)

**Returns:** `boolean`

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_34704_, float p_34705_)
```

**Parameters:**

- `p_34704_` (`LivingEntity`)
- `p_34705_` (`float`)

### canFireProjectileWeapon

```java
public boolean canFireProjectileWeapon(ProjectileWeaponItem p_34715_)
```

**Parameters:**

- `p_34715_` (`ProjectileWeaponItem`)

**Returns:** `boolean`

### holdInMainHand

```java
protected void holdInMainHand(ItemStack p_34784_)
```

**Parameters:**

- `p_34784_` (`ItemStack`)

**Returns:** `protected void`

### holdInOffHand

```java
protected void holdInOffHand(ItemStack p_34786_)
```

**Parameters:**

- `p_34786_` (`ItemStack`)

**Returns:** `protected void`

### wantsToPickUp

```java
public boolean wantsToPickUp(ItemStack p_34777_)
```

**Parameters:**

- `p_34777_` (`ItemStack`)

**Returns:** `boolean`

### canReplaceCurrentItem

```java
protected boolean canReplaceCurrentItem(ItemStack p_34788_)
```

**Parameters:**

- `p_34788_` (`ItemStack`)

**Returns:** `protected boolean`

### canReplaceCurrentItem

```java
protected boolean canReplaceCurrentItem(ItemStack p_34712_, ItemStack p_34713_)
```

**Parameters:**

- `p_34712_` (`ItemStack`)
- `p_34713_` (`ItemStack`)

**Returns:** `boolean`

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_34743_)
```

**Parameters:**

- `p_34743_` (`ItemEntity`)

### startRiding

```java
public boolean startRiding(Entity p_34701_, boolean p_34702_)
```

**Parameters:**

- `p_34701_` (`Entity`)
- `p_34702_` (`boolean`)

**Returns:** `boolean`

### getTopPassenger

```java
private Entity getTopPassenger(Entity p_34731_, int p_34732_)
```

**Parameters:**

- `p_34731_` (`Entity`)
- `p_34732_` (`int`)

**Returns:** `private Entity`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_34767_)
```

**Parameters:**

- `p_34767_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_34748_, BlockState p_34749_)
```

**Parameters:**

- `p_34748_` (`BlockPos`)
- `p_34749_` (`BlockState`)

### playConvertedSound

```java
protected void playConvertedSound()
```
