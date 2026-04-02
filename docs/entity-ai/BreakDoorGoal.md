# BreakDoorGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class
**Extends:** `DoorInteractGoal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `breakTime` | `int` |  |
| `lastBreakProgress` | `int` |  |
| `doorBreakTime` | `int` |  |

## Methods

### BreakDoorGoal

```java
public BreakDoorGoal(Mob p_25091_, Predicate<Difficulty> p_25092_)
```

**Parameters:**

- `p_25091_` (`Mob`)
- `p_25092_` (`Predicate<Difficulty>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### BreakDoorGoal

```java
public BreakDoorGoal(Mob p_25087_, int p_25088_, Predicate<Difficulty> p_25089_)
```

**Parameters:**

- `p_25087_` (`Mob`)
- `p_25088_` (`int`)
- `p_25089_` (`Predicate<Difficulty>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getDoorBreakTime

```java
protected int getDoorBreakTime()
```

**Returns:** `protected int`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### stop

```java
public void stop()
```

### tick

```java
public void tick()
```

### isValidDifficulty

```java
private boolean isValidDifficulty(Difficulty p_25095_)
```

**Parameters:**

- `p_25095_` (`Difficulty`)

**Returns:** `private boolean`
