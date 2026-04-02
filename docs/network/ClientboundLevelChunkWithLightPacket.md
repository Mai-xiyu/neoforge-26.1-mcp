# ClientboundLevelChunkWithLightPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundLevelChunkWithLightPacket>` |  |

## Methods

### ClientboundLevelChunkWithLightPacket

```java
public ClientboundLevelChunkWithLightPacket(LevelChunk p_285290_, LevelLightEngine p_285254_, BitSet p_285350_, BitSet p_285304_)
```

**Parameters:**

- `p_285290_` (`LevelChunk`)
- `p_285254_` (`LevelLightEngine`)
- `p_285350_` (`BitSet`)
- `p_285304_` (`BitSet`)

**Returns:** `public`

### ClientboundLevelChunkWithLightPacket

```java
private ClientboundLevelChunkWithLightPacket(RegistryFriendlyByteBuf p_319989_)
```

**Parameters:**

- `p_319989_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320036_)
```

**Parameters:**

- `p_320036_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundLevelChunkWithLightPacket> type()
```

**Returns:** `PacketType<ClientboundLevelChunkWithLightPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_195716_)
```

**Parameters:**

- `p_195716_` (`ClientGamePacketListener`)

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

### getChunkData

```java
public ClientboundLevelChunkPacketData getChunkData()
```

**Returns:** `public ClientboundLevelChunkPacketData`

### getLightData

```java
public ClientboundLightUpdatePacketData getLightData()
```

**Returns:** `public ClientboundLightUpdatePacketData`
