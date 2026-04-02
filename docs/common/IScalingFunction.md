# IScalingFunction

**Package:** `net.neoforged.neoforge.common.damagesource`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Description

An `IScalingFunction` is used by custom `DamageScaling` instances.
This allows finer control over the actual scaling value, instead of the hard-coded vanilla defaults.

## Methods

### scaleDamage

```java
float scaleDamage(DamageSource source, Player target, float amount, Difficulty difficulty)
```

**Parameters:**

- `source` (`DamageSource`)
- `target` (`Player`)
- `amount` (`float`)
- `difficulty` (`Difficulty`)

**Returns:** `float`
