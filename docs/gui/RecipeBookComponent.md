# RecipeBookComponent

**Package:** `net.minecraft.client.gui.screens.recipebook`
**Type:** class
**Implements:** `PlaceRecipe<Ingredient>`, `Renderable`, `GuiEventListener`, `NarratableEntry`, `RecipeShownListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RECIPE_BUTTON_SPRITES` | `WidgetSprites` |  |
| `RECIPE_BOOK_LOCATION` | `ResourceLocation` |  |
| `IMAGE_WIDTH` | `int` |  |
| `IMAGE_HEIGHT` | `int` |  |
| `ghostRecipe` | `GhostRecipe` |  |
| `filterButton` | `StateSwitchingButton` |  |
| `menu` | `RecipeBookMenu<?, ?>` |  |
| `minecraft` | `Minecraft` |  |

## Methods

### init

```java
public void init(int p_100310_, int p_100311_, Minecraft p_100312_, boolean p_100313_, RecipeBookMenu<?, ?> p_100314_)
```

**Parameters:**

- `p_100310_` (`int`)
- `p_100311_` (`int`)
- `p_100312_` (`Minecraft`)
- `p_100313_` (`boolean`)
- `p_100314_` (`RecipeBookMenu<?, ?>`)

**Returns:** `public void`

### initVisuals

```java
public void initVisuals()
```

**Returns:** `public void`

### updateFilterButtonTooltip

```java
private void updateFilterButtonTooltip()
```

**Returns:** `private void`

### initFilterButtonTextures

```java
protected void initFilterButtonTextures()
```

**Returns:** `protected void`

### updateScreenPosition

```java
public int updateScreenPosition(int p_181402_, int p_181403_)
```

**Parameters:**

- `p_181402_` (`int`)
- `p_181403_` (`int`)

**Returns:** `public int`

### toggleVisibility

```java
public void toggleVisibility()
```

**Returns:** `public void`

### isVisible

```java
public boolean isVisible()
```

**Returns:** `public boolean`

### isVisibleAccordingToBookData

```java
private boolean isVisibleAccordingToBookData()
```

**Returns:** `private boolean`

### setVisible

```java
protected void setVisible(boolean p_100370_)
```

**Parameters:**

- `p_100370_` (`boolean`)

**Returns:** `protected void`

### slotClicked

```java
public void slotClicked(Slot p_100315_)
```

**Parameters:**

- `p_100315_` (`Slot`)

**Returns:** `public void`

### updateCollections

```java
private void updateCollections(boolean p_100383_)
```

**Parameters:**

- `p_100383_` (`boolean`)

**Returns:** `private void`

### updateTabs

```java
private void updateTabs()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### updateStackedContents

```java
private void updateStackedContents()
```

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_283597_, int p_282668_, int p_283506_, float p_282813_)
```

**Parameters:**

- `p_283597_` (`GuiGraphics`)
- `p_282668_` (`int`)
- `p_283506_` (`int`)
- `p_282813_` (`float`)

### renderTooltip

```java
public void renderTooltip(GuiGraphics p_281740_, int p_281520_, int p_282050_, int p_282836_, int p_282758_)
```

**Parameters:**

- `p_281740_` (`GuiGraphics`)
- `p_281520_` (`int`)
- `p_282050_` (`int`)
- `p_282836_` (`int`)
- `p_282758_` (`int`)

**Returns:** `public void`

### getRecipeFilterName

```java
protected Component getRecipeFilterName()
```

**Returns:** `protected Component`

### renderGhostRecipeTooltip

```java
private void renderGhostRecipeTooltip(GuiGraphics p_282776_, int p_282886_, int p_281571_, int p_282948_, int p_283050_)
```

**Parameters:**

- `p_282776_` (`GuiGraphics`)
- `p_282886_` (`int`)
- `p_281571_` (`int`)
- `p_282948_` (`int`)
- `p_283050_` (`int`)

**Returns:** `private void`

### renderGhostRecipe

```java
public void renderGhostRecipe(GuiGraphics p_283634_, int p_283327_, int p_282027_, boolean p_283495_, float p_283514_)
```

