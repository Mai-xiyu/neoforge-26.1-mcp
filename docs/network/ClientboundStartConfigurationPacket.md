# ClientboundStartConfigurationPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ClientboundStartConfigurationPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ClientboundStartConfigurationPacket>` |  |

## Methods

### ClientboundStartConfigurationPacket

```java
private ClientboundStartConfigurationPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ClientboundStartConfigurationPacket> type()
```

**Returns:** `PacketType<ClientboundStartConfigurationPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_294539_)
```

**Parameters:**

- `p_294539_` (`ClientGamePacketListener`)

**Returns:** `public void`

### isTerminal

```java
public boolean isTerminal()
```

**Returns:** `boolean`
