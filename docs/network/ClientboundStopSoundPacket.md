# ClientboundStopSoundPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundStopSoundPacket>` |  |

## Methods

### ClientboundStopSoundPacket

```java
public ClientboundStopSoundPacket(ResourceLocation p_133468_, SoundSource p_133469_)
```

**Parameters:**

- `p_133468_` (`ResourceLocation`)
- `p_133469_` (`SoundSource`)

**Returns:** `public`

### ClientboundStopSoundPacket

```java
private ClientboundStopSoundPacket(FriendlyByteBuf p_179426_)
```

**Parameters:**

- `p_179426_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133478_)
```

**Parameters:**

- `p_133478_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundStopSoundPacket> type()
```

**Returns:** `PacketType<ClientboundStopSoundPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133475_)
```

**Parameters:**

- `p_133475_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getName

```java
public ResourceLocation getName()
```

**Returns:** `ResourceLocation`

### getSource

```java
public SoundSource getSource()
```

**Returns:** `SoundSource`
