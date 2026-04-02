# ServerboundFinishConfigurationPacket

**Package:** `net.minecraft.network.protocol.configuration`
**Type:** class
**Implements:** `Packet<ServerConfigurationPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ServerboundFinishConfigurationPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ServerboundFinishConfigurationPacket>` |  |

## Methods

### ServerboundFinishConfigurationPacket

```java
private ServerboundFinishConfigurationPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ServerboundFinishConfigurationPacket> type()
```

**Returns:** `PacketType<ServerboundFinishConfigurationPacket>`

### handle

```java
public void handle(ServerConfigurationPacketListener p_295379_)
```

**Parameters:**

- `p_295379_` (`ServerConfigurationPacketListener`)

**Returns:** `public void`

### isTerminal

```java
public boolean isTerminal()
```

**Returns:** `boolean`
