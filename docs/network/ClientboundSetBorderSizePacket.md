# ClientboundSetBorderSizePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetBorderSizePacket>` |  |

## Methods

### ClientboundSetBorderSizePacket

```java
public ClientboundSetBorderSizePacket(WorldBorder p_179243_)
```

**Parameters:**

- `p_179243_` (`WorldBorder`)

**Returns:** `public`

### ClientboundSetBorderSizePacket

```java
private ClientboundSetBorderSizePacket(FriendlyByteBuf p_179245_)
```

**Parameters:**

- `p_179245_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179247_)
```

**Parameters:**

- `p_179247_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetBorderSizePacket> type()
```

**Returns:** `PacketType<ClientboundSetBorderSizePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179251_)
```

**Parameters:**

- `p_179251_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getSize

```java
public double getSize()
```

**Returns:** `public double`
