# WrappedGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class
**Extends:** `Goal`

## Methods

### WrappedGoal

```java
public WrappedGoal(int p_25998_, Goal p_25999_)
```

**Parameters:**

- `p_25998_` (`int`)
- `p_25999_` (`Goal`)

**Returns:** `public`

### canBeReplacedBy

```java
public boolean canBeReplacedBy(WrappedGoal p_26003_)
```

**Parameters:**

- `p_26003_` (`WrappedGoal`)

**Returns:** `public boolean`

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

### isInterruptable

```java
public boolean isInterruptable()
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

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### adjustedTickDelay

```java
protected int adjustedTickDelay(int p_186092_)
```

**Parameters:**

- `p_186092_` (`int`)

**Returns:** `int`

### tick

```java
public void tick()
```

### setFlags

```java
public void setFlags(EnumSet<Goal.Flag> p_26005_)
```

**Parameters:**

- `p_26005_` (`EnumSet<Goal.Flag>`)

### getFlags

```java
public EnumSet<Goal.Flag> getFlags()
```

**Returns:** `EnumSet<Goal.Flag>`

### isRunning

```java
public boolean isRunning()
```

**Returns:** `public boolean`

### getPriority

```java
public int getPriority()
```

**Returns:** `public int`

### getGoal

```java
public Goal getGoal()
```

**Returns:** `public Goal`

### equals

```java
public boolean equals(Object p_26011_)
```

**Parameters:**

- `p_26011_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
