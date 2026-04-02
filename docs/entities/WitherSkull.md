# WitherSkull

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `AbstractHurtingProjectile`

## Methods

### WitherSkull

```java
public WitherSkull(EntityType<? extends WitherSkull> p_37598_, Level p_37599_)
```

**Parameters:**

- `p_37598_` (`EntityType<? extends WitherSkull>`)
- `p_37599_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### WitherSkull

```java
public WitherSkull(Level p_37609_, LivingEntity p_37610_, Vec3 p_347464_)
```

**Parameters:**

- `p_37609_` (`Level`)
- `p_37610_` (`LivingEntity`)
- `p_347464_` (`Vec3`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getInertia

```java
protected float getInertia()
```

**Returns:** `float`

### isOnFire

```java
public boolean isOnFire()
```

**Returns:** `boolean`

### getBlockExplosionResistance

```java
public float getBlockExplosionResistance(Explosion p_37619_, BlockGetter p_37620_, BlockPos p_37621_, BlockState p_37622_, FluidState p_37623_, float p_37624_)
```

**Parameters:**

- `p_37619_` (`Explosion`)
- `p_37620_` (`BlockGetter`)
- `p_37621_` (`BlockPos`)
- `p_37622_` (`BlockState`)
- `p_37623_` (`FluidState`)
- `p_37624_` (`float`)

**Returns:** `float`

### onHitEntity

```java
protected void onHitEntity(EntityHitResult p_37626_)
```

**Parameters:**

- `p_37626_` (`EntityHitResult`)

### onHit

```java
protected void onHit(HitResult p_37628_)
```

**Parameters:**

- `p_37628_` (`HitResult`)

### hurt

```java
public boolean hurt(DamageSource p_37616_, float p_37617_)
```

**Parameters:**

- `p_37616_` (`DamageSource`)
- `p_37617_` (`float`)

**Returns:** `boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325939_)
```

**Parameters:**

- `p_325939_` (`SynchedEntityData.Builder`)

### isDangerous

```java
public boolean isDangerous()
```

**Returns:** `public boolean`

### setDangerous

```java
public void setDangerous(boolean p_37630_)
```

**Parameters:**

- `p_37630_` (`boolean`)

**Returns:** `public void`

### shouldBurn

```java
protected boolean shouldBurn()
```

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_306205_)
```

**Parameters:**

- `p_306205_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_305818_)
```

**Parameters:**

- `p_305818_` (`CompoundTag`)
