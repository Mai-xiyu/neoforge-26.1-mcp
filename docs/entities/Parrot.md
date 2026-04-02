# Parrot

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `ShoulderRidingEntity`
**Implements:** `VariantHolder<Parrot.Variant>`, `FlyingAnimal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `flap` | `float` |  |
| `flapSpeed` | `float` |  |
| `oFlapSpeed` | `float` |  |
| `oFlap` | `float` |  |

## Methods

### test

```java
public boolean test(Mob p_29453_)
```

**Parameters:**

- `p_29453_` (`Mob`)

**Returns:** `public boolean`

### Parrot

```java
public Parrot(EntityType<? extends Parrot> p_29362_, Level p_29363_)
```

**Parameters:**

- `p_29362_` (`EntityType<? extends Parrot>`)
- `p_29363_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_29389_, DifficultyInstance p_29390_, MobSpawnType p_29391_, SpawnGroupData p_29392_)
```

**Parameters:**

- `p_29389_` (`ServerLevelAccessor`)
- `p_29390_` (`DifficultyInstance`)
- `p_29391_` (`MobSpawnType`)
- `p_29392_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### isBaby

```java
public boolean isBaby()
```

**Returns:** `boolean`

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_29417_)
```

**Parameters:**

- `p_29417_` (`Level`)

**Returns:** `PathNavigation`

### aiStep

```java
public void aiStep()
```

### setRecordPlayingNearby

```java
public void setRecordPlayingNearby(BlockPos p_29395_, boolean p_29396_)
```

**Parameters:**

- `p_29395_` (`BlockPos`)
- `p_29396_` (`boolean`)

### isPartyParrot

```java
public boolean isPartyParrot()
```

**Returns:** `public boolean`

### calculateFlapping

```java
private void calculateFlapping()
```

**Returns:** `private void`

### imitateNearbyMobs

```java
public static boolean imitateNearbyMobs(Level p_29383_, Entity p_29384_)
```

**Parameters:**

- `p_29383_` (`Level`)
- `p_29384_` (`Entity`)

**Returns:** `public static boolean`

### mobInteract

```java
public InteractionResult mobInteract(Player p_29414_, InteractionHand p_29415_)
```

**Parameters:**

- `p_29414_` (`Player`)
- `p_29415_` (`InteractionHand`)

**Returns:** `InteractionResult`

### isFood

```java
public boolean isFood(ItemStack p_29446_)
```

**Parameters:**

- `p_29446_` (`ItemStack`)

**Returns:** `boolean`

### checkParrotSpawnRules

```java
public static boolean checkParrotSpawnRules(EntityType<Parrot> p_218242_, LevelAccessor p_218243_, MobSpawnType p_218244_, BlockPos p_218245_, RandomSource p_218246_)
```

**Parameters:**

- `p_218242_` (`EntityType<Parrot>`)
- `p_218243_` (`LevelAccessor`)
- `p_218244_` (`MobSpawnType`)
- `p_218245_` (`BlockPos`)
- `p_218246_` (`RandomSource`)

**Returns:** `public static boolean`

### checkFallDamage

```java
protected void checkFallDamage(double p_29370_, boolean p_29371_, BlockState p_29372_, BlockPos p_29373_)
```

**Parameters:**

- `p_29370_` (`double`)
- `p_29371_` (`boolean`)
- `p_29372_` (`BlockState`)
- `p_29373_` (`BlockPos`)

### canMate

```java
public boolean canMate(Animal p_29381_)
```

**Parameters:**

- `p_29381_` (`Animal`)

**Returns:** `boolean`

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_148993_, AgeableMob p_148994_)
```

**Parameters:**

- `p_148993_` (`ServerLevel`)
- `p_148994_` (`AgeableMob`)

**Returns:** `AgeableMob`

### getAmbientSound

```java
public SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getAmbient

```java
public static SoundEvent getAmbient(Level p_218239_, RandomSource p_218240_)
```

**Parameters:**

- `p_218239_` (`Level`)
- `p_218240_` (`RandomSource`)

**Returns:** `public static SoundEvent`

### getImitatedSound

```java
private static SoundEvent getImitatedSound(EntityType<?> p_29409_)
```

**Parameters:**

- `p_29409_` (`EntityType<?>`)

**Returns:** `private static SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29437_)
```

**Parameters:**

- `p_29437_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_29419_, BlockState p_29420_)
```

**Parameters:**

- `p_29419_` (`BlockPos`)
- `p_29420_` (`BlockState`)

### isFlapping

```java
protected boolean isFlapping()
```

**Returns:** `boolean`

### onFlap

```java
protected void onFlap()
```

### getVoicePitch

```java
public float getVoicePitch()
```

**Returns:** `float`

### getPitch

```java
return getPitch()
```

**Returns:** `return`

### getPitch

```java
public static float getPitch(RandomSource p_218237_)
```

**Parameters:**

- `p_218237_` (`RandomSource`)

**Returns:** `public static float`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### isPushable

```java
public boolean isPushable()
```

**Returns:** `boolean`

### doPush

```java
protected void doPush(Entity p_29367_)
```

**Parameters:**

- `p_29367_` (`Entity`)

### hurt

```java
public boolean hurt(DamageSource p_29378_, float p_29379_)
```

**Parameters:**

- `p_29378_` (`DamageSource`)
- `p_29379_` (`float`)

**Returns:** `boolean`

### getVariant

```java
public Parrot.Variant getVariant()
```

**Returns:** `public Parrot.Variant`

### setVariant

```java
public void setVariant(Parrot.Variant p_262613_)
```

**Parameters:**

- `p_262613_` (`Parrot.Variant`)

**Returns:** `public void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326347_)
```

**Parameters:**

- `p_326347_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29422_)
```

**Parameters:**

- `p_29422_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29402_)
```

**Parameters:**

- `p_29402_` (`CompoundTag`)

### isFlying

```java
public boolean isFlying()
```

**Returns:** `boolean`

### canFlyToOwner

```java
protected boolean canFlyToOwner()
```

**Returns:** `boolean`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### ParrotWanderGoal

```java
public ParrotWanderGoal(PathfinderMob p_186224_, double p_186225_)
```

**Parameters:**

- `p_186224_` (`PathfinderMob`)
- `p_186225_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getPosition

```java
protected Vec3 getPosition()
```

**Returns:** `Vec3`

### GRAY

```java
, GRAY()
```

**Returns:** `,`

### Variant

```java
private Variant(int p_262571_, String p_262693_)
```

**Parameters:**

- `p_262571_` (`int`)
- `p_262693_` (`String`)

**Returns:** `private`

### getId

```java
public int getId()
```

**Returns:** `public int`

### byId

```java
public static Parrot.Variant byId(int p_262643_)
```

**Parameters:**

- `p_262643_` (`int`)

**Returns:** `public static Parrot.Variant`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Variant` | enum |  |
