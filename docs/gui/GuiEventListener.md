# GuiEventListener

**Package:** `net.minecraft.client.gui.components.events`
**Type:** interface
**Extends:** `TabOrderedElement`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### mouseMoved

```java
default void mouseMoved(double p_94758_, double p_94759_)
```

**Parameters:**

- `p_94758_` (`double`)
- `p_94759_` (`double`)

**Returns:** `default void`

### mouseClicked

```java
default boolean mouseClicked(double p_94737_, double p_94738_, int p_94739_)
```

**Parameters:**

- `p_94737_` (`double`)
- `p_94738_` (`double`)
- `p_94739_` (`int`)

**Returns:** `default boolean`

### mouseReleased

```java
default boolean mouseReleased(double p_94753_, double p_94754_, int p_94755_)
```

**Parameters:**

- `p_94753_` (`double`)
- `p_94754_` (`double`)
- `p_94755_` (`int`)

**Returns:** `default boolean`

### mouseDragged

```java
default boolean mouseDragged(double p_94740_, double p_94741_, int p_94742_, double p_94743_, double p_94744_)
```

**Parameters:**

- `p_94740_` (`double`)
- `p_94741_` (`double`)
- `p_94742_` (`int`)
- `p_94743_` (`double`)
- `p_94744_` (`double`)

**Returns:** `default boolean`

### mouseScrolled

```java
default boolean mouseScrolled(double p_94734_, double p_94735_, double p_94736_, double p_296070_)
```

**Parameters:**

- `p_94734_` (`double`)
- `p_94735_` (`double`)
- `p_94736_` (`double`)
- `p_296070_` (`double`)

**Returns:** `default boolean`

### keyPressed

```java
default boolean keyPressed(int p_94745_, int p_94746_, int p_94747_)
```

**Parameters:**

- `p_94745_` (`int`)
- `p_94746_` (`int`)
- `p_94747_` (`int`)

**Returns:** `default boolean`

### keyReleased

```java
default boolean keyReleased(int p_94750_, int p_94751_, int p_94752_)
```

**Parameters:**

- `p_94750_` (`int`)
- `p_94751_` (`int`)
- `p_94752_` (`int`)

**Returns:** `default boolean`

### charTyped

```java
default boolean charTyped(char p_94732_, int p_94733_)
```

**Parameters:**

- `p_94732_` (`char`)
- `p_94733_` (`int`)

**Returns:** `default boolean`

### nextFocusPath

```java
default ComponentPath nextFocusPath(FocusNavigationEvent p_265234_)
```

**Parameters:**

- `p_265234_` (`FocusNavigationEvent`)

**Returns:** `ComponentPath`

### isMouseOver

```java
default boolean isMouseOver(double p_94748_, double p_94749_)
```

**Parameters:**

- `p_94748_` (`double`)
- `p_94749_` (`double`)

**Returns:** `default boolean`

### setFocused

```java
void setFocused(boolean p_265728_)
```

**Parameters:**

- `p_265728_` (`boolean`)

### isFocused

```java
boolean isFocused()
```

**Returns:** `boolean`

### getCurrentFocusPath

```java
default ComponentPath getCurrentFocusPath()
```

**Returns:** `ComponentPath`

### getRectangle

```java
default ScreenRectangle getRectangle()
```

**Returns:** `default ScreenRectangle`
