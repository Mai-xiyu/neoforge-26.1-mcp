# StatusPacketTypes

**Package:** `net.minecraft.network.protocol.status`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_STATUS_RESPONSE` | `PacketType<ClientboundStatusResponsePacket>` |  |
| `SERVERBOUND_STATUS_REQUEST` | `PacketType<ServerboundStatusRequestPacket>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientStatusPacketListener>> PacketType<T> createClientbound(String p_320562_)
```

**Parameters:**

- `p_320562_` (`String`)

**Returns:** `private static <T extends Packet<ClientStatusPacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerStatusPacketListener>> PacketType<T> createServerbound(String p_319783_)
```

**Parameters:**

- `p_319783_` (`String`)

**Returns:** `private static <T extends Packet<ServerStatusPacketListener>> PacketType<T>`
