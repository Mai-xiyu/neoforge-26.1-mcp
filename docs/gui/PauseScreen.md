# PauseScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PauseScreen

```java
public PauseScreen(boolean p_96308_)
```

**Parameters:**

- `p_96308_` (`boolean`)

**Returns:** `public`

### super

```java
 super(p_96308_ ? GAME : PAUSED)
```

**Parameters:**

- `PAUSED` (`p_96308_ ? GAME :`)

**Returns:** ``

### showsPauseMenu

```java
public boolean showsPauseMenu()
```

**Returns:** `public boolean`

### init

```java
protected void init()
```

### createPauseMenu

```java
private void createPauseMenu()
```

**Returns:** `private void`

### addFeedbackButtons

```java
 addFeedbackButtons()
```

**Returns:** ``

### addFeedbackButtons

```java
static void addFeedbackButtons(Screen p_350532_, GridLayout.RowHelper p_351050_)
```

**Parameters:**

- `p_350532_` (`Screen`)
- `p_351050_` (`GridLayout.RowHelper`)

**Returns:** `static void`

### onDisconnect

```java
private void onDisconnect()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

### render

```java
public void render(GuiGraphics p_281899_, int p_281431_, int p_283183_, float p_281435_)
```

**Parameters:**

- `p_281899_` (`GuiGraphics`)
- `p_281431_` (`int`)
- `p_283183_` (`int`)
- `p_281435_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_295883_, int p_294974_, int p_295209_, float p_295290_)
```

**Parameters:**

- `p_295883_` (`GuiGraphics`)
- `p_294974_` (`int`)
- `p_295209_` (`int`)
- `p_295290_` (`float`)

### openScreenButton

```java
private Button openScreenButton(Component p_262567_, Supplier<Screen> p_262581_)
```

**Parameters:**

- `p_262567_` (`Component`)
- `p_262581_` (`Supplier<Screen>`)

**Returns:** `private Button`

### openLinkButton

```java
private static Button openLinkButton(Screen p_350313_, Component p_262593_, URI p_352111_)
```

**Parameters:**

- `p_350313_` (`Screen`)
- `p_262593_` (`Component`)
- `p_352111_` (`URI`)

**Returns:** `private static Button`

### FeedbackSubScreen

```java
protected FeedbackSubScreen(Screen p_350989_)
```

**Parameters:**

- `p_350989_` (`Screen`)

**Returns:** `protected`

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
