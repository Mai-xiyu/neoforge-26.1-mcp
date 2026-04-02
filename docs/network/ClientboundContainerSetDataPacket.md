# ClientboundContainerSetDataPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundContainerSetDataPacket>` |  |

## Methods

### ClientboundContainerSetDataPacket

```java
public ClientboundContainerSetDataPacket(int p_131963_, int p_131964_, int p_131965_)
```

**Parameters:**

- `p_131963_` (`int`)
- `p_131964_` (`int`)
- `p_131965_` (`int`)

**Returns:** `public`

### ClientboundContainerSetDataPacket

```java
private ClientboundContainerSetDataPacket(FriendlyByteBuf p_178825_)
```

**Parameters:**

- `p_178825_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_131974_)
```

**Parameters:**

- `p_131974_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundContainerSetDataPacket> type()
```

**Returns:** `PacketType<ClientboundContainerSetDataPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131971_)
```

**Parameters:**

- `p_131971_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getValue

```java
public int getValue()
```

**Returns:** `public int`
