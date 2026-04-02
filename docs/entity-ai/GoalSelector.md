# GoalSelector

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class

## Methods

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### isRunning

```java
public boolean isRunning()
```

**Returns:** `boolean`

### GoalSelector

```java
public GoalSelector(Supplier<ProfilerFiller> p_25351_)
```

**Parameters:**

- `p_25351_` (`Supplier<ProfilerFiller>`)

**Returns:** `public`

### addGoal

```java
public void addGoal(int p_25353_, Goal p_25354_)
```

**Parameters:**

- `p_25353_` (`int`)
- `p_25354_` (`Goal`)

**Returns:** `public void`

### removeAllGoals

```java
public void removeAllGoals(Predicate<Goal> p_262575_)
```

**Parameters:**

- `p_262575_` (`Predicate<Goal>`)

### removeGoal

```java
public void removeGoal(Goal p_25364_)
```

**Parameters:**

- `p_25364_` (`Goal`)

**Returns:** `public void`

### goalContainsAnyFlags

```java
private static boolean goalContainsAnyFlags(WrappedGoal p_186076_, EnumSet<Goal.Flag> p_186077_)
```

**Parameters:**

- `p_186076_` (`WrappedGoal`)
- `p_186077_` (`EnumSet<Goal.Flag>`)

**Returns:** `private static boolean`

### goalCanBeReplacedForAllFlags

```java
private static boolean goalCanBeReplacedForAllFlags(WrappedGoal p_186079_, Map<Goal.Flag, WrappedGoal> p_186080_)
```

**Parameters:**

- `p_186079_` (`WrappedGoal`)
- `p_186080_` (`Map<Goal.Flag, WrappedGoal>`)

**Returns:** `private static boolean`

### tick

```java
public void tick()
```

**Returns:** `public void`

### tickRunningGoals

```java
public void tickRunningGoals(boolean p_186082_)
```

**Parameters:**

- `p_186082_` (`boolean`)

**Returns:** `public void`

### getAvailableGoals

```java
public Set<WrappedGoal> getAvailableGoals()
```

**Returns:** `public Set<WrappedGoal>`

### disableControlFlag

```java
public void disableControlFlag(Goal.Flag p_25356_)
```

**Parameters:**

- `p_25356_` (`Goal.Flag`)

**Returns:** `public void`

### enableControlFlag

```java
public void enableControlFlag(Goal.Flag p_25375_)
```

**Parameters:**

- `p_25375_` (`Goal.Flag`)

**Returns:** `public void`

### setControlFlag

```java
public void setControlFlag(Goal.Flag p_25361_, boolean p_25362_)
```

**Parameters:**

- `p_25361_` (`Goal.Flag`)
- `p_25362_` (`boolean`)

**Returns:** `public void`
