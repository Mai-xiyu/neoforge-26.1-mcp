# RealmsGenericErrorScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsGenericErrorScreen

```java
public RealmsGenericErrorScreen(RealmsServiceException p_88669_, Screen p_88670_)
```

**Parameters:**

- `p_88669_` (`RealmsServiceException`)
- `p_88670_` (`Screen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RealmsGenericErrorScreen

```java
public RealmsGenericErrorScreen(Component p_88672_, Screen p_88673_)
```

**Parameters:**

- `p_88672_` (`Component`)
- `p_88673_` (`Screen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RealmsGenericErrorScreen

```java
public RealmsGenericErrorScreen(Component p_88675_, Component p_88676_, Screen p_88677_)
```

**Parameters:**

- `p_88675_` (`Component`)
- `p_88676_` (`Component`)
- `p_88677_` (`Screen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### errorMessage

```java
private static RealmsGenericErrorScreen.ErrorMessage errorMessage(RealmsServiceException p_288965_)
```

**Parameters:**

- `p_288965_` (`RealmsServiceException`)

**Returns:** `private static RealmsGenericErrorScreen.ErrorMessage`

### errorMessage

```java
private static RealmsGenericErrorScreen.ErrorMessage errorMessage(Component p_289003_)
```

**Parameters:**

- `p_289003_` (`Component`)

**Returns:** `private static RealmsGenericErrorScreen.ErrorMessage`

### errorMessage

```java
private static RealmsGenericErrorScreen.ErrorMessage errorMessage(Component p_289010_, Component p_289015_)
```

**Parameters:**

- `p_289010_` (`Component`)
- `p_289015_` (`Component`)

**Returns:** `private static RealmsGenericErrorScreen.ErrorMessage`

### init

```java
public void init()
```

### onClose

```java
public void onClose()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### keyPressed

```java
public boolean keyPressed(int key, int scanCode, int modifiers)
```

**Parameters:**

- `key` (`int`)
- `scanCode` (`int`)
- `modifiers` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_283497_, int p_88680_, int p_88681_, float p_88682_)
```

**Parameters:**

- `p_283497_` (`GuiGraphics`)
- `p_88680_` (`int`)
- `p_88681_` (`int`)
- `p_88682_` (`float`)

### ErrorMessage

```java
static record ErrorMessage(Component title, Component detail)
```

**Parameters:**

- `title` (`Component`)
- `detail` (`Component`)

**Returns:** `record`
