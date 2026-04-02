# Goat

**Package:** `net.minecraft.world.entity.animal.goat`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LONG_JUMPING_DIMENSIONS` | `EntityDimensions` |  |
| `SENSOR_TYPES` | `ImmutableList<SensorType<? extends Sensor<? super Goat>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<MemoryModuleType<?>>` |  |
| `GOAT_FALL_DAMAGE_REDUCTION` | `int` |  |
| `GOAT_SCREAMING_CHANCE` | `double` |  |
| `UNIHORN_CHANCE` | `double` |  |

## Methods

### Goat

```java
public Goat(EntityType<? extends Goat> p_149352_, Level p_149353_)
```

**Parameters:**

- `p_149352_` (`EntityType<? extends Goat>`)
- `p_149353_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createHorn

```java
public ItemStack createHorn()
```

**Returns:** `public ItemStack`

### brainProvider

```java
protected Brain.Provider<Goat> brainProvider()
```

**Returns:** `Brain.Provider<Goat>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_149371_)
```

**Parameters:**

- `p_149371_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### ageBoundaryReached

```java
protected void ageBoundaryReached()
```

### calculateFallDamage

```java
protected int calculateFallDamage(float p_149389_, float p_149390_)
```

**Parameters:**

- `p_149389_` (`float`)
- `p_149390_` (`float`)

**Returns:** `int`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_149387_)
```

**Parameters:**

- `p_149387_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_149382_, BlockState p_149383_)
```

**Parameters:**

- `p_149382_` (`BlockPos`)
- `p_149383_` (`BlockState`)

### getMilkingSound

```java
protected SoundEvent getMilkingSound()
```

**Returns:** `protected SoundEvent`

### getBreedOffspring

```java
public Goat getBreedOffspring(ServerLevel p_149376_, AgeableMob p_149377_)
```

**Parameters:**

- `p_149376_` (`ServerLevel`)
- `p_149377_` (`AgeableMob`)

**Returns:** `Goat`

### getBrain

```java
public Brain<Goat> getBrain()
```

**Returns:** `Brain<Goat>`

### customServerAiStep

```java
protected void customServerAiStep()
```

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### setYHeadRot

```java
public void setYHeadRot(float p_149400_)
```

**Parameters:**

- `p_149400_` (`float`)

### getEatingSound

```java
public SoundEvent getEatingSound(ItemStack p_149394_)
```

**Parameters:**

- `p_149394_` (`ItemStack`)

**Returns:** `SoundEvent`

### isFood

```java
public boolean isFood(ItemStack p_335711_)
```

**Parameters:**

- `p_335711_` (`ItemStack`)

**Returns:** `boolean`

### mobInteract

```java
public InteractionResult mobInteract(Player p_149379_, InteractionHand p_149380_)
```

**Parameters:**

- `p_149379_` (`Player`)
- `p_149380_` (`InteractionHand`)

**Returns:** `InteractionResult`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_149365_, DifficultyInstance p_149366_, MobSpawnType p_149367_, SpawnGroupData p_149368_)
```

**Parameters:**

- `p_149365_` (`ServerLevelAccessor`)
- `p_149366_` (`DifficultyInstance`)
- `p_149367_` (`MobSpawnType`)
- `p_149368_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316190_)
```

**Parameters:**

- `p_316190_` (`Pose`)

**Returns:** `EntityDimensions`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_149385_)
```

**Parameters:**

- `p_149385_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_149373_)
```

**Parameters:**

- `p_149373_` (`CompoundTag`)

### handleEntityEvent

```java
public void handleEntityEvent(byte p_149356_)
```

**Parameters:**

- `p_149356_` (`byte`)

### aiStep

```java
public void aiStep()
```

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326425_)
```

**Parameters:**

- `p_326425_` (`SynchedEntityData.Builder`)

### hasLeftHorn

```java
public boolean hasLeftHorn()
```

**Returns:** `public boolean`

### hasRightHorn

```java
public boolean hasRightHorn()
```

**Returns:** `public boolean`

### dropHorn

```java
public boolean dropHorn()
```

**Returns:** `public boolean`

### addHorns

```java
public void addHorns()
```

**Returns:** `public void`

### removeHorns

```java
public void removeHorns()
```

**Returns:** `public void`

### isScreamingGoat

```java
public boolean isScreamingGoat()
```

**Returns:** `public boolean`

### setScreamingGoat

```java
public void setScreamingGoat(boolean p_149406_)
```

**Parameters:**

- `p_149406_` (`boolean`)

**Returns:** `public void`

### getRammingXHeadRot

```java
public float getRammingXHeadRot()
```

**Returns:** `public float`

### checkGoatSpawnRules

```java
public static boolean checkGoatSpawnRules(EntityType<? extends Animal> p_218753_, LevelAccessor p_218754_, MobSpawnType p_218755_, BlockPos p_218756_, RandomSource p_218757_)
```

**Parameters:**

- `p_218753_` (`EntityType<? extends Animal>`)
- `p_218754_` (`LevelAccessor`)
- `p_218755_` (`MobSpawnType`)
- `p_218756_` (`BlockPos`)
- `p_218757_` (`RandomSource`)

**Returns:** `public static boolean`
