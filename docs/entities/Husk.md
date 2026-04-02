# Husk

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Zombie`

## Methods

### Husk

```java
public Husk(EntityType<? extends Husk> p_32889_, Level p_32890_)
```

**Parameters:**

- `p_32889_` (`EntityType<? extends Husk>`)
- `p_32890_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### checkHuskSpawnRules

```java
public static boolean checkHuskSpawnRules(EntityType<Husk> p_218997_, ServerLevelAccessor p_218998_, MobSpawnType p_218999_, BlockPos p_219000_, RandomSource p_219001_)
```

**Parameters:**

- `p_218997_` (`EntityType<Husk>`)
- `p_218998_` (`ServerLevelAccessor`)
- `p_218999_` (`MobSpawnType`)
- `p_219000_` (`BlockPos`)
- `p_219001_` (`RandomSource`)

**Returns:** `public static boolean`

### isSunSensitive

```java
protected boolean isSunSensitive()
```

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32903_)
```

**Parameters:**

- `p_32903_` (`DamageSource`)

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

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_32892_)
```

**Parameters:**

- `p_32892_` (`Entity`)

**Returns:** `boolean`

### convertsInWater

```java
protected boolean convertsInWater()
```

**Returns:** `boolean`

### doUnderWaterConversion

```java
protected void doUnderWaterConversion()
```

### getSkull

```java
protected ItemStack getSkull()
```

**Returns:** `ItemStack`
