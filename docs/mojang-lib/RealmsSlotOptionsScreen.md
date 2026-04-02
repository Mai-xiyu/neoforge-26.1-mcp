# RealmsSlotOptionsScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIFFICULTIES` | `List<Difficulty>` |  |
| `GAME_MODES` | `List<GameType>` |  |
| `parentScreen` | `RealmsConfigureWorldScreen` |  |

## Methods

### RealmsSlotOptionsScreen

```java
public RealmsSlotOptionsScreen(RealmsConfigureWorldScreen p_89886_, RealmsWorldOptions p_89887_, RealmsServer.WorldType p_89888_, int p_89889_)
```

**Parameters:**

- `p_89886_` (`RealmsConfigureWorldScreen`)
- `p_89887_` (`RealmsWorldOptions`)
- `p_89888_` (`RealmsServer.WorldType`)
- `p_89889_` (`int`)

**Returns:** `public`

### onClose

```java
public void onClose()
```

### findByIndex

```java
<T> private static <T> T findByIndex(List<T> p_167525_, int p_167526_, int p_167527_)
```

**Parameters:**

- `p_167525_` (`List<T>`)
- `p_167526_` (`int`)
- `p_167527_` (`int`)

**Returns:** `private static <T> T`

### findIndex

```java
<T> private static <T> int findIndex(List<T> p_167529_, T p_167530_, int p_167531_)
```

**Parameters:**

- `p_167529_` (`List<T>`)
- `p_167530_` (`T`)
- `p_167531_` (`int`)

**Returns:** `private static <T> int`

### init

```java
public void init()
```

### confirmDangerousOption

```java
private CycleButton.OnValueChange<Boolean> confirmDangerousOption(Component p_231324_, Consumer<Boolean> p_231325_)
```

**Parameters:**

- `p_231324_` (`Component`)
- `p_231325_` (`Consumer<Boolean>`)

**Returns:** `private CycleButton.OnValueChange<Boolean>`

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics p_283210_, int p_283172_, int p_281531_, float p_283191_)
```

**Parameters:**

- `p_283210_` (`GuiGraphics`)
- `p_283172_` (`int`)
- `p_281531_` (`int`)
- `p_283191_` (`float`)

### setWorldName

```java
private void setWorldName(String p_231314_)
```

**Parameters:**

- `p_231314_` (`String`)

**Returns:** `private void`

### saveSettings

```java
private void saveSettings()
```

**Returns:** `private void`

### SettingsSlider

```java
public SettingsSlider(int p_89946_, int p_89947_, int p_89948_, int p_89949_, float p_89950_, float p_89951_)
```

**Parameters:**

- `p_89946_` (`int`)
- `p_89947_` (`int`)
- `p_89948_` (`int`)
- `p_89949_` (`int`)
- `p_89950_` (`float`)
- `p_89951_` (`float`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### applyValue

```java
public void applyValue()
```

### updateMessage

```java
protected void updateMessage()
```
