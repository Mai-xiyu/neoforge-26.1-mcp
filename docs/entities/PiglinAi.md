# PiglinAi

**Package:** `net.minecraft.world.entity.monster.piglin`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `REPELLENT_DETECTION_RANGE_HORIZONTAL` | `int` |  |
| `REPELLENT_DETECTION_RANGE_VERTICAL` | `int` |  |
| `BARTERING_ITEM` | `Item` |  |
| `TIME_BETWEEN_HUNTS` | `UniformInt` |  |

## Methods

### makeBrain

```java
protected static Brain<?> makeBrain(Piglin p_34841_, Brain<Piglin> p_34842_)
```

**Parameters:**

- `p_34841_` (`Piglin`)
- `p_34842_` (`Brain<Piglin>`)

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

### initAdmireItemActivity

```java
 initAdmireItemActivity()
```

**Returns:** ``

### initFightActivity

```java
 initFightActivity()
```

**Returns:** ``

### initCelebrateActivity

```java
 initCelebrateActivity()
```

**Returns:** ``

### initRetreatActivity

```java
 initRetreatActivity()
```

**Returns:** ``

### initRideHoglinActivity

```java
 initRideHoglinActivity()
```

**Returns:** ``

### initMemories

```java
protected static void initMemories(Piglin p_219206_, RandomSource p_219207_)
```

**Parameters:**

- `p_219206_` (`Piglin`)
- `p_219207_` (`RandomSource`)

**Returns:** `protected static void`

### initCoreActivity

```java
private static void initCoreActivity(Brain<Piglin> p_34821_)
```

**Parameters:**

- `p_34821_` (`Brain<Piglin>`)

**Returns:** `private static void`

### initIdleActivity

```java
private static void initIdleActivity(Brain<Piglin> p_34892_)
```

**Parameters:**

- `p_34892_` (`Brain<Piglin>`)

**Returns:** `private static void`

### initFightActivity

```java
private static void initFightActivity(Piglin p_34904_, Brain<Piglin> p_34905_)
```

**Parameters:**

- `p_34904_` (`Piglin`)
- `p_34905_` (`Brain<Piglin>`)

**Returns:** `private static void`

### initCelebrateActivity

```java
private static void initCelebrateActivity(Brain<Piglin> p_34921_)
```

**Parameters:**

- `p_34921_` (`Brain<Piglin>`)

**Returns:** `private static void`

### initAdmireItemActivity

```java
private static void initAdmireItemActivity(Brain<Piglin> p_34941_)
```

**Parameters:**

- `p_34941_` (`Brain<Piglin>`)

**Returns:** `private static void`

### initRetreatActivity

```java
private static void initRetreatActivity(Brain<Piglin> p_34959_)
```

**Parameters:**

- `p_34959_` (`Brain<Piglin>`)

**Returns:** `private static void`

### initRideHoglinActivity

```java
private static void initRideHoglinActivity(Brain<Piglin> p_34974_)
```

**Parameters:**

- `p_34974_` (`Brain<Piglin>`)

**Returns:** `private static void`

### createLookBehaviors

```java
private static ImmutableList<Pair<OneShot<LivingEntity>, Integer>> createLookBehaviors()
```

**Returns:** `private static ImmutableList<Pair<OneShot<LivingEntity>, Integer>>`

### createIdleLookBehaviors

```java
private static RunOne<LivingEntity> createIdleLookBehaviors()
```

**Returns:** `private static RunOne<LivingEntity>`

### createIdleMovementBehaviors

```java
private static RunOne<Piglin> createIdleMovementBehaviors()
```

**Returns:** `private static RunOne<Piglin>`

### avoidRepellent

```java
private static BehaviorControl<PathfinderMob> avoidRepellent()
```

**Returns:** `private static BehaviorControl<PathfinderMob>`

### babyAvoidNemesis

```java
private static BehaviorControl<Piglin> babyAvoidNemesis()
```

