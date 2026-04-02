# ShootTongue

**Package:** `net.minecraft.world.entity.animal.frog`
**Type:** class
**Extends:** `Behavior<Frog>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TIME_OUT_DURATION` | `int` |  |
| `CATCH_ANIMATION_DURATION` | `int` |  |
| `TONGUE_ANIMATION_DURATION` | `int` |  |
| `UNREACHABLE_TONGUE_TARGETS_COOLDOWN_DURATION` | `int` |  |
| `MAX_UNREACHBLE_TONGUE_TARGETS_IN_MEMORY` | `int` |  |

## Methods

### ShootTongue

```java
public ShootTongue(SoundEvent p_218620_, SoundEvent p_218621_)
```

**Parameters:**

- `p_218620_` (`SoundEvent`)
- `p_218621_` (`SoundEvent`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_218630_, Frog p_218631_)
```

**Parameters:**

- `p_218630_` (`ServerLevel`)
- `p_218631_` (`Frog`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_218633_, Frog p_218634_, long p_218635_)
```

**Parameters:**

- `p_218633_` (`ServerLevel`)
- `p_218634_` (`Frog`)
- `p_218635_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_218644_, Frog p_218645_, long p_218646_)
```

**Parameters:**

- `p_218644_` (`ServerLevel`)
- `p_218645_` (`Frog`)
- `p_218646_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_218652_, Frog p_218653_, long p_218654_)
```

**Parameters:**

- `p_218652_` (`ServerLevel`)
- `p_218653_` (`Frog`)
- `p_218654_` (`long`)

**Returns:** `protected void`

### eatEntity

```java
private void eatEntity(ServerLevel p_218641_, Frog p_218642_)
```

**Parameters:**

- `p_218641_` (`ServerLevel`)
- `p_218642_` (`Frog`)

**Returns:** `private void`

### tick

```java
protected void tick(ServerLevel p_218660_, Frog p_218661_, long p_218662_)
```

**Parameters:**

- `p_218660_` (`ServerLevel`)
- `p_218661_` (`Frog`)
- `p_218662_` (`long`)

**Returns:** `protected void`

### canPathfindToTarget

```java
private boolean canPathfindToTarget(Frog p_238359_, LivingEntity p_238360_)
```

**Parameters:**

- `p_238359_` (`Frog`)
- `p_238360_` (`LivingEntity`)

**Returns:** `private boolean`

### addUnreachableTargetToMemory

```java
private void addUnreachableTargetToMemory(Frog p_238444_, LivingEntity p_243335_)
```

**Parameters:**

- `p_238444_` (`Frog`)
- `p_243335_` (`LivingEntity`)

**Returns:** `private void`
