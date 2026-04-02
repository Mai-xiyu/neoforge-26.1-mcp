# HoglinAi

**Package:** `net.minecraft.world.entity.monster.hoglin`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `REPELLENT_DETECTION_RANGE_HORIZONTAL` | `int` |  |
| `REPELLENT_DETECTION_RANGE_VERTICAL` | `int` |  |

## Methods

### makeBrain

```java
protected static Brain<?> makeBrain(Brain<Hoglin> p_34576_)
```

**Parameters:**

- `p_34576_` (`Brain<Hoglin>`)

**Returns:** `protected static Brain<?>`

### initCoreActivity

```java
 initCoreActivity()
```

**Returns:** ``

### initIdleActivity

```java
 initIdleActivity()
```

**Returns:** ``

### initFightActivity

```java
 initFightActivity()
```

**Returns:** ``

### initRetreatActivity

```java
 initRetreatActivity()
```

**Returns:** ``

### initCoreActivity

```java
private static void initCoreActivity(Brain<Hoglin> p_34592_)
```

**Parameters:**

- `p_34592_` (`Brain<Hoglin>`)

**Returns:** `private static void`

### initIdleActivity

```java
private static void initIdleActivity(Brain<Hoglin> p_34602_)
```

**Parameters:**

- `p_34602_` (`Brain<Hoglin>`)

**Returns:** `private static void`

### initFightActivity

```java
private static void initFightActivity(Brain<Hoglin> p_34609_)
```

**Parameters:**

- `p_34609_` (`Brain<Hoglin>`)

**Returns:** `private static void`

### initRetreatActivity

```java
private static void initRetreatActivity(Brain<Hoglin> p_34616_)
```

**Parameters:**

- `p_34616_` (`Brain<Hoglin>`)

**Returns:** `private static void`

### createIdleMovementBehaviors

```java
private static RunOne<Hoglin> createIdleMovementBehaviors()
```

**Returns:** `private static RunOne<Hoglin>`

### updateActivity

```java
protected static void updateActivity(Hoglin p_34578_)
```

**Parameters:**

- `p_34578_` (`Hoglin`)

**Returns:** `protected static void`

### onHitTarget

```java
protected static void onHitTarget(Hoglin p_34580_, LivingEntity p_34581_)
```

**Parameters:**

- `p_34580_` (`Hoglin`)
- `p_34581_` (`LivingEntity`)

**Returns:** `protected static void`

### setAvoidTarget

```java
 setAvoidTarget()
```

**Returns:** ``

### broadcastRetreat

```java
 broadcastRetreat()
```

**Returns:** ``

### broadcastAttackTarget

```java
 broadcastAttackTarget()
```

**Returns:** ``

### broadcastRetreat

```java
private static void broadcastRetreat(Hoglin p_34606_, LivingEntity p_34607_)
```

**Parameters:**

- `p_34606_` (`Hoglin`)
- `p_34607_` (`LivingEntity`)

**Returns:** `private static void`

### retreatFromNearestTarget

```java
private static void retreatFromNearestTarget(Hoglin p_34613_, LivingEntity p_34614_)
```

**Parameters:**

- `p_34613_` (`Hoglin`)
- `p_34614_` (`LivingEntity`)

**Returns:** `private static void`

### setAvoidTarget

```java
 setAvoidTarget()
```

**Returns:** ``

### setAvoidTarget

```java
private static void setAvoidTarget(Hoglin p_34620_, LivingEntity p_34621_)
```

**Parameters:**

- `p_34620_` (`Hoglin`)
- `p_34621_` (`LivingEntity`)

**Returns:** `private static void`

### findNearestValidAttackTarget

```java
private static Optional<? extends LivingEntity> findNearestValidAttackTarget(Hoglin p_34611_)
```

**Parameters:**

- `p_34611_` (`Hoglin`)

**Returns:** `private static Optional<? extends LivingEntity>`

### isPosNearNearestRepellent

