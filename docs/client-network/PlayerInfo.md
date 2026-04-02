# PlayerInfo

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PlayerInfo

```java
public PlayerInfo(GameProfile p_253609_, boolean p_254409_)
```

**Parameters:**

- `p_253609_` (`GameProfile`)
- `p_254409_` (`boolean`)

**Returns:** `public`

### createSkinLookup

```java
private static Supplier<PlayerSkin> createSkinLookup(GameProfile p_295736_)
```

**Parameters:**

- `p_295736_` (`GameProfile`)

**Returns:** `private static Supplier<PlayerSkin>`

### getProfile

```java
public GameProfile getProfile()
```

**Returns:** `public GameProfile`

### getChatSession

```java
public RemoteChatSession getChatSession()
```

**Returns:** `RemoteChatSession`

### getMessageValidator

```java
public SignedMessageValidator getMessageValidator()
```

**Returns:** `public SignedMessageValidator`

### hasVerifiableChat

```java
public boolean hasVerifiableChat()
```

**Returns:** `public boolean`

### setChatSession

```java
protected void setChatSession(RemoteChatSession p_249599_)
```

**Parameters:**

- `p_249599_` (`RemoteChatSession`)

**Returns:** `protected void`

### clearChatSession

```java
protected void clearChatSession(boolean p_254536_)
```

**Parameters:**

- `p_254536_` (`boolean`)

**Returns:** `protected void`

### fallbackMessageValidator

```java
private static SignedMessageValidator fallbackMessageValidator(boolean p_254311_)
```

**Parameters:**

- `p_254311_` (`boolean`)

**Returns:** `private static SignedMessageValidator`

### getGameMode

```java
public GameType getGameMode()
```

**Returns:** `public GameType`

### setGameMode

```java
protected void setGameMode(GameType p_105318_)
```

**Parameters:**

- `p_105318_` (`GameType`)

**Returns:** `protected void`

### getLatency

```java
public int getLatency()
```

**Returns:** `public int`

### setLatency

```java
protected void setLatency(int p_105314_)
```

**Parameters:**

- `p_105314_` (`int`)

**Returns:** `protected void`

### getSkin

```java
public PlayerSkin getSkin()
```

**Returns:** `public PlayerSkin`

### getTeam

```java
public PlayerTeam getTeam()
```

**Returns:** `PlayerTeam`

### setTabListDisplayName

```java
public void setTabListDisplayName(Component p_105324_)
```

**Parameters:**

- `p_105324_` (`Component`)

**Returns:** `public void`

### getTabListDisplayName

```java
public Component getTabListDisplayName()
```

**Returns:** `Component`
