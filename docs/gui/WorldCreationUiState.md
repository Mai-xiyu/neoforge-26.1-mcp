# WorldCreationUiState

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WorldCreationUiState

```java
public WorldCreationUiState(Path p_276024_, WorldCreationContext p_276050_, Optional<ResourceKey<WorldPreset>> p_276022_, OptionalLong p_276014_)
```

**Parameters:**

- `p_276024_` (`Path`)
- `p_276050_` (`WorldCreationContext`)
- `p_276022_` (`Optional<ResourceKey<WorldPreset>>`)
- `p_276014_` (`OptionalLong`)

**Returns:** `public`

### addListener

```java
public void addListener(Consumer<WorldCreationUiState> p_267938_)
```

**Parameters:**

- `p_267938_` (`Consumer<WorldCreationUiState>`)

**Returns:** `public void`

### onChanged

```java
public void onChanged()
```

**Returns:** `public void`

### setName

```java
public void setName(String p_268167_)
```

**Parameters:**

- `p_268167_` (`String`)

**Returns:** `public void`

### findResultFolder

```java
private String findResultFolder(String p_276032_)
```

**Parameters:**

- `p_276032_` (`String`)

**Returns:** `private String`

### RuntimeException

```java
throw new RuntimeException("Could not create save folder")
```

**Parameters:**

- `folder"` (`"Could not create save`)

**Returns:** `throw new`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getTargetFolder

```java
public String getTargetFolder()
```

**Returns:** `public String`

### setGameMode

```java
public void setGameMode(WorldCreationUiState.SelectedGameMode p_268231_)
```

**Parameters:**

- `p_268231_` (`WorldCreationUiState.SelectedGameMode`)

**Returns:** `public void`

### getGameMode

```java
public WorldCreationUiState.SelectedGameMode getGameMode()
```

**Returns:** `public WorldCreationUiState.SelectedGameMode`

### setDifficulty

```java
public void setDifficulty(Difficulty p_268032_)
```

**Parameters:**

- `p_268032_` (`Difficulty`)

**Returns:** `public void`

### getDifficulty

```java
public Difficulty getDifficulty()
```

**Returns:** `public Difficulty`

### isHardcore

```java
public boolean isHardcore()
```

**Returns:** `public boolean`

### setAllowCommands

```java
public void setAllowCommands(boolean p_321586_)
```

**Parameters:**

- `p_321586_` (`boolean`)

**Returns:** `public void`

### isAllowCommands

```java
public boolean isAllowCommands()
```

**Returns:** `public boolean`

### setSeed

```java
public void setSeed(String p_268100_)
```

**Parameters:**

- `p_268100_` (`String`)

**Returns:** `public void`

### getSeed

```java
public String getSeed()
```

**Returns:** `public String`

### setGenerateStructures

```java
public void setGenerateStructures(boolean p_268090_)
```

**Parameters:**

- `p_268090_` (`boolean`)

**Returns:** `public void`

### isGenerateStructures

```java
public boolean isGenerateStructures()
```

**Returns:** `public boolean`

### setBonusChest

```java
public void setBonusChest(boolean p_268236_)
```

**Parameters:**

- `p_268236_` (`boolean`)

**Returns:** `public void`

### isBonusChest

```java
public boolean isBonusChest()
```

**Returns:** `public boolean`

### setSettings

```java
public void setSettings(WorldCreationContext p_268313_)
```

**Parameters:**

- `p_268313_` (`WorldCreationContext`)

**Returns:** `public void`

### getSettings

```java
public WorldCreationContext getSettings()
```

**Returns:** `public WorldCreationContext`

### updateDimensions

```java
public void updateDimensions(WorldCreationContext.DimensionsUpdater p_268314_)
```

**Parameters:**

- `p_268314_` (`WorldCreationContext.DimensionsUpdater`)

**Returns:** `public void`

### tryUpdateDataConfiguration

```java
protected boolean tryUpdateDataConfiguration(WorldDataConfiguration p_268016_)
```

**Parameters:**

- `p_268016_` (`WorldDataConfiguration`)

**Returns:** `protected boolean`

### isDebug

```java
public boolean isDebug()
```

**Returns:** `public boolean`

### setWorldType

```java
public void setWorldType(WorldCreationUiState.WorldTypeEntry p_268117_)
```

**Parameters:**

- `p_268117_` (`WorldCreationUiState.WorldTypeEntry`)

**Returns:** `public void`

### getWorldType

```java
public WorldCreationUiState.WorldTypeEntry getWorldType()
```

**Returns:** `public WorldCreationUiState.WorldTypeEntry`

### getPresetEditor

```java
public PresetEditor getPresetEditor()
```

**Returns:** `PresetEditor`

### getNormalPresetList

```java
public List<WorldCreationUiState.WorldTypeEntry> getNormalPresetList()
```

**Returns:** `public List<WorldCreationUiState.WorldTypeEntry>`

### getAltPresetList

```java
public List<WorldCreationUiState.WorldTypeEntry> getAltPresetList()
```

**Returns:** `public List<WorldCreationUiState.WorldTypeEntry>`

### updatePresetLists

```java
private void updatePresetLists()
```

**Returns:** `private void`

### findPreset

```java
private static Optional<Holder<WorldPreset>> findPreset(WorldCreationContext p_268025_, Optional<ResourceKey<WorldPreset>> p_268184_)
```

**Parameters:**

- `p_268025_` (`WorldCreationContext`)
- `p_268184_` (`Optional<ResourceKey<WorldPreset>>`)

**Returns:** `private static Optional<Holder<WorldPreset>>`

### getNonEmptyList

```java
private static Optional<List<WorldCreationUiState.WorldTypeEntry>> getNonEmptyList(Registry<WorldPreset> p_268296_, TagKey<WorldPreset> p_268097_)
```

**Parameters:**

- `p_268296_` (`Registry<WorldPreset>`)
- `p_268097_` (`TagKey<WorldPreset>`)

**Returns:** `private static Optional<List<WorldCreationUiState.WorldTypeEntry>>`

### setGameRules

```java
public void setGameRules(GameRules p_268203_)
```

**Parameters:**

- `p_268203_` (`GameRules`)

**Returns:** `public void`

### getGameRules

```java
public GameRules getGameRules()
```

**Returns:** `public GameRules`

### DEBUG

```java
, DEBUG()
```

**Returns:** `,`

### SelectedGameMode

```java
private SelectedGameMode(String p_268033_, GameType p_268252_)
```

**Parameters:**

- `p_268033_` (`String`)
- `p_268252_` (`GameType`)

**Returns:** `private`

### getInfo

```java
public Component getInfo()
```

**Returns:** `public Component`

### WorldTypeEntry

```java
public static record WorldTypeEntry(Holder<WorldPreset> preset)
```

**Parameters:**

- `preset` (`Holder<WorldPreset>`)

**Returns:** `record`

### describePreset

```java
public Component describePreset()
```

**Returns:** `public Component`

### isAmplified

```java
public boolean isAmplified()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SelectedGameMode` | enum |  |
| `WorldTypeEntry` | record |  |