**Parameters:**

- `p_283634_` (`GuiGraphics`)
- `p_283327_` (`int`)
- `p_282027_` (`int`)
- `p_283495_` (`boolean`)
- `p_283514_` (`float`)

**Returns:** `public void`

### mouseClicked

```java
public boolean mouseClicked(double p_100294_, double p_100295_, int p_100296_)
```

**Parameters:**

- `p_100294_` (`double`)
- `p_100295_` (`double`)
- `p_100296_` (`int`)

**Returns:** `boolean`

### toggleFiltering

```java
private boolean toggleFiltering()
```

**Returns:** `private boolean`

### hasClickedOutside

```java
public boolean hasClickedOutside(double p_100298_, double p_100299_, int p_100300_, int p_100301_, int p_100302_, int p_100303_, int p_100304_)
```

**Parameters:**

- `p_100298_` (`double`)
- `p_100299_` (`double`)
- `p_100300_` (`int`)
- `p_100301_` (`int`)
- `p_100302_` (`int`)
- `p_100303_` (`int`)
- `p_100304_` (`int`)

**Returns:** `public boolean`

### keyPressed

```java
public boolean keyPressed(int p_100306_, int p_100307_, int p_100308_)
```

**Parameters:**

- `p_100306_` (`int`)
- `p_100307_` (`int`)
- `p_100308_` (`int`)

**Returns:** `boolean`

### keyReleased

```java
public boolean keyReleased(int p_100356_, int p_100357_, int p_100358_)
```

**Parameters:**

- `p_100356_` (`int`)
- `p_100357_` (`int`)
- `p_100358_` (`int`)

**Returns:** `boolean`

### charTyped

```java
public boolean charTyped(char p_100291_, int p_100292_)
```

**Parameters:**

- `p_100291_` (`char`)
- `p_100292_` (`int`)

**Returns:** `boolean`

### isMouseOver

```java
public boolean isMouseOver(double p_100353_, double p_100354_)
```

**Parameters:**

- `p_100353_` (`double`)
- `p_100354_` (`double`)

**Returns:** `boolean`

### setFocused

```java
public void setFocused(boolean p_265089_)
```

**Parameters:**

- `p_265089_` (`boolean`)

### isFocused

```java
public boolean isFocused()
```

**Returns:** `boolean`

### checkSearchStringUpdate

```java
private void checkSearchStringUpdate()
```

**Returns:** `private void`

### pirateSpeechForThePeople

```java
private void pirateSpeechForThePeople(String p_100336_)
```

**Parameters:**

- `p_100336_` (`String`)

**Returns:** `private void`

### isOffsetNextToMainGUI

```java
private boolean isOffsetNextToMainGUI()
```

**Returns:** `private boolean`

### recipesUpdated

```java
public void recipesUpdated()
```

**Returns:** `public void`

### recipesShown

```java
public void recipesShown(List<RecipeHolder<?>> p_100344_)
```

**Parameters:**

- `p_100344_` (`List<RecipeHolder<?>>`)

### setupGhostRecipe

```java
public void setupGhostRecipe(RecipeHolder<?> p_301197_, List<Slot> p_100317_)
```

**Parameters:**

- `p_301197_` (`RecipeHolder<?>`)
- `p_100317_` (`List<Slot>`)

**Returns:** `public void`

### addItemToSlot

```java
public void addItemToSlot(Ingredient p_345052_, int p_345781_, int p_345753_, int p_345694_, int p_345502_)
```

**Parameters:**

- `p_345052_` (`Ingredient`)
- `p_345781_` (`int`)
- `p_345753_` (`int`)
- `p_345694_` (`int`)
- `p_345502_` (`int`)

**Returns:** `public void`

### sendUpdateSettings

```java
protected void sendUpdateSettings()
```

**Returns:** `protected void`

### narrationPriority

```java
public NarratableEntry.NarrationPriority narrationPriority()
```

**Returns:** `NarratableEntry.NarrationPriority`

### updateNarration

```java
public void updateNarration(NarrationElementOutput p_170046_)
```

**Parameters:**

- `p_170046_` (`NarrationElementOutput`)
