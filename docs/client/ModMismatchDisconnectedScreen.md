# ModMismatchDisconnectedScreen

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client

## Methods

### ModMismatchDisconnectedScreen

```java
DisconnectionDetails

    public ModMismatchDisconnectedScreen(Screen parentScreen, Component reason, Map<ResourceLocation, Component> mismatchedChannelData)
```

**Parameters:**

- `parentScreen` (`Screen`)
- `reason` (`Component`)
- `mismatchedChannelData` (`Map<ResourceLocation, Component>`)

**Returns:** `DisconnectionDetails

    public`

### init

```java
protected void init()
```

### render

```java
public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTicks)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `partialTicks` (`float`)

### MismatchInfoPanel

```java
public MismatchInfoPanel(Minecraft client, int width, int height, int top, int left)
```

**Parameters:**

- `client` (`Minecraft`)
- `width` (`int`)
- `height` (`int`)
- `top` (`int`)
- `left` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateListContent

```java
 updateListContent()
```

**Returns:** ``

### updateListContent

```java
private void updateListContent()
```

**Returns:** `private void`

### Row

```java
record Row(MutableComponent name, MutableComponent reason)
```

**Parameters:**

- `name` (`MutableComponent`)
- `reason` (`MutableComponent`)

**Returns:** `record`

### toggleSimplifiedView

```java
public void toggleSimplifiedView()
```

**Returns:** `public void`

### updateListContent

```java
 updateListContent()
```

**Returns:** ``

### getContentHeight

```java
protected int getContentHeight()
```

**Returns:** `int`

### drawPanel

```java
protected void drawPanel(GuiGraphics guiGraphics, int entryRight, int relativeY, Tesselator tess, int mouseX, int mouseY)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `entryRight` (`int`)
- `relativeY` (`int`)
- `tess` (`Tesselator`)
- `mouseX` (`int`)
- `mouseY` (`int`)

### render

```java
public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTicks)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `partialTicks` (`float`)

### getComponentStyleAt

```java
public Style getComponentStyleAt(double x, double y)
```

**Parameters:**

- `x` (`double`)
- `y` (`double`)

**Returns:** `public Style`

### mouseClicked

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Parameters:**

- `mouseX` (`double`)
- `mouseY` (`double`)
- `button` (`int`)

**Returns:** `boolean`

### handleComponentClicked

```java
 handleComponentClicked()
```

**Returns:** ``

### narrationPriority

```java
public NarrationPriority narrationPriority()
```

**Returns:** `NarrationPriority`

### updateNarration

```java
public void updateNarration(NarrationElementOutput output)
```

**Parameters:**

- `output` (`NarrationElementOutput`)
