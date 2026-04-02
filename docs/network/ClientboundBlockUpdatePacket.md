# ClientboundBlockUpdatePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundBlockUpdatePacket>` |  |

## Methods

### ClientboundBlockUpdatePacket

```java
public ClientboundBlockUpdatePacket(BlockPos p_131738_, BlockState p_131739_)
```

**Parameters:**

- `p_131738_` (`BlockPos`)
- `p_131739_` (`BlockState`)

**Returns:** `public`

### ClientboundBlockUpdatePacket

```java
public ClientboundBlockUpdatePacket(BlockGetter p_131735_, BlockPos p_131736_)
```

**Parameters:**

- `p_131735_` (`BlockGetter`)
- `p_131736_` (`BlockPos`)

**Returns:** `public`

### type

```java
public PacketType<ClientboundBlockUpdatePacket> type()
```

**Returns:** `PacketType<ClientboundBlockUpdatePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131745_)
```

**Parameters:**

- `p_131745_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getBlockState

```java
public BlockState getBlockState()
```

**Returns:** `public BlockState`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`
