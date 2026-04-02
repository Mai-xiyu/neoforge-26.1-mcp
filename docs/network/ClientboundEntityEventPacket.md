# ClientboundEntityEventPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundEntityEventPacket>` |  |

## Methods

### ClientboundEntityEventPacket

```java
public ClientboundEntityEventPacket(Entity p_132092_, byte p_132093_)
```

**Parameters:**

- `p_132092_` (`Entity`)
- `p_132093_` (`byte`)

**Returns:** `public`

### ClientboundEntityEventPacket

```java
private ClientboundEntityEventPacket(FriendlyByteBuf p_178843_)
```

**Parameters:**

- `p_178843_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132104_)
```

**Parameters:**

- `p_132104_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundEntityEventPacket> type()
```

**Returns:** `PacketType<ClientboundEntityEventPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132101_)
```

**Parameters:**

- `p_132101_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntity

```java
public Entity getEntity(Level p_132095_)
```

**Parameters:**

- `p_132095_` (`Level`)

**Returns:** `Entity`

### getEventId

```java
public byte getEventId()
```

**Returns:** `public byte`
