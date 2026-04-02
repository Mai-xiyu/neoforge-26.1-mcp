# SimpleExplosionDamageCalculator

**Package:** `net.minecraft.world.level`
**Type:** class
**Extends:** `ExplosionDamageCalculator`

## Methods

### SimpleExplosionDamageCalculator

```java
public SimpleExplosionDamageCalculator(boolean p_345621_, boolean p_345535_, Optional<Float> p_344810_, Optional<HolderSet<Block>> p_346110_)
```

**Parameters:**

- `p_345621_` (`boolean`)
- `p_345535_` (`boolean`)
- `p_344810_` (`Optional<Float>`)
- `p_346110_` (`Optional<HolderSet<Block>>`)

**Returns:** `public`

### getBlockExplosionResistance

```java
public Optional<Float> getBlockExplosionResistance(Explosion p_346109_, BlockGetter p_345381_, BlockPos p_344921_, BlockState p_346239_, FluidState p_345105_)
```

**Parameters:**

- `p_346109_` (`Explosion`)
- `p_345381_` (`BlockGetter`)
- `p_344921_` (`BlockPos`)
- `p_346239_` (`BlockState`)
- `p_345105_` (`FluidState`)

**Returns:** `Optional<Float>`

### shouldBlockExplode

```java
public boolean shouldBlockExplode(Explosion p_345994_, BlockGetter p_345042_, BlockPos p_345057_, BlockState p_345932_, float p_345776_)
```

**Parameters:**

- `p_345994_` (`Explosion`)
- `p_345042_` (`BlockGetter`)
- `p_345057_` (`BlockPos`)
- `p_345932_` (`BlockState`)
- `p_345776_` (`float`)

**Returns:** `boolean`

### shouldDamageEntity

```java
public boolean shouldDamageEntity(Explosion p_346248_, Entity p_344983_)
```

**Parameters:**

- `p_346248_` (`Explosion`)
- `p_344983_` (`Entity`)

**Returns:** `boolean`

### getKnockbackMultiplier

```java
public float getKnockbackMultiplier(Entity p_345651_)
```

**Parameters:**

- `p_345651_` (`Entity`)

**Returns:** `float`
