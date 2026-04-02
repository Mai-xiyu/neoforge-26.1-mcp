# GameModeSwitcherScreen

**Package:** `net.minecraft.client.gui.screens.debug`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### GameModeSwitcherScreen

```java
public GameModeSwitcherScreen()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDefaultSelected

```java
private GameType getDefaultSelected()
```

**Returns:** `private GameType`

### init

```java
protected void init()
```

### render

```java
public void render(GuiGraphics p_281834_, int p_283223_, int p_282178_, float p_281339_)
```

**Parameters:**

- `p_281834_` (`GuiGraphics`)
- `p_283223_` (`int`)
- `p_282178_` (`int`)
- `p_281339_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_294233_, int p_295829_, int p_296393_, float p_294567_)
```

**Parameters:**

- `p_294233_` (`GuiGraphics`)
- `p_295829_` (`int`)
- `p_296393_` (`int`)
- `p_294567_` (`float`)

### switchToHoveredGameMode

```java
private void switchToHoveredGameMode()
```

**Returns:** `private void`

### switchToHoveredGameMode

```java
 switchToHoveredGameMode()
```

**Returns:** ``

### switchToHoveredGameMode

```java
private static void switchToHoveredGameMode(Minecraft p_281340_, GameModeSwitcherScreen.GameModeIcon p_281358_)
```

**Parameters:**

- `p_281340_` (`Minecraft`)
- `p_281358_` (`GameModeSwitcherScreen.GameModeIcon`)

**Returns:** `private static void`

### checkToClose

```java
private boolean checkToClose()
```

**Returns:** `private boolean`

### keyPressed

```java
public boolean keyPressed(int p_97553_, int p_97554_, int p_97555_)
```

**Parameters:**

- `p_97553_` (`int`)
- `p_97554_` (`int`)
- `p_97555_` (`int`)

**Returns:** `boolean`

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### GameModeIcon

```java
private GameModeIcon(Component p_97594_, String p_97595_, ItemStack p_97596_)
```

**Parameters:**

- `p_97594_` (`Component`)
- `p_97595_` (`String`)
- `p_97596_` (`ItemStack`)

**Returns:** `private`

### drawIcon

```java
void drawIcon(GuiGraphics p_282609_, int p_283301_, int p_281692_)
```

**Parameters:**

- `p_282609_` (`GuiGraphics`)
- `p_283301_` (`int`)
- `p_281692_` (`int`)

### getName

```java
Component getName()
```

**Returns:** `Component`

### getCommand

```java
String getCommand()
```

**Returns:** `String`

### getNext

```java
GameModeSwitcherScreen.GameModeIcon getNext()
```

**Returns:** `GameModeSwitcherScreen.GameModeIcon`

### getFromGameType

```java
static GameModeSwitcherScreen.GameModeIcon getFromGameType(GameType p_283307_)
```

**Parameters:**

- `p_283307_` (`GameType`)

**Returns:** `static GameModeSwitcherScreen.GameModeIcon`

### GameModeSlot

```java
public GameModeSlot(GameModeSwitcherScreen.GameModeIcon p_97627_, int p_97628_, int p_97629_)
```

**Parameters:**

- `p_97627_` (`GameModeSwitcherScreen.GameModeIcon`)
- `p_97628_` (`int`)
- `p_97629_` (`int`)

**Returns:** `public`

### renderWidget

```java
public void renderWidget(GuiGraphics p_281380_, int p_283094_, int p_283558_, float p_282631_)
```

**Parameters:**

- `p_281380_` (`GuiGraphics`)
- `p_283094_` (`int`)
- `p_283558_` (`int`)
- `p_282631_` (`float`)

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_259120_)
```

**Parameters:**

- `p_259120_` (`NarrationElementOutput`)

### isHoveredOrFocused

```java
public boolean isHoveredOrFocused()
```

**Returns:** `boolean`

### setSelected

```java
public void setSelected(boolean p_97644_)
```

**Parameters:**

- `p_97644_` (`boolean`)

**Returns:** `public void`

### drawSlot

```java
private void drawSlot(GuiGraphics p_281786_)
```

**Parameters:**

- `p_281786_` (`GuiGraphics`)

**Returns:** `private void`

### drawSelection

```java
private void drawSelection(GuiGraphics p_281820_)
```

**Parameters:**

- `p_281820_` (`GuiGraphics`)

**Returns:** `private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `GameModeSlot` | class |  |
