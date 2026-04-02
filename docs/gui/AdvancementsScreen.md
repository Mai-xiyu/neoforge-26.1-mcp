# AdvancementsScreen

**Package:** `net.minecraft.client.gui.screens.advancements`
**Type:** class
**Extends:** `Screen`
**Implements:** `ClientAdvancements.Listener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WINDOW_WIDTH` | `int` |  |
| `WINDOW_HEIGHT` | `int` |  |
| `WINDOW_INSIDE_WIDTH` | `int` |  |
| `WINDOW_INSIDE_HEIGHT` | `int` |  |
| `BACKGROUND_TILE_WIDTH` | `int` |  |
| `BACKGROUND_TILE_HEIGHT` | `int` |  |
| `BACKGROUND_TILE_COUNT_X` | `int` |  |
| `BACKGROUND_TILE_COUNT_Y` | `int` |  |

## Methods

### AdvancementsScreen

```java
public AdvancementsScreen(ClientAdvancements p_97340_)
```

**Parameters:**

- `p_97340_` (`ClientAdvancements`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### AdvancementsScreen

```java
public AdvancementsScreen(ClientAdvancements p_331393_, Screen p_331693_)
```

**Parameters:**

- `p_331393_` (`ClientAdvancements`)
- `p_331693_` (`Screen`)

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

### repositionElements

```java
protected void repositionElements()
```

### onClose

```java
public void onClose()
```

### removed

```java
public void removed()
```

### mouseClicked

```java
public boolean mouseClicked(double p_97343_, double p_97344_, int p_97345_)
```

**Parameters:**

- `p_97343_` (`double`)
- `p_97344_` (`double`)
- `p_97345_` (`int`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_97353_, int p_97354_, int p_97355_)
```

**Parameters:**

- `p_97353_` (`int`)
- `p_97354_` (`int`)
- `p_97355_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_282589_, int p_282255_, int p_283354_, float p_283123_)
```

**Parameters:**

- `p_282589_` (`GuiGraphics`)
- `p_282255_` (`int`)
- `p_283354_` (`int`)
- `p_283123_` (`float`)

### mouseDragged

```java
public boolean mouseDragged(double p_97347_, double p_97348_, int p_97349_, double p_97350_, double p_97351_)
```

**Parameters:**

- `p_97347_` (`double`)
- `p_97348_` (`double`)
- `p_97349_` (`int`)
- `p_97350_` (`double`)
- `p_97351_` (`double`)

**Returns:** `boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_295690_, double p_295286_, double p_295339_, double p_296270_)
```

**Parameters:**

- `p_295690_` (`double`)
- `p_295286_` (`double`)
- `p_295339_` (`double`)
- `p_296270_` (`double`)

**Returns:** `boolean`

### renderInside

```java
private void renderInside(GuiGraphics p_282012_, int p_97375_, int p_97376_, int p_97377_, int p_97378_)
```

**Parameters:**

- `p_282012_` (`GuiGraphics`)
- `p_97375_` (`int`)
- `p_97376_` (`int`)
- `p_97377_` (`int`)
- `p_97378_` (`int`)

**Returns:** `private void`

### renderWindow

```java
public void renderWindow(GuiGraphics p_283395_, int p_281890_, int p_282532_)
```

**Parameters:**

- `p_283395_` (`GuiGraphics`)
- `p_281890_` (`int`)
- `p_282532_` (`int`)

**Returns:** `public void`

### renderTooltips

```java
private void renderTooltips(GuiGraphics p_282784_, int p_283556_, int p_282458_, int p_281519_, int p_283371_)
```

**Parameters:**

- `p_282784_` (`GuiGraphics`)
- `p_283556_` (`int`)
- `p_282458_` (`int`)
- `p_281519_` (`int`)
- `p_283371_` (`int`)

**Returns:** `private void`

### onAddAdvancementRoot

```java
public void onAddAdvancementRoot(AdvancementNode p_301276_)
```

**Parameters:**

- `p_301276_` (`AdvancementNode`)

### onRemoveAdvancementRoot

```java
public void onRemoveAdvancementRoot(AdvancementNode p_301028_)
```

**Parameters:**

- `p_301028_` (`AdvancementNode`)

### onAddAdvancementTask

```java
public void onAddAdvancementTask(AdvancementNode p_301205_)
```

**Parameters:**

- `p_301205_` (`AdvancementNode`)

### onRemoveAdvancementTask

```java
public void onRemoveAdvancementTask(AdvancementNode p_301004_)
```

**Parameters:**

- `p_301004_` (`AdvancementNode`)

### onUpdateAdvancementProgress

```java
public void onUpdateAdvancementProgress(AdvancementNode p_301161_, AdvancementProgress p_97369_)
```

**Parameters:**

- `p_301161_` (`AdvancementNode`)
- `p_97369_` (`AdvancementProgress`)

### onSelectedTabChanged

```java
public void onSelectedTabChanged(AdvancementHolder p_301084_)
```

**Parameters:**

- `p_301084_` (`AdvancementHolder`)

### onAdvancementsCleared

```java
public void onAdvancementsCleared()
```

### getAdvancementWidget

```java
public AdvancementWidget getAdvancementWidget(AdvancementNode p_300894_)
```

**Parameters:**

- `p_300894_` (`AdvancementNode`)

**Returns:** `AdvancementWidget`
