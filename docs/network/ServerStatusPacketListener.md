# ServerStatusPacketListener

**Package:** `net.minecraft.network.protocol.status`
**Type:** interface
**Extends:** `ServerPacketListener, ServerPingPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleStatusRequest

```java
void handleStatusRequest(ServerboundStatusRequestPacket p_134987_)
```

**Parameters:**

- `p_134987_` (`ServerboundStatusRequestPacket`)
