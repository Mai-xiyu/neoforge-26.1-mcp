# PlayerSocialManager

**Package:** `net.minecraft.client.gui.screens.social`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PlayerSocialManager

```java
public PlayerSocialManager(Minecraft p_194057_, UserApiService p_194058_)
```

**Parameters:**

- `p_194057_` (`Minecraft`)
- `p_194058_` (`UserApiService`)

**Returns:** `public`

### hidePlayer

```java
public void hidePlayer(UUID p_100681_)
```

**Parameters:**

- `p_100681_` (`UUID`)

**Returns:** `public void`

### showPlayer

```java
public void showPlayer(UUID p_100683_)
```

**Parameters:**

- `p_100683_` (`UUID`)

**Returns:** `public void`

### shouldHideMessageFrom

```java
public boolean shouldHideMessageFrom(UUID p_100685_)
```

**Parameters:**

- `p_100685_` (`UUID`)

**Returns:** `public boolean`

### isHidden

```java
public boolean isHidden(UUID p_100687_)
```

**Parameters:**

- `p_100687_` (`UUID`)

**Returns:** `public boolean`

### startOnlineMode

```java
public void startOnlineMode()
```

**Returns:** `public void`

### stopOnlineMode

```java
public void stopOnlineMode()
```

**Returns:** `public void`

### isBlocked

```java
public boolean isBlocked(UUID p_100689_)
```

**Parameters:**

- `p_100689_` (`UUID`)

**Returns:** `public boolean`

### getHiddenPlayers

```java
public Set<UUID> getHiddenPlayers()
```

**Returns:** `public Set<UUID>`

### getDiscoveredUUID

```java
public UUID getDiscoveredUUID(String p_100679_)
```

**Parameters:**

- `p_100679_` (`String`)

**Returns:** `public UUID`

### addPlayer

```java
public void addPlayer(PlayerInfo p_100677_)
```

**Parameters:**

- `p_100677_` (`PlayerInfo`)

**Returns:** `public void`

### removePlayer

```java
public void removePlayer(UUID p_100691_)
```

**Parameters:**

- `p_100691_` (`UUID`)

**Returns:** `public void`
