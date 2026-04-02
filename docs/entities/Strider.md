# Strider

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Animal`
**Implements:** `ItemSteerable`, `Saddleable`

## Methods

### Strider

```java
public Strider(EntityType<? extends Strider> p_33862_, Level p_33863_)
```

**Parameters:**

- `p_33862_` (`EntityType<? extends Strider>`)
- `p_33863_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### checkStriderSpawnRules

```java
public static boolean checkStriderSpawnRules(EntityType<Strider> p_219129_, LevelAccessor p_219130_, MobSpawnType p_219131_, BlockPos p_219132_, RandomSource p_219133_)
```

**Parameters:**

- `p_219129_` (`EntityType<Strider>`)
- `p_219130_` (`LevelAccessor`)
- `p_219131_` (`MobSpawnType`)
- `p_219132_` (`BlockPos`)
- `p_219133_` (`RandomSource`)

**Returns:** `public static boolean`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_33900_)
```

**Parameters:**

- `p_33900_` (`EntityDataAccessor<?>`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325918_)
```

**Parameters:**

- `p_325918_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_33918_)
```

**Parameters:**

- `p_33918_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_33898_)
```

**Parameters:**

- `p_33898_` (`CompoundTag`)

### isSaddled

```java
public boolean isSaddled()
```

**Returns:** `boolean`

### isSaddleable

```java
public boolean isSaddleable()
```

**Returns:** `boolean`

### equipSaddle

```java
public void equipSaddle(ItemStack p_352201_, SoundSource p_33878_)
```

**Parameters:**

- `p_352201_` (`ItemStack`)
- `p_33878_` (`SoundSource`)

### registerGoals

```java
protected void registerGoals()
```

### setSuffocating

```java
public void setSuffocating(boolean p_33952_)
```

**Parameters:**

- `p_33952_` (`boolean`)

**Returns:** `public void`

### isSuffocating

```java
public boolean isSuffocating()
```

**Returns:** `public boolean`

### canStandOnFluid

```java
public boolean canStandOnFluid(FluidState p_204067_)
```

**Parameters:**

- `p_204067_` (`FluidState`)

**Returns:** `boolean`

### getPassengerAttachmentPoint

```java
protected Vec3 getPassengerAttachmentPoint(Entity p_294748_, EntityDimensions p_295089_, float p_295230_)
```

**Parameters:**

- `p_294748_` (`Entity`)
- `p_295089_` (`EntityDimensions`)
- `p_295230_` (`float`)

**Returns:** `Vec3`

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_33880_)
```

**Parameters:**

- `p_33880_` (`LevelReader`)

**Returns:** `boolean`

### getControllingPassenger

```java
public LivingEntity getControllingPassenger()
```

**Returns:** `LivingEntity`

### getDismountLocationForPassenger

```java
public Vec3 getDismountLocationForPassenger(LivingEntity p_33908_)
```

**Parameters:**

- `p_33908_` (`LivingEntity`)

**Returns:** `Vec3`

### tickRidden

```java
protected void tickRidden(Player p_278331_, Vec3 p_278234_)
```

**Parameters:**

- `p_278331_` (`Player`)
- `p_278234_` (`Vec3`)

### getRiddenInput

```java
protected Vec3 getRiddenInput(Player p_278251_, Vec3 p_275578_)
```

**Parameters:**

- `p_278251_` (`Player`)
- `p_275578_` (`Vec3`)

**Returns:** `Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### getRiddenSpeed

```java
protected float getRiddenSpeed(Player p_278317_)
```

**Parameters:**

- `p_278317_` (`Player`)

**Returns:** `float`

### nextStep

```java
protected float nextStep()
```

**Returns:** `float`

### playStepSound

```java
protected void playStepSound(BlockPos p_33915_, BlockState p_33916_)
```

**Parameters:**

- `p_33915_` (`BlockPos`)
- `p_33916_` (`BlockState`)

### boost

```java
public boolean boost()
```

**Returns:** `boolean`

### checkFallDamage

```java
protected void checkFallDamage(double p_33870_, boolean p_33871_, BlockState p_33872_, BlockPos p_33873_)
```

**Parameters:**

