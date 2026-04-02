# ToastComponent

**Package:** `net.minecraft.client.gui.components.toasts`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ToastComponent

```java
public ToastComponent(Minecraft p_94918_)
```

**Parameters:**

- `p_94918_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_283249_)
```

**Parameters:**

- `p_283249_` (`GuiGraphics`)

**Returns:** `public void`

### findFreeIndex

```java
private int findFreeIndex(int p_243272_)
```

**Parameters:**

- `p_243272_` (`int`)

**Returns:** `private int`

### freeSlots

```java
private int freeSlots()
```

**Returns:** `private int`

### getToast

```java
public <T extends Toast> T getToast(Class<? extends T> p_94927_, Object p_94928_)
```

**Parameters:**

- `p_94927_` (`Class<? extends T>`)
- `p_94928_` (`Object`)

**Returns:** `T`

### clear

```java
public void clear()
```

**Returns:** `public void`

### addToast

```java
public void addToast(Toast p_94923_)
```

**Parameters:**

- `p_94923_` (`Toast`)

**Returns:** `public void`

### getMinecraft

```java
public Minecraft getMinecraft()
```

**Returns:** `public Minecraft`

### getNotificationDisplayTimeMultiplier

```java
public double getNotificationDisplayTimeMultiplier()
```

**Returns:** `public double`

### ToastInstance

```java
 ToastInstance(T p_243319_, int p_243300_, int p_243224_)
```

**Parameters:**

- `p_243319_` (`T`)
- `p_243300_` (`int`)
- `p_243224_` (`int`)

**Returns:** ``

### getToast

```java
public T getToast()
```

**Returns:** `public T`

### getVisibility

```java
private float getVisibility(long p_94948_)
```

**Parameters:**

- `p_94948_` (`long`)

**Returns:** `private float`

### render

```java
public boolean render(int p_282887_, GuiGraphics p_283668_)
```

**Parameters:**

- `p_282887_` (`int`)
- `p_283668_` (`GuiGraphics`)

**Returns:** `public boolean`
