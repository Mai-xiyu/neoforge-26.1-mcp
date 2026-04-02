# ClientboundLoginCompressionPacket

**Package:** `net.minecraft.network.protocol.login`
**Type:** class
**Implements:** `Packet<ClientLoginPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundLoginCompressionPacket>` |  |

## Methods

### ClientboundLoginCompressionPacket

```java
public ClientboundLoginCompressionPacket(int p_134799_)
```

**Parameters:**

- `p_134799_` (`int`)

**Returns:** `public`

### ClientboundLoginCompressionPacket

```java
private ClientboundLoginCompressionPacket(FriendlyByteBuf p_179818_)
```

**Parameters:**

- `p_179818_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134808_)
```

**Parameters:**

- `p_134808_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundLoginCompressionPacket> type()
```

**Returns:** `PacketType<ClientboundLoginCompressionPacket>`

### handle

```java
public void handle(ClientLoginPacketListener p_134805_)
```

**Parameters:**

- `p_134805_` (`ClientLoginPacketListener`)

**Returns:** `public void`

### getCompressionThreshold

```java
public int getCompressionThreshold()
```

**Returns:** `public int`
