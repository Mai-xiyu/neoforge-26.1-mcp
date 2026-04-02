# FpsDebugChart

**Package:** `net.minecraft.client.gui.components.debugchart`
**Type:** class
**Extends:** `AbstractDebugChart`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FpsDebugChart

```java
public FpsDebugChart(Font p_298374_, SampleStorage p_323606_)
```

**Parameters:**

- `p_298374_` (`Font`)
- `p_323606_` (`SampleStorage`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderAdditionalLinesAndLabels

```java
protected void renderAdditionalLinesAndLabels(GuiGraphics p_298713_, int p_298427_, int p_299203_, int p_298951_)
```

**Parameters:**

- `p_298713_` (`GuiGraphics`)
- `p_298427_` (`int`)
- `p_299203_` (`int`)
- `p_298951_` (`int`)

### toDisplayString

```java
protected String toDisplayString(double p_298621_)
```

**Parameters:**

- `p_298621_` (`double`)

**Returns:** `String`

### getSampleHeight

```java
protected int getSampleHeight(double p_298242_)
```

**Parameters:**

- `p_298242_` (`double`)

**Returns:** `int`

### getSampleColor

```java
protected int getSampleColor(long p_298344_)
```

**Parameters:**

- `p_298344_` (`long`)

**Returns:** `int`

### toMilliseconds

```java
private static double toMilliseconds(double p_298493_)
```

**Parameters:**

- `p_298493_` (`double`)

**Returns:** `private static double`
