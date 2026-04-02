# ThrownPotion

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `ThrowableItemProjectile`
**Implements:** `ItemSupplier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SPLASH_RANGE` | `double` |  |
| `WATER_SENSITIVE_OR_ON_FIRE` | `Predicate<LivingEntity>` |  |

## Methods

### ThrownPotion

```java
public ThrownPotion(EntityType<? extends ThrownPotion> p_37527_, Level p_37528_)
```

**Parameters:**

- `p_37527_` (`EntityType<? extends ThrownPotion>`)
- `p_37528_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ThrownPotion

```java
public ThrownPotion(Level p_37535_, LivingEntity p_37536_)
```

**Parameters:**

- `p_37535_` (`Level`)
- `p_37536_` (`LivingEntity`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ThrownPotion

```java
public ThrownPotion(Level p_37530_, double p_37531_, double p_37532_, double p_37533_)
```

**Parameters:**

- `p_37530_` (`Level`)
- `p_37531_` (`double`)
- `p_37532_` (`double`)
- `p_37533_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDefaultItem

```java
protected Item getDefaultItem()
```

**Returns:** `Item`

### getDefaultGravity

```java
protected double getDefaultGravity()
```

**Returns:** `double`

### onHitBlock

```java
protected void onHitBlock(BlockHitResult p_37541_)
```

**Parameters:**

- `p_37541_` (`BlockHitResult`)

### onHit

```java
protected void onHit(HitResult p_37543_)
```

**Parameters:**

- `p_37543_` (`HitResult`)

### applyWater

```java
private void applyWater()
```

**Returns:** `private void`

### applySplash

```java
private void applySplash(Iterable<MobEffectInstance> p_330815_, Entity p_37549_)
```

**Parameters:**

- `p_330815_` (`Iterable<MobEffectInstance>`)
- `p_37549_` (`Entity`)

**Returns:** `private void`

### makeAreaOfEffectCloud

```java
private void makeAreaOfEffectCloud(PotionContents p_332124_)
```

**Parameters:**

- `p_332124_` (`PotionContents`)

**Returns:** `private void`

### isLingering

```java
private boolean isLingering()
```

**Returns:** `private boolean`

### dowseFire

```java
private void dowseFire(BlockPos p_150193_)
```

**Parameters:**

- `p_150193_` (`BlockPos`)

**Returns:** `private void`

### calculateHorizontalHurtKnockbackDirection

```java
public DoubleDoubleImmutablePair calculateHorizontalHurtKnockbackDirection(LivingEntity p_345103_, DamageSource p_345887_)
```

**Parameters:**

- `p_345103_` (`LivingEntity`)
- `p_345887_` (`DamageSource`)

**Returns:** `DoubleDoubleImmutablePair`
