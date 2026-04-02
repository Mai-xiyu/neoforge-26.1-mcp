# RealmsUploadScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsUploadScreen

```java
public RealmsUploadScreen(RealmCreationTask p_320023_, long p_90083_, int p_90084_, RealmsResetWorldScreen p_90085_, LevelSummary p_90086_)
```

**Parameters:**

- `p_320023_` (`RealmCreationTask`)
- `p_90083_` (`long`)
- `p_90084_` (`int`)
- `p_90085_` (`RealmsResetWorldScreen`)
- `p_90086_` (`LevelSummary`)

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

### repositionElements

```java
protected void repositionElements()
```

### onBack

```java
private void onBack()
```

**Returns:** `private void`

### onCancel

```java
private void onCancel()
```

**Returns:** `private void`

### keyPressed

```java
public boolean keyPressed(int p_90089_, int p_90090_, int p_90091_)
```

**Parameters:**

- `p_90089_` (`int`)
- `p_90090_` (`int`)
- `p_90091_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_282140_, int p_90097_, int p_90098_, float p_90099_)
```

**Parameters:**

- `p_282140_` (`GuiGraphics`)
- `p_90097_` (`int`)
- `p_90098_` (`int`)
- `p_90099_` (`float`)

### drawProgressBar

```java
private void drawProgressBar(GuiGraphics p_282575_)
```

**Parameters:**

- `p_282575_` (`GuiGraphics`)

**Returns:** `private void`

### drawUploadSpeed

```java
private void drawUploadSpeed(GuiGraphics p_281884_)
```

**Parameters:**

- `p_281884_` (`GuiGraphics`)

**Returns:** `private void`

### drawUploadSpeed0

```java
private void drawUploadSpeed0(GuiGraphics p_282279_, long p_282827_)
```

**Parameters:**

- `p_282279_` (`GuiGraphics`)
- `p_282827_` (`long`)

**Returns:** `private void`

### tick

```java
public void tick()
```

### createProgressNarrationMessage

```java
private Component createProgressNarrationMessage()
```

**Returns:** `private Component`

### upload

```java
private void upload()
```

**Returns:** `private void`

### setErrorMessage

```java
private void setErrorMessage(Component[]... p_90113_)
```

**Parameters:**

- `p_90113_` (`Component[]...`)

**Returns:** `private void`

### uploadCancelled

```java
private void uploadCancelled()
```

**Returns:** `private void`

### verify

```java
private boolean verify(File p_90106_)
```

**Parameters:**

- `p_90106_` (`File`)

**Returns:** `private boolean`

### tarGzipArchive

```java
private File tarGzipArchive(File p_90120_)
```

**Parameters:**

- `p_90120_` (`File`)

**Returns:** `private File`

### addFileToTarGz

```java
private void addFileToTarGz(TarArchiveOutputStream p_90108_, String p_90109_, String p_90110_, boolean p_90111_)
```

**Parameters:**

- `p_90108_` (`TarArchiveOutputStream`)
- `p_90109_` (`String`)
- `p_90110_` (`String`)
- `p_90111_` (`boolean`)

**Returns:** `private void`
