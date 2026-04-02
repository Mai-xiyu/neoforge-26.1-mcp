# DeathScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DeathScreen

```java
public DeathScreen(Component p_95911_, boolean p_95912_)
```

**Parameters:**

- `p_95911_` (`Component`)
- `p_95912_` (`boolean`)

**Returns:** `public`

### init

```java
protected void init()
```

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### handleExitToTitleScreen

```java
private void handleExitToTitleScreen()
```

**Returns:** `private void`

### exitToTitleScreen

```java
private void exitToTitleScreen()
```

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_283488_, int p_283551_, int p_283002_, float p_281981_)
```

**Parameters:**

- `p_283488_` (`GuiGraphics`)
- `p_283551_` (`int`)
- `p_283002_` (`int`)
- `p_281981_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_296411_, int p_295765_, int p_295221_, float p_295625_)
```

**Parameters:**

- `p_296411_` (`GuiGraphics`)
- `p_295765_` (`int`)
- `p_295221_` (`int`)
- `p_295625_` (`float`)

### renderDeathBackground

```java
 renderDeathBackground()
```

**Returns:** ``

### renderDeathBackground

```java
static void renderDeathBackground(GuiGraphics p_339647_, int p_339641_, int p_339673_)
```

**Parameters:**

- `p_339647_` (`GuiGraphics`)
- `p_339641_` (`int`)
- `p_339673_` (`int`)

**Returns:** `static void`

### mouseClicked

```java
public boolean mouseClicked(double p_95914_, double p_95915_, int p_95916_)
```

**Parameters:**

- `p_95914_` (`double`)
- `p_95915_` (`double`)
- `p_95916_` (`int`)

**Returns:** `boolean`

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### setButtonsActive

```java
private void setButtonsActive(boolean p_273413_)
```

**Parameters:**

- `p_273413_` (`boolean`)

**Returns:** `private void`

### TitleConfirmScreen

```java
public TitleConfirmScreen(BooleanConsumer p_273707_, Component p_273255_, Component p_273747_, Component p_273434_, Component p_273416_)
```

**Parameters:**

- `p_273707_` (`BooleanConsumer`)
- `p_273255_` (`Component`)
- `p_273747_` (`Component`)
- `p_273434_` (`Component`)
- `p_273416_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderBackground

```java
public void renderBackground(GuiGraphics p_339588_, int p_339615_, int p_339620_, float p_339674_)
```

**Parameters:**

- `p_339588_` (`GuiGraphics`)
- `p_339615_` (`int`)
- `p_339620_` (`int`)
- `p_339674_` (`float`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TitleConfirmScreen` | class |  |
