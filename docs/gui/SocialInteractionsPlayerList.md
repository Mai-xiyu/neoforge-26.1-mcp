# SocialInteractionsPlayerList

**Package:** `net.minecraft.client.gui.screens.social`
**Type:** class
**Extends:** `ContainerObjectSelectionList<PlayerEntry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SocialInteractionsPlayerList

```java
public SocialInteractionsPlayerList(SocialInteractionsScreen p_100697_, Minecraft p_100698_, int p_100699_, int p_100700_, int p_100701_, int p_100702_)
```

**Parameters:**

- `p_100697_` (`SocialInteractionsScreen`)
- `p_100698_` (`Minecraft`)
- `p_100699_` (`int`)
- `p_100700_` (`int`)
- `p_100701_` (`int`)
- `p_100702_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderListBackground

```java
protected void renderListBackground(GuiGraphics p_331377_)
```

**Parameters:**

- `p_331377_` (`GuiGraphics`)

### renderListSeparators

```java
protected void renderListSeparators(GuiGraphics p_331767_)
```

**Parameters:**

- `p_331767_` (`GuiGraphics`)

### enableScissor

```java
protected void enableScissor(GuiGraphics p_281892_)
```

**Parameters:**

- `p_281892_` (`GuiGraphics`)

### updatePlayerList

```java
public void updatePlayerList(Collection<UUID> p_240798_, double p_240792_, boolean p_240829_)
```

**Parameters:**

- `p_240798_` (`Collection<UUID>`)
- `p_240792_` (`double`)
- `p_240829_` (`boolean`)

**Returns:** `public void`

### addOnlinePlayers

```java
private void addOnlinePlayers(Collection<UUID> p_240813_, Map<UUID, PlayerEntry> p_240796_)
```

**Parameters:**

- `p_240813_` (`Collection<UUID>`)
- `p_240796_` (`Map<UUID, PlayerEntry>`)

**Returns:** `private void`

### updatePlayersFromChatLog

```java
private void updatePlayersFromChatLog(Map<UUID, PlayerEntry> p_240780_, boolean p_240827_)
```

**Parameters:**

- `p_240780_` (`Map<UUID, PlayerEntry>`)
- `p_240827_` (`boolean`)

**Returns:** `private void`

### collectProfilesFromChatLog

```java
private static Collection<GameProfile> collectProfilesFromChatLog(ChatLog p_250748_)
```

**Parameters:**

- `p_250748_` (`ChatLog`)

**Returns:** `private static Collection<GameProfile>`

### sortPlayerEntries

```java
private void sortPlayerEntries()
```

**Returns:** `private void`

### updateFiltersAndScroll

```java
private void updateFiltersAndScroll(Collection<PlayerEntry> p_240809_, double p_240830_)
```

**Parameters:**

- `p_240809_` (`Collection<PlayerEntry>`)
- `p_240830_` (`double`)

**Returns:** `private void`

### updateFilteredPlayers

```java
private void updateFilteredPlayers()
```

**Returns:** `private void`

### setFilter

```java
public void setFilter(String p_100718_)
```

**Parameters:**

- `p_100718_` (`String`)

**Returns:** `public void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### addPlayer

```java
public void addPlayer(PlayerInfo p_100715_, SocialInteractionsScreen.Page p_100716_)
```

**Parameters:**

- `p_100715_` (`PlayerInfo`)
- `p_100716_` (`SocialInteractionsScreen.Page`)

**Returns:** `public void`

### removePlayer

```java
public void removePlayer(UUID p_100723_)
```

**Parameters:**

- `p_100723_` (`UUID`)

**Returns:** `public void`
