# SocialInteractionsScreen

**Package:** `net.minecraft.client.gui.screens.social`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SEARCH_START` | `int` |  |
| `LIST_START` | `int` |  |

## Methods

### SocialInteractionsScreen

```java
public SocialInteractionsScreen()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### SocialInteractionsScreen

```java
public SocialInteractionsScreen(Screen p_331950_)
```

**Parameters:**

- `p_331950_` (`Screen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### windowHeight

```java
private int windowHeight()
```

**Returns:** `private int`

### listEnd

```java
private int listEnd()
```

**Returns:** `private int`

### marginX

```java
private int marginX()
```

**Returns:** `private int`

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### init

```java
protected void init()
```

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### repositionElements

```java
protected void repositionElements()
```

### setInitialFocus

```java
protected void setInitialFocus()
```

### onClose

```java
public void onClose()
```

### showPage

```java
private void showPage(SocialInteractionsScreen.Page p_100772_)
```

**Parameters:**

- `p_100772_` (`SocialInteractionsScreen.Page`)

**Returns:** `private void`

### renderBackground

```java
public void renderBackground(GuiGraphics p_283202_, int p_296258_, int p_295067_, float p_295331_)
```

**Parameters:**

- `p_283202_` (`GuiGraphics`)
- `p_296258_` (`int`)
- `p_295067_` (`int`)
- `p_295331_` (`float`)

### render

```java
public void render(GuiGraphics p_282516_, int p_100764_, int p_100765_, float p_100766_)
```

**Parameters:**

- `p_282516_` (`GuiGraphics`)
- `p_100764_` (`int`)
- `p_100765_` (`int`)
- `p_100766_` (`float`)

### keyPressed

```java
public boolean keyPressed(int p_100757_, int p_100758_, int p_100759_)
```

**Parameters:**

- `p_100757_` (`int`)
- `p_100758_` (`int`)
- `p_100759_` (`int`)

**Returns:** `boolean`

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### checkSearchStringUpdate

```java
private void checkSearchStringUpdate(String p_100789_)
```

**Parameters:**

- `p_100789_` (`String`)

**Returns:** `private void`

### updateServerLabel

```java
private void updateServerLabel(Minecraft p_100768_)
```

**Parameters:**

- `p_100768_` (`Minecraft`)

**Returns:** `private void`

### onAddPlayer

```java
public void onAddPlayer(PlayerInfo p_100776_)
```

**Parameters:**

- `p_100776_` (`PlayerInfo`)

**Returns:** `public void`

### onRemovePlayer

```java
public void onRemovePlayer(UUID p_100780_)
```

**Parameters:**

- `p_100780_` (`UUID`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Page` | enum |  |
