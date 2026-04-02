# IDeathMessageProvider

**Package:** `net.neoforged.neoforge.common.damagesource`
**Type:** interface

## Description

An `IDeathMessageProvider` is used by custom `DeathMessageType` instances.
This allows providing custom death messages based on the available parameters, instead of the hard-coded vanilla defaults.

## Methods

### getDeathMessage

```java
Component getDeathMessage(LivingEntity entity, CombatEntry lastEntry, CombatEntry mostSignificantFall)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `lastEntry` (`CombatEntry`)
- `mostSignificantFall` (`CombatEntry`)

**Returns:** `Component`
