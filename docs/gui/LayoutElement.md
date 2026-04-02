# LayoutElement

**Package:** `net.minecraft.client.gui.layouts`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### setX

```java
void setX(int p_265236_)
```

**Parameters:**

- `p_265236_` (`int`)

### setY

```java
void setY(int p_265404_)
```

**Parameters:**

- `p_265404_` (`int`)

### getX

```java
int getX()
```

**Returns:** `int`

### getY

```java
int getY()
```

**Returns:** `int`

### getWidth

```java
int getWidth()
```

**Returns:** `int`

### getHeight

```java
int getHeight()
```

**Returns:** `int`

### getRectangle

```java
default ScreenRectangle getRectangle()
```

**Returns:** `default ScreenRectangle`

### setPosition

```java
default void setPosition(int p_265617_, int p_265577_)
```

**Parameters:**

- `p_265617_` (`int`)
- `p_265577_` (`int`)

**Returns:** `default void`

### visitWidgets

```java
void visitWidgets(Consumer<AbstractWidget> p_265082_)
```

**Parameters:**

- `p_265082_` (`Consumer<AbstractWidget>`)
