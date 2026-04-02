# Drowned

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Zombie`
**Implements:** `RangedAttackMob`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NAUTILUS_SHELL_CHANCE` | `float` |  |
| `waterNavigation` | `WaterBoundPathNavigation` |  |
| `groundNavigation` | `GroundPathNavigation` |  |

## Methods

### Drowned

```java
public Drowned(EntityType<? extends Drowned> p_32344_, Level p_32345_)
```

**Parameters:**

- `p_32344_` (`EntityType<? extends Drowned>`)
- `p_32345_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### addBehaviourGoals

```java
protected void addBehaviourGoals()
```

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_32372_, DifficultyInstance p_32373_, MobSpawnType p_32374_, SpawnGroupData p_32375_)
```

**Parameters:**

- `p_32372_` (`ServerLevelAccessor`)
- `p_32373_` (`DifficultyInstance`)
- `p_32374_` (`MobSpawnType`)
- `p_32375_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### checkDrownedSpawnRules

```java
public static boolean checkDrownedSpawnRules(EntityType<Drowned> p_218956_, ServerLevelAccessor p_218957_, MobSpawnType p_218958_, BlockPos p_218959_, RandomSource p_218960_)
```

**Parameters:**

- `p_218956_` (`EntityType<Drowned>`)
- `p_218957_` (`ServerLevelAccessor`)
- `p_218958_` (`MobSpawnType`)
- `p_218959_` (`BlockPos`)
- `p_218960_` (`RandomSource`)

**Returns:** `public static boolean`

### isDeepEnoughToSpawn

```java
private static boolean isDeepEnoughToSpawn(LevelAccessor p_32367_, BlockPos p_32368_)
```

**Parameters:**

- `p_32367_` (`LevelAccessor`)
- `p_32368_` (`BlockPos`)

**Returns:** `private static boolean`

### supportsBreakDoorGoal

```java
protected boolean supportsBreakDoorGoal()
```

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32386_)
```

**Parameters:**

- `p_32386_` (`DamageSource`)

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

**Returns:** `SoundEvent`

### getSwimSound

```java
protected SoundEvent getSwimSound()
```

**Returns:** `SoundEvent`

### getSkull

```java
protected ItemStack getSkull()
```

**Returns:** `ItemStack`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_218953_, DifficultyInstance p_218954_)
```

**Parameters:**

- `p_218953_` (`RandomSource`)
- `p_218954_` (`DifficultyInstance`)

### canReplaceCurrentItem

```java
protected boolean canReplaceCurrentItem(ItemStack p_32364_, ItemStack p_32365_)
```

**Parameters:**

- `p_32364_` (`ItemStack`)
- `p_32365_` (`ItemStack`)

**Returns:** `boolean`

### convertsInWater

```java
protected boolean convertsInWater()
```

**Returns:** `boolean`

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_32370_)
```

**Parameters:**

- `p_32370_` (`LevelReader`)

**Returns:** `boolean`

### okTarget

```java
public boolean okTarget(LivingEntity p_32396_)
```

**Parameters:**

- `p_32396_` (`LivingEntity`)

**Returns:** `public boolean`

### isPushedByFluid

```java
public boolean isPushedByFluid()
```

**Returns:** `boolean`

### wantsToSwim

```java
boolean wantsToSwim()
```

**Returns:** `boolean`

### travel

```java
public void travel(Vec3 p_32394_)
```

**Parameters:**

- `p_32394_` (`Vec3`)

### updateSwimming

```java
public void updateSwimming()
```

### isVisuallySwimming

```java
public boolean isVisuallySwimming()
```

**Returns:** `boolean`

### closeToNextPos

```java
protected boolean closeToNextPos()
```

**Returns:** `protected boolean`

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_32356_, float p_32357_)
```

**Parameters:**

- `p_32356_` (`LivingEntity`)
- `p_32357_` (`float`)

### setSearchingForLand

```java
public void setSearchingForLand(boolean p_32399_)
```

**Parameters:**

- `p_32399_` (`boolean`)

**Returns:** `public void`

### DrownedAttackGoal

```java
public DrownedAttackGoal(Drowned p_32402_, double p_32403_, boolean p_32404_)
```

**Parameters:**

- `p_32402_` (`Drowned`)
- `p_32403_` (`double`)
- `p_32404_` (`boolean`)

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

### DrownedGoToBeachGoal

```java
public DrownedGoToBeachGoal(Drowned p_32409_, double p_32410_)
```

**Parameters:**

- `p_32409_` (`Drowned`)
- `p_32410_` (`double`)

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

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_32413_, BlockPos p_32414_)
```

**Parameters:**

- `p_32413_` (`LevelReader`)
- `p_32414_` (`BlockPos`)

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### DrownedGoToWaterGoal

```java
public DrownedGoToWaterGoal(PathfinderMob p_32425_, double p_32426_)
```

**Parameters:**

- `p_32425_` (`PathfinderMob`)
- `p_32426_` (`double`)

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

### DrownedMoveControl

```java
public DrownedMoveControl(Drowned p_32433_)
```

**Parameters:**

- `p_32433_` (`Drowned`)

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

### DrownedSwimUpGoal

```java
public DrownedSwimUpGoal(Drowned p_32440_, double p_32441_, int p_32442_)
```

**Parameters:**

- `p_32440_` (`Drowned`)
- `p_32441_` (`double`)
- `p_32442_` (`int`)

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

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### DrownedTridentAttackGoal

```java
public DrownedTridentAttackGoal(RangedAttackMob p_32450_, double p_32451_, int p_32452_, float p_32453_)
```

**Parameters:**

- `p_32450_` (`RangedAttackMob`)
- `p_32451_` (`double`)
- `p_32452_` (`int`)
- `p_32453_` (`float`)

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

### stop

```java
public void stop()
```
