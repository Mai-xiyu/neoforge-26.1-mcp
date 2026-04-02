# FollowTemptation

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<PathfinderMob>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEMPTATION_COOLDOWN` | `int` |  |
| `DEFAULT_CLOSE_ENOUGH_DIST` | `double` |  |
| `BACKED_UP_CLOSE_ENOUGH_DIST` | `double` |  |

## Methods

### FollowTemptation

```java
public FollowTemptation(Function<LivingEntity, Float> p_147486_)
```

**Parameters:**

- `p_147486_` (`Function<LivingEntity, Float>`)

**Returns:** `public`

### this

```java
 this(p_288784_ -> 2.5)
```

**Parameters:**

- `2.5` (`p_288784_ ->`)

**Returns:** ``

### FollowTemptation

```java
public FollowTemptation(Function<LivingEntity, Float> p_288997_, Function<LivingEntity, Double> p_288972_)
```

**Parameters:**

- `p_288997_` (`Function<LivingEntity, Float>`)
- `p_288972_` (`Function<LivingEntity, Double>`)

**Returns:** `public`

### getSpeedModifier

```java
protected float getSpeedModifier(PathfinderMob p_147498_)
```

**Parameters:**

- `p_147498_` (`PathfinderMob`)

**Returns:** `protected float`

### getTemptingPlayer

```java
private Optional<Player> getTemptingPlayer(PathfinderMob p_147509_)
```

**Parameters:**

- `p_147509_` (`PathfinderMob`)

**Returns:** `private Optional<Player>`

### timedOut

```java
protected boolean timedOut(long p_147488_)
```

**Parameters:**

- `p_147488_` (`long`)

**Returns:** `boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_147494_, PathfinderMob p_147495_, long p_147496_)
```

**Parameters:**

- `p_147494_` (`ServerLevel`)
- `p_147495_` (`PathfinderMob`)
- `p_147496_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_147505_, PathfinderMob p_147506_, long p_147507_)
```

**Parameters:**

- `p_147505_` (`ServerLevel`)
- `p_147506_` (`PathfinderMob`)
- `p_147507_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_147515_, PathfinderMob p_147516_, long p_147517_)
```

**Parameters:**

- `p_147515_` (`ServerLevel`)
- `p_147516_` (`PathfinderMob`)
- `p_147517_` (`long`)

**Returns:** `protected void`

### tick

```java
protected void tick(ServerLevel p_147523_, PathfinderMob p_147524_, long p_147525_)
```

**Parameters:**

- `p_147523_` (`ServerLevel`)
- `p_147524_` (`PathfinderMob`)
- `p_147525_` (`long`)

**Returns:** `protected void`
