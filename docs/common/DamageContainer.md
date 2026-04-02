# DamageContainer

**Package:** `net.neoforged.neoforge.common.damagesource`
**Type:** class

## Description

DamageContainer encapsulates aspects of the entity damage sequence so that
relevant context related to damage dealt is accessible throughout the entire
sequence.


Note: certain values will be defaults until the stage in the sequence when they are set.
The Damage Sequence

`LivingEntity#hurt` is invoked on the recipient from the source of
the attack.
`Entity#isInvulnerableTo` is invoked and fires `EntityInvulnerabilityCheckEvent`.
After determining the entity is vulnerable, the `DamageContainer` in instantiated for the entity.
`LivingIncomingDamageEvent` is fired.
`LivingShieldBlockEvent` fires and the result determines if shield effects apply.
`LivingEntity#actuallyHurt` is called.
armor, magic, and mob_effect reductions are captured in the DamageContainer.
`LivingDamageEvent.Pre` is fired.
absorption reductions are captured in the DamageContainer.
if the damage is not zero, entity health is modified and recorded and `LivingDamageEvent.Post` is fired.


## Methods

### getOriginalDamage

```java
float getOriginalDamage()
```

**Returns:** `float`

### getSource

```java
public DamageSource getSource()
```

**Returns:** `DamageSource`

### setNewDamage

```java
public void setNewDamage(float damage)
```

**Parameters:**

- `damage` (`float`)

### getNewDamage

```java
public float getNewDamage()
```

**Returns:** `float`

### addModifier

```java
public void addModifier(Reduction type, IReductionFunction reductionFunction)
```

**Parameters:**

- `type` (`Reduction`)
- `reductionFunction` (`IReductionFunction`)

### getBlockedDamage

```java
public float getBlockedDamage()
```

**Returns:** `float`

### getShieldDamage

```java
public float getShieldDamage()
```

**Returns:** `float`

### setPostAttackInvulnerabilityTicks

```java
public void setPostAttackInvulnerabilityTicks(int ticks)
```

**Parameters:**

- `ticks` (`int`)

### getPostAttackInvulnerabilityTicks

```java
public int getPostAttackInvulnerabilityTicks()
```

**Returns:** `int`

### getReduction

```java
public float getReduction(Reduction type)
```

**Parameters:**

- `type` (`Reduction`)

**Returns:** `float`

### setBlockedDamage

```java
.Internal
    public void setBlockedDamage(LivingShieldBlockEvent event)
```

**Parameters:**

- `event` (`LivingShieldBlockEvent`)

**Returns:** `.Internal
    public void`

### setReduction

```java
.Internal
    public void setReduction(Reduction reduction, float amount)
```

**Parameters:**

- `reduction` (`Reduction`)
- `amount` (`float`)

**Returns:** `.Internal
    public void`

### modifyReduction

```java
private float modifyReduction(Reduction type, float reduction)
```

**Parameters:**

- `type` (`Reduction`)
- `reduction` (`float`)

**Returns:** `private float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Reduction` | enum |  |
