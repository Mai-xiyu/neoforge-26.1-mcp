# RealmsResetWorldScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CREATE_WORLD_RESET_TASK_TITLE` | `Component` |  |
| `slot` | `int` |  |

## Methods

### RealmsResetWorldScreen

```java
private RealmsResetWorldScreen(Screen p_89329_, RealmsServer p_89330_, int p_300857_, Component p_301121_, Component p_300859_, int p_300978_, Component p_300942_, Runnable p_89331_)
```

**Parameters:**

- `p_89329_` (`Screen`)
- `p_89330_` (`RealmsServer`)
- `p_300857_` (`int`)
- `p_301121_` (`Component`)
- `p_300859_` (`Component`)
- `p_300978_` (`int`)
- `p_300942_` (`Component`)
- `p_89331_` (`Runnable`)

**Returns:** `private`

### this

```java
 this()
```

**Returns:** ``

### RealmsResetWorldScreen

```java
public RealmsResetWorldScreen(Screen p_306282_, RealmsServer p_306292_, int p_305906_, Component p_306014_, Component p_306028_, int p_306044_, Component p_306316_, RealmCreationTask p_320691_, Runnable p_306029_)
```

**Parameters:**

- `p_306282_` (`Screen`)
- `p_306292_` (`RealmsServer`)
- `p_305906_` (`int`)
- `p_306014_` (`Component`)
- `p_306028_` (`Component`)
- `p_306044_` (`int`)
- `p_306316_` (`Component`)
- `p_320691_` (`RealmCreationTask`)
- `p_306029_` (`Runnable`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### forNewRealm

```java
public static RealmsResetWorldScreen forNewRealm(Screen p_300881_, RealmsServer p_301228_, RealmCreationTask p_320942_, Runnable p_300926_)
```

**Parameters:**

- `p_300881_` (`Screen`)
- `p_301228_` (`RealmsServer`)
- `p_320942_` (`RealmCreationTask`)
- `p_300926_` (`Runnable`)

**Returns:** `public static RealmsResetWorldScreen`

### RealmsResetWorldScreen

```java
return new RealmsResetWorldScreen()
```

**Returns:** `return new`

### forEmptySlot

```java
public static RealmsResetWorldScreen forEmptySlot(Screen p_300943_, int p_301275_, RealmsServer p_301312_, Runnable p_301297_)
```

**Parameters:**

- `p_300943_` (`Screen`)
- `p_301275_` (`int`)
- `p_301312_` (`RealmsServer`)
- `p_301297_` (`Runnable`)

**Returns:** `public static RealmsResetWorldScreen`

### RealmsResetWorldScreen

```java
return new RealmsResetWorldScreen()
```

**Returns:** `return new`

### forResetSlot

```java
public static RealmsResetWorldScreen forResetSlot(Screen p_301039_, RealmsServer p_300914_, Runnable p_301017_)
```

**Parameters:**

- `p_301039_` (`Screen`)
- `p_300914_` (`RealmsServer`)
- `p_301017_` (`Runnable`)

**Returns:** `public static RealmsResetWorldScreen`

### RealmsResetWorldScreen

```java
return new RealmsResetWorldScreen()
```

**Returns:** `return new`

### init

```java
public void init()
```

### run

```java
public void run()
```

### repositionElements

```java
protected void repositionElements()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### onClose

```java
public void onClose()
```

### templateSelectionCallback

```java
private void templateSelectionCallback(WorldTemplate p_167454_)
```

**Parameters:**

- `p_167454_` (`WorldTemplate`)

**Returns:** `private void`

### generationSelectionCallback

```java
private void generationSelectionCallback(WorldGenerationInfo p_167456_)
```

**Parameters:**

- `p_167456_` (`WorldGenerationInfo`)

**Returns:** `private void`

### runResetTasks

```java
private void runResetTasks(LongRunningTask p_305864_)
```

**Parameters:**

- `p_305864_` (`LongRunningTask`)

**Returns:** `private void`

### FrameButton

```java
 FrameButton(Font p_335556_, Component p_89441_, ResourceLocation p_89442_, Button.OnPress p_89443_)
```

**Parameters:**

- `p_335556_` (`Font`)
- `p_89441_` (`Component`)
- `p_89442_` (`ResourceLocation`)
- `p_89443_` (`Button.OnPress`)

**Returns:** ``

### super

```java
 super(60 + 9)
```

**Parameters:**

- `9` (`60 +`)

**Returns:** ``

### renderWidget

```java
public void renderWidget(GuiGraphics p_282595_, int p_282741_, int p_283560_, float p_281923_)
```

**Parameters:**

- `p_282595_` (`GuiGraphics`)
- `p_282741_` (`int`)
- `p_283560_` (`int`)
- `p_281923_` (`float`)
