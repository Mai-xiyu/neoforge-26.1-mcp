# StatsScreen

**Package:** `net.minecraft.client.gui.screens.achievement`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `lastScreen` | `Screen` |  |

## Methods

### StatsScreen

```java
public StatsScreen(Screen p_96906_, StatsCounter p_96907_)
```

**Parameters:**

- `p_96906_` (`Screen`)
- `p_96907_` (`StatsCounter`)

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

### initLists

```java
public void initLists()
```

**Returns:** `public void`

### initButtons

```java
public void initButtons()
```

**Returns:** `public void`

### repositionElements

```java
protected void repositionElements()
```

### onClose

```java
public void onClose()
```

### onStatsUpdated

```java
public void onStatsUpdated()
```

**Returns:** `public void`

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### setActiveList

```java
public void setActiveList(ObjectSelectionList<?> p_96925_)
```

**Parameters:**

- `p_96925_` (`ObjectSelectionList<?>`)

**Returns:** `public void`

### getTranslationKey

```java
static String getTranslationKey(Stat<ResourceLocation> p_96947_)
```

**Parameters:**

- `p_96947_` (`Stat<ResourceLocation>`)

**Returns:** `static String`

### GeneralStatisticsList

```java
public GeneralStatisticsList(Minecraft p_96995_)
```

**Parameters:**

- `p_96995_` (`Minecraft`)

**Returns:** `public`

### super

```java
 super(StatsScreen.this.height - 33 - 58)
```

**Parameters:**

- `58` (`StatsScreen.this.height - 33 -`)

**Returns:** ``

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### Entry

```java
 Entry(Stat<ResourceLocation> p_97005_)
```

**Parameters:**

- `p_97005_` (`Stat<ResourceLocation>`)

**Returns:** ``

### getValueText

```java
private String getValueText()
```

**Returns:** `private String`

### render

```java
public void render(GuiGraphics p_283043_, int p_97012_, int p_97013_, int p_97014_, int p_97015_, int p_97016_, int p_97017_, int p_97018_, boolean p_97019_, float p_97020_)
```

**Parameters:**

- `p_283043_` (`GuiGraphics`)
- `p_97012_` (`int`)
- `p_97013_` (`int`)
- `p_97014_` (`int`)
- `p_97015_` (`int`)
- `p_97016_` (`int`)
- `p_97017_` (`int`)
- `p_97018_` (`int`)
- `p_97019_` (`boolean`)
- `p_97020_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### ItemStatisticsList

```java
public ItemStatisticsList(Minecraft p_97032_)
```

**Parameters:**

- `p_97032_` (`Minecraft`)

**Returns:** `public`

### super

```java
 super(StatsScreen.this.height - 33 - 58)
```

**Parameters:**

- `58` (`StatsScreen.this.height - 33 -`)

**Returns:** ``

### getColumnX

```java
int getColumnX(int p_331965_)
```

**Parameters:**

- `p_331965_` (`int`)

**Returns:** `int`

### renderHeader

```java
protected void renderHeader(GuiGraphics p_282214_, int p_97050_, int p_97051_)
```

**Parameters:**

- `p_282214_` (`GuiGraphics`)
- `p_97050_` (`int`)
- `p_97051_` (`int`)

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### clickedHeader

```java
protected boolean clickedHeader(int p_97036_, int p_97037_)
```

**Parameters:**

- `p_97036_` (`int`)
- `p_97037_` (`int`)

**Returns:** `boolean`

### getColumn

```java
private StatType<?> getColumn(int p_97034_)
```

**Parameters:**

- `p_97034_` (`int`)

**Returns:** `private StatType<?>`

### getColumnIndex

```java
private int getColumnIndex(StatType<?> p_97059_)
```

**Parameters:**

- `p_97059_` (`StatType<?>`)

**Returns:** `private int`

### renderDecorations

```java
protected void renderDecorations(GuiGraphics p_283203_, int p_97046_, int p_97047_)
```

**Parameters:**

- `p_283203_` (`GuiGraphics`)
- `p_97046_` (`int`)
- `p_97047_` (`int`)

### sortByColumn

```java
protected void sortByColumn(StatType<?> p_97039_)
```

**Parameters:**

- `p_97039_` (`StatType<?>`)

**Returns:** `protected void`

### ItemRow

```java
 ItemRow(Item p_169517_)
```

**Parameters:**

- `p_169517_` (`Item`)

**Returns:** ``

### getItem

```java
public Item getItem()
```

**Returns:** `public Item`

### render

```java
public void render(GuiGraphics p_283614_, int p_97082_, int p_97083_, int p_97084_, int p_97085_, int p_97086_, int p_97087_, int p_97088_, boolean p_97089_, float p_97090_)
```

**Parameters:**

- `p_283614_` (`GuiGraphics`)
- `p_97082_` (`int`)
- `p_97083_` (`int`)
- `p_97084_` (`int`)
- `p_97085_` (`int`)
- `p_97086_` (`int`)
- `p_97087_` (`int`)
- `p_97088_` (`int`)
- `p_97089_` (`boolean`)
- `p_97090_` (`float`)

### renderStat

```java
protected void renderStat(GuiGraphics p_282544_, Stat<?> p_97093_, int p_97094_, int p_97095_, boolean p_97096_)
```

**Parameters:**

- `p_282544_` (`GuiGraphics`)
- `p_97093_` (`Stat<?>`)
- `p_97094_` (`int`)
- `p_97095_` (`int`)
- `p_97096_` (`boolean`)

**Returns:** `protected void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### compare

```java
public int compare(StatsScreen.ItemStatisticsList.ItemRow p_169524_, StatsScreen.ItemStatisticsList.ItemRow p_169525_)
```

**Parameters:**

- `p_169524_` (`StatsScreen.ItemStatisticsList.ItemRow`)
- `p_169525_` (`StatsScreen.ItemStatisticsList.ItemRow`)

**Returns:** `public int`

### MobsStatisticsList

```java
public MobsStatisticsList(Minecraft p_97100_)
```

**Parameters:**

- `p_97100_` (`Minecraft`)

**Returns:** `public`

### super

```java
 super(StatsScreen.this.height - 33 - 58, 9 * 4)
```

**Parameters:**

- `58` (`StatsScreen.this.height - 33 -`)
- `4` (`9 *`)

**Returns:** ``

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### MobRow

```java
public MobRow(EntityType<?> p_97112_)
```

**Parameters:**

- `p_97112_` (`EntityType<?>`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_283265_, int p_97115_, int p_97116_, int p_97117_, int p_97118_, int p_97119_, int p_97120_, int p_97121_, boolean p_97122_, float p_97123_)
```

**Parameters:**

- `p_283265_` (`GuiGraphics`)
- `p_97115_` (`int`)
- `p_97116_` (`int`)
- `p_97117_` (`int`)
- `p_97118_` (`int`)
- `p_97119_` (`int`)
- `p_97120_` (`int`)
- `p_97121_` (`int`)
- `p_97122_` (`boolean`)
- `p_97123_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`
