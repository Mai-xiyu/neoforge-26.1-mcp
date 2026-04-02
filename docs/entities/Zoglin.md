# Zoglin

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`
**Implements:** `Enemy`, `HoglinBase`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SENSOR_TYPES` | `ImmutableList<? extends SensorType<? extends Sensor<? super Zoglin>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<? extends MemoryModuleType<?>>` |  |

## Methods

### Zoglin

```java
public Zoglin(EntityType<? extends Zoglin> p_34204_, Level p_34205_)
```

**Parameters:**

- `p_34204_` (`EntityType<? extends Zoglin>`)
- `p_34205_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### brainProvider

```java
protected Brain.Provider<Zoglin> brainProvider()
```

**Returns:** `Brain.Provider<Zoglin>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_34221_)
```

**Parameters:**

- `p_34221_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### initCoreActivity

```java
 initCoreActivity()
```

**Returns:** ``

### initIdleActivity

```java
 initIdleActivity()
```

**Returns:** ``

### initFightActivity

```java
 initFightActivity()
```

**Returns:** ``

### initCoreActivity

```java
private static void initCoreActivity(Brain<Zoglin> p_34217_)
```

**Parameters:**

- `p_34217_` (`Brain<Zoglin>`)

**Returns:** `private static void`

### initIdleActivity

```java
private static void initIdleActivity(Brain<Zoglin> p_34229_)
```

**Parameters:**

- `p_34229_` (`Brain<Zoglin>`)

**Returns:** `private static void`

### initFightActivity

```java
private static void initFightActivity(Brain<Zoglin> p_34237_)
```

**Parameters:**

- `p_34237_` (`Brain<Zoglin>`)

**Returns:** `private static void`

### findNearestValidAttackTarget

```java
private Optional<? extends LivingEntity> findNearestValidAttackTarget()
```

**Returns:** `private Optional<? extends LivingEntity>`

### isTargetable

```java
private boolean isTargetable(LivingEntity p_34253_)
```

**Parameters:**

- `p_34253_` (`LivingEntity`)

**Returns:** `private boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326281_)
```

**Parameters:**

- `p_326281_` (`SynchedEntityData.Builder`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_34225_)
```

**Parameters:**

- `p_34225_` (`EntityDataAccessor<?>`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### isAdult

```java
public boolean isAdult()
```

**Returns:** `public boolean`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_34207_)
```

**Parameters:**

- `p_34207_` (`Entity`)

**Returns:** `boolean`

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### blockedByShield

```java
protected void blockedByShield(LivingEntity p_34246_)
```

**Parameters:**

- `p_34246_` (`LivingEntity`)

### hurt

```java
public boolean hurt(DamageSource p_34214_, float p_34215_)
```

**Parameters:**

- `p_34214_` (`DamageSource`)
- `p_34215_` (`float`)

**Returns:** `boolean`

### setAttackTarget

```java
private void setAttackTarget(LivingEntity p_34255_)
```

**Parameters:**

- `p_34255_` (`LivingEntity`)

**Returns:** `private void`

### getBrain

```java
public Brain<Zoglin> getBrain()
```

**Returns:** `Brain<Zoglin>`

### updateActivity

```java
protected void updateActivity()
```

**Returns:** `protected void`

### customServerAiStep

```java
protected void customServerAiStep()
```

### setBaby

```java
public void setBaby(boolean p_34227_)
```

**Parameters:**

- `p_34227_` (`boolean`)

### isBaby

```java
public boolean isBaby()
```

**Returns:** `boolean`

### aiStep

```java
public void aiStep()
```

### handleEntityEvent

```java
public void handleEntityEvent(byte p_34212_)
```

**Parameters:**

- `p_34212_` (`byte`)

### getAttackAnimationRemainingTicks

```java
public int getAttackAnimationRemainingTicks()
```

**Returns:** `int`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_34244_)
```

**Parameters:**

- `p_34244_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_34231_, BlockState p_34232_)
```

**Parameters:**

- `p_34231_` (`BlockPos`)
- `p_34232_` (`BlockState`)

### playAngrySound

```java
protected void playAngrySound()
```

**Returns:** `protected void`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34234_)
```

**Parameters:**

- `p_34234_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34223_)
```

**Parameters:**

- `p_34223_` (`CompoundTag`)
