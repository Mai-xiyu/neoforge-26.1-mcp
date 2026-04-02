# SleepInBed

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<LivingEntity>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `COOLDOWN_AFTER_BEING_WOKEN` | `int` |  |

## Methods

### SleepInBed

```java
public SleepInBed()
```

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_24154_, LivingEntity p_24155_)
```

**Parameters:**

- `p_24154_` (`ServerLevel`)
- `p_24155_` (`LivingEntity`)

**Returns:** `boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_24161_, LivingEntity p_24162_, long p_24163_)
```

**Parameters:**

- `p_24161_` (`ServerLevel`)
- `p_24162_` (`LivingEntity`)
- `p_24163_` (`long`)

**Returns:** `boolean`

### start

```java
protected void start(ServerLevel p_24157_, LivingEntity p_24158_, long p_24159_)
```

**Parameters:**

- `p_24157_` (`ServerLevel`)
- `p_24158_` (`LivingEntity`)
- `p_24159_` (`long`)

### timedOut

```java
protected boolean timedOut(long p_24152_)
```

**Parameters:**

- `p_24152_` (`long`)

**Returns:** `boolean`

### stop

```java
protected void stop(ServerLevel p_24165_, LivingEntity p_24166_, long p_24167_)
```

**Parameters:**

- `p_24165_` (`ServerLevel`)
- `p_24166_` (`LivingEntity`)
- `p_24167_` (`long`)
