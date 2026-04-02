# ServerboundPongPacket

**Package:** `net.minecraft.network.protocol.common`
**Type:** class
**Implements:** `Packet<ServerCommonPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPongPacket>` |  |

## Methods

### ServerboundPongPacket

```java
public ServerboundPongPacket(int p_295752_)
```

**Parameters:**

- `p_295752_` (`int`)

**Returns:** `public`

### ServerboundPongPacket

```java
private ServerboundPongPacket(FriendlyByteBuf p_295215_)
```

**Parameters:**

- `p_295215_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_295843_)
```

**Parameters:**

- `p_295843_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPongPacket> type()
```

**Returns:** `PacketType<ServerboundPongPacket>`

### handle

```java
public void handle(ServerCommonPacketListener p_295714_)
```

**Parameters:**

- `p_295714_` (`ServerCommonPacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`
