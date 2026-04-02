# ClientboundSetCameraPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetCameraPacket>` |  |

## Methods

### ClientboundSetCameraPacket

```java
public ClientboundSetCameraPacket(Entity p_133058_)
```

**Parameters:**

- `p_133058_` (`Entity`)

**Returns:** `public`

### ClientboundSetCameraPacket

```java
private ClientboundSetCameraPacket(FriendlyByteBuf p_179278_)
```

**Parameters:**

- `p_179278_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133068_)
```

**Parameters:**

- `p_133068_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetCameraPacket> type()
```

**Returns:** `PacketType<ClientboundSetCameraPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133066_)
```

**Parameters:**

- `p_133066_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntity

```java
public Entity getEntity(Level p_133060_)
```

**Parameters:**

- `p_133060_` (`Level`)

**Returns:** `Entity`
