# LoadingErrorScreen

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** class
**Extends:** `ErrorScreen`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### LoadingErrorScreen

```java
public LoadingErrorScreen(List<ModLoadingIssue> issues, File dumpedLocation, Runnable nextScreenTask)
```

**Parameters:**

- `issues` (`List<ModLoadingIssue>`)
- `dumpedLocation` (`File`)
- `nextScreenTask` (`Runnable`)

**Returns:** `public`

### init

```java
public void init()
```

### render

```java
public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `partialTick` (`float`)

### drawMultiLineCenteredString

```java
private void drawMultiLineCenteredString(GuiGraphics guiGraphics, Font fr, Component str, int x, int y)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `fr` (`Font`)
- `str` (`Component`)
- `x` (`int`)
- `y` (`int`)

**Returns:** `private void`

### LoadingEntryList

```java
 LoadingEntryList(LoadingErrorScreen parent, List<FormattedIssue> errors, List<FormattedIssue> warnings)
```

**Parameters:**

- `parent` (`LoadingErrorScreen`)
- `errors` (`List<FormattedIssue>`)
- `warnings` (`List<FormattedIssue>`)

**Returns:** ``

### getScrollbarPosition

```java
protected int getScrollbarPosition()
```

**Returns:** `int`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### LoadingMessageEntry

```java
 LoadingMessageEntry(Component message)
```

**Parameters:**

- `message` (`Component`)

**Returns:** ``

### this

```java
 this()
```

**Returns:** ``

### LoadingMessageEntry

```java
 LoadingMessageEntry(Component message, boolean center)
```

**Parameters:**

- `message` (`Component`)
- `center` (`boolean`)

**Returns:** ``

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics guiGraphics, int entryIdx, int top, int left, int entryWidth, int entryHeight, int mouseX, int mouseY, boolean p_194999_5_, float partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `entryIdx` (`int`)
- `top` (`int`)
- `left` (`int`)
- `entryWidth` (`int`)
- `entryHeight` (`int`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `p_194999_5_` (`boolean`)
- `partialTick` (`float`)

### FormattedIssue

```java
private record FormattedIssue(Component text, ModLoadingIssue issue)
```

**Parameters:**

- `text` (`Component`)
- `issue` (`ModLoadingIssue`)

**Returns:** `private record`

### of

```java
public static FormattedIssue of(ModLoadingIssue issue)
```

**Parameters:**

- `issue` (`ModLoadingIssue`)

**Returns:** `public static FormattedIssue`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LoadingEntryList` | class |  |
| `LoadingMessageEntry` | class |  |
