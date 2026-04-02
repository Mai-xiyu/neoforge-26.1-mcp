# BandwidthDebugChart

**Package:** `net.minecraft.client.gui.components.debugchart`
**Type:** class
**Extends:** `AbstractDebugChart`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BandwidthDebugChart

```java
public BandwidthDebugChart(Font p_298747_, SampleStorage p_323505_)
```

**Parameters:**

- `p_298747_` (`Font`)
- `p_323505_` (`SampleStorage`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderAdditionalLinesAndLabels

```java
protected void renderAdditionalLinesAndLabels(GuiGraphics p_298777_, int p_298875_, int p_298575_, int p_298572_)
```

**Parameters:**

- `p_298777_` (`GuiGraphics`)
- `p_298875_` (`int`)
- `p_298575_` (`int`)
- `p_298572_` (`int`)

### drawLabeledLineAtValue

```java
private void drawLabeledLineAtValue(GuiGraphics p_298765_, int p_298499_, int p_299090_, int p_299218_, int p_299096_)
```

**Parameters:**

- `p_298765_` (`GuiGraphics`)
- `p_298499_` (`int`)
- `p_299090_` (`int`)
- `p_299218_` (`int`)
- `p_299096_` (`int`)

**Returns:** `private void`

### drawLineWithLabel

```java
private void drawLineWithLabel(GuiGraphics p_298513_, int p_299197_, int p_298663_, int p_299258_, String p_298779_)
```

**Parameters:**

- `p_298513_` (`GuiGraphics`)
- `p_299197_` (`int`)
- `p_298663_` (`int`)
- `p_299258_` (`int`)
- `p_298779_` (`String`)

**Returns:** `private void`

### toDisplayString

```java
protected String toDisplayString(double p_299213_)
```

**Parameters:**

- `p_299213_` (`double`)

**Returns:** `String`

### toDisplayStringInternal

```java
private static String toDisplayStringInternal(double p_299224_)
```

**Parameters:**

- `p_299224_` (`double`)

**Returns:** `private static String`

### getSampleHeight

```java
protected int getSampleHeight(double p_298596_)
```

**Parameters:**

- `p_298596_` (`double`)

**Returns:** `int`

### getSampleHeightInternal

```java
private static int getSampleHeightInternal(double p_298204_)
```

**Parameters:**

- `p_298204_` (`double`)

**Returns:** `private static int`

### getSampleColor

```java
protected int getSampleColor(long p_298852_)
```

**Parameters:**

- `p_298852_` (`long`)

**Returns:** `int`

### toBytesPerSecond

```java
private static double toBytesPerSecond(double p_298720_)
```

**Parameters:**

- `p_298720_` (`double`)

**Returns:** `private static double`
