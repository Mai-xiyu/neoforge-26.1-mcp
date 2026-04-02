# TpsDebugChart

**Package:** `net.minecraft.client.gui.components.debugchart`
**Type:** class
**Extends:** `AbstractDebugChart`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TpsDebugChart

```java
public TpsDebugChart(Font p_299254_, SampleStorage p_324399_, Supplier<Float> p_309098_)
```

**Parameters:**

- `p_299254_` (`Font`)
- `p_324399_` (`SampleStorage`)
- `p_309098_` (`Supplier<Float>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderAdditionalLinesAndLabels

```java
protected void renderAdditionalLinesAndLabels(GuiGraphics p_298653_, int p_298791_, int p_298387_, int p_298869_)
```

**Parameters:**

- `p_298653_` (`GuiGraphics`)
- `p_298791_` (`int`)
- `p_298387_` (`int`)
- `p_298869_` (`int`)

### drawAdditionalDimensions

```java
protected void drawAdditionalDimensions(GuiGraphics p_321511_, int p_321489_, int p_321791_, int p_321685_)
```

**Parameters:**

- `p_321511_` (`GuiGraphics`)
- `p_321489_` (`int`)
- `p_321791_` (`int`)
- `p_321685_` (`int`)

### getValueForAggregation

```java
protected long getValueForAggregation(int p_321565_)
```

**Parameters:**

- `p_321565_` (`int`)

**Returns:** `long`

### toDisplayString

```java
protected String toDisplayString(double p_298403_)
```

**Parameters:**

- `p_298403_` (`double`)

**Returns:** `String`

### getSampleHeight

```java
protected int getSampleHeight(double p_299161_)
```

**Parameters:**

- `p_299161_` (`double`)

**Returns:** `int`

### getSampleColor

```java
protected int getSampleColor(long p_299243_)
```

**Parameters:**

- `p_299243_` (`long`)

**Returns:** `int`

### toMilliseconds

```java
private static double toMilliseconds(double p_298223_)
```

**Parameters:**

- `p_298223_` (`double`)

**Returns:** `private static double`
