# ExplosionDamageCalculator

**Package:** `net.minecraft.world.level`
**Type:** class

## Methods

### getBlockExplosionResistance

```java
public Optional<Float> getBlockExplosionResistance(Explosion p_46099_, BlockGetter p_46100_, BlockPos p_46101_, BlockState p_46102_, FluidState p_46103_)
```

**Parameters:**

- `p_46099_` (`Explosion`)
- `p_46100_` (`BlockGetter`)
- `p_46101_` (`BlockPos`)
- `p_46102_` (`BlockState`)
- `p_46103_` (`FluidState`)

**Returns:** `public Optional<Float>`

### shouldBlockExplode

```java
public boolean shouldBlockExplode(Explosion p_46094_, BlockGetter p_46095_, BlockPos p_46096_, BlockState p_46097_, float p_46098_)
```

**Parameters:**

- `p_46094_` (`Explosion`)
- `p_46095_` (`BlockGetter`)
- `p_46096_` (`BlockPos`)
- `p_46097_` (`BlockState`)
- `p_46098_` (`float`)

**Returns:** `public boolean`

### shouldDamageEntity

```java
public boolean shouldDamageEntity(Explosion p_314652_, Entity p_314454_)
```

**Parameters:**

- `p_314652_` (`Explosion`)
- `p_314454_` (`Entity`)

**Returns:** `public boolean`

### getKnockbackMultiplier

```java
public float getKnockbackMultiplier(Entity p_340973_)
```

**Parameters:**

- `p_340973_` (`Entity`)

**Returns:** `public float`

### getEntityDamageAmount

```java
public float getEntityDamageAmount(Explosion p_311793_, Entity p_311929_)
```

**Parameters:**

- `p_311793_` (`Explosion`)
- `p_311929_` (`Entity`)

**Returns:** `public float`
