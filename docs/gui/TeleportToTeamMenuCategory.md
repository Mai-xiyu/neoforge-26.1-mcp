# TeleportToTeamMenuCategory

**Package:** `net.minecraft.client.gui.spectator.categories`
**Type:** class
**Implements:** `SpectatorMenuCategory`, `SpectatorMenuItem`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TeleportToTeamMenuCategory

```java
public TeleportToTeamMenuCategory()
```

**Returns:** `public`

### createTeamEntries

```java
private static List<SpectatorMenuItem> createTeamEntries(Minecraft p_260258_, Scoreboard p_259249_)
```

**Parameters:**

- `p_260258_` (`Minecraft`)
- `p_259249_` (`Scoreboard`)

**Returns:** `private static List<SpectatorMenuItem>`

### getItems

```java
public List<SpectatorMenuItem> getItems()
```

**Returns:** `List<SpectatorMenuItem>`

### getPrompt

```java
public Component getPrompt()
```

**Returns:** `Component`

### selectItem

```java
public void selectItem(SpectatorMenu p_101886_)
```

**Parameters:**

- `p_101886_` (`SpectatorMenu`)

### getName

```java
public Component getName()
```

**Returns:** `Component`

### renderIcon

```java
public void renderIcon(GuiGraphics p_282933_, float p_283568_, int p_281803_)
```

**Parameters:**

- `p_282933_` (`GuiGraphics`)
- `p_283568_` (`float`)
- `p_281803_` (`int`)

### isEnabled

```java
public boolean isEnabled()
```

**Returns:** `boolean`

### TeamSelectionItem

```java
private TeamSelectionItem(PlayerTeam p_259176_, List<PlayerInfo> p_259231_, Supplier<PlayerSkin> p_294955_)
```

**Parameters:**

- `p_259176_` (`PlayerTeam`)
- `p_259231_` (`List<PlayerInfo>`)
- `p_294955_` (`Supplier<PlayerSkin>`)

**Returns:** `private`

### create

```java
public static Optional<SpectatorMenuItem> create(Minecraft p_260048_, PlayerTeam p_259058_)
```

**Parameters:**

- `p_260048_` (`Minecraft`)
- `p_259058_` (`PlayerTeam`)

**Returns:** `public static Optional<SpectatorMenuItem>`

### selectItem

```java
public void selectItem(SpectatorMenu p_101902_)
```

**Parameters:**

- `p_101902_` (`SpectatorMenu`)

### getName

```java
public Component getName()
```

**Returns:** `Component`

### renderIcon

```java
public void renderIcon(GuiGraphics p_283215_, float p_282946_, int p_283438_)
```

**Parameters:**

- `p_283215_` (`GuiGraphics`)
- `p_282946_` (`float`)
- `p_283438_` (`int`)

### isEnabled

```java
public boolean isEnabled()
```

**Returns:** `boolean`
