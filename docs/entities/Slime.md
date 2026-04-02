# Slime

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Mob`
**Implements:** `Enemy`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MIN_SIZE` | `int` |  |
| `MAX_SIZE` | `int` |  |
| `MAX_NATURAL_SIZE` | `int` |  |
| `targetSquish` | `float` |  |
| `squish` | `float` |  |
| `oSquish` | `float` |  |

## Methods

### Slime

```java
public Slime(EntityType<? extends Slime> p_33588_, Level p_33589_)
```

**Parameters:**

- `p_33588_` (`EntityType<? extends Slime>`)
- `p_33589_` (`Level`)

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

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326431_)
```

**Parameters:**

- `p_326431_` (`SynchedEntityData.Builder`)

### setSize

```java
public void setSize(int p_33594_, boolean p_33595_)
```

**Parameters:**

- `p_33594_` (`int`)
- `p_33595_` (`boolean`)

### getSize

```java
public int getSize()
```

**Returns:** `public int`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_33619_)
```

**Parameters:**

- `p_33619_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_33607_)
```

**Parameters:**

- `p_33607_` (`CompoundTag`)

### isTiny

```java
public boolean isTiny()
```

**Returns:** `public boolean`

### getParticleType

```java
protected ParticleOptions getParticleType()
```

**Returns:** `protected ParticleOptions`

### shouldDespawnInPeaceful

```java
protected boolean shouldDespawnInPeaceful()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### decreaseSquish

```java
protected void decreaseSquish()
```

**Returns:** `protected void`

### getJumpDelay

```java
protected int getJumpDelay()
```

**Returns:** `protected int`

### refreshDimensions

```java
public void refreshDimensions()
```

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_33609_)
```

**Parameters:**

- `p_33609_` (`EntityDataAccessor<?>`)

### getType

```java
public EntityType<? extends Slime> getType()
```

**Returns:** `EntityType<? extends Slime>`

### remove

```java
public void remove(Entity.RemovalReason p_149847_)
```

**Parameters:**

- `p_149847_` (`Entity.RemovalReason`)

### push

```java
public void push(Entity p_33636_)
```

**Parameters:**

- `p_33636_` (`Entity`)

### playerTouch

```java
public void playerTouch(Player p_33611_)
```

**Parameters:**

- `p_33611_` (`Player`)

### dealDamage

```java
protected void dealDamage(LivingEntity p_33638_)
```

**Parameters:**

- `p_33638_` (`LivingEntity`)

**Returns:** `protected void`

### getPassengerAttachmentPoint

```java
protected Vec3 getPassengerAttachmentPoint(Entity p_296103_, EntityDimensions p_295741_, float p_295572_)
```

**Parameters:**

- `p_296103_` (`Entity`)
- `p_295741_` (`EntityDimensions`)
- `p_295572_` (`float`)

**Returns:** `Vec3`

### isDealsDamage

```java
protected boolean isDealsDamage()
```

**Returns:** `protected boolean`

### getAttackDamage

```java
protected float getAttackDamage()
```

**Returns:** `protected float`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33631_)
```

**Parameters:**

- `p_33631_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSquishSound

```java
protected SoundEvent getSquishSound()
```

**Returns:** `protected SoundEvent`

### checkSlimeSpawnRules

```java
public static boolean checkSlimeSpawnRules(EntityType<Slime> p_219113_, LevelAccessor p_219114_, MobSpawnType p_219115_, BlockPos p_219116_, RandomSource p_219117_)
```

**Parameters:**

- `p_219113_` (`EntityType<Slime>`)
- `p_219114_` (`LevelAccessor`)
- `p_219115_` (`MobSpawnType`)
- `p_219116_` (`BlockPos`)
- `p_219117_` (`RandomSource`)

**Returns:** `public static boolean`

### checkMobSpawnRules

```java
return checkMobSpawnRules()
```

**Returns:** `return`

### checkMobSpawnRules

```java
return checkMobSpawnRules()
```

**Returns:** `return`

### checkMobSpawnRules

```java
return checkMobSpawnRules()
```

**Returns:** `return`

### checkMobSpawnRules

```java
return checkMobSpawnRules()
```

**Returns:** `return`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### getMaxHeadXRot

```java
public int getMaxHeadXRot()
```

**Returns:** `int`

### doPlayJumpSound

```java
protected boolean doPlayJumpSound()
```

**Returns:** `protected boolean`

### jumpFromGround

```java
public void jumpFromGround()
```

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_33601_, DifficultyInstance p_33602_, MobSpawnType p_33603_, SpawnGroupData p_33604_)
```

**Parameters:**

- `p_33601_` (`ServerLevelAccessor`)
- `p_33602_` (`DifficultyInstance`)
- `p_33603_` (`MobSpawnType`)
- `p_33604_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getSoundPitch

```java
float getSoundPitch()
```

**Returns:** `float`

### getJumpSound

```java
protected SoundEvent getJumpSound()
```

**Returns:** `protected SoundEvent`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316359_)
```

**Parameters:**

- `p_316359_` (`Pose`)

**Returns:** `EntityDimensions`

### spawnCustomParticles

```java
protected boolean spawnCustomParticles()
```

**Returns:** `boolean`

### SlimeAttackGoal

```java
public SlimeAttackGoal(Slime p_33648_)
```

**Parameters:**

- `p_33648_` (`Slime`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### SlimeFloatGoal

```java
public SlimeFloatGoal(Slime p_33655_)
```

**Parameters:**

- `p_33655_` (`Slime`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### SlimeKeepOnJumpingGoal

```java
public SlimeKeepOnJumpingGoal(Slime p_33660_)
```

**Parameters:**

- `p_33660_` (`Slime`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### SlimeMoveControl

```java
public SlimeMoveControl(Slime p_33668_)
```

**Parameters:**

- `p_33668_` (`Slime`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setDirection

```java
public void setDirection(float p_33673_, boolean p_33674_)
```

**Parameters:**

- `p_33673_` (`float`)
- `p_33674_` (`boolean`)

**Returns:** `public void`

### setWantedMovement

```java
public void setWantedMovement(double p_33671_)
```

**Parameters:**

- `p_33671_` (`double`)

**Returns:** `public void`

### tick

```java
public void tick()
```

### SlimeRandomDirectionGoal

```java
public SlimeRandomDirectionGoal(Slime p_33679_)
```

**Parameters:**

- `p_33679_` (`Slime`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```
