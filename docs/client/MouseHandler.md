# MouseHandler

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MouseHandler

```java
public MouseHandler(Minecraft p_91522_)
```

**Parameters:**

- `p_91522_` (`Minecraft`)

**Returns:** `public`

### onPress

```java
private void onPress(long p_91531_, int p_91532_, int p_91533_, int p_91534_)
```

**Parameters:**

- `p_91531_` (`long`)
- `p_91532_` (`int`)
- `p_91533_` (`int`)
- `p_91534_` (`int`)

**Returns:** `private void`

### onScroll

```java
private void onScroll(long p_91527_, double p_91528_, double p_91529_)
```

**Parameters:**

- `p_91527_` (`long`)
- `p_91528_` (`double`)
- `p_91529_` (`double`)

**Returns:** `private void`

### onDrop

```java
private void onDrop(long p_91540_, List<Path> p_91541_, int p_350707_)
```

**Parameters:**

- `p_91540_` (`long`)
- `p_91541_` (`List<Path>`)
- `p_350707_` (`int`)

**Returns:** `private void`

### setup

```java
public void setup(long p_91525_)
```

**Parameters:**

- `p_91525_` (`long`)

**Returns:** `public void`

### onMove

```java
private void onMove(long p_91562_, double p_91563_, double p_91564_)
```

**Parameters:**

- `p_91562_` (`long`)
- `p_91563_` (`double`)
- `p_91564_` (`double`)

**Returns:** `private void`

### handleAccumulatedMovement

```java
public void handleAccumulatedMovement()
```

**Returns:** `public void`

### turnPlayer

```java
private void turnPlayer(double p_316356_)
```

**Parameters:**

- `p_316356_` (`double`)

**Returns:** `private void`

### isLeftPressed

```java
public boolean isLeftPressed()
```

**Returns:** `public boolean`

### isMiddlePressed

```java
public boolean isMiddlePressed()
```

**Returns:** `public boolean`

### isRightPressed

```java
public boolean isRightPressed()
```

**Returns:** `public boolean`

### xpos

```java
public double xpos()
```

**Returns:** `public double`

### ypos

```java
public double ypos()
```

**Returns:** `public double`

### getXVelocity

```java
public double getXVelocity()
```

**Returns:** `public double`

### getYVelocity

```java
public double getYVelocity()
```

**Returns:** `public double`

### setIgnoreFirstMove

```java
public void setIgnoreFirstMove()
```

**Returns:** `public void`

### isMouseGrabbed

```java
public boolean isMouseGrabbed()
```

**Returns:** `public boolean`

### grabMouse

```java
public void grabMouse()
```

**Returns:** `public void`

### releaseMouse

```java
public void releaseMouse()
```

**Returns:** `public void`

### cursorEntered

```java
public void cursorEntered()
```

**Returns:** `public void`