**Returns:** `private static BehaviorControl<Piglin>`

### avoidZombified

```java
private static BehaviorControl<Piglin> avoidZombified()
```

**Returns:** `private static BehaviorControl<Piglin>`

### updateActivity

```java
protected static void updateActivity(Piglin p_34899_)
```

**Parameters:**

- `p_34899_` (`Piglin`)

**Returns:** `protected static void`

### isBabyRidingBaby

```java
private static boolean isBabyRidingBaby(Piglin p_34993_)
```

**Parameters:**

- `p_34993_` (`Piglin`)

**Returns:** `private static boolean`

### pickUpItem

```java
protected static void pickUpItem(Piglin p_34844_, ItemEntity p_34845_)
```

**Parameters:**

- `p_34844_` (`Piglin`)
- `p_34845_` (`ItemEntity`)

**Returns:** `protected static void`

### stopWalking

```java
 stopWalking()
```

**Returns:** ``

### holdInOffhand

```java
 holdInOffhand()
```

**Returns:** ``

### admireGoldItem

```java
 admireGoldItem()
```

**Returns:** ``

### eat

```java
 eat()
```

**Returns:** ``

### putInInventory

```java
 putInInventory()
```

**Returns:** ``

### holdInOffhand

```java
private static void holdInOffhand(Piglin p_34933_, ItemStack p_34934_)
```

**Parameters:**

- `p_34933_` (`Piglin`)
- `p_34934_` (`ItemStack`)

**Returns:** `private static void`

### removeOneItemFromItemEntity

```java
private static ItemStack removeOneItemFromItemEntity(ItemEntity p_34823_)
```

**Parameters:**

- `p_34823_` (`ItemEntity`)

**Returns:** `private static ItemStack`

### stopHoldingOffHandItem

```java
protected static void stopHoldingOffHandItem(Piglin p_34868_, boolean p_34869_)
```

**Parameters:**

- `p_34868_` (`Piglin`)
- `p_34869_` (`boolean`)

**Returns:** `protected static void`

### putInInventory

```java
 putInInventory()
```

**Returns:** ``

### putInInventory

```java
 putInInventory()
```

**Returns:** ``

### cancelAdmiring

```java
protected static void cancelAdmiring(Piglin p_34928_)
```

**Parameters:**

- `p_34928_` (`Piglin`)

**Returns:** `protected static void`

### putInInventory

```java
private static void putInInventory(Piglin p_34953_, ItemStack p_34954_)
```

**Parameters:**

- `p_34953_` (`Piglin`)
- `p_34954_` (`ItemStack`)

**Returns:** `private static void`

### throwItems

```java
private static void throwItems(Piglin p_34861_, List<ItemStack> p_34862_)
```

**Parameters:**

- `p_34861_` (`Piglin`)
- `p_34862_` (`List<ItemStack>`)

**Returns:** `private static void`

### throwItemsTowardRandomPos

```java
 throwItemsTowardRandomPos()
```

**Returns:** ``

### throwItemsTowardRandomPos

```java
private static void throwItemsTowardRandomPos(Piglin p_34913_, List<ItemStack> p_34914_)
```

**Parameters:**

- `p_34913_` (`Piglin`)
- `p_34914_` (`List<ItemStack>`)

**Returns:** `private static void`

### throwItemsTowardPlayer

```java
private static void throwItemsTowardPlayer(Piglin p_34851_, Player p_34852_, List<ItemStack> p_34853_)
```

**Parameters:**

- `p_34851_` (`Piglin`)
- `p_34852_` (`Player`)
- `p_34853_` (`List<ItemStack>`)

**Returns:** `private static void`

### throwItemsTowardPos

```java
private static void throwItemsTowardPos(Piglin p_34864_, List<ItemStack> p_34865_, Vec3 p_34866_)
```

**Parameters:**

- `p_34864_` (`Piglin`)
- `p_34865_` (`List<ItemStack>`)
- `p_34866_` (`Vec3`)

