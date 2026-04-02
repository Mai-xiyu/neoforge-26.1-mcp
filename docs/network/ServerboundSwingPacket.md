# ServerboundSwingPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSwingPacket>` |  |

## Methods

### ServerboundSwingPacket

```java
public ServerboundSwingPacket(InteractionHand p_134667_)
```

**Parameters:**

- `p_134667_` (`InteractionHand`)

**Returns:** `public`

### ServerboundSwingPacket

```java
private ServerboundSwingPacket(FriendlyByteBuf p_179792_)
```

**Parameters:**

- `p_179792_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134676_)
```

**Parameters:**

- `p_134676_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSwingPacket> type()
```

**Returns:** `PacketType<ServerboundSwingPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134673_)
```

**Parameters:**

- `p_134673_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getHand

```java
public InteractionHand getHand()
```

**Returns:** `public InteractionHand`
