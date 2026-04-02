# Pillager

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractIllager`
**Implements:** `CrossbowAttackMob`, `InventoryCarrier`

## Methods

### Pillager

```java
public Pillager(EntityType<? extends Pillager> p_33262_, Level p_33263_)
```

**Parameters:**

- `p_33262_` (`EntityType<? extends Pillager>`)
- `p_33263_` (`Level`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325979_)
```

**Parameters:**

- `p_325979_` (`SynchedEntityData.Builder`)

### canFireProjectileWeapon

```java
public boolean canFireProjectileWeapon(ProjectileWeaponItem p_33280_)
```

**Parameters:**

- `p_33280_` (`ProjectileWeaponItem`)

**Returns:** `boolean`

### isChargingCrossbow

```java
public boolean isChargingCrossbow()
```

**Returns:** `public boolean`

### setChargingCrossbow

```java
public void setChargingCrossbow(boolean p_33302_)
```

**Parameters:**

- `p_33302_` (`boolean`)

### onCrossbowAttackPerformed

```java
public void onCrossbowAttackPerformed()
```

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_33300_)
```

**Parameters:**

- `p_33300_` (`CompoundTag`)

### getArmPose

```java
public AbstractIllager.IllagerArmPose getArmPose()
```

**Returns:** `AbstractIllager.IllagerArmPose`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_33291_)
```

**Parameters:**

- `p_33291_` (`CompoundTag`)

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_33288_, LevelReader p_33289_)
```

**Parameters:**

- `p_33288_` (`BlockPos`)
- `p_33289_` (`LevelReader`)

**Returns:** `float`

### getMaxSpawnClusterSize

```java
public int getMaxSpawnClusterSize()
```

**Returns:** `int`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_33282_, DifficultyInstance p_33283_, MobSpawnType p_33284_, SpawnGroupData p_33285_)
```

**Parameters:**

- `p_33282_` (`ServerLevelAccessor`)
- `p_33283_` (`DifficultyInstance`)
- `p_33284_` (`MobSpawnType`)
- `p_33285_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219059_, DifficultyInstance p_219060_)
```

**Parameters:**

- `p_219059_` (`RandomSource`)
- `p_219060_` (`DifficultyInstance`)

### enchantSpawnedWeapon

```java
protected void enchantSpawnedWeapon(ServerLevelAccessor p_348604_, RandomSource p_219056_, DifficultyInstance p_348571_)
```

**Parameters:**

- `p_348604_` (`ServerLevelAccessor`)
- `p_219056_` (`RandomSource`)
- `p_348571_` (`DifficultyInstance`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33306_)
```

**Parameters:**

- `p_33306_` (`DamageSource`)

**Returns:** `SoundEvent`

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_33272_, float p_33273_)
```

**Parameters:**

- `p_33272_` (`LivingEntity`)
- `p_33273_` (`float`)

### getInventory

```java
public SimpleContainer getInventory()
```

**Returns:** `SimpleContainer`

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_33296_)
```

**Parameters:**

- `p_33296_` (`ItemEntity`)

### wantsItem

```java
private boolean wantsItem(ItemStack p_149745_)
```

**Parameters:**

- `p_149745_` (`ItemStack`)

**Returns:** `private boolean`

### getSlot

```java
public SlotAccess getSlot(int p_149743_)
```

**Parameters:**

- `p_149743_` (`int`)

**Returns:** `SlotAccess`

### applyRaidBuffs

```java
public void applyRaidBuffs(ServerLevel p_348618_, int p_33267_, boolean p_33268_)
```

**Parameters:**

- `p_348618_` (`ServerLevel`)
- `p_33267_` (`int`)
- `p_33268_` (`boolean`)

### getCelebrateSound

```java
public SoundEvent getCelebrateSound()
```

**Returns:** `SoundEvent`
