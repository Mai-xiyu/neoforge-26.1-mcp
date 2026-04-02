# ClientboundChunkBatchStartPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ClientboundChunkBatchStartPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ClientboundChunkBatchStartPacket>` |  |

## Methods

### ClientboundChunkBatchStartPacket

```java
private ClientboundChunkBatchStartPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ClientboundChunkBatchStartPacket> type()
```

**Returns:** `PacketType<ClientboundChunkBatchStartPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_295685_)
```

**Parameters:**

- `p_295685_` (`ClientGamePacketListener`)

**Returns:** `public void`