- `p_33870_` (`double`)
- `p_33871_` (`boolean`)
- `p_33872_` (`BlockState`)
- `p_33873_` (`BlockPos`)

### tick

```java
public void tick()
```

### isBeingTempted

```java
private boolean isBeingTempted()
```

**Returns:** `private boolean`

### shouldPassengersInheritMalus

```java
protected boolean shouldPassengersInheritMalus()
```

**Returns:** `boolean`

### floatStrider

```java
private void floatStrider()
```

**Returns:** `private void`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33934_)
```

**Parameters:**

- `p_33934_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### canAddPassenger

```java
protected boolean canAddPassenger(Entity p_33950_)
```

**Parameters:**

- `p_33950_` (`Entity`)

**Returns:** `boolean`

### isSensitiveToWater

```java
public boolean isSensitiveToWater()
```

**Returns:** `boolean`

### isOnFire

```java
public boolean isOnFire()
```

**Returns:** `boolean`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_33913_)
```

**Parameters:**

- `p_33913_` (`Level`)

**Returns:** `PathNavigation`

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_33895_, LevelReader p_33896_)
```

**Parameters:**

- `p_33895_` (`BlockPos`)
- `p_33896_` (`LevelReader`)

**Returns:** `float`

### getBreedOffspring

```java
public Strider getBreedOffspring(ServerLevel p_149861_, AgeableMob p_149862_)
```

**Parameters:**

- `p_149861_` (`ServerLevel`)
- `p_149862_` (`AgeableMob`)

**Returns:** `Strider`

### isFood

```java
public boolean isFood(ItemStack p_33946_)
```

**Parameters:**

- `p_33946_` (`ItemStack`)

**Returns:** `boolean`

### dropEquipment

```java
protected void dropEquipment()
```

### mobInteract

```java
public InteractionResult mobInteract(Player p_33910_, InteractionHand p_33911_)
```

**Parameters:**

- `p_33910_` (`Player`)
- `p_33911_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_33887_, DifficultyInstance p_33888_, MobSpawnType p_33889_, SpawnGroupData p_33890_)
```

**Parameters:**

- `p_33887_` (`ServerLevelAccessor`)
- `p_33888_` (`DifficultyInstance`)
- `p_33889_` (`MobSpawnType`)
- `p_33890_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### spawnJockey

```java
private SpawnGroupData spawnJockey(ServerLevelAccessor p_33882_, DifficultyInstance p_33883_, Mob p_33884_, SpawnGroupData p_33885_)
```

**Parameters:**

- `p_33882_` (`ServerLevelAccessor`)
- `p_33883_` (`DifficultyInstance`)
- `p_33884_` (`Mob`)
- `p_33885_` (`SpawnGroupData`)

**Returns:** `private SpawnGroupData`

### StriderGoToLavaGoal

```java
 StriderGoToLavaGoal(Strider p_33955_, double p_33956_)
```

**Parameters:**

- `p_33955_` (`Strider`)
- `p_33956_` (`double`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getMoveToTarget

```java
public BlockPos getMoveToTarget()
```

**Returns:** `BlockPos`

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

### shouldRecalculatePath

```java
public boolean shouldRecalculatePath()
```

**Returns:** `boolean`

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_33963_, BlockPos p_33964_)
```

**Parameters:**

- `p_33963_` (`LevelReader`)
- `p_33964_` (`BlockPos`)

**Returns:** `boolean`

### StriderPathNavigation

```java
 StriderPathNavigation(Strider p_33969_, Level p_33970_)
```

**Parameters:**

- `p_33969_` (`Strider`)
- `p_33970_` (`Level`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### createPathFinder

```java
protected PathFinder createPathFinder(int p_33972_)
```

**Parameters:**

- `p_33972_` (`int`)

**Returns:** `PathFinder`

### PathFinder

```java
return new PathFinder()
```

**Returns:** `return new`

### hasValidPathType

```java
protected boolean hasValidPathType(PathType p_326840_)
```

**Parameters:**

- `p_326840_` (`PathType`)

**Returns:** `boolean`

### isStableDestination

```java
public boolean isStableDestination(BlockPos p_33976_)
```

**Parameters:**

- `p_33976_` (`BlockPos`)

**Returns:** `boolean`
