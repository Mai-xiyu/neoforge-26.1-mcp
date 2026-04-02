# MemoryServerHandshakePacketListenerImpl

**Package:** `net.minecraft.server.network`
**Type:** class
**Implements:** `ServerHandshakePacketListener`
**Side:** 🖧 Server

## Methods

### MemoryServerHandshakePacketListenerImpl

```java
public MemoryServerHandshakePacketListenerImpl(MinecraftServer p_9691_, Connection p_9692_)
```

**Parameters:**

- `p_9691_` (`MinecraftServer`)
- `p_9692_` (`Connection`)

**Returns:** `public`

### handleIntention

```java
public void handleIntention(ClientIntentionPacket p_9697_)
```

**Parameters:**

- `p_9697_` (`ClientIntentionPacket`)

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350630_)
```

**Parameters:**

- `p_350630_` (`DisconnectionDetails`)

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`
