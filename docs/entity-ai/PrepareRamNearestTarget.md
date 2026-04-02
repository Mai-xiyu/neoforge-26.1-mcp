# PrepareRamNearestTarget

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends PathfinderMob> extends Behavior<E>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TIME_OUT_DURATION` | `int` |  |

## Methods

### PrepareRamNearestTarget

```java
public PrepareRamNearestTarget(ToIntFunction<E> p_147724_, int p_147725_, int p_147726_, float p_147727_, TargetingConditions p_147728_, int p_147729_, Function<E, SoundEvent> p_147730_)
```

**Parameters:**

- `p_147724_` (`ToIntFunction<E>`)
- `p_147725_` (`int`)
- `p_147726_` (`int`)
- `p_147727_` (`float`)
- `p_147728_` (`TargetingConditions`)
- `p_147729_` (`int`)
- `p_147730_` (`Function<E, SoundEvent>`)

**Returns:** `public`

### start

```java
protected void start(ServerLevel p_147736_, PathfinderMob p_147737_, long p_147738_)
```

**Parameters:**

- `p_147736_` (`ServerLevel`)
- `p_147737_` (`PathfinderMob`)
- `p_147738_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_147762_, E p_147763_, long p_147764_)
```

**Parameters:**

- `p_147762_` (`ServerLevel`)
- `p_147763_` (`E`)
- `p_147764_` (`long`)

**Returns:** `protected void`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_147773_, PathfinderMob p_147774_, long p_147775_)
```

**Parameters:**

- `p_147773_` (`ServerLevel`)
- `p_147774_` (`PathfinderMob`)
- `p_147775_` (`long`)

**Returns:** `protected boolean`

### tick

```java
protected void tick(ServerLevel p_147784_, E p_147785_, long p_147786_)
```

**Parameters:**

- `p_147784_` (`ServerLevel`)
- `p_147785_` (`E`)
- `p_147786_` (`long`)

**Returns:** `protected void`

### getEdgeOfBlock

```java
private Vec3 getEdgeOfBlock(BlockPos p_147755_, BlockPos p_147756_)
```

**Parameters:**

- `p_147755_` (`BlockPos`)
- `p_147756_` (`BlockPos`)

**Returns:** `private Vec3`

### calculateRammingStartPosition

```java
private Optional<BlockPos> calculateRammingStartPosition(PathfinderMob p_147743_, LivingEntity p_147744_)
```

**Parameters:**

- `p_147743_` (`PathfinderMob`)
- `p_147744_` (`LivingEntity`)

**Returns:** `private Optional<BlockPos>`

### isWalkableBlock

```java
private boolean isWalkableBlock(PathfinderMob p_147746_, BlockPos p_147747_)
```

**Parameters:**

- `p_147746_` (`PathfinderMob`)
- `p_147747_` (`BlockPos`)

**Returns:** `private boolean`

### chooseRamPosition

```java
private void chooseRamPosition(PathfinderMob p_147766_, LivingEntity p_147767_)
```

**Parameters:**

- `p_147766_` (`PathfinderMob`)
- `p_147767_` (`LivingEntity`)

**Returns:** `private void`

### RamCandidate

```java
public RamCandidate(BlockPos p_147794_, BlockPos p_147795_, LivingEntity p_147796_)
```

**Parameters:**

- `p_147794_` (`BlockPos`)
- `p_147795_` (`BlockPos`)
- `p_147796_` (`LivingEntity`)

**Returns:** `public`

### getStartPosition

```java
public BlockPos getStartPosition()
```

**Returns:** `public BlockPos`

### getTargetPosition

```java
public BlockPos getTargetPosition()
```

**Returns:** `public BlockPos`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `public LivingEntity`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RamCandidate` | class |  |
