# PrimaryLevelData

**Package:** `net.minecraft.world.level.storage`
**Type:** class
**Implements:** `ServerLevelData`, `WorldData`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LEVEL_NAME` | `String` |  |
| `PLAYER` | `String` |  |
| `WORLD_GEN_SETTINGS` | `String` |  |

## Methods

### PrimaryLevelData

```java
private PrimaryLevelData(CompoundTag p_277888_, boolean p_278109_, BlockPos p_320000_, float p_277542_, long p_277414_, long p_277635_, int p_277672_, int p_277714_, int p_278088_, boolean p_277943_, int p_278037_, boolean p_277644_, boolean p_277749_, boolean p_278004_, WorldBorder.Settings p_277729_, int p_277595_, int p_277794_, UUID p_277341_, Set<String> p_277989_, Set<String> p_277399_, TimerQueue<MinecraftServer> p_277860_, CompoundTag p_277936_, EndDragonFight.Data p_289764_, LevelSettings p_278064_, WorldOptions p_278072_, PrimaryLevelData.SpecialWorldProperty p_277548_, Lifecycle p_277915_)
```

**Parameters:**

- `p_277888_` (`CompoundTag`)
- `p_278109_` (`boolean`)
- `p_320000_` (`BlockPos`)
- `p_277542_` (`float`)
- `p_277414_` (`long`)
- `p_277635_` (`long`)
- `p_277672_` (`int`)
- `p_277714_` (`int`)
- `p_278088_` (`int`)
- `p_277943_` (`boolean`)
- `p_278037_` (`int`)
- `p_277644_` (`boolean`)
- `p_277749_` (`boolean`)
- `p_278004_` (`boolean`)
- `p_277729_` (`WorldBorder.Settings`)
- `p_277595_` (`int`)
- `p_277794_` (`int`)
- `p_277341_` (`UUID`)
- `p_277989_` (`Set<String>`)
- `p_277399_` (`Set<String>`)
- `p_277860_` (`TimerQueue<MinecraftServer>`)
- `p_277936_` (`CompoundTag`)
- `p_289764_` (`EndDragonFight.Data`)
- `p_278064_` (`LevelSettings`)
- `p_278072_` (`WorldOptions`)
- `p_277548_` (`PrimaryLevelData.SpecialWorldProperty`)
- `p_277915_` (`Lifecycle`)

**Returns:** `private`

### PrimaryLevelData

```java
public PrimaryLevelData(LevelSettings p_251081_, WorldOptions p_251666_, PrimaryLevelData.SpecialWorldProperty p_252268_, Lifecycle p_251714_)
```

**Parameters:**

- `p_251081_` (`LevelSettings`)
- `p_251666_` (`WorldOptions`)
- `p_252268_` (`PrimaryLevelData.SpecialWorldProperty`)
- `p_251714_` (`Lifecycle`)

**Returns:** `public`

### parse

```java
<T> public static <T> PrimaryLevelData parse(Dynamic<T> p_78531_, LevelSettings p_78535_, PrimaryLevelData.SpecialWorldProperty p_250651_, WorldOptions p_251864_, Lifecycle p_78538_)
```

**Parameters:**

- `p_78531_` (`Dynamic<T>`)
- `p_78535_` (`LevelSettings`)
- `p_250651_` (`PrimaryLevelData.SpecialWorldProperty`)
- `p_251864_` (`WorldOptions`)
- `p_78538_` (`Lifecycle`)

**Returns:** `public static <T> PrimaryLevelData`

### createTag

```java
public CompoundTag createTag(RegistryAccess p_78543_, CompoundTag p_78544_)
```

**Parameters:**

- `p_78543_` (`RegistryAccess`)
- `p_78544_` (`CompoundTag`)

**Returns:** `CompoundTag`

### setTagData

```java
private void setTagData(RegistryAccess p_78546_, CompoundTag p_78547_, CompoundTag p_78548_)
```

**Parameters:**

- `p_78546_` (`RegistryAccess`)
- `p_78547_` (`CompoundTag`)
- `p_78548_` (`CompoundTag`)

**Returns:** `private void`

### stringCollectionToTag

```java
private static ListTag stringCollectionToTag(Set<String> p_277880_)
```

**Parameters:**

- `p_277880_` (`Set<String>`)

**Returns:** `private static ListTag`

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

### getLoadedPlayerTag

```java
public CompoundTag getLoadedPlayerTag()
```

**Returns:** `CompoundTag`

### setGameTime

```java
public void setGameTime(long p_78519_)
```

**Parameters:**

- `p_78519_` (`long`)

### setDayTime

```java
public void setDayTime(long p_78567_)
```

**Parameters:**

- `p_78567_` (`long`)

### setSpawn

```java
public void setSpawn(BlockPos p_78540_, float p_78541_)
```

**Parameters:**

- `p_78540_` (`BlockPos`)
- `p_78541_` (`float`)

### getLevelName

```java
public String getLevelName()
```

**Returns:** `String`

### getVersion

```java
public int getVersion()
```

**Returns:** `int`

### getClearWeatherTime

```java
public int getClearWeatherTime()
```

**Returns:** `int`

### setClearWeatherTime

```java
public void setClearWeatherTime(int p_78517_)
```

**Parameters:**

- `p_78517_` (`int`)

### isThundering

```java
public boolean isThundering()
```

**Returns:** `boolean`

### setThundering

```java
public void setThundering(boolean p_78562_)
```

**Parameters:**

- `p_78562_` (`boolean`)

### getThunderTime

```java
public int getThunderTime()
```

**Returns:** `int`

### setThunderTime

```java
public void setThunderTime(int p_78589_)
```

**Parameters:**

- `p_78589_` (`int`)

### isRaining

```java
public boolean isRaining()
```

**Returns:** `boolean`

### setRaining

```java
public void setRaining(boolean p_78576_)
```

**Parameters:**

- `p_78576_` (`boolean`)

### getRainTime

```java
public int getRainTime()
```

**Returns:** `int`

### setRainTime

```java
public void setRainTime(int p_78592_)
```

**Parameters:**

- `p_78592_` (`int`)

### getGameType

```java
public GameType getGameType()
```

**Returns:** `GameType`

### setGameType

```java
public void setGameType(GameType p_78525_)
```

**Parameters:**

- `p_78525_` (`GameType`)

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
public void setInitialized(boolean p_78581_)
```

