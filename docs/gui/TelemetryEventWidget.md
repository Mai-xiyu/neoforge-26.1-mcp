# TelemetryEventWidget

**Package:** `net.minecraft.client.gui.screens.telemetry`
**Type:** class
**Extends:** `AbstractScrollWidget`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TelemetryEventWidget

```java
public TelemetryEventWidget(int p_261584_, int p_261895_, int p_261803_, int p_261967_, Font p_261662_)
```

**Parameters:**

- `p_261584_` (`int`)
- `p_261895_` (`int`)
- `p_261803_` (`int`)
- `p_261967_` (`int`)
- `p_261662_` (`Font`)

**Returns:** `public`

### onOptInChanged

```java
public void onOptInChanged(boolean p_261772_)
```

**Parameters:**

- `p_261772_` (`boolean`)

**Returns:** `public void`

### updateLayout

```java
public void updateLayout()
```

**Returns:** `public void`

### buildContent

```java
private TelemetryEventWidget.Content buildContent(boolean p_261628_)
```

**Parameters:**

- `p_261628_` (`boolean`)

**Returns:** `private TelemetryEventWidget.Content`

### setOnScrolledListener

```java
public void setOnScrolledListener(DoubleConsumer p_261686_)
```

**Parameters:**

- `p_261686_` (`DoubleConsumer`)

**Returns:** `public void`

### setScrollAmount

```java
protected void setScrollAmount(double p_261736_)
```

**Parameters:**

- `p_261736_` (`double`)

### getInnerHeight

```java
protected int getInnerHeight()
```

**Returns:** `int`

### scrollRate

```java
protected double scrollRate()
```

**Returns:** `double`

### renderContents

```java
protected void renderContents(GuiGraphics p_283081_, int p_283426_, int p_282414_, float p_283358_)
```

**Parameters:**

- `p_283081_` (`GuiGraphics`)
- `p_283426_` (`int`)
- `p_282414_` (`int`)
- `p_283358_` (`float`)

### updateWidgetNarration

```java
protected void updateWidgetNarration(NarrationElementOutput p_261538_)
```

**Parameters:**

- `p_261538_` (`NarrationElementOutput`)

### grayOutIfDisabled

```java
private Component grayOutIfDisabled(Component p_308894_, boolean p_308910_)
```

**Parameters:**

- `p_308894_` (`Component`)
- `p_308910_` (`boolean`)

**Returns:** `private Component`

### addEventType

```java
private void addEventType(TelemetryEventWidget.ContentBuilder p_261823_, TelemetryEventType p_262127_, boolean p_308993_)
```

**Parameters:**

- `p_261823_` (`TelemetryEventWidget.ContentBuilder`)
- `p_262127_` (`TelemetryEventType`)
- `p_308993_` (`boolean`)

**Returns:** `private void`

### addEventTypeProperties

```java
private void addEventTypeProperties(TelemetryEventType p_262105_, TelemetryEventWidget.ContentBuilder p_261932_, boolean p_308932_)
```

**Parameters:**

- `p_262105_` (`TelemetryEventType`)
- `p_261932_` (`TelemetryEventWidget.ContentBuilder`)
- `p_308932_` (`boolean`)

**Returns:** `private void`

### containerWidth

```java
private int containerWidth()
```

**Returns:** `private int`

### Content

```java
static record Content(Layout container, Component narration)
```

**Parameters:**

- `container` (`Layout`)
- `narration` (`Component`)

**Returns:** `record`

### ContentBuilder

```java
public ContentBuilder(int p_261784_)
```

**Parameters:**

- `p_261784_` (`int`)

**Returns:** `public`

### addLine

```java
public void addLine(Font p_261503_, Component p_261550_)
```

**Parameters:**

- `p_261503_` (`Font`)
- `p_261550_` (`Component`)

**Returns:** `public void`

### addLine

```java
public void addLine(Font p_261894_, Component p_261816_, int p_261721_)
```

**Parameters:**

- `p_261894_` (`Font`)
- `p_261816_` (`Component`)
- `p_261721_` (`int`)

**Returns:** `public void`

### addHeader

```java
public void addHeader(Font p_261496_, Component p_261670_)
```

**Parameters:**

- `p_261496_` (`Font`)
- `p_261670_` (`Component`)

**Returns:** `public void`

### addSpacer

```java
public void addSpacer(int p_261997_)
```

**Parameters:**

- `p_261997_` (`int`)

**Returns:** `public void`

### build

```java
public TelemetryEventWidget.Content build()
```

**Returns:** `public TelemetryEventWidget.Content`
