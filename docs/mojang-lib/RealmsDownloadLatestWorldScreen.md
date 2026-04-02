# RealmsDownloadLatestWorldScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsDownloadLatestWorldScreen

```java
public RealmsDownloadLatestWorldScreen(Screen p_88625_, WorldDownload p_88626_, String p_88627_, BooleanConsumer p_88628_)
```

**Parameters:**

- `p_88625_` (`Screen`)
- `p_88626_` (`WorldDownload`)
- `p_88627_` (`String`)
- `p_88628_` (`BooleanConsumer`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
public void init()
```

### checkDownloadSize

```java
private void checkDownloadSize()
```

**Returns:** `private void`

### getContentLength

```java
private long getContentLength(String p_88647_)
```

**Parameters:**

- `p_88647_` (`String`)

**Returns:** `private long`

### tick

```java
public void tick()
```

### createProgressNarrationMessage

```java
private Component createProgressNarrationMessage()
```

**Returns:** `private Component`

### onClose

```java
public void onClose()
```

### render

```java
public void render(GuiGraphics p_282124_, int p_88635_, int p_88636_, float p_88637_)
```

**Parameters:**

- `p_282124_` (`GuiGraphics`)
- `p_88635_` (`int`)
- `p_88636_` (`int`)
- `p_88637_` (`float`)

### drawDots

```java
private void drawDots(GuiGraphics p_281948_)
```

**Parameters:**

- `p_281948_` (`GuiGraphics`)

**Returns:** `private void`

### drawProgressBar

```java
private void drawProgressBar(GuiGraphics p_281556_)
```

**Parameters:**

- `p_281556_` (`GuiGraphics`)

**Returns:** `private void`

### drawDownloadSpeed

```java
private void drawDownloadSpeed(GuiGraphics p_282236_)
```

**Parameters:**

- `p_282236_` (`GuiGraphics`)

**Returns:** `private void`

### drawDownloadSpeed0

```java
private void drawDownloadSpeed0(GuiGraphics p_283338_, long p_281931_)
```

**Parameters:**

- `p_283338_` (`GuiGraphics`)
- `p_281931_` (`long`)

**Returns:** `private void`

### downloadSave

```java
private void downloadSave()
```

**Returns:** `private void`

### downloadCancelled

```java
private void downloadCancelled()
```

**Returns:** `private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DownloadStatus` | class |  |
