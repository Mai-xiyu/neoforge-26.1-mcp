# ClientboundSetDefaultSpawnPositionPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetDefaultSpawnPositionPacket>` |  |

## Methods

### ClientboundSetDefaultSpawnPositionPacket

```java
public ClientboundSetDefaultSpawnPositionPacket(BlockPos p_133115_, float p_133116_)
```

**Parameters:**

- `p_133115_` (`BlockPos`)
- `p_133116_` (`float`)

**Returns:** `public`

### ClientboundSetDefaultSpawnPositionPacket

```java
private ClientboundSetDefaultSpawnPositionPacket(FriendlyByteBuf p_179286_)
```

**Parameters:**

- `p_179286_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133125_)
```

**Parameters:**

- `p_133125_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetDefaultSpawnPositionPacket> type()
```

**Returns:** `PacketType<ClientboundSetDefaultSpawnPositionPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133122_)
```

**Parameters:**

- `p_133122_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getAngle

```java
public float getAngle()
```

**Returns:** `public float`
