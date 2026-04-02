# ClientboundOpenScreenPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundOpenScreenPacket>` |  |

## Methods

### ClientboundOpenScreenPacket

```java
public ClientboundOpenScreenPacket(int p_132616_, MenuType<?> p_132617_, Component p_132618_)
```

**Parameters:**

- `p_132616_` (`int`)
- `p_132617_` (`MenuType<?>`)
- `p_132618_` (`Component`)

**Returns:** `public`

### type

```java
public PacketType<ClientboundOpenScreenPacket> type()
```

**Returns:** `PacketType<ClientboundOpenScreenPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132624_)
```

**Parameters:**

- `p_132624_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getType

```java
public MenuType<?> getType()
```

**Returns:** `public MenuType<?>`

### getTitle

```java
public Component getTitle()
```

**Returns:** `public Component`
