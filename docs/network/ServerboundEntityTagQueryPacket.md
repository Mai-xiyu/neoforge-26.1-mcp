# ServerboundEntityTagQueryPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundEntityTagQueryPacket>` |  |

## Methods

### ServerboundEntityTagQueryPacket

```java
public ServerboundEntityTagQueryPacket(int p_319836_, int p_319857_)
```

**Parameters:**

- `p_319836_` (`int`)
- `p_319857_` (`int`)

**Returns:** `public`

### ServerboundEntityTagQueryPacket

```java
private ServerboundEntityTagQueryPacket(FriendlyByteBuf p_319956_)
```

**Parameters:**

- `p_319956_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_319826_)
```

**Parameters:**

- `p_319826_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundEntityTagQueryPacket> type()
```

**Returns:** `PacketType<ServerboundEntityTagQueryPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_320580_)
```

**Parameters:**

- `p_320580_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getTransactionId

```java
public int getTransactionId()
```

**Returns:** `public int`

### getEntityId

```java
public int getEntityId()
```

**Returns:** `public int`
