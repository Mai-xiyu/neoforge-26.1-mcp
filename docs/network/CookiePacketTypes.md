# CookiePacketTypes

**Package:** `net.minecraft.network.protocol.cookie`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_COOKIE_REQUEST` | `PacketType<ClientboundCookieRequestPacket>` |  |
| `SERVERBOUND_COOKIE_RESPONSE` | `PacketType<ServerboundCookieResponsePacket>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientCookiePacketListener>> PacketType<T> createClientbound(String p_320264_)
```

**Parameters:**

- `p_320264_` (`String`)

**Returns:** `private static <T extends Packet<ClientCookiePacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerCookiePacketListener>> PacketType<T> createServerbound(String p_320414_)
```

**Parameters:**

- `p_320414_` (`String`)

**Returns:** `private static <T extends Packet<ServerCookiePacketListener>> PacketType<T>`