**Parameters:**

- `p_78581_` (`boolean`)

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
public void setWorldBorder(WorldBorder.Settings p_78527_)
```

**Parameters:**

- `p_78527_` (`WorldBorder.Settings`)

### getDifficulty

```java
public Difficulty getDifficulty()
```

**Returns:** `Difficulty`

### setDifficulty

```java
public void setDifficulty(Difficulty p_78521_)
```

**Parameters:**

- `p_78521_` (`Difficulty`)

### isDifficultyLocked

```java
public boolean isDifficultyLocked()
```

**Returns:** `boolean`

### setDifficultyLocked

```java
public void setDifficultyLocked(boolean p_78586_)
```

**Parameters:**

- `p_78586_` (`boolean`)

### getScheduledEvents

```java
public TimerQueue<MinecraftServer> getScheduledEvents()
```

**Returns:** `TimerQueue<MinecraftServer>`

### fillCrashReportCategory

```java
public void fillCrashReportCategory(CrashReportCategory p_164972_, LevelHeightAccessor p_164973_)
```

**Parameters:**

- `p_164972_` (`CrashReportCategory`)
- `p_164973_` (`LevelHeightAccessor`)

### worldGenOptions

```java
public WorldOptions worldGenOptions()
```

**Returns:** `WorldOptions`

### isFlatWorld

```java
public boolean isFlatWorld()
```

**Returns:** `boolean`

### isDebugWorld

```java
public boolean isDebugWorld()
```

**Returns:** `boolean`

### worldGenSettingsLifecycle

```java
public Lifecycle worldGenSettingsLifecycle()
```

**Returns:** `Lifecycle`

### endDragonFightData

```java
public EndDragonFight.Data endDragonFightData()
```

**Returns:** `EndDragonFight.Data`

### setEndDragonFightData

```java
public void setEndDragonFightData(EndDragonFight.Data p_289770_)
```

**Parameters:**

- `p_289770_` (`EndDragonFight.Data`)

### getDataConfiguration

```java
public WorldDataConfiguration getDataConfiguration()
```

**Returns:** `WorldDataConfiguration`

### setDataConfiguration

```java
public void setDataConfiguration(WorldDataConfiguration p_252328_)
```

**Parameters:**

- `p_252328_` (`WorldDataConfiguration`)

### getCustomBossEvents

```java
public CompoundTag getCustomBossEvents()
```

**Returns:** `CompoundTag`

### setCustomBossEvents

```java
public void setCustomBossEvents(CompoundTag p_78571_)
```

**Parameters:**

- `p_78571_` (`CompoundTag`)

### getWanderingTraderSpawnDelay

```java
public int getWanderingTraderSpawnDelay()
```

**Returns:** `int`

### setWanderingTraderSpawnDelay

```java
public void setWanderingTraderSpawnDelay(int p_78595_)
```

**Parameters:**

- `p_78595_` (`int`)

### getWanderingTraderSpawnChance

```java
public int getWanderingTraderSpawnChance()
```

**Returns:** `int`

### setWanderingTraderSpawnChance

```java
public void setWanderingTraderSpawnChance(int p_78598_)
```

**Parameters:**

- `p_78598_` (`int`)

### getWanderingTraderId

```java
public UUID getWanderingTraderId()
```

**Returns:** `UUID`

### setWanderingTraderId

```java
public void setWanderingTraderId(UUID p_78553_)
```

**Parameters:**

- `p_78553_` (`UUID`)

### setModdedInfo

```java
public void setModdedInfo(String p_78550_, boolean p_78551_)
```

**Parameters:**

- `p_78550_` (`String`)
- `p_78551_` (`boolean`)

### wasModded

```java
public boolean wasModded()
```

**Returns:** `boolean`

### getKnownServerBrands

```java
public Set<String> getKnownServerBrands()
```

**Returns:** `Set<String>`

### getRemovedFeatureFlags

```java
public Set<String> getRemovedFeatureFlags()
```

**Returns:** `Set<String>`

### overworldData

```java
public ServerLevelData overworldData()
```

**Returns:** `ServerLevelData`

### getLevelSettings

```java
public LevelSettings getLevelSettings()
```

**Returns:** `LevelSettings`

### hasConfirmedExperimentalWarning

```java
public boolean hasConfirmedExperimentalWarning()
```

**Returns:** `public boolean`

### withConfirmedWarning

```java
public PrimaryLevelData withConfirmedWarning(boolean confirmedWarning)
```

**Parameters:**

- `confirmedWarning` (`boolean`)

**Returns:** `public PrimaryLevelData`

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

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SpecialWorldProperty` | enum |  |
