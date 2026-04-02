# ServerboundPingRequestPacket

**Package:** `net.minecraft.network.protocol.ping`
**Type:** class
**Implements:** `Packet<ServerPingPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ServerboundPingRequestPacket>` |  |

## Methods

### ServerboundPingRequestPacket

```java
public ServerboundPingRequestPacket(long p_320277_)
```

**Parameters:**

- `p_320277_` (`long`)

**Returns:** `public`

### ServerboundPingRequestPacket

```java
private ServerboundPingRequestPacket(ByteBuf p_352359_)
```

**Parameters:**

- `p_352359_` (`ByteBuf`)

**Returns:** `private`

### write

```java
private void write(ByteBuf p_352457_)
```

**Parameters:**

- `p_352457_` (`ByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPingRequestPacket> type()
```

**Returns:** `PacketType<ServerboundPingRequestPacket>`

### handle

```java
public void handle(ServerPingPacketListener p_320053_)
```

**Parameters:**

- `p_320053_` (`ServerPingPacketListener`)

**Returns:** `public void`

### getTime

```java
public long getTime()
```

**Returns:** `public long`
