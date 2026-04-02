# Zombie

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ZOMBIE_LEADER_CHANCE` | `float` |  |
| `REINFORCEMENT_ATTEMPTS` | `int` |  |
| `REINFORCEMENT_RANGE_MAX` | `int` |  |
| `REINFORCEMENT_RANGE_MIN` | `int` |  |
| `conversionTime` | `int` |  |

## Methods

### Zombie

```java
public Zombie(EntityType<? extends Zombie> p_34271_, Level p_34272_)
```

**Parameters:**

- `p_34271_` (`EntityType<? extends Zombie>`)
- `p_34272_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Zombie

```java
public Zombie(Level p_34274_)
```

**Parameters:**

- `p_34274_` (`Level`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### registerGoals

```java
protected void registerGoals()
```

### addBehaviourGoals

```java
protected void addBehaviourGoals()
```

**Returns:** `protected void`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326435_)
```

**Parameters:**

- `p_326435_` (`SynchedEntityData.Builder`)

### isUnderWaterConverting

```java
public boolean isUnderWaterConverting()
```

**Returns:** `public boolean`

### canBreakDoors

```java
public boolean canBreakDoors()
```

**Returns:** `public boolean`

### setCanBreakDoors

```java
public void setCanBreakDoors(boolean p_34337_)
```

**Parameters:**

- `p_34337_` (`boolean`)

**Returns:** `public void`

### supportsBreakDoorGoal

```java
protected boolean supportsBreakDoorGoal()
```

**Returns:** `protected boolean`

### isBaby

```java
public boolean isBaby()
```

**Returns:** `boolean`

### getBaseExperienceReward

```java
protected int getBaseExperienceReward()
```

**Returns:** `int`

### setBaby

```java
public void setBaby(boolean p_34309_)
```

**Parameters:**

- `p_34309_` (`boolean`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_34307_)
```

**Parameters:**

- `p_34307_` (`EntityDataAccessor<?>`)

### convertsInWater

```java
protected boolean convertsInWater()
```

**Returns:** `protected boolean`

### tick

```java
public void tick()
```

### aiStep

```java
public void aiStep()
```

### startUnderWaterConversion

```java
private void startUnderWaterConversion(int p_34279_)
```

**Parameters:**

- `p_34279_` (`int`)

**Returns:** `private void`

### doUnderWaterConversion

```java
protected void doUnderWaterConversion()
```

**Returns:** `protected void`

### convertToZombieType

```java
protected void convertToZombieType(EntityType<? extends Zombie> p_34311_)
```

**Parameters:**

- `p_34311_` (`EntityType<? extends Zombie>`)

**Returns:** `protected void`

### isSunSensitive

```java
protected boolean isSunSensitive()
```

**Returns:** `protected boolean`

### hurt

```java
public boolean hurt(DamageSource p_34288_, float p_34289_)
```

**Parameters:**

- `p_34288_` (`DamageSource`)
- `p_34289_` (`float`)

**Returns:** `boolean`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_34276_)
```

**Parameters:**

- `p_34276_` (`Entity`)

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_34327_)
```

**Parameters:**

- `p_34327_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getStepSound

```java
protected SoundEvent getStepSound()
```

**Returns:** `protected SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_34316_, BlockState p_34317_)
```

**Parameters:**

- `p_34316_` (`BlockPos`)
- `p_34317_` (`BlockState`)

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219165_, DifficultyInstance p_219166_)
```

**Parameters:**

- `p_219165_` (`RandomSource`)
- `p_219166_` (`DifficultyInstance`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34319_)
```

**Parameters:**

- `p_34319_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34305_)
```

**Parameters:**

- `p_34305_` (`CompoundTag`)

### killedEntity

```java
public boolean killedEntity(ServerLevel p_219160_, LivingEntity p_219161_)
```

**Parameters:**

- `p_219160_` (`ServerLevel`)
- `p_219161_` (`LivingEntity`)

**Returns:** `boolean`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316771_)
```

**Parameters:**

- `p_316771_` (`Pose`)

**Returns:** `EntityDimensions`

### canHoldItem

```java
public boolean canHoldItem(ItemStack p_34332_)
```

**Parameters:**

- `p_34332_` (`ItemStack`)

**Returns:** `boolean`

### wantsToPickUp

```java
public boolean wantsToPickUp(ItemStack p_182400_)
```

**Parameters:**

- `p_182400_` (`ItemStack`)

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34297_, DifficultyInstance p_34298_, MobSpawnType p_34299_, SpawnGroupData p_34300_)
```

**Parameters:**

- `p_34297_` (`ServerLevelAccessor`)
- `p_34298_` (`DifficultyInstance`)
- `p_34299_` (`MobSpawnType`)
- `p_34300_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getSpawnAsBabyOdds

```java
public static boolean getSpawnAsBabyOdds(RandomSource p_219163_)
```

**Parameters:**

- `p_219163_` (`RandomSource`)

**Returns:** `public static boolean`

### handleAttributes

```java
protected void handleAttributes(float p_34340_)
```

**Parameters:**

- `p_34340_` (`float`)

**Returns:** `protected void`

### randomizeReinforcementsChance

```java
protected void randomizeReinforcementsChance()
```

**Returns:** `protected void`

### dropCustomDeathLoot

```java
protected void dropCustomDeathLoot(ServerLevel p_348597_, DamageSource p_34291_, boolean p_34293_)
```

**Parameters:**

- `p_348597_` (`ServerLevel`)
- `p_34291_` (`DamageSource`)
- `p_34293_` (`boolean`)

### getSkull

```java
protected ItemStack getSkull()
```

**Returns:** `protected ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### ZombieAttackTurtleEggGoal

```java
 ZombieAttackTurtleEggGoal(PathfinderMob p_34344_, double p_34345_, int p_34346_)
```

**Parameters:**

- `p_34344_` (`PathfinderMob`)
- `p_34345_` (`double`)
- `p_34346_` (`int`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### playDestroyProgressSound

```java
public void playDestroyProgressSound(LevelAccessor p_34351_, BlockPos p_34352_)
```

**Parameters:**

- `p_34351_` (`LevelAccessor`)
- `p_34352_` (`BlockPos`)

### playBreakSound

```java
public void playBreakSound(Level p_34348_, BlockPos p_34349_)
```

**Parameters:**

- `p_34348_` (`Level`)
- `p_34349_` (`BlockPos`)

### acceptedDistance

```java
public double acceptedDistance()
```

**Returns:** `double`

### ZombieGroupData

```java
public ZombieGroupData(boolean p_34357_, boolean p_34358_)
```

**Parameters:**

- `p_34357_` (`boolean`)
- `p_34358_` (`boolean`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ZombieGroupData` | class |  |
