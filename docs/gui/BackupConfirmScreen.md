# BackupConfirmScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `onProceed` | `BackupConfirmScreen.Listener` |  |
| `id` | `int` |  |

## Methods

### BackupConfirmScreen

```java
public BackupConfirmScreen(Runnable p_307341_, BackupConfirmScreen.Listener p_95544_, Component p_95545_, Component p_95546_, boolean p_95547_)
```

**Parameters:**

- `p_307341_` (`Runnable`)
- `p_95544_` (`BackupConfirmScreen.Listener`)
- `p_95545_` (`Component`)
- `p_95546_` (`Component`)
- `p_95547_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### render

```java
public void render(GuiGraphics p_282759_, int p_282356_, int p_282725_, float p_281518_)
```

**Parameters:**

- `p_282759_` (`GuiGraphics`)
- `p_282356_` (`int`)
- `p_282725_` (`int`)
- `p_281518_` (`float`)

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_95549_, int p_95550_, int p_95551_)
```

**Parameters:**

- `p_95549_` (`int`)
- `p_95550_` (`int`)
- `p_95551_` (`int`)

**Returns:** `boolean`

### proceed

```java
void proceed(boolean p_95566_, boolean p_95567_)
```

**Parameters:**

- `p_95566_` (`boolean`)
- `p_95567_` (`boolean`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Listener` | interface |  |
