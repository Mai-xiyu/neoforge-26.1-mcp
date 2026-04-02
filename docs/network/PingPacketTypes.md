# PingPacketTypes

**Package:** `net.minecraft.network.protocol.ping`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_PONG_RESPONSE` | `PacketType<ClientboundPongResponsePacket>` |  |
| `SERVERBOUND_PING_REQUEST` | `PacketType<ServerboundPingRequestPacket>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientPongPacketListener>> PacketType<T> createClientbound(String p_320541_)
```

**Parameters:**

- `p_320541_` (`String`)

**Returns:** `private static <T extends Packet<ClientPongPacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerPingPacketListener>> PacketType<T> createServerbound(String p_320332_)
```

**Parameters:**

- `p_320332_` (`String`)

**Returns:** `private static <T extends Packet<ServerPingPacketListener>> PacketType<T>`
