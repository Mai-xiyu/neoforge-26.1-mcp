# ClientboundSetBorderLerpSizePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetBorderLerpSizePacket>` |  |

## Methods

### ClientboundSetBorderLerpSizePacket

```java
public ClientboundSetBorderLerpSizePacket(WorldBorder p_179229_)
```

**Parameters:**

- `p_179229_` (`WorldBorder`)

**Returns:** `public`

### ClientboundSetBorderLerpSizePacket

```java
private ClientboundSetBorderLerpSizePacket(FriendlyByteBuf p_179231_)
```

**Parameters:**

- `p_179231_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179233_)
```

**Parameters:**

- `p_179233_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetBorderLerpSizePacket> type()
```

**Returns:** `PacketType<ClientboundSetBorderLerpSizePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179237_)
```

**Parameters:**

- `p_179237_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getOldSize

```java
public double getOldSize()
```

**Returns:** `public double`

### getNewSize

```java
public double getNewSize()
```

**Returns:** `public double`

### getLerpTime

```java
public long getLerpTime()
```

**Returns:** `public long`
