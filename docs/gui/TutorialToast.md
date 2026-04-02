# TutorialToast

**Package:** `net.minecraft.client.gui.components.toasts`
**Type:** class
**Implements:** `Toast`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PROGRESS_BAR_WIDTH` | `int` |  |
| `PROGRESS_BAR_HEIGHT` | `int` |  |
| `PROGRESS_BAR_X` | `int` |  |
| `PROGRESS_BAR_Y` | `int` |  |

## Methods

### TutorialToast

```java
public TutorialToast(TutorialToast.Icons p_94958_, Component p_94959_, Component p_94960_, boolean p_94961_)
```

**Parameters:**

- `p_94958_` (`TutorialToast.Icons`)
- `p_94959_` (`Component`)
- `p_94960_` (`Component`)
- `p_94961_` (`boolean`)

**Returns:** `public`

### render

```java
public Toast.Visibility render(GuiGraphics p_283197_, ToastComponent p_283009_, long p_281902_)
```

**Parameters:**

- `p_283197_` (`GuiGraphics`)
- `p_283009_` (`ToastComponent`)
- `p_281902_` (`long`)

**Returns:** `Toast.Visibility`

### hide

```java
public void hide()
```

**Returns:** `public void`

### updateProgress

```java
public void updateProgress(float p_94963_)
```

**Parameters:**

- `p_94963_` (`float`)

**Returns:** `public void`

### Icons

```java
private Icons(ResourceLocation p_295332_)
```

**Parameters:**

- `p_295332_` (`ResourceLocation`)

**Returns:** `private`

### render

```java
public void render(GuiGraphics p_282818_, int p_283064_, int p_282765_)
```

**Parameters:**

- `p_282818_` (`GuiGraphics`)
- `p_283064_` (`int`)
- `p_282765_` (`int`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Icons` | enum |  |
