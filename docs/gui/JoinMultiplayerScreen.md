# JoinMultiplayerScreen

**Package:** `net.minecraft.client.gui.screens.multiplayer`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BUTTON_ROW_WIDTH` | `int` |  |
| `TOP_ROW_BUTTON_WIDTH` | `int` |  |
| `LOWER_ROW_BUTTON_WIDTH` | `int` |  |
| `FOOTER_HEIGHT` | `int` |  |
| `serverSelectionList` | `ServerSelectionList` |  |

## Methods

### JoinMultiplayerScreen

```java
public JoinMultiplayerScreen(Screen p_99688_)
```

**Parameters:**

- `p_99688_` (`Screen`)

**Returns:** `public`

### init

```java
protected void init()
```

### onClose

```java
public void onClose()
```

### tick

```java
public void tick()
```

### removed

```java
public void removed()
```

### refreshServerList

```java
private void refreshServerList()
```

**Returns:** `private void`

### deleteCallback

```java
private void deleteCallback(boolean p_99712_)
```

**Parameters:**

- `p_99712_` (`boolean`)

**Returns:** `private void`

### editServerCallback

```java
private void editServerCallback(boolean p_99717_)
```

**Parameters:**

- `p_99717_` (`boolean`)

**Returns:** `private void`

### addServerCallback

```java
private void addServerCallback(boolean p_99722_)
```

**Parameters:**

- `p_99722_` (`boolean`)

**Returns:** `private void`

### directJoinCallback

```java
private void directJoinCallback(boolean p_99726_)
```

**Parameters:**

- `p_99726_` (`boolean`)

**Returns:** `private void`

### keyPressed

```java
public boolean keyPressed(int p_99690_, int p_99691_, int p_99692_)
```

**Parameters:**

- `p_99690_` (`int`)
- `p_99691_` (`int`)
- `p_99692_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_281617_, int p_281629_, int p_281983_, float p_283431_)
```

**Parameters:**

- `p_281617_` (`GuiGraphics`)
- `p_281629_` (`int`)
- `p_281983_` (`int`)
- `p_283431_` (`float`)

### joinSelectedServer

```java
public void joinSelectedServer()
```

**Returns:** `public void`

### join

```java
private void join(ServerData p_99703_)
```

**Parameters:**

- `p_99703_` (`ServerData`)

**Returns:** `private void`

### setSelected

```java
public void setSelected(ServerSelectionList.Entry p_99701_)
```

**Parameters:**

- `p_99701_` (`ServerSelectionList.Entry`)

**Returns:** `public void`

### onSelectedChange

```java
protected void onSelectedChange()
```

**Returns:** `protected void`

### getPinger

```java
public ServerStatusPinger getPinger()
```

**Returns:** `public ServerStatusPinger`

### getServers

```java
public ServerList getServers()
```

**Returns:** `public ServerList`
