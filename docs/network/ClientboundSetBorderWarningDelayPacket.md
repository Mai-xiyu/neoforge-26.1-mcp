# ClientboundSetBorderWarningDelayPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetBorderWarningDelayPacket>` |  |

## Methods

### ClientboundSetBorderWarningDelayPacket

```java
public ClientboundSetBorderWarningDelayPacket(WorldBorder p_179255_)
```

**Parameters:**

- `p_179255_` (`WorldBorder`)

**Returns:** `public`

### ClientboundSetBorderWarningDelayPacket

```java
private ClientboundSetBorderWarningDelayPacket(FriendlyByteBuf p_179257_)
```

**Parameters:**

- `p_179257_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179259_)
```

**Parameters:**

- `p_179259_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetBorderWarningDelayPacket> type()
```

**Returns:** `PacketType<ClientboundSetBorderWarningDelayPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179263_)
```

**Parameters:**

- `p_179263_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getWarningDelay

```java
public int getWarningDelay()
```

**Returns:** `public int`
