# ClientboundClearTitlesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundClearTitlesPacket>` |  |

## Methods

### ClientboundClearTitlesPacket

```java
public ClientboundClearTitlesPacket(boolean p_178781_)
```

**Parameters:**

- `p_178781_` (`boolean`)

**Returns:** `public`

### ClientboundClearTitlesPacket

```java
private ClientboundClearTitlesPacket(FriendlyByteBuf p_178779_)
```

**Parameters:**

- `p_178779_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_178783_)
```

**Parameters:**

- `p_178783_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundClearTitlesPacket> type()
```

**Returns:** `PacketType<ClientboundClearTitlesPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_178787_)
```

**Parameters:**

- `p_178787_` (`ClientGamePacketListener`)

**Returns:** `public void`

### shouldResetTimes

```java
public boolean shouldResetTimes()
```

**Returns:** `public boolean`
