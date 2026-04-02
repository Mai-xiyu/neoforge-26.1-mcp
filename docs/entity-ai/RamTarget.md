# RamTarget

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<Goat>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TIME_OUT_DURATION` | `int` |  |
| `RAM_SPEED_FORCE_FACTOR` | `float` |  |

## Methods

### RamTarget

```java
public RamTarget(Function<Goat, UniformInt> p_217342_, TargetingConditions p_217343_, float p_217344_, ToDoubleFunction<Goat> p_217345_, Function<Goat, SoundEvent> p_217346_, Function<Goat, SoundEvent> p_217347_)
```

**Parameters:**

- `p_217342_` (`Function<Goat, UniformInt>`)
- `p_217343_` (`TargetingConditions`)
- `p_217344_` (`float`)
- `p_217345_` (`ToDoubleFunction<Goat>`)
- `p_217346_` (`Function<Goat, SoundEvent>`)
- `p_217347_` (`Function<Goat, SoundEvent>`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_217349_, Goat p_217350_)
```

**Parameters:**

- `p_217349_` (`ServerLevel`)
- `p_217350_` (`Goat`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_217352_, Goat p_217353_, long p_217354_)
```

**Parameters:**

- `p_217352_` (`ServerLevel`)
- `p_217353_` (`Goat`)
- `p_217354_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_217359_, Goat p_217360_, long p_217361_)
```

**Parameters:**

- `p_217359_` (`ServerLevel`)
- `p_217360_` (`Goat`)
- `p_217361_` (`long`)

**Returns:** `protected void`

### tick

```java
protected void tick(ServerLevel p_217366_, Goat p_217367_, long p_217368_)
```

**Parameters:**

- `p_217366_` (`ServerLevel`)
- `p_217367_` (`Goat`)
- `p_217368_` (`long`)

**Returns:** `protected void`

### hasRammedHornBreakingBlock

```java
private boolean hasRammedHornBreakingBlock(ServerLevel p_217363_, Goat p_217364_)
```

**Parameters:**

- `p_217363_` (`ServerLevel`)
- `p_217364_` (`Goat`)

**Returns:** `private boolean`

### finishRam

```java
protected void finishRam(ServerLevel p_217356_, Goat p_217357_)
```

**Parameters:**

- `p_217356_` (`ServerLevel`)
- `p_217357_` (`Goat`)

**Returns:** `protected void`
