# ClientboundSetTimePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetTimePacket>` |  |

## Methods

### ClientboundSetTimePacket

```java
public ClientboundSetTimePacket(long p_133349_, long p_133350_, boolean p_133351_)
```

**Parameters:**

- `p_133349_` (`long`)
- `p_133350_` (`long`)
- `p_133351_` (`boolean`)

**Returns:** `public`

### ClientboundSetTimePacket

```java
private ClientboundSetTimePacket(FriendlyByteBuf p_179387_)
```

**Parameters:**

- `p_179387_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133360_)
```

**Parameters:**

- `p_133360_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetTimePacket> type()
```

**Returns:** `PacketType<ClientboundSetTimePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133357_)
```

**Parameters:**

- `p_133357_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getGameTime

```java
public long getGameTime()
```

**Returns:** `public long`

### getDayTime

```java
public long getDayTime()
```

**Returns:** `public long`
