# ServerboundPickItemPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPickItemPacket>` |  |

## Methods

### ServerboundPickItemPacket

```java
public ServerboundPickItemPacket(int p_134225_)
```

**Parameters:**

- `p_134225_` (`int`)

**Returns:** `public`

### ServerboundPickItemPacket

```java
private ServerboundPickItemPacket(FriendlyByteBuf p_179704_)
```

**Parameters:**

- `p_179704_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134234_)
```

**Parameters:**

- `p_134234_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPickItemPacket> type()
```

**Returns:** `PacketType<ServerboundPickItemPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134231_)
```

**Parameters:**

- `p_134231_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getSlot

```java
public int getSlot()
```

**Returns:** `public int`
