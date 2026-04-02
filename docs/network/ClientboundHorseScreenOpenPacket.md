# ClientboundHorseScreenOpenPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundHorseScreenOpenPacket>` |  |

## Methods

### ClientboundHorseScreenOpenPacket

```java
public ClientboundHorseScreenOpenPacket(int p_132195_, int p_132196_, int p_132197_)
```

**Parameters:**

- `p_132195_` (`int`)
- `p_132196_` (`int`)
- `p_132197_` (`int`)

**Returns:** `public`

### ClientboundHorseScreenOpenPacket

```java
private ClientboundHorseScreenOpenPacket(FriendlyByteBuf p_178867_)
```

**Parameters:**

- `p_178867_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132206_)
```

**Parameters:**

- `p_132206_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundHorseScreenOpenPacket> type()
```

**Returns:** `PacketType<ClientboundHorseScreenOpenPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132203_)
```

**Parameters:**

- `p_132203_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getInventoryColumns

```java
public int getInventoryColumns()
```

**Returns:** `public int`

### getEntityId

```java
public int getEntityId()
```

**Returns:** `public int`
