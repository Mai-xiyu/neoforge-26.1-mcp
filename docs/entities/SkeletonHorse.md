# SkeletonHorse

**Package:** `net.minecraft.world.entity.animal.horse`
**Type:** class
**Extends:** `AbstractHorse`

## Methods

### SkeletonHorse

```java
public SkeletonHorse(EntityType<? extends SkeletonHorse> p_30894_, Level p_30895_)
```

**Parameters:**

- `p_30894_` (`EntityType<? extends SkeletonHorse>`)
- `p_30895_` (`Level`)

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

### checkSkeletonHorseSpawnRules

```java
public static boolean checkSkeletonHorseSpawnRules(EntityType<? extends Animal> p_312143_, LevelAccessor p_312574_, MobSpawnType p_312240_, BlockPos p_312362_, RandomSource p_312555_)
```

**Parameters:**

- `p_312143_` (`EntityType<? extends Animal>`)
- `p_312574_` (`LevelAccessor`)
- `p_312240_` (`MobSpawnType`)
- `p_312362_` (`BlockPos`)
- `p_312555_` (`RandomSource`)

**Returns:** `public static boolean`

### randomizeAttributes

```java
protected void randomizeAttributes(RandomSource p_218821_)
```

**Parameters:**

- `p_218821_` (`RandomSource`)

### addBehaviourGoals

```java
protected void addBehaviourGoals()
```

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_30916_)
```

**Parameters:**

- `p_30916_` (`DamageSource`)

**Returns:** `SoundEvent`

### getSwimSound

```java
protected SoundEvent getSwimSound()
```

**Returns:** `SoundEvent`

### playSwimSound

```java
protected void playSwimSound(float p_30911_)
```

**Parameters:**

- `p_30911_` (`float`)

### playJumpSound

```java
protected void playJumpSound()
```

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316222_)
```

**Parameters:**

- `p_316222_` (`Pose`)

**Returns:** `EntityDimensions`

### aiStep

```java
public void aiStep()
```

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30907_)
```

**Parameters:**

- `p_30907_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30901_)
```

**Parameters:**

- `p_30901_` (`CompoundTag`)

### getWaterSlowDown

```java
protected float getWaterSlowDown()
```

**Returns:** `float`

### isTrap

```java
public boolean isTrap()
```

**Returns:** `public boolean`

### setTrap

```java
public void setTrap(boolean p_30924_)
```

**Parameters:**

- `p_30924_` (`boolean`)

**Returns:** `public void`

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149553_, AgeableMob p_149554_)
```

**Parameters:**

- `p_149553_` (`ServerLevel`)
- `p_149554_` (`AgeableMob`)

**Returns:** `AgeableMob`

### mobInteract

```java
public InteractionResult mobInteract(Player p_30904_, InteractionHand p_30905_)
```

**Parameters:**

- `p_30904_` (`Player`)
- `p_30905_` (`InteractionHand`)

**Returns:** `InteractionResult`
