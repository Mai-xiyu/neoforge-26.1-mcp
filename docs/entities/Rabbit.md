# Rabbit

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`
**Implements:** `VariantHolder<Rabbit.Variant>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STROLL_SPEED_MOD` | `double` |  |
| `BREED_SPEED_MOD` | `double` |  |
| `FOLLOW_SPEED_MOD` | `double` |  |
| `FLEE_SPEED_MOD` | `double` |  |
| `ATTACK_SPEED_MOD` | `double` |  |

## Methods

### Rabbit

```java
public Rabbit(EntityType<? extends Rabbit> p_29656_, Level p_29657_)
```

**Parameters:**

- `p_29656_` (`EntityType<? extends Rabbit>`)
- `p_29657_` (`Level`)

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

### getJumpPower

```java
protected float getJumpPower()
```

**Returns:** `float`

### jumpFromGround

```java
public void jumpFromGround()
```

### getJumpCompletion

```java
public float getJumpCompletion(float p_29736_)
```

**Parameters:**

- `p_29736_` (`float`)

**Returns:** `public float`

### setSpeedModifier

```java
public void setSpeedModifier(double p_29726_)
```

**Parameters:**

- `p_29726_` (`double`)

**Returns:** `public void`

### setJumping

```java
public void setJumping(boolean p_29732_)
```

**Parameters:**

- `p_29732_` (`boolean`)

### startJumping

```java
public void startJumping()
```

**Returns:** `public void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326475_)
```

**Parameters:**

- `p_326475_` (`SynchedEntityData.Builder`)

### customServerAiStep

```java
public void customServerAiStep()
```

### canSpawnSprintParticle

```java
public boolean canSpawnSprintParticle()
```

**Returns:** `boolean`

### facePoint

```java
private void facePoint(double p_29687_, double p_29688_)
```

**Parameters:**

- `p_29687_` (`double`)
- `p_29688_` (`double`)

**Returns:** `private void`

### enableJumpControl

```java
private void enableJumpControl()
```

**Returns:** `private void`

### disableJumpControl

```java
private void disableJumpControl()
```

**Returns:** `private void`

### setLandingDelay

```java
private void setLandingDelay()
```

**Returns:** `private void`

### checkLandingDelay

```java
private void checkLandingDelay()
```

**Returns:** `private void`

### aiStep

```java
public void aiStep()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29697_)
```

**Parameters:**

- `p_29697_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29684_)
```

**Parameters:**

- `p_29684_` (`CompoundTag`)

### getJumpSound

```java
protected SoundEvent getJumpSound()
```

**Returns:** `protected SoundEvent`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29715_)
```

**Parameters:**

- `p_29715_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playAttackSound

```java
public void playAttackSound()
```

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getBreedOffspring

```java
public Rabbit getBreedOffspring(ServerLevel p_149035_, AgeableMob p_149036_)
```

**Parameters:**

- `p_149035_` (`ServerLevel`)
- `p_149036_` (`AgeableMob`)

**Returns:** `Rabbit`

### isFood

```java
public boolean isFood(ItemStack p_29729_)
```

**Parameters:**

- `p_29729_` (`ItemStack`)

**Returns:** `boolean`

### getVariant

```java
public Rabbit.Variant getVariant()
```

**Returns:** `public Rabbit.Variant`

### setVariant

```java
public void setVariant(Rabbit.Variant p_262578_)
```

**Parameters:**

- `p_262578_` (`Rabbit.Variant`)

**Returns:** `public void`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_29678_, DifficultyInstance p_29679_, MobSpawnType p_29680_, SpawnGroupData p_29681_)
```

**Parameters:**

- `p_29678_` (`ServerLevelAccessor`)
- `p_29679_` (`DifficultyInstance`)
- `p_29680_` (`MobSpawnType`)
- `p_29681_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getRandomRabbitVariant

```java
private static Rabbit.Variant getRandomRabbitVariant(LevelAccessor p_262699_, BlockPos p_262700_)
```

**Parameters:**

- `p_262699_` (`LevelAccessor`)
- `p_262700_` (`BlockPos`)

**Returns:** `private static Rabbit.Variant`

### checkRabbitSpawnRules

```java
public static boolean checkRabbitSpawnRules(EntityType<Rabbit> p_218256_, LevelAccessor p_218257_, MobSpawnType p_218258_, BlockPos p_218259_, RandomSource p_218260_)
```

**Parameters:**

- `p_218256_` (`EntityType<Rabbit>`)
- `p_218257_` (`LevelAccessor`)
- `p_218258_` (`MobSpawnType`)
- `p_218259_` (`BlockPos`)
- `p_218260_` (`RandomSource`)

**Returns:** `public static boolean`

### wantsMoreFood

```java
boolean wantsMoreFood()
```

**Returns:** `boolean`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_29663_)
```

**Parameters:**

- `p_29663_` (`byte`)

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### RabbitAvoidEntityGoal

```java
public RabbitAvoidEntityGoal(Rabbit p_29743_, Class<T> p_29744_, float p_29745_, double p_29746_, double p_29747_)
```

**Parameters:**

- `p_29743_` (`Rabbit`)
- `p_29744_` (`Class<T>`)
- `p_29745_` (`float`)
- `p_29746_` (`double`)
- `p_29747_` (`double`)

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

### RabbitGroupData

```java
public RabbitGroupData(Rabbit.Variant p_262662_)
```

**Parameters:**

- `p_262662_` (`Rabbit.Variant`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RabbitJumpControl

```java
public RabbitJumpControl(Rabbit p_186229_)
```

**Parameters:**

- `p_186229_` (`Rabbit`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### wantJump

```java
public boolean wantJump()
```

**Returns:** `public boolean`

### canJump

```java
public boolean canJump()
```

**Returns:** `public boolean`

### setCanJump

```java
public void setCanJump(boolean p_29759_)
```

**Parameters:**

- `p_29759_` (`boolean`)

**Returns:** `public void`

### tick

```java
public void tick()
```

### RabbitMoveControl

```java
public RabbitMoveControl(Rabbit p_29766_)
```

**Parameters:**

- `p_29766_` (`Rabbit`)

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

### setWantedPosition

```java
public void setWantedPosition(double p_29769_, double p_29770_, double p_29771_, double p_29772_)
```

**Parameters:**

- `p_29769_` (`double`)
- `p_29770_` (`double`)
- `p_29771_` (`double`)
- `p_29772_` (`double`)

### RabbitPanicGoal

```java
public RabbitPanicGoal(Rabbit p_29775_, double p_29776_)
```

**Parameters:**

- `p_29775_` (`Rabbit`)
- `p_29776_` (`double`)

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

### RaidGardenGoal

```java
public RaidGardenGoal(Rabbit p_29782_)
```

**Parameters:**

- `p_29782_` (`Rabbit`)

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

### tick

```java
public void tick()
```

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_29785_, BlockPos p_29786_)
```

**Parameters:**

- `p_29785_` (`LevelReader`)
- `p_29786_` (`BlockPos`)

**Returns:** `boolean`

### EVIL

```java
, EVIL()
```

**Returns:** `,`

### Variant

```java
private Variant(int p_262657_, String p_262679_)
```

**Parameters:**

- `p_262657_` (`int`)
- `p_262679_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### id

```java
public int id()
```

**Returns:** `public int`

### byId

```java
public static Rabbit.Variant byId(int p_262665_)
```

**Parameters:**

- `p_262665_` (`int`)

**Returns:** `public static Rabbit.Variant`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RabbitGroupData` | class |  |
| `RabbitJumpControl` | class |  |
| `Variant` | enum |  |
