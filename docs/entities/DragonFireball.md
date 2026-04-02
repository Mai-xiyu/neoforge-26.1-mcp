# DragonFireball

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `AbstractHurtingProjectile`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SPLASH_RANGE` | `float` |  |

## Methods

### DragonFireball

```java
public DragonFireball(EntityType<? extends DragonFireball> p_36892_, Level p_36893_)
```

**Parameters:**

- `p_36892_` (`EntityType<? extends DragonFireball>`)
- `p_36893_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### DragonFireball

```java
public DragonFireball(Level p_36903_, LivingEntity p_36904_, Vec3 p_347512_)
```

**Parameters:**

- `p_36903_` (`Level`)
- `p_36904_` (`LivingEntity`)
- `p_347512_` (`Vec3`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onHit

```java
protected void onHit(HitResult p_36913_)
```

**Parameters:**

- `p_36913_` (`HitResult`)

### hurt

```java
public boolean hurt(DamageSource p_36910_, float p_36911_)
```

**Parameters:**

- `p_36910_` (`DamageSource`)
- `p_36911_` (`float`)

**Returns:** `boolean`

### getTrailParticle

```java
protected ParticleOptions getTrailParticle()
```

**Returns:** `ParticleOptions`

### shouldBurn

```java
protected boolean shouldBurn()
```

**Returns:** `boolean`
