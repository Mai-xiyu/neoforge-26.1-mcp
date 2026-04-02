# ChatSelectionScreen

**Package:** `net.minecraft.client.gui.screens.reporting`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChatSelectionScreen

```java
public ChatSelectionScreen(Screen p_239090_, ReportingContext p_239091_, ChatReport.Builder p_299898_, Consumer<ChatReport.Builder> p_239093_)
```

**Parameters:**

- `p_239090_` (`Screen`)
- `p_239091_` (`ReportingContext`)
- `p_299898_` (`ChatReport.Builder`)
- `p_239093_` (`Consumer<ChatReport.Builder>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### canReport

```java
private boolean canReport(LoggedChatMessage p_242240_)
```

**Parameters:**

- `p_242240_` (`LoggedChatMessage`)

**Returns:** `private boolean`

### extendLog

```java
private void extendLog()
```

**Returns:** `private void`

### onReachedScrollTop

```java
void onReachedScrollTop()
```

### updateConfirmSelectedButton

```java
void updateConfirmSelectedButton()
```

### render

```java
public void render(GuiGraphics p_282899_, int p_239287_, int p_239288_, float p_239289_)
```

**Parameters:**

- `p_282899_` (`GuiGraphics`)
- `p_239287_` (`int`)
- `p_239288_` (`int`)
- `p_239289_` (`float`)

### onClose

```java
public void onClose()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### ChatSelectionList

```java
public ChatSelectionList(Minecraft p_239060_, int p_239061_)
```

**Parameters:**

- `p_239060_` (`Minecraft`)
- `p_239061_` (`int`)

**Returns:** `public`

### super

```java
 super(ChatSelectionScreen.this.height - p_239061_ - 80)
```

**Parameters:**

- `80` (`ChatSelectionScreen.this.height - p_239061_ -`)

**Returns:** ``

### setScrollAmount

```java
public void setScrollAmount(double p_239021_)
```

**Parameters:**

- `p_239021_` (`double`)

### acceptMessage

```java
public void acceptMessage(int p_242846_, LoggedChatMessage.Player p_242909_)
```

**Parameters:**

- `p_242846_` (`int`)
- `p_242909_` (`LoggedChatMessage.Player`)

### updateHeading

```java
private void updateHeading(LoggedChatMessage.Player p_242229_, boolean p_240019_)
```

**Parameters:**

- `p_242229_` (`LoggedChatMessage.Player`)
- `p_240019_` (`boolean`)

**Returns:** `private void`

### acceptDivider

```java
public void acceptDivider(Component p_239876_)
```

**Parameters:**

- `p_239876_` (`Component`)

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### getMaxVisibleEntries

```java
public int getMaxVisibleEntries()
```

**Returns:** `public int`

### renderItem

```java
protected void renderItem(GuiGraphics p_281532_, int p_239775_, int p_239776_, float p_239777_, int p_239778_, int p_239779_, int p_239780_, int p_239781_, int p_239782_)
```

**Parameters:**

- `p_281532_` (`GuiGraphics`)
- `p_239775_` (`int`)
- `p_239776_` (`int`)
- `p_239777_` (`float`)
- `p_239778_` (`int`)
- `p_239779_` (`int`)
- `p_239780_` (`int`)
- `p_239781_` (`int`)
- `p_239782_` (`int`)

### shouldHighlightEntry

```java
private boolean shouldHighlightEntry(ChatSelectionScreen.ChatSelectionList.Entry p_240327_)
```

**Parameters:**

- `p_240327_` (`ChatSelectionScreen.ChatSelectionList.Entry`)

**Returns:** `private boolean`

### nextEntry

```java
protected ChatSelectionScreen.ChatSelectionList.Entry nextEntry(ScreenDirection p_265203_)
```

**Parameters:**

- `p_265203_` (`ScreenDirection`)

**Returns:** `ChatSelectionScreen.ChatSelectionList.Entry`

### setSelected

```java
public void setSelected(ChatSelectionScreen.ChatSelectionList.Entry p_265249_)
```

**Parameters:**

- `p_265249_` (`ChatSelectionScreen.ChatSelectionList.Entry`)

**Returns:** `public void`

### keyPressed

```java
public boolean keyPressed(int p_239322_, int p_239323_, int p_239324_)
```

**Parameters:**

- `p_239322_` (`int`)
- `p_239323_` (`int`)
- `p_239324_` (`int`)

**Returns:** `boolean`

### getFooterTop

```java
public int getFooterTop()
```

**Returns:** `public int`

### DividerEntry

```java
public DividerEntry(Component p_239672_)
```

**Parameters:**

- `p_239672_` (`Component`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_283635_, int p_239815_, int p_239816_, int p_239817_, int p_239818_, int p_239819_, int p_239820_, int p_239821_, boolean p_239822_, float p_239823_)
```

**Parameters:**

- `p_283635_` (`GuiGraphics`)
- `p_239815_` (`int`)
- `p_239816_` (`int`)
- `p_239817_` (`int`)
- `p_239818_` (`int`)
- `p_239819_` (`int`)
- `p_239820_` (`int`)
- `p_239821_` (`int`)
- `p_239822_` (`boolean`)
- `p_239823_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### isSelected

```java
public boolean isSelected()
```

**Returns:** `public boolean`

### canSelect

```java
public boolean canSelect()
```

**Returns:** `public boolean`

### canReport

```java
public boolean canReport()
```

**Returns:** `public boolean`

### Heading

```java
static record Heading(UUID sender, ChatSelectionScreen.ChatSelectionList.Entry entry)
```

**Parameters:**

- `sender` (`UUID`)
- `entry` (`ChatSelectionScreen.ChatSelectionList.Entry`)

**Returns:** `record`

### canCombine

```java
public boolean canCombine(ChatSelectionScreen.ChatSelectionList.Heading p_239748_)
```

**Parameters:**

- `p_239748_` (`ChatSelectionScreen.ChatSelectionList.Heading`)

**Returns:** `public boolean`

### MessageEntry

```java
public MessageEntry(int p_240650_, Component p_240525_, Component p_240539_, GuiMessageTag p_240551_, boolean p_240596_, boolean p_240615_)
```

**Parameters:**

- `p_240650_` (`int`)
- `p_240525_` (`Component`)
- `p_240539_` (`Component`)
- `p_240551_` (`GuiMessageTag`)
- `p_240596_` (`boolean`)
- `p_240615_` (`boolean`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_281361_, int p_239596_, int p_239597_, int p_239598_, int p_239599_, int p_239600_, int p_239601_, int p_239602_, boolean p_239603_, float p_239604_)
```

**Parameters:**

- `p_281361_` (`GuiGraphics`)
- `p_239596_` (`int`)
- `p_239597_` (`int`)
- `p_239598_` (`int`)
- `p_239599_` (`int`)
- `p_239600_` (`int`)
- `p_239601_` (`int`)
- `p_239602_` (`int`)
- `p_239603_` (`boolean`)
- `p_239604_` (`float`)

### renderTag

```java
private void renderTag(GuiGraphics p_281776_, int p_240566_, int p_240565_, int p_240581_, int p_240614_, int p_240612_)
```

**Parameters:**

- `p_281776_` (`GuiGraphics`)
- `p_240566_` (`int`)
- `p_240565_` (`int`)
- `p_240581_` (`int`)
- `p_240614_` (`int`)
- `p_240612_` (`int`)

**Returns:** `private void`

### renderSelectedCheckmark

```java
private void renderSelectedCheckmark(GuiGraphics p_281342_, int p_281492_, int p_283046_, int p_283458_)
```

**Parameters:**

- `p_281342_` (`GuiGraphics`)
- `p_281492_` (`int`)
- `p_283046_` (`int`)
- `p_283458_` (`int`)

**Returns:** `private void`

### getMaximumTextWidth

```java
private int getMaximumTextWidth()
```

**Returns:** `private int`

### getTextIndent

```java
private int getTextIndent()
```

**Returns:** `private int`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### mouseClicked

```java
public boolean mouseClicked(double p_239729_, double p_239730_, int p_239731_)
```

**Parameters:**

- `p_239729_` (`double`)
- `p_239730_` (`double`)
- `p_239731_` (`int`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_239368_, int p_239369_, int p_239370_)
```

**Parameters:**

- `p_239368_` (`int`)
- `p_239369_` (`int`)
- `p_239370_` (`int`)

**Returns:** `boolean`

### isSelected

```java
public boolean isSelected()
```

**Returns:** `boolean`

### canSelect

```java
public boolean canSelect()
```

**Returns:** `boolean`

### canReport

```java
public boolean canReport()
```

**Returns:** `boolean`

### toggleReport

```java
private boolean toggleReport()
```

**Returns:** `private boolean`

### MessageHeadingEntry

```java
public MessageHeadingEntry(GameProfile p_240080_, Component p_240081_, boolean p_240082_)
```

**Parameters:**

- `p_240080_` (`GameProfile`)
- `p_240081_` (`Component`)
- `p_240082_` (`boolean`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_281320_, int p_283177_, int p_282422_, int p_282017_, int p_282555_, int p_283255_, int p_283682_, int p_281582_, boolean p_282259_, float p_283561_)
```

**Parameters:**

- `p_281320_` (`GuiGraphics`)
- `p_283177_` (`int`)
- `p_282422_` (`int`)
- `p_282017_` (`int`)
- `p_282555_` (`int`)
- `p_283255_` (`int`)
- `p_283682_` (`int`)
- `p_281582_` (`int`)
- `p_282259_` (`boolean`)
- `p_283561_` (`float`)

### render

```java
public void render(GuiGraphics p_282007_, int p_240110_, int p_240111_, int p_240112_, int p_240113_, int p_240114_, int p_240115_, int p_240116_, boolean p_240117_, float p_240118_)
```

**Parameters:**

- `p_282007_` (`GuiGraphics`)
- `p_240110_` (`int`)
- `p_240111_` (`int`)
- `p_240112_` (`int`)
- `p_240113_` (`int`)
- `p_240114_` (`int`)
- `p_240115_` (`int`)
- `p_240116_` (`int`)
- `p_240117_` (`boolean`)
- `p_240118_` (`float`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ChatSelectionList` | class |  |
| `DividerEntry` | class |  |
| `Entry` | class |  |
| `MessageEntry` | class |  |
| `MessageHeadingEntry` | class |  |
| `PaddingEntry` | class |  |
