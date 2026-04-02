# SpectatorGui

**Package:** `net.minecraft.client.gui.components.spectator`
**Type:** class
**Implements:** `SpectatorMenuListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SpectatorGui

```java
public SpectatorGui(Minecraft p_94767_)
```

**Parameters:**

- `p_94767_` (`Minecraft`)

**Returns:** `public`

### onHotbarSelected

```java
public void onHotbarSelected(int p_94772_)
```

**Parameters:**

- `p_94772_` (`int`)

**Returns:** `public void`

### getHotbarAlpha

```java
private float getHotbarAlpha()
```

**Returns:** `private float`

### renderHotbar

```java
public void renderHotbar(GuiGraphics p_281458_)
```

**Parameters:**

- `p_281458_` (`GuiGraphics`)

**Returns:** `public void`

### renderPage

```java
protected void renderPage(GuiGraphics p_282945_, float p_281688_, int p_281726_, int p_281730_, SpectatorPage p_282361_)
```

**Parameters:**

- `p_282945_` (`GuiGraphics`)
- `p_281688_` (`float`)
- `p_281726_` (`int`)
- `p_281730_` (`int`)
- `p_282361_` (`SpectatorPage`)

**Returns:** `protected void`

### renderSlot

```java
private void renderSlot(GuiGraphics p_281411_, int p_283536_, int p_281853_, float p_282693_, float p_281955_, SpectatorMenuItem p_283370_)
```

**Parameters:**

- `p_281411_` (`GuiGraphics`)
- `p_283536_` (`int`)
- `p_281853_` (`int`)
- `p_282693_` (`float`)
- `p_281955_` (`float`)
- `p_283370_` (`SpectatorMenuItem`)

**Returns:** `private void`

### renderTooltip

```java
public void renderTooltip(GuiGraphics p_283107_)
```

**Parameters:**

- `p_283107_` (`GuiGraphics`)

**Returns:** `public void`

### onSpectatorMenuClosed

```java
public void onSpectatorMenuClosed(SpectatorMenu p_94792_)
```

**Parameters:**

- `p_94792_` (`SpectatorMenu`)

### isMenuActive

```java
public boolean isMenuActive()
```

**Returns:** `public boolean`

### onMouseScrolled

```java
public void onMouseScrolled(int p_205381_)
```

**Parameters:**

- `p_205381_` (`int`)

**Returns:** `public void`

### onMouseMiddleClick

```java
public void onMouseMiddleClick()
```

**Returns:** `public void`
