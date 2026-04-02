# InteractWithDoor

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class

## Methods

### create

```java
public static BehaviorControl<LivingEntity> create()
```

**Returns:** `public static BehaviorControl<LivingEntity>`

### closeDoorsThatIHaveOpenedOrPassedThrough

```java
public static void closeDoorsThatIHaveOpenedOrPassedThrough(ServerLevel p_260343_, LivingEntity p_259371_, Node p_259408_, Node p_260013_, Set<GlobalPos> p_259401_, Optional<List<LivingEntity>> p_260015_)
```

**Parameters:**

- `p_260343_` (`ServerLevel`)
- `p_259371_` (`LivingEntity`)
- `p_259408_` (`Node`)
- `p_260013_` (`Node`)
- `p_259401_` (`Set<GlobalPos>`)
- `p_260015_` (`Optional<List<LivingEntity>>`)

**Returns:** `public static void`

### areOtherMobsComingThroughDoor

```java
private static boolean areOtherMobsComingThroughDoor(LivingEntity p_260091_, BlockPos p_259764_, Optional<List<LivingEntity>> p_259365_)
```

**Parameters:**

- `p_260091_` (`LivingEntity`)
- `p_259764_` (`BlockPos`)
- `p_259365_` (`Optional<List<LivingEntity>>`)

**Returns:** `private static boolean`

### isMobComingThroughDoor

```java
private static boolean isMobComingThroughDoor(Brain<?> p_259548_, BlockPos p_259146_)
```

**Parameters:**

- `p_259548_` (`Brain<?>`)
- `p_259146_` (`BlockPos`)

**Returns:** `private static boolean`

### isDoorTooFarAway

```java
private static boolean isDoorTooFarAway(ServerLevel p_23308_, LivingEntity p_23309_, GlobalPos p_23310_)
```

**Parameters:**

- `p_23308_` (`ServerLevel`)
- `p_23309_` (`LivingEntity`)
- `p_23310_` (`GlobalPos`)

**Returns:** `private static boolean`

### rememberDoorToClose

```java
private static Optional<Set<GlobalPos>> rememberDoorToClose(MemoryAccessor<Mu, Set<GlobalPos>> p_262178_, Optional<Set<GlobalPos>> p_261639_, ServerLevel p_261528_, BlockPos p_261874_)
```

**Parameters:**

- `p_262178_` (`MemoryAccessor<Mu, Set<GlobalPos>>`)
- `p_261639_` (`Optional<Set<GlobalPos>>`)
- `p_261528_` (`ServerLevel`)
- `p_261874_` (`BlockPos`)

**Returns:** `private static Optional<Set<GlobalPos>>`