**Returns:** `private static void`

### getBarterResponseItems

```java
private static List<ItemStack> getBarterResponseItems(Piglin p_34997_)
```

**Parameters:**

- `p_34997_` (`Piglin`)

**Returns:** `private static List<ItemStack>`

### wantsToDance

```java
private static boolean wantsToDance(LivingEntity p_34811_, LivingEntity p_34812_)
```

**Parameters:**

- `p_34811_` (`LivingEntity`)
- `p_34812_` (`LivingEntity`)

**Returns:** `private static boolean`

### wantsToPickup

```java
protected static boolean wantsToPickup(Piglin p_34858_, ItemStack p_34859_)
```

**Parameters:**

- `p_34858_` (`Piglin`)
- `p_34859_` (`ItemStack`)

**Returns:** `protected static boolean`

### isNotHoldingLovedItemInOffHand

```java
return isNotHoldingLovedItemInOffHand()
```

**Returns:** `return`

### isLovedItem

```java
protected static boolean isLovedItem(ItemStack p_149966_)
```

**Parameters:**

- `p_149966_` (`ItemStack`)

**Returns:** `protected static boolean`

### wantsToStopRiding

```java
private static boolean wantsToStopRiding(Piglin p_34835_, Entity p_34836_)
```

**Parameters:**

- `p_34835_` (`Piglin`)
- `p_34836_` (`Entity`)

**Returns:** `private static boolean`

### isNearestValidAttackTarget

```java
private static boolean isNearestValidAttackTarget(Piglin p_34901_, LivingEntity p_34902_)
```

**Parameters:**

- `p_34901_` (`Piglin`)
- `p_34902_` (`LivingEntity`)

**Returns:** `private static boolean`

### isNearZombified

```java
private static boolean isNearZombified(Piglin p_34999_)
```

**Parameters:**

- `p_34999_` (`Piglin`)

**Returns:** `private static boolean`

### findNearestValidAttackTarget

```java
private static Optional<? extends LivingEntity> findNearestValidAttackTarget(Piglin p_35001_)
```

**Parameters:**

- `p_35001_` (`Piglin`)

**Returns:** `private static Optional<? extends LivingEntity>`

### angerNearbyPiglins

```java
public static void angerNearbyPiglins(Player p_34874_, boolean p_34875_)
```

**Parameters:**

- `p_34874_` (`Player`)
- `p_34875_` (`boolean`)

**Returns:** `public static void`

### setAngerTargetToNearestTargetablePlayerIfFound

```java
 setAngerTargetToNearestTargetablePlayerIfFound()
```

**Returns:** ``

### setAngerTarget

```java
 setAngerTarget()
```

**Returns:** ``

### mobInteract

```java
public static InteractionResult mobInteract(Piglin p_34847_, Player p_34848_, InteractionHand p_34849_)
```

**Parameters:**

- `p_34847_` (`Piglin`)
- `p_34848_` (`Player`)
- `p_34849_` (`InteractionHand`)

**Returns:** `public static InteractionResult`

### holdInOffhand

```java
 holdInOffhand()
```

**Returns:** ``

### admireGoldItem

```java
 admireGoldItem()
```

**Returns:** ``

### stopWalking

```java
 stopWalking()
```

**Returns:** ``

### canAdmire

```java
protected static boolean canAdmire(Piglin p_34910_, ItemStack p_34911_)
```

**Parameters:**

- `p_34910_` (`Piglin`)
- `p_34911_` (`ItemStack`)

**Returns:** `protected static boolean`

### wasHurtBy

```java
protected static void wasHurtBy(Piglin p_34838_, LivingEntity p_34839_)
```

**Parameters:**

- `p_34838_` (`Piglin`)
- `p_34839_` (`LivingEntity`)

**Returns:** `protected static void`

### stopHoldingOffHandItem

```java
 stopHoldingOffHandItem()
```

**Returns:** ``

### broadcastAngerTarget

