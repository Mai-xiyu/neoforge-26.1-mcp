# ConnectScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ABORT_CONNECTION` | `Component` |  |
| `UNKNOWN_HOST_MESSAGE` | `Component` |  |

## Methods

### ConnectScreen

```java
private ConnectScreen(Screen p_279215_, Component p_279228_)
```

**Parameters:**

- `p_279215_` (`Screen`)
- `p_279228_` (`Component`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### startConnecting

```java
public static void startConnecting(Screen p_279473_, Minecraft p_279200_, ServerAddress p_279150_, ServerData p_279481_, boolean p_279117_, TransferState p_320013_)
```

**Parameters:**

- `p_279473_` (`Screen`)
- `p_279200_` (`Minecraft`)
- `p_279150_` (`ServerAddress`)
- `p_279481_` (`ServerData`)
- `p_279117_` (`boolean`)
- `p_320013_` (`TransferState`)

**Returns:** `public static void`

### connect

```java
private void connect(Minecraft p_251955_, ServerAddress p_249536_, ServerData p_252078_, TransferState p_320415_)
```

**Parameters:**

- `p_251955_` (`Minecraft`)
- `p_249536_` (`ServerAddress`)
- `p_252078_` (`ServerData`)
- `p_320415_` (`TransferState`)

**Returns:** `private void`

### run

```java
public void run()
```

### synchronized

```java
 synchronized()
```

**Returns:** ``

### synchronized

```java
 synchronized()
```

**Returns:** ``

### convertPackStatus

```java
private static ServerPackManager.PackPromptStatus convertPackStatus(ServerData.ServerPackStatus p_314423_)
```

**Parameters:**

- `p_314423_` (`ServerData.ServerPackStatus`)

**Returns:** `private static ServerPackManager.PackPromptStatus`

### updateStatus

```java
private void updateStatus(Component p_95718_)
```

**Parameters:**

- `p_95718_` (`Component`)

**Returns:** `private void`

### tick

```java
public void tick()
```

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### init

```java
protected void init()
```

### synchronized

```java
 synchronized()
```

**Returns:** ``

### render

```java
public void render(GuiGraphics p_283201_, int p_95701_, int p_95702_, float p_95703_)
```

**Parameters:**

- `p_283201_` (`GuiGraphics`)
- `p_95701_` (`int`)
- `p_95702_` (`int`)
- `p_95703_` (`float`)
