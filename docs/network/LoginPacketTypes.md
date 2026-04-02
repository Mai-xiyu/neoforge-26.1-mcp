# LoginPacketTypes

**Package:** `net.minecraft.network.protocol.login`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_CUSTOM_QUERY` | `PacketType<ClientboundCustomQueryPacket>` |  |
| `CLIENTBOUND_GAME_PROFILE` | `PacketType<ClientboundGameProfilePacket>` |  |
| `CLIENTBOUND_HELLO` | `PacketType<ClientboundHelloPacket>` |  |
| `CLIENTBOUND_LOGIN_COMPRESSION` | `PacketType<ClientboundLoginCompressionPacket>` |  |
| `CLIENTBOUND_LOGIN_DISCONNECT` | `PacketType<ClientboundLoginDisconnectPacket>` |  |
| `SERVERBOUND_CUSTOM_QUERY_ANSWER` | `PacketType<ServerboundCustomQueryAnswerPacket>` |  |
| `SERVERBOUND_HELLO` | `PacketType<ServerboundHelloPacket>` |  |
| `SERVERBOUND_KEY` | `PacketType<ServerboundKeyPacket>` |  |
| `SERVERBOUND_LOGIN_ACKNOWLEDGED` | `PacketType<ServerboundLoginAcknowledgedPacket>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientLoginPacketListener>> PacketType<T> createClientbound(String p_320367_)
```

**Parameters:**

- `p_320367_` (`String`)

**Returns:** `private static <T extends Packet<ClientLoginPacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerLoginPacketListener>> PacketType<T> createServerbound(String p_320772_)
```

**Parameters:**

- `p_320772_` (`String`)

**Returns:** `private static <T extends Packet<ServerLoginPacketListener>> PacketType<T>`
