# ClientStatusPacketListener

**Package:** `net.minecraft.network.protocol.status`
**Type:** interface
**Extends:** `ClientPongPacketListener, ClientboundPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleStatusResponse

```java
void handleStatusResponse(ClientboundStatusResponsePacket p_134872_)
```

**Parameters:**

- `p_134872_` (`ClientboundStatusResponsePacket`)
