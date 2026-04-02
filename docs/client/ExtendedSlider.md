# ExtendedSlider

**Package:** `net.neoforged.neoforge.client.gui.widget`
**Type:** class
**Extends:** `AbstractSliderButton`
**Side:** 🖥️ Client

## Description

Slider widget implementation which allows inputting values in a certain range with optional step size.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `prefix` | `Component` |  |
| `suffix` | `Component` |  |
| `minValue` | `double` |  |
| `maxValue` | `double` |  |
| `drawString` | `boolean` |  |

## Methods

### ExtendedSlider

```java
protected public ExtendedSlider(int x, int y, int width, int height, Component prefix, Component suffix, double minValue, double maxValue, double currentValue, double stepSize, int precision, boolean drawString)
```

**Parameters:**

- `x` (`int`)
- `y` (`int`)
- `width` (`int`)
- `height` (`int`)
- `prefix` (`Component`)
- `suffix` (`Component`)
- `minValue` (`double`)
- `maxValue` (`double`)
- `currentValue` (`double`)
- `stepSize` (`double`)
- `precision` (`int`)
- `drawString` (`boolean`)

**Returns:** `public`

### ExtendedSlider

```java
public public ExtendedSlider(int x, int y, int width, int height, Component prefix, Component suffix, double minValue, double maxValue, double currentValue, boolean drawString)
```

**Parameters:**

- `x` (`int`)
- `y` (`int`)
- `width` (`int`)
- `height` (`int`)
- `prefix` (`Component`)
- `suffix` (`Component`)
- `minValue` (`double`)
- `maxValue` (`double`)
- `currentValue` (`double`)
- `drawString` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getValue

```java
public double getValue()
```

**Returns:** `double`

### getValueLong

```java
public long getValueLong()
```

**Returns:** `long`

### getValueInt

```java
public int getValueInt()
```

**Returns:** `int`

### setValue

```java
public void setValue(double value)
```

**Parameters:**

- `value` (`double`)

### getValueString

```java
public String getValueString()
```

**Returns:** `public String`

### onClick

```java
public void onClick(double mouseX, double mouseY)
```

**Parameters:**

- `mouseX` (`double`)
- `mouseY` (`double`)

### onDrag

```java
protected void onDrag(double mouseX, double mouseY, double dragX, double dragY)
```

**Parameters:**

- `mouseX` (`double`)
- `mouseY` (`double`)
- `dragX` (`double`)
- `dragY` (`double`)

### keyPressed

```java
public boolean keyPressed(int keyCode, int scanCode, int modifiers)
```

**Parameters:**

- `keyCode` (`int`)
- `scanCode` (`int`)
- `modifiers` (`int`)

**Returns:** `boolean`

### setValueFromMouse

```java
private void setValueFromMouse(double mouseX)
```

**Parameters:**

- `mouseX` (`double`)

**Returns:** `private void`

### updateMessage

```java
protected void updateMessage()
```

### applyValue

```java
protected void applyValue()
```

### renderWidget

```java
public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `partialTick` (`float`)
