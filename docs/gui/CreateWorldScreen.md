# CreateWorldScreen

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TAB_HEADER_BACKGROUND` | `ResourceLocation` |  |

## Methods

### openFresh

```java
public static void openFresh(Minecraft p_232897_, Screen p_232898_)
```

**Parameters:**

- `p_232897_` (`Minecraft`)
- `p_232898_` (`Screen`)

**Returns:** `public static void`

### queueLoadScreen

```java
 queueLoadScreen()
```

**Returns:** ``

### createFromExisting

```java
public static CreateWorldScreen createFromExisting(Minecraft p_276017_, Screen p_276029_, LevelSettings p_276055_, WorldCreationContext p_276028_, Path p_276040_)
```

**Parameters:**

- `p_276017_` (`Minecraft`)
- `p_276029_` (`Screen`)
- `p_276055_` (`LevelSettings`)
- `p_276028_` (`WorldCreationContext`)
- `p_276040_` (`Path`)

**Returns:** `public static CreateWorldScreen`

### CreateWorldScreen

```java
private CreateWorldScreen(Minecraft p_276053_, Screen p_276049_, WorldCreationContext p_276047_, Optional<ResourceKey<WorldPreset>> p_276013_, OptionalLong p_276031_)
```

**Parameters:**

- `p_276053_` (`Minecraft`)
- `p_276049_` (`Screen`)
- `p_276047_` (`WorldCreationContext`)
- `p_276013_` (`Optional<ResourceKey<WorldPreset>>`)
- `p_276031_` (`OptionalLong`)

**Returns:** `private`

### getUiState

```java
public WorldCreationUiState getUiState()
```

**Returns:** `public WorldCreationUiState`

### init

```java
protected void init()
```

### setInitialFocus

```java
protected void setInitialFocus()
```

### repositionElements

```java
public void repositionElements()
```

### queueLoadScreen

```java
private static void queueLoadScreen(Minecraft p_232900_, Component p_232901_)
```

**Parameters:**

- `p_232900_` (`Minecraft`)
- `p_232901_` (`Component`)

**Returns:** `private static void`

### onCreate

```java
private void onCreate()
```

**Returns:** `private void`

### createNewWorld

```java
private void createNewWorld(PrimaryLevelData.SpecialWorldProperty p_250577_, LayeredRegistryAccess<RegistryLayer> p_249152_, Lifecycle p_249994_)
```

**Parameters:**

- `p_250577_` (`PrimaryLevelData.SpecialWorldProperty`)
- `p_249152_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_249994_` (`Lifecycle`)

**Returns:** `private void`

### queueLoadScreen

```java
 queueLoadScreen()
```

**Returns:** ``

### createLevelSettings

```java
private LevelSettings createLevelSettings(boolean p_205448_)
```

**Parameters:**

- `p_205448_` (`boolean`)

**Returns:** `private LevelSettings`

### LevelSettings

```java
return new LevelSettings()
```

**Returns:** `return new`

### keyPressed

```java
public boolean keyPressed(int p_100875_, int p_100876_, int p_100877_)
```

**Parameters:**

- `p_100875_` (`int`)
- `p_100876_` (`int`)
- `p_100877_` (`int`)

**Returns:** `boolean`

### onClose

```java
public void onClose()
```

### popScreen

```java
public void popScreen()
```

**Returns:** `public void`

### render

```java
public void render(GuiGraphics p_282137_, int p_283640_, int p_281243_, float p_282743_)
```

**Parameters:**

- `p_282137_` (`GuiGraphics`)
- `p_283640_` (`int`)
- `p_281243_` (`int`)
- `p_282743_` (`float`)

### renderMenuBackground

```java
protected void renderMenuBackground(GuiGraphics p_331389_)
```

**Parameters:**

- `p_331389_` (`GuiGraphics`)

### addWidget

```java
protected <T extends GuiEventListener & NarratableEntry> T addWidget(T p_100948_)
```

**Parameters:**

- `p_100948_` (`T`)

**Returns:** `T`

### addRenderableWidget

```java
protected <T extends GuiEventListener & Renderable & NarratableEntry> T addRenderableWidget(T p_170199_)
```

**Parameters:**

- `p_170199_` (`T`)

**Returns:** `T`

### openExperimentsScreen

```java
void openExperimentsScreen(WorldDataConfiguration p_270214_)
```

**Parameters:**

- `p_270214_` (`WorldDataConfiguration`)

### openDataPackSelectionScreen

```java
void openDataPackSelectionScreen(WorldDataConfiguration p_268186_)
```

**Parameters:**

- `p_268186_` (`WorldDataConfiguration`)

### tryApplyNewDataPacks

```java
private void tryApplyNewDataPacks(PackRepository p_270299_, boolean p_270896_, Consumer<WorldDataConfiguration> p_270760_)
```

**Parameters:**

- `p_270299_` (`PackRepository`)
- `p_270896_` (`boolean`)
- `p_270760_` (`Consumer<WorldDataConfiguration>`)

**Returns:** `private void`

### applyNewPackConfig

```java
private void applyNewPackConfig(PackRepository p_270272_, WorldDataConfiguration p_270573_, Consumer<WorldDataConfiguration> p_270552_)
```

**Parameters:**

- `p_270272_` (`PackRepository`)
- `p_270573_` (`WorldDataConfiguration`)
- `p_270552_` (`Consumer<WorldDataConfiguration>`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Needs at least one world preset to continue")
```

