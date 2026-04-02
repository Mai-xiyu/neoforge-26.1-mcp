# OptionsScreen

**Package:** `net.minecraft.client.gui.screens.options`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### OptionsScreen

```java
public OptionsScreen(Screen p_346430_, Options p_344748_)
```

**Parameters:**

- `p_346430_` (`Screen`)
- `p_344748_` (`Options`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### repositionElements

```java
protected void repositionElements()
```

### onClose

```java
public void onClose()
```

### applyPacks

```java
private void applyPacks(PackRepository p_345689_)
```

**Parameters:**

- `p_345689_` (`PackRepository`)

**Returns:** `private void`

### createOnlineButton

```java
private LayoutElement createOnlineButton()
```

**Returns:** `private LayoutElement`

### createDifficultyButton

```java
public static CycleButton<Difficulty> createDifficultyButton(int p_346201_, int p_346398_, String p_346029_, Minecraft p_345232_)
```

**Parameters:**

- `p_346201_` (`int`)
- `p_346398_` (`int`)
- `p_346029_` (`String`)
- `p_345232_` (`Minecraft`)

**Returns:** `public static CycleButton<Difficulty>`

### lockCallback

```java
private void lockCallback(boolean p_346102_)
```

**Parameters:**

- `p_346102_` (`boolean`)

**Returns:** `private void`

### removed

```java
public void removed()
```

### openScreenButton

```java
private Button openScreenButton(Component p_345646_, Supplier<Screen> p_345565_)
```

**Parameters:**

- `p_345646_` (`Component`)
- `p_345565_` (`Supplier<Screen>`)

**Returns:** `private Button`
