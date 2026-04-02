# EnderDragonPhase

**Package:** `net.minecraft.world.entity.boss.enderdragon.phases`
**Type:** class<T extends DragonPhaseInstance>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HOLDING_PATTERN` | `EnderDragonPhase<DragonHoldingPatternPhase>` |  |
| `STRAFE_PLAYER` | `EnderDragonPhase<DragonStrafePlayerPhase>` |  |
| `LANDING_APPROACH` | `EnderDragonPhase<DragonLandingApproachPhase>` |  |
| `LANDING` | `EnderDragonPhase<DragonLandingPhase>` |  |
| `TAKEOFF` | `EnderDragonPhase<DragonTakeoffPhase>` |  |
| `SITTING_FLAMING` | `EnderDragonPhase<DragonSittingFlamingPhase>` |  |
| `SITTING_SCANNING` | `EnderDragonPhase<DragonSittingScanningPhase>` |  |
| `SITTING_ATTACKING` | `EnderDragonPhase<DragonSittingAttackingPhase>` |  |
| `CHARGING_PLAYER` | `EnderDragonPhase<DragonChargePlayerPhase>` |  |
| `DYING` | `EnderDragonPhase<DragonDeathPhase>` |  |
| `HOVERING` | `EnderDragonPhase<DragonHoverPhase>` |  |

## Methods

### EnderDragonPhase

```java
private EnderDragonPhase(int p_31394_, Class<? extends DragonPhaseInstance> p_31395_, String p_31396_)
```

**Parameters:**

- `p_31394_` (`int`)
- `p_31395_` (`Class<? extends DragonPhaseInstance>`)
- `p_31396_` (`String`)

**Returns:** `private`

### createInstance

```java
public DragonPhaseInstance createInstance(EnderDragon p_31401_)
```

**Parameters:**

- `p_31401_` (`EnderDragon`)

**Returns:** `public DragonPhaseInstance`

### Error

```java
throw new Error()
```

**Returns:** `throw new`

### getConstructor

```java
protected Constructor<? extends DragonPhaseInstance> getConstructor()
```

**Returns:** `protected Constructor<? extends DragonPhaseInstance>`

### getId

```java
public int getId()
```

**Returns:** `public int`

### toString

```java
public String toString()
```

**Returns:** `String`

### getById

```java
public static EnderDragonPhase<?> getById(int p_31399_)
```

**Parameters:**

- `p_31399_` (`int`)

**Returns:** `public static EnderDragonPhase<?>`

### create

```java
< phases.length ? phases[p_31399_] : HOLDING_PATTERN;
    }

    public static int getCount() {
        return phases.length;
    }

    private static <T extends DragonPhaseInstance> EnderDragonPhase<T> create(Class<T> p_31403_, String p_31404_)
```

**Parameters:**

- `p_31403_` (`Class<T>`)
- `p_31404_` (`String`)

**Returns:** `EnderDragonPhase<T>`
