# ClientboundSetHealthPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetHealthPacket>` |  |

## Methods

### ClientboundSetHealthPacket

```java
public ClientboundSetHealthPacket(float p_133238_, int p_133239_, float p_133240_)
```

**Parameters:**

- `p_133238_` (`float`)
- `p_133239_` (`int`)
- `p_133240_` (`float`)

**Returns:** `public`

### ClientboundSetHealthPacket

```java
private ClientboundSetHealthPacket(FriendlyByteBuf p_179301_)
```

**Parameters:**

- `p_179301_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133249_)
```

**Parameters:**

- `p_133249_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetHealthPacket> type()
```

**Returns:** `PacketType<ClientboundSetHealthPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133246_)
```

**Parameters:**

- `p_133246_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getHealth

```java
public float getHealth()
```

**Returns:** `public float`

### getFood

```java
public int getFood()
```

**Returns:** `public int`

### getSaturation

```java
public float getSaturation()
```

**Returns:** `public float`
