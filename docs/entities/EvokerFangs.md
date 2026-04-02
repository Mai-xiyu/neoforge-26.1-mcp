# EvokerFangs

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `Entity`
**Implements:** `TraceableEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ATTACK_DURATION` | `int` |  |
| `LIFE_OFFSET` | `int` |  |
| `ATTACK_TRIGGER_TICKS` | `int` |  |

## Methods

### EvokerFangs

```java
public EvokerFangs(EntityType<? extends EvokerFangs> p_36923_, Level p_36924_)
```

**Parameters:**

- `p_36923_` (`EntityType<? extends EvokerFangs>`)
- `p_36924_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### EvokerFangs

```java
public EvokerFangs(Level p_36926_, double p_36927_, double p_36928_, double p_36929_, float p_36930_, int p_36931_, LivingEntity p_36932_)
```

**Parameters:**

- `p_36926_` (`Level`)
- `p_36927_` (`double`)
- `p_36928_` (`double`)
- `p_36929_` (`double`)
- `p_36930_` (`float`)
- `p_36931_` (`int`)
- `p_36932_` (`LivingEntity`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326219_)
```

**Parameters:**

- `p_326219_` (`SynchedEntityData.Builder`)

### setOwner

```java
public void setOwner(LivingEntity p_36939_)
```

**Parameters:**

- `p_36939_` (`LivingEntity`)

**Returns:** `public void`

### getOwner

```java
public LivingEntity getOwner()
```

**Returns:** `LivingEntity`

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_36941_)
```

**Parameters:**

- `p_36941_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_36943_)
```

**Parameters:**

- `p_36943_` (`CompoundTag`)

### tick

```java
public void tick()
```

### dealDamageTo

```java
private void dealDamageTo(LivingEntity p_36945_)
```

**Parameters:**

- `p_36945_` (`LivingEntity`)

**Returns:** `private void`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_36935_)
```

**Parameters:**

- `p_36935_` (`byte`)

### getAnimationProgress

```java
public float getAnimationProgress(float p_36937_)
```

**Parameters:**

- `p_36937_` (`float`)

**Returns:** `public float`
