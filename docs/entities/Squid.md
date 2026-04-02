# Squid

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `WaterAnimal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `xBodyRot` | `float` |  |
| `xBodyRotO` | `float` |  |
| `zBodyRot` | `float` |  |
| `zBodyRotO` | `float` |  |
| `tentacleMovement` | `float` |  |
| `oldTentacleMovement` | `float` |  |
| `tentacleAngle` | `float` |  |
| `oldTentacleAngle` | `float` |  |

## Methods

### Squid

```java
public Squid(EntityType<? extends Squid> p_29953_, Level p_29954_)
```

**Parameters:**

- `p_29953_` (`EntityType<? extends Squid>`)
- `p_29954_` (`Level`)

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

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29980_)
```

**Parameters:**

- `p_29980_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSquirtSound

```java
protected SoundEvent getSquirtSound()
```

**Returns:** `protected SoundEvent`

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### getDefaultGravity

```java
protected double getDefaultGravity()
```

**Returns:** `double`

### aiStep

```java
public void aiStep()
```

### hurt

```java
public boolean hurt(DamageSource p_29963_, float p_29964_)
```

**Parameters:**

- `p_29963_` (`DamageSource`)
- `p_29964_` (`float`)

**Returns:** `boolean`

### rotateVector

```java
private Vec3 rotateVector(Vec3 p_29986_)
```

**Parameters:**

- `p_29986_` (`Vec3`)

**Returns:** `private Vec3`

### spawnInk

```java
private void spawnInk()
```

**Returns:** `private void`

### getInkParticle

```java
protected ParticleOptions getInkParticle()
```

**Returns:** `protected ParticleOptions`

### travel

```java
public void travel(Vec3 p_29984_)
```

**Parameters:**

- `p_29984_` (`Vec3`)

### handleEntityEvent

```java
public void handleEntityEvent(byte p_29957_)
```

**Parameters:**

- `p_29957_` (`byte`)

### setMovementVector

```java
public void setMovementVector(float p_29959_, float p_29960_, float p_29961_)
```

**Parameters:**

- `p_29959_` (`float`)
- `p_29960_` (`float`)
- `p_29961_` (`float`)

**Returns:** `public void`

### hasMovementVector

```java
public boolean hasMovementVector()
```

**Returns:** `public boolean`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
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

### SquidRandomMovementGoal

```java
public SquidRandomMovementGoal(Squid p_30004_)
```

**Parameters:**

- `p_30004_` (`Squid`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```
