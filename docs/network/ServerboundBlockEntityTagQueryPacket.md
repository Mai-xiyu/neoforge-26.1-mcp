# ServerboundBlockEntityTagQueryPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundBlockEntityTagQueryPacket>` |  |

## Methods

### ServerboundBlockEntityTagQueryPacket

```java
public ServerboundBlockEntityTagQueryPacket(int p_320516_, BlockPos p_320060_)
```

**Parameters:**

- `p_320516_` (`int`)
- `p_320060_` (`BlockPos`)

**Returns:** `public`

### ServerboundBlockEntityTagQueryPacket

```java
private ServerboundBlockEntityTagQueryPacket(FriendlyByteBuf p_319948_)
```

**Parameters:**

- `p_319948_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_320108_)
```

**Parameters:**

- `p_320108_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundBlockEntityTagQueryPacket> type()
```

**Returns:** `PacketType<ServerboundBlockEntityTagQueryPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_320729_)
```

**Parameters:**

- `p_320729_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getTransactionId

```java
public int getTransactionId()
```

**Returns:** `public int`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`
