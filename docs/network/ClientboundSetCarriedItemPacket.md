# ClientboundSetCarriedItemPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetCarriedItemPacket>` |  |

## Methods

### ClientboundSetCarriedItemPacket

```java
public ClientboundSetCarriedItemPacket(int p_133072_)
```

**Parameters:**

- `p_133072_` (`int`)

**Returns:** `public`

### ClientboundSetCarriedItemPacket

```java
private ClientboundSetCarriedItemPacket(FriendlyByteBuf p_179280_)
```

**Parameters:**

- `p_179280_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133081_)
```

**Parameters:**

- `p_133081_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetCarriedItemPacket> type()
```

**Returns:** `PacketType<ClientboundSetCarriedItemPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133078_)
```

**Parameters:**

- `p_133078_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getSlot

```java
public int getSlot()
```

**Returns:** `public int`
