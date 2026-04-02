# BookEditScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BookEditScreen

```java
public BookEditScreen(Player p_98076_, ItemStack p_98077_, InteractionHand p_98078_)
```

**Parameters:**

- `p_98076_` (`Player`)
- `p_98077_` (`ItemStack`)
- `p_98078_` (`InteractionHand`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setClipboard

```java
private void setClipboard(String p_98148_)
```

**Parameters:**

- `p_98148_` (`String`)

**Returns:** `private void`

### getClipboard

```java
private String getClipboard()
```

**Returns:** `private String`

### getNumPages

```java
private int getNumPages()
```

**Returns:** `private int`

### tick

```java
public void tick()
```

### init

```java
protected void init()
```

### pageBack

```java
private void pageBack()
```

**Returns:** `private void`

### pageForward

```java
private void pageForward()
```

**Returns:** `private void`

### updateButtonVisibility

```java
private void updateButtonVisibility()
```

**Returns:** `private void`

### eraseEmptyTrailingPages

```java
private void eraseEmptyTrailingPages()
```

**Returns:** `private void`

### saveChanges

```java
private void saveChanges(boolean p_98161_)
```

**Parameters:**

- `p_98161_` (`boolean`)

**Returns:** `private void`

### updateLocalCopy

```java
private void updateLocalCopy()
```

**Returns:** `private void`

### appendPageToBook

```java
private void appendPageToBook()
```

**Returns:** `private void`

### keyPressed

```java
public boolean keyPressed(int p_98100_, int p_98101_, int p_98102_)
```

**Parameters:**

- `p_98100_` (`int`)
- `p_98101_` (`int`)
- `p_98102_` (`int`)

**Returns:** `boolean`

### charTyped

```java
public boolean charTyped(char p_98085_, int p_98086_)
```

**Parameters:**

- `p_98085_` (`char`)
- `p_98086_` (`int`)

**Returns:** `boolean`

### bookKeyPressed

```java
private boolean bookKeyPressed(int p_98153_, int p_98154_, int p_98155_)
```

**Parameters:**

- `p_98153_` (`int`)
- `p_98154_` (`int`)
- `p_98155_` (`int`)

**Returns:** `private boolean`

### keyUp

```java
private void keyUp()
```

**Returns:** `private void`

### keyDown

```java
private void keyDown()
```

**Returns:** `private void`

### changeLine

```java
private void changeLine(int p_98098_)
```

**Parameters:**

- `p_98098_` (`int`)

**Returns:** `private void`

### keyHome

```java
private void keyHome()
```

**Returns:** `private void`

### keyEnd

```java
private void keyEnd()
```

**Returns:** `private void`

### titleKeyPressed

```java
private boolean titleKeyPressed(int p_98164_, int p_98165_, int p_98166_)
```

**Parameters:**

- `p_98164_` (`int`)
- `p_98165_` (`int`)
- `p_98166_` (`int`)

**Returns:** `private boolean`

### getCurrentPageText

```java
private String getCurrentPageText()
```

**Returns:** `private String`

### setCurrentPageText

```java
private void setCurrentPageText(String p_98159_)
```

**Parameters:**

- `p_98159_` (`String`)

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_281724_, int p_282965_, int p_283294_, float p_281293_)
```

**Parameters:**

- `p_281724_` (`GuiGraphics`)
- `p_282965_` (`int`)
- `p_283294_` (`int`)
- `p_281293_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_294860_, int p_295019_, int p_294307_, float p_295562_)
```

**Parameters:**

- `p_294860_` (`GuiGraphics`)
- `p_295019_` (`int`)
- `p_294307_` (`int`)
- `p_295562_` (`float`)

### renderCursor

```java
private void renderCursor(GuiGraphics p_281833_, BookEditScreen.Pos2i p_282190_, boolean p_282412_)
```

**Parameters:**

- `p_281833_` (`GuiGraphics`)
- `p_282190_` (`BookEditScreen.Pos2i`)
- `p_282412_` (`boolean`)

**Returns:** `private void`

### renderHighlight

```java
private void renderHighlight(GuiGraphics p_282188_, Rect2i[] p_265482_)
```

**Parameters:**

- `p_282188_` (`GuiGraphics`)
- `p_265482_` (`Rect2i[]`)

**Returns:** `private void`

### convertScreenToLocal

```java
private BookEditScreen.Pos2i convertScreenToLocal(BookEditScreen.Pos2i p_98115_)
```

**Parameters:**

- `p_98115_` (`BookEditScreen.Pos2i`)

**Returns:** `private BookEditScreen.Pos2i`

### convertLocalToScreen

```java
private BookEditScreen.Pos2i convertLocalToScreen(BookEditScreen.Pos2i p_98146_)
```

**Parameters:**

- `p_98146_` (`BookEditScreen.Pos2i`)

**Returns:** `private BookEditScreen.Pos2i`

### mouseClicked

```java
public boolean mouseClicked(double p_98088_, double p_98089_, int p_98090_)
```

**Parameters:**

- `p_98088_` (`double`)
- `p_98089_` (`double`)
- `p_98090_` (`int`)

**Returns:** `boolean`

### selectWord

```java
private void selectWord(int p_98142_)
```

**Parameters:**

- `p_98142_` (`int`)

**Returns:** `private void`

### mouseDragged

```java
public boolean mouseDragged(double p_98092_, double p_98093_, int p_98094_, double p_98095_, double p_98096_)
```

**Parameters:**

- `p_98092_` (`double`)
- `p_98093_` (`double`)
- `p_98094_` (`int`)
- `p_98095_` (`double`)
- `p_98096_` (`double`)

**Returns:** `boolean`

### getDisplayCache

```java
private BookEditScreen.DisplayCache getDisplayCache()
```

**Returns:** `private BookEditScreen.DisplayCache`

### clearDisplayCache

```java
private void clearDisplayCache()
```

**Returns:** `private void`

### clearDisplayCacheAfterPageChange

```java
private void clearDisplayCacheAfterPageChange()
```

**Returns:** `private void`

### rebuildDisplayCache

```java
private BookEditScreen.DisplayCache rebuildDisplayCache()
```

**Returns:** `private BookEditScreen.DisplayCache`

### findLineFromPos

```java
static int findLineFromPos(int[] p_98150_, int p_98151_)
```

**Parameters:**

- `p_98150_` (`int[]`)
- `p_98151_` (`int`)

**Returns:** `static int`

### createPartialLineSelection

```java
private Rect2i createPartialLineSelection(String p_98120_, StringSplitter p_98121_, int p_98122_, int p_98123_, int p_98124_, int p_98125_)
```

**Parameters:**

- `p_98120_` (`String`)
- `p_98121_` (`StringSplitter`)
- `p_98122_` (`int`)
- `p_98123_` (`int`)
- `p_98124_` (`int`)
- `p_98125_` (`int`)

**Returns:** `private Rect2i`

### createSelection

```java
private Rect2i createSelection(BookEditScreen.Pos2i p_98117_, BookEditScreen.Pos2i p_98118_)
```

**Parameters:**

- `p_98117_` (`BookEditScreen.Pos2i`)
- `p_98118_` (`BookEditScreen.Pos2i`)

**Returns:** `private Rect2i`

### Rect2i

```java
return new Rect2i(j - i, l - k)
```

**Parameters:**

- `i` (`j -`)
- `k` (`l -`)

**Returns:** `return new`

### DisplayCache

```java
public DisplayCache(String p_98201_, BookEditScreen.Pos2i p_98202_, boolean p_98203_, int[] p_98204_, BookEditScreen.LineInfo[] p_98205_, Rect2i[] p_98206_)
```

**Parameters:**

- `p_98201_` (`String`)
- `p_98202_` (`BookEditScreen.Pos2i`)
- `p_98203_` (`boolean`)
- `p_98204_` (`int[]`)
- `p_98205_` (`BookEditScreen.LineInfo[]`)
- `p_98206_` (`Rect2i[]`)

**Returns:** `public`

### getIndexAtPosition

```java
public int getIndexAtPosition(Font p_98214_, BookEditScreen.Pos2i p_98215_)
```

**Parameters:**

- `p_98214_` (`Font`)
- `p_98215_` (`BookEditScreen.Pos2i`)

**Returns:** `public int`

### changeLine

```java
public int changeLine(int p_98211_, int p_98212_)
```

**Parameters:**

- `p_98211_` (`int`)
- `p_98212_` (`int`)

**Returns:** `public int`

### findLineStart

```java
public int findLineStart(int p_98209_)
```

**Parameters:**

- `p_98209_` (`int`)

**Returns:** `public int`

### findLineEnd

```java
public int findLineEnd(int p_98219_)
```

**Parameters:**

- `p_98219_` (`int`)

**Returns:** `public int`

### LineInfo

```java
public LineInfo(Style p_98232_, String p_98233_, int p_98234_, int p_98235_)
```

**Parameters:**

- `p_98232_` (`Style`)
- `p_98233_` (`String`)
- `p_98234_` (`int`)
- `p_98235_` (`int`)

**Returns:** `public`

### Pos2i

```java
 Pos2i(int p_98249_, int p_98250_)
```

**Parameters:**

- `p_98249_` (`int`)
- `p_98250_` (`int`)

**Returns:** ``
