# ClientboundOpenBookPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundOpenBookPacket>` |  |

## Methods

### ClientboundOpenBookPacket

```java
public ClientboundOpenBookPacket(InteractionHand p_132601_)
```

**Parameters:**

- `p_132601_` (`InteractionHand`)

**Returns:** `public`

### ClientboundOpenBookPacket

```java
private ClientboundOpenBookPacket(FriendlyByteBuf p_179009_)
```

**Parameters:**

- `p_179009_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132610_)
```

**Parameters:**

- `p_132610_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundOpenBookPacket> type()
```

**Returns:** `PacketType<ClientboundOpenBookPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132607_)
```

**Parameters:**

- `p_132607_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getHand

```java
public InteractionHand getHand()
```

**Returns:** `public InteractionHand`
