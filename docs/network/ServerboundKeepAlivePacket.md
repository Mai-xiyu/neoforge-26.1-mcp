# ServerboundKeepAlivePacket

**Package:** `net.minecraft.network.protocol.common`
**Type:** class
**Implements:** `Packet<ServerCommonPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundKeepAlivePacket>` |  |

## Methods

### ServerboundKeepAlivePacket

```java
public ServerboundKeepAlivePacket(long p_294123_)
```

**Parameters:**

- `p_294123_` (`long`)

**Returns:** `public`

### ServerboundKeepAlivePacket

```java
private ServerboundKeepAlivePacket(FriendlyByteBuf p_294566_)
```

**Parameters:**

- `p_294566_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_295504_)
```

**Parameters:**

- `p_295504_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundKeepAlivePacket> type()
```

**Returns:** `PacketType<ServerboundKeepAlivePacket>`

### handle

```java
public void handle(ServerCommonPacketListener p_295223_)
```

**Parameters:**

- `p_295223_` (`ServerCommonPacketListener`)

**Returns:** `public void`

### getId

```java
public long getId()
```

**Returns:** `public long`
