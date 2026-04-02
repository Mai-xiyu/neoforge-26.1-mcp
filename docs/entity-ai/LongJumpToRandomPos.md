# LongJumpToRandomPos

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends Mob> extends Behavior<E>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FIND_JUMP_TRIES` | `int` |  |
| `MIN_PATHFIND_DISTANCE_TO_VALID_JUMP` | `int` |  |
| `maxLongJumpHeight` | `int` |  |
| `maxLongJumpWidth` | `int` |  |
| `maxJumpVelocityMultiplier` | `float` |  |
| `jumpCandidates` | `List<LongJumpToRandomPos.PossibleJump>` |  |
| `initialPosition` | `Optional<Vec3>` |  |
| `findJumpTries` | `int` |  |
| `prepareJumpStart` | `long` |  |

## Methods

### LongJumpToRandomPos

```java
public LongJumpToRandomPos(UniformInt p_147637_, int p_147638_, int p_147639_, float p_147640_, Function<E, SoundEvent> p_147641_)
```

**Parameters:**

- `p_147637_` (`UniformInt`)
- `p_147638_` (`int`)
- `p_147639_` (`int`)
- `p_147640_` (`float`)
- `p_147641_` (`Function<E, SoundEvent>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### defaultAcceptableLandingSpot

```java
<E extends Mob> public static <E extends Mob> boolean defaultAcceptableLandingSpot(E p_251540_, BlockPos p_248879_)
```

**Parameters:**

- `p_251540_` (`E`)
- `p_248879_` (`BlockPos`)

**Returns:** `public static <E extends Mob> boolean`

### LongJumpToRandomPos

```java
public LongJumpToRandomPos(UniformInt p_251244_, int p_248763_, int p_251698_, float p_250165_, Function<E, SoundEvent> p_249738_, BiPredicate<E, BlockPos> p_249945_)
```

**Parameters:**

- `p_251244_` (`UniformInt`)
- `p_248763_` (`int`)
- `p_251698_` (`int`)
- `p_250165_` (`float`)
- `p_249738_` (`Function<E, SoundEvent>`)
- `p_249945_` (`BiPredicate<E, BlockPos>`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_147650_, Mob p_147651_)
```

**Parameters:**

- `p_147650_` (`ServerLevel`)
- `p_147651_` (`Mob`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_147653_, Mob p_147654_, long p_147655_)
```

**Parameters:**

- `p_147653_` (`ServerLevel`)
- `p_147654_` (`Mob`)
- `p_147655_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_147676_, E p_147677_, long p_147678_)
```

**Parameters:**

- `p_147676_` (`ServerLevel`)
- `p_147677_` (`E`)
- `p_147678_` (`long`)

**Returns:** `protected void`

### tick

```java
protected void tick(ServerLevel p_147680_, E p_147681_, long p_147682_)
```

**Parameters:**

- `p_147680_` (`ServerLevel`)
- `p_147681_` (`E`)
- `p_147682_` (`long`)

**Returns:** `protected void`

### pickCandidate

```java
protected void pickCandidate(ServerLevel p_217319_, E p_217320_, long p_217321_)
```

**Parameters:**

- `p_217319_` (`ServerLevel`)
- `p_217320_` (`E`)
- `p_217321_` (`long`)

**Returns:** `protected void`

### getJumpCandidate

```java
protected Optional<LongJumpToRandomPos.PossibleJump> getJumpCandidate(ServerLevel p_217299_)
```

**Parameters:**

- `p_217299_` (`ServerLevel`)

**Returns:** `protected Optional<LongJumpToRandomPos.PossibleJump>`

### isAcceptableLandingPosition

```java
private boolean isAcceptableLandingPosition(ServerLevel p_217300_, E p_217301_, BlockPos p_217302_)
```

**Parameters:**

- `p_217300_` (`ServerLevel`)
- `p_217301_` (`E`)
- `p_217302_` (`BlockPos`)

**Returns:** `private boolean`

### calculateOptimalJumpVector

```java
protected Vec3 calculateOptimalJumpVector(Mob p_217304_, Vec3 p_217305_)
```

**Parameters:**

- `p_217304_` (`Mob`)
- `p_217305_` (`Vec3`)

**Returns:** `Vec3`

### PossibleJump

```java
public PossibleJump(BlockPos p_217323_, int p_217324_)
```

**Parameters:**

- `p_217323_` (`BlockPos`)
- `p_217324_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getJumpTarget

```java
public BlockPos getJumpTarget()
```

**Returns:** `public BlockPos`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PossibleJump` | class |  |
