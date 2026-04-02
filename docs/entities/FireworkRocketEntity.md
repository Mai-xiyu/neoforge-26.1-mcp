# FireworkRocketEntity

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `Projectile`
**Implements:** `ItemSupplier`

## Methods

### FireworkRocketEntity

```java
public FireworkRocketEntity(EntityType<? extends FireworkRocketEntity> p_37027_, Level p_37028_)
```

**Parameters:**

- `p_37027_` (`EntityType<? extends FireworkRocketEntity>`)
- `p_37028_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FireworkRocketEntity

```java
public FireworkRocketEntity(Level p_37030_, double p_37031_, double p_37032_, double p_37033_, ItemStack p_37034_)
```

**Parameters:**

- `p_37030_` (`Level`)
- `p_37031_` (`double`)
- `p_37032_` (`double`)
- `p_37033_` (`double`)
- `p_37034_` (`ItemStack`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FireworkRocketEntity

```java
public FireworkRocketEntity(Level p_37036_, Entity p_37037_, double p_37038_, double p_37039_, double p_37040_, ItemStack p_37041_)
```

**Parameters:**

- `p_37036_` (`Level`)
- `p_37037_` (`Entity`)
- `p_37038_` (`double`)
- `p_37039_` (`double`)
- `p_37040_` (`double`)
- `p_37041_` (`ItemStack`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### FireworkRocketEntity

```java
public FireworkRocketEntity(Level p_37058_, ItemStack p_37059_, LivingEntity p_37060_)
```

**Parameters:**

- `p_37058_` (`Level`)
- `p_37059_` (`ItemStack`)
- `p_37060_` (`LivingEntity`)

**Returns:** `public`

### FireworkRocketEntity

```java
public FireworkRocketEntity(Level p_37043_, ItemStack p_37044_, double p_37045_, double p_37046_, double p_37047_, boolean p_37048_)
```

**Parameters:**

- `p_37043_` (`Level`)
- `p_37044_` (`ItemStack`)
- `p_37045_` (`double`)
- `p_37046_` (`double`)
- `p_37047_` (`double`)
- `p_37048_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### FireworkRocketEntity

```java
public FireworkRocketEntity(Level p_37050_, ItemStack p_37051_, Entity p_37052_, double p_37053_, double p_37054_, double p_37055_, boolean p_37056_)
```

**Parameters:**

- `p_37050_` (`Level`)
- `p_37051_` (`ItemStack`)
- `p_37052_` (`Entity`)
- `p_37053_` (`double`)
- `p_37054_` (`double`)
- `p_37055_` (`double`)
- `p_37056_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326171_)
```

**Parameters:**

- `p_326171_` (`SynchedEntityData.Builder`)

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_37065_)
```

**Parameters:**

- `p_37065_` (`double`)

**Returns:** `boolean`

### shouldRender

```java
public boolean shouldRender(double p_37083_, double p_37084_, double p_37085_)
```

**Parameters:**

- `p_37083_` (`double`)
- `p_37084_` (`double`)
- `p_37085_` (`double`)

**Returns:** `boolean`

### tick

```java
public void tick()
```

### onHit

```java
protected void onHit(HitResult result)
```

**Parameters:**

- `result` (`HitResult`)

### explode

```java
private void explode()
```

**Returns:** `private void`

### onHitEntity

```java
protected void onHitEntity(EntityHitResult p_37071_)
```

**Parameters:**

- `p_37071_` (`EntityHitResult`)

### onHitBlock

```java
protected void onHitBlock(BlockHitResult p_37069_)
```

**Parameters:**

- `p_37069_` (`BlockHitResult`)

### hasExplosion

```java
private boolean hasExplosion()
```

**Returns:** `private boolean`

### dealExplosionDamage

```java
private void dealExplosionDamage()
```

**Returns:** `private void`

### isAttachedToEntity

```java
private boolean isAttachedToEntity()
```

**Returns:** `private boolean`

### isShotAtAngle

```java
public boolean isShotAtAngle()
```

**Returns:** `public boolean`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_37063_)
```

**Parameters:**

- `p_37063_` (`byte`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_37075_)
```

**Parameters:**

- `p_37075_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_37073_)
```

**Parameters:**

- `p_37073_` (`CompoundTag`)

### getExplosions

```java
private List<FireworkExplosion> getExplosions()
```

**Returns:** `private List<FireworkExplosion>`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `ItemStack`

### isAttackable

```java
public boolean isAttackable()
```

**Returns:** `boolean`

### getDefaultItem

```java
private static ItemStack getDefaultItem()
```

**Returns:** `private static ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### calculateHorizontalHurtKnockbackDirection

```java
public DoubleDoubleImmutablePair calculateHorizontalHurtKnockbackDirection(LivingEntity p_345239_, DamageSource p_345155_)
```

**Parameters:**

- `p_345239_` (`LivingEntity`)
- `p_345155_` (`DamageSource`)

**Returns:** `DoubleDoubleImmutablePair`