```java
 broadcastAngerTarget()
```

**Returns:** ``

### setAvoidTargetAndDontHuntForAWhile

```java
 setAvoidTargetAndDontHuntForAWhile()
```

**Returns:** ``

### broadcastRetreat

```java
 broadcastRetreat()
```

**Returns:** ``

### maybeRetaliate

```java
 maybeRetaliate()
```

**Returns:** ``

### maybeRetaliate

```java
protected static void maybeRetaliate(AbstractPiglin p_34827_, LivingEntity p_34828_)
```

**Parameters:**

- `p_34827_` (`AbstractPiglin`)
- `p_34828_` (`LivingEntity`)

**Returns:** `protected static void`

### setAngerTargetToNearestTargetablePlayerIfFound

```java
 setAngerTargetToNearestTargetablePlayerIfFound()
```

**Returns:** ``

### broadcastUniversalAnger

```java
 broadcastUniversalAnger()
```

**Returns:** ``

### setAngerTarget

```java
 setAngerTarget()
```

**Returns:** ``

### broadcastAngerTarget

```java
 broadcastAngerTarget()
```

**Returns:** ``

### getSoundForCurrentActivity

```java
public static Optional<SoundEvent> getSoundForCurrentActivity(Piglin p_34948_)
```

**Parameters:**

- `p_34948_` (`Piglin`)

**Returns:** `public static Optional<SoundEvent>`

### getSoundForActivity

```java
private static SoundEvent getSoundForActivity(Piglin p_34855_, Activity p_34856_)
```

**Parameters:**

- `p_34855_` (`Piglin`)
- `p_34856_` (`Activity`)

**Returns:** `private static SoundEvent`

### isNearAvoidTarget

```java
private static boolean isNearAvoidTarget(Piglin p_35003_)
```

**Parameters:**

- `p_35003_` (`Piglin`)

**Returns:** `private static boolean`

### getVisibleAdultPiglins

```java
protected static List<AbstractPiglin> getVisibleAdultPiglins(Piglin p_35005_)
```

**Parameters:**

- `p_35005_` (`Piglin`)

**Returns:** `protected static List<AbstractPiglin>`

### getAdultPiglins

```java
private static List<AbstractPiglin> getAdultPiglins(AbstractPiglin p_34961_)
```

**Parameters:**

- `p_34961_` (`AbstractPiglin`)

**Returns:** `private static List<AbstractPiglin>`

### isWearingGold

```java
public static boolean isWearingGold(LivingEntity p_34809_)
```

**Parameters:**

- `p_34809_` (`LivingEntity`)

**Returns:** `public static boolean`

### stopWalking

```java
private static void stopWalking(Piglin p_35007_)
```

**Parameters:**

- `p_35007_` (`Piglin`)

**Returns:** `private static void`

### babySometimesRideBabyHoglin

```java
private static BehaviorControl<LivingEntity> babySometimesRideBabyHoglin()
```

**Returns:** `private static BehaviorControl<LivingEntity>`

### broadcastAngerTarget

```java
protected static void broadcastAngerTarget(AbstractPiglin p_34896_, LivingEntity p_34897_)
```

**Parameters:**

- `p_34896_` (`AbstractPiglin`)
- `p_34897_` (`LivingEntity`)

**Returns:** `protected static void`

### setAngerTargetIfCloserThanCurrent

```java
 setAngerTargetIfCloserThanCurrent()
```

**Returns:** ``

### broadcastUniversalAnger

```java
protected static void broadcastUniversalAnger(AbstractPiglin p_34825_)
```

**Parameters:**

- `p_34825_` (`AbstractPiglin`)

**Returns:** `protected static void`

### setAngerTarget

```java
protected static void setAngerTarget(AbstractPiglin p_34925_, LivingEntity p_34926_)
```

**Parameters:**

- `p_34925_` (`AbstractPiglin`)
- `p_34926_` (`LivingEntity`)

**Returns:** `protected static void`

