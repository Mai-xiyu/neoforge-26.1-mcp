# AcquirePoi

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SCAN_RANGE` | `int` |  |

## Methods

### create

```java
public static BehaviorControl<PathfinderMob> create(Predicate<Holder<PoiType>> p_259994_, MemoryModuleType<GlobalPos> p_259167_, boolean p_259077_, Optional<Byte> p_259824_)
```

**Parameters:**

- `p_259994_` (`Predicate<Holder<PoiType>>`)
- `p_259167_` (`MemoryModuleType<GlobalPos>`)
- `p_259077_` (`boolean`)
- `p_259824_` (`Optional<Byte>`)

**Returns:** `public static BehaviorControl<PathfinderMob>`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
public static BehaviorControl<PathfinderMob> create(Predicate<Holder<PoiType>> p_260007_, MemoryModuleType<GlobalPos> p_259129_, MemoryModuleType<GlobalPos> p_260194_, boolean p_259108_, Optional<Byte> p_260129_)
```

**Parameters:**

- `p_260007_` (`Predicate<Holder<PoiType>>`)
- `p_259129_` (`MemoryModuleType<GlobalPos>`)
- `p_260194_` (`MemoryModuleType<GlobalPos>`)
- `p_259108_` (`boolean`)
- `p_260129_` (`Optional<Byte>`)

**Returns:** `public static BehaviorControl<PathfinderMob>`

### findPathToPois

```java
public static Path findPathToPois(Mob p_217098_, Set<Pair<Holder<PoiType>, BlockPos>> p_217099_)
```

**Parameters:**

- `p_217098_` (`Mob`)
- `p_217099_` (`Set<Pair<Holder<PoiType>, BlockPos>>`)

**Returns:** `Path`

### JitteredLinearRetry

```java
 JitteredLinearRetry(RandomSource p_217111_, long p_217112_)
```

**Parameters:**

- `p_217111_` (`RandomSource`)
- `p_217112_` (`long`)

**Returns:** ``

### markAttempt

```java
public void markAttempt(long p_22381_)
```

**Parameters:**

- `p_22381_` (`long`)

**Returns:** `public void`

### isStillValid

```java
public boolean isStillValid(long p_22383_)
```

**Parameters:**

- `p_22383_` (`long`)

**Returns:** `public boolean`

### shouldRetry

```java
public boolean shouldRetry(long p_22385_)
```

**Parameters:**

- `p_22385_` (`long`)

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`
