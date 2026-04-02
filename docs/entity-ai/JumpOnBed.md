# JumpOnBed

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<Mob>`

## Methods

### JumpOnBed

```java
public JumpOnBed(float p_23335_)
```

**Parameters:**

- `p_23335_` (`float`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_23346_, Mob p_23347_)
```

**Parameters:**

- `p_23346_` (`ServerLevel`)
- `p_23347_` (`Mob`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_23349_, Mob p_23350_, long p_23351_)
```

**Parameters:**

- `p_23349_` (`ServerLevel`)
- `p_23350_` (`Mob`)
- `p_23351_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_23372_, Mob p_23373_, long p_23374_)
```

**Parameters:**

- `p_23372_` (`ServerLevel`)
- `p_23373_` (`Mob`)
- `p_23374_` (`long`)

**Returns:** `protected void`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_23383_, Mob p_23384_, long p_23385_)
```

**Parameters:**

- `p_23383_` (`ServerLevel`)
- `p_23384_` (`Mob`)
- `p_23385_` (`long`)

**Returns:** `protected boolean`

### timedOut

```java
protected boolean timedOut(long p_23337_)
```

**Parameters:**

- `p_23337_` (`long`)

**Returns:** `boolean`

### tick

```java
protected void tick(ServerLevel p_23394_, Mob p_23395_, long p_23396_)
```

**Parameters:**

- `p_23394_` (`ServerLevel`)
- `p_23395_` (`Mob`)
- `p_23396_` (`long`)

**Returns:** `protected void`

### startWalkingTowardsBed

```java
private void startWalkingTowardsBed(Mob p_23362_, BlockPos p_23363_)
```

**Parameters:**

- `p_23362_` (`Mob`)
- `p_23363_` (`BlockPos`)

**Returns:** `private void`

### nearBed

```java
private boolean nearBed(ServerLevel p_23369_, Mob p_23370_)
```

**Parameters:**

- `p_23369_` (`ServerLevel`)
- `p_23370_` (`Mob`)

**Returns:** `private boolean`

### onOrOverBed

```java
private boolean onOrOverBed(ServerLevel p_23380_, Mob p_23381_)
```

**Parameters:**

- `p_23380_` (`ServerLevel`)
- `p_23381_` (`Mob`)

**Returns:** `private boolean`

### onBedSurface

```java
private boolean onBedSurface(ServerLevel p_23391_, Mob p_23392_)
```

**Parameters:**

- `p_23391_` (`ServerLevel`)
- `p_23392_` (`Mob`)

**Returns:** `private boolean`

### isBed

```java
private boolean isBed(ServerLevel p_23357_, BlockPos p_23358_)
```

**Parameters:**

- `p_23357_` (`ServerLevel`)
- `p_23358_` (`BlockPos`)

**Returns:** `private boolean`

### getNearestBed

```java
private Optional<BlockPos> getNearestBed(Mob p_23360_)
```

**Parameters:**

- `p_23360_` (`Mob`)

**Returns:** `private Optional<BlockPos>`

### tiredOfWalking

```java
private boolean tiredOfWalking(ServerLevel p_23398_, Mob p_23399_)
```

**Parameters:**

- `p_23398_` (`ServerLevel`)
- `p_23399_` (`Mob`)

**Returns:** `private boolean`

### tiredOfJumping

```java
private boolean tiredOfJumping(ServerLevel p_23401_, Mob p_23402_)
```

**Parameters:**

- `p_23401_` (`ServerLevel`)
- `p_23402_` (`Mob`)

**Returns:** `private boolean`
