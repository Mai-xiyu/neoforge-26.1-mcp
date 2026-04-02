# LevelData

**Package:** `net.minecraft.world.level.storage`
**Type:** interface

## Methods

### getSpawnPos

```java
BlockPos getSpawnPos()
```

**Returns:** `BlockPos`

### getSpawnAngle

```java
float getSpawnAngle()
```

**Returns:** `float`

### getGameTime

```java
long getGameTime()
```

**Returns:** `long`

### getDayTime

```java
long getDayTime()
```

**Returns:** `long`

### isThundering

```java
boolean isThundering()
```

**Returns:** `boolean`

### isRaining

```java
boolean isRaining()
```

**Returns:** `boolean`

### setRaining

```java
void setRaining(boolean p_78171_)
```

**Parameters:**

- `p_78171_` (`boolean`)

### isHardcore

```java
boolean isHardcore()
```

**Returns:** `boolean`

### getGameRules

```java
GameRules getGameRules()
```

**Returns:** `GameRules`

### getDifficulty

```java
Difficulty getDifficulty()
```

**Returns:** `Difficulty`

### isDifficultyLocked

```java
boolean isDifficultyLocked()
```

**Returns:** `boolean`

### fillCrashReportCategory

```java
default void fillCrashReportCategory(CrashReportCategory p_164873_, LevelHeightAccessor p_164874_)
```

**Parameters:**

- `p_164873_` (`CrashReportCategory`)
- `p_164874_` (`LevelHeightAccessor`)

**Returns:** `default void`
