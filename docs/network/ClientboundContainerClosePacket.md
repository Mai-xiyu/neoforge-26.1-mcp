# ClientboundContainerClosePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundContainerClosePacket>` |  |

## Methods

### ClientboundContainerClosePacket

```java
public ClientboundContainerClosePacket(int p_131933_)
```

**Parameters:**

- `p_131933_` (`int`)

**Returns:** `public`

### ClientboundContainerClosePacket

```java
private ClientboundContainerClosePacket(FriendlyByteBuf p_178820_)
```

**Parameters:**

- `p_178820_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_131941_)
```

**Parameters:**

- `p_131941_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundContainerClosePacket> type()
```

**Returns:** `PacketType<ClientboundContainerClosePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131939_)
```

**Parameters:**

- `p_131939_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`
