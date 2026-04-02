# StructureBlockEditScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### StructureBlockEditScreen

```java
public StructureBlockEditScreen(StructureBlockEntity p_99398_)
```

**Parameters:**

- `p_99398_` (`StructureBlockEntity`)

**Returns:** `public`

### onDone

```java
private void onDone()
```

**Returns:** `private void`

### onCancel

```java
private void onCancel()
```

**Returns:** `private void`

### init

```java
protected void init()
```

### charTyped

```java
public boolean charTyped(char p_99476_, int p_99477_)
```

**Parameters:**

- `p_99476_` (`char`)
- `p_99477_` (`int`)

**Returns:** `boolean`

### setInitialFocus

```java
protected void setInitialFocus()
```

### renderBackground

```java
public void renderBackground(GuiGraphics p_333749_, int p_333882_, int p_333946_, float p_334094_)
```

**Parameters:**

- `p_333749_` (`GuiGraphics`)
- `p_333882_` (`int`)
- `p_333946_` (`int`)
- `p_334094_` (`float`)

### resize

```java
public void resize(Minecraft p_99411_, int p_99412_, int p_99413_)
```

**Parameters:**

- `p_99411_` (`Minecraft`)
- `p_99412_` (`int`)
- `p_99413_` (`int`)

### updateDirectionButtons

```java
private void updateDirectionButtons()
```

**Returns:** `private void`

### updateMode

```java
private void updateMode(StructureMode p_169839_)
```

**Parameters:**

- `p_169839_` (`StructureMode`)

**Returns:** `private void`

### sendToServer

```java
private boolean sendToServer(StructureBlockEntity.UpdateType p_99404_)
```

**Parameters:**

- `p_99404_` (`StructureBlockEntity.UpdateType`)

**Returns:** `private boolean`

### parseSeed

```java
private long parseSeed(String p_99427_)
```

**Parameters:**

- `p_99427_` (`String`)

**Returns:** `private long`

### parseIntegrity

```java
private float parseIntegrity(String p_99431_)
```

**Parameters:**

- `p_99431_` (`String`)

**Returns:** `private float`

### parseCoordinate

```java
private int parseCoordinate(String p_99436_)
```

**Parameters:**

- `p_99436_` (`String`)

**Returns:** `private int`

### onClose

```java
public void onClose()
```

### keyPressed

```java
public boolean keyPressed(int p_99400_, int p_99401_, int p_99402_)
```

**Parameters:**

- `p_99400_` (`int`)
- `p_99401_` (`int`)
- `p_99402_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_281951_, int p_99407_, int p_99408_, float p_99409_)
```

**Parameters:**

- `p_281951_` (`GuiGraphics`)
- `p_99407_` (`int`)
- `p_99408_` (`int`)
- `p_99409_` (`float`)

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`
