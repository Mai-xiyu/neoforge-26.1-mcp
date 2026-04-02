# Vex

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`
**Implements:** `TraceableEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLAP_DEGREES_PER_TICK` | `float` |  |
| `TICKS_PER_FLAP` | `int` |  |
| `DATA_FLAGS_ID` | `EntityDataAccessor<Byte>` |  |

## Methods

### Vex

```java
public Vex(EntityType<? extends Vex> p_33984_, Level p_33985_)
```

**Parameters:**

- `p_33984_` (`EntityType<? extends Vex>`)
- `p_33985_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isFlapping

```java
public boolean isFlapping()
```

**Returns:** `boolean`

### move

```java
public void move(MoverType p_33997_, Vec3 p_33998_)
```

**Parameters:**

- `p_33997_` (`MoverType`)
- `p_33998_` (`Vec3`)

### tick

```java
public void tick()
```

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
protected void defineSynchedData(SynchedEntityData.Builder p_326059_)
```

**Parameters:**

- `p_326059_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34008_)
```

**Parameters:**

- `p_34008_` (`CompoundTag`)

### restoreFrom

```java
public void restoreFrom(Entity p_306094_)
```

**Parameters:**

- `p_306094_` (`Entity`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34015_)
```

**Parameters:**

- `p_34015_` (`CompoundTag`)

### getOwner

```java
public Mob getOwner()
```

**Returns:** `Mob`

### getBoundOrigin

```java
public BlockPos getBoundOrigin()
```

**Returns:** `BlockPos`

### setBoundOrigin

```java
public void setBoundOrigin(BlockPos p_34034_)
```

**Parameters:**

- `p_34034_` (`BlockPos`)

**Returns:** `public void`

### getVexFlag

```java
private boolean getVexFlag(int p_34011_)
```

**Parameters:**

- `p_34011_` (`int`)

**Returns:** `private boolean`

### setVexFlag

```java
private void setVexFlag(int p_33990_, boolean p_33991_)
```

**Parameters:**

- `p_33990_` (`int`)
- `p_33991_` (`boolean`)

**Returns:** `private void`

### isCharging

```java
public boolean isCharging()
```

**Returns:** `public boolean`

### setIsCharging

```java
public void setIsCharging(boolean p_34043_)
```

**Parameters:**

- `p_34043_` (`boolean`)

**Returns:** `public void`

### setOwner

```java
public void setOwner(Mob p_33995_)
```

**Parameters:**

- `p_33995_` (`Mob`)

**Returns:** `public void`

### setLimitedLife

```java
public void setLimitedLife(int p_33988_)
```

**Parameters:**

- `p_33988_` (`int`)

**Returns:** `public void`

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
protected SoundEvent getHurtSound(DamageSource p_34023_)
```

**Parameters:**

- `p_34023_` (`DamageSource`)

**Returns:** `SoundEvent`

### getLightLevelDependentMagicValue

```java
public float getLightLevelDependentMagicValue()
```

**Returns:** `float`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34002_, DifficultyInstance p_34003_, MobSpawnType p_34004_, SpawnGroupData p_34005_)
```

**Parameters:**

- `p_34002_` (`ServerLevelAccessor`)
- `p_34003_` (`DifficultyInstance`)
- `p_34004_` (`MobSpawnType`)
- `p_34005_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219135_, DifficultyInstance p_219136_)
```

**Parameters:**

- `p_219135_` (`RandomSource`)
- `p_219136_` (`DifficultyInstance`)

### VexChargeAttackGoal

```java
public VexChargeAttackGoal()
```

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

### VexCopyOwnerTargetGoal

```java
public VexCopyOwnerTargetGoal(PathfinderMob p_34056_)
```

**Parameters:**

- `p_34056_` (`PathfinderMob`)

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

### VexMoveControl

```java
public VexMoveControl(Vex p_34062_)
```

**Parameters:**

- `p_34062_` (`Vex`)

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

### VexRandomMoveGoal

```java
public VexRandomMoveGoal()
```

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

### tick

```java
public void tick()
```
