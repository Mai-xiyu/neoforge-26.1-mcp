# ClientboundSectionBlocksUpdatePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSectionBlocksUpdatePacket>` |  |

## Methods

### ClientboundSectionBlocksUpdatePacket

```java
public ClientboundSectionBlocksUpdatePacket(SectionPos p_284963_, ShortSet p_285027_, LevelChunkSection p_285414_)
```

**Parameters:**

- `p_284963_` (`SectionPos`)
- `p_285027_` (`ShortSet`)
- `p_285414_` (`LevelChunkSection`)

**Returns:** `public`

### ClientboundSectionBlocksUpdatePacket

```java
private ClientboundSectionBlocksUpdatePacket(FriendlyByteBuf p_179196_)
```

**Parameters:**

- `p_179196_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133002_)
```

**Parameters:**

- `p_133002_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSectionBlocksUpdatePacket> type()
```

**Returns:** `PacketType<ClientboundSectionBlocksUpdatePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132999_)
```

**Parameters:**

- `p_132999_` (`ClientGamePacketListener`)

**Returns:** `public void`

### runUpdates

```java
public void runUpdates(BiConsumer<BlockPos, BlockState> p_132993_)
```

**Parameters:**

- `p_132993_` (`BiConsumer<BlockPos, BlockState>`)

**Returns:** `public void`
