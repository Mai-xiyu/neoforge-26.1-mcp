# Toast

**Package:** `net.minecraft.client.gui.components.toasts`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### render

```java
Toast.Visibility render(GuiGraphics p_281969_, ToastComponent p_94897_, long p_94898_)
```

**Parameters:**

- `p_281969_` (`GuiGraphics`)
- `p_94897_` (`ToastComponent`)
- `p_94898_` (`long`)

**Returns:** `Toast.Visibility`

### getToken

```java
default Object getToken()
```

**Returns:** `default Object`

### width

```java
default int width()
```

**Returns:** `default int`

### height

```java
default int height()
```

**Returns:** `default int`

### slotCount

```java
default int slotCount()
```

**Returns:** `default int`

### HIDE

```java
, HIDE()
```

**Returns:** `,`

### Visibility

```java
private Visibility(SoundEvent p_94908_)
```

**Parameters:**

- `p_94908_` (`SoundEvent`)

**Returns:** `private`

### playSound

```java
public void playSound(SoundManager p_94910_)
```

**Parameters:**

- `p_94910_` (`SoundManager`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Visibility` | enum |  |
