# ServerLevelData

**Package:** `net.minecraft.world.level.storage`
**Type:** interface
**Extends:** `WritableLevelData`

## Methods

### getLevelName

```java
String getLevelName()
```

**Returns:** `String`

### setThundering

```java
void setThundering(boolean p_78623_)
```

**Parameters:**

- `p_78623_` (`boolean`)

### getRainTime

```java
int getRainTime()
```

**Returns:** `int`

### setRainTime

```java
void setRainTime(int p_78627_)
```

**Parameters:**

- `p_78627_` (`int`)

### setThunderTime

```java
void setThunderTime(int p_78626_)
```

**Parameters:**

- `p_78626_` (`int`)

### getThunderTime

```java
int getThunderTime()
```

**Returns:** `int`

### fillCrashReportCategory

```java
default void fillCrashReportCategory(CrashReportCategory p_164976_, LevelHeightAccessor p_164977_)
```

**Parameters:**

- `p_164976_` (`CrashReportCategory`)
- `p_164977_` (`LevelHeightAccessor`)

### getClearWeatherTime

```java
int getClearWeatherTime()
```

**Returns:** `int`

### setClearWeatherTime

```java
void setClearWeatherTime(int p_78616_)
```

**Parameters:**

- `p_78616_` (`int`)

### getWanderingTraderSpawnDelay

```java
int getWanderingTraderSpawnDelay()
```

**Returns:** `int`

### setWanderingTraderSpawnDelay

```java
void setWanderingTraderSpawnDelay(int p_78628_)
```

**Parameters:**

- `p_78628_` (`int`)

### getWanderingTraderSpawnChance

```java
int getWanderingTraderSpawnChance()
```

**Returns:** `int`

### setWanderingTraderSpawnChance

```java
void setWanderingTraderSpawnChance(int p_78629_)
```

**Parameters:**

- `p_78629_` (`int`)

### getWanderingTraderId

```java
UUID getWanderingTraderId()
```

**Returns:** `UUID`

### setWanderingTraderId

```java
void setWanderingTraderId(UUID p_78620_)
```

**Parameters:**

- `p_78620_` (`UUID`)

### getGameType

```java
GameType getGameType()
```

**Returns:** `GameType`

### setWorldBorder

```java
void setWorldBorder(WorldBorder.Settings p_78619_)
```

**Parameters:**

- `p_78619_` (`WorldBorder.Settings`)

### getWorldBorder

```java
WorldBorder.Settings getWorldBorder()
```

**Returns:** `WorldBorder.Settings`

### isInitialized

```java
boolean isInitialized()
```

**Returns:** `boolean`

### setInitialized

```java
void setInitialized(boolean p_78625_)
```

**Parameters:**

- `p_78625_` (`boolean`)

### isAllowCommands

```java
boolean isAllowCommands()
```

**Returns:** `boolean`

### setGameType

```java
void setGameType(GameType p_78618_)
```

**Parameters:**

- `p_78618_` (`GameType`)

### getScheduledEvents

```java
TimerQueue<MinecraftServer> getScheduledEvents()
```

**Returns:** `TimerQueue<MinecraftServer>`

### setGameTime

```java
void setGameTime(long p_78617_)
```

**Parameters:**

- `p_78617_` (`long`)

### setDayTime

```java
void setDayTime(long p_78624_)
```

**Parameters:**

- `p_78624_` (`long`)

### getDayTimeFraction

```java
Neo
    float getDayTimeFraction()
```

**Returns:** `Neo
    float`

### getDayTimePerTick

```java
float getDayTimePerTick()
```

**Returns:** `float`

### setDayTimeFraction

```java
void setDayTimeFraction(float dayTimeFraction)
```

**Parameters:**

- `dayTimeFraction` (`float`)

### setDayTimePerTick

```java
void setDayTimePerTick(float dayTimePerTick)
```

**Parameters:**

- `dayTimePerTick` (`float`)
