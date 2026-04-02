# PlayTagWithOtherKids

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class

## Methods

### create

```java
public static BehaviorControl<PathfinderMob> create()
```

**Returns:** `public static BehaviorControl<PathfinderMob>`

### chaseKid

```java
private static void chaseKid(MemoryAccessor<?, LivingEntity> p_259811_, MemoryAccessor<?, PositionTracker> p_259299_, MemoryAccessor<?, WalkTarget> p_260056_, LivingEntity p_259463_)
```

**Parameters:**

- `p_259811_` (`MemoryAccessor<?, LivingEntity>`)
- `p_259299_` (`MemoryAccessor<?, PositionTracker>`)
- `p_260056_` (`MemoryAccessor<?, WalkTarget>`)
- `p_259463_` (`LivingEntity`)

**Returns:** `private static void`

### findSomeoneBeingChased

```java
private static Optional<LivingEntity> findSomeoneBeingChased(List<LivingEntity> p_259655_)
```

**Parameters:**

- `p_259655_` (`List<LivingEntity>`)

**Returns:** `private static Optional<LivingEntity>`

### checkHowManyChasersEachFriendHas

```java
private static Map<LivingEntity, Integer> checkHowManyChasersEachFriendHas(List<LivingEntity> p_259989_)
```

**Parameters:**

- `p_259989_` (`List<LivingEntity>`)

**Returns:** `private static Map<LivingEntity, Integer>`

### whoAreYouChasing

```java
private static LivingEntity whoAreYouChasing(LivingEntity p_23640_)
```

**Parameters:**

- `p_23640_` (`LivingEntity`)

**Returns:** `private static LivingEntity`

### isChasingSomeone

```java
private static boolean isChasingSomeone(LivingEntity p_23668_)
```

**Parameters:**

- `p_23668_` (`LivingEntity`)

**Returns:** `private static boolean`

### isFriendChasingMe

```java
private static boolean isFriendChasingMe(LivingEntity p_23642_, LivingEntity p_23643_)
```

**Parameters:**

- `p_23642_` (`LivingEntity`)
- `p_23643_` (`LivingEntity`)

**Returns:** `private static boolean`
