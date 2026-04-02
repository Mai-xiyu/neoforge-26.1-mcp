# ServerboundTeleportToEntityPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundTeleportToEntityPacket>` |  |

## Methods

### ServerboundTeleportToEntityPacket

```java
public ServerboundTeleportToEntityPacket(UUID p_134680_)
```

**Parameters:**

- `p_134680_` (`UUID`)

**Returns:** `public`

### ServerboundTeleportToEntityPacket

```java
private ServerboundTeleportToEntityPacket(FriendlyByteBuf p_179794_)
```

**Parameters:**

- `p_179794_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134690_)
```

**Parameters:**

- `p_134690_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundTeleportToEntityPacket> type()
```

**Returns:** `PacketType<ServerboundTeleportToEntityPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134688_)
```

**Parameters:**

- `p_134688_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getEntity

```java
public Entity getEntity(ServerLevel p_134682_)
```

**Parameters:**

- `p_134682_` (`ServerLevel`)

**Returns:** `Entity`
