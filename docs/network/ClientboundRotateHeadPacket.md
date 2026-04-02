# ClientboundRotateHeadPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundRotateHeadPacket>` |  |

## Methods

### ClientboundRotateHeadPacket

```java
public ClientboundRotateHeadPacket(Entity p_132967_, byte p_132968_)
```

**Parameters:**

- `p_132967_` (`Entity`)
- `p_132968_` (`byte`)

**Returns:** `public`

### ClientboundRotateHeadPacket

```java
private ClientboundRotateHeadPacket(FriendlyByteBuf p_179193_)
```

**Parameters:**

- `p_179193_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132979_)
```

**Parameters:**

- `p_132979_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundRotateHeadPacket> type()
```

**Returns:** `PacketType<ClientboundRotateHeadPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132976_)
```

**Parameters:**

- `p_132976_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntity

```java
public Entity getEntity(Level p_132970_)
```

**Parameters:**

- `p_132970_` (`Level`)

**Returns:** `public Entity`

### getYHeadRot

```java
public byte getYHeadRot()
```

**Returns:** `public byte`
