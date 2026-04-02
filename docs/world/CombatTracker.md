# CombatTracker

**Package:** `net.minecraft.world.damagesource`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RESET_DAMAGE_STATUS_TIME` | `int` |  |
| `RESET_COMBAT_STATUS_TIME` | `int` |  |
| `INTENTIONAL_GAME_DESIGN_STYLE` | `Style` |  |

## Methods

### CombatTracker

```java
public CombatTracker(LivingEntity p_19285_)
```

**Parameters:**

- `p_19285_` (`LivingEntity`)

**Returns:** `public`

### recordDamage

```java
public void recordDamage(DamageSource p_289533_, float p_289559_)
```

**Parameters:**

- `p_289533_` (`DamageSource`)
- `p_289559_` (`float`)

**Returns:** `public void`

### shouldEnterCombat

```java
private static boolean shouldEnterCombat(DamageSource p_289554_)
```

**Parameters:**

- `p_289554_` (`DamageSource`)

**Returns:** `private static boolean`

### getMessageForAssistedFall

```java
private Component getMessageForAssistedFall(Entity p_289547_, Component p_289532_, String p_289555_, String p_289548_)
```

**Parameters:**

- `p_289547_` (`Entity`)
- `p_289532_` (`Component`)
- `p_289555_` (`String`)
- `p_289548_` (`String`)

**Returns:** `private Component`

### getFallMessage

```java
public Component getFallMessage(CombatEntry p_289570_, Entity p_289561_)
```

**Parameters:**

- `p_289570_` (`CombatEntry`)
- `p_289561_` (`Entity`)

**Returns:** `public Component`

### getDeathMessage

```java
public Component getDeathMessage()
```

**Returns:** `public Component`

### getMostSignificantFall

```java
public CombatEntry getMostSignificantFall()
```

**Returns:** `CombatEntry`

### getCombatDuration

```java
public int getCombatDuration()
```

**Returns:** `public int`

### recheckStatus

```java
public void recheckStatus()
```

**Returns:** `public void`
