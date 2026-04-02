# ClientboundBlockEventPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundBlockEventPacket>` |  |

## Methods

### ClientboundBlockEventPacket

```java
public ClientboundBlockEventPacket(BlockPos p_131715_, Block p_131716_, int p_131717_, int p_131718_)
```

**Parameters:**

- `p_131715_` (`BlockPos`)
- `p_131716_` (`Block`)
- `p_131717_` (`int`)
- `p_131718_` (`int`)

**Returns:** `public`

### ClientboundBlockEventPacket

```java
private ClientboundBlockEventPacket(RegistryFriendlyByteBuf p_320705_)
```

**Parameters:**

- `p_320705_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320189_)
```

**Parameters:**

- `p_320189_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundBlockEventPacket> type()
```

**Returns:** `PacketType<ClientboundBlockEventPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131724_)
```

**Parameters:**

- `p_131724_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getB0

```java
public int getB0()
```

**Returns:** `public int`

### getB1

```java
public int getB1()
```

**Returns:** `public int`

### getBlock

```java
public Block getBlock()
```

**Returns:** `public Block`
