# PlayerEntry

**Package:** `net.minecraft.client.gui.screens.social`
**Type:** class
**Extends:** `ContainerObjectSelectionList.Entry<PlayerEntry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SKIN_SHADE` | `int` |  |
| `BG_FILL` | `int` |  |
| `BG_FILL_REMOVED` | `int` |  |
| `PLAYERNAME_COLOR` | `int` |  |
| `PLAYER_STATUS_COLOR` | `int` |  |

## Methods

### PlayerEntry

```java
public PlayerEntry(Minecraft p_243293_, SocialInteractionsScreen p_243214_, UUID p_243288_, String p_243311_, Supplier<PlayerSkin> p_243309_, boolean p_243297_)
```

**Parameters:**

- `p_243293_` (`Minecraft`)
- `p_243214_` (`SocialInteractionsScreen`)
- `p_243288_` (`UUID`)
- `p_243311_` (`String`)
- `p_243309_` (`Supplier<PlayerSkin>`)
- `p_243297_` (`boolean`)

**Returns:** `public`

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### createReportButtonTooltip

```java
private Tooltip createReportButtonTooltip()
```

**Returns:** `private Tooltip`

### render

```java
public void render(GuiGraphics p_282434_, int p_283281_, int p_281503_, int p_282112_, int p_282838_, int p_282747_, int p_282231_, int p_282048_, boolean p_281660_, float p_283055_)
```

**Parameters:**

- `p_282434_` (`GuiGraphics`)
- `p_283281_` (`int`)
- `p_281503_` (`int`)
- `p_282112_` (`int`)
- `p_282838_` (`int`)
- `p_282747_` (`int`)
- `p_282231_` (`int`)
- `p_282048_` (`int`)
- `p_281660_` (`boolean`)
- `p_283055_` (`float`)

### children

```java
public List<? extends GuiEventListener> children()
```

**Returns:** `List<? extends GuiEventListener>`

### narratables

```java
public List<? extends NarratableEntry> narratables()
```

**Returns:** `List<? extends NarratableEntry>`

### getPlayerName

```java
public String getPlayerName()
```

**Returns:** `public String`

### getPlayerId

```java
public UUID getPlayerId()
```

**Returns:** `public UUID`

### getSkinGetter

```java
public Supplier<PlayerSkin> getSkinGetter()
```

**Returns:** `public Supplier<PlayerSkin>`

### setRemoved

```java
public void setRemoved(boolean p_100620_)
```

**Parameters:**

- `p_100620_` (`boolean`)

**Returns:** `public void`

### isRemoved

```java
public boolean isRemoved()
```

**Returns:** `public boolean`

### setHasRecentMessages

```java
public void setHasRecentMessages(boolean p_240771_)
```

**Parameters:**

- `p_240771_` (`boolean`)

**Returns:** `public void`

### hasRecentMessages

```java
public boolean hasRecentMessages()
```

**Returns:** `public boolean`

### isChatReportable

```java
public boolean isChatReportable()
```

**Returns:** `public boolean`

### onHiddenOrShown

```java
private void onHiddenOrShown(boolean p_100597_, Component p_100598_)
```

**Parameters:**

- `p_100597_` (`boolean`)
- `p_100598_` (`Component`)

**Returns:** `private void`

### updateHideAndShowButton

```java
private void updateHideAndShowButton(boolean p_262638_)
```

**Parameters:**

- `p_262638_` (`boolean`)

**Returns:** `private void`

### getEntryNarationMessage

```java
MutableComponent getEntryNarationMessage(MutableComponent p_100595_)
```

**Parameters:**

- `p_100595_` (`MutableComponent`)

**Returns:** `MutableComponent`

### getStatusComponent

```java
private Component getStatusComponent()
```

**Returns:** `private Component`