```java
static boolean isPosNearNearestRepellent(Hoglin p_34586_, BlockPos p_34587_)
```

**Parameters:**

- `p_34586_` (`Hoglin`)
- `p_34587_` (`BlockPos`)

**Returns:** `static boolean`

### wantsToStopFleeing

```java
private static boolean wantsToStopFleeing(Hoglin p_34618_)
```

**Parameters:**

- `p_34618_` (`Hoglin`)

**Returns:** `private static boolean`

### piglinsOutnumberHoglins

```java
private static boolean piglinsOutnumberHoglins(Hoglin p_34623_)
```

**Parameters:**

- `p_34623_` (`Hoglin`)

**Returns:** `private static boolean`

### wasHurtBy

```java
protected static void wasHurtBy(Hoglin p_34596_, LivingEntity p_34597_)
```

**Parameters:**

- `p_34596_` (`Hoglin`)
- `p_34597_` (`LivingEntity`)

**Returns:** `protected static void`

### retreatFromNearestTarget

```java
 retreatFromNearestTarget()
```

**Returns:** ``

### maybeRetaliate

```java
 maybeRetaliate()
```

**Returns:** ``

### maybeRetaliate

```java
private static void maybeRetaliate(Hoglin p_34625_, LivingEntity p_34626_)
```

**Parameters:**

- `p_34625_` (`Hoglin`)
- `p_34626_` (`LivingEntity`)

**Returns:** `private static void`

### setAttackTarget

```java
 setAttackTarget()
```

**Returns:** ``

### broadcastAttackTarget

```java
 broadcastAttackTarget()
```

**Returns:** ``

### setAttackTarget

```java
private static void setAttackTarget(Hoglin p_34630_, LivingEntity p_34631_)
```

**Parameters:**

- `p_34630_` (`Hoglin`)
- `p_34631_` (`LivingEntity`)

**Returns:** `private static void`

### broadcastAttackTarget

```java
private static void broadcastAttackTarget(Hoglin p_34635_, LivingEntity p_34636_)
```

**Parameters:**

- `p_34635_` (`Hoglin`)
- `p_34636_` (`LivingEntity`)

**Returns:** `private static void`

### setAttackTargetIfCloserThanCurrent

```java
private static void setAttackTargetIfCloserThanCurrent(Hoglin p_34640_, LivingEntity p_34641_)
```

**Parameters:**

- `p_34640_` (`Hoglin`)
- `p_34641_` (`LivingEntity`)

**Returns:** `private static void`

### setAttackTarget

```java
 setAttackTarget()
```

**Returns:** ``

### getSoundForCurrentActivity

```java
public static Optional<SoundEvent> getSoundForCurrentActivity(Hoglin p_34594_)
```

**Parameters:**

- `p_34594_` (`Hoglin`)

**Returns:** `public static Optional<SoundEvent>`

### getSoundForActivity

```java
private static SoundEvent getSoundForActivity(Hoglin p_34583_, Activity p_34584_)
```

**Parameters:**

- `p_34583_` (`Hoglin`)
- `p_34584_` (`Activity`)

**Returns:** `private static SoundEvent`

### getVisibleAdultHoglins

```java
private static List<Hoglin> getVisibleAdultHoglins(Hoglin p_34628_)
```

**Parameters:**

- `p_34628_` (`Hoglin`)

**Returns:** `private static List<Hoglin>`

### isNearRepellent

```java
private static boolean isNearRepellent(Hoglin p_34633_)
```

**Parameters:**

- `p_34633_` (`Hoglin`)

**Returns:** `private static boolean`

### isBreeding

```java
private static boolean isBreeding(Hoglin p_34638_)
```

**Parameters:**

- `p_34638_` (`Hoglin`)

**Returns:** `private static boolean`

### isPacified

```java
protected static boolean isPacified(Hoglin p_34604_)
```

**Parameters:**

- `p_34604_` (`Hoglin`)

**Returns:** `protected static boolean`
