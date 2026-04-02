# Stray

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractSkeleton`

## Methods

### Stray

```java
public Stray(EntityType<? extends Stray> p_33836_, Level p_33837_)
```

**Parameters:**

- `p_33836_` (`EntityType<? extends Stray>`)
- `p_33837_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### checkStraySpawnRules

```java
public static boolean checkStraySpawnRules(EntityType<Stray> p_219121_, ServerLevelAccessor p_219122_, MobSpawnType p_219123_, BlockPos p_219124_, RandomSource p_219125_)
```

**Parameters:**

- `p_219121_` (`EntityType<Stray>`)
- `p_219122_` (`ServerLevelAccessor`)
- `p_219123_` (`MobSpawnType`)
- `p_219124_` (`BlockPos`)
- `p_219125_` (`RandomSource`)

**Returns:** `public static boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33850_)
```

**Parameters:**

- `p_33850_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getStepSound

```java
protected SoundEvent getStepSound()
```

**Returns:** `SoundEvent`

### getArrow

```java
protected AbstractArrow getArrow(ItemStack p_33846_, float p_33847_, ItemStack p_345505_)
```

**Parameters:**

- `p_33846_` (`ItemStack`)
- `p_33847_` (`float`)
- `p_345505_` (`ItemStack`)

**Returns:** `AbstractArrow`
