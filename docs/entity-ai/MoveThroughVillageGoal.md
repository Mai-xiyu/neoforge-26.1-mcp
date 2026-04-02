# MoveThroughVillageGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class
**Extends:** `Goal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `mob` | `PathfinderMob` |  |

## Methods

### MoveThroughVillageGoal

```java
public MoveThroughVillageGoal(PathfinderMob p_25582_, double p_25583_, boolean p_25584_, int p_25585_, BooleanSupplier p_25586_)
```

**Parameters:**

- `p_25582_` (`PathfinderMob`)
- `p_25583_` (`double`)
- `p_25584_` (`boolean`)
- `p_25585_` (`int`)
- `p_25586_` (`BooleanSupplier`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unsupported mob for MoveThroughVillageGoal")
```

**Parameters:**

- `MoveThroughVillageGoal"` (`"Unsupported mob for`)

**Returns:** `throw new`

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

### hasNotVisited

```java
private boolean hasNotVisited(BlockPos p_25593_)
```

**Parameters:**

- `p_25593_` (`BlockPos`)

**Returns:** `private boolean`

### updateVisited

```java
private void updateVisited()
```

**Returns:** `private void`
