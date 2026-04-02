# Breeze

**Package:** `net.minecraft.world.entity.monster.breeze`
**Type:** class
**Extends:** `Monster`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `idle` | `AnimationState` |  |
| `slide` | `AnimationState` |  |
| `slideBack` | `AnimationState` |  |
| `longJump` | `AnimationState` |  |
| `shoot` | `AnimationState` |  |
| `inhale` | `AnimationState` |  |

## Methods

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### Breeze

```java
public Breeze(EntityType<? extends Monster> p_312213_, Level p_312377_)
```

**Parameters:**

- `p_312213_` (`EntityType<? extends Monster>`)
- `p_312377_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_312201_)
```

**Parameters:**

- `p_312201_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Breeze> getBrain()
```

**Returns:** `Brain<Breeze>`

### brainProvider

```java
protected Brain.Provider<Breeze> brainProvider()
```

**Returns:** `Brain.Provider<Breeze>`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_312373_)
```

**Parameters:**

- `p_312373_` (`EntityDataAccessor<?>`)

### resetAnimations

```java
private void resetAnimations()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

### resetJumpTrail

```java
public Breeze resetJumpTrail()
```

**Returns:** `public Breeze`

### emitJumpTrailParticles

```java
public void emitJumpTrailParticles()
```

**Returns:** `public void`

### emitGroundParticles

```java
public void emitGroundParticles(int p_312637_)
```

**Parameters:**

- `p_312637_` (`int`)

**Returns:** `public void`

### playAmbientSound

```java
public void playAmbientSound()
```

### playWhirlSound

```java
public void playWhirlSound()
```

**Returns:** `public void`

### deflection

```java
public ProjectileDeflection deflection(Projectile p_320843_)
```

**Parameters:**

- `p_320843_` (`Projectile`)

**Returns:** `ProjectileDeflection`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_312252_)
```

**Parameters:**

- `p_312252_` (`DamageSource`)

**Returns:** `SoundEvent`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtBy

```java
public Optional<LivingEntity> getHurtBy()
```

**Returns:** `public Optional<LivingEntity>`

### withinInnerCircleRange

```java
public boolean withinInnerCircleRange(Vec3 p_312331_)
```

**Parameters:**

- `p_312331_` (`Vec3`)

**Returns:** `public boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### canAttackType

```java
public boolean canAttackType(EntityType<?> p_312806_)
```

**Parameters:**

- `p_312806_` (`EntityType<?>`)

**Returns:** `boolean`

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### getHeadRotSpeed

```java
public int getHeadRotSpeed()
```

**Returns:** `int`

### getSnoutYPosition

```java
public double getSnoutYPosition()
```

**Returns:** `public double`

### isInvulnerableTo

```java
public boolean isInvulnerableTo(DamageSource p_312691_)
```

**Parameters:**

- `p_312691_` (`DamageSource`)

**Returns:** `boolean`

### getFluidJumpThreshold

```java
public double getFluidJumpThreshold()
```

**Returns:** `double`

### causeFallDamage

```java
public boolean causeFallDamage(float p_312702_, float p_312120_, DamageSource p_312076_)
```

**Parameters:**

- `p_312702_` (`float`)
- `p_312120_` (`float`)
- `p_312076_` (`DamageSource`)

**Returns:** `boolean`

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`
