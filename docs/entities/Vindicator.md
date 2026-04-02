# Vindicator

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractIllager`

## Methods

### Vindicator

```java
public Vindicator(EntityType<? extends Vindicator> p_34074_, Level p_34075_)
```

**Parameters:**

- `p_34074_` (`EntityType<? extends Vindicator>`)
- `p_34075_` (`Level`)

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

### customServerAiStep

```java
protected void customServerAiStep()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34100_)
```

**Parameters:**

- `p_34100_` (`CompoundTag`)

### getArmPose

```java
public AbstractIllager.IllagerArmPose getArmPose()
```

**Returns:** `AbstractIllager.IllagerArmPose`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34094_)
```

**Parameters:**

- `p_34094_` (`CompoundTag`)

### getCelebrateSound

```java
public SoundEvent getCelebrateSound()
```

**Returns:** `SoundEvent`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34088_, DifficultyInstance p_34089_, MobSpawnType p_34090_, SpawnGroupData p_34091_)
```

**Parameters:**

- `p_34088_` (`ServerLevelAccessor`)
- `p_34089_` (`DifficultyInstance`)
- `p_34090_` (`MobSpawnType`)
- `p_34091_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219149_, DifficultyInstance p_219150_)
```

**Parameters:**

- `p_219149_` (`RandomSource`)
- `p_219150_` (`DifficultyInstance`)

### setCustomName

```java
public void setCustomName(Component p_34096_)
```

**Parameters:**

- `p_34096_` (`Component`)

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
protected SoundEvent getHurtSound(DamageSource p_34103_)
```

**Parameters:**

- `p_34103_` (`DamageSource`)

**Returns:** `SoundEvent`

### applyRaidBuffs

```java
public void applyRaidBuffs(ServerLevel p_348474_, int p_34079_, boolean p_34080_)
```

**Parameters:**

- `p_348474_` (`ServerLevel`)
- `p_34079_` (`int`)
- `p_34080_` (`boolean`)

### VindicatorBreakDoorGoal

```java
public VindicatorBreakDoorGoal(Mob p_34112_)
```

**Parameters:**

- `p_34112_` (`Mob`)

**Returns:** `public`

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

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### VindicatorJohnnyAttackGoal

```java
public VindicatorJohnnyAttackGoal(Vindicator p_34117_)
```

**Parameters:**

- `p_34117_` (`Vindicator`)

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

### start

```java
public void start()
```
