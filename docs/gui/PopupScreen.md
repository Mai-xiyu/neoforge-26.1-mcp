# PopupScreen

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PopupScreen

```java
 PopupScreen(Screen p_304589_, int p_304486_, ResourceLocation p_304853_, Component p_304839_, Component p_304571_, List<PopupScreen.ButtonOption> p_304767_, Runnable p_304826_)
```

**Parameters:**

- `p_304589_` (`Screen`)
- `p_304486_` (`int`)
- `p_304853_` (`ResourceLocation`)
- `p_304839_` (`Component`)
- `p_304571_` (`Component`)
- `p_304767_` (`List<PopupScreen.ButtonOption>`)
- `p_304826_` (`Runnable`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### added

```java
public void added()
```

### init

```java
protected void init()
```

### buildButtonRow

```java
private LinearLayout buildButtonRow()
```

**Returns:** `private LinearLayout`

### repositionElements

```java
protected void repositionElements()
```

### renderBackground

```java
public void renderBackground(GuiGraphics p_304909_, int p_304478_, int p_304974_, float p_304456_)
```

**Parameters:**

- `p_304909_` (`GuiGraphics`)
- `p_304478_` (`int`)
- `p_304974_` (`int`)
- `p_304456_` (`float`)

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### onClose

```java
public void onClose()
```

### Builder

```java
public Builder(Screen p_304648_, Component p_304584_)
```

**Parameters:**

- `p_304648_` (`Screen`)
- `p_304584_` (`Component`)

**Returns:** `public`

### setWidth

```java
public PopupScreen.Builder setWidth(int p_304576_)
```

**Parameters:**

- `p_304576_` (`int`)

**Returns:** `public PopupScreen.Builder`

### setImage

```java
public PopupScreen.Builder setImage(ResourceLocation p_304597_)
```

**Parameters:**

- `p_304597_` (`ResourceLocation`)

**Returns:** `public PopupScreen.Builder`

### setMessage

```java
public PopupScreen.Builder setMessage(Component p_304550_)
```

**Parameters:**

- `p_304550_` (`Component`)

**Returns:** `public PopupScreen.Builder`

### addButton

```java
public PopupScreen.Builder addButton(Component p_304733_, Consumer<PopupScreen> p_304537_)
```

**Parameters:**

- `p_304733_` (`Component`)
- `p_304537_` (`Consumer<PopupScreen>`)

**Returns:** `public PopupScreen.Builder`

### onClose

```java
public PopupScreen.Builder onClose(Runnable p_304557_)
```

**Parameters:**

- `p_304557_` (`Runnable`)

**Returns:** `public PopupScreen.Builder`

### build

```java
public PopupScreen build()
```

**Returns:** `public PopupScreen`

### IllegalStateException

```java
throw new IllegalStateException("Popup must have at least one button")
```

**Parameters:**

- `button"` (`"Popup must have at least one`)

**Returns:** `throw new`

### ButtonOption

```java
static record ButtonOption(Component message, Consumer<PopupScreen> action)
```

**Parameters:**

- `message` (`Component`)
- `action` (`Consumer<PopupScreen>`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
