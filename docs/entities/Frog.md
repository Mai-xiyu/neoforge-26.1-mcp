# Frog

**Package:** `net.minecraft.world.entity.animal.frog`
**Type:** class
**Extends:** `Animal`
**Implements:** `VariantHolder<Holder<FrogVariant>>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SENSOR_TYPES` | `ImmutableList<SensorType<? extends Sensor<? super Frog>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<MemoryModuleType<?>>` |  |
| `VARIANT_KEY` | `String` |  |
| `jumpAnimationState` | `AnimationState` |  |
| `croakAnimationState` | `AnimationState` |  |
| `tongueAnimationState` | `AnimationState` |  |
| `swimIdleAnimationState` | `AnimationState` |  |

## Methods

### Frog

```java
public Frog(EntityType<? extends Animal> p_218470_, Level p_218471_)
```

**Parameters:**

- `p_218470_` (`EntityType<? extends Animal>`)
- `p_218471_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### brainProvider

```java
protected Brain.Provider<Frog> brainProvider()
```

**Returns:** `Brain.Provider<Frog>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_218494_)
```

**Parameters:**

- `p_218494_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Frog> getBrain()
```

**Returns:** `Brain<Frog>`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326194_)
```

**Parameters:**

- `p_326194_` (`SynchedEntityData.Builder`)

### eraseTongueTarget

```java
public void eraseTongueTarget()
```

**Returns:** `public void`

### getTongueTarget

```java
public Optional<Entity> getTongueTarget()
```

**Returns:** `public Optional<Entity>`

### setTongueTarget

```java
public void setTongueTarget(Entity p_218482_)
```

**Parameters:**

- `p_218482_` (`Entity`)

**Returns:** `public void`

### getHeadRotSpeed

```java
public int getHeadRotSpeed()
```

**Returns:** `int`

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### getVariant

```java
public Holder<FrogVariant> getVariant()
```

**Returns:** `public Holder<FrogVariant>`

### setVariant

```java
public void setVariant(Holder<FrogVariant> p_336047_)
```

**Parameters:**

- `p_336047_` (`Holder<FrogVariant>`)

**Returns:** `public void`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_218508_)
```

**Parameters:**

- `p_218508_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_218496_)
```

**Parameters:**

- `p_218496_` (`CompoundTag`)

### customServerAiStep

```java
protected void customServerAiStep()
```

### tick

```java
public void tick()
```

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_218498_)
```

**Parameters:**

- `p_218498_` (`EntityDataAccessor<?>`)

### updateWalkAnimation

```java
protected void updateWalkAnimation(float p_268239_)
```

**Parameters:**

- `p_268239_` (`float`)

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_218476_, AgeableMob p_218477_)
```

**Parameters:**

- `p_218476_` (`ServerLevel`)
- `p_218477_` (`AgeableMob`)

**Returns:** `AgeableMob`

### isBaby

```java
public boolean isBaby()
```

**Returns:** `boolean`

### setBaby

```java
public void setBaby(boolean p_218500_)
```

**Parameters:**

- `p_218500_` (`boolean`)

### spawnChildFromBreeding

```java
public void spawnChildFromBreeding(ServerLevel p_218479_, Animal p_218480_)
```

**Parameters:**

- `p_218479_` (`ServerLevel`)
- `p_218480_` (`Animal`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_218488_, DifficultyInstance p_218489_, MobSpawnType p_218490_, SpawnGroupData p_218491_)
```

**Parameters:**

- `p_218488_` (`ServerLevelAccessor`)
- `p_218489_` (`DifficultyInstance`)
- `p_218490_` (`MobSpawnType`)
- `p_218491_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

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
protected SoundEvent getHurtSound(DamageSource p_218510_)
```

**Parameters:**

- `p_218510_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_218505_, BlockState p_218506_)
```

**Parameters:**

- `p_218505_` (`BlockPos`)
- `p_218506_` (`BlockState`)

### isPushedByFluid

```java
public boolean isPushedByFluid()
```

**Returns:** `boolean`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### calculateFallDamage

```java
protected int calculateFallDamage(float p_218519_, float p_218520_)
```

**Parameters:**

- `p_218519_` (`float`)
- `p_218520_` (`float`)

**Returns:** `int`

### travel

```java
public void travel(Vec3 p_218530_)
```

**Parameters:**

- `p_218530_` (`Vec3`)

### canEat

```java
public static boolean canEat(LivingEntity p_218533_)
```

**Parameters:**

- `p_218533_` (`LivingEntity`)

**Returns:** `public static boolean`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_218486_)
```

**Parameters:**

- `p_218486_` (`Level`)

**Returns:** `PathNavigation`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`

### isFood

```java
public boolean isFood(ItemStack p_218535_)
```

**Parameters:**

- `p_218535_` (`ItemStack`)

**Returns:** `boolean`

### checkFrogSpawnRules

```java
public static boolean checkFrogSpawnRules(EntityType<? extends Animal> p_218512_, LevelAccessor p_218513_, MobSpawnType p_218514_, BlockPos p_218515_, RandomSource p_218516_)
```

**Parameters:**

- `p_218512_` (`EntityType<? extends Animal>`)
- `p_218513_` (`LevelAccessor`)
- `p_218514_` (`MobSpawnType`)
- `p_218515_` (`BlockPos`)
- `p_218516_` (`RandomSource`)

**Returns:** `public static boolean`

### FrogLookControl

```java
 FrogLookControl(Mob p_218544_)
```

**Parameters:**

- `p_218544_` (`Mob`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### resetXRotOnTick

```java
protected boolean resetXRotOnTick()
```

**Returns:** `boolean`

### FrogNodeEvaluator

```java
public FrogNodeEvaluator(boolean p_218548_)
```

**Parameters:**

- `p_218548_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStart

```java
public Node getStart()
```

**Returns:** `Node`

### getPathType

```java
public PathType getPathType(PathfindingContext p_331446_, int p_326799_, int p_326899_, int p_326891_)
```

**Parameters:**

- `p_331446_` (`PathfindingContext`)
- `p_326799_` (`int`)
- `p_326899_` (`int`)
- `p_326891_` (`int`)

**Returns:** `PathType`

### FrogPathNavigation

```java
 FrogPathNavigation(Frog p_218556_, Level p_218557_)
```

**Parameters:**

- `p_218556_` (`Frog`)
- `p_218557_` (`Level`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### canCutCorner

```java
public boolean canCutCorner(PathType p_326951_)
```

**Parameters:**

- `p_326951_` (`PathType`)

**Returns:** `boolean`

### createPathFinder

```java
protected PathFinder createPathFinder(int p_218559_)
```

**Parameters:**

- `p_218559_` (`int`)

**Returns:** `PathFinder`

### PathFinder

```java
return new PathFinder()
```

**Returns:** `return new`
