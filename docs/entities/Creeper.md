# Creeper

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`
**Implements:** `PowerableMob`

## Methods

### Creeper

```java
public Creeper(EntityType<? extends Creeper> p_32278_, Level p_32279_)
```

**Parameters:**

- `p_32278_` (`EntityType<? extends Creeper>`)
- `p_32279_` (`Level`)

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

### getMaxFallDistance

```java
public int getMaxFallDistance()
```

**Returns:** `int`

### causeFallDamage

```java
public boolean causeFallDamage(float p_149687_, float p_149688_, DamageSource p_149689_)
```

**Parameters:**

- `p_149687_` (`float`)
- `p_149688_` (`float`)
- `p_149689_` (`DamageSource`)

**Returns:** `boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326212_)
```

**Parameters:**

- `p_326212_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_32304_)
```

**Parameters:**

- `p_32304_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_32296_)
```

**Parameters:**

- `p_32296_` (`CompoundTag`)

### tick

```java
public void tick()
```

### setTarget

```java
public void setTarget(LivingEntity p_149691_)
```

**Parameters:**

- `p_149691_` (`LivingEntity`)

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32309_)
```

**Parameters:**

- `p_32309_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### dropCustomDeathLoot

```java
protected void dropCustomDeathLoot(ServerLevel p_348566_, DamageSource p_32292_, boolean p_32294_)
```

**Parameters:**

- `p_348566_` (`ServerLevel`)
- `p_32292_` (`DamageSource`)
- `p_32294_` (`boolean`)

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_32281_)
```

**Parameters:**

- `p_32281_` (`Entity`)

**Returns:** `boolean`

### isPowered

```java
public boolean isPowered()
```

**Returns:** `boolean`

### getSwelling

```java
public float getSwelling(float p_32321_)
```

**Parameters:**

- `p_32321_` (`float`)

**Returns:** `public float`

### getSwellDir

```java
public int getSwellDir()
```

**Returns:** `public int`

### setSwellDir

```java
public void setSwellDir(int p_32284_)
```

**Parameters:**

- `p_32284_` (`int`)

**Returns:** `public void`

### thunderHit

```java
public void thunderHit(ServerLevel p_32286_, LightningBolt p_32287_)
```

**Parameters:**

- `p_32286_` (`ServerLevel`)
- `p_32287_` (`LightningBolt`)

### mobInteract

```java
protected InteractionResult mobInteract(Player p_32301_, InteractionHand p_32302_)
```

**Parameters:**

- `p_32301_` (`Player`)
- `p_32302_` (`InteractionHand`)

**Returns:** `InteractionResult`

### explodeCreeper

```java
private void explodeCreeper()
```

**Returns:** `private void`

### spawnLingeringCloud

```java
private void spawnLingeringCloud()
```

**Returns:** `private void`

### isIgnited

```java
public boolean isIgnited()
```

**Returns:** `public boolean`

### ignite

```java
public void ignite()
```

**Returns:** `public void`

### canDropMobsSkull

```java
public boolean canDropMobsSkull()
```

**Returns:** `public boolean`

### increaseDroppedSkulls

```java
public void increaseDroppedSkulls()
```

**Returns:** `public void`
