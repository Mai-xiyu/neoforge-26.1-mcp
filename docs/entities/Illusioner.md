# Illusioner

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `SpellcasterIllager`
**Implements:** `RangedAttackMob`

## Methods

### Illusioner

```java
public Illusioner(EntityType<? extends Illusioner> p_32911_, Level p_32912_)
```

**Parameters:**

- `p_32911_` (`EntityType<? extends Illusioner>`)
- `p_32912_` (`Level`)

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

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_32921_, DifficultyInstance p_32922_, MobSpawnType p_32923_, SpawnGroupData p_32924_)
```

**Parameters:**

- `p_32921_` (`ServerLevelAccessor`)
- `p_32922_` (`DifficultyInstance`)
- `p_32923_` (`MobSpawnType`)
- `p_32924_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getBoundingBoxForCulling

```java
public AABB getBoundingBoxForCulling()
```

**Returns:** `AABB`

### aiStep

```java
public void aiStep()
```

### getCelebrateSound

```java
public SoundEvent getCelebrateSound()
```

**Returns:** `SoundEvent`

### getIllusionOffsets

```java
public Vec3[] getIllusionOffsets(float p_32940_)
```

**Parameters:**

- `p_32940_` (`float`)

**Returns:** `public Vec3[]`

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
protected SoundEvent getHurtSound(DamageSource p_32930_)
```

**Parameters:**

- `p_32930_` (`DamageSource`)

**Returns:** `SoundEvent`

### getCastingSoundEvent

```java
protected SoundEvent getCastingSoundEvent()
```

**Returns:** `SoundEvent`

### applyRaidBuffs

```java
public void applyRaidBuffs(ServerLevel p_348536_, int p_32915_, boolean p_32916_)
```

**Parameters:**

- `p_348536_` (`ServerLevel`)
- `p_32915_` (`int`)
- `p_32916_` (`boolean`)

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_32918_, float p_32919_)
```

**Parameters:**

- `p_32918_` (`LivingEntity`)
- `p_32919_` (`float`)

### getArmPose

```java
public AbstractIllager.IllagerArmPose getArmPose()
```

**Returns:** `AbstractIllager.IllagerArmPose`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### getCastingTime

```java
protected int getCastingTime()
```

**Returns:** `int`

### getCastingInterval

```java
protected int getCastingInterval()
```

**Returns:** `int`

### performSpellCasting

```java
protected void performSpellCasting()
```

### getSpellPrepareSound

```java
protected SoundEvent getSpellPrepareSound()
```

**Returns:** `SoundEvent`

### getSpell

```java
protected SpellcasterIllager.IllagerSpell getSpell()
```

**Returns:** `SpellcasterIllager.IllagerSpell`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### getCastingTime

```java
protected int getCastingTime()
```

**Returns:** `int`

### getCastingInterval

```java
protected int getCastingInterval()
```

**Returns:** `int`

### performSpellCasting

```java
protected void performSpellCasting()
```

### getSpellPrepareSound

```java
protected SoundEvent getSpellPrepareSound()
```

**Returns:** `SoundEvent`

### getSpell

```java
protected SpellcasterIllager.IllagerSpell getSpell()
```

**Returns:** `SpellcasterIllager.IllagerSpell`
