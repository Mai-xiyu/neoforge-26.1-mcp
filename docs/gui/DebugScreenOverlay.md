# DebugScreenOverlay

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DebugScreenOverlay

```java
public DebugScreenOverlay(Minecraft p_94039_)
```

**Parameters:**

- `p_94039_` (`Minecraft`)

**Returns:** `public`

### clearChunkCache

```java
public void clearChunkCache()
```

**Returns:** `public void`

### render

```java
public void render(GuiGraphics p_281427_)
```

**Parameters:**

- `p_281427_` (`GuiGraphics`)

**Returns:** `public void`

### collectGameInformationText

```java
protected List<String> collectGameInformationText()
```

**Returns:** `List<String>`

### drawGameInformation

```java
protected void drawGameInformation(GuiGraphics p_281525_)
```

**Parameters:**

- `p_281525_` (`GuiGraphics`)

**Returns:** `protected void`

### collectSystemInformationText

```java
protected List<String> collectSystemInformationText()
```

**Returns:** `List<String>`

### drawSystemInformation

```java
protected void drawSystemInformation(GuiGraphics p_281261_)
```

**Parameters:**

- `p_281261_` (`GuiGraphics`)

**Returns:** `protected void`

### renderLines

```java
private void renderLines(GuiGraphics p_286519_, List<String> p_286665_, boolean p_286644_)
```

**Parameters:**

- `p_286519_` (`GuiGraphics`)
- `p_286665_` (`List<String>`)
- `p_286644_` (`boolean`)

**Returns:** `private void`

### getGameInformation

```java
protected List<String> getGameInformation()
```

**Returns:** `protected List<String>`

### printBiome

```java
private static String printBiome(Holder<Biome> p_205375_)
```

**Parameters:**

- `p_205375_` (`Holder<Biome>`)

**Returns:** `private static String`

### getLevel

```java
private Level getLevel()
```

**Returns:** `private Level`

### getClientChunk

```java
private LevelChunk getClientChunk()
```

**Returns:** `private LevelChunk`

### getSystemInformation

```java
protected List<String> getSystemInformation()
```

**Returns:** `protected List<String>`

### getPropertyValueString

```java
private String getPropertyValueString(Entry<Property<?>, Comparable<?>> p_94072_)
```

**Parameters:**

- `p_94072_` (`Entry<Property<?>, Comparable<?>>`)

**Returns:** `private String`

### bytesToMegabytes

```java
private static long bytesToMegabytes(long p_94051_)
```

**Parameters:**

- `p_94051_` (`long`)

**Returns:** `private static long`

### showDebugScreen

```java
public boolean showDebugScreen()
```

**Returns:** `public boolean`

### showProfilerChart

```java
public boolean showProfilerChart()
```

**Returns:** `public boolean`

### showNetworkCharts

```java
public boolean showNetworkCharts()
```

**Returns:** `public boolean`

### showFpsCharts

```java
public boolean showFpsCharts()
```

**Returns:** `public boolean`

### toggleOverlay

```java
public void toggleOverlay()
```

**Returns:** `public void`

### toggleNetworkCharts

```java
public void toggleNetworkCharts()
```

**Returns:** `public void`

### toggleFpsCharts

```java
public void toggleFpsCharts()
```

**Returns:** `public void`

### toggleProfilerChart

```java
public void toggleProfilerChart()
```

**Returns:** `public void`

### logFrameDuration

```java
public void logFrameDuration(long p_299936_)
```

**Parameters:**

- `p_299936_` (`long`)

**Returns:** `public void`

### getTickTimeLogger

```java
public LocalSampleLogger getTickTimeLogger()
```

**Returns:** `public LocalSampleLogger`

### getPingLogger

```java
public LocalSampleLogger getPingLogger()
```

**Returns:** `public LocalSampleLogger`

### getBandwidthLogger

```java
public LocalSampleLogger getBandwidthLogger()
```

**Returns:** `public LocalSampleLogger`

### logRemoteSample

```java
public void logRemoteSample(long[] p_324375_, RemoteDebugSampleType p_324309_)
```

**Parameters:**

- `p_324375_` (`long[]`)
- `p_324309_` (`RemoteDebugSampleType`)

**Returns:** `public void`

### reset

```java
public void reset()
```

**Returns:** `public void`

### bytesAllocatedPerSecond

```java
long bytesAllocatedPerSecond(long p_232517_)
```

**Parameters:**

- `p_232517_` (`long`)

**Returns:** `long`

### gcCounts

```java
private static long gcCounts()
```

**Returns:** `private static long`
