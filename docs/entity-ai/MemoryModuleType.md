# MemoryModuleType

**Package:** `net.minecraft.world.entity.ai.memory`
**Type:** class<U>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DUMMY` | `MemoryModuleType<Void>` |  |
| `HOME` | `MemoryModuleType<GlobalPos>` |  |
| `JOB_SITE` | `MemoryModuleType<GlobalPos>` |  |
| `POTENTIAL_JOB_SITE` | `MemoryModuleType<GlobalPos>` |  |
| `MEETING_POINT` | `MemoryModuleType<GlobalPos>` |  |
| `SECONDARY_JOB_SITE` | `MemoryModuleType<List<GlobalPos>>` |  |
| `NEAREST_LIVING_ENTITIES` | `MemoryModuleType<List<LivingEntity>>` |  |
| `NEAREST_VISIBLE_LIVING_ENTITIES` | `MemoryModuleType<NearestVisibleLivingEntities>` |  |
| `VISIBLE_VILLAGER_BABIES` | `MemoryModuleType<List<LivingEntity>>` |  |
| `NEAREST_PLAYERS` | `MemoryModuleType<List<Player>>` |  |
| `NEAREST_VISIBLE_PLAYER` | `MemoryModuleType<Player>` |  |
| `NEAREST_VISIBLE_ATTACKABLE_PLAYER` | `MemoryModuleType<Player>` |  |
| `WALK_TARGET` | `MemoryModuleType<WalkTarget>` |  |
| `LOOK_TARGET` | `MemoryModuleType<PositionTracker>` |  |
| `ATTACK_TARGET` | `MemoryModuleType<LivingEntity>` |  |
| `ATTACK_COOLING_DOWN` | `MemoryModuleType<Boolean>` |  |
| `INTERACTION_TARGET` | `MemoryModuleType<LivingEntity>` |  |
| `BREED_TARGET` | `MemoryModuleType<AgeableMob>` |  |
| `RIDE_TARGET` | `MemoryModuleType<Entity>` |  |
| `PATH` | `MemoryModuleType<Path>` |  |
| `INTERACTABLE_DOORS` | `MemoryModuleType<List<GlobalPos>>` |  |
| `DOORS_TO_CLOSE` | `MemoryModuleType<Set<GlobalPos>>` |  |
| `NEAREST_BED` | `MemoryModuleType<BlockPos>` |  |
| `HURT_BY` | `MemoryModuleType<DamageSource>` |  |
| `HURT_BY_ENTITY` | `MemoryModuleType<LivingEntity>` |  |
| `AVOID_TARGET` | `MemoryModuleType<LivingEntity>` |  |
| `NEAREST_HOSTILE` | `MemoryModuleType<LivingEntity>` |  |
| `NEAREST_ATTACKABLE` | `MemoryModuleType<LivingEntity>` |  |
| `HIDING_PLACE` | `MemoryModuleType<GlobalPos>` |  |
| `HEARD_BELL_TIME` | `MemoryModuleType<Long>` |  |
| `CANT_REACH_WALK_TARGET_SINCE` | `MemoryModuleType<Long>` |  |
| `GOLEM_DETECTED_RECENTLY` | `MemoryModuleType<Boolean>` |  |
| `DANGER_DETECTED_RECENTLY` | `MemoryModuleType<Boolean>` |  |
| `LAST_SLEPT` | `MemoryModuleType<Long>` |  |
| `LAST_WOKEN` | `MemoryModuleType<Long>` |  |
| `LAST_WORKED_AT_POI` | `MemoryModuleType<Long>` |  |
| `NEAREST_VISIBLE_ADULT` | `MemoryModuleType<AgeableMob>` |  |
| `NEAREST_VISIBLE_WANTED_ITEM` | `MemoryModuleType<ItemEntity>` |  |
| `NEAREST_VISIBLE_NEMESIS` | `MemoryModuleType<Mob>` |  |
| `PLAY_DEAD_TICKS` | `MemoryModuleType<Integer>` |  |
| `TEMPTING_PLAYER` | `MemoryModuleType<Player>` |  |
| `TEMPTATION_COOLDOWN_TICKS` | `MemoryModuleType<Integer>` |  |
| `GAZE_COOLDOWN_TICKS` | `MemoryModuleType<Integer>` |  |
| `IS_TEMPTED` | `MemoryModuleType<Boolean>` |  |
| `LONG_JUMP_COOLDOWN_TICKS` | `MemoryModuleType<Integer>` |  |
| `LONG_JUMP_MID_JUMP` | `MemoryModuleType<Boolean>` |  |
| `HAS_HUNTING_COOLDOWN` | `MemoryModuleType<Boolean>` |  |

## Methods

### MemoryModuleType

```java
public public MemoryModuleType(Optional<Codec<U>> p_26386_)
```

**Parameters:**

- `p_26386_` (`Optional<Codec<U>>`)

**Returns:** `public`

### toString

```java
public String toString()
```

**Returns:** `String`

### getCodec

```java
public Optional<Codec<ExpirableValue<U>>> getCodec()
```

**Returns:** `public Optional<Codec<ExpirableValue<U>>>`

### register

```java
<U> private static <U> MemoryModuleType<U> register(String p_26391_, Codec<U> p_26392_)
```

**Parameters:**

- `p_26391_` (`String`)
- `p_26392_` (`Codec<U>`)

**Returns:** `private static <U> MemoryModuleType<U>`

### register

```java
<U> private static <U> MemoryModuleType<U> register(String p_26389_)
```

**Parameters:**

- `p_26389_` (`String`)

**Returns:** `private static <U> MemoryModuleType<U>`