### dontKillAnyMoreHoglinsForAWhile

```java
 dontKillAnyMoreHoglinsForAWhile()
```

**Returns:** ``

### setAngerTargetToNearestTargetablePlayerIfFound

```java
private static void setAngerTargetToNearestTargetablePlayerIfFound(AbstractPiglin p_34945_, LivingEntity p_34946_)
```

**Parameters:**

- `p_34945_` (`AbstractPiglin`)
- `p_34946_` (`LivingEntity`)

**Returns:** `private static void`

### setAngerTarget

```java
 setAngerTarget()
```

**Returns:** ``

### setAngerTargetIfCloserThanCurrent

```java
private static void setAngerTargetIfCloserThanCurrent(AbstractPiglin p_34963_, LivingEntity p_34964_)
```

**Parameters:**

- `p_34963_` (`AbstractPiglin`)
- `p_34964_` (`LivingEntity`)

**Returns:** `private static void`

### setAngerTarget

```java
 setAngerTarget()
```

**Returns:** ``

### getAngerTarget

```java
private static Optional<LivingEntity> getAngerTarget(AbstractPiglin p_34976_)
```

**Parameters:**

- `p_34976_` (`AbstractPiglin`)

**Returns:** `private static Optional<LivingEntity>`

### getAvoidTarget

```java
public static Optional<LivingEntity> getAvoidTarget(Piglin p_34987_)
```

**Parameters:**

- `p_34987_` (`Piglin`)

**Returns:** `public static Optional<LivingEntity>`

### getNearestVisibleTargetablePlayer

```java
public static Optional<Player> getNearestVisibleTargetablePlayer(AbstractPiglin p_34894_)
```

**Parameters:**

- `p_34894_` (`AbstractPiglin`)

**Returns:** `public static Optional<Player>`

### broadcastRetreat

```java
private static void broadcastRetreat(Piglin p_34930_, LivingEntity p_34931_)
```

**Parameters:**

- `p_34930_` (`Piglin`)
- `p_34931_` (`LivingEntity`)

**Returns:** `private static void`

### retreatFromNearestTarget

```java
private static void retreatFromNearestTarget(Piglin p_34950_, LivingEntity p_34951_)
```

**Parameters:**

- `p_34950_` (`Piglin`)
- `p_34951_` (`LivingEntity`)

**Returns:** `private static void`

### setAvoidTargetAndDontHuntForAWhile

```java
 setAvoidTargetAndDontHuntForAWhile()
```

**Returns:** ``

### wantsToStopFleeing

```java
private static boolean wantsToStopFleeing(Piglin p_35009_)
```

**Parameters:**

- `p_35009_` (`Piglin`)

**Returns:** `private static boolean`

### piglinsEqualOrOutnumberHoglins

```java
return piglinsEqualOrOutnumberHoglins()
```

**Returns:** `return`

### piglinsEqualOrOutnumberHoglins

```java
private static boolean piglinsEqualOrOutnumberHoglins(Piglin p_35011_)
```

**Parameters:**

- `p_35011_` (`Piglin`)

**Returns:** `private static boolean`

### hoglinsOutnumberPiglins

```java
private static boolean hoglinsOutnumberPiglins(Piglin p_35013_)
```

**Parameters:**

- `p_35013_` (`Piglin`)

**Returns:** `private static boolean`

### setAvoidTargetAndDontHuntForAWhile

```java
private static void setAvoidTargetAndDontHuntForAWhile(Piglin p_34968_, LivingEntity p_34969_)
```

**Parameters:**

- `p_34968_` (`Piglin`)
- `p_34969_` (`LivingEntity`)

**Returns:** `private static void`

### dontKillAnyMoreHoglinsForAWhile

```java
 dontKillAnyMoreHoglinsForAWhile()
```

**Returns:** ``

### dontKillAnyMoreHoglinsForAWhile

```java
protected static void dontKillAnyMoreHoglinsForAWhile(AbstractPiglin p_34923_)
```

