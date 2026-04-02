# Ravager

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Raider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STUN_DURATION` | `int` |  |

## Methods

### Ravager

```java
public Ravager(EntityType<? extends Ravager> p_33325_, Level p_33326_)
```

**Parameters:**

- `p_33325_` (`EntityType<? extends Ravager>`)
- `p_33326_` (`Level`)

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

### updateControlFlags

```java
protected void updateControlFlags()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_33353_)
```

**Parameters:**

- `p_33353_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_33344_)
```

**Parameters:**

- `p_33344_` (`CompoundTag`)

### getCelebrateSound

```java
public SoundEvent getCelebrateSound()
```

**Returns:** `SoundEvent`

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### aiStep

```java
public void aiStep()
```

### stunEffect

```java
private void stunEffect()
```

**Returns:** `private void`

### isImmobile

```java
protected boolean isImmobile()
```

**Returns:** `boolean`

### hasLineOfSight

```java
public boolean hasLineOfSight(Entity p_149755_)
```

**Parameters:**

- `p_149755_` (`Entity`)

**Returns:** `boolean`

### blockedByShield

```java
protected void blockedByShield(LivingEntity p_33361_)
```

**Parameters:**

- `p_33361_` (`LivingEntity`)

### roar

```java
private void roar()
```

**Returns:** `private void`

### strongKnockback

```java
private void strongKnockback(Entity p_33340_)
```

**Parameters:**

- `p_33340_` (`Entity`)

**Returns:** `private void`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_33335_)
```

**Parameters:**

- `p_33335_` (`byte`)

### getAttackTick

```java
public int getAttackTick()
```

**Returns:** `public int`

### getStunnedTick

```java
public int getStunnedTick()
```

**Returns:** `public int`

### getRoarTick

```java
public int getRoarTick()
```

**Returns:** `public int`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_33328_)
```

**Parameters:**

- `p_33328_` (`Entity`)

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33359_)
```

**Parameters:**

- `p_33359_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_33350_, BlockState p_33351_)
```

**Parameters:**

- `p_33350_` (`BlockPos`)
- `p_33351_` (`BlockState`)

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_33342_)
```

**Parameters:**

- `p_33342_` (`LevelReader`)

**Returns:** `boolean`

### applyRaidBuffs

```java
public void applyRaidBuffs(ServerLevel p_348582_, int p_33337_, boolean p_33338_)
```

**Parameters:**

- `p_348582_` (`ServerLevel`)
- `p_33337_` (`int`)
- `p_33338_` (`boolean`)

### canBeLeader

```java
public boolean canBeLeader()
```

**Returns:** `boolean`

### getAttackBoundingBox

```java
protected AABB getAttackBoundingBox()
```

**Returns:** `AABB`
