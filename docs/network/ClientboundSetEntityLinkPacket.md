# ClientboundSetEntityLinkPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetEntityLinkPacket>` |  |

## Methods

### ClientboundSetEntityLinkPacket

```java
public ClientboundSetEntityLinkPacket(Entity p_133164_, Entity p_133165_)
```

**Parameters:**

- `p_133164_` (`Entity`)
- `p_133165_` (`Entity`)

**Returns:** `public`

### ClientboundSetEntityLinkPacket

```java
private ClientboundSetEntityLinkPacket(FriendlyByteBuf p_179292_)
```

**Parameters:**

- `p_179292_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133174_)
```

**Parameters:**

- `p_133174_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetEntityLinkPacket> type()
```

**Returns:** `PacketType<ClientboundSetEntityLinkPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133171_)
```

**Parameters:**

- `p_133171_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getSourceId

```java
public int getSourceId()
```

**Returns:** `public int`

### getDestId

```java
public int getDestId()
```

**Returns:** `public int`
