# ServerboundLoginAcknowledgedPacket

**Package:** `net.minecraft.network.protocol.login`
**Type:** class
**Implements:** `Packet<ServerLoginPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ServerboundLoginAcknowledgedPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ServerboundLoginAcknowledgedPacket>` |  |

## Methods

### ServerboundLoginAcknowledgedPacket

```java
private ServerboundLoginAcknowledgedPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ServerboundLoginAcknowledgedPacket> type()
```

**Returns:** `PacketType<ServerboundLoginAcknowledgedPacket>`

### handle

```java
public void handle(ServerLoginPacketListener p_296298_)
```

**Parameters:**

- `p_296298_` (`ServerLoginPacketListener`)

**Returns:** `public void`

### isTerminal

```java
public boolean isTerminal()
```

**Returns:** `boolean`
