# PanicGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class
**Extends:** `Goal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WATER_CHECK_DISTANCE_VERTICAL` | `int` |  |
| `mob` | `PathfinderMob` |  |
| `speedModifier` | `double` |  |
| `posX` | `double` |  |
| `posY` | `double` |  |
| `posZ` | `double` |  |
| `isRunning` | `boolean` |  |

## Methods

### PanicGoal

```java
public PanicGoal(PathfinderMob p_25691_, double p_25692_)
```

**Parameters:**

- `p_25691_` (`PathfinderMob`)
- `p_25692_` (`double`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### PanicGoal

```java
public PanicGoal(PathfinderMob p_350738_, double p_350600_, TagKey<DamageType> p_350426_)
```

**Parameters:**

- `p_350738_` (`PathfinderMob`)
- `p_350600_` (`double`)
- `p_350426_` (`TagKey<DamageType>`)

**Returns:** `public`

### this

```java
 this(p_350055_ -> p_350426_)
```

**Parameters:**

- `p_350426_` (`p_350055_ ->`)

**Returns:** ``

### PanicGoal

```java
public PanicGoal(PathfinderMob p_350679_, double p_350523_, Function<PathfinderMob, TagKey<DamageType>> p_350935_)
```

**Parameters:**

- `p_350679_` (`PathfinderMob`)
- `p_350523_` (`double`)
- `p_350935_` (`Function<PathfinderMob, TagKey<DamageType>>`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### shouldPanic

```java
protected boolean shouldPanic()
```

**Returns:** `protected boolean`

### findRandomPosition

```java
protected boolean findRandomPosition()
```

**Returns:** `protected boolean`

### isRunning

```java
public boolean isRunning()
```

**Returns:** `public boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### lookForWater

```java
protected BlockPos lookForWater(BlockGetter p_198173_, Entity p_198174_, int p_198175_)
```

**Parameters:**

- `p_198173_` (`BlockGetter`)
- `p_198174_` (`Entity`)
- `p_198175_` (`int`)

**Returns:** `BlockPos`