**Parameters:**

- `p_34923_` (`AbstractPiglin`)

**Returns:** `protected static void`

### eat

```java
private static void eat(Piglin p_35015_)
```

**Parameters:**

- `p_35015_` (`Piglin`)

**Returns:** `private static void`

### getRandomNearbyPos

```java
private static Vec3 getRandomNearbyPos(Piglin p_35017_)
```

**Parameters:**

- `p_35017_` (`Piglin`)

**Returns:** `private static Vec3`

### hasEatenRecently

```java
private static boolean hasEatenRecently(Piglin p_35019_)
```

**Parameters:**

- `p_35019_` (`Piglin`)

**Returns:** `private static boolean`

### isIdle

```java
protected static boolean isIdle(AbstractPiglin p_34943_)
```

**Parameters:**

- `p_34943_` (`AbstractPiglin`)

**Returns:** `protected static boolean`

### hasCrossbow

```java
private static boolean hasCrossbow(LivingEntity p_34919_)
```

**Parameters:**

- `p_34919_` (`LivingEntity`)

**Returns:** `private static boolean`

### admireGoldItem

```java
private static void admireGoldItem(LivingEntity p_34939_)
```

**Parameters:**

- `p_34939_` (`LivingEntity`)

**Returns:** `private static void`

### isAdmiringItem

```java
private static boolean isAdmiringItem(Piglin p_35021_)
```

**Parameters:**

- `p_35021_` (`Piglin`)

**Returns:** `private static boolean`

### isBarterCurrency

```java
private static boolean isBarterCurrency(ItemStack p_149968_)
```

**Parameters:**

- `p_149968_` (`ItemStack`)

**Returns:** `private static boolean`

### isFood

```java
private static boolean isFood(ItemStack p_149970_)
```

**Parameters:**

- `p_149970_` (`ItemStack`)

**Returns:** `private static boolean`

### isNearRepellent

```java
private static boolean isNearRepellent(Piglin p_35023_)
```

**Parameters:**

- `p_35023_` (`Piglin`)

**Returns:** `private static boolean`

### seesPlayerHoldingLovedItem

```java
private static boolean seesPlayerHoldingLovedItem(LivingEntity p_34972_)
```

**Parameters:**

- `p_34972_` (`LivingEntity`)

**Returns:** `private static boolean`

### doesntSeeAnyPlayerHoldingLovedItem

```java
private static boolean doesntSeeAnyPlayerHoldingLovedItem(LivingEntity p_34983_)
```

**Parameters:**

- `p_34983_` (`LivingEntity`)

**Returns:** `private static boolean`

### isPlayerHoldingLovedItem

```java
public static boolean isPlayerHoldingLovedItem(LivingEntity p_34884_)
```

**Parameters:**

- `p_34884_` (`LivingEntity`)

**Returns:** `public static boolean`

### isAdmiringDisabled

```java
private static boolean isAdmiringDisabled(Piglin p_35025_)
```

**Parameters:**

- `p_35025_` (`Piglin`)

**Returns:** `private static boolean`

### wasHurtRecently

```java
private static boolean wasHurtRecently(LivingEntity p_34989_)
```

**Parameters:**

- `p_34989_` (`LivingEntity`)

**Returns:** `private static boolean`

### isHoldingItemInOffHand

```java
private static boolean isHoldingItemInOffHand(Piglin p_35027_)
```

**Parameters:**

- `p_35027_` (`Piglin`)

**Returns:** `private static boolean`

### isNotHoldingLovedItemInOffHand

```java
private static boolean isNotHoldingLovedItemInOffHand(Piglin p_35029_)
```

**Parameters:**

- `p_35029_` (`Piglin`)

**Returns:** `private static boolean`

### isZombified

```java
public static boolean isZombified(EntityType<?> p_34807_)
```

**Parameters:**

- `p_34807_` (`EntityType<?>`)

**Returns:** `public static boolean`
