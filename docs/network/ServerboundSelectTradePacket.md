# ServerboundSelectTradePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSelectTradePacket>` |  |

## Methods

### ServerboundSelectTradePacket

```java
public ServerboundSelectTradePacket(int p_134462_)
```

**Parameters:**

- `p_134462_` (`int`)

**Returns:** `public`

### ServerboundSelectTradePacket

```java
private ServerboundSelectTradePacket(FriendlyByteBuf p_179747_)
```

**Parameters:**

- `p_179747_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134471_)
```

**Parameters:**

- `p_134471_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSelectTradePacket> type()
```

**Returns:** `PacketType<ServerboundSelectTradePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134468_)
```

**Parameters:**

- `p_134468_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getItem

```java
public int getItem()
```

**Returns:** `public int`
