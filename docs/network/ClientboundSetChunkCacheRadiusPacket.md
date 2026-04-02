# ClientboundSetChunkCacheRadiusPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetChunkCacheRadiusPacket>` |  |

## Methods

### ClientboundSetChunkCacheRadiusPacket

```java
public ClientboundSetChunkCacheRadiusPacket(int p_133101_)
```

**Parameters:**

- `p_133101_` (`int`)

**Returns:** `public`

### ClientboundSetChunkCacheRadiusPacket

```java
private ClientboundSetChunkCacheRadiusPacket(FriendlyByteBuf p_179284_)
```

**Parameters:**

- `p_179284_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133110_)
```

**Parameters:**

- `p_133110_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetChunkCacheRadiusPacket> type()
```

**Returns:** `PacketType<ClientboundSetChunkCacheRadiusPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133107_)
```

**Parameters:**

- `p_133107_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getRadius

```java
public int getRadius()
```

**Returns:** `public int`
