# ServerboundConfigurationAcknowledgedPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ServerboundConfigurationAcknowledgedPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ServerboundConfigurationAcknowledgedPacket>` |  |

## Methods

### ServerboundConfigurationAcknowledgedPacket

```java
private ServerboundConfigurationAcknowledgedPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ServerboundConfigurationAcknowledgedPacket> type()
```

**Returns:** `PacketType<ServerboundConfigurationAcknowledgedPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_295823_)
```

**Parameters:**

- `p_295823_` (`ServerGamePacketListener`)

**Returns:** `public void`

### isTerminal

```java
public boolean isTerminal()
```

**Returns:** `boolean`
