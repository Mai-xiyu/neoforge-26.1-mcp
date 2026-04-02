# PiglinBrute

**Package:** `net.minecraft.world.entity.monster.piglin`
**Type:** class
**Extends:** `AbstractPiglin`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SENSOR_TYPES` | `ImmutableList<SensorType<? extends Sensor<? super PiglinBrute>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<MemoryModuleType<?>>` |  |

## Methods

### PiglinBrute

```java
public PiglinBrute(EntityType<? extends PiglinBrute> p_35048_, Level p_35049_)
```

**Parameters:**

- `p_35048_` (`EntityType<? extends PiglinBrute>`)
- `p_35049_` (`Level`)

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

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_35058_, DifficultyInstance p_35059_, MobSpawnType p_35060_, SpawnGroupData p_35061_)
```

**Parameters:**

- `p_35058_` (`ServerLevelAccessor`)
- `p_35059_` (`DifficultyInstance`)
- `p_35060_` (`MobSpawnType`)
- `p_35061_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219209_, DifficultyInstance p_219210_)
```

**Parameters:**

- `p_219209_` (`RandomSource`)
- `p_219210_` (`DifficultyInstance`)

### brainProvider

```java
protected Brain.Provider<PiglinBrute> brainProvider()
```

**Returns:** `Brain.Provider<PiglinBrute>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_35064_)
```

**Parameters:**

- `p_35064_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<PiglinBrute> getBrain()
```

**Returns:** `Brain<PiglinBrute>`

### canHunt

```java
public boolean canHunt()
```

**Returns:** `boolean`

### wantsToPickUp

```java
public boolean wantsToPickUp(ItemStack p_35078_)
```

**Parameters:**

- `p_35078_` (`ItemStack`)

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### getArmPose

```java
public PiglinArmPose getArmPose()
```

**Returns:** `PiglinArmPose`

### hurt

```java
public boolean hurt(DamageSource p_35055_, float p_35056_)
```

**Parameters:**

- `p_35055_` (`DamageSource`)
- `p_35056_` (`float`)

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_35072_)
```

**Parameters:**

- `p_35072_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_35066_, BlockState p_35067_)
```

**Parameters:**

- `p_35066_` (`BlockPos`)
- `p_35067_` (`BlockState`)

### playAngrySound

```java
protected void playAngrySound()
```

**Returns:** `protected void`

### playConvertedSound

```java
protected void playConvertedSound()
```
