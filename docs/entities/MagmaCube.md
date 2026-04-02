# MagmaCube

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Slime`

## Methods

### MagmaCube

```java
public MagmaCube(EntityType<? extends MagmaCube> p_32968_, Level p_32969_)
```

**Parameters:**

- `p_32968_` (`EntityType<? extends MagmaCube>`)
- `p_32969_` (`Level`)

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

### checkMagmaCubeSpawnRules

```java
public static boolean checkMagmaCubeSpawnRules(EntityType<MagmaCube> p_219003_, LevelAccessor p_219004_, MobSpawnType p_219005_, BlockPos p_219006_, RandomSource p_219007_)
```

**Parameters:**

- `p_219003_` (`EntityType<MagmaCube>`)
- `p_219004_` (`LevelAccessor`)
- `p_219005_` (`MobSpawnType`)
- `p_219006_` (`BlockPos`)
- `p_219007_` (`RandomSource`)

**Returns:** `public static boolean`

### setSize

```java
public void setSize(int p_32972_, boolean p_32973_)
```

**Parameters:**

- `p_32972_` (`int`)
- `p_32973_` (`boolean`)

### getLightLevelDependentMagicValue

```java
public float getLightLevelDependentMagicValue()
```

**Returns:** `float`

### getParticleType

```java
protected ParticleOptions getParticleType()
```

**Returns:** `ParticleOptions`

### isOnFire

```java
public boolean isOnFire()
```

**Returns:** `boolean`

### getJumpDelay

```java
protected int getJumpDelay()
```

**Returns:** `int`

### decreaseSquish

```java
protected void decreaseSquish()
```

### jumpFromGround

```java
public void jumpFromGround()
```

### jumpInLiquid ⚠️ *Deprecated*

```java
use jumpInFluid instead
    protected void jumpInLiquid(TagKey<Fluid> p_204065_)
```

**Parameters:**

- `p_204065_` (`TagKey<Fluid>`)

**Returns:** `use jumpInFluid instead
    protected void`

### jumpInLiquidInternal

```java
private void jumpInLiquidInternal(java.util.function.BooleanSupplier isLava, Runnable onSuper)
```

**Parameters:**

- `isLava` (`java.util.function.BooleanSupplier`)
- `onSuper` (`Runnable`)

**Returns:** `private void`

### jumpInFluid

```java
public void jumpInFluid(net.neoforged.neoforge.fluids.FluidType type)
```

**Parameters:**

- `type` (`net.neoforged.neoforge.fluids.FluidType`)

### isDealsDamage

```java
protected boolean isDealsDamage()
```

**Returns:** `boolean`

### getAttackDamage

```java
protected float getAttackDamage()
```

**Returns:** `float`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32992_)
```

**Parameters:**

- `p_32992_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSquishSound

```java
protected SoundEvent getSquishSound()
```

**Returns:** `SoundEvent`

### getJumpSound

```java
protected SoundEvent getJumpSound()
```

**Returns:** `SoundEvent`
