# ServerHandshakePacketListenerImpl

**Package:** `net.minecraft.server.network`
**Type:** class
**Implements:** `ServerHandshakePacketListener`
**Side:** 🖧 Server

## Methods

### ServerHandshakePacketListenerImpl

```java
public ServerHandshakePacketListenerImpl(MinecraftServer p_9969_, Connection p_9970_)
```

**Parameters:**

- `p_9969_` (`MinecraftServer`)
- `p_9970_` (`Connection`)

**Returns:** `public`

### handleIntention

```java
public void handleIntention(ClientIntentionPacket p_9975_)
```

**Parameters:**

- `p_9975_` (`ClientIntentionPacket`)

### beginLogin

```java
private void beginLogin(ClientIntentionPacket p_320524_, boolean p_320853_)
```

**Parameters:**

- `p_320524_` (`ClientIntentionPacket`)
- `p_320853_` (`boolean`)

**Returns:** `private void`

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350912_)
```

**Parameters:**

- `p_350912_` (`DisconnectionDetails`)

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`