**Parameters:**

- `continue"` (`"Needs at least one world preset to`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Needs at least one biome continue")
```

**Parameters:**

- `continue"` (`"Needs at least one biome`)

**Returns:** `throw new`

### createDefaultLoadConfig

```java
private static WorldLoader.InitConfig createDefaultLoadConfig(PackRepository p_251829_, WorldDataConfiguration p_251555_)
```

**Parameters:**

- `p_251829_` (`PackRepository`)
- `p_251555_` (`WorldDataConfiguration`)

**Returns:** `private static WorldLoader.InitConfig`

### removeTempDataPackDir

```java
private void removeTempDataPackDir()
```

**Returns:** `private void`

### copyBetweenDirs

```java
private static void copyBetweenDirs(Path p_100913_, Path p_100914_, Path p_100915_)
```

**Parameters:**

- `p_100913_` (`Path`)
- `p_100914_` (`Path`)
- `p_100915_` (`Path`)

**Returns:** `private static void`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### createNewWorldDirectory

```java
private Optional<LevelStorageSource.LevelStorageAccess> createNewWorldDirectory()
```

**Returns:** `private Optional<LevelStorageSource.LevelStorageAccess>`

### createTempDataPackDirFromExistingWorld

```java
public static Path createTempDataPackDirFromExistingWorld(Path p_100907_, Minecraft p_100908_)
```

**Parameters:**

- `p_100907_` (`Path`)
- `p_100908_` (`Minecraft`)

**Returns:** `Path`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### copyBetweenDirs

```java
 copyBetweenDirs()
```

**Returns:** ``

### DataPackReloadCookie

```java
static record DataPackReloadCookie(WorldGenSettings worldGenSettings, WorldDataConfiguration dataConfiguration)
```

**Parameters:**

- `worldGenSettings` (`WorldGenSettings`)
- `dataConfiguration` (`WorldDataConfiguration`)

**Returns:** `record`

### GameTab

```java
 GameTab()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### MoreTab

```java
 MoreTab()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### openGameRulesScreen

```java
private void openGameRulesScreen()
```

**Returns:** `private void`

### WorldTab

```java
 WorldTab()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### openPresetEditor

```java
private void openPresetEditor()
```

**Returns:** `private void`

### createWorldTypeValueSupplier

```java
private CycleButton.ValueListSupplier<WorldCreationUiState.WorldTypeEntry> createWorldTypeValueSupplier()
```

**Returns:** `private CycleButton.ValueListSupplier<WorldCreationUiState.WorldTypeEntry>`

### getSelectedList

```java
public List<WorldCreationUiState.WorldTypeEntry> getSelectedList()
```

**Returns:** `List<WorldCreationUiState.WorldTypeEntry>`

### getDefaultList

```java
public List<WorldCreationUiState.WorldTypeEntry> getDefaultList()
```

**Returns:** `List<WorldCreationUiState.WorldTypeEntry>`

### createTypeButtonNarration

```java
private static MutableComponent createTypeButtonNarration(CycleButton<WorldCreationUiState.WorldTypeEntry> p_268292_)
```

**Parameters:**

- `p_268292_` (`CycleButton<WorldCreationUiState.WorldTypeEntry>`)

**Returns:** `private static MutableComponent`
