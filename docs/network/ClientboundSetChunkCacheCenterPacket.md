# ClientboundSetChunkCacheCenterPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetChunkCacheCenterPacket>` |  |

## Methods

### ClientboundSetChunkCacheCenterPacket

```java
public ClientboundSetChunkCacheCenterPacket(int p_133086_, int p_133087_)
```

**Parameters:**

- `p_133086_` (`int`)
- `p_133087_` (`int`)

**Returns:** `public`

### ClientboundSetChunkCacheCenterPacket

```java
private ClientboundSetChunkCacheCenterPacket(FriendlyByteBuf p_179282_)
```

**Parameters:**

- `p_179282_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133096_)
```

**Parameters:**

- `p_133096_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetChunkCacheCenterPacket> type()
```

**Returns:** `PacketType<ClientboundSetChunkCacheCenterPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133093_)
```

**Parameters:**

- `p_133093_` (`ClientGamePacketListener`)

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
