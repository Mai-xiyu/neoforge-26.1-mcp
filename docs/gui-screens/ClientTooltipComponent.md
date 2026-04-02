# ClientTooltipComponent

**Package:** `net.minecraft.client.gui.screens.inventory.tooltip`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### create

```java
static ClientTooltipComponent create(FormattedCharSequence p_169949_)
```

**Parameters:**

- `p_169949_` (`FormattedCharSequence`)

**Returns:** `static ClientTooltipComponent`

### ClientTextTooltip

```java
return new ClientTextTooltip()
```

**Returns:** `return new`

### create

```java
static ClientTooltipComponent create(TooltipComponent p_169951_)
```

**Parameters:**

- `p_169951_` (`TooltipComponent`)

**Returns:** `static ClientTooltipComponent`

### ClientActivePlayersTooltip

```java
return new ClientActivePlayersTooltip()
```

**Returns:** `return new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unknown TooltipComponent")
```

**Parameters:**

- `TooltipComponent"` (`"Unknown`)

**Returns:** `throw new`

### getHeight

```java
int getHeight()
```

**Returns:** `int`

### getWidth

```java
int getWidth(Font p_169952_)
```

**Parameters:**

- `p_169952_` (`Font`)

**Returns:** `int`

### renderText

```java
default void renderText(Font p_169953_, int p_169954_, int p_169955_, Matrix4f p_253692_, MultiBufferSource.BufferSource p_169957_)
```

**Parameters:**

- `p_169953_` (`Font`)
- `p_169954_` (`int`)
- `p_169955_` (`int`)
- `p_253692_` (`Matrix4f`)
- `p_169957_` (`MultiBufferSource.BufferSource`)

**Returns:** `default void`

### renderImage

```java
default void renderImage(Font p_194048_, int p_194049_, int p_194050_, GuiGraphics p_283459_)
```

**Parameters:**

- `p_194048_` (`Font`)
- `p_194049_` (`int`)
- `p_194050_` (`int`)
- `p_283459_` (`GuiGraphics`)

**Returns:** `default void`
