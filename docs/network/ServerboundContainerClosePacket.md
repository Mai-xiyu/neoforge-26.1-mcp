# ServerboundContainerClosePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundContainerClosePacket>` |  |

## Methods

### ServerboundContainerClosePacket

```java
public ServerboundContainerClosePacket(int p_133970_)
```

**Parameters:**

- `p_133970_` (`int`)

**Returns:** `public`

### ServerboundContainerClosePacket

```java
private ServerboundContainerClosePacket(FriendlyByteBuf p_179584_)
```

**Parameters:**

- `p_179584_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133978_)
```

**Parameters:**

- `p_133978_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundContainerClosePacket> type()
```

**Returns:** `PacketType<ServerboundContainerClosePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_133976_)
```

**Parameters:**

- `p_133976_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`
