# ChatScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MOUSE_SCROLL_SPEED` | `double` |  |
| `input` | `EditBox` |  |

## Methods

### ChatScreen

```java
public ChatScreen(String p_95579_)
```

**Parameters:**

- `p_95579_` (`String`)

**Returns:** `public`

### init

```java
protected void init()
```

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### setInitialFocus

```java
protected void setInitialFocus()
```

### resize

```java
public void resize(Minecraft p_95600_, int p_95601_, int p_95602_)
```

**Parameters:**

- `p_95600_` (`Minecraft`)
- `p_95601_` (`int`)
- `p_95602_` (`int`)

### removed

```java
public void removed()
```

### onEdited

```java
private void onEdited(String p_95611_)
```

**Parameters:**

- `p_95611_` (`String`)

**Returns:** `private void`

### keyPressed

```java
public boolean keyPressed(int p_95591_, int p_95592_, int p_95593_)
```

**Parameters:**

- `p_95591_` (`int`)
- `p_95592_` (`int`)
- `p_95593_` (`int`)

**Returns:** `boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_95581_, double p_95582_, double p_95583_, double p_295977_)
```

**Parameters:**

- `p_95581_` (`double`)
- `p_95582_` (`double`)
- `p_95583_` (`double`)
- `p_295977_` (`double`)

**Returns:** `boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_95585_, double p_95586_, int p_95587_)
```

**Parameters:**

- `p_95585_` (`double`)
- `p_95586_` (`double`)
- `p_95587_` (`int`)

**Returns:** `boolean`

### insertText

```java
protected void insertText(String p_95606_, boolean p_95607_)
```

**Parameters:**

- `p_95606_` (`String`)
- `p_95607_` (`boolean`)

### moveInHistory

```java
public void moveInHistory(int p_95589_)
```

**Parameters:**

- `p_95589_` (`int`)

**Returns:** `public void`

### render

```java
public void render(GuiGraphics p_282470_, int p_282674_, int p_282014_, float p_283132_)
```

**Parameters:**

- `p_282470_` (`GuiGraphics`)
- `p_282674_` (`int`)
- `p_282014_` (`int`)
- `p_283132_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_295929_, int p_296130_, int p_296353_, float p_294668_)
```

**Parameters:**

- `p_295929_` (`GuiGraphics`)
- `p_296130_` (`int`)
- `p_296353_` (`int`)
- `p_294668_` (`float`)

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### setChatLine

```java
private void setChatLine(String p_95613_)
```

**Parameters:**

- `p_95613_` (`String`)

**Returns:** `private void`

### updateNarrationState

```java
protected void updateNarrationState(NarrationElementOutput p_169238_)
```

**Parameters:**

- `p_169238_` (`NarrationElementOutput`)

### handleChatInput

```java
public void handleChatInput(String p_242400_, boolean p_242161_)
```

**Parameters:**

- `p_242400_` (`String`)
- `p_242161_` (`boolean`)

**Returns:** `public void`

### normalizeChatMessage

```java
public String normalizeChatMessage(String p_232707_)
```

**Parameters:**

- `p_232707_` (`String`)

**Returns:** `public String`
