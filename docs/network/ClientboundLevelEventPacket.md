# ClientboundLevelEventPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundLevelEventPacket>` |  |

## Methods

### ClientboundLevelEventPacket

```java
public ClientboundLevelEventPacket(int p_132264_, BlockPos p_132265_, int p_132266_, boolean p_132267_)
```

**Parameters:**

- `p_132264_` (`int`)
- `p_132265_` (`BlockPos`)
- `p_132266_` (`int`)
- `p_132267_` (`boolean`)

**Returns:** `public`

### ClientboundLevelEventPacket

```java
private ClientboundLevelEventPacket(FriendlyByteBuf p_178908_)
```

**Parameters:**

- `p_178908_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132276_)
```

**Parameters:**

- `p_132276_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundLevelEventPacket> type()
```

**Returns:** `PacketType<ClientboundLevelEventPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132273_)
```

**Parameters:**

- `p_132273_` (`ClientGamePacketListener`)

**Returns:** `public void`

### isGlobalEvent

```java
public boolean isGlobalEvent()
```

**Returns:** `public boolean`

### getType

```java
public int getType()
```

**Returns:** `public int`

### getData

```java
public int getData()
```

**Returns:** `public int`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`
