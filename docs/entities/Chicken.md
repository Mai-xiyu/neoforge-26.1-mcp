# Chicken

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `flap` | `float` |  |
| `flapSpeed` | `float` |  |
| `oFlapSpeed` | `float` |  |
| `oFlap` | `float` |  |
| `flapping` | `float` |  |
| `eggTime` | `int` |  |
| `isChickenJockey` | `boolean` |  |

## Methods

### Chicken

```java
public Chicken(EntityType<? extends Chicken> p_28236_, Level p_28237_)
```

**Parameters:**

- `p_28236_` (`EntityType<? extends Chicken>`)
- `p_28237_` (`Level`)

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

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316516_)
```

**Parameters:**

- `p_316516_` (`Pose`)

**Returns:** `EntityDimensions`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### aiStep

```java
public void aiStep()
```

### isFlapping

```java
protected boolean isFlapping()
```

**Returns:** `boolean`

### onFlap

```java
protected void onFlap()
```

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_28262_)
```

**Parameters:**

- `p_28262_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_28254_, BlockState p_28255_)
```

**Parameters:**

- `p_28254_` (`BlockPos`)
- `p_28255_` (`BlockState`)

### getBreedOffspring

```java
public Chicken getBreedOffspring(ServerLevel p_148884_, AgeableMob p_148885_)
```

**Parameters:**

- `p_148884_` (`ServerLevel`)
- `p_148885_` (`AgeableMob`)

**Returns:** `Chicken`

### isFood

```java
public boolean isFood(ItemStack p_28271_)
```

**Parameters:**

- `p_28271_` (`ItemStack`)

**Returns:** `boolean`

### getBaseExperienceReward

```java
protected int getBaseExperienceReward()
```

**Returns:** `int`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_28243_)
```

**Parameters:**

- `p_28243_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_28257_)
```

**Parameters:**

- `p_28257_` (`CompoundTag`)

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_28266_)
```

**Parameters:**

- `p_28266_` (`double`)

**Returns:** `boolean`

### positionRider

```java
protected void positionRider(Entity p_289537_, Entity.MoveFunction p_289541_)
```

**Parameters:**

- `p_289537_` (`Entity`)
- `p_289541_` (`Entity.MoveFunction`)

### isChickenJockey

```java
public boolean isChickenJockey()
```

**Returns:** `public boolean`

### setChickenJockey

```java
public void setChickenJockey(boolean p_28274_)
```

**Parameters:**

- `p_28274_` (`boolean`)

**Returns:** `public void`
