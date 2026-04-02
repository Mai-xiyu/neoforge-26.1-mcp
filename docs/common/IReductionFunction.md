# IReductionFunction

**Package:** `net.neoforged.neoforge.common.damagesource`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Description

An `IReductionFunction` is used by `DamageContainer` instances.
This allows sequential modification of damage reduction values to be stored and
later invoked before actual reductions are applied to the damage sequence.

## Methods

### modify

```java
float modify(DamageContainer container, float reductionIn)
```

**Parameters:**

- `container` (`DamageContainer`)
- `reductionIn` (`float`)

**Returns:** `float`
