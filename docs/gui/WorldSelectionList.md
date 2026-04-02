# WorldSelectionList

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** class
**Extends:** `ObjectSelectionList<WorldSelectionList.Entry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DATE_FORMAT` | `DateTimeFormatter` |  |

## Methods

### WorldSelectionList

```java
public WorldSelectionList(SelectWorldScreen p_239540_, Minecraft p_239541_, int p_239542_, int p_239543_, int p_239544_, int p_239545_, String p_239547_, WorldSelectionList p_239548_)
```

**Parameters:**

- `p_239540_` (`SelectWorldScreen`)
- `p_239541_` (`Minecraft`)
- `p_239542_` (`int`)
- `p_239543_` (`int`)
- `p_239544_` (`int`)
- `p_239545_` (`int`)
- `p_239547_` (`String`)
- `p_239548_` (`WorldSelectionList`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### clearEntries

```java
protected void clearEntries()
```

### reloadWorldList

```java
void reloadWorldList()
```

### keyPressed

```java
public boolean keyPressed(int p_289017_, int p_288966_, int p_289020_)
```

**Parameters:**

- `p_289017_` (`int`)
- `p_288966_` (`int`)
- `p_289020_` (`int`)

**Returns:** `boolean`

### renderWidget

```java
public void renderWidget(GuiGraphics p_313849_, int p_313762_, int p_313812_, float p_313854_)
```

**Parameters:**

- `p_313849_` (`GuiGraphics`)
- `p_313762_` (`int`)
- `p_313812_` (`int`)
- `p_313854_` (`float`)

### handleNewLevels

```java
private void handleNewLevels(List<LevelSummary> p_239665_)
```

**Parameters:**

- `p_239665_` (`List<LevelSummary>`)

**Returns:** `private void`

### updateFilter

```java
public void updateFilter(String p_239901_)
```

**Parameters:**

- `p_239901_` (`String`)

**Returns:** `public void`

### loadLevels

```java
private CompletableFuture<List<LevelSummary>> loadLevels()
```

**Returns:** `private CompletableFuture<List<LevelSummary>>`

### fillLevels

```java
private void fillLevels(String p_233199_, List<LevelSummary> p_233200_)
```

**Parameters:**

- `p_233199_` (`String`)
- `p_233200_` (`List<LevelSummary>`)

**Returns:** `private void`

### filterAccepts

```java
private boolean filterAccepts(String p_233196_, LevelSummary p_233197_)
```

**Parameters:**

- `p_233196_` (`String`)
- `p_233197_` (`LevelSummary`)

**Returns:** `private boolean`

### fillLoadingLevels

```java
private void fillLoadingLevels()
```

**Returns:** `private void`

### notifyListUpdated

```java
private void notifyListUpdated()
```

**Returns:** `private void`

### handleLevelLoadFailure

```java
private void handleLevelLoadFailure(Component p_233212_)
```

**Parameters:**

- `p_233212_` (`Component`)

**Returns:** `private void`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### setSelected

```java
public void setSelected(WorldSelectionList.Entry p_233190_)
```

**Parameters:**

- `p_233190_` (`WorldSelectionList.Entry`)

**Returns:** `public void`

### getSelectedOpt

```java
public Optional<WorldSelectionList.WorldListEntry> getSelectedOpt()
```

**Returns:** `public Optional<WorldSelectionList.WorldListEntry>`

### getScreen

```java
public SelectWorldScreen getScreen()
```

**Returns:** `public SelectWorldScreen`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_313871_)
```

**Parameters:**

- `p_313871_` (`NarrationElementOutput`)

### close

```java
public void close()
```

### LoadingHeader

```java
public LoadingHeader(Minecraft p_233222_)
```

**Parameters:**

- `p_233222_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_282319_, int p_283207_, int p_281352_, int p_283332_, int p_282400_, int p_282912_, int p_282760_, int p_281344_, boolean p_283655_, float p_283696_)
```

**Parameters:**

- `p_282319_` (`GuiGraphics`)
- `p_283207_` (`int`)
- `p_281352_` (`int`)
- `p_283332_` (`int`)
- `p_282400_` (`int`)
- `p_282912_` (`int`)
- `p_282760_` (`int`)
- `p_281344_` (`int`)
- `p_283655_` (`boolean`)
- `p_283696_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### WorldListEntry

```java
public WorldListEntry(WorldSelectionList p_101702_, LevelSummary p_101703_)
```

**Parameters:**

- `p_101702_` (`WorldSelectionList`)
- `p_101703_` (`LevelSummary`)

**Returns:** `public`

### validateIconFile

```java
private void validateIconFile()
```

**Returns:** `private void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics p_281612_, int p_281353_, int p_283181_, int p_282820_, int p_282420_, int p_281855_, int p_283204_, int p_283025_, boolean p_283396_, float p_282938_)
```

**Parameters:**

- `p_281612_` (`GuiGraphics`)
- `p_281353_` (`int`)
- `p_283181_` (`int`)
- `p_282820_` (`int`)
- `p_282420_` (`int`)
- `p_281855_` (`int`)
- `p_283204_` (`int`)
- `p_283025_` (`int`)
- `p_283396_` (`boolean`)
- `p_282938_` (`float`)

### renderExperimentalWarning

```java
 renderExperimentalWarning()
```

**Returns:** ``

### mouseClicked

```java
public boolean mouseClicked(double p_101706_, double p_101707_, int p_101708_)
```

**Parameters:**

- `p_101706_` (`double`)
- `p_101707_` (`double`)
- `p_101708_` (`int`)

**Returns:** `boolean`

### canJoin

```java
public boolean canJoin()
```

**Returns:** `public boolean`

### joinWorld

```java
public void joinWorld()
```

**Returns:** `public void`

### deleteWorld

```java
public void deleteWorld()
```

**Returns:** `public void`

### doDeleteWorld

```java
public void doDeleteWorld()
```

**Returns:** `public void`

### editWorld

```java
public void editWorld()
```

**Returns:** `public void`

### recreateWorld

```java
public void recreateWorld()
```

**Returns:** `public void`

### queueLoadScreen

```java
private void queueLoadScreen()
```

**Returns:** `private void`

### loadIcon

```java
private void loadIcon()
```

**Returns:** `private void`

### close

```java
public void close()
```

### getLevelName

```java
public String getLevelName()
```

**Returns:** `public String`

### renderExperimentalWarning

```java
Patch in experimental warning icon for worlds in the world selection screen
        private void renderExperimentalWarning(GuiGraphics guiGraphics, int mouseX, int mouseY, int top, int left)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `top` (`int`)
- `left` (`int`)

**Returns:** `Patch in experimental warning icon for worlds in the world selection screen
        private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LoadingHeader` | class |  |
| `WorldListEntry` | class |  |
