# RealmsConfigureWorldScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsConfigureWorldScreen

```java
public RealmsConfigureWorldScreen(RealmsMainScreen p_88411_, long p_88412_)
```

**Parameters:**

- `p_88411_` (`RealmsMainScreen`)
- `p_88412_` (`long`)

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

### addSlotButton

```java
private RealmsWorldSlotButton addSlotButton(int p_167386_)
```

**Parameters:**

- `p_167386_` (`int`)

**Returns:** `private RealmsWorldSlotButton`

### IllegalStateException

```java
throw new IllegalStateException("Unknown action " + realmsworldslotbutton$state.action)
```

**Parameters:**

- `realmsworldslotbutton$state.action` (`"Unknown action " +`)

**Returns:** `throw new`

### leftButton

```java
private int leftButton(int p_88464_)
```

**Parameters:**

- `p_88464_` (`int`)

**Returns:** `private int`

### centerButton

```java
private int centerButton(int p_88466_, int p_88467_)
```

**Parameters:**

- `p_88466_` (`int`)
- `p_88467_` (`int`)

**Returns:** `private int`

### render

```java
public void render(GuiGraphics p_282982_, int p_281739_, int p_283097_, float p_282528_)
```

**Parameters:**

- `p_282982_` (`GuiGraphics`)
- `p_281739_` (`int`)
- `p_283097_` (`int`)
- `p_282528_` (`float`)

### frame

```java
private int frame(int p_88488_)
```

**Parameters:**

- `p_88488_` (`int`)

**Returns:** `private int`

### onClose

```java
public void onClose()
```

### fetchServerData

```java
private void fetchServerData(long p_88427_)
```

**Parameters:**

- `p_88427_` (`long`)

**Returns:** `private void`

### disableButtons

```java
private void disableButtons()
```

**Returns:** `private void`

### joinRealm

```java
private void joinRealm(RealmsServer p_88439_)
```

**Parameters:**

- `p_88439_` (`RealmsServer`)

**Returns:** `private void`

### switchToMinigame

```java
private void switchToMinigame()
```

**Returns:** `private void`

### switchToFullSlot

```java
private void switchToFullSlot(int p_88421_, RealmsServer p_88422_)
```

**Parameters:**

- `p_88421_` (`int`)
- `p_88422_` (`RealmsServer`)

**Returns:** `private void`

### switchToEmptySlot

```java
private void switchToEmptySlot(int p_88469_, RealmsServer p_88470_)
```

**Parameters:**

- `p_88469_` (`int`)
- `p_88470_` (`RealmsServer`)

**Returns:** `private void`

### drawServerStatus

```java
private void drawServerStatus(GuiGraphics p_281709_, int p_88491_, int p_88492_, int p_88493_, int p_88494_)
```

**Parameters:**

- `p_281709_` (`GuiGraphics`)
- `p_88491_` (`int`)
- `p_88492_` (`int`)
- `p_88493_` (`int`)
- `p_88494_` (`int`)

**Returns:** `private void`

### drawRealmStatus

```java
private void drawRealmStatus(GuiGraphics p_299311_, int p_298280_, int p_298913_, int p_299030_, int p_299045_, ResourceLocation p_299141_, Supplier<Component> p_298702_)
```

**Parameters:**

- `p_299311_` (`GuiGraphics`)
- `p_298280_` (`int`)
- `p_298913_` (`int`)
- `p_299030_` (`int`)
- `p_299045_` (`int`)
- `p_299141_` (`ResourceLocation`)
- `p_298702_` (`Supplier<Component>`)

**Returns:** `private void`

### isMinigame

```java
private boolean isMinigame()
```

**Returns:** `private boolean`

### hideRegularButtons

```java
private void hideRegularButtons()
```

**Returns:** `private void`

### hide

```java
private void hide(Button p_88451_)
```

**Parameters:**

- `p_88451_` (`Button`)

**Returns:** `private void`

### show

```java
private void show(Button p_88485_)
```

**Parameters:**

- `p_88485_` (`Button`)

**Returns:** `private void`

### hideMinigameButtons

```java
private void hideMinigameButtons()
```

**Returns:** `private void`

### saveSlotSettings

```java
public void saveSlotSettings(RealmsWorldOptions p_88445_)
```

**Parameters:**

- `p_88445_` (`RealmsWorldOptions`)

**Returns:** `public void`

### saveSettings

```java
public void saveSettings(String p_88455_, String p_88456_)
```

**Parameters:**

- `p_88455_` (`String`)
- `p_88456_` (`String`)

**Returns:** `public void`

### openTheWorld

```java
public void openTheWorld(boolean p_88460_)
```

**Parameters:**

- `p_88460_` (`boolean`)

**Returns:** `public void`

### closeTheWorld

```java
public void closeTheWorld()
```

**Returns:** `public void`

### stateChanged

```java
public void stateChanged()
```

**Returns:** `public void`

### templateSelectionCallback

```java
private void templateSelectionCallback(WorldTemplate p_167395_)
```

**Parameters:**

- `p_167395_` (`WorldTemplate`)

**Returns:** `private void`

### getNewScreen

```java
public RealmsConfigureWorldScreen getNewScreen()
```

**Returns:** `public RealmsConfigureWorldScreen`
