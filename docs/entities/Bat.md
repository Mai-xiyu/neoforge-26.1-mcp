# Bat

**Package:** `net.minecraft.world.entity.ambient`
**Type:** class
**Extends:** `AmbientCreature`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLAP_LENGTH_SECONDS` | `float` |  |
| `TICKS_PER_FLAP` | `float` |  |
| `flyAnimationState` | `AnimationState` |  |
| `restAnimationState` | `AnimationState` |  |

## Methods

### Bat

```java
public Bat(EntityType<? extends Bat> p_27412_, Level p_27413_)
```

**Parameters:**

- `p_27412_` (`EntityType<? extends Bat>`)
- `p_27413_` (`Level`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326297_)
```

**Parameters:**

- `p_326297_` (`SynchedEntityData.Builder`)

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### getVoicePitch

```java
public float getVoicePitch()
```

**Returns:** `float`

### getAmbientSound

```java
public SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_27451_)
```

**Parameters:**

- `p_27451_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### isPushable

```java
public boolean isPushable()
```

**Returns:** `boolean`

### doPush

```java
protected void doPush(Entity p_27415_)
```

**Parameters:**

- `p_27415_` (`Entity`)

### pushEntities

```java
protected void pushEntities()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### isResting

```java
public boolean isResting()
```

**Returns:** `public boolean`

### setResting

```java
public void setResting(boolean p_27457_)
```

**Parameters:**

- `p_27457_` (`boolean`)

**Returns:** `public void`

### tick

```java
public void tick()
```

### customServerAiStep

```java
protected void customServerAiStep()
```

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### checkFallDamage

```java
protected void checkFallDamage(double p_27419_, boolean p_27420_, BlockState p_27421_, BlockPos p_27422_)
```

**Parameters:**

- `p_27419_` (`double`)
- `p_27420_` (`boolean`)
- `p_27421_` (`BlockState`)
- `p_27422_` (`BlockPos`)

### isIgnoringBlockTriggers

```java
public boolean isIgnoringBlockTriggers()
```

**Returns:** `boolean`

### hurt

```java
public boolean hurt(DamageSource p_27424_, float p_27425_)
```

**Parameters:**

- `p_27424_` (`DamageSource`)
- `p_27425_` (`float`)

**Returns:** `boolean`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_27427_)
```

**Parameters:**

- `p_27427_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_27443_)
```

**Parameters:**

- `p_27443_` (`CompoundTag`)

### checkBatSpawnRules

```java
public static boolean checkBatSpawnRules(EntityType<Bat> p_218099_, LevelAccessor p_218100_, MobSpawnType p_218101_, BlockPos p_218102_, RandomSource p_218103_)
```

**Parameters:**

- `p_218099_` (`EntityType<Bat>`)
- `p_218100_` (`LevelAccessor`)
- `p_218101_` (`MobSpawnType`)
- `p_218102_` (`BlockPos`)
- `p_218103_` (`RandomSource`)

**Returns:** `public static boolean`

### isHalloween

```java
private static boolean isHalloween()
```

**Returns:** `private static boolean`

### setupAnimationStates

```java
private void setupAnimationStates()
```

**Returns:** `private void`
