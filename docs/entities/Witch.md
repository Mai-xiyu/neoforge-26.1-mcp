# Witch

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Raider`
**Implements:** `RangedAttackMob`

## Methods

### Witch

```java
public Witch(EntityType<? extends Witch> p_34134_, Level p_34135_)
```

**Parameters:**

- `p_34134_` (`EntityType<? extends Witch>`)
- `p_34135_` (`Level`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326280_)
```

**Parameters:**

- `p_326280_` (`SynchedEntityData.Builder`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_34154_)
```

**Parameters:**

- `p_34154_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### setUsingItem

```java
public void setUsingItem(boolean p_34164_)
```

**Parameters:**

- `p_34164_` (`boolean`)

**Returns:** `public void`

### isDrinkingPotion

```java
public boolean isDrinkingPotion()
```

**Returns:** `public boolean`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### aiStep

```java
public void aiStep()
```

### getCelebrateSound

```java
public SoundEvent getCelebrateSound()
```

**Returns:** `SoundEvent`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_34138_)
```

**Parameters:**

- `p_34138_` (`byte`)

### getDamageAfterMagicAbsorb

```java
protected float getDamageAfterMagicAbsorb(DamageSource p_34149_, float p_34150_)
```

**Parameters:**

- `p_34149_` (`DamageSource`)
- `p_34150_` (`float`)

**Returns:** `float`

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_34143_, float p_34144_)
```

**Parameters:**

- `p_34143_` (`LivingEntity`)
- `p_34144_` (`float`)

### applyRaidBuffs

```java
public void applyRaidBuffs(ServerLevel p_348621_, int p_34140_, boolean p_34141_)
```

**Parameters:**

- `p_348621_` (`ServerLevel`)
- `p_34140_` (`int`)
- `p_34141_` (`boolean`)

### canBeLeader

```java
public boolean canBeLeader()
```

**Returns:** `boolean`
