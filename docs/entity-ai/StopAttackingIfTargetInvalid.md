# StopAttackingIfTargetInvalid

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class

## Methods

### create

```java
<E extends Mob> public static <E extends Mob> BehaviorControl<E> create(BiConsumer<E, LivingEntity> p_260165_)
```

**Parameters:**

- `p_260165_` (`BiConsumer<E, LivingEntity>`)

**Returns:** `public static <E extends Mob> BehaviorControl<E>`

### create

```java
return create(p_147988_ -> false, p_260165_, true)
```

**Parameters:**

- `true` (`p_147988_ -> false, p_260165_,`)

**Returns:** `return`

### create

```java
<E extends Mob> public static <E extends Mob> BehaviorControl<E> create(Predicate<LivingEntity> p_259762_)
```

**Parameters:**

- `p_259762_` (`Predicate<LivingEntity>`)

**Returns:** `public static <E extends Mob> BehaviorControl<E>`

### create

```java
<E extends Mob> public static <E extends Mob> BehaviorControl<E> create()
```

**Returns:** `public static <E extends Mob> BehaviorControl<E>`

### create

```java
<E extends Mob> public static <E extends Mob> BehaviorControl<E> create(Predicate<LivingEntity> p_260357_, BiConsumer<E, LivingEntity> p_259568_, boolean p_260319_)
```

**Parameters:**

- `p_260357_` (`Predicate<LivingEntity>`)
- `p_259568_` (`BiConsumer<E, LivingEntity>`)
- `p_260319_` (`boolean`)

**Returns:** `public static <E extends Mob> BehaviorControl<E>`

### isTiredOfTryingToReachTarget

```java
private static boolean isTiredOfTryingToReachTarget(LivingEntity p_259416_, Optional<Long> p_259377_)
```

**Parameters:**

- `p_259416_` (`LivingEntity`)
- `p_259377_` (`Optional<Long>`)

**Returns:** `private static boolean`
