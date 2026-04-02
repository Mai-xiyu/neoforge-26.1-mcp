# DerivedLevelData

**Package:** `net.minecraft.world.level.storage`
**Type:** class
**Implements:** `ServerLevelData`

## Methods

### DerivedLevelData

```java
public DerivedLevelData(WorldData p_78079_, ServerLevelData p_78080_)
```

**Parameters:**

- `p_78079_` (`WorldData`)
- `p_78080_` (`ServerLevelData`)

**Returns:** `public`

### getSpawnPos

```java
public BlockPos getSpawnPos()
```

**Returns:** `BlockPos`

### getSpawnAngle

```java
public float getSpawnAngle()
```

**Returns:** `float`

### getGameTime

```java
public long getGameTime()
```

**Returns:** `long`

### getDayTime

```java
public long getDayTime()
```

**Returns:** `long`

### getLevelName

```java
public String getLevelName()
```

**Returns:** `String`

### getClearWeatherTime

```java
public int getClearWeatherTime()
```

**Returns:** `int`

### setClearWeatherTime

```java
public void setClearWeatherTime(int p_78085_)
```

**Parameters:**

- `p_78085_` (`int`)

### isThundering

```java
public boolean isThundering()
```

**Returns:** `boolean`

### getThunderTime

```java
public int getThunderTime()
```

**Returns:** `int`

### isRaining

```java
public boolean isRaining()
```

**Returns:** `boolean`

### getRainTime

```java
public int getRainTime()
```

**Returns:** `int`

### getGameType

```java
public GameType getGameType()
```

**Returns:** `GameType`

### setGameTime

```java
public void setGameTime(long p_78087_)
```

**Parameters:**

- `p_78087_` (`long`)

### setDayTime

```java
public void setDayTime(long p_78105_)
```

**Parameters:**

- `p_78105_` (`long`)

### setSpawn

```java
public void setSpawn(BlockPos p_78093_, float p_78094_)
```

**Parameters:**

- `p_78093_` (`BlockPos`)
- `p_78094_` (`float`)

### setThundering

```java
public void setThundering(boolean p_78100_)
```

**Parameters:**

- `p_78100_` (`boolean`)

### setThunderTime

```java
public void setThunderTime(int p_78118_)
```

**Parameters:**

- `p_78118_` (`int`)

### setRaining

```java
public void setRaining(boolean p_78107_)
```

**Parameters:**

- `p_78107_` (`boolean`)

### setRainTime

```java
public void setRainTime(int p_78121_)
```

**Parameters:**

- `p_78121_` (`int`)

### setGameType

```java
public void setGameType(GameType p_78089_)
```

**Parameters:**

- `p_78089_` (`GameType`)

### isHardcore

```java
public boolean isHardcore()
```

**Returns:** `boolean`

### isAllowCommands

```java
public boolean isAllowCommands()
```

**Returns:** `boolean`

### isInitialized

```java
public boolean isInitialized()
```

**Returns:** `boolean`

### setInitialized

```java
public void setInitialized(boolean p_78112_)
```

**Parameters:**

- `p_78112_` (`boolean`)

### getGameRules

```java
public GameRules getGameRules()
```

**Returns:** `GameRules`

### getWorldBorder

```java
public WorldBorder.Settings getWorldBorder()
```

**Returns:** `WorldBorder.Settings`

### setWorldBorder

```java
public void setWorldBorder(WorldBorder.Settings p_78091_)
```

**Parameters:**

- `p_78091_` (`WorldBorder.Settings`)

### getDifficulty

```java
public Difficulty getDifficulty()
```

**Returns:** `Difficulty`

### isDifficultyLocked

```java
public boolean isDifficultyLocked()
```

**Returns:** `boolean`

### getScheduledEvents

```java
public TimerQueue<MinecraftServer> getScheduledEvents()
```

**Returns:** `TimerQueue<MinecraftServer>`

### getWanderingTraderSpawnDelay

```java
public int getWanderingTraderSpawnDelay()
```

**Returns:** `int`

### setWanderingTraderSpawnDelay

```java
public void setWanderingTraderSpawnDelay(int p_78124_)
```

**Parameters:**

- `p_78124_` (`int`)

### getWanderingTraderSpawnChance

```java
public int getWanderingTraderSpawnChance()
```

**Returns:** `int`

### setWanderingTraderSpawnChance

```java
public void setWanderingTraderSpawnChance(int p_78127_)
```

**Parameters:**

- `p_78127_` (`int`)

### getWanderingTraderId

```java
public UUID getWanderingTraderId()
```

**Returns:** `UUID`

### setWanderingTraderId

```java
public void setWanderingTraderId(UUID p_78096_)
```

**Parameters:**

- `p_78096_` (`UUID`)

### fillCrashReportCategory

```java
public void fillCrashReportCategory(CrashReportCategory p_164852_, LevelHeightAccessor p_164853_)
```

**Parameters:**

- `p_164852_` (`CrashReportCategory`)
- `p_164853_` (`LevelHeightAccessor`)

### getDayTimeFraction

```java
public float getDayTimeFraction()
```

**Returns:** `float`

### getDayTimePerTick

```java
public float getDayTimePerTick()
```

**Returns:** `float`

### setDayTimeFraction

```java
public void setDayTimeFraction(float dayTimeFraction)
```

**Parameters:**

- `dayTimeFraction` (`float`)

### setDayTimePerTick

```java
public void setDayTimePerTick(float dayTimePerTick)
```

**Parameters:**

- `dayTimePerTick` (`float`)
