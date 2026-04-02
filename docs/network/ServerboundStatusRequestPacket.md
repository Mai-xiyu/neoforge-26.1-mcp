# ServerboundStatusRequestPacket

**Package:** `net.minecraft.network.protocol.status`
**Type:** class
**Implements:** `Packet<ServerStatusPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ServerboundStatusRequestPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ServerboundStatusRequestPacket>` |  |

## Methods

### ServerboundStatusRequestPacket

```java
private ServerboundStatusRequestPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ServerboundStatusRequestPacket> type()
```

**Returns:** `PacketType<ServerboundStatusRequestPacket>`

### handle

```java
public void handle(ServerStatusPacketListener p_135007_)
```

**Parameters:**

- `p_135007_` (`ServerStatusPacketListener`)

**Returns:** `public void`
