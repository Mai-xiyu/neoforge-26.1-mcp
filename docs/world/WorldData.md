# WorldData

**Package:** `net.minecraft.world.level.storage`
**Type:** interface

## Methods

### getDataConfiguration

```java
WorldDataConfiguration getDataConfiguration()
```

**Returns:** `WorldDataConfiguration`

### setDataConfiguration

```java
void setDataConfiguration(WorldDataConfiguration p_250014_)
```

**Parameters:**

- `p_250014_` (`WorldDataConfiguration`)

### wasModded

```java
boolean wasModded()
```

**Returns:** `boolean`

### getKnownServerBrands

```java
Set<String> getKnownServerBrands()
```

**Returns:** `Set<String>`

### getRemovedFeatureFlags

```java
Set<String> getRemovedFeatureFlags()
```

**Returns:** `Set<String>`

### setModdedInfo

```java
void setModdedInfo(String p_78638_, boolean p_78639_)
```

**Parameters:**

- `p_78638_` (`String`)
- `p_78639_` (`boolean`)

### fillCrashReportCategory

```java
default void fillCrashReportCategory(CrashReportCategory p_78640_)
```

**Parameters:**

- `p_78640_` (`CrashReportCategory`)

**Returns:** `default void`

### getStorageVersionName

```java
default String getStorageVersionName(int p_78647_)
```

**Parameters:**

- `p_78647_` (`int`)

**Returns:** `default String`

### getCustomBossEvents

```java
CompoundTag getCustomBossEvents()
```

**Returns:** `CompoundTag`

### setCustomBossEvents

```java
void setCustomBossEvents(CompoundTag p_78643_)
```

**Parameters:**

- `p_78643_` (`CompoundTag`)

### overworldData

```java
ServerLevelData overworldData()
```

**Returns:** `ServerLevelData`

### getLevelSettings

```java
LevelSettings getLevelSettings()
```

**Returns:** `LevelSettings`

### createTag

```java
CompoundTag createTag(RegistryAccess p_78636_, CompoundTag p_78637_)
```

**Parameters:**

- `p_78636_` (`RegistryAccess`)
- `p_78637_` (`CompoundTag`)

**Returns:** `CompoundTag`

### isHardcore

```java
boolean isHardcore()
```

**Returns:** `boolean`

### getVersion

```java
int getVersion()
```

**Returns:** `int`

### getLevelName

```java
String getLevelName()
```

**Returns:** `String`

### getGameType

```java
GameType getGameType()
```

**Returns:** `GameType`

### setGameType

```java
void setGameType(GameType p_78635_)
```

**Parameters:**

- `p_78635_` (`GameType`)

### isAllowCommands

```java
boolean isAllowCommands()
```

**Returns:** `boolean`

### getDifficulty

```java
Difficulty getDifficulty()
```

**Returns:** `Difficulty`

### setDifficulty

```java
void setDifficulty(Difficulty p_78633_)
```

**Parameters:**

- `p_78633_` (`Difficulty`)

### isDifficultyLocked

```java
boolean isDifficultyLocked()
```

**Returns:** `boolean`

### setDifficultyLocked

```java
void setDifficultyLocked(boolean p_78645_)
```

**Parameters:**

- `p_78645_` (`boolean`)

### getGameRules

```java
GameRules getGameRules()
```

**Returns:** `GameRules`

### getLoadedPlayerTag

```java
CompoundTag getLoadedPlayerTag()
```

**Returns:** `CompoundTag`

### endDragonFightData

```java
EndDragonFight.Data endDragonFightData()
```

**Returns:** `EndDragonFight.Data`

### setEndDragonFightData

```java
void setEndDragonFightData(EndDragonFight.Data p_289783_)
```

**Parameters:**

- `p_289783_` (`EndDragonFight.Data`)

### worldGenOptions

```java
WorldOptions worldGenOptions()
```

**Returns:** `WorldOptions`

### isFlatWorld

```java
boolean isFlatWorld()
```

**Returns:** `boolean`

### isDebugWorld

```java
boolean isDebugWorld()
```

**Returns:** `boolean`

### worldGenSettingsLifecycle

```java
Lifecycle worldGenSettingsLifecycle()
```

**Returns:** `Lifecycle`

### enabledFeatures

```java
default FeatureFlagSet enabledFeatures()
```

**Returns:** `default FeatureFlagSet`
