# ClientboundTakeItemEntityPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundTakeItemEntityPacket>` |  |

## Methods

### ClientboundTakeItemEntityPacket

```java
public ClientboundTakeItemEntityPacket(int p_133515_, int p_133516_, int p_133517_)
```

**Parameters:**

- `p_133515_` (`int`)
- `p_133516_` (`int`)
- `p_133517_` (`int`)

**Returns:** `public`

### ClientboundTakeItemEntityPacket

```java
private ClientboundTakeItemEntityPacket(FriendlyByteBuf p_179435_)
```

**Parameters:**

- `p_179435_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133526_)
```

**Parameters:**

- `p_133526_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundTakeItemEntityPacket> type()
```

**Returns:** `PacketType<ClientboundTakeItemEntityPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133523_)
```

**Parameters:**

- `p_133523_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getItemId

```java
public int getItemId()
```

**Returns:** `public int`

### getPlayerId

```java
public int getPlayerId()
```

**Returns:** `public int`

### getAmount

```java
public int getAmount()
```

**Returns:** `public int`
