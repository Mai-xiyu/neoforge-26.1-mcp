# ServerHandshakePacketListener

**Package:** `net.minecraft.network.protocol.handshake`
**Type:** interface
**Extends:** `ServerPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleIntention

```java
void handleIntention(ClientIntentionPacket p_134739_)
```

**Parameters:**

- `p_134739_` (`ClientIntentionPacket`)
