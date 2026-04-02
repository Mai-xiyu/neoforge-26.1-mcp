# GpuWarnlistManager

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Extends:** `SimplePreparableReloadListener<GpuWarnlistManager.Preparations>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### hasWarnings

```java
public boolean hasWarnings()
```

**Returns:** `public boolean`

### willShowWarning

```java
public boolean willShowWarning()
```

**Returns:** `public boolean`

### showWarning

```java
public void showWarning()
```

**Returns:** `public void`

### dismissWarning

```java
public void dismissWarning()
```

**Returns:** `public void`

### dismissWarningAndSkipFabulous

```java
public void dismissWarningAndSkipFabulous()
```

**Returns:** `public void`

### isShowingWarning

```java
public boolean isShowingWarning()
```

**Returns:** `public boolean`

### isSkippingFabulous

```java
public boolean isSkippingFabulous()
```

**Returns:** `public boolean`

### resetWarnings

```java
public void resetWarnings()
```

**Returns:** `public void`

### getRendererWarnings

```java
public String getRendererWarnings()
```

**Returns:** `String`

### getVersionWarnings

```java
public String getVersionWarnings()
```

**Returns:** `String`

### getVendorWarnings

```java
public String getVendorWarnings()
```

**Returns:** `String`

### getAllWarnings

```java
public String getAllWarnings()
```

**Returns:** `String`

### prepare

```java
protected GpuWarnlistManager.Preparations prepare(ResourceManager p_109220_, ProfilerFiller p_109221_)
```

**Parameters:**

- `p_109220_` (`ResourceManager`)
- `p_109221_` (`ProfilerFiller`)

**Returns:** `protected GpuWarnlistManager.Preparations`

### apply

```java
protected void apply(GpuWarnlistManager.Preparations p_109226_, ResourceManager p_109227_, ProfilerFiller p_109228_)
```

**Parameters:**

- `p_109226_` (`GpuWarnlistManager.Preparations`)
- `p_109227_` (`ResourceManager`)
- `p_109228_` (`ProfilerFiller`)

**Returns:** `protected void`

### compilePatterns

```java
private static void compilePatterns(JsonArray p_109223_, List<Pattern> p_109224_)
```

**Parameters:**

- `p_109223_` (`JsonArray`)
- `p_109224_` (`List<Pattern>`)

**Returns:** `private static void`

### Preparations

```java
 Preparations(List<Pattern> p_109261_, List<Pattern> p_109262_, List<Pattern> p_109263_)
```

**Parameters:**

- `p_109261_` (`List<Pattern>`)
- `p_109262_` (`List<Pattern>`)
- `p_109263_` (`List<Pattern>`)

**Returns:** ``

### matchAny

```java
private static String matchAny(List<Pattern> p_109273_, String p_109274_)
```

**Parameters:**

- `p_109273_` (`List<Pattern>`)
- `p_109274_` (`String`)

**Returns:** `private static String`

### apply

```java
ImmutableMap<String, String> apply()
```

**Returns:** `ImmutableMap<String, String>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Preparations` | class |  |
