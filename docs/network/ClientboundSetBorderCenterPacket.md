# ClientboundSetBorderCenterPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetBorderCenterPacket>` |  |

## Methods

### ClientboundSetBorderCenterPacket

```java
public ClientboundSetBorderCenterPacket(WorldBorder p_179214_)
```

**Parameters:**

- `p_179214_` (`WorldBorder`)

**Returns:** `public`

### ClientboundSetBorderCenterPacket

```java
private ClientboundSetBorderCenterPacket(FriendlyByteBuf p_179216_)
```

**Parameters:**

- `p_179216_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179218_)
```

**Parameters:**

- `p_179218_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetBorderCenterPacket> type()
```

**Returns:** `PacketType<ClientboundSetBorderCenterPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179222_)
```

**Parameters:**

- `p_179222_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getNewCenterZ

```java
public double getNewCenterZ()
```

**Returns:** `public double`

### getNewCenterX

```java
public double getNewCenterX()
```

**Returns:** `public double`
