# ClientboundSetEntityMotionPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetEntityMotionPacket>` |  |

## Methods

### ClientboundSetEntityMotionPacket

```java
public ClientboundSetEntityMotionPacket(Entity p_133185_)
```

**Parameters:**

- `p_133185_` (`Entity`)

**Returns:** `public`

### ClientboundSetEntityMotionPacket

```java
public ClientboundSetEntityMotionPacket(int p_133182_, Vec3 p_133183_)
```

**Parameters:**

- `p_133182_` (`int`)
- `p_133183_` (`Vec3`)

**Returns:** `public`

### ClientboundSetEntityMotionPacket

```java
private ClientboundSetEntityMotionPacket(FriendlyByteBuf p_179294_)
```

**Parameters:**

- `p_179294_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133194_)
```

**Parameters:**

- `p_133194_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetEntityMotionPacket> type()
```

**Returns:** `PacketType<ClientboundSetEntityMotionPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133191_)
```

**Parameters:**

- `p_133191_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getXa

```java
public double getXa()
```

**Returns:** `public double`

### getYa

```java
public double getYa()
```

**Returns:** `public double`

### getZa

```java
public double getZa()
```

**Returns:** `public double`
