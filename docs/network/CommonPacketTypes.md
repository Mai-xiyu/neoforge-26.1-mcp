# CommonPacketTypes

**Package:** `net.minecraft.network.protocol.common`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_CUSTOM_PAYLOAD` | `PacketType<ClientboundCustomPayloadPacket>` |  |
| `CLIENTBOUND_CUSTOM_REPORT_DETAILS` | `PacketType<ClientboundCustomReportDetailsPacket>` |  |
| `CLIENTBOUND_DISCONNECT` | `PacketType<ClientboundDisconnectPacket>` |  |
| `CLIENTBOUND_KEEP_ALIVE` | `PacketType<ClientboundKeepAlivePacket>` |  |
| `CLIENTBOUND_PING` | `PacketType<ClientboundPingPacket>` |  |
| `CLIENTBOUND_RESOURCE_PACK_POP` | `PacketType<ClientboundResourcePackPopPacket>` |  |
| `CLIENTBOUND_RESOURCE_PACK_PUSH` | `PacketType<ClientboundResourcePackPushPacket>` |  |
| `CLIENTBOUND_SERVER_LINKS` | `PacketType<ClientboundServerLinksPacket>` |  |
| `CLIENTBOUND_STORE_COOKIE` | `PacketType<ClientboundStoreCookiePacket>` |  |
| `CLIENTBOUND_TRANSFER` | `PacketType<ClientboundTransferPacket>` |  |
| `CLIENTBOUND_UPDATE_TAGS` | `PacketType<ClientboundUpdateTagsPacket>` |  |
| `SERVERBOUND_CLIENT_INFORMATION` | `PacketType<ServerboundClientInformationPacket>` |  |
| `SERVERBOUND_CUSTOM_PAYLOAD` | `PacketType<ServerboundCustomPayloadPacket>` |  |
| `SERVERBOUND_KEEP_ALIVE` | `PacketType<ServerboundKeepAlivePacket>` |  |
| `SERVERBOUND_PONG` | `PacketType<ServerboundPongPacket>` |  |
| `SERVERBOUND_RESOURCE_PACK` | `PacketType<ServerboundResourcePackPacket>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientCommonPacketListener>> PacketType<T> createClientbound(String p_320509_)
```

**Parameters:**

- `p_320509_` (`String`)

**Returns:** `private static <T extends Packet<ClientCommonPacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerCommonPacketListener>> PacketType<T> createServerbound(String p_320505_)
```

**Parameters:**

- `p_320505_` (`String`)

**Returns:** `private static <T extends Packet<ServerCommonPacketListener>> PacketType<T>`
