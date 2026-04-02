# ServerboundAcceptTeleportationPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundAcceptTeleportationPacket>` |  |

## Methods

### ServerboundAcceptTeleportationPacket

```java
public ServerboundAcceptTeleportationPacket(int p_133788_)
```

**Parameters:**

- `p_133788_` (`int`)

**Returns:** `public`

### ServerboundAcceptTeleportationPacket

```java
private ServerboundAcceptTeleportationPacket(FriendlyByteBuf p_179538_)
```

**Parameters:**

- `p_179538_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133797_)
```

**Parameters:**

- `p_133797_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundAcceptTeleportationPacket> type()
```

**Returns:** `PacketType<ServerboundAcceptTeleportationPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_133794_)
```

**Parameters:**

- `p_133794_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`
