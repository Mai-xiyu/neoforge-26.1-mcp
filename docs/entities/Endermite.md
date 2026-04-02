# Endermite

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`

## Methods

### Endermite

```java
public Endermite(EntityType<? extends Endermite> p_32591_, Level p_32592_)
```

**Parameters:**

- `p_32591_` (`EntityType<? extends Endermite>`)
- `p_32592_` (`Level`)

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

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32615_)
```

**Parameters:**

- `p_32615_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_32607_, BlockState p_32608_)
```

**Parameters:**

- `p_32607_` (`BlockPos`)
- `p_32608_` (`BlockState`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_32595_)
```

**Parameters:**

- `p_32595_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_32610_)
```

**Parameters:**

- `p_32610_` (`CompoundTag`)

### tick

```java
public void tick()
```

### setYBodyRot

```java
public void setYBodyRot(float p_32621_)
```

**Parameters:**

- `p_32621_` (`float`)

### aiStep

```java
public void aiStep()
```

### checkEndermiteSpawnRules

```java
public static boolean checkEndermiteSpawnRules(EntityType<Endermite> p_218969_, LevelAccessor p_218970_, MobSpawnType p_218971_, BlockPos p_218972_, RandomSource p_218973_)
```

**Parameters:**

- `p_218969_` (`EntityType<Endermite>`)
- `p_218970_` (`LevelAccessor`)
- `p_218971_` (`MobSpawnType`)
- `p_218972_` (`BlockPos`)
- `p_218973_` (`RandomSource`)

**Returns:** `public static boolean`
