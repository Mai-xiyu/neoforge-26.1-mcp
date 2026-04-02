# ShulkerBullet

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `Projectile`

## Methods

### ShulkerBullet

```java
public ShulkerBullet(EntityType<? extends ShulkerBullet> p_37319_, Level p_37320_)
```

**Parameters:**

- `p_37319_` (`EntityType<? extends ShulkerBullet>`)
- `p_37320_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ShulkerBullet

```java
public ShulkerBullet(Level p_37330_, LivingEntity p_37331_, Entity p_37332_, Direction.Axis p_37333_)
```

**Parameters:**

- `p_37330_` (`Level`)
- `p_37331_` (`LivingEntity`)
- `p_37332_` (`Entity`)
- `p_37333_` (`Direction.Axis`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_37357_)
```

**Parameters:**

- `p_37357_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_37353_)
```

**Parameters:**

- `p_37353_` (`CompoundTag`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326398_)
```

**Parameters:**

- `p_326398_` (`SynchedEntityData.Builder`)

### setMoveDirection

```java
private void setMoveDirection(Direction p_37351_)
```

**Parameters:**

- `p_37351_` (`Direction`)

**Returns:** `private void`

### selectNextMoveDirection

```java
private void selectNextMoveDirection(Direction.Axis p_37349_)
```

**Parameters:**

- `p_37349_` (`Direction.Axis`)

**Returns:** `private void`

### checkDespawn

```java
public void checkDespawn()
```

### getDefaultGravity

```java
protected double getDefaultGravity()
```

**Returns:** `double`

### tick

```java
public void tick()
```

### canHitEntity

```java
protected boolean canHitEntity(Entity p_37341_)
```

**Parameters:**

- `p_37341_` (`Entity`)

**Returns:** `boolean`

### isOnFire

```java
public boolean isOnFire()
```

**Returns:** `boolean`

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_37336_)
```

**Parameters:**

- `p_37336_` (`double`)

**Returns:** `boolean`

### getLightLevelDependentMagicValue

```java
public float getLightLevelDependentMagicValue()
```

**Returns:** `float`

### onHitEntity

```java
protected void onHitEntity(EntityHitResult p_37345_)
```

**Parameters:**

- `p_37345_` (`EntityHitResult`)

### onHitBlock

```java
protected void onHitBlock(BlockHitResult p_37343_)
```

**Parameters:**

- `p_37343_` (`BlockHitResult`)

### destroy

```java
private void destroy()
```

**Returns:** `private void`

### onHit

```java
protected void onHit(HitResult p_37347_)
```

**Parameters:**

- `p_37347_` (`HitResult`)

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### hurt

```java
public boolean hurt(DamageSource p_37338_, float p_37339_)
```

**Parameters:**

- `p_37338_` (`DamageSource`)
- `p_37339_` (`float`)

**Returns:** `boolean`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_150185_)
```

**Parameters:**

- `p_150185_` (`ClientboundAddEntityPacket`)
