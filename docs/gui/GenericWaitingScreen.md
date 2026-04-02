# GenericWaitingScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### createWaiting

```java
public static GenericWaitingScreen createWaiting(Component p_240310_, Component p_240311_, Runnable p_240312_)
```

**Parameters:**

- `p_240310_` (`Component`)
- `p_240311_` (`Component`)
- `p_240312_` (`Runnable`)

**Returns:** `public static GenericWaitingScreen`

### GenericWaitingScreen

```java
return new GenericWaitingScreen()
```

**Returns:** `return new`

### createCompleted

```java
public static GenericWaitingScreen createCompleted(Component p_240291_, Component p_240292_, Component p_240293_, Runnable p_240294_)
```

**Parameters:**

- `p_240291_` (`Component`)
- `p_240292_` (`Component`)
- `p_240293_` (`Component`)
- `p_240294_` (`Runnable`)

**Returns:** `public static GenericWaitingScreen`

### GenericWaitingScreen

```java
return new GenericWaitingScreen()
```

**Returns:** `return new`

### GenericWaitingScreen

```java
protected GenericWaitingScreen(Component p_240300_, Component p_240301_, Component p_240302_, Runnable p_240303_, int p_240304_)
```

**Parameters:**

- `p_240300_` (`Component`)
- `p_240301_` (`Component`)
- `p_240302_` (`Component`)
- `p_240303_` (`Runnable`)
- `p_240304_` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### tick

```java
public void tick()
```

### render

```java
public void render(GuiGraphics p_283537_, int p_239719_, int p_239720_, float p_239721_)
```

**Parameters:**

- `p_283537_` (`GuiGraphics`)
- `p_239719_` (`int`)
- `p_239720_` (`int`)
- `p_239721_` (`float`)

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### onClose

```java
public void onClose()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`
