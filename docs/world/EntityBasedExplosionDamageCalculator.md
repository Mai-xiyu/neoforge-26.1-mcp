# EntityBasedExplosionDamageCalculator

**Package:** `net.minecraft.world.level`
**Type:** class
**Extends:** `ExplosionDamageCalculator`

## Methods

### EntityBasedExplosionDamageCalculator

```java
public EntityBasedExplosionDamageCalculator(Entity p_45894_)
```

**Parameters:**

- `p_45894_` (`Entity`)

**Returns:** `public`

### getBlockExplosionResistance

```java
public Optional<Float> getBlockExplosionResistance(Explosion p_45902_, BlockGetter p_45903_, BlockPos p_45904_, BlockState p_45905_, FluidState p_45906_)
```

**Parameters:**

- `p_45902_` (`Explosion`)
- `p_45903_` (`BlockGetter`)
- `p_45904_` (`BlockPos`)
- `p_45905_` (`BlockState`)
- `p_45906_` (`FluidState`)

**Returns:** `Optional<Float>`

### shouldBlockExplode

```java
public boolean shouldBlockExplode(Explosion p_45896_, BlockGetter p_45897_, BlockPos p_45898_, BlockState p_45899_, float p_45900_)
```

**Parameters:**

- `p_45896_` (`Explosion`)
- `p_45897_` (`BlockGetter`)
- `p_45898_` (`BlockPos`)
- `p_45899_` (`BlockState`)
- `p_45900_` (`float`)

**Returns:** `boolean`
