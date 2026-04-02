# CrossbowAttack

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends Mob & CrossbowAttackMob, T extends LivingEntity> extends Behavior<E>

## Methods

### CrossbowAttack

```java
public CrossbowAttack()
```

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_22778_, E p_22779_)
```

**Parameters:**

- `p_22778_` (`ServerLevel`)
- `p_22779_` (`E`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_22781_, E p_22782_, long p_22783_)
```

**Parameters:**

- `p_22781_` (`ServerLevel`)
- `p_22782_` (`E`)
- `p_22783_` (`long`)

**Returns:** `protected boolean`

### tick

```java
protected void tick(ServerLevel p_22794_, E p_22795_, long p_22796_)
```

**Parameters:**

- `p_22794_` (`ServerLevel`)
- `p_22795_` (`E`)
- `p_22796_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_22805_, E p_22806_, long p_22807_)
```

**Parameters:**

- `p_22805_` (`ServerLevel`)
- `p_22806_` (`E`)
- `p_22807_` (`long`)

**Returns:** `protected void`

### crossbowAttack

```java
private void crossbowAttack(E p_22787_, LivingEntity p_22788_)
```

**Parameters:**

- `p_22787_` (`E`)
- `p_22788_` (`LivingEntity`)

**Returns:** `private void`

### lookAtTarget

```java
private void lookAtTarget(Mob p_22798_, LivingEntity p_22799_)
```

**Parameters:**

- `p_22798_` (`Mob`)
- `p_22799_` (`LivingEntity`)

**Returns:** `private void`

### getAttackTarget

```java
private static LivingEntity getAttackTarget(LivingEntity p_22785_)
```

**Parameters:**

- `p_22785_` (`LivingEntity`)

**Returns:** `private static LivingEntity`
