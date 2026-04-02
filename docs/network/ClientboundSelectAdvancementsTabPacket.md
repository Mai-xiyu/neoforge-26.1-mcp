# ClientboundSelectAdvancementsTabPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSelectAdvancementsTabPacket>` |  |

## Methods

### ClientboundSelectAdvancementsTabPacket

```java
public ClientboundSelectAdvancementsTabPacket(ResourceLocation p_133006_)
```

**Parameters:**

- `p_133006_` (`ResourceLocation`)

**Returns:** `public`

### ClientboundSelectAdvancementsTabPacket

```java
private ClientboundSelectAdvancementsTabPacket(FriendlyByteBuf p_179198_)
```

**Parameters:**

- `p_179198_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133015_)
```

**Parameters:**

- `p_133015_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSelectAdvancementsTabPacket> type()
```

**Returns:** `PacketType<ClientboundSelectAdvancementsTabPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133012_)
```

**Parameters:**

- `p_133012_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getTab

```java
public ResourceLocation getTab()
```

**Returns:** `ResourceLocation`
