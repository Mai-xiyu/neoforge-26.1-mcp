# UnsupportedGraphicsWarningScreen

**Package:** `net.minecraft.client.gui.screens.options`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### UnsupportedGraphicsWarningScreen

```java
protected UnsupportedGraphicsWarningScreen(Component p_344923_, List<Component> p_344787_, ImmutableList<UnsupportedGraphicsWarningScreen.ButtonOption> p_346327_)
```

**Parameters:**

- `p_344923_` (`Component`)
- `p_344787_` (`List<Component>`)
- `p_346327_` (`ImmutableList<UnsupportedGraphicsWarningScreen.ButtonOption>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### init

```java
public void init()
```

### render

```java
public void render(GuiGraphics p_345032_, int p_345965_, int p_345120_, float p_346047_)
```

**Parameters:**

- `p_345032_` (`GuiGraphics`)
- `p_345965_` (`int`)
- `p_345120_` (`int`)
- `p_346047_` (`float`)

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### ButtonOption

```java
public ButtonOption(Component p_346062_, Button.OnPress p_345795_)
```

**Parameters:**

- `p_346062_` (`Component`)
- `p_345795_` (`Button.OnPress`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ButtonOption` | class |  |
