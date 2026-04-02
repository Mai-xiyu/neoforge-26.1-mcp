# Phantom

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `FlyingMob`
**Implements:** `Enemy`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLAP_DEGREES_PER_TICK` | `float` |  |
| `TICKS_PER_FLAP` | `int` |  |

## Methods

### Phantom

```java
public Phantom(EntityType<? extends Phantom> p_33101_, Level p_33102_)
```

**Parameters:**

- `p_33101_` (`EntityType<? extends Phantom>`)
- `p_33102_` (`Level`)

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

### createBodyControl

```java
protected BodyRotationControl createBodyControl()
```

**Returns:** `BodyRotationControl`

### registerGoals

```java
protected void registerGoals()
```

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326421_)
```

**Parameters:**

- `p_326421_` (`SynchedEntityData.Builder`)

### setPhantomSize

```java
public void setPhantomSize(int p_33109_)
```

**Parameters:**

- `p_33109_` (`int`)

**Returns:** `public void`

### updatePhantomSizeInfo

```java
private void updatePhantomSizeInfo()
```

**Returns:** `private void`

### getPhantomSize

```java
public int getPhantomSize()
```

**Returns:** `public int`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_33134_)
```

**Parameters:**

- `p_33134_` (`EntityDataAccessor<?>`)

### getUniqueFlapTickOffset

```java
public int getUniqueFlapTickOffset()
```

**Returns:** `public int`

### shouldDespawnInPeaceful

```java
protected boolean shouldDespawnInPeaceful()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### aiStep

```java
public void aiStep()
```

### customServerAiStep

```java
protected void customServerAiStep()
```

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_33126_, DifficultyInstance p_33127_, MobSpawnType p_33128_, SpawnGroupData p_33129_)
```

**Parameters:**

- `p_33126_` (`ServerLevelAccessor`)
- `p_33127_` (`DifficultyInstance`)
- `p_33128_` (`MobSpawnType`)
- `p_33129_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_33132_)
```

**Parameters:**

- `p_33132_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_33141_)
```

**Parameters:**

- `p_33141_` (`CompoundTag`)

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_33107_)
```

**Parameters:**

- `p_33107_` (`double`)

**Returns:** `boolean`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33152_)
```

**Parameters:**

- `p_33152_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### canAttackType

```java
public boolean canAttackType(EntityType<?> p_33111_)
```

**Parameters:**

- `p_33111_` (`EntityType<?>`)

**Returns:** `boolean`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316501_)
```

**Parameters:**

- `p_316501_` (`Pose`)

**Returns:** `EntityDimensions`

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

### tick

```java
public void tick()
```

### setAnchorAboveTarget

```java
private void setAnchorAboveTarget()
```

**Returns:** `private void`

### PhantomBodyRotationControl

```java
public PhantomBodyRotationControl(Mob p_33216_)
```

**Parameters:**

- `p_33216_` (`Mob`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### clientTick

```java
public void clientTick()
```

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### tick

```java
public void tick()
```

### selectNext

```java
private void selectNext()
```

**Returns:** `private void`

### PhantomLookControl

```java
public PhantomLookControl(Mob p_33235_)
```

**Parameters:**

- `p_33235_` (`Mob`)

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

### PhantomMoveControl

```java
public PhantomMoveControl(Mob p_33241_)
```

**Parameters:**

- `p_33241_` (`Mob`)

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

### PhantomMoveTargetGoal

```java
public PhantomMoveTargetGoal()
```

**Returns:** `public`

### touchingTarget

```java
protected boolean touchingTarget()
```

**Returns:** `protected boolean`

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

### tick

```java
public void tick()
```
