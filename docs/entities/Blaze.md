# Blaze

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`

## Methods

### Blaze

```java
public Blaze(EntityType<? extends Blaze> p_32219_, Level p_32220_)
```

**Parameters:**

- `p_32219_` (`EntityType<? extends Blaze>`)
- `p_32220_` (`Level`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326216_)
```

**Parameters:**

- `p_326216_` (`SynchedEntityData.Builder`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32235_)
```

**Parameters:**

- `p_32235_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getLightLevelDependentMagicValue

```java
public float getLightLevelDependentMagicValue()
```

**Returns:** `float`

### aiStep

```java
public void aiStep()
```

### isSensitiveToWater

```java
public boolean isSensitiveToWater()
```

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### isOnFire

```java
public boolean isOnFire()
```

**Returns:** `boolean`

### isCharged

```java
private boolean isCharged()
```

**Returns:** `private boolean`

### setCharged

```java
void setCharged(boolean p_32241_)
```

**Parameters:**

- `p_32241_` (`boolean`)

### BlazeAttackGoal

```java
public BlazeAttackGoal(Blaze p_32247_)
```

**Parameters:**

- `p_32247_` (`Blaze`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### getFollowDistance

```java
private double getFollowDistance()
```

**Returns:** `private double`
