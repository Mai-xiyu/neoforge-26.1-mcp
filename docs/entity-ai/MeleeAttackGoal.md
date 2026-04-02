# MeleeAttackGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class
**Extends:** `Goal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `mob` | `PathfinderMob` |  |

## Methods

### MeleeAttackGoal

```java
public MeleeAttackGoal(PathfinderMob p_25552_, double p_25553_, boolean p_25554_)
```

**Parameters:**

- `p_25552_` (`PathfinderMob`)
- `p_25553_` (`double`)
- `p_25554_` (`boolean`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
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

### checkAndPerformAttack

```java
protected void checkAndPerformAttack(LivingEntity p_25557_)
```

**Parameters:**

- `p_25557_` (`LivingEntity`)

**Returns:** `protected void`

### resetAttackCooldown

```java
protected void resetAttackCooldown()
```

**Returns:** `protected void`

### isTimeToAttack

```java
protected boolean isTimeToAttack()
```

**Returns:** `protected boolean`

### canPerformAttack

```java
protected boolean canPerformAttack(LivingEntity p_301299_)
```

**Parameters:**

- `p_301299_` (`LivingEntity`)

**Returns:** `protected boolean`

### getTicksUntilNextAttack

```java
protected int getTicksUntilNextAttack()
```

**Returns:** `protected int`

### getAttackInterval

```java
protected int getAttackInterval()
```

**Returns:** `protected int`
