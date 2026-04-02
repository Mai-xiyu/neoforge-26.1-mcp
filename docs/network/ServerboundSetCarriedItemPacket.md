# ServerboundSetCarriedItemPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSetCarriedItemPacket>` |  |

## Methods

### ServerboundSetCarriedItemPacket

```java
public ServerboundSetCarriedItemPacket(int p_134491_)
```

**Parameters:**

- `p_134491_` (`int`)

**Returns:** `public`

### ServerboundSetCarriedItemPacket

```java
private ServerboundSetCarriedItemPacket(FriendlyByteBuf p_179751_)
```

**Parameters:**

- `p_179751_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134500_)
```

**Parameters:**

- `p_134500_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSetCarriedItemPacket> type()
```

**Returns:** `PacketType<ServerboundSetCarriedItemPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134497_)
```

**Parameters:**

- `p_134497_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getSlot

```java
public int getSlot()
```

**Returns:** `public int`
