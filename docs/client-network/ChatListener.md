# ChatListener

**Package:** `net.minecraft.client.multiplayer.chat`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChatListener

```java
public ChatListener(Minecraft p_240569_)
```

**Parameters:**

- `p_240569_` (`Minecraft`)

**Returns:** `public`

### tick

```java
public void tick()
```

**Returns:** `public void`

### setMessageDelay

```java
public void setMessageDelay(double p_240785_)
```

**Parameters:**

- `p_240785_` (`double`)

**Returns:** `public void`

### acceptNextDelayedMessage

```java
public void acceptNextDelayedMessage()
```

**Returns:** `public void`

### queueSize

```java
public long queueSize()
```

**Returns:** `public long`

### clearQueue

```java
public void clearQueue()
```

**Returns:** `public void`

### removeFromDelayedMessageQueue

```java
public boolean removeFromDelayedMessageQueue(MessageSignature p_241445_)
```

**Parameters:**

- `p_241445_` (`MessageSignature`)

**Returns:** `public boolean`

### willDelayMessages

```java
private boolean willDelayMessages()
```

**Returns:** `private boolean`

### handleMessage

```java
private void handleMessage(MessageSignature p_249408_, BooleanSupplier p_250870_)
```

**Parameters:**

- `p_249408_` (`MessageSignature`)
- `p_250870_` (`BooleanSupplier`)

**Returns:** `private void`

### handlePlayerChatMessage

```java
public void handlePlayerChatMessage(PlayerChatMessage p_251553_, GameProfile p_250022_, ChatType.Bound p_252158_)
```

**Parameters:**

- `p_251553_` (`PlayerChatMessage`)
- `p_250022_` (`GameProfile`)
- `p_252158_` (`ChatType.Bound`)

**Returns:** `public void`

### handleChatMessageError

```java
public void handleChatMessageError(UUID p_299306_, ChatType.Bound p_298901_)
```

**Parameters:**

- `p_299306_` (`UUID`)
- `p_298901_` (`ChatType.Bound`)

**Returns:** `public void`

### handleDisguisedChatMessage

```java
public void handleDisguisedChatMessage(Component p_250375_, ChatType.Bound p_251256_)
```

**Parameters:**

- `p_250375_` (`Component`)
- `p_251256_` (`ChatType.Bound`)

**Returns:** `public void`

### showMessageToPlayer

```java
private boolean showMessageToPlayer(ChatType.Bound p_251766_, PlayerChatMessage p_249430_, Component p_249231_, GameProfile p_249177_, boolean p_251638_, Instant p_249665_)
```

**Parameters:**

- `p_251766_` (`ChatType.Bound`)
- `p_249430_` (`PlayerChatMessage`)
- `p_249231_` (`Component`)
- `p_249177_` (`GameProfile`)
- `p_251638_` (`boolean`)
- `p_249665_` (`Instant`)

**Returns:** `private boolean`

### narrateChatMessage

```java
private void narrateChatMessage(ChatType.Bound p_241352_, Component p_243262_)
```

**Parameters:**

- `p_241352_` (`ChatType.Bound`)
- `p_243262_` (`Component`)

**Returns:** `private void`

### evaluateTrustLevel

```java
private ChatTrustLevel evaluateTrustLevel(PlayerChatMessage p_251246_, Component p_250576_, Instant p_249995_)
```

**Parameters:**

- `p_251246_` (`PlayerChatMessage`)
- `p_250576_` (`Component`)
- `p_249995_` (`Instant`)

**Returns:** `private ChatTrustLevel`

### logPlayerMessage

```java
private void logPlayerMessage(PlayerChatMessage p_252155_, ChatType.Bound p_249730_, GameProfile p_248589_, ChatTrustLevel p_248881_)
```

**Parameters:**

- `p_252155_` (`PlayerChatMessage`)
- `p_249730_` (`ChatType.Bound`)
- `p_248589_` (`GameProfile`)
- `p_248881_` (`ChatTrustLevel`)

**Returns:** `private void`

### logSystemMessage

```java
private void logSystemMessage(Component p_240609_, Instant p_240541_)
```

**Parameters:**

- `p_240609_` (`Component`)
- `p_240541_` (`Instant`)

**Returns:** `private void`

### handleSystemMessage

```java
public void handleSystemMessage(Component p_240522_, boolean p_240642_)
```

**Parameters:**

- `p_240522_` (`Component`)
- `p_240642_` (`boolean`)

**Returns:** `public void`

### guessChatUUID

```java
private UUID guessChatUUID(Component p_240595_)
```

**Parameters:**

- `p_240595_` (`Component`)

**Returns:** `private UUID`

### isSenderLocalPlayer

```java
private boolean isSenderLocalPlayer(UUID p_241343_)
```

**Parameters:**

- `p_241343_` (`UUID`)

**Returns:** `private boolean`

### Message

```java
static record Message(MessageSignature signature, BooleanSupplier handler)
```

**Parameters:**

- `signature` (`MessageSignature`)
- `handler` (`BooleanSupplier`)

**Returns:** `record`

### accept

```java
public boolean accept()
```

**Returns:** `public boolean`
