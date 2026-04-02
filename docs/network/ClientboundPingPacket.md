# ClientboundPingPacket

**Package:** `net.minecraft.network.protocol.common`
**Type:** class
**Implements:** `Packet<ClientCommonPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundPingPacket>` |  |

## Methods

### ClientboundPingPacket

```java
public ClientboundPingPacket(int p_294778_)
```

**Parameters:**

- `p_294778_` (`int`)

**Returns:** `public`

### ClientboundPingPacket

```java
private ClientboundPingPacket(FriendlyByteBuf p_294565_)
```

**Parameters:**

- `p_294565_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_295570_)
```

**Parameters:**

- `p_295570_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPingPacket> type()
```

**Returns:** `PacketType<ClientboundPingPacket>`

### handle

```java
public void handle(ClientCommonPacketListener p_295189_)
```

**Parameters:**

- `p_295189_` (`ClientCommonPacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`
