# ClientboundLightUpdatePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundLightUpdatePacket>` |  |

## Methods

### ClientboundLightUpdatePacket

```java
public ClientboundLightUpdatePacket(ChunkPos p_285255_, LevelLightEngine p_285409_, BitSet p_285387_, BitSet p_285074_)
```

**Parameters:**

- `p_285255_` (`ChunkPos`)
- `p_285409_` (`LevelLightEngine`)
- `p_285387_` (`BitSet`)
- `p_285074_` (`BitSet`)

**Returns:** `public`

### ClientboundLightUpdatePacket

```java
private ClientboundLightUpdatePacket(FriendlyByteBuf p_178918_)
```

**Parameters:**

- `p_178918_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132351_)
```

**Parameters:**

- `p_132351_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundLightUpdatePacket> type()
```

**Returns:** `PacketType<ClientboundLightUpdatePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132348_)
```

**Parameters:**

- `p_132348_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getX

```java
public int getX()
```

**Returns:** `public int`

### getZ

```java
public int getZ()
```

**Returns:** `public int`

### getLightData

```java
public ClientboundLightUpdatePacketData getLightData()
```

**Returns:** `public ClientboundLightUpdatePacketData`
