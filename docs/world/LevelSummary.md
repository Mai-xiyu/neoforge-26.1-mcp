# LevelSummary

**Package:** `net.minecraft.world.level.storage`
**Type:** class
**Implements:** `Comparable<LevelSummary>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PLAY_WORLD` | `Component` |  |

## Methods

### LevelSummary

```java
public LevelSummary(LevelSettings p_251217_, LevelVersion p_249179_, String p_250462_, boolean p_252096_, boolean p_251054_, boolean p_252271_, Path p_252001_)
```

**Parameters:**

- `p_251217_` (`LevelSettings`)
- `p_249179_` (`LevelVersion`)
- `p_250462_` (`String`)
- `p_252096_` (`boolean`)
- `p_251054_` (`boolean`)
- `p_252271_` (`boolean`)
- `p_252001_` (`Path`)

**Returns:** `public`

### getLevelId

```java
public String getLevelId()
```

**Returns:** `public String`

### getLevelName

```java
public String getLevelName()
```

**Returns:** `public String`

### getIcon

```java
public Path getIcon()
```

**Returns:** `public Path`

### requiresManualConversion

```java
public boolean requiresManualConversion()
```

**Returns:** `public boolean`

### isExperimental

```java
public boolean isExperimental()
```

**Returns:** `public boolean`

### getLastPlayed

```java
public long getLastPlayed()
```

**Returns:** `public long`

### compareTo

```java
public int compareTo(LevelSummary p_78360_)
```

**Parameters:**

- `p_78360_` (`LevelSummary`)

**Returns:** `public int`

### getSettings

```java
public LevelSettings getSettings()
```

**Returns:** `public LevelSettings`

### getGameMode

```java
public GameType getGameMode()
```

**Returns:** `public GameType`

### isHardcore

```java
public boolean isHardcore()
```

**Returns:** `public boolean`

### hasCommands

```java
public boolean hasCommands()
```

**Returns:** `public boolean`

### getWorldVersionName

```java
public MutableComponent getWorldVersionName()
```

**Returns:** `public MutableComponent`

### levelVersion

```java
public LevelVersion levelVersion()
```

**Returns:** `public LevelVersion`

### shouldBackup

```java
public boolean shouldBackup()
```

**Returns:** `public boolean`

### isDowngrade

```java
public boolean isDowngrade()
```

**Returns:** `public boolean`

### backupStatus

```java
public LevelSummary.BackupStatus backupStatus()
```

**Returns:** `public LevelSummary.BackupStatus`

### isLocked

```java
public boolean isLocked()
```

**Returns:** `public boolean`

### isDisabled

```java
public boolean isDisabled()
```

**Returns:** `public boolean`

### isCompatible

```java
public boolean isCompatible()
```

**Returns:** `public boolean`

### getInfo

```java
public Component getInfo()
```

**Returns:** `public Component`

### createInfo

```java
private Component createInfo()
```

**Returns:** `private Component`

### primaryActionMessage

```java
public Component primaryActionMessage()
```

**Returns:** `public Component`

### primaryActionActive

```java
public boolean primaryActionActive()
```

**Returns:** `public boolean`

### canUpload

```java
public boolean canUpload()
```

**Returns:** `public boolean`

### canEdit

```java
public boolean canEdit()
```

**Returns:** `public boolean`

### canRecreate

```java
public boolean canRecreate()
```

**Returns:** `public boolean`

### canDelete

```java
public boolean canDelete()
```

**Returns:** `public boolean`

### UPGRADE_TO_SNAPSHOT

```java
, UPGRADE_TO_SNAPSHOT()
```

**Returns:** `,`

### BackupStatus

```java
private BackupStatus(boolean p_164928_, boolean p_164929_, String p_164930_)
```

**Parameters:**

- `p_164928_` (`boolean`)
- `p_164929_` (`boolean`)
- `p_164930_` (`String`)

**Returns:** `private`

### shouldBackup

```java
public boolean shouldBackup()
```

**Returns:** `public boolean`

### isSevere

```java
public boolean isSevere()
```

**Returns:** `public boolean`

### getTranslationKey

```java
public String getTranslationKey()
```

**Returns:** `public String`

### CorruptedLevelSummary

```java
public CorruptedLevelSummary(String p_307261_, Path p_307409_, long p_307353_)
```

**Parameters:**

- `p_307261_` (`String`)
- `p_307409_` (`Path`)
- `p_307353_` (`long`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getLevelName

```java
public String getLevelName()
```

**Returns:** `String`

### getInfo

```java
public Component getInfo()
```

**Returns:** `Component`

### getLastPlayed

```java
public long getLastPlayed()
```

**Returns:** `long`

### isDisabled

```java
public boolean isDisabled()
```

**Returns:** `boolean`

### primaryActionMessage

```java
public Component primaryActionMessage()
```

**Returns:** `Component`

### primaryActionActive

```java
public boolean primaryActionActive()
```

**Returns:** `boolean`

### canUpload

```java
public boolean canUpload()
```

**Returns:** `boolean`

### canEdit

```java
public boolean canEdit()
```

**Returns:** `boolean`

### canRecreate

```java
public boolean canRecreate()
```

**Returns:** `boolean`

### SymlinkLevelSummary

```java
public SymlinkLevelSummary(String p_289942_, Path p_289953_)
```

**Parameters:**

- `p_289942_` (`String`)
- `p_289953_` (`Path`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getLevelName

```java
public String getLevelName()
```

**Returns:** `String`

### getInfo

```java
public Component getInfo()
```

**Returns:** `Component`

### getLastPlayed

```java
public long getLastPlayed()
```

**Returns:** `long`

### isDisabled

```java
public boolean isDisabled()
```

**Returns:** `boolean`

### primaryActionMessage

```java
public Component primaryActionMessage()
```

**Returns:** `Component`

### primaryActionActive

```java
public boolean primaryActionActive()
```

**Returns:** `boolean`

### canUpload

```java
public boolean canUpload()
```

**Returns:** `boolean`

### canEdit

```java
public boolean canEdit()
```

**Returns:** `boolean`

### canRecreate

```java
public boolean canRecreate()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BackupStatus` | enum |  |
| `CorruptedLevelSummary` | class |  |
| `SymlinkLevelSummary` | class |  |
