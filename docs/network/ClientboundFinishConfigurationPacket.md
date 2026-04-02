# ClientboundFinishConfigurationPacket

**Package:** `net.minecraft.network.protocol.configuration`
**Type:** class
**Implements:** `Packet<ClientConfigurationPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ClientboundFinishConfigurationPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ClientboundFinishConfigurationPacket>` |  |

## Methods

### ClientboundFinishConfigurationPacket

```java
private ClientboundFinishConfigurationPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ClientboundFinishConfigurationPacket> type()
```

**Returns:** `PacketType<ClientboundFinishConfigurationPacket>`

### handle

```java
public void handle(ClientConfigurationPacketListener p_294157_)
```

**Parameters:**

- `p_294157_` (`ClientConfigurationPacketListener`)

**Returns:** `public void`

### isTerminal

```java
public boolean isTerminal()
```

**Returns:** `boolean`
