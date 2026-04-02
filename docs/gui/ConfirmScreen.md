# ConfirmScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `yesButton` | `Component` |  |
| `noButton` | `Component` |  |
| `callback` | `BooleanConsumer` |  |

## Methods

### ConfirmScreen

```java
public ConfirmScreen(BooleanConsumer p_95654_, Component p_95655_, Component p_95656_)
```

**Parameters:**

- `p_95654_` (`BooleanConsumer`)
- `p_95655_` (`Component`)
- `p_95656_` (`Component`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ConfirmScreen

```java
public ConfirmScreen(BooleanConsumer p_95658_, Component p_95659_, Component p_95660_, Component p_95661_, Component p_95662_)
```

**Parameters:**

- `p_95658_` (`BooleanConsumer`)
- `p_95659_` (`Component`)
- `p_95660_` (`Component`)
- `p_95661_` (`Component`)
- `p_95662_` (`Component`)

**Returns:** `public`

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
protected void init()
```

### addButtons

```java
protected void addButtons(int p_169252_)
```

**Parameters:**

- `p_169252_` (`int`)

**Returns:** `protected void`

### addExitButton

```java
protected void addExitButton(Button p_169254_)
```

**Parameters:**

- `p_169254_` (`Button`)

**Returns:** `protected void`

### render

```java
public void render(GuiGraphics p_281588_, int p_283592_, int p_283446_, float p_282443_)
```

**Parameters:**

- `p_281588_` (`GuiGraphics`)
- `p_283592_` (`int`)
- `p_283446_` (`int`)
- `p_282443_` (`float`)

### titleTop

```java
private int titleTop()
```

**Returns:** `private int`

### messageTop

```java
private int messageTop()
```

**Returns:** `private int`

### messageHeight

```java
private int messageHeight()
```

**Returns:** `private int`

### setDelay

```java
public void setDelay(int p_95664_)
```

**Parameters:**

- `p_95664_` (`int`)

**Returns:** `public void`

### tick

```java
public void tick()
```

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_95666_, int p_95667_, int p_95668_)
```

**Parameters:**

- `p_95666_` (`int`)
- `p_95667_` (`int`)
- `p_95668_` (`int`)

**Returns:** `boolean`
