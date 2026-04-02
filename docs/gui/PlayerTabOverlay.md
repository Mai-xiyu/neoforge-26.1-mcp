# PlayerTabOverlay

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_ROWS_PER_COL` | `int` |  |

## Methods

### PlayerTabOverlay

```java
public PlayerTabOverlay(Minecraft p_94527_, Gui p_94528_)
```

**Parameters:**

- `p_94527_` (`Minecraft`)
- `p_94528_` (`Gui`)

**Returns:** `public`

### getNameForDisplay

```java
public Component getNameForDisplay(PlayerInfo p_94550_)
```

**Parameters:**

- `p_94550_` (`PlayerInfo`)

**Returns:** `public Component`

### decorateName

```java
private Component decorateName(PlayerInfo p_94552_, MutableComponent p_94553_)
```

**Parameters:**

- `p_94552_` (`PlayerInfo`)
- `p_94553_` (`MutableComponent`)

**Returns:** `private Component`

### setVisible

```java
public void setVisible(boolean p_94557_)
```

**Parameters:**

- `p_94557_` (`boolean`)

**Returns:** `public void`

### getPlayerInfos

```java
private List<PlayerInfo> getPlayerInfos()
```

**Returns:** `private List<PlayerInfo>`

### render

```java
public void render(GuiGraphics p_281484_, int p_283602_, Scoreboard p_282338_, Objective p_282369_)
```

**Parameters:**

- `p_281484_` (`GuiGraphics`)
- `p_283602_` (`int`)
- `p_282338_` (`Scoreboard`)
- `p_282369_` (`Objective`)

**Returns:** `public void`

### renderPingIcon

```java
protected void renderPingIcon(GuiGraphics p_283286_, int p_281809_, int p_282801_, int p_282223_, PlayerInfo p_282986_)
```

**Parameters:**

- `p_283286_` (`GuiGraphics`)
- `p_281809_` (`int`)
- `p_282801_` (`int`)
- `p_282223_` (`int`)
- `p_282986_` (`PlayerInfo`)

**Returns:** `protected void`

### renderTablistScore

```java
private void renderTablistScore(Objective p_283381_, int p_282557_, PlayerTabOverlay.ScoreDisplayEntry p_313810_, int p_283533_, int p_281254_, UUID p_283099_, GuiGraphics p_282280_)
```

**Parameters:**

- `p_283381_` (`Objective`)
- `p_282557_` (`int`)
- `p_313810_` (`PlayerTabOverlay.ScoreDisplayEntry`)
- `p_283533_` (`int`)
- `p_281254_` (`int`)
- `p_283099_` (`UUID`)
- `p_282280_` (`GuiGraphics`)

**Returns:** `private void`

### renderTablistHearts

```java
private void renderTablistHearts(int p_282904_, int p_283173_, int p_282149_, UUID p_283348_, GuiGraphics p_281723_, int p_281354_)
```

**Parameters:**

- `p_282904_` (`int`)
- `p_283173_` (`int`)
- `p_282149_` (`int`)
- `p_283348_` (`UUID`)
- `p_281723_` (`GuiGraphics`)
- `p_281354_` (`int`)

**Returns:** `private void`

### setFooter

```java
public void setFooter(Component p_94555_)
```

**Parameters:**

- `p_94555_` (`Component`)

**Returns:** `public void`

### setHeader

```java
public void setHeader(Component p_94559_)
```

**Parameters:**

- `p_94559_` (`Component`)

**Returns:** `public void`

### reset

```java
public void reset()
```

**Returns:** `public void`

### HealthState

```java
public HealthState(int p_250562_)
```

**Parameters:**

- `p_250562_` (`int`)

**Returns:** `public`

### update

```java
public void update(int p_251066_, long p_251460_)
```

**Parameters:**

- `p_251066_` (`int`)
- `p_251460_` (`long`)

**Returns:** `public void`

### displayedValue

```java
public int displayedValue()
```

**Returns:** `public int`

### isBlinking

```java
public boolean isBlinking(long p_251847_)
```

**Parameters:**

- `p_251847_` (`long`)

**Returns:** `public boolean`

### ScoreDisplayEntry

```java
static record ScoreDisplayEntry(Component name, int score, Component formattedScore, int scoreWidth)
```

**Parameters:**

- `name` (`Component`)
- `score` (`int`)
- `formattedScore` (`Component`)
- `scoreWidth` (`int`)

**Returns:** `record`
