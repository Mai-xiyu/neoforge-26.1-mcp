# ClientboundAnimatePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundAnimatePacket>` |  |
| `SWING_MAIN_HAND` | `int` |  |
| `WAKE_UP` | `int` |  |
| `SWING_OFF_HAND` | `int` |  |
| `CRITICAL_HIT` | `int` |  |
| `MAGIC_CRITICAL_HIT` | `int` |  |

## Methods

### ClientboundAnimatePacket

```java
public ClientboundAnimatePacket(Entity p_131616_, int p_131617_)
```

**Parameters:**

- `p_131616_` (`Entity`)
- `p_131617_` (`int`)

**Returns:** `public`

### ClientboundAnimatePacket

```java
private ClientboundAnimatePacket(FriendlyByteBuf p_178590_)
```

**Parameters:**

- `p_178590_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_131626_)
```

**Parameters:**

- `p_131626_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundAnimatePacket> type()
```

**Returns:** `PacketType<ClientboundAnimatePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131623_)
```

**Parameters:**

- `p_131623_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getAction

```java
public int getAction()
```

**Returns:** `public int`
