# ClientboundTagQueryPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundTagQueryPacket>` |  |

## Methods

### ClientboundTagQueryPacket

```java
public ClientboundTagQueryPacket(int p_133497_, CompoundTag p_133498_)
```

**Parameters:**

- `p_133497_` (`int`)
- `p_133498_` (`CompoundTag`)

**Returns:** `public`

### ClientboundTagQueryPacket

```java
private ClientboundTagQueryPacket(FriendlyByteBuf p_179433_)
```

**Parameters:**

- `p_179433_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133508_)
```

**Parameters:**

- `p_133508_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundTagQueryPacket> type()
```

**Returns:** `PacketType<ClientboundTagQueryPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133505_)
```

**Parameters:**

- `p_133505_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getTransactionId

```java
public int getTransactionId()
```

**Returns:** `public int`

### getTag

```java
public CompoundTag getTag()
```

**Returns:** `CompoundTag`

### isSkippable

```java
public boolean isSkippable()
```

**Returns:** `boolean`
