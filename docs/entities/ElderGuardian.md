# ElderGuardian

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Guardian`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ELDER_SIZE_SCALE` | `float` |  |

## Methods

### ElderGuardian

```java
public ElderGuardian(EntityType<? extends ElderGuardian> p_32460_, Level p_32461_)
```

**Parameters:**

- `p_32460_` (`EntityType<? extends ElderGuardian>`)
- `p_32461_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getAttackDuration

```java
public int getAttackDuration()
```

**Returns:** `int`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32468_)
```

**Parameters:**

- `p_32468_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getFlopSound

```java
protected SoundEvent getFlopSound()
```

**Returns:** `SoundEvent`

### customServerAiStep

```java
protected void customServerAiStep()
```
