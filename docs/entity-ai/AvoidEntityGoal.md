# AvoidEntityGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class<T extends LivingEntity>
**Extends:** `Goal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `mob` | `PathfinderMob` |  |
| `maxDist` | `float` |  |
| `pathNav` | `PathNavigation` |  |
| `avoidClass` | `Class<T>` |  |
| `avoidPredicate` | `Predicate<LivingEntity>` |  |
| `predicateOnAvoidEntity` | `Predicate<LivingEntity>` |  |

## Methods

### AvoidEntityGoal

```java
public AvoidEntityGoal(PathfinderMob p_25027_, Class<T> p_25028_, float p_25029_, double p_25030_, double p_25031_)
```

**Parameters:**

- `p_25027_` (`PathfinderMob`)
- `p_25028_` (`Class<T>`)
- `p_25029_` (`float`)
- `p_25030_` (`double`)
- `p_25031_` (`double`)

**Returns:** `public`

### this

```java
 this(p_25052_ -> true, p_25029_, p_25030_, p_25031_, EntitySelector.NO_CREATIVE_OR_SPECTATOR::test)
```

**Parameters:**

- `EntitySelector.NO_CREATIVE_OR_SPECTATOR::test` (`p_25052_ -> true, p_25029_, p_25030_, p_25031_,`)

**Returns:** ``

### AvoidEntityGoal

```java
public AvoidEntityGoal(PathfinderMob p_25040_, Class<T> p_25041_, Predicate<LivingEntity> p_25042_, float p_25043_, double p_25044_, double p_25045_, Predicate<LivingEntity> p_25046_)
```

**Parameters:**

- `p_25040_` (`PathfinderMob`)
- `p_25041_` (`Class<T>`)
- `p_25042_` (`Predicate<LivingEntity>`)
- `p_25043_` (`float`)
- `p_25044_` (`double`)
- `p_25045_` (`double`)
- `p_25046_` (`Predicate<LivingEntity>`)

**Returns:** `public`

### AvoidEntityGoal

```java
public AvoidEntityGoal(PathfinderMob p_25033_, Class<T> p_25034_, float p_25035_, double p_25036_, double p_25037_, Predicate<LivingEntity> p_25038_)
```

**Parameters:**

- `p_25033_` (`PathfinderMob`)
- `p_25034_` (`Class<T>`)
- `p_25035_` (`float`)
- `p_25036_` (`double`)
- `p_25037_` (`double`)
- `p_25038_` (`Predicate<LivingEntity>`)

**Returns:** `public`

### this

```java
 this(p_25049_ -> true, p_25035_, p_25036_, p_25037_, p_25038_)
```

**Parameters:**

- `p_25038_` (`p_25049_ -> true, p_25035_, p_25036_, p_25037_,`)

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### tick

```java
public void tick()
```
