# ClientboundResetChatPacket

**Package:** `net.minecraft.network.protocol.configuration`
**Type:** class
**Implements:** `Packet<ClientConfigurationPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ClientboundResetChatPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ClientboundResetChatPacket>` |  |

## Methods

### ClientboundResetChatPacket

```java
private ClientboundResetChatPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ClientboundResetChatPacket> type()
```

**Returns:** `PacketType<ClientboundResetChatPacket>`

### handle

```java
public void handle(ClientConfigurationPacketListener p_338468_)
```

**Parameters:**

- `p_338468_` (`ClientConfigurationPacketListener`)

**Returns:** `public void`
