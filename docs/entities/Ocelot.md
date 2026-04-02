# Ocelot

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CROUCH_SPEED_MOD` | `double` |  |
| `WALK_SPEED_MOD` | `double` |  |
| `SPRINT_SPEED_MOD` | `double` |  |

## Methods

### Ocelot

```java
public Ocelot(EntityType<? extends Ocelot> p_28987_, Level p_28988_)
```

**Parameters:**

- `p_28987_` (`EntityType<? extends Ocelot>`)
- `p_28988_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isTrusting

```java
boolean isTrusting()
```

**Returns:** `boolean`

### setTrusting

```java
private void setTrusting(boolean p_29046_)
```

**Parameters:**

- `p_29046_` (`boolean`)

**Returns:** `private void`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29024_)
```

**Parameters:**

- `p_29024_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29013_)
```

**Parameters:**

- `p_29013_` (`CompoundTag`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326220_)
```

**Parameters:**

- `p_326220_` (`SynchedEntityData.Builder`)

### registerGoals

```java
protected void registerGoals()
```

### customServerAiStep

```java
public void customServerAiStep()
```

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_29041_)
```

**Parameters:**

- `p_29041_` (`double`)

**Returns:** `boolean`

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

### getAmbientSoundInterval

```java
public int getAmbientSoundInterval()
```

**Returns:** `int`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29035_)
```

**Parameters:**

- `p_29035_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### mobInteract

```java
public InteractionResult mobInteract(Player p_29021_, InteractionHand p_29022_)
```

**Parameters:**

- `p_29021_` (`Player`)
- `p_29022_` (`InteractionHand`)

**Returns:** `InteractionResult`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_28995_)
```

**Parameters:**

- `p_28995_` (`byte`)

### spawnTrustingParticles

```java
private void spawnTrustingParticles(boolean p_29048_)
```

**Parameters:**

- `p_29048_` (`boolean`)

**Returns:** `private void`

### reassessTrustingGoals

```java
protected void reassessTrustingGoals()
```

**Returns:** `protected void`

### getBreedOffspring

```java
public Ocelot getBreedOffspring(ServerLevel p_148956_, AgeableMob p_148957_)
```

**Parameters:**

- `p_148956_` (`ServerLevel`)
- `p_148957_` (`AgeableMob`)

**Returns:** `Ocelot`

### isFood

```java
public boolean isFood(ItemStack p_29043_)
```

**Parameters:**

- `p_29043_` (`ItemStack`)

**Returns:** `boolean`

### checkOcelotSpawnRules

```java
public static boolean checkOcelotSpawnRules(EntityType<Ocelot> p_218207_, LevelAccessor p_218208_, MobSpawnType p_218209_, BlockPos p_218210_, RandomSource p_218211_)
```

**Parameters:**

- `p_218207_` (`EntityType<Ocelot>`)
- `p_218208_` (`LevelAccessor`)
- `p_218209_` (`MobSpawnType`)
- `p_218210_` (`BlockPos`)
- `p_218211_` (`RandomSource`)

**Returns:** `public static boolean`

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_29005_)
```

**Parameters:**

- `p_29005_` (`LevelReader`)

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_29007_, DifficultyInstance p_29008_, MobSpawnType p_29009_, SpawnGroupData p_29010_)
```

**Parameters:**

- `p_29007_` (`ServerLevelAccessor`)
- `p_29008_` (`DifficultyInstance`)
- `p_29009_` (`MobSpawnType`)
- `p_29010_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### isSteppingCarefully

```java
public boolean isSteppingCarefully()
```

**Returns:** `boolean`

### OcelotAvoidEntityGoal

```java
public OcelotAvoidEntityGoal(Ocelot p_29051_, Class<T> p_29052_, float p_29053_, double p_29054_, double p_29055_)
```

**Parameters:**

- `p_29051_` (`Ocelot`)
- `p_29052_` (`Class<T>`)
- `p_29053_` (`float`)
- `p_29054_` (`double`)
- `p_29055_` (`double`)

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

### OcelotTemptGoal

```java
public OcelotTemptGoal(Ocelot p_29060_, double p_29061_, Predicate<ItemStack> p_335948_, boolean p_29063_)
```

**Parameters:**

- `p_29060_` (`Ocelot`)
- `p_29061_` (`double`)
- `p_335948_` (`Predicate<ItemStack>`)
- `p_29063_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canScare

```java
protected boolean canScare()
```

**Returns:** `boolean`
