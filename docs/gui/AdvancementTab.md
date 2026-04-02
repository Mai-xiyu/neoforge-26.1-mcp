# AdvancementTab

**Package:** `net.minecraft.client.gui.screens.advancements`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### AdvancementTab

```java
public AdvancementTab(Minecraft p_97145_, AdvancementsScreen p_97146_, AdvancementTabType p_97147_, int p_97148_, AdvancementNode p_300867_, DisplayInfo p_97150_)
```

**Parameters:**

- `p_97145_` (`Minecraft`)
- `p_97146_` (`AdvancementsScreen`)
- `p_97147_` (`AdvancementTabType`)
- `p_97148_` (`int`)
- `p_300867_` (`AdvancementNode`)
- `p_97150_` (`DisplayInfo`)

**Returns:** `public`

### AdvancementTab

```java
public AdvancementTab(Minecraft mc, AdvancementsScreen screen, AdvancementTabType type, int index, int page, AdvancementNode adv, DisplayInfo info)
```

**Parameters:**

- `mc` (`Minecraft`)
- `screen` (`AdvancementsScreen`)
- `type` (`AdvancementTabType`)
- `index` (`int`)
- `page` (`int`)
- `adv` (`AdvancementNode`)
- `info` (`DisplayInfo`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getPage

```java
public int getPage()
```

**Returns:** `public int`

### getType

```java
public AdvancementTabType getType()
```

**Returns:** `public AdvancementTabType`

### getIndex

```java
public int getIndex()
```

**Returns:** `public int`

### getRootNode

```java
public AdvancementNode getRootNode()
```

**Returns:** `public AdvancementNode`

### getTitle

```java
public Component getTitle()
```

**Returns:** `public Component`

### getDisplay

```java
public DisplayInfo getDisplay()
```

**Returns:** `public DisplayInfo`

### drawTab

```java
public void drawTab(GuiGraphics p_282671_, int p_282721_, int p_282964_, boolean p_283052_)
```

**Parameters:**

- `p_282671_` (`GuiGraphics`)
- `p_282721_` (`int`)
- `p_282964_` (`int`)
- `p_283052_` (`boolean`)

**Returns:** `public void`

### drawIcon

```java
public void drawIcon(GuiGraphics p_282895_, int p_283419_, int p_283293_)
```

**Parameters:**

- `p_282895_` (`GuiGraphics`)
- `p_283419_` (`int`)
- `p_283293_` (`int`)

**Returns:** `public void`

### drawContents

```java
public void drawContents(GuiGraphics p_282728_, int p_282962_, int p_281511_)
```

**Parameters:**

- `p_282728_` (`GuiGraphics`)
- `p_282962_` (`int`)
- `p_281511_` (`int`)

**Returns:** `public void`

### drawTooltips

```java
public void drawTooltips(GuiGraphics p_282892_, int p_283658_, int p_282602_, int p_282652_, int p_283595_)
```

**Parameters:**

- `p_282892_` (`GuiGraphics`)
- `p_283658_` (`int`)
- `p_282602_` (`int`)
- `p_282652_` (`int`)
- `p_283595_` (`int`)

**Returns:** `public void`

### isMouseOver

```java
public boolean isMouseOver(int p_97155_, int p_97156_, double p_97157_, double p_97158_)
```

**Parameters:**

- `p_97155_` (`int`)
- `p_97156_` (`int`)
- `p_97157_` (`double`)
- `p_97158_` (`double`)

**Returns:** `public boolean`

### create

```java
public static AdvancementTab create(Minecraft p_97171_, AdvancementsScreen p_97172_, int p_97173_, AdvancementNode p_301072_)
```

**Parameters:**

- `p_97171_` (`Minecraft`)
- `p_97172_` (`AdvancementsScreen`)
- `p_97173_` (`int`)
- `p_301072_` (`AdvancementNode`)

**Returns:** `AdvancementTab`

### scroll

```java
public void scroll(double p_97152_, double p_97153_)
```

**Parameters:**

- `p_97152_` (`double`)
- `p_97153_` (`double`)

**Returns:** `public void`

### addAdvancement

```java
public void addAdvancement(AdvancementNode p_301023_)
```

**Parameters:**

- `p_301023_` (`AdvancementNode`)

**Returns:** `public void`

### addWidget

```java
private void addWidget(AdvancementWidget p_97176_, AdvancementHolder p_301071_)
```

**Parameters:**

- `p_97176_` (`AdvancementWidget`)
- `p_301071_` (`AdvancementHolder`)

**Returns:** `private void`

### getWidget

```java
public AdvancementWidget getWidget(AdvancementHolder p_301219_)
```

**Parameters:**

- `p_301219_` (`AdvancementHolder`)

**Returns:** `AdvancementWidget`

### getScreen

```java
public AdvancementsScreen getScreen()
```

**Returns:** `public AdvancementsScreen`
