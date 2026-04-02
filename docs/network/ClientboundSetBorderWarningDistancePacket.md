# ClientboundSetBorderWarningDistancePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetBorderWarningDistancePacket>` |  |

## Methods

### ClientboundSetBorderWarningDistancePacket

```java
public ClientboundSetBorderWarningDistancePacket(WorldBorder p_179267_)
```

**Parameters:**

- `p_179267_` (`WorldBorder`)

**Returns:** `public`

### ClientboundSetBorderWarningDistancePacket

```java
private ClientboundSetBorderWarningDistancePacket(FriendlyByteBuf p_179269_)
```

**Parameters:**

- `p_179269_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179271_)
```

**Parameters:**

- `p_179271_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetBorderWarningDistancePacket> type()
```

**Returns:** `PacketType<ClientboundSetBorderWarningDistancePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179275_)
```

**Parameters:**

- `p_179275_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getWarningBlocks

```java
public int getWarningBlocks()
```

**Returns:** `public int`
