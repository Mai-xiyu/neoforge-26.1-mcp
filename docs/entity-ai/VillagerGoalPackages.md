# VillagerGoalPackages

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INTERACT_DIST_SQR` | `int` |  |
| `INTERACT_WALKUP_DIST` | `int` |  |
| `INTERACT_SPEED_MODIFIER` | `float` |  |

## Methods

### getCorePackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getCorePackage(VillagerProfession p_24586_, float p_24587_)
```

**Parameters:**

- `p_24586_` (`VillagerProfession`)
- `p_24587_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getWorkPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getWorkPackage(VillagerProfession p_24590_, float p_24591_)
```

**Parameters:**

- `p_24590_` (`VillagerProfession`)
- `p_24591_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getPlayPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getPlayPackage(float p_24584_)
```

**Parameters:**

- `p_24584_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getRestPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getRestPackage(VillagerProfession p_24593_, float p_24594_)
```

**Parameters:**

- `p_24593_` (`VillagerProfession`)
- `p_24594_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getMeetPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getMeetPackage(VillagerProfession p_24596_, float p_24597_)
```

**Parameters:**

- `p_24596_` (`VillagerProfession`)
- `p_24597_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getIdlePackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getIdlePackage(VillagerProfession p_24599_, float p_24600_)
```

**Parameters:**

- `p_24599_` (`VillagerProfession`)
- `p_24600_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getPanicPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getPanicPackage(VillagerProfession p_24602_, float p_24603_)
```

**Parameters:**

- `p_24602_` (`VillagerProfession`)
- `p_24603_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getPreRaidPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getPreRaidPackage(VillagerProfession p_24605_, float p_24606_)
```

**Parameters:**

- `p_24605_` (`VillagerProfession`)
- `p_24606_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getRaidPackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getRaidPackage(VillagerProfession p_24608_, float p_24609_)
```

**Parameters:**

- `p_24608_` (`VillagerProfession`)
- `p_24609_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getHidePackage

```java
public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>> getHidePackage(VillagerProfession p_24611_, float p_24612_)
```

**Parameters:**

- `p_24611_` (`VillagerProfession`)
- `p_24612_` (`float`)

**Returns:** `public static ImmutableList<Pair<Integer, ? extends BehaviorControl<? super Villager>>>`

### getFullLookBehavior

```java
private static Pair<Integer, BehaviorControl<LivingEntity>> getFullLookBehavior()
```

**Returns:** `private static Pair<Integer, BehaviorControl<LivingEntity>>`

### getMinimalLookBehavior

```java
private static Pair<Integer, BehaviorControl<LivingEntity>> getMinimalLookBehavior()
```

**Returns:** `private static Pair<Integer, BehaviorControl<LivingEntity>>`

### raidExistsAndActive

```java
private static boolean raidExistsAndActive(ServerLevel p_260274_, LivingEntity p_260163_)
```

**Parameters:**

- `p_260274_` (`ServerLevel`)
- `p_260163_` (`LivingEntity`)

**Returns:** `private static boolean`

### raidExistsAndNotVictory

```java
private static boolean raidExistsAndNotVictory(ServerLevel p_259939_, LivingEntity p_259384_)
```

**Parameters:**

- `p_259939_` (`ServerLevel`)
- `p_259384_` (`LivingEntity`)

**Returns:** `private static boolean`
