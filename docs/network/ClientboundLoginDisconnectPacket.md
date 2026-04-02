# ClientboundLoginDisconnectPacket

**Package:** `net.minecraft.network.protocol.login`
**Type:** class
**Implements:** `Packet<ClientLoginPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundLoginDisconnectPacket>` |  |

## Methods

### ClientboundLoginDisconnectPacket

```java
public ClientboundLoginDisconnectPacket(Component p_134812_)
```

**Parameters:**

- `p_134812_` (`Component`)

**Returns:** `public`

### ClientboundLoginDisconnectPacket

```java
private ClientboundLoginDisconnectPacket(FriendlyByteBuf p_179820_)
```

**Parameters:**

- `p_179820_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134821_)
```

**Parameters:**

- `p_134821_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundLoginDisconnectPacket> type()
```

**Returns:** `PacketType<ClientboundLoginDisconnectPacket>`

### handle

```java
public void handle(ClientLoginPacketListener p_134818_)
```

**Parameters:**

- `p_134818_` (`ClientLoginPacketListener`)

**Returns:** `public void`

### getReason

```java
public Component getReason()
```

**Returns:** `public Component`
